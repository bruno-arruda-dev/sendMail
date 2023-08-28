import nodemailer, { SendMailOptions } from 'nodemailer';

interface ISendmail {
    name?: string;
    contact?: string;
    message?: string;
}

const transporter = nodemailer.createTransport({
    host: '', // SMTP do serviço desejado
    port: 465, // Porta
    secure: true, // Se port = 465, true, caso contrário false
    service: '',
    auth: {
        user: '', // Endereço de email
        pass: '', // Senha do email (se for gmail, configurar senha de APP na guia de segurança do gmail)
    },
});

const sendmail = async (data: ISendmail): Promise<string> => {
    const mailOptions: SendMailOptions = {
        from: '',
        to: '',
        subject: '',
        html: `
            <h1>Nova mensagem através do seu portfólio</h1>
            <h3>Nome: ${data.name ? data.name : 'Usuário não declarou o nome.'}\n\n</h3>
            <p>Mensagem: ${data.message ? data.message : 'Usuário não digitou uma mensagem.'}\n\n</p>
            <p>Contato: ${data.contact ? data.contact : 'Usuário não deixou contato.'}</p>
        `,
        text: `Nova mensagem através do seu portfólio: ${data.message}`, // Texto alternativo caso o serviço de email não consiga processar HTML
    };

    try {
        await transporter.sendMail(mailOptions);
        return 'Email enviado com sucesso!';
    } catch (err) {
        console.log('Erro ao enviar email', err);
        throw new Error('Erro ao enviar email');
    }
};

export default sendmail;