
import nodemailer from 'nodemailer';

/**
 * Exemplo de requisição:
 * {
        "assunto": "Assunto", 
        "mensagem": "Mensagem do email"
    }
 */

const sendEmail = async (req, res) => {
    if (req.method !== 'POST') {
        res.status(405).json({ message: 'Método não permitido' });
        return;
    }

    try {

        const {nome, telefone, mensagem } = JSON.parse(req.body);

        var agora = new Date();
        const assunto = 'Mensagem: '+ agora.toLocaleString("pt-br");

        const body = `
          Nome: ${nome}
          Telefone: ${telefone}

          Mensagem: ${mensagem}
        `;


        // Configurar o transporte do Nodemailer
        const transporter = nodemailer.createTransport({
            // Configurações do seu provedor de e-mail (SMTP)
            // Exemplo para o serviço Gmail:
            service: 'Gmail',
            auth: {
                user: 'juliaeluanafreelas',
                pass: 'jylzrrtprgesnfii',
            },
        });

        // Configurar o e-mail a ser enviado
        const mailOptions = {
            from: 'juliaeluanafreelas@gmail.com',
            to: 'luhfraga123@gmail.com',
            subject: assunto,
            text: body
        };

        // Enviar o e-mail
        await transporter.sendMail(mailOptions);

        return res.status(200).json({ message: 'E-mail enviado com sucesso' });

    } catch (error) {
        return res.status(500).json({ message: "Erro ao enviar e-mail" });
    }
};

export default sendEmail;