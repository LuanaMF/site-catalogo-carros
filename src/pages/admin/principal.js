import NavbarAdm from "@/components/navBarAdm";
import { Divider } from "@nextui-org/react";

export default function principalAdm() {
    return (
        <>
            <NavbarAdm></NavbarAdm>
            <Divider></Divider>
            <Text>Carros em catálogo</Text>
            <Divider></Divider>
        </>
    )
}