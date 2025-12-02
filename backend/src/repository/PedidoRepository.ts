import { AppDataSource } from '../db/conexao';
import { Pedido } from '../models/Pedido';

export const pedidoRepository = AppDataSource.getRepository(Pedido);
