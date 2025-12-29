import { t } from "elysia"

export const CreateUserDTO = {body : t.Object({
        email: t.String(),
        password: t.String(),
        name: t.String(),
    })
}