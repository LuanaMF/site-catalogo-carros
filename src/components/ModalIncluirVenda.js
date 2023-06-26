import {useEffect, useState} from "react";
import { Modal, Button, Text, Input, Row, Textarea, Grid, Spacer} from "@nextui-org/react";
import { FaPlus, FaUserPlus } from 'react-icons/fa';
import * as router from '@/pages/api/router';
import { FcCheckmark } from "react-icons/fc";
import Select from "./Select";
import SelectCliente from "./SelectCliente";

export default function ModalIncluirVenda({argVenda, open, close, mostrarBotao }) {

  const [visible, setVisible] = useState(false);

  const [alert, setAlert] = useState(false);
    const [alertProps, setAlertProps] = useState({
        mensagem: 'Venda cadastrada com sucesso!',
        icon: <FcCheckmark size={80}></FcCheckmark>
    })
    
  const handler = () => setVisible(true);

  const closeHandler = () => {
    if(close){
        close(false)
    }
    else{

        setVisible(false);
    }
  };

  const [venda, setVenda] = useState({
    id: '',
    data_venda: '',
    valor: '',
    kilometragem_saida: '',
    tipo_pagamento: '',
    cpf_comprador: '',
    cpf_vendedor: '',
    observacoes: '',
    retorno: '',
    service: 'cadastrarVenda'
  });


    const tiposPagamento = [
        {
            value: 'Dinheiro',
            descricao: 'Dinheiro'
        },
        {
            value: 'Financiamento',
            descricao: 'Financiamento'
        },
        {
            value: 'Cartão',
            descricao: 'Cartão'
        },
        {
            value: 'Consórcio',
            descricao: 'Consórcio'
        }
    ]

    useEffect(() => {
        if(Object.keys(argVenda).length > 0){
            setVenda(argVenda);
        }
    }, [argVenda]);

    
  async function handleOnClick() {
    if(Object.keys(argVenda).length > 0){
        venda.service = 'editarVenda';
        
    }
    try {
        const response = await router.apiPost(venda, 'venda');
        closeHandler()
        if(Object.keys(argVenda).length > 0){
            alertProps.mensagem = 'Venda alterada com sucesso!'
        }

        setAlert(true);
    } catch (error) {
        console.log(error);
    }
  }

  return (
    <div>
        {/* Modal que to usando como alert */}
        <Modal noPadding open={alert} onClose={() => setAlert(false)} css={{h:'200px'}}>
          <Modal.Body css={{justifyContent: 'center', alignItems: 'center'}}>
            {alertProps.icon}
            <Text css={{marginBottom: '80px'}}>
              {alertProps.mensagem}
            </Text>
          </Modal.Body>
        </Modal>
      {mostrarBotao? <Button auto shadow onPress={handler}>
                <FaPlus></FaPlus>
            </Button> 
        : ''}
      <Modal
        closeButton
        width="550px"
        aria-labelledby="modal-title"
        open={open? open : visible}
        onClose={closeHandler}
        css={{
            h: '600px'
        }}
      >
        <Modal.Header css={{justifyContent: 'center'}}>
            <Row justify="center">
                <Text id='modal-title' b size={18}>
                {Object.keys(argVenda).length > 0? 'Editar venda' : 'Cadastrar venda'}
                </Text>
            </Row>
            
        </Modal.Header>
        <Modal.Body justifyContent='center'>

            <Grid.Container gap={1} justify="center">
                <Grid xs={4} >
                    <Input 
                        width="200px" 
                        label="Date" 
                        type="date" 
                    />
                </Grid>
                <Grid xs={4}>
                    <Input 
                        width="200px" 
                        label="Time" 
                        type="time" 
                    />
                </Grid>
                
            </Grid.Container>
            <Grid.Container gap={1} justify="center">
            <Grid xs={4}>
                    <Input 
                        label="Kilometragem de saída" 
                        type="number" 
                    />
                </Grid>
                <Grid xs={4}>
                    <Input 
                        label="Valor" 
                        type="currency" 
                    />
                </Grid>
                
            </Grid.Container>

            <Grid.Container gap={1} justify="center">
                <Grid xs={4}>
                    <SelectCliente opcaoIncluir={true} primeiraOpcao={'Selecione o vendedor'}></SelectCliente>
                </Grid>
                
                <Grid xs={4}>
                    <SelectCliente opcaoIncluir={true} primeiraOpcao={'Selecione o comprador'}></SelectCliente>
                </Grid>
                <Grid xs={4}>
                    <Select options={tiposPagamento} primeiraOpcao={'Selecione o tipo de pagamento'}></Select>
                </Grid>
            </Grid.Container>
            
            <Spacer y={2}></Spacer> 
            <Textarea
                bordered
                color="default"
                labelPlaceholder="Observações"
                rows={4}
            />     

        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeHandler}>
            Cancelar
          </Button>
          <Button auto onPress={() =>  handleOnClick(cliente)}>
            { Object.keys(argVenda).length > 0? 'Salvar alterações' : 'Cadastrar venda'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
