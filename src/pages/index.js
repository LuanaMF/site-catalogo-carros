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
    fontSize: '100px',
    h:'300px',
    backgroundColor: '#447277',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    textFillColor: 'transparent'
   }



  return (
    <>
      <NavbarCliente></NavbarCliente>
    <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
      <Grid.Container gap={23} justify="center">

        <Grid >
          <Card style={{ w: '80%',  background: 'transparent'}}>
            <Card.Header css={styleLabel}>
              Quem somos
            </Card.Header>
            <Card.Body css={{ fontSize: '20px', display: 'flex', alignItems: 'center' }}>
              <Grid.Container gap={2} justify="center">
                <Grid xs={6}>
                  <Image width={'200px'} src='/img/interrogacao.png' ></Image>
                </Grid>
                <Grid xs={6}>
                    <Text size='$xl' css={{marginTop: '-20px'}}>
                      Bem-vindo à Carro Venda! 
                      Somos uma empresa líder no mercado de venda e revenda de veículos novos e seminovos. 
                      Desde a nossa fundação em 2015, temos nos dedicado a oferecer uma experiência de compra 
                      única e transparente, com um portfólio diversificado de veículos de alta qualidade.
                  </Text>
                </Grid>
              </Grid.Container>
              
              
            </Card.Body>


          </Card>
        </Grid>

        <Grid >
          <Card css={{ w: '100%' ,  background: 'transparent'}}>
            <Card.Header css={styleLabel}>
              O que fazemos
            </Card.Header>
            <Card.Body css={{ fontSize: '20px', display: 'flex', alignItems: 'center' }}>
              <Grid.Container gap={2} justify="center">
                <Grid xs={6}>

                  <Image width={'200px'} src='/img/info.png' css={{marginBottom: '10px'}}></Image>
                </Grid>
                <Grid xs={6}>
                  <Text>
                      Na Carro Venda, nossa missão é conectar compradores com veículos que atendam perfeitamente suas necessidades e desejos. Oferecemos uma ampla gama de carros novos e seminovos, cuidadosamente selecionados e inspecionados para garantir a melhor qualidade e desempenho. Além disso, proporcionamos uma experiência de compra sem complicações, com serviços de financiamento e assistência pós-venda de primeira classe.
                  </Text>
                </Grid>
              </Grid.Container>
              
            </Card.Body>
          </Card>
        </Grid>

        <Grid >
          <Card css={{ w: '100%',  background: 'transparent' }}>
            <Card.Header css={styleLabel}>
              Por que escolher a Carro Venda?
            </Card.Header>
            <Card.Body css={{ fontSize: '20px', display: 'flex', alignItems: 'center' }}>
              <Grid.Container gap={2} justify="center">
                <Grid xs={6}>
                  <Image width={'200px'} src='/img/estrela.png' css={{marginBottom: '10px'}}></Image>
                </Grid>
                <Grid xs={6}>
                  <Text>
                    <Text size={'$2xl'} >
                      Escolher a Carro Venda significa optar por:
                      
                        <li style={{fontWeight: 'bold'}}>Qualidade e Confiabilidade:</li>
                          <Text css={{marginLeft: '30px'}}>Todos os nossos veículos passam por rigorosos processos de inspeção e manutenção.</Text>
                        <li style={{fontWeight: 'bold'}}>Transparência: </li>
                        <Text css={{marginLeft: '30px'}}>Nossos preços são justos e claros, sem taxas ocultas.</Text>
                        <li style={{fontWeight: 'bold'}}>Atendimento ao Cliente</li>
                        <Text css={{marginLeft: '30px'}}>Nossa equipe está comprometida em oferecer o melhor suporte antes, durante e após a compra.</Text>
                        <li style={{fontWeight: 'bold'}}>Facilidade de Compra: </li>
                        <Text css={{marginLeft: '30px'}}>Oferecemos diversas opções de financiamento para tornar seu sonho de carro novo uma realidade.</Text>
                        <li style={{fontWeight: 'bold'}}>Variedade: </li>
                        <Text css={{marginLeft: '30px'}}>Com um portfólio diversificado, temos o carro certo para cada tipo de cliente.</Text>
                      
                    </Text>
                  </Text>
                </Grid>
              </Grid.Container>
              
            </Card.Body>
          </Card>
        </Grid>

        <Grid >
          <Card css={{ w: '100%',  background: 'transparent' }}>
            <Card.Header css={styleLabel}>
              Nossa localização
            </Card.Header>
            <Card.Body css={{ fontSize: '20px', display: 'flex', alignItems: 'center' }}>
              <Grid.Container gap={2} justify="center">
                <Grid xs={6}>
                  <Image width={'150px'} src='/img/loc.png' css={{marginBottom: '10px'}}></Image>

                </Grid>
                <Grid xs={6}>
                  <Text>  <li>Rua: Rua das rosas</li>
                          <li>Número: 2233</li>
                          <li>Bairro: Nova Orleans</li></Text>
                </Grid>
              </Grid.Container>
              
            </Card.Body>
          </Card>
        </Grid>

      </Grid.Container>
    </div>
    </>
    
  );
}


