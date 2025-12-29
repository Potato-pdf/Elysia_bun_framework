import { t } from "elysia"

export const UpdateUserDTO = {body : t.Object({
        id: t.String(),
        email: t.String(),
        password: t.String(),
        name: t.String(),
    })
}