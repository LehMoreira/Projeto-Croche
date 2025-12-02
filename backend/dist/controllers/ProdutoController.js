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
exports.listarProdutos = exports.criarProduto = void 0;
const ProdutoRepository_1 = require("../repository/ProdutoRepository");
const criarProduto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const novoProduto = ProdutoRepository_1.produtoRepository.create(req.body);
        const salvo = yield ProdutoRepository_1.produtoRepository.save(novoProduto);
        res.status(201).json(salvo);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao criar produto' });
    }
});
exports.criarProduto = criarProduto;
const listarProdutos = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const produtos = yield ProdutoRepository_1.produtoRepository.find();
        res.status(200).json(produtos);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao listar produtos' });
    }
});
exports.listarProdutos = listarProdutos;
