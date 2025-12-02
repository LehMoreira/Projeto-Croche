"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const Usuario_1 = require("../models/Usuario");
const Produto_1 = require("../models/Produto");
const Pedido_1 = require("../models/Pedido");
const Curso_1 = require("../models/Curso");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    driver: require('mysql2'),
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [Usuario_1.Usuario, Produto_1.Produto, Pedido_1.Pedido, Curso_1.Curso],
    synchronize: true
});
