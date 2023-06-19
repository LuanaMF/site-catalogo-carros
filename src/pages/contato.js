import { Card, createTheme, Text, Textarea, Input, Button } from "@nextui-org/react";
import { NextUIProvider } from '@nextui-org/react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { useState } from "react";

const theme = createTheme({
  type: "light",
  theme: {
    colors: {
      azulMeu: '#2703B6',
      colorCard2: 'white',
      textColor: '#333',
      yellowColor: '#f5b921'
    },
  }
});

export default function TelaContatos() {

  const [email, setEmail] = useState({
    nome: '',
    telefone: '',
    mensagem: ''
  });

  async function enviaEmail() {
    const response = await fetch('/api/services/emailService', 
      {
        method: 'POST',
        body: JSON.stringify(email)
      }
    ).then((value) => {
     
    });

    }

  return (
    <>
      <style>{`
        html, body {
          background-color: #f5b921;
        }
      `}</style>

      <NextUIProvider theme={theme}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '0px',
            }}
          >
            {/* Primeiro Card com formulário */}
            <Card justify='center' css={{ w: "400px", h: 'auto'}} >

              <Card.Header css={{ textAlign: 'center' }}>
                <Text b css={{ display: 'inline-block', margin: '0 auto', color: '$black' }}>Email</Text>
              </Card.Header>

              <Card.Divider />

              <Card.Body css={{ alignItems: 'center' }}>
                <form>
                    <Input
                    clearable
                    underlined
                    color="warning"
                    label="Nome"
                    css={{ marginTop: '10px', w: "350px", textEmphasisColor: '$black' }}
                    onChange={(e) => email.nome = e.target.value}
                    />
                    <Input
                    clearable
                    underlined
                    color="warning"
                    label="Telefone"
                    css={{ marginTop: '65px', w: "350px" }}
                    onChange={(e) => email.telefone = e.target.value}
                    />
                    <Textarea
                    clearable
                    underlined
                    color="warning"
                    label="Mensagem"
                    css={{ marginTop: '65px', w: '360px' }}
                    onChange={(e) => email.mensagem = e.target.value}
                    />
                </form>
              </Card.Body>

              <Card.Footer css={{ alignItems: 'center', justifyContent: 'center' }}>
                <Button size="sm" color="warning" ghost onPress={enviaEmail} >
                    Enviar
                </Button>
              </Card.Footer>

            </Card>

            {/* Segundo Card com texto */}
            <Card justify='center' css={{ w: "450px", h: '650px', borderRadius: '5px'}} >

              <Card.Header css={{ textAlign: 'center', justifyContent: 'center', backgroundColor: '$azulMeu'}}></Card.Header>
              
              <Card.Body >
              </Card.Body>

              <Card.Footer css={{ alignItems: 'center', justifyContent: 'center', marginTop:'30px', backgroundColor: '$azulMeu' }}>
                <Button rounded color="gradient" auto ghost css={{ margin: '0.5rem' }}>
                    <FaWhatsapp />
                </Button>
                <Button rounded color="gradient" auto ghost css={{ margin: '0.5rem' }}>
                    <FaInstagram />
                </Button>
              </Card.Footer>

            </Card>
          </div>
        </div>
      </NextUIProvider>
    </>
  );
}
