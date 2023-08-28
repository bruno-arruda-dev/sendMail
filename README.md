
# API para envio de emails

API simples utilizada para enviar emails. Originalmente eu a construí para complementar uma funcionalidade de contato em meu portfólio, no entanto, ela poderá ser utilizada em outros projetos.

- [@Funcionalidade no portfólio](https://portfolio-bruno-kappa.vercel.app/Contact)

- [@Visite meu portfólio pessoal](https://portfolio-bruno-kappa.vercel.app)
## Stacks

**Back-end:** Node, Express, Nodemailer
## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/bruno-arruda-dev/sendMail
```

Entre no diretório do projeto

```bash
  cd sendmail
```

Instale as dependências

```bash
  npm install
```

Configure o SMTP no arquivo"./dao/sendmailDAO.ts"

```bash
  host: 'seu_serviço_de_host',

  port: 465, // Porta

  secure: true, // Se port = 465, true, caso contrário false

  user: 'seuemail@seuemail', // Endereço de email
  
  pass: 'sua_senha', // Senha do email (se for gmail, configurar senha de APP na guia de segurança do gmail)
```

Configure o corpo da sua mensagem no arquivo"./dao/sendmailDAO.ts"

```bash
from: '', // Rementente ex: Bruno Arruda <bruno.arrm@gmail.com>

to: '', // Destinatário

subject: '', // Assunto da mensagem

html: `` // Aqui você pode manipular os textos conforme for necessário.

// O projeto possui exemplo para processamento de tags HTML. Passe-as como string

text: '' // Texto alternativo, será reproduzido pelo seu serviço de email quando o mesmo não conseguir reproduzir tags HTML
```

Inicie o servidor

```bash
  ts-node index.ts
```

Use o método POST no endpoint

```bash
  localhost:3000/sendmail
```
Envie o objeto

```bash
  {
    "name": "seu_nome",
    "contact": "seu_contato",
    "message": "sua_mensagem"
}
```
## Aprendizados

Neste projeto tive a oportunidade de praticar mais a linguagem TypeScript, entender mais sobre os conceitos do NODE com EXPRESS e fixar a arquitetura de um software backend: mesmo que seja simples, como este, é importante manter as boas práticas para que qualquer pessoa consiga entendê-lo.


## Autor

- [@Bruno Arruda](https://www.github.com/bruno-arruda-dev)
## Feedback

Se você tiver algum feedback, sugestão de melhorias, por favor, contribua para o meu crescimento.

