import { Request, Response } from 'express';
import { usuarioRepository } from '../repository/UsuarioRepository';

export const criarUsuario = async (req: Request, res: Response) => {
  try {
    const novoUsuario = usuarioRepository.create(req.body);
    const salvo = await usuarioRepository.save(novoUsuario);
    res.status(201).json(salvo);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
};

export const listarUsuarios = async (_req: Request, res: Response) => {
  try {
    const usuarios = await usuarioRepository.find();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar usuários' });
  }
};
export const loginUsuario = async (req: Request, res: Response) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ message: 'Email e senha são obrigatórios' });
  }

  try {
    const usuario = await usuarioRepository.findOneBy({ email });

    if (!usuario || usuario.senha !== senha) {
      return res.status(401).json({ message: 'Email ou senha incorretos' });
    }

    return res.status(200).json({ message: 'Login bem-sucedido' });
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao fazer login' });
  }
};
