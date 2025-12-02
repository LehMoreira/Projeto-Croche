import { DataSource } from 'typeorm';
import { Usuario } from '../models/Usuario';
import { Produto } from '../models/Produto';
import { Pedido } from '../models/Pedido';
import { Curso } from '../models/Curso';
export const AppDataSource = new DataSource({
  type: 'mysql',
  driver: require('mysql2'),
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Usuario, Produto, Pedido,Curso],
  synchronize: true
});
