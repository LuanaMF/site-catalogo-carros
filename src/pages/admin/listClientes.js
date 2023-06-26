import { Table, Row, Col, Tooltip, Loading, Text, Badge } from "@nextui-org/react";
import { ActionButton } from "@/components/ActionButton";
import { CiEdit } from "react-icons/ci";
import { GoTrashcan } from "react-icons/go";
import * as router from '@/pages/api/router';
import React from 'react';


export default function listClientes() {

    const [clientes, setClientes] = React.useState([{
        id: '',
        cpf: '',
        nomeCompleto: '',
        rua: '',
        numero: '',
        estado: '',
        cidade: '',
        bairro: '',
        telefone: '',
        email: '',
        fornecedor: ''

    }]);

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

  const columns = [
    { name: "NOME", uid: "nomeCompleto" },
    { name: "CPF", uid: "cpf" },
    { name: "ENDEREÇO", uid: "end" },
    { name: "TELEFONE", uid: "telefone" },
    { name: "EMAIL", uid: "email" },
    { name: "TIPO", uid: "tipo" },
    { name: "ACTIONS", uid: "actions" },
  ];
  
  const editaCliente = () => {

  }
  
  const renderCell = (cliente, columnKey) => {

    switch (columnKey) {
      case "nomeCompleto":
        return (
            <Text size={14} css={{ tt: "capitalize" }}>
                {cliente.nomeCompleto}
            </Text>
        );
      case "cpf":
        return (
            <Row>
              <Text size={14} css={{ tt: "capitalize" }}>
                {cliente.cpf}
              </Text>
            </Row>
        );
      case "telefone":
        const telefone = cliente.telefone? cliente.telefone : 'Telefone não registrado'
        return (
            <Row>
              <Text size={14}>
                {telefone}
              </Text>
            </Row>
        );
      case "email":
        const email = cliente.email? cliente.email : 'Email não registrado'
        return (
            <Row>
              <Text size={14} >
                {email}
              </Text>
            </Row>
        );
      case "tipo":
        const tipo = cliente.fornecedor? 'Fornecedor' : 'Comprador'
        const cor = cliente.fornecedor? 'primary' : 'warning'

        return <Badge color={cor}>{tipo}</Badge>;

      case "end":
        let enderecoPrincipal;
        let enderecoSecundario;

        if(cliente.rua || cliente.numero){

            if(cliente.rua && cliente.numero){

                enderecoPrincipal = cliente.rua + ', ' + cliente.numero
            }
            else{
                enderecoPrincipal = cliente.rua? cliente.rua : '';
            }
        }

        if(cliente.bairro || cliente.cidade || cliente.estado){

            if(cliente.bairro && cliente.cidade && cliente.estado){
                enderecoSecundario = cliente.bairro + ', ' + cliente.cidade + ' - ' + cliente.estado
            }
            else{
                if(cliente.bairro){
                    enderecoSecundario = cliente.bairro;
                }
                if(cliente.cidade){
                    enderecoSecundario = cliente.bairro? enderecoSecundario = cliente.bairro + ', ' +cliente.cidade : enderecoSecundario = cliente.cidade;
                }
                if(cliente.estado){
                    enderecoSecundario =  cliente.cidade? enderecoSecundario += ' - ' +cliente.estado : cliente.estado;
                }
            }
        }
        
        return (
        <Col>
            <Row>
              <Text b size={14} css={{ tt: "capitalize" }}>
                {enderecoPrincipal}
              </Text>
            </Row>
            <Row>
              <Text b size={13} css={{ tt: "capitalize", color: "$accents7" }}>
                {enderecoSecundario}
              </Text>
            </Row>
          </Col>
        );

      case "actions":
        return (
          <Row justify="center" align="center">
            <Col css={{ d: "flex" }}>
              <Tooltip content="Edit user">
                <ActionButton onClick={() => console.log("Edit user", cliente.cpf)}>
                  <CiEdit size={20} fill="#979797" />
                </ActionButton>
              </Tooltip>
            </Col>
            <Col css={{ d: "flex" }}>
              <Tooltip
                content="Delete user"
                color="error"
                onClick={() => console.log("Delete user", cliente.cpf)}
              >
                <ActionButton>
                  <GoTrashcan size={20} color="#FF0080" />
                </ActionButton>
              </Tooltip>
            </Col>
          </Row>
        );
      default:
        return '';
    }
  };

  if (clientes[0].id === '') {
    return (
        <>
             <style>{`
                html, body {
                    background-color: white;
                 }
            `}</style>
            <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <Loading size="xl"/>
            </div>
        </>
       

    ) // Exibindo uma mensagem de carregamento
  }

  return (
    <Table
      aria-label="Example table with custom cells"
      css={{
        height: "auto",
        minWidth: "100%",
      }}
      selectionMode="none"
    >
      <Table.Header columns={columns}>
        {(column) => (
          <Table.Column
            key={column.uid}
            hideHeader={column.uid === "actions"}
            align={column.uid === "actions" ? "center" : "start"}
          >
            {column.name}
          </Table.Column>
        )}
      </Table.Header>
      <Table.Body items={clientes}>
        {(item) => (
          <Table.Row key={item.cpf}>
            {(columnKey) => (
              <Table.Cell key={columnKey}>{renderCell(item, columnKey)}</Table.Cell>
            )}
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  );
}
