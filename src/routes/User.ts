import express, { Request, Response } from 'express';
import formData from '../middleware/UserValidation';
const userRouter = express.Router();



userRouter.post('/', (req: Request, res: Response) => {
    try {
        const data = req.body;
        console.log("data",data)
        const result = formData.safeParse(data);
        if(result.success) {
            res.status(200).send({Message:"Success!"});
        }
        else {
            res.status(400).send({message:"Invalid parameters"});
        }
    } catch (error) {
        res.send(error)
    }
});

export default userRouter;
