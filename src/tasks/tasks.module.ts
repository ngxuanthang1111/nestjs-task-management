import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TaskRepository } from './task.repository';
import { AuthModule } from '../auth/auth.module';
import { JwtAuthGuard } from '../auth/gaurds/jwt-auth.guard';

@Module({
  imports: [AuthModule, TypeOrmModule.forFeature([TaskRepository])],
  controllers: [TasksController],
  providers: [TasksService, JwtAuthGuard],
})
export class TasksModule {}
