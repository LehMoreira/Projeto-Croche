import { Request, Response } from 'express';
import { produtoRepository } from '../repository/ProdutoRepository';

export const criarProduto = async (req: Request, res: Response) => {
  try {
    const novoProduto = produtoRepository.create(req.body);
    const salvo = await produtoRepository.save(novoProduto);
    res.status(201).json(salvo);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar produto' });
  }
};

export const listarProdutos = async (_req: Request, res: Response) => {
  try {
    const produtos = await produtoRepository.find();
    res.status(200).json(produtos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar produtos' });
  }
};
