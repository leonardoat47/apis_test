import { Injectable, Logger } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import mongoose from 'mongoose';
import { UserDocument, UserSch } from '../schemas';
import { UserDto } from '../dto/user.dto';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);

  constructor(
    @InjectModel('user') private userModel: Model<UserDocument>,
    @InjectConnection('main') private readonly conn: mongoose.Connection,
  ) { }


  //****************************************************************************************//
  async grabaUser(user: UserDto): Promise<UserDto> {
    return this._convertirUserSch(
      await new this.userModel(user).save(),
    );
  }

  //****************************************************************************************//
  async obtieneUsers():
    Promise<UserDto[]> {
    return this.userModel.find()
      .then((docs) => {
        return docs.map((d) => this._convertirUserSch(d));
      })
      .catch((err) => {
        this.logger.error(
          `Error al intentar obtener los usuarios... Error: `,
          err,
        );
        return new Array<UserDto>();
      });
  }
  //****************************************************************************************//
  async editaUser(user: UserDto): Promise<UserDto> {
    return this._convertirUserSch(
      await this.userModel.findByIdAndUpdate(
        { _id: user.id },
        { ...user },
        { new: true },
      ),
    );
  }
  //****************************************************************************************//
  public async borraUser(id: string): Promise<boolean> {
    return this.userModel
      .deleteOne({ _id: id })
      .then(() => true)
      .catch((err) => {
        this.logger.error(
          `Error al intentar borrar el usuario... Error: `,
          err,
        );
        return false;
      });
  }







  
  //****************************************************************************************//
  private _convertirUserSch(user: UserSch): UserDto {
    const userDto = new UserDto();
    userDto.id = user['id'];
    userDto.name = user.name;
    userDto.number = user.number;
    userDto.born_date = user.born_date;
    userDto.addres = user.addres;
    userDto.fisic_pay = user.fisic_pay;
    return userDto;
  }
}