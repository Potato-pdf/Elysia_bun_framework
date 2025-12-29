import {Elysia, t }from "elysia";
import { createUserController } from "../server/dependencies"; 
import { password } from "bun";

export const userRouter = new Elysia({prefix: "/users"})
    .get("/", () => "User list")
    .get("/:id", ({ params }) => `User with ID: ${params.id}`)
    .post("/create", createUserController.run.bind(createUserController),{k
});
