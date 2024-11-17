import express, { NextFunction, Request, Response } from 'express';

const app = express();
const port = 3000;

// parsers
app.use(express.json())
app.use(express.text())


const logger = (req : Request, res : Response, next: NextFunction)=>{
    console.log(req.url, req.method, req.hostname);
    next()
}
app.get('/', logger, (req: Request, res: Response) => {
  res.send('Hello World!');
  
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


export default  app;