import { Card, createTheme, Text, Textarea, Input, Button } from "@nextui-org/react";
import { NextUIProvider } from '@nextui-org/react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

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
                    />
                    <Input
                    clearable
                    underlined
                    color="warning"
                    label="Telefone"
                    css={{ marginTop: '65px', w: "350px" }}
                    />
                    <Textarea
                    clearable
                    underlined
                    color="warning"
                    label="Mensagem"
                    css={{ marginTop: '65px', w: '360px' }}
                    />
                </form>
              </Card.Body>

              <Card.Footer css={{ alignItems: 'center', justifyContent: 'center' }}>
                <Button size="sm" color="warning" ghost >
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
