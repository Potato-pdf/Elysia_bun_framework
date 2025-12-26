import { PrismaClient } from "../../generated/prisma/client";
import { User } from "../domain/user";
import { UserDAOInterface } from "../domain/interfaces/user.dao.interface";



export class UsuarioDAO implements UserDAOInterface {
    constructor(private db: PrismaClient) {}
    
    async create(usuario: User): Promise<User> {
        const createdUser = await this.db.user.create({
            data: {
                email: usuario.email,
                password: usuario.password,
                name: usuario.name
            }
        });
        return createdUser as User;
    }
}