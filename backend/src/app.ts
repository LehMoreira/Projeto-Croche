import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import routes from './routes';
import { AppDataSource } from './db/conexao';
import 'reflect-metadata';

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

AppDataSource.initialize()
  .then(() => console.log('Datasource inicializada com sucesso'))
  .catch(err => console.error('Erro ao inicializar datasource:', err));

app.use(routes);

export default app;
