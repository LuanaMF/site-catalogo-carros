import { Navbar, Button, Link, Text } from "@nextui-org/react";

import Image from "next/image";

export default function NavbarAdm() {
  const collapseItems = [
    "Sobre nós",
    "Carros",
    "Contato",
    "Serviços",
    "Venda",
  ];

  const currentPath = typeof window !== "undefined" ? window.location.pathname : "";

  const isLinkActive = (href) => {
    if (href === "/") {
      return href === currentPath;
    } else {
      return currentPath.startsWith(href);
    }
  };

  return (
    <>
      <Navbar id="navbar-adm" variant="floating">
        <Navbar.Toggle aria-label="toggle navigation" showIn={"xs"} />
        <Navbar.Brand>
            <Link href="/">
                <Image src="/img/logo.png" width={118} height={60} alt="Logo" />
            </Link>
        </Navbar.Brand>
        <Navbar.Content enableCursorHighlight hideIn="xs" variant="highlight-rounded">
          <Navbar.Link isActive={isLinkActive("/admin/cadastroCarro")} href="/admin/cadastroCarro">
            Cadastro de carros
          </Navbar.Link>
        </Navbar.Content>
        <Navbar.Collapse showIn={"xs"}>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem key={item}>
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href="/"
              
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
