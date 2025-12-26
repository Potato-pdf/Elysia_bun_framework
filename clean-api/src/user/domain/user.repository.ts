import { User } from "./user";
import { PrismaClient } from "../../generated/prisma/client";
import { UserDAOInterface } from "./interfaces/user.dao.interface";
import { UserInterface } from "./interfaces/user.interface";



export class UserRepository implements UserInterface{
    constructor(private usuarioDAO : UserDAOInterface){}
    async create(email: string, password: string, name?: string): Promise<User> {
        const nuevoUsuario = new User(
            crypto.randomUUID(),  // ← Genera ID
            email,
            password,
            name,
            new Date()
        );
        return await this.usuarioDAO.create(nuevoUsuario)
        throw new Error("Method not implemented.")

    }
    async findByEmail(email: string): Promise<User | null> {
        throw new Error("Method not implemented.")
    }
    async findById(id: string): Promise<User | null> {
        throw new Error("Method not implemented.")
    }
    async delete(id: string): Promise<void> {
        throw new Error("Method not implemented")
    }
    async update(user: User): Promise<User> {
        throw new Error("Method not implemented")
    }
}