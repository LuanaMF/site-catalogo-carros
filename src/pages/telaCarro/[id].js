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
                    gap: '0px'
                }}
            >
                <Carousel dynamicHeight width='55%' style={{maxHeight: '100px'}}>
                    {carro.imagens.map((item, index) => (
                        <div key={index}>
                            <Image objectFit='contain' src={`data:image/png;base64,${item.img}`} />
                        </div>
                    ))}
                </Carousel>
                
                <div>
                <Card css={{ w: '55%' }}>
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
            </div>
           
        </div>
    </>
  );
}

export default TelaCarro;
