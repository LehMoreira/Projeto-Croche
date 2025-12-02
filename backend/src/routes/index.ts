import { Router } from 'express';
import usuarioRoutes from './UserRoutes';
import produtoRoutes from './ProdutoRoutes';
import pedidoRoutes from './PedidoRoutes';
import cursoRoutes from './CursoRoutes';
import chatbotRoutes from './chatbot';

const router = Router();

router.use('/usuarios', usuarioRoutes);
router.use('/produtos', produtoRoutes);
router.use('/pedidos', pedidoRoutes);
router.use('/cursos', cursoRoutes);
router.use('/chatbot', chatbotRoutes);

export default router;
