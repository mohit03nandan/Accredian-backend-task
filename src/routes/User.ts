import express, { Request, Response } from 'express';
import formData from '../middleware/UserValidation';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const userRouter = express.Router();

userRouter.post('/', async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const result = formData.safeParse(data); 
        if (result.success) {
            const newUser = await prisma.user.create({
                data: {
                    username: result.data.username,
                    password: result.data.password,
                    firstName: result.data.firstName,
                    lastName: result.data.lastName,
                }
            });
            console.log(newUser);
            res.status(201).send(newUser);
        } else {
            res.status(400).send({ message: "Invalid parameters" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal server error" });
    }
});

export default userRouter;
