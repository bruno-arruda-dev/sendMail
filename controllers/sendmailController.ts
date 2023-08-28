import { Request, Response } from 'express';

interface IPostMail {
    post: (req: Request, res: Response) => void;
}

const sendmailController: IPostMail = {
    post: async (req: Request, res: Response) => {
        const sendmail = req.body;
        console.log('sendmail:', sendmail);
        res.send('Inserido com sucesso!');
    },
};

export default sendmailController;