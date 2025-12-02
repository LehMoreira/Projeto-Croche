"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pedidoRepository = void 0;
const conexao_1 = require("../db/conexao");
const Pedido_1 = require("../models/Pedido");
exports.pedidoRepository = conexao_1.AppDataSource.getRepository(Pedido_1.Pedido);
