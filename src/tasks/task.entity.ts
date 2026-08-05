import { TasksService } from "./tasks.service";
import {  } from 'class-validator'


export enum TaskStatus {
    PENDING = 'PENDING',
    IN_PROGRESS = 'IN PROGRESS',
    DONE = 'DONE',
}

 export class Task{
    id!: string | undefined;
    title!: string | undefined;
    description!:string | undefined;
    status!: TaskStatus; 
}
