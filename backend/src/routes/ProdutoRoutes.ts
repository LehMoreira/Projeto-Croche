import { Router } from 'express';
import { criarProduto, listarProdutos } from '../controllers/ProdutoController';

const router = Router();

router.post('/', criarProduto);
router.get('/', listarProdutos);

export default router;
