import { User } from "./user";
import { PrismaClient } from "../../generated/prisma/client";
import { UserDAOInterface } from "./interfaces/user.dao.interface";
import { UserInterface } from "./interfaces/user.interface";
import { CreateUserDTO } from "./dto/createUser.dto";
import { UpdateUserDTO } from "./dto/updateUser.dto";

export class UserRepository implements UserInterface{
    constructor(private usuarioDAO : UserDAOInterface){}
    
    async create(email: string, password: string, name?: string): Promise<User> {
        const createUserDTO: CreateUserDTO = {
            email,
            password,
            name
        };
        
        return await this.usuarioDAO.create(createUserDTO);
    }
    async findByEmail(email: string): Promise<User | null> {
        return await this.usuarioDAO.findByEmail(email);
    }
    async findById(id: string): Promise<User | null> {
        return await this.usuarioDAO.findById(id);
    }
    async delete(id: string): Promise<void> {
        return await this.usuarioDAO.delete(id)
    }
    async update(user: User): Promise<User> {
        const updateUserDTO: UpdateUserDTO = {
            id: user.id,
            email: user.email,
            password: user.password,
            name: user.name
        };
        
        return await this.usuarioDAO.update(updateUserDTO);
    }
}