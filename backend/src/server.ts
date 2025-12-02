import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { AppDataSource } from './db/conexao';
import userRoutes from './routes/UserRoutes';
import produtoRoutes from './routes/ProdutoRoutes';
import pedidoRoutes from './routes/PedidoRoutes';
import cursoRoutes from './routes/CursoRoutes';
import chatbot from './routes/chatbot';

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173', //comunicação com o front
  credentials: true
}));

app.use('/usuarios', userRoutes);
app.use('/produtos', produtoRoutes);
app.use('/pedidos', pedidoRoutes);
app.use('/cursos', cursoRoutes);
app.use('/chatbot',chatbot);

AppDataSource.initialize()
  .then(() => {
    console.log('Banco conectado com sucesso'); //banco

    app.listen(port, () => {
      console.log(`Aplicação rodando http://localhost:${port}`);//backend
    });
  })
  .catch((err) => {
    console.error('Erro ao conectar ao banco de dados:', err);
  });
