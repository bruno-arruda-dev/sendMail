"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json()); // Esta linha precisa ser declarada antes do roteador, para que o EXPRESS analise corretamente o objeto JSON.
app.use(routes_1.default);
app.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}`);
});
