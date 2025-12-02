"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cursoRepository = void 0;
const conexao_1 = require("../db/conexao");
const Curso_1 = require("../models/Curso");
exports.cursoRepository = conexao_1.AppDataSource.getRepository(Curso_1.Curso);
