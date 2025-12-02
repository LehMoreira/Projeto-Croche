// src/routes/chatbot.ts
import { Router } from 'express';
import { runGeminiChat } from '../utils/gemini';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const { mensagem } = req.body;

    if (!mensagem) {
      return res.status(400).json({ error: 'Campo vazio, por favor digite sua pergunta' });
    }

    const reply = await runGeminiChat(mensagem);

    res.json({ reply });
  } catch (error: any) {
    console.error('Erro ao consultar o Gemini:', error?.mensagem || error);
    res.status(500).json({ error: 'Erro ao processar a mensagem' });
  }
});

export default router;
