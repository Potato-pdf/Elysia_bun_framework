import {Elysia } from 'elysia'
import { userRouter } from '../user/userRouter'

export class Server {
    private app: Elysia
    
    constructor() {
        this.app = new Elysia()
        this.app.group("/api/v1", (app) => {
            return app.use(userRouter)
        })
    }
    public start(){
        this.app.listen(Bun.env.PORT || 3000, () => {
            console.log(`Server is running on port ${Bun.env.PORT || 3000}`)
        }
    )}
}