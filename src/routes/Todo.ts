import express, { Request, Response } from 'express';
import formData from '../middleware/UserValidation';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const userRouter = express.Router();


userRouter.post('/', async(req:Request, res:Response) => {
     try {
        const userId = req.body.userId;
        const title = req.body.title;
        const description = req.body.description;
    
        const todo = await prisma.todo.create({
            data: {
              title,
              description,
              userId
            },
          });
          res.json(todo);
     } catch (error) {
        console.log(error);
     }

})

export default  userRouter