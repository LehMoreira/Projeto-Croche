import { Router } from 'express';
import { criarPedido, listarPedidos } from '../controllers/PedidoController';

const router = Router();

router.post('/', criarPedido);
router.get('/', listarPedidos);

export default router;
