import express, { Request, Response } from 'express';
import openAiRoutes from './routes/openAiRoutes';

const app = express();

app.use(express.json());

app.use('/api/openai', openAiRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('OpenAI API Integration with Express');
});

export default app;
