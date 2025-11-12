
import { PrismaClient } from "@prisma/client"
import { TodoRepository } from "../TodoRepo"
import { TodoService } from "../TodoService"

const prisma = new PrismaClient()
const todoRepo = new TodoRepository(prisma)
const todoService = new TodoService(todoRepo)

beforeAll(async() => {
    await prisma.$connect()
})

// beforeEach(async() => {
//     await prisma.todo.deleteMany()
// })

afterAll(async () => {
    await prisma.todo.deleteMany()
    await prisma.$disconnect()
})

describe('Crate Todo', () => {
    it('should create a new todo', async() => {
        const todo = await todoService.create('Buy Milk', 'Buy milk from store')
        expect(todo.title).toBe("Buy Milk")
        expect(todo.description).toBe("Buy milk from store");
        expect(todo.completed).toBe(false)

    })
    it('should Get All Todo from databases', async() => {
    todoService.create("Buy Milk","Buy Milk from store")
    todoService.create("Buy egg", "Buy eggs from store")
    const todos =await todoService.getAll()
    expect(todos.length).toBe(2)
    })
    it('should get todo by id ', async () => {
        const todo = await todoService.create('Buy milk', "Buy milk from store")
        const byId = await todoService.getById(todo.id)
        expect(byId).not.toBe(null)
        if(byId ===null) return
        expect(todo.title).toBe("Buy milk")
        expect(todo.description).toBe("Buy milk from store")
    })
    it('should return null if todo does not exist',async () => {
        const todo = await todoService.getById(1)
        expect(todo).toBe(null)
    })

    it('should delete todo with id',async () => {
        const todo = await todoService.create("Buy Milk", "Buy Milk from store")
        const byId = await todoService.getById(todo.id)
        expect(byId).not.toBe(null)
        if (byId === null) return 
        await todoService.delete(byId.id)
        const deletedTodo= await todoService.getById(todo.id)
        expect(deletedTodo).toBeNull()
    })
})

