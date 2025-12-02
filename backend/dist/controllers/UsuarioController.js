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
exports.loginUsuario = exports.listarUsuarios = exports.criarUsuario = void 0;
const UsuarioRepository_1 = require("../repository/UsuarioRepository");
const criarUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const novoUsuario = UsuarioRepository_1.usuarioRepository.create(req.body);
        const salvo = yield UsuarioRepository_1.usuarioRepository.save(novoUsuario);
        res.status(201).json(salvo);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao criar usuário' });
    }
});
exports.criarUsuario = criarUsuario;
const listarUsuarios = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuarios = yield UsuarioRepository_1.usuarioRepository.find();
        res.status(200).json(usuarios);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao listar usuários' });
    }
});
exports.listarUsuarios = listarUsuarios;
const loginUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, senha } = req.body;
    if (!email || !senha) {
        return res.status(400).json({ message: 'Email e senha são obrigatórios' });
    }
    try {
        const usuario = yield UsuarioRepository_1.usuarioRepository.findOneBy({ email });
        if (!usuario || usuario.senha !== senha) {
            return res.status(401).json({ message: 'Email ou senha incorretos' });
        }
        return res.status(200).json({ message: 'Login bem-sucedido' });
    }
    catch (error) {
        return res.status(500).json({ message: 'Erro ao fazer login' });
    }
});
exports.loginUsuario = loginUsuario;
