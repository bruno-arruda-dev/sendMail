const nodemailer = require('nodemailer');
interface ISendmail {
    name?: string;
    contact?: string;
    message?: string;
}

const transport = nodemailer.createTransport({
    host:'',
    port:'',
    secure: false,
    auth: {
        user:'', // Insetir endereço de email
        pass: '', // Inserir a senha (para gmail, gerar senha de app nas configurações de segurança do gmail)
    },
})

const sendmail = async (data: ISendmail): Promise<void> => {

    transport.sendMail ({
        from: '',
        to: `Telefone ou Email informado ${data.contact}`,
        subject: 'Nova chamada no portfólio',
        html:``,
        text: `Nova mensagem : ${data.message}`
    })
    .then(() => console.log('Email enviado com sucesso!'))
    .catch((err: string) => console.log('Erro ao enviar email', err))
    
};

export default sendmail;