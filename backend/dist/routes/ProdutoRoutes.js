"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProdutoController_1 = require("../controllers/ProdutoController");
const router = (0, express_1.Router)();
router.post('/', ProdutoController_1.criarProduto);
router.get('/', ProdutoController_1.listarProdutos);
exports.default = router;
