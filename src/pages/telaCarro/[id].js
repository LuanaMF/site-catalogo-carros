import React, { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import * as router from '../api/router';
import { Card, Text} from "@nextui-org/react";

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
                            {'Quilometragem: '+carro.carro.quilometragem}
                        </Text>
                        <Text>
                            {'Combustível: '+carro.carro.modelo_versao}
                        </Text>
                        <Text>
                            {'Cambio: '+ (carro.carro.cambio == 'M'? 'Manual': 'Automático')}
                        </Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    </>
  );
}

export default TelaCarro;
