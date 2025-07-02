import { Request, response, Response } from 'express';
import { OpenAIService } from '../services/OpenAiService';

export class OpenAIController {
  static async generateText(req: Request, res: Response): Promise<void> {
    const { prompt } = req.body;
    if (!prompt) {
      res.status(400).json({ message: 'Prompt is required' });
      return;
    }

    try {
      const generatedText = await OpenAIService.generateText(prompt);
      res.json({ generatedText });
    } catch (error) {
      res.status(500).json({ message: 'Failed to generate text from OpenAI' });
    }
  }
  static async sayhello(req:Request,res:Response):Promise<void> {
    try {
      const response = await OpenAIService.sayhello()
      res.send(response)
    } catch (error) {
      throw new Error("error on greeting controller ")
    }
  }
}
