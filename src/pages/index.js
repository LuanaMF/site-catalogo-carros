// pages/index.js

import React from 'react';
import { Grid, Card, Image, Text } from '@nextui-org/react';
import NavbarCliente from '@/components/navBar';
import { FaQuestion  } from 'react-icons/fa';


export default function Home() {
  const styleLabel = {
    justifyContent: 'center', 
    alignItems: 'center',
    display: 'flex', 
    fontWeight: 'bolder', 
    fontFamily: 'sans-serif', 
    fontSize: '30px',
   }



  return (
    <>
      <NavbarCliente></NavbarCliente>
    <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center', fontFamily: ''}}>
      <Grid.Container gap={23} justify="center">

        <Grid>
          <Card style={{ w: '100%',  background: 'transparent'}}>
            <Card.Header css={styleLabel}>
              Quem somos
            </Card.Header>
            <Card.Body css={{fontSize: '20px'}}>

              <div>
                <Image width={'85px'} src='/img/interrogacao.png' css={{marginBottom: '10px'}}></Image>
              </div>
              
              <Text>Bem-vindo à Carro Venda! 
              Somos uma empresa líder no mercado de venda e revenda de veículos novos e seminovos. 
              Desde a nossa fundação em 2015, temos nos dedicado a oferecer uma experiência de compra 
              única e transparente, com um portfólio diversificado de veículos de alta qualidade.</Text>
              
            </Card.Body>
          </Card>
        </Grid>

        <Grid >
          <Card css={{ w: '100%' ,  background: 'transparent'}}>
            <Card.Header css={styleLabel}>
              O que fazemos
            </Card.Header>
            <Card.Body>
              <Image width={'85px'} src='/img/info.png' css={{marginBottom: '10px'}}></Image>
              <Text>
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              </Text>
            </Card.Body>
          </Card>
        </Grid>

        <Grid >
          <Card css={{ w: '100%',  background: 'transparent' }}>
            <Card.Header css={styleLabel}>
              Por que escolher a Carro Venda
            </Card.Header>
            <Card.Body>
              <Image width={'85px'} src='/img/estrela.jpg' css={{marginBottom: '10px'}}></Image>
              <Text>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
            </Card.Body>
          </Card>
        </Grid>

        <Grid >
          <Card css={{ w: '100%',  background: 'transparent' }}>
            <Card.Header css={styleLabel}>
              Nossa localização
            </Card.Header>
            <Card.Body>
            <Image width={'85px'} src='/img/loc.jpg' css={{marginBottom: '10px'}}></Image>
            <Text>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
            </Card.Body>
          </Card>
        </Grid>

      </Grid.Container>
    </div>
    </>
    
  );
}


