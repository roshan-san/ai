import { Router } from 'express';
import { OpenAIController } from '../controllers/openAiConntroller';

const router = Router();

router.post('/generate', OpenAIController.generateText);
router.post('/sayhello',OpenAIController.sayhello)
export default router;
