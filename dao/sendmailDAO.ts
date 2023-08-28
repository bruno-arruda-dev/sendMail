interface ISendmail {
    name?: string;
    contact?: string;
    message?: string;
}

const sendmail = async (data: ISendmail): Promise<void> => {
    // Lógica para enviar o e-mail
    console.log('Enviando e-mail:', data);
    // Implemente a lógica real de envio de e-mail aqui
};

export default sendmail;