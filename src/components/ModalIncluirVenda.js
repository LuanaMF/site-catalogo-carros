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
    id: null,
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

    var dateAgora = new Date();
    const dataArrayAgora = dateAgora.toLocaleDateString().split('/');
    const dataAgora = dataArrayAgora[2] + '-'  + dataArrayAgora[1] + '-' + dataArrayAgora[0];

    const [dataHora, setDataHora] = useState({
        data: dataAgora,
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

            
        }   
    }, [argVenda, dataHora]);

    useEffect(() => {
        var date = new Date(venda.data_venda)
            const dataArray = date.toLocaleDateString().split('/');
            const data = dataArray[2] + '-'  + dataArray[1] + '-' + dataArray[0];
            const dataHora = {
                data: data,
                hora: date.toLocaleTimeString()
            }

            setDataHora(dataHora)
    }, [venda.data_venda])
       
    async function handleOnClick() {
    
        if( argVenda && Object.keys(argVenda).length > 0){
            venda.data_venda = dataHora.data + ' ' + dataHora.hora
            venda.service = 'editarVenda';
            
        }
        else{

            venda.data_venda = dataHora.data + ' ' + dataHora.hora + ':00'
        }
        try {
            const response = await router.apiPost(venda, 'venda');
            closeHandler()
            if(argVenda && Object.keys(argVenda).length > 0){
                alertProps.mensagem = 'Venda alterada com sucesso!'
            }

            setAlert(true);
        } catch (error) {
            console.log(error);
        }
       
    }

  return (
    <>
    
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
            h: '640px'
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
                        initialValue={dataHora.data}
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
                        initialValue={dataHora.hora}
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
                        initialValue = {venda.kilometragem_saida}
                        onChange={(e) => venda.kilometragem_saida = e.target.value}
                    />
                </Grid>
                <Grid xs={5}>
                    <Input 
                         css={{w: '500px'}}
                        label="Valor" 
                        type="number" 
                        step={'any'}
                        initialValue={venda.valor}
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
                        initialValue={venda.retorno}
                        onChange={(e) => venda.retorno = e.target.value}
                    />
                </Grid>
               
                <Grid xs={5}>
                    <Text size={14} >
                        Tipo de pagamento
                        <Spacer y={0.3}></Spacer>
                        <Select 
                        width={'250px'} 
                        options={tiposPagamento} 
                        primeiraOpcao={'Selecione o tipo de pagamento'} 
                        retorno={(e) => venda.tipo_pagamento = e}
                        opcaoSelecionada={venda.tipo_pagamento}
                        
                        ></Select>
                    </Text>
                    
                </Grid>
                    
            </Grid.Container>
           
            <Grid.Container gap={1} justify="center" >
                
                <Grid xs={5}>
                    <Text size={14} >
                        Vendedor
                        <Spacer y={0.3}></Spacer>
                        <SelectCliente 
                            width={'250px'} 
                            opcaoIncluir={true} 
                            primeiraOpcao={'Selecione o vendedor'} 
                            retorno={(e) => venda.cpf_vendedor = e}
                            opcaoSelecionada={venda.cpf_vendedor}
                        ></SelectCliente>
                    </Text>
                </Grid>
               
                <Grid xs={5}>
                    <Text size={14} >
                        Comprador
                        <Spacer y={0.3}></Spacer>
                        <SelectCliente 
                            width={'250px'} 
                            opcaoIncluir={true} 
                            primeiraOpcao={'Selecione o comprador'} 
                            retorno={(e) => venda.cpf_comprador = e}
                            opcaoSelecionada={venda.cpf_comprador}
                        ></SelectCliente>
                    </Text>
                </Grid>
                    
            </Grid.Container>
            
            <Spacer y={1}></Spacer> 
            <Textarea
                bordered
                color="primary"
                labelPlaceholder="Observações"
                rows={4}
                initialValue={venda.observacoes}
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
    
    </>
  );
}
