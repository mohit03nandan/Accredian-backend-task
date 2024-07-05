import express, { Request, Response } from 'express';
const userRouter = express.Router();

userRouter.get('/', (req: Request, res: Response) => {
    res.send('Received GET request to /user');
});


userRouter.post('/', (req: Request, res: Response) => {
    const data = req.body;
    console.log('Received POST data:', data);
    res.send('Received POST request to /user');
});

export default userRouter;
