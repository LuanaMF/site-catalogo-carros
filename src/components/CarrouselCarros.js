import { Card, Grid, Row, Text, Link } from "@nextui-org/react";
import { useEffect, useState } from "react";
import * as router from '@/pages/api/router';


export default function CarrouselCarros() {

    const [carros, setCarros] = useState([{
        id: '',
        imgPrincipal: '',
        marca: '',
        valor: '',
        ano_modelo: ''

    }])

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await router.get('carro');
            setCarros(response.result);
          } catch (error) {
            console.log(error);
          }
        };

        fetchData();
    }) 
    
    const formatter = new Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL',
    });

  return (
    <>
    <Grid.Container gap={2} justify="flex-start">
      {carros.map((item, index) => (
        <Grid xs={6} sm={3} key={index}>
          <Link block href={"telaCarro/"+item.id}>
            <Card isPressable isHoverable css={{h: '300px'}}>
              <Card.Body css={{ p: 0}} >
                <Card.Image
                  src={`data:image/png;base64,${item.imgPrincipal}`}
                  objectFit="contain"
                  width="100%"
                  height='100%'
                  alt={item.marca}
                  autoResize
                />
              </Card.Body>
              <Card.Divider />
              <Card.Footer css={{ justifyItems: "flex-start" }}>
                <Row wrap="wrap" justify="space-between" align="center">
                  <Text b>{item.marca + ', ' +item.ano_modelo}</Text>
                  <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                    {formatter.format(item.valor)}
                  </Text>
                </Row>
              </Card.Footer>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid.Container>
   
    </>
  );
}
