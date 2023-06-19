import { Card, createTheme, Text, Textarea, Input, Button, Modal, Loading, Spacer } from "@nextui-org/react";
import { NextUIProvider } from '@nextui-org/react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { useState } from "react";
import {FcCheckmark, FcCancel} from 'react-icons/fc'
import Link from "next/link";

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

  const [isLoading, setIsLoading] = useState(false);

  const [alertProps, setAlertProps] = useState({
    mensagem: 'Email enviado com sucesso!',
    icon: <FcCheckmark size={80}></FcCheckmark>
  })

  // Mascara do input de telefone para ficar bunitin
  const mascara = (e) => {{
    const textoAtual = e.target.value;
    let textoAjustado;
    
    textoAjustado = textoAtual.replace(/(\d{2})(\d{5})(\d{4})/,
                        function( regex, arg1, arg2, arg3) {
                        return '('+arg1+')' + ' '+ arg2 + '-' + arg3 ;
    });
    e.target.value = textoAjustado;
    email.telefone = e.target.value;
  }}

  //Função do botão enviar
  async function enviaEmail() {

    if(email.nome != '' && email.telefone != '' && email.mensagem != ''){

      //Abre loading
      document.body.style.backgroundColor = 'white';
      document.getElementById('divCards').style.display = 'none';
      setIsLoading(true);

      //Chama serviço de enviar email
      const response = await fetch('/api/services/emailService', 
        {
          method: 'POST',
          body: JSON.stringify(email)
        }
      ).then((value) => {
        //Mostra modal de sucesso
        alertProps.mensagem = 'Email enviado com sucesso!';
        alertProps.icon = <FcCheckmark size={80}></FcCheckmark>
        setVisible(true);
      });

      // Fecha loading
      setIsLoading(false);
      document.body.style.backgroundColor = '#f5b921';
      document.getElementById('divCards').style.display = 'flex';

    }
    else{
      alertProps.mensagem = 'Por favor preencha todos os campos!';
      alertProps.icon = <FcCancel size={80}></FcCancel>
      setVisible(true);
    }
  }

  const [visible, setVisible] = useState(false);

  const closeHandler = () => {
    setVisible(false);
  };

  return (
    <>
      <style>{`
        html, body {
          background-color: #f5b921;
        }
      `}</style>

      <NextUIProvider theme={theme}>
        {/* Modal que to usando como alert */}
        <Modal noPadding open={visible} onClose={closeHandler} css={{h:'200px'}}>
          <Modal.Body css={{justifyContent: 'center', alignItems: 'center'}}>
            {alertProps.icon}
            <Text css={{marginBottom: '80px'}}>
              {alertProps.mensagem}
            </Text>
          </Modal.Body>
        </Modal>
        
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <div
            id="divCards"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '0px',
            }}
          >
            <Card className='card' justify='center' css={{ w: "400px", h: 'auto' }}>

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
                    maxLength={14}
                    css={{ marginTop: '20px', w: "350px" }}
                    onChange={(e) => mascara(e)}
                  />
                  <Textarea
                    clearable
                    underlined
                    color="warning"
                    label="Mensagem"
                    css={{ marginTop: '20px', w: '360px' }}
                    onChange={(e) => email.mensagem = e.target.value}
                  />
                </form>
              </Card.Body>

              <Card.Footer css={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <Button size="sm" color="warning" ghost onPress={enviaEmail} css={{ marginBottom: '0.5rem' }}>
                  Enviar
                </Button>

                <Spacer y={1}></Spacer>

                <div style={{justifyContent: 'center'}}>
                  <Text>
                    Ou, se preferir, contate-nos via:
                  </Text>
                </div>

                <div>
                  <Button rounded color="gradient" auto ghost style={{ marginBottom: '-50px !important', marginLeft:'65px !important', margin: '0.5rem' }}>
                      <FaWhatsapp />
                  </Button>

                  <Link href="https://www.instagram.com/sneto_veiculos/" css={{  marginBottom: '0.5rem' }}>
                    <Button rounded color="gradient" auto ghost css={{  margin: '0.5rem' }}>
                      <FaInstagram />
                    </Button>
                  </Link>
                </div>
                
              </Card.Footer>

            </Card>
            
          </div>
          {/* Renderiza o componente Loading se isLoading for verdadeiro */}
          {isLoading && (
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <Loading size="xl"/>
                </div>
          )}
        </div>
        
      </NextUIProvider>
    </>
  );
}
