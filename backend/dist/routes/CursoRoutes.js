"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CursoController_1 = require("../controllers/CursoController");
const router = (0, express_1.Router)();
router.post('/', CursoController_1.criarCurso);
router.get('/', CursoController_1.listarCursos);
exports.default = router;
