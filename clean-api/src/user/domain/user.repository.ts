import { User } from "./user";
import { PrismaClient } from "../../generated/prisma/client";
import { UserDAOInterface } from "./interfaces/user.dao.interface";
import { UserInterface } from "./interfaces/user.interface";



export class UserRepository implements UserInterface{
    constructor(private usuarioDAO : UserDAOInterface){}
    async create(email: string, password: string, name?: string): Promise<User> {
        const nuevoUsuario = new User(
            crypto.randomUUID(),  // Genera el ID
            email,
            password,
            name,
            new Date()  // Fecha de creación
        );
        return await this.usuarioDAO.create(nuevoUsuario)
    }
    async findByEmail(email: string): Promise<User | null> {
        return await this.usuarioDAO.findByEmail(email);
    }
    async findById(id: string): Promise<User | null> {
        return await this.usuarioDAO.findById(id);
    }
    async delete(id: string): Promise<void> {
        throw new Error("Method not implemented")
    }
    async update(user: User): Promise<User> {
        throw new Error("Method not implemented")
    }
}