import express from 'express';
import router from './routes';

const app = express();
const port = 3000;

app.use(router);
app.use(express.json());

app.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}`);
});