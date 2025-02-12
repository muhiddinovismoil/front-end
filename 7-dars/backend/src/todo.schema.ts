import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export enum Status {
  TODO = 'todo',
  DONE = 'done',
  INPROGRESS = 'inProgress',
}

@Schema()
export class Todo extends Document {
  @Prop({ require: true })
  title: string;
  @Prop({ require: false })
  description: string;
  @Prop({
    required: true,
    enum: Status,
    default: Status.TODO,
  })
  status: string;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
