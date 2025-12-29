import { UserRepository } from "../user/domain/user.repository";
import { CreateUserUSeCase } from "../user/application/create.usecase";
import { CreateUserController } from "../user/infrestructure/controllers/create.controller";
import { Hash } from "../services/hashing-service";


const userRepository = new UserRepository();
const hashService = new Hash();
const createUser = new CreateUserUSeCase(userRepository, hashService);
export const createUserController = new CreateUserController(createUser);