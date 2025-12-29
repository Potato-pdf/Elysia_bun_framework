import {Elysia, t }from "elysia";
import { createUserController } from "../server/dependencies"; 
import { CreateUserDTO } from "./domain/dto/createUser.dto";

export const userRouter = new Elysia({prefix: "/users"})
    .get("/", () => "User list")
    .get("/:id", ({ params }) => `User with ID: ${params.id}`)
    .post("/create", createUserController.run.bind(createUserController),CreateUserDTO);
