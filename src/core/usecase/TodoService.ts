import { Todo } from "../entity/Todo";
import { ITodoRepository } from "../infrastructure/ITodoRepository";
import { TodoRepository } from "../infrastructure/TodoRepo";

export class TodoService{
    constructor(private TodoRepository: ITodoRepository) { }
    
    async create(title: string, description: string):Promise<Todo> {
        return this.TodoRepository.create(title, description)
    }

    async getAll():Promise<Todo[]> {
        return this.TodoRepository.getAll()
    }
    async getById(id:number): Promise<Todo |null>{
        return this.TodoRepository.getById(id)
    }
    async delete(id: number): Promise<void |null>{
        return this.TodoRepository.delete(id)
    }
}