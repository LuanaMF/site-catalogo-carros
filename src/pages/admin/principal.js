import CarrouselCarros from "@/components/CarrouselCarros";
import NavbarAdm from "@/components/navBarAdm";
import { Divider } from "@nextui-org/react";
import Text from "@nextui-org/react";

export default function principalAdm() {
    return (
        <>  
            
            <NavbarAdm></NavbarAdm>
            
            <Divider css={{marginTop: '40px', marginLeft: '30px', width: '1300px', color: 'gray', fontSize:'100px', marginBottom: '30px'}}>Carros em catálogo</Divider>

            <CarrouselCarros adm={true}></CarrouselCarros>

            <Divider css={{marginTop: '40px', marginLeft: '30px', width: '1300px', color: 'gray', fontSize:'100px'}}>Carros Vendidos</Divider>
        </>
    )
}