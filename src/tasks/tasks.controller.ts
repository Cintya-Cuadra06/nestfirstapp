import { Body, Controller,Delete, Get, Post, Param, Put, Patch } from '@nestjs/common';
import {TasksService} from './tasks.service'
import { CreateTaskDto, UpdatedTaskDto } from './dto/task.dto'; 

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
//controlador que recibe una peticion de eliminar una tarea
    @Delete( ':id' )
    deleteTask(@Param('id') id: string){ 
        this.tasksService.deleteTask(id)
    }
//controlador que recibe la peticion de actualizar una parte de la tarea, no toda 
    @Patch(':id')
    updateTask(@Param("id") id: string, @Body() updatedFields: UpdatedTaskDto){
   return this.tasksService.updateTask(id, updatedFields)
    }
}
