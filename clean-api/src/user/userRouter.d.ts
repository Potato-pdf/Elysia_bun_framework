import Elysia from "elysia";

export const userRouter = new Elysia({prefix: "/users"})
    .get("/", () => "User list")
    .get("/:id", ({ params }) => `User with ID: ${params.id}`)
    .post("/create", () => "User created");
