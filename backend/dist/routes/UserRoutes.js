"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UsuarioController_1 = require("../controllers/UsuarioController");
const router = express_1.default.Router();
router.post('/', UsuarioController_1.criarUsuario);
router.get('/', UsuarioController_1.listarUsuarios);
router.post('/auth/login', UsuarioController_1.loginUsuario);
exports.default = router;
