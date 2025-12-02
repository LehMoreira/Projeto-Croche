import express from 'express';
import { criarUsuario, listarUsuarios, loginUsuario } from '../controllers/UsuarioController';

const router = express.Router();

router.post('/', criarUsuario);
router.get('/', listarUsuarios);
router.post('/auth/login', loginUsuario);

export default router;
