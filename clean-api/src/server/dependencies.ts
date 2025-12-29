import { UserRepository } from "../user/domain/user.repository";
import { CreateUserUSeCase } from "../user/application/create.usecase";
import { CreateUserController } from "../user/infrestructure/controllers/create.controller";
import { UsuarioDAO } from "../user/infrestructure/user.dao";
import { PrismaClient } from "../generated/prisma/client";

const prisma = new PrismaClient();
const userDAO = new UsuarioDAO(prisma);
const userRepository = new UserRepository(userDAO);
const createUser = new CreateUserUSeCase(userRepository);
export const createUserController = new CreateUserController(createUser);