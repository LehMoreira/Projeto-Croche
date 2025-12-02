import { AppDataSource } from '../db/conexao';
import { Curso } from '../models/Curso';

export const cursoRepository = AppDataSource.getRepository(Curso);