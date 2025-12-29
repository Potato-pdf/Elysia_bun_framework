

export class Hash {
    async hash(password: string){
        const passwordHashed = await Bun.password.hash(password)
        return passwordHashed;
    }

    async isMatch(password:string, passwordHashed: string) {
        const isValid = await Bun.password.verify(password, passwordHashed)
        return isValid;
    }
}