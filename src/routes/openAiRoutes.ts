import { Router } from 'express';
import { OpenAIController } from '../controllers/openAiConntroller';

const router = Router();

router.post('/generate', OpenAIController.generateText);

export default router;
