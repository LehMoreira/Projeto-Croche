import { Request, Response } from 'express';
import { cursoRepository } from '../repository/CursoRepository';

export const criarCurso = async (req: Request, res: Response) => {
  try {
    const novoCurso = cursoRepository.create(req.body);
    const cursoSalvo = await cursoRepository.save(novoCurso);
    res.status(201).json(cursoSalvo);
  } catch (error) {
    console.error('Erro ao criar curso:', error);
    res.status(500).json({ error: 'Erro ao criar curso' });
  }
};

export const listarCursos = async (_req: Request, res: Response) => {
  try {
    const cursos = await cursoRepository.find();
    res.status(200).json(cursos);
  } catch (error) {
    console.error('Erro ao listar cursos:', error);
    res.status(500).json({ error: 'Erro ao listar cursos' });
  }
};