import express from 'express';
import router from './routes';

const app = express();
const port = 3000;

app.use(express.json()); // Esta linha precisa ser declarada antes do roteador, para que o EXPRESS analise corretamente o objeto JSON.
app.use(router);

app.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}`);
});
