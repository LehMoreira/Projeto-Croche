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
exports.listarCursos = exports.criarCurso = void 0;
const CursoRepository_1 = require("../repository/CursoRepository");
const criarCurso = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const novoCurso = CursoRepository_1.cursoRepository.create(req.body);
        const cursoSalvo = yield CursoRepository_1.cursoRepository.save(novoCurso);
        res.status(201).json(cursoSalvo);
    }
    catch (error) {
        console.error('Erro ao criar curso:', error);
        res.status(500).json({ error: 'Erro ao criar curso' });
    }
});
exports.criarCurso = criarCurso;
const listarCursos = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cursos = yield CursoRepository_1.cursoRepository.find();
        res.status(200).json(cursos);
    }
    catch (error) {
        console.error('Erro ao listar cursos:', error);
        res.status(500).json({ error: 'Erro ao listar cursos' });
    }
});
exports.listarCursos = listarCursos;
