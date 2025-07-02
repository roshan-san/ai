import { OpenAIController } from 'controllers/openAiConntroller';
import { Router } from 'express';

const router = Router();

router.post('/generate', OpenAIController.generateText);

export default router;
