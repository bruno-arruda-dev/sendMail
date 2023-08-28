"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const transporter = nodemailer_1.default.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    service: 'gmail',
    auth: {
        user: 'bruno.sendmail@gmail.com',
        pass: 'ezethicktirdwxbs', // Senha do email (se for gmail, configurar senha de APP na guia de segurança do gmail)
    },
});
const sendmail = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const mailOptions = {
        from: 'Meu Portfólio <bruno.sendmail@gmail.com>',
        to: 'bruno.arrm@gmail.com',
        subject: 'Nova chamada no portfólio',
        html: `<h1>Nova mensagem através do seu portfólio</h1><p>${data.message}</p>`,
        text: `Nova mensagem através do seu portfólio: ${data.message}`, // Texto alternativo caso o serviço de email não consiga processar HTML
    };
    try {
        yield transporter.sendMail(mailOptions);
    }
    catch (err) {
        console.log('Erro ao enviar email', err);
    }
});
exports.default = sendmail;
