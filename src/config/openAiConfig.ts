import { OpenAI } from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const openaiobj = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
});

export default openaiobj;
