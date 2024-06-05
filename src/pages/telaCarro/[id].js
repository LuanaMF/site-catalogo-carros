import React, { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import * as router from '../api/router';
import { Card, Text, Button, Image} from "@nextui-org/react";
import Link from "next/link";
import { FaWhatsapp} from 'react-icons/fa';
import NavbarCliente from '@/components/navBar';
import { useRouter } from 'next/router';


function TelaCarro() {
    
  const [carro, setCarro] = useState({
    carro: '',
    imagens: [],
  });

  const { query } = useRouter();

  useEffect(() => {
    if (query.id != undefined) {
        const fetchData = async () => {
            try {
              const response = await router.apiPost({ id: query.id }, 'carro');
              setCarro(response);
            } catch (error) {
              console.log(error);
            }
          };
      
          fetchData();
    }
  }, [query.id]);

  return (
    <>
        <NavbarCliente></NavbarCliente>
        <div>
            <div 
                style={{
                    display: 'block',
                    marginTop: '100px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: '100px',
                    height: '120vh',
                    gap: '0px',
                }}
            >
                <Carousel
                    dynamicHeight
                    width='80%'
                    style={{maxHeight: '100px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', borderRadius: '10px'}}
                    renderArrow={({ type, onClick }) => {
                        const arrowStyle = {
                            color: 'yellow', // Altera a cor das setas para amarelo (um estilo de aviso)
                            // Outros estilos conforme necessário
                        };
                        const isPrev = type === 'prev';
                    return (
                        <div onClick={onClick} style={{...arrowStyle, cursor: 'pointer', position: 'absolute', top: '50%', transform: 'translateY(-50%)', zIndex: '1', backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '50%'}}>
                            {isPrev ? '<' : '>'}
                        </div>
                     );
    }}
>
    {carro.imagens.map((item, index) => (
        <div key={index} style={{backgroundColor: '#002F60'}}>
            <Image objectFit='contain' src={`data:image/png;base64,${item.img}`} />
        </div>
    ))}
</Carousel>

                
                <div>
                <Card css={{ w: '90%', backgroundImage: 'url("/img/bg.png")', color: 'white', backgroundPosition: 'center' }}>
                    <Card.Header css={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <Text css={{color: 'White', fontSize: '50px', fontFamily:'cursive'}}>Saiba mais</Text>
                    </Card.Header>

                    <Card.Divider />

                    <Card.Body >
                        <Text css={{color:'White', fontSize: '20px'}}>
                            {'Marca: '+carro.carro.marca}
                        </Text>
                        <Text css={{color:'White', fontSize: '20px'}}>
                            {'Modelo/Versão: '+carro.carro.modelo_versao}
                        </Text>
                        <Text css={{color:'White', fontSize: '20px'}}>
                            {'Ano de fabricação: '+carro.carro.ano_fabricacao}
                        </Text>
                        <Text css={{color:'White', fontSize: '20px'}}>
                            {'Ano do modelo: '+carro.carro.ano_modelo}
                        </Text>
                        <Text css={{color:'White', fontSize: '20px'}}>
                            {'Quilometragem: '+carro.carro.quilometragem+'km'}
                        </Text>
                        <Text css={{color:'White', fontSize: '20px'}}>
                            {'Combustível: '+carro.carro.combustivel}
                        </Text>
                        <Text css={{color:'White', fontSize: '20px'}}>
                            {'Cambio: '+ (carro.carro.cambio == 'M'? 'Manual': 'Automático')}
                        </Text>
                        <Text css={{color:'White', fontSize: '20px'}}>
                            {'GNV: '+ (carro.carro.gnv == '0'? 'Não': 'Sim')}
                        </Text>
                        <Text css={{color:'White', fontSize: '20px'}}>
                            {'Passagem por Leilão: '+ (carro.carro.leiloado == '0'? 'Não': 'Sim')}
                        </Text>
                        <Text css={{color:'White', fontSize: '20px'}}>
                            {'Observações: '+ carro.carro.observacoes}
                        </Text>
                    </Card.Body>
                    <Card.Divider></Card.Divider>
                    <Card.Footer css={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        
                        <Text css={{textAlign: 'center', marginTop: '-60px', color:'white'}}>
                           Interessado neste carro? Envie sua dúvida pra gente:
                        </Text>
                       
                       <div style={{marginTop: '20px',
                            marginLeft: '-180px'
                        }}>
                            <Link href={"https://wa.me/557582098137?text=Ola!%20Gostaria%20de%20mais%20informações%20sobre%20este%20carro:%20http://localhost:3000/telaCarro/"+carro.carro.id}>
                                <Button rounded color="gradient" auto ghost style={{ margin: '0.5rem' }}>
                                    <FaWhatsapp />
                                </Button>
                            </Link>
                       </div>
                       
                    </Card.Footer>
                </Card>
            </div>
            <footer style={{marginTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'gray'}}>
                © Luana Fraga - luanaf.dev@gmail.com
            </footer>
            </div>
            
        </div>
    </>
  );
}

export default TelaCarro;
