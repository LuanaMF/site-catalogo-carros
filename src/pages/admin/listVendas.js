import { Table, Row, Col, Tooltip, Loading, Text, Badge, Modal } from "@nextui-org/react";
import { ActionButton } from "@/components/ActionButton";
import { CiEdit } from "react-icons/ci";
import { GoTrashcan } from "react-icons/go";
import * as router from '@/pages/api/router';
import React, { useEffect, useState } from 'react';
import ModalIncluirCliente from "@/components/ModalIncluirCliente";
import { FcCheckmark } from "react-icons/fc";

export default function listVendas() {

    const [vendas, setVendas] = React.useState([{
        id: '',
        data_venda: '',
        valor: '',
        cpf_comprador: '',
        cpf_vendedor: ''

    }]);

    const [nome, setNome] = React.useState({
        comprador: '',
        vendedor: ''
    })

    const getCliente = async (cpf, who) => {
        try {
            const response = await router.apiPost({cpf: cpf}, 'cliente');
            if(who == 'c'){

                nome.comprador = response.result[0].nomeCompleto
            }
            else{
                nome.vendedor = response.result[0].nomeCompleto
            }
        } catch (error) {
            console.log(error);
        }
    }

    React.useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await router.get('venda');
            setVendas(response.result);
          } catch (error) {
            console.log(error);
          }
        };
    
        fetchData();
    }, [vendas]);

    const [visible, setVisible] = useState(false);
    const [alertProps, setAlertProps] = useState({
        mensagem: 'Venda deletada com sucesso!',
        icon: <FcCheckmark size={80}></FcCheckmark>
    })

  const columns = [
    { name: "DATA/HORA", uid: "data_venda" },
    { name: "VENDEDOR", uid: "cpf_vendedor" },
    { name: "COMPRADOR", uid: "cpf_comprador" },
    { name: "VALOR", uid: "valor" },
    { name: "ACTIONS", uid: "actions" },
  ];
  
  const [openModal, setOpenModal] = React.useState(false);

  const excluiVenda = (venda) => {
    router.apiPost({service: 'delete', id: venda.id}, 'venda').then((value) => {
        setVisible(true)
    })
    
  }

  const renderCell = (venda, columnKey) => {

    switch (columnKey) {
      case "data_venda":
        const data = new Date(venda.data_venda)
        return (
            <Text size={14} css={{ tt: "capitalize" }}>
                {data.toLocaleString()}
            </Text>
        );
      case "cpf_vendedor":
        getCliente(venda.cpf_vendedor, 'v')
            
        return (
            <Col>
            <Row>
              <Text b size={14} css={{ tt: "capitalize" }}>
                {nome.vendedor}
              </Text>
            </Row>
            <Row>
              <Text b size={13} css={{ tt: "capitalize", color: "$accents7" }}>
                {venda.cpf_vendedor}
              </Text>
            </Row>
          </Col>
        );
      case "cpf_comprador":
        getCliente(venda.cpf_comprador, 'c')
        return (
            <Col>
            <Row>
              <Text b size={14} css={{ tt: "capitalize" }}>
                {nome.comprador}
              </Text>
            </Row>
            <Row>
              <Text b size={13} css={{ tt: "capitalize", color: "$accents7" }}>
                {venda.cpf_comprador}
              </Text>
            </Row>
          </Col>
        );
      case "valor":
        const formatter = new Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'BRL',
          });
          
        return (
            
            <Row>
              <Text size={14} >
                {formatter.format(venda.valor)}
              </Text>
            </Row>
        );

      case "actions":
        return (
          <Row justify="center" align="center">
            <Col css={{ d: "flex" }}>
              <Tooltip
                content="Excluir venda"
                color="error"
                onClick={() => excluiVenda(venda)}
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

  if (vendas[0].id === '') {
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
    <>
        {/* Modal que to usando como alert */}
        <Modal noPadding open={visible} onClose={() => setVisible(false)} css={{h:'200px'}}>
          <Modal.Body css={{justifyContent: 'center', alignItems: 'center'}}>
            {alertProps.icon}
            <Text css={{marginBottom: '80px'}}>
              {alertProps.mensagem}
            </Text>
          </Modal.Body>
        </Modal>
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
        <Table.Body items={vendas}>
            {(item) => (
            <Table.Row key={item.id}>
                {(columnKey) => (
                <Table.Cell key={columnKey}>{renderCell(item, columnKey)}</Table.Cell>
                )}
            </Table.Row>
            )}
        </Table.Body>
        </Table>
        {/* {clienteEdit? 
            <ModalIncluirCliente
                mostrarBotao={false}
                argCliente={clienteEdit}
                open={openModal}
                close={setOpenModal}
            ></ModalIncluirCliente>
        : ''} */}
    </>
  );
}
