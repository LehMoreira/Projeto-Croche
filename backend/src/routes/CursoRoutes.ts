import { Router } from 'express';
import { criarCurso, listarCursos } from '../controllers/CursoController';

const router = Router();

router.post('/', criarCurso);
router.get('/', listarCursos);

export default router;