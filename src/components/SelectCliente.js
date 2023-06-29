import React, { useEffect } from "react";
import { Dropdown } from "@nextui-org/react";
import * as router from '@/pages/api/router';
import { FcPlus } from "react-icons/fc";
import ModalIncluirCliente from "./ModalIncluirCliente";

export default function SelectCliente({ retorno, opcaoIncluir, primeiraOpcao, width, opcaoSelecionada }) {

  const [selected, setSelected] = React.useState(new Set([opcaoSelecionada && Object.keys(opcaoSelecionada).length > 0? opcaoSelecionada : primeiraOpcao]));

  const [clientes, setClientes] = React.useState([{
    cpf: '',
    nomeCompleto: ''
  }]);

  const [openModal, setOpenModal] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await router.get('cliente');
        setClientes(response.result);
        if(opcaoSelecionada && Object.keys(opcaoSelecionada).length > 0){
          setSelected(opcaoSelecionada)
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [clientes]);
 
  const selectedValue = React.useMemo(
    () => {
        var value;
        let selectedDescription = primeiraOpcao;

        if(opcaoSelecionada && Object.keys(opcaoSelecionada).length > 0){
          value = opcaoSelecionada;
        }
        else{
          value = Array.from(selected).join(", ").replaceAll("_", " "); 
        }

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
        selectedKeys={selected}
        onSelectionChange={setSelected}
        onAction={retorno}
        
        >
        {opcaoIncluir? 
        <Dropdown.Item 
             key="incluir" color={'success'} icon={<FcPlus></FcPlus>} >Incluir cliente</Dropdown.Item> 
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
