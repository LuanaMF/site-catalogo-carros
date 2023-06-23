import React from "react";
import { Modal, Button, Text, Input, Row, Checkbox, Grid, Spacer } from "@nextui-org/react";
import { FaPlus, FaUserPlus } from 'react-icons/fa';


export default function ModalIncluirCliente(editCliente) {

  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
  };

  const [cliente, setCliente] = React.useState({
    
  });

  return (
    <div>
      <Button auto shadow onPress={handler}>
        <FaPlus></FaPlus>
      </Button>
      <Modal
        closeButton
        width="700px"
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
        css={{
            h: '650px'
        }}
      >
        <Modal.Header css={{justifyContent: 'center'}}>
            <FaUserPlus size={52}></FaUserPlus>

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
                    />
                </Grid>
            </Grid.Container>

            <Grid.Container gap={2}>
                <Grid xs={6}>
                    <Input
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="CPF"
                        required
                    />
                </Grid>
                
                <Grid xs={6}>
                    <Input
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="RG"
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
                    />
                </Grid>
                
            </Grid.Container>
            <Spacer y={1}></Spacer>
          <Row justify="space-between">
            <Checkbox>
              <Text size={14}>Fornecedor</Text>
            </Checkbox>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeHandler}>
            Cancelar
          </Button>
          <Button auto onPress={closeHandler}>
            Cadastrar cliente
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
