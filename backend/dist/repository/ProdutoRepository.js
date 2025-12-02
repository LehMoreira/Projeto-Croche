"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.produtoRepository = void 0;
const conexao_1 = require("../db/conexao");
const Produto_1 = require("../models/Produto");
exports.produtoRepository = conexao_1.AppDataSource.getRepository(Produto_1.Produto);
