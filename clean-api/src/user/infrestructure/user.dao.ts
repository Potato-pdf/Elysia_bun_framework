import { PrismaClient } from "../../generated/prisma/client";
import { User } from "../domain/user";
import { UserDAOInterface } from "../domain/interfaces/user.dao.interface";
import { CreateUserDTO } from "../domain/dto/createUser.dto";
import { UpdateUserDTO } from "../domain/dto/updateUser.dto";

export class UsuarioDAO implements UserDAOInterface {
    constructor(private db: PrismaClient) {}
    
    async create(data: CreateUserDTO): Promise<User> {
        // Prisma genera automáticamente id (uuid) y createdAt (now)
        const createdUser = await this.db.user.create({
            data: {
                email: data.email,
                password: data.password,
                name: data.name
            }
        });
        return createdUser as User;
    }
    async findByEmail(email: string): Promise<User | null> {
        const userFound = await this.db.user.findUniqueOrThrow({where: {email}})
        return userFound as User
    }
    
    async findById(id: string): Promise<User | null> {
        const userFound = await this.db.user.findUniqueOrThrow({where: {id}})
        return userFound as User
    }

    async update(data: UpdateUserDTO): Promise<User> {
        const updatedUser = await this.db.user.update({
            where: { id: data.id },
            data: {
                email: data.email,
                password: data.password,
                name: data.name
            }
        });
        return updatedUser as User;
    }
    
    async delete(id: string): Promise<void> {
        await this.db.user.delete({
            where: { id }
        });
    }
}
