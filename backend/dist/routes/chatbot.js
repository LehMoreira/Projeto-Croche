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
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/chatbot.ts
const express_1 = require("express");
const gemini_1 = require("../utils/gemini");
const router = (0, express_1.Router)();
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { mensagem } = req.body;
        if (!mensagem) {
            return res.status(400).json({ error: 'Campo vazio, por favor digite sua pergunta' });
        }
        const reply = yield (0, gemini_1.runGeminiChat)(mensagem);
        res.json({ reply });
    }
    catch (error) {
        console.error('Erro ao consultar o Gemini:', (error === null || error === void 0 ? void 0 : error.mensagem) || error);
        res.status(500).json({ error: 'Erro ao processar a mensagem' });
    }
}));
exports.default = router;
