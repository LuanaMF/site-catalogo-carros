import React from "react";
import { Dropdown } from "@nextui-org/react";
import * as router from '@/pages/api/router';
import { FcPlus } from "react-icons/fc";
import ModalIncluirCliente from "./ModalIncluirCliente";

export default function SelectCliente({ retorno, opcaoIncluir, primeiraOpcao, width }) {

  const [selected, setSelected] = React.useState(new Set([primeiraOpcao]));

  const [clientes, setClientes] = React.useState([{
    cpf: '',
    nomeCompleto: ''
  }]);

  const [openModal, setOpenModal] = React.useState(false);

  const selectedValue = React.useMemo(
    () => {
      const value = Array.from(selected).join(", ").replaceAll("_", " ");
        let selectedDescription = primeiraOpcao;

        if(value == 'incluir'){
            setOpenModal(true)
        }
        else if(value == 'semCliente'){
          selectedDescription = 'Nenhum cliente registrado'
        }
        else{
            clientes.forEach(element => {
                if (value == element.cpf) {
                  selectedDescription = element.nomeCompleto;
                }
            });    
        }
  
        return selectedDescription;
    },
    [selected]
  );

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await router.get('cliente');
        setClientes(response.result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [clientes]);

  return (
    <>
    <Dropdown>
      <Dropdown.Button flat color="warning" css = {{w: width? width : 'auto'}}>
        {selectedValue}
      </Dropdown.Button>
      <Dropdown.Menu
        aria-label="Single selection actions"
        color="warning"
        disallowEmptySelection
        selectionMode="single"
        selectedValue={selected}
        onSelectionChange={setSelected}
        onAction={retorno}

        >
        {opcaoIncluir? 
        <Dropdown.Item 
             key="incluir" color={'success'} icon={<FcPlus></FcPlus>}>Incluir cliente</Dropdown.Item> 
        : ''}
        {clientes? clientes.map((item) => (
            <Dropdown.Item 
             key={item.cpf}>{item.nomeCompleto}</Dropdown.Item>
        )): 
          <Dropdown.Item 
            key={'semCliente'}></Dropdown.Item>
        }
        
      </Dropdown.Menu>
    </Dropdown>
    <ModalIncluirCliente open={openModal} close={setOpenModal} mostrarBotao={false}></ModalIncluirCliente>
    </>
  );
}
