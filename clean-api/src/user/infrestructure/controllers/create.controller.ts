import { status } from "elysia";
import { CreateUserUSeCase } from "../../application/create.usecase";


export class CreateUserController{
    constructor(
        private createUser: CreateUserUSeCase
    ){}
    async run({body}:any){
        try {
            const user = await this.createUser.run(body.email,body.password, body.name)
        } catch (e) {
            const error = e as Error
            return{
                status : 500,
                message : error.message
            }
        }
    }
}