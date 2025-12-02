"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserRoutes_1 = __importDefault(require("./UserRoutes"));
const ProdutoRoutes_1 = __importDefault(require("./ProdutoRoutes"));
const PedidoRoutes_1 = __importDefault(require("./PedidoRoutes"));
const CursoRoutes_1 = __importDefault(require("./CursoRoutes"));
const chatbot_1 = __importDefault(require("./chatbot"));
const router = (0, express_1.Router)();
router.use('/usuarios', UserRoutes_1.default);
router.use('/produtos', ProdutoRoutes_1.default);
router.use('/pedidos', PedidoRoutes_1.default);
router.use('/cursos', CursoRoutes_1.default);
router.use('/chatbot', chatbot_1.default);
exports.default = router;
