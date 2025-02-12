import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo } from './todo.schema';

@Injectable()
export class AppService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<Todo>) {}

  async createTodoService(todo: Todo): Promise<Todo> {
    const newTodo = new this.todoModel(todo);
    return newTodo.save();
  }

  async getAllTodoService(): Promise<Todo[]> {
    return this.todoModel.find().exec();
  }

  async findBy(findBy: string) {
    return this.todoModel.find({ status: findBy });
  }

  async getByIfTodoService(id: string): Promise<Todo> {
    return this.todoModel.findById(id).exec();
  }

  async updateTodoService(id: string, todo: Partial<Todo>): Promise<Todo> {
    const updatedTodo = await this.todoModel
      .findByIdAndUpdate(id, todo, { new: true })
      .exec();

    if (!updatedTodo) {
      throw new NotFoundException('Todo not found');
    }

    return updatedTodo;
  }

  async deleteTodoService(id: string): Promise<any> {
    const deletedTodo = await this.todoModel.deleteOne({
      _id: id,
    });
    return deletedTodo.deletedCount;
  }
}
