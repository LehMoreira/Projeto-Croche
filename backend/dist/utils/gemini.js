"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runGeminiChat = void 0;
const generative_ai_1 = require("@google/generative-ai");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const genAI = new generative_ai_1.GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
const runGeminiChat = (userMessage) => __awaiter(void 0, void 0, void 0, function* () {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
    const chat = model.startChat({
        history: [
            {
                role: 'user',
                parts: [
                    { text: "Você é um assistente especializado apenas em crochê." },
                    { text: "Responda apenas perguntas relacionadas ao crochê." },
                    { text: `Se for um "oi", "tudo bem?", comprimentos você pode responder e dizer: "Estou pronto para falar sobre o crochê, qual sua dúvida?"` },
                    { text: `Se tentarem fugir falar de assuntos fora do crochê, responda educadamente: "Sou seu assistente especializado apenas em crochê, não sei nada sobre esse tema. Mas posso te ajudar com o crochê :)"` },
                    { text: `Se a pergunta não estiver relacionada ao crochê, recuse educadamente dizendo:
                  "Desculpe, só posso responder perguntas sobre crochê."` },
                ],
            },
        ],
    });
    const result = yield chat.sendMessage(userMessage);
    const response = yield result.response;
    return response.text();
});
exports.runGeminiChat = runGeminiChat;
