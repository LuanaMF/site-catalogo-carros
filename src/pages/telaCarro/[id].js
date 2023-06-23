import React, { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import * as router from '../api/router';
import { Card, Text, Button, Spacer} from "@nextui-org/react";
import Link from "next/link";
import { FaWhatsapp} from 'react-icons/fa';
import ModalIncluirCliente from '@/components/ModalIncluirCliente';

function TelaCarro() {
    
  const [carro, setCarro] = useState({
    carro: '',
    imagens: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await router.apiPost({ id: 1 }, 'carro');
        setCarro(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
        <div>
            <div 
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: '100px',
                    height: '120vh',
                    gap: '0px'
                }}
            >
                <Carousel dynamicHeight width='55%'>
                    {carro.imagens.map((item, index) => (
                        <div key={index}>
                            <img src={`data:image/png;base64,${item.img}`} />
                        </div>
                    ))}
                </Carousel>
                
            </div>
            <div>
                <Card css={{ w: "400px", h: 'auto', marginTop: '-750px', marginLeft: '1000px' }}>
                    <Card.Header>
                        <Text>Informações</Text>
                    </Card.Header>

                    <Card.Divider />

                    <Card.Body>
                        <Text>
                            {'Marca: '+carro.carro.marca}
                        </Text>
                        <Text>
                            {'Modelo/Versão: '+carro.carro.modelo_versao}
                        </Text>
                        <Text>
                            {'Ano de fabricação: '+carro.carro.ano_fabricacao}
                        </Text>
                        <Text>
                            {'Ano do modelo: '+carro.carro.ano_modelo}
                        </Text>
                        <Text>
                            {'Quilometragem: '+carro.carro.quilometragem+'km'}
                        </Text>
                        <Text>
                            {'Combustível: '+carro.carro.combustivel}
                        </Text>
                        <Text>
                            {'Cambio: '+ (carro.carro.cambio == 'M'? 'Manual': 'Automático')}
                        </Text>
                        <Text>
                            {'GNV: '+ (carro.carro.gnv == '0'? 'Não': 'Sim')}
                        </Text>
                        <Text>
                            {'Passagem por Leilão: '+ (carro.carro.leiloado == '0'? 'Não': 'Sim')}
                        </Text>
                        <Text>
                            {'Observações: '+ carro.carro.observacoes}
                        </Text>
                    </Card.Body>
                    <Card.Divider></Card.Divider>
                    <Card.Footer>
                        
                        <Text css={{textAlign: 'center', marginTop: '-60px'}}>
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
            <ModalIncluirCliente></ModalIncluirCliente>
        </div>
    </>
  );
}

export default TelaCarro;
