import express, { Request, Response } from 'express';
import userRouter from './routes/User'; 

const app = express();

app.use(express.json()); 


app.use('/user', userRouter);


app.get('/', (req: Request, res: Response) => {
    res.send('Hello, World!');
});



const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';
app.listen(port, () => {
    console.log(`Express server listening at http://${host}:${port}`);
});
