import { AppDataSource } from '../db/conexao';
import { Usuario } from '../models/Usuario';

export const usuarioRepository = AppDataSource.getRepository(Usuario);
