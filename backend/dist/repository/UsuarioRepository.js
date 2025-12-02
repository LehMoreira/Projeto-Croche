"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarioRepository = void 0;
const conexao_1 = require("../db/conexao");
const Usuario_1 = require("../models/Usuario");
exports.usuarioRepository = conexao_1.AppDataSource.getRepository(Usuario_1.Usuario);
