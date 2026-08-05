import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import { v4 } from 'uuid'
import { UpdatedTaskDto } from './dto/task.dto';
@Injectable()
export class TasksService {

//Simula una DB real mientras no hay conexion a una 
  private tasks: Task[] = [{
            id: '1',
            title: 'first task',
            description: 'some task',
            status: TaskStatus.PENDING,
        }]
//devuelve todas las tareas almacenadas
    getAllTasks(){
        return this.tasks;
    }
//crea una nueva tarea con base en esos parametros, con un id totalmente unico
    createTask(title: string, description: string, ){
        const task = {
            id: v4(),
            title,
            description,
            status: TaskStatus.PENDING
        };
        this.tasks.push(task); 

        return task;
    }

    getTaskById(id: string): Task {
        return this.tasks.find(task => task.id === id)!
    }
    updateTask(id: string, updatedFields: UpdatedTaskDto): Task{
        const task = this.getTaskById(id)
        const newTask = Object.assign(task, updatedFields)
        this.tasks = this.tasks.map(task => task.id === id ? newTask : task )
        return newTask;
    }




    deleteTask(id: string){
       this.tasks = this.tasks.filter(task => task.id !== id)
    }

}
