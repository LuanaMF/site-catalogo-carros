
import NavbarCliente from '@/components/navBar';
import CarrouselCarros from '@/components/CarrouselCarros'

export default function App() {

    

  return (
    <>
      <NavbarCliente></NavbarCliente>
      <CarrouselCarros mostrarVendidos={false}></CarrouselCarros>
    </>
  );
}
