export interface HashInterface {
    hash(password: string): Promise<string>;
    isMatch(password:string, passwordHashed: string): Promise<boolean>
}