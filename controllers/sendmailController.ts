import { Request, Response } from 'express';
import sendmail from '../dao/sendmailDAO';

interface IPostMail {
    post: (req: Request, res: Response) => void;
}

const sendmailController: IPostMail = {
    post: async (req: Request, res: Response) => {
        try {
            const result = await sendmail(req.body);
            console.log(req.body);
            res.send(`${req.body} inserido com sucesso!`);
        } catch (error) {
            console.error('Erro ao enviar e-mail:', error);
            res.status(500).send('Erro ao enviar e-mail');
        }
    },
};

export default sendmailController;