import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

  export type DimensionDocument = DimensionSch & Document;

  @Schema()
  export class DimensionSch {
    @Prop({ required: true })
    nombre: string;
    @Prop({ required: true })
    codigo: string;
  }
  export const DimensionSchema = SchemaFactory.createForClass(DimensionSch);
  