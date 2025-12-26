import { PrismaClient } from "../../generated/prisma/client";
import { User } from "../domain/user";
import { UserInterface } from "../domain/user.interface";



export class UsuarioDAO implements UserInterface {
    constructor(private db: PrismaClient) {}
    async create(email: string, password: string, name?: string): Promise<User> {
       const createdUser = await this.db.user.create({
            data: {
                email:email,
                password:password,
                name:name
            }
        });
        return createdUser as User
    }
}