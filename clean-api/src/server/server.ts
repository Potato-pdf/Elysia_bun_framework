import {Elysia } from 'elysia'

export class Server {
    private app: Elysia
    
    constructor() {
        this.app = new Elysia()
    }
    public start(){
        this.app.listen(Bun.env.PORT || 3000, () => {
            console.log(`Server is running on port ${Bun.env.PORT || 3000}`)
        }
    )}
}