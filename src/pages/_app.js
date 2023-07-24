// 1. import `NextUIProvider` component
import { NextUIProvider } from '@nextui-org/react';
import NavbarCliente from '@/components/navBar';


function MyApp({ Component, pageProps }) {
  const collapseItems = [
    "Sobre nós",
    "Carros",
    "Contato",
    "Serviços",
    "Venda",
  ];

  return (
    // 2. Use at the root of your app
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;