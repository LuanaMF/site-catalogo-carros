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
    data_venda: '',
    valor: '',
    kilometragem_saida: '',
    tipo_pagamento: '',
    cpf_comprador: '',
    cpf_vendedor: '',
    observacoes: '',
    retorno: '',
    service: 'cadastraVenda'
  });

    const [dataHora] = useState({
        data: '',
        hora: ''
    })

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
        if(argVenda && Object.keys(argVenda).length > 0){
            setVenda(argVenda);
            var data = new Date(venda.data_venda)
            dataHora.data = data.toLocaleDateString()
            dataHora.hora = data.toLocaleTimeString()
        }
    }, [argVenda]);

    
    async function handleOnClick() {
        
        venda.data_venda = dataHora.data + ' ' + dataHora.hora + ':00'
        console.log(venda);
        // if( argVenda && Object.keys(argVenda).length > 0){
        //     venda.service = 'editarVenda';
            
        // }
        // try {
        //     const response = await router.apiPost(venda, 'venda');
        //     closeHandler()
        //     if(argVenda && Object.keys(argVenda).length > 0){
        //         alertProps.mensagem = 'Venda alterada com sucesso!'
        //     }

        //     setAlert(true);
        // } catch (error) {
        //     console.log(error);
        // }
       
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
        width="700px"
        aria-labelledby="modal-title"
        open={open? open : visible}
        onClose={closeHandler}
        css={{
            h: '610px'
        }}
      >
        <Modal.Header css={{justifyContent: 'center'}}>
            <Row justify="center">
                <Text id='modal-title' b size={18}>
                {argVenda && Object.keys(argVenda).length > 0? 'Editar venda' : 'Cadastrar venda'}
                </Text>
            </Row>
            
        </Modal.Header>
        <Modal.Body >

            <Grid.Container gap={1} justify="center">
                <Grid xs={5} >
                    <Input 
                        css={{w: '500px'}}
                        label="Data da venda" 
                        type="date" 
                        onChange={(e) => {
                            var dataArray = e.target.value.split('-');
                            var data = dataArray[2] + '/' + dataArray[1] + '/' + dataArray[0];
                            dataHora.data = data;
                        }}
                    />
                </Grid>
                <Grid xs={5}>
                    <Input  
                        css={{w: '500px'}}
                        label="Horario da venda" 
                        type="time" 
                        onChange={(e) => dataHora.hora = e.target.value}
                    />
                </Grid>
                
            </Grid.Container>
            <Grid.Container gap={1} justify="center">
                <Grid xs={5}>
                    <Input 
                         css={{w: '500px'}}
                        label="Kilometragem de saída" 
                        type="number" 
                        onChange={(e) => venda.kilometragem_saida = e.target.value}
                    />
                </Grid>
                <Grid xs={5}>
                    <Input 
                         css={{w: '500px'}}
                        label="Valor" 
                        type="number" 
                        step={'any'}
                        onChange={(e) => venda.valor = e.target.value}
                    />
                </Grid>
                
            </Grid.Container>
           
            <Grid.Container gap={1} justify="center" >
                
                <Grid xs={5}>
                    <Input 
                        css={{w: '500px'}}
                        label="Retorno" 
                        type="number" 
                        step={'any'}
                        onChange={(e) => venda.retorno = e.target.value}
                    />
                </Grid>
               
                <Grid xs={5}>
                    <Select width={'500px'} css={{marginTop: '23px !important'}} options={tiposPagamento} primeiraOpcao={'Selecione o tipo de pagamento'} retorno={venda.tipo_pagamento}></Select>

                </Grid>
                    
            </Grid.Container>
           
            <Grid.Container gap={1} justify="center" css={{marginTop: '5px'}}>
                
                <Grid xs={5}>
                    <SelectCliente width={'500px'} opcaoIncluir={true} primeiraOpcao={'Selecione o vendedor'} retorno={venda.cpf_vendedor}></SelectCliente>
                    
                </Grid>
               
                <Grid xs={5}>
                    <SelectCliente width={'500px'} opcaoIncluir={true} primeiraOpcao={'Selecione o comprador'} retorno={venda.cpf_comprador}></SelectCliente>

                </Grid>
                    
            </Grid.Container>
            
            <Spacer y={1}></Spacer> 
            <Textarea
                bordered
                color="primary"
                labelPlaceholder="Observações"
                rows={4}
                onChange={(e) => venda.observacoes = e.target.value}
            />     

        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeHandler}>
            Cancelar
          </Button>
          <Button auto onPress={handleOnClick}>
            { argVenda && Object.keys(argVenda).length > 0? 'Salvar alterações' : 'Cadastrar venda'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
