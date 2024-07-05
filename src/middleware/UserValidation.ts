import { z } from "zod"

const formData = z.object({
    username:z.string(),
    password: z.string(),
    firstName:z.string(),
    lastName: z.string(),

})


export default formData