import { Card, createTheme, Text, Textarea, Input, Spacer, Button } from "@nextui-org/react";
import { NextUIProvider } from '@nextui-org/react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

const theme = createTheme({
  type: "light",
  theme: {
    colors: {
      azulMeu: '#2703B6',
      colorCard2: 'white',

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

            <Card justify='center' css={{ w: "450px", h: '600px', borderRadius: '5px'}} >
              <Card.Header css={{ textAlign: 'center', backgroundColor: '$azulMeu'}}>
                    <Text b css={{ display: 'inline-block', margin: '0 auto', color: '$white',  
                        fontFamily: "Tahoma", 
                        fontSize: '50px',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                        letterSpacing: '5px',
                        lineHeight: '1.5'
                }}>
                    Contato
                    </Text>
              </Card.Header>
              <Card.Body css={{ alignItems: 'center', textAlign:'center', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <Text b 
                css={{ 
                    display: 'inline-block', 
                    margin: '0 auto', 
                    color: '$white', 
                    marginTop: '-100px',
                    fontFamily: "arial", 
                    fontSize: '20px',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                    letterSpacing: '1px',
                    lineHeight: '1.5'
                }}>
                    Quer falar direto com a gente?

                    Preencha o formulário o lado e envie-nos um email!

                    Ou, se preferir, nos contate em uma das redes sociais abaixo:
                </Text>
                <Spacer y={2} />
                <Text b 
                css={{ 
                    display: 'inline-block', 
                    margin: '0 auto', 
                    color: '$white', 
                    marginTop: '-10px',
                    fontFamily: "arial", 
                    fontSize: '20px',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                    letterSpacing: '1px',
                    lineHeight: '1.5'
                }}>
                    
                </Text>
                <Spacer y={2} />
                <Text b 
                css={{ 
                    display: 'inline-block',
                    margin: '0 auto', 
                    color: '$white', 
                    marginTop: '-10px',
                    fontFamily: "arial", 
                    fontSize: '20px',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                    letterSpacing: '1px',
                    lineHeight: '1.5'
                }}>
                </Text>
              </Card.Body>
              <Card.Footer css={{ alignItems: 'center', justifyContent: 'center' , backgroundColor: '$azulMeu'}}>
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
