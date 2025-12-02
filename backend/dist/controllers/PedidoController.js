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
exports.listarPedidos = exports.criarPedido = void 0;
const PedidoRepository_1 = require("../repository/PedidoRepository");
const criarPedido = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const novoPedido = PedidoRepository_1.pedidoRepository.create(req.body);
        const salvo = yield PedidoRepository_1.pedidoRepository.save(novoPedido);
        res.status(201).json(salvo);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao criar pedido' });
    }
});
exports.criarPedido = criarPedido;
const listarPedidos = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pedidos = yield PedidoRepository_1.pedidoRepository.find();
        res.status(200).json(pedidos);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao listar pedidos' });
    }
});
exports.listarPedidos = listarPedidos;
