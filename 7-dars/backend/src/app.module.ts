import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoModel } from './todo.model';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/todo'),
    TodoModel,
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
