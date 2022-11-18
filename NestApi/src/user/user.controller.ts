import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { from, Observable } from 'rxjs';
import { Public } from 'src/decorators/public.decorator';
import { UserDto } from './dto/user.dto';
import { UserService } from './providers/user.service';


@Controller('user')
export class UserController {
  private readonly logger = new Logger(UserController.name);

  constructor(private _userService: UserService) { }
  //****************************************************************************************//
  @Public()
  @Post() async grabaUser(
    @Body() user: UserDto,
  ): Promise<{ message: string; user: UserDto; } | { message: string }> {
    return this._userService
      .grabaUser(user)
      .then((numUser) => {
        return {
          message: 'El usuario se registró de manera exitosa',
          user: numUser,
        };
      })
      .catch((error) => {
        return { message: 'Error al intentar registrar el usuario    ERROR->  ' + error };
      });
  } 
  //****************************************************************************************//
  @Public()
  @Get('/lista')
  obtieneUsers(@Param() params): Observable<
    { message: string; user: UserDto } | { message: string }
  > {
    return from(
      this._userService
        .obtieneUsers()
        .then((numUsers) => { 
          return {
            message: 'Se obtuvieron los usuarios de manera exitosa',
            users: [...numUsers],
          };
        })
        .catch(() => {
          return { message: 'Error al intentar obtener los usuarios' };
        }),
    );
  }
  //****************************************************************************************//
  @Public()
  @Delete(':id')
  borraUser(@Param() params): Observable<{ message: string; }> {
    return from(
      this._userService
        .borraUser(params.id)
        .then((resp) => { 
          return {
            message: 'usuario eliminado',
            id:params.id,
          };
        })
        .catch(() => {
          return { message: 'Error al intentar eliminar usuario' };
        }),
    );
  }
        
  //****************************************************************************************//
  @Public()
  @Patch()
  async editaUser(
    @Body() user: UserDto,
  ): Promise<{ message: string; user: UserDto; } | { message: string }> {
    return this._userService
      .editaUser(user)
      .then((numUser) => {
        return {
          message: 'El usuario se actualizó de manera exitosa',
          user: numUser,
        };
      })
      .catch((error) => {
        return { message: 'Error al intentar actualizar el usuario' + error.message };
      });
  }
}