import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export const runGeminiChat = async (userMessage: string): Promise<string> => {
  const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

  const chat = model.startChat({
    history: [
      {
        role: 'user',
        parts: [ //comandos de treino
          { text: "Você é um assistente especializado apenas em crochê." },
          { text: "Responda apenas perguntas relacionadas ao crochê." },
          { text:`Se for um "oi", "tudo bem?", comprimentos você pode responder e dizer: "Estou pronto para falar sobre o crochê, qual sua dúvida?"` },
          {text: `Se tentarem fugir falar de assuntos fora do crochê, responda educadamente: "Sou seu assistente especializado apenas em crochê, não sei nada sobre esse tema. Mas posso te ajudar com o crochê :)"`},
          { text: `Se a pergunta não estiver relacionada ao crochê, recuse educadamente dizendo:
                  "Desculpe, só posso responder perguntas sobre crochê."` },
        ],
      },
    ],
  });

  const result = await chat.sendMessage(userMessage);
  const response = await result.response;
  return response.text();
};
