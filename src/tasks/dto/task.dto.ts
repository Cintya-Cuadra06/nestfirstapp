import { TaskStatus } from "../task.entity"
import { IsNotEmpty, IsString, MinLength } from 'class-validator'

 export class CreateTaskDto{

    //validaciones para la creacion de una tarea
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    title!: string
    description!: string
}

export class UpdatedTaskDto{
    title?: string;
    description?: string;
    status?: TaskStatus;
}