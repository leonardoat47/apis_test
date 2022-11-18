import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

  export type UserDocument = UserSch & Document;

  @Schema()
  export class UserSch {
    @Prop({ required: true })
    name: string;
    @Prop({ required: true })
    last_name: string;
    @Prop({ required: true })
    number: string;
    @Prop({ required: true })
    born_date: string;
    @Prop({ required: true })
    addres: string;
    @Prop({ required: true })
    fisic_pay: boolean;
  }
  export const UserSchema = SchemaFactory.createForClass(UserSch);
  