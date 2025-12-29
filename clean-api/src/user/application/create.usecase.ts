import { HashInterface } from "../../services/interfaces/hash.interfaces";
import { UserInterface } from "../domain/interfaces/user.interface";

export class CreateUserUSeCase{
    constructor(
        private userRepository : UserInterface,
        private hash: HashInterface
    ){}
    async run (email:string, password: string, name:string){
        if (!email.includes('@')) {
            throw new Error('Email inválido');
            }
        
        if (password.length < 8) {
            throw new Error('Password debe tener mínimo 8 caracteres');
            }
        const existingUser = await this.userRepository.findByEmail(email);
        if (existingUser) {
            throw new Error('El email ya está registrado');
        }
        
        const hashedPassword = await this.hash.hash(password);

        return await this.userRepository.create(email, hashedPassword, name);
    }
}