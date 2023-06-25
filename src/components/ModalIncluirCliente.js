import {useEffect, useState} from "react";
import { Modal, Button, Text, Input, Row, Checkbox, Grid, Spacer } from "@nextui-org/react";
import { FaPlus, FaUserPlus } from 'react-icons/fa';
import * as router from '@/pages/api/router';


export default function ModalIncluirCliente({ editCliente, argCliente, open, close }) {

  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    if(close){
        close(false)
    }
    else{

        setVisible(false);
    }
  };

  const [cliente, setCliente] = useState({
    nomeCompleto: '',
    cpf: '',
    rg: '',
    email: '',
    cep: '',
    estado: '',
    bairro: '',
    rua: '',
    numero: '',
    fornecedor: '',
    service: '',
    telefone: '',
    cidade: ''
  });

    useEffect(() => {
        if(editCliente){
            cliente.service = 'editarCliente';
            setCliente(argCliente);
        }
    }, [editCliente]);


  async function handleOnClick() {
    cliente.service = 'cadastraCliente';
    try {
        const response = await router.apiPost(cliente, 'cliente');
        
    } catch (error) {
        console.log(error);
    }
  }

  return (
    <div>
      {!open? <Button auto shadow onPress={handler}>
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
            h: '650px'
        }}
      >
        <Modal.Header css={{justifyContent: 'center'}}>
            <Row justify="center">
                <Text id='modal-title' b size={18}>
                Cadastro de cliente
                </Text>
            </Row>
            
        </Modal.Header>
        <Modal.Body justify='center'>

            <Grid.Container gap={1}>
                <Grid xs={15}>
                    <Input
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="Nome completo"
                        required
                        defaultValue={cliente.nomeCompleto}
                        onChange={(e) => cliente.nomeCompleto = e.target.value}
                    />
                </Grid>

                <Grid xs={15}>
                    <Input
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="Email"
                        defaultValue={cliente.email}
                        onChange={(e) => cliente.email = e.target.value}
                    />
                </Grid>
            </Grid.Container>

            <Grid.Container gap={2}>
                <Grid xs={4}>
                    <Input
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="CPF"
                        required
                        defaultValue={cliente.cpf}
                        onChange={(e) => cliente.cpf = e.target.value}
                    />
                </Grid>
                
                <Grid xs={4}>
                    <Input
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="RG"
                        defaultValue={cliente.rg}
                        onChange={(e) => cliente.rg = e.target.value}
                    />
                </Grid>

                <Grid xs={4}>
                    <Input
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="Telefone"
                        defaultValue={cliente.telefone}
                        onChange={(e) => cliente.telefone = e.target.value}
                    />
                </Grid>

            </Grid.Container>

            <Grid.Container gap={2} >
                <Grid xs={4}>
                    <Input
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="CEP"
                        defaultValue={cliente.cep}
                        onChange={(e) => cliente.cep = e.target.value}
                    />
                </Grid>
                <Grid xs={8}>
                    <Input
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="Estado"
                        defaultValue={cliente.estado}
                        onChange={(e) => cliente.estado = e.target.value}
                    />
                </Grid>

            </Grid.Container>
            <Grid.Container gap={2} >
                <Grid xs={6}>
                    <Input
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="Cidade"
                        defaultValue={cliente.cidade}
                        onChange={(e) => cliente.cidade = e.target.value}
                    />
                </Grid>
                <Grid xs={6}>
                    <Input
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="Bairro"
                        defaultValue={cliente.bairro}
                        onChange={(e) => cliente.bairro = e.target.value}
                    />
                </Grid>
                
            </Grid.Container>

            <Grid.Container gap={2} >
                <Grid xs={8}>
                    <Input
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="Rua"
                        defaultValue={cliente.rua}
                        onChange={(e) => cliente.rua = e.target.value}
                    />
                </Grid>
                <Grid xs={4}>
                    <Input
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="Número"
                        defaultValue={cliente.numero}
                        onChange={(e) => cliente.numero = e.target.value}
                    />
                </Grid>
                
            </Grid.Container>
            <Spacer y={1}></Spacer>
          <Row justify="space-between">
            <Checkbox onChange={(e) => cliente.fornecedor = e}>
              <Text size={14}>Fornecedor</Text>
            </Checkbox>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeHandler}>
            Cancelar
          </Button>
          <Button auto onPress={() =>  handleOnClick(cliente)}>
            { editCliente? 'Salvar alterações' : 'Cadastrar cliente'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
