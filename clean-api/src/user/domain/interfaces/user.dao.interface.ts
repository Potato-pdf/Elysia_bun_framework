import { User } from "../user";
import { CreateUserDTO } from "../dto/createUser.dto";
import { UpdateUserDTO } from "../dto/updateUser.dto";

export interface UserDAOInterface {
    create(data: CreateUserDTO): Promise<User>;
    findByEmail(email: string): Promise<User | null>;
    findById(id: string): Promise<User | null>;
    update(data: UpdateUserDTO): Promise<User>;
    delete(id: string): Promise<void>;
}