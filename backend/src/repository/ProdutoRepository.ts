import { AppDataSource } from '../db/conexao';
import { Produto } from '../models/Produto';

export const produtoRepository = AppDataSource.getRepository(Produto);
