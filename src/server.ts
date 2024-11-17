import app from './app';
import { Server } from 'http';
import { Request, Response } from 'express';
import express from 'express';

const port = 5000;

let server: Server;

async function bootstrap() {
  server = app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

// Middleware to parse JSON body
app.use(express.json());

app.post('/', (req: Request, res: Response) => {
  console.log(req.body);
  res.send('Data received');
});

bootstrap();

export default app;
