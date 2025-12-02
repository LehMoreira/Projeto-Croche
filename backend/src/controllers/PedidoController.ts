import { Request, Response } from 'express';
import { pedidoRepository } from '../repository/PedidoRepository';

export const criarPedido = async (req: Request, res: Response) => {
  try {
    const novoPedido = pedidoRepository.create(req.body);
    const salvo = await pedidoRepository.save(novoPedido);
    res.status(201).json(salvo);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar pedido' });
  }
};

export const listarPedidos = async (_req: Request, res: Response) => {
  try {
    const pedidos = await pedidoRepository.find();
    res.status(200).json(pedidos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar pedidos' });
  }
};
