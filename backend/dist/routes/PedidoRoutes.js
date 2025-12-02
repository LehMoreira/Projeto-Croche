"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PedidoController_1 = require("../controllers/PedidoController");
const router = (0, express_1.Router)();
router.post('/', PedidoController_1.criarPedido);
router.get('/', PedidoController_1.listarPedidos);
exports.default = router;
