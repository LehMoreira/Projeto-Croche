"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const conexao_1 = require("./db/conexao");
const UserRoutes_1 = __importDefault(require("./routes/UserRoutes"));
const ProdutoRoutes_1 = __importDefault(require("./routes/ProdutoRoutes"));
const PedidoRoutes_1 = __importDefault(require("./routes/PedidoRoutes"));
const CursoRoutes_1 = __importDefault(require("./routes/CursoRoutes"));
const chatbot_1 = __importDefault(require("./routes/chatbot"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: 'http://localhost:5173', //comunicação com o front
    credentials: true
}));
app.use('/usuarios', UserRoutes_1.default);
app.use('/produtos', ProdutoRoutes_1.default);
app.use('/pedidos', PedidoRoutes_1.default);
app.use('/cursos', CursoRoutes_1.default);
app.use('/chatbot', chatbot_1.default);
conexao_1.AppDataSource.initialize()
    .then(() => {
    console.log('Banco conectado com sucesso'); //banco
    app.listen(port, () => {
        console.log(`Aplicação rodando http://localhost:${port}`); //backend
    });
})
    .catch((err) => {
    console.error('Erro ao conectar ao banco de dados:', err);
});
