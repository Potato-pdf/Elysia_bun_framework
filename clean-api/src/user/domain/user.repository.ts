import { User } from "./user";
import { UserInterface } from "./user.interface";
import { PrismaClient } from "@prisma/client";



export class UserRepository implements UserInterface{
        constructor(private db: PrismaClient) {}
    async create(email: string, password: string, name?: string): Promise<User> {
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