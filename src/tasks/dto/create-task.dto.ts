import { IsNotEmpty } from 'class-validator';

export class CreateTaskDTO {
  title: string;

  @IsNotEmpty({ message: 'description is empting' })
  description: string;
}
