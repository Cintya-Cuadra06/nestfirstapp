import { Body, Controller, Get, Post } from '@nestjs/common';
import {TasksService} from './tasks.service'
import { CreateTaskDto } from './dto/task.dto'; 
@Controller('tasks')
export class TasksController {
//inyecta el servicio para poder leer la logica de las tareas
    constructor(private tasksService: TasksService){}

//devuelve todas las tareas registradas 
    @Get()
    getAllTasks(){
       return this.tasksService.getAllTasks();
    }
//nuevo controller
//recibe una nueva peticion de crear una nueva tarea 
    @Post()

    createTask(@Body() newTask: CreateTaskDto){
     return this.tasksService.createTask(newTask.title, newTask.description);
    }
}
