import { z } from "zod"

const formData = z.object({
    email:z.string(),
    firstName:z.string(),
    lastName: z.string(),
    password: z.string()
})


export default formData