import { User } from "./user";
export interface UserInterface {

    create(email: string, password: string, name?: string): Promise<User>;
    findByEmail(email: string): Promise<User | null>;
    findById(id: string): Promise<User | null>;
    update(user: User): Promise<User>;
    delete(id: string): Promise<void>;
}