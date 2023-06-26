import {useEffect, useState} from "react";
import { Modal, Button, Text, Input, Row, Checkbox, Grid, Spacer } from "@nextui-org/react";
import { FaPlus, FaUserPlus } from 'react-icons/fa';
import * as router from '@/pages/api/router';


export default function ModalIncluirCliente({ editCliente, argCliente, open, close, mostrarBotao }) {

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
            h: '650px'
        }}
      >
        <Modal.Header css={{justifyContent: 'center'}}>
            <Row justify="center">
                <Text id='modal-title' b size={18}>
                {editCliente? 'Editar cliente' : 'Cadastrar cliente'}
                </Text>
            </Row>
            
        </Modal.Header>
        <Modal.Body justify='center'>

            <Grid.Container gap={1}>
                <Grid xs={15}>
                    <Input
                        aria-label="Nome"
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="Nome completo"
                        required
                        value={cliente?.nomeCompleto}
                        onChange={(e) => cliente.nomeCompleto = e.target.value}
                    />
                </Grid>

                <Grid xs={15}>
                    <Input
                        aria-label="Email"
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="Email"
                        value={cliente?.email}
                        onChange={(e) => cliente.email = e.target.value}
                    />
                </Grid>
            </Grid.Container>

            <Grid.Container gap={2}>
                <Grid xs={4}>
                    <Input
                        aria-label="cpf"
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="CPF"
                        required
                        value={cliente?.cpf}
                        onChange={(e) => cliente.cpf = e.target.value}
                    />
                </Grid>
                
                <Grid xs={4}>
                    <Input
                    aria-label="RG"
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="RG"
                        value={cliente?.rg}
                        onChange={(e) => cliente.rg = e.target.value}
                    />
                </Grid>

                <Grid xs={4}>
                    <Input
                    aria-label="Tel"
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="Telefone"
                        value={cliente?.telefone}
                        onChange={(e) => cliente.telefone = e.target.value}
                    />
                </Grid>

            </Grid.Container>

            <Grid.Container gap={2} >
                <Grid xs={4}>
                    <Input
                    aria-label="Cep"
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="CEP"
                        value={cliente?.cep}
                        onChange={(e) => cliente.cep = e.target.value}
                    />
                </Grid>
                <Grid xs={8}>
                    <Input
                        aria-label="Estado"
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="Estado"
                        value={cliente?.estado}
                        onChange={(e) => cliente.estado = e.target.value}
                    />
                </Grid>

            </Grid.Container>
            <Grid.Container gap={2} >
                <Grid xs={6}>
                    <Input
                        aria-label="Cidade"
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="Cidade"
                        value={cliente?.cidade}
                        onChange={(e) => cliente.cidade = e.target.value}
                    />
                </Grid>
                <Grid xs={6}>
                    <Input
                        aria-label="Bairro"
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="Bairro"
                        value={cliente?.bairro}
                        onChange={(e) => cliente.bairro = e.target.value}
                    />
                </Grid>
                
            </Grid.Container>

            <Grid.Container gap={2} >
                <Grid xs={8}>
                    <Input
                        aria-label="Rua"
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="Rua"
                        value={cliente?.rua}
                        onChange={(e) => cliente.rua = e.target.value}
                    />
                </Grid>
                <Grid xs={4}>
                    <Input
                        aria-label="Numero"
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="Número"
                        value={cliente?.numero}
                        onChange={(e) => cliente.numero = e.target.value}
                    />
                </Grid>
                
            </Grid.Container>
            <Spacer y={1}></Spacer>
          <Row justify="space-between">
            <Checkbox isSelected={cliente.fornecedor == 1? true : false} onChange={(e) => cliente.fornecedor = e}>
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
