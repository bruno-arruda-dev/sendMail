import express from 'express';
import router from './routes';
import cors from 'cors';

// Configuração do CORS
const corsOptions = {
    origin: [
        'https://portfolio-bruno-kappa.vercel.app',
        'http://localhost:3000',
        'http://localhost:3001',
    ],
    optionsSuccessStatus: 200,
};

const app = express();
const port = 3000;

app.use(cors(corsOptions));
app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}`);
});
