import { useEffect, useState } from "react";
import * as router from '@/pages/api/router'

const TemplateRecibo = ({ venda }) => {

    const [carro, setCarro] = useState({});
    const [comprador, setComprador] = useState({});
    const [vendedor, setVendedor] = useState({});

    useEffect(() => {
        
        const fetchData = async () => {
            try {
              const response = await router.apiPost({ id: venda.id_carro }, '../../api/carro');
              setCarro(response.carro);
            } catch (error) {
              console.log(error);
            }
        };
        
        fetchData();
        
    }, [venda]);

    useEffect(() => {
        
        const fetchData = async () => {
            try {
              const responseComprador = await router.apiPost({ cpf: venda.cpf_comprador }, '../../api/cliente');
              setComprador(responseComprador.result[0]);

              const responseVendedor = await router.apiPost({ cpf: venda.cpf_vendedor }, '../../api/cliente');
              setVendedor(responseVendedor.result[0]);

            } catch (error) {
              console.log(error);
            }
        };
        
        fetchData();
        
    }, [venda]);

    const formatter = new Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL',
    });

    return (
        
      <>
        <div id='recibo'>
        <div 
            style={{
                display: 'flex',
                marginLeft: '170px',
                marginTop: '30px'
            }}

        >
            <img width="100px" src="/logo.png" ></img>
        </div>
        
        <div
             style={{
                display: 'flex',
                marginLeft: '130px',
                marginTop: '30px'
            }}
        >
            <h1 style={{fontSize: '25px'}}>Recibo de venda</h1>
        </div>
        
        <div
            style={{
                marginTop:'20px',   
                marginLeft: '15px'
            }}
        >
            <h2 style={{color: 'gray', fontSize: '20px'}}>Dados da venda: </h2>
        </div>
        
        <div
            style={{
                marginTop: '20px',
                marginLeft: '30px'
            }}
        >
            <h4 style={{fontSize: '10px'}}>{'Data/Hora:  '+ new Date(venda.data_venda).toLocaleString()}</h4>
            <h4 style={{fontSize: '10px'}}>{'Kilometragem de saída:  ' + parseFloat(venda.kilometragem_saida) + ' km'}</h4>
            <h4 style={{fontSize: '10px'}}>{'Tipo de pagamento:  '+ venda.tipo_pagamento}</h4>
            <h4 style={{fontSize: '10px'}}>{'Valor:  '+ formatter.format(venda.valor) }</h4>
            <h4 style={{fontSize: '10px'}}>{'Retorno: '+ formatter.format(venda.retorno)}</h4>

        </div>

        <div
            style={{
                marginTop:'20px',   
                marginLeft: '15px'
            }}
        >
            <h2 style={{color: 'gray', fontSize: '20px'}}>Dados do comprador: </h2>
        </div>

        <div
            style={{
                marginTop: '10px',
                marginLeft: '30px'
            }}
        >
            <h4 style={{fontSize: '10px'}}>{'Nome:  '+venda.nome_comprador}</h4>
            <h4 style={{fontSize: '10px'}}>{'CPF:  '+ venda.cpf_comprador.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")}</h4>
            <h4 style={{fontSize: '10px'}}>{'CEP:  ' + ( comprador.cep != undefined? comprador.cep : 'Não registrado')}</h4>
            <h4 style={{ fontSize: '10px'}}>{'Cidade:  ' + ( comprador.cidade != undefined? comprador.cidade : 'Não registrada')}</h4>
            <h4 style={{fontSize: '10px'}}>{'Estado:  ' + (comprador.estado != undefined? comprador.estado : 'Não registrado')}</h4>
            <h4 style={{fontSize: '10px'}}>{'Endereço:  ' + (comprador.rua != undefined? comprador.rua + (comprador.numero? ', ' + comprador.numero : '' ) : 'Não registrado')}</h4>
            <h4 style={{fontSize: '10px'}}>{'Telefone:  ' + (comprador.telefone != undefined? comprador.telefone : 'Não registrado')}</h4>
            <h4 style={{fontSize: '10px'}}>{'Email:  ' + (comprador.email != undefined? comprador.email : 'Não registrado')}</h4>

        </div>

        <div
            style={{
                marginTop:'45px',   
                marginLeft: '15px'
            }}
        >
            <h2 style={{color: 'gray', fontSize: '20px'}}>Dados do vendedor: </h2>
        </div>

        <div
            style={{
                marginTop: '10px',
                marginLeft: '30px'
            }}
        >
            <h4 style={{fontSize: '10px'}}>{'Nome:  '+ venda.nome_vendedor}</h4>
            <h4 style={{fontSize: '10px'}}>{'CPF:  ' + venda.cpf_vendedor.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")}</h4>
            <h4 style={{fontSize: '10px'}}>{'CEP:  ' + ( vendedor.cep != undefined? vendedor.cep : 'Não registrado')}</h4>
            <h4 style={{ fontSize: '10px'}}>{'Cidade:  ' + ( vendedor.cidade != undefined? vendedor.cidade : 'Não registrada')}</h4>
            <h4 style={{fontSize: '10px'}}>{'Estado:  ' + (vendedor.estado != undefined? vendedor.estado : 'Não registrado')}</h4>
            <h4 style={{fontSize: '10px'}}>{'Endereço:  ' + (vendedor.rua != undefined? vendedor.rua + (vendedor.numero? ', ' + vendedor.numero : '' ) : 'Não registrado')}</h4>
            <h4 style={{fontSize: '10px'}}>{'Telefone:  ' + (vendedor.telefone != undefined? vendedor.telefone : 'Não registrado')}</h4>
            <h4 style={{fontSize: '10px'}}>{'Email:  ' + (vendedor.email != undefined? vendedor.email : 'Não registrado')}</h4>

        </div>

        <div
            style={{
                marginTop:'10px',   
                marginLeft: '15px'
            }}
        >
            <h2 style={{color: 'gray', fontSize: '20px'}}>Dados do carro: </h2>
        </div>

        <div
            style={{
                marginTop: '10px',
                marginLeft: '30px'
            }}
        >
            <h4 style={{fontSize: '10px'}}>{'Marca:  ' + carro.marca}</h4>
            <h4 style={{fontSize: '10px'}}>{'Modelo/Versão:  ' + carro.modelo_versao}</h4>
            <h4 style={{fontSize: '10px'}}>{'Ano de fabricação:  ' + carro.ano_fabricacao}</h4>
            <h4 style={{fontSize: '10px'}}>{'Ano do modelo:  ' + carro.ano_modelo}</h4>
            <h4 style={{fontSize: '10px'}}>{'Km:  ' + parseFloat(carro.quilometragem) + ' km'}</h4>
            <h4 style={{fontSize: '10px'}}>{'Combustível:  ' + carro.combustivel}</h4>
            <h4 style={{fontSize: '10px'}}>{'Cambio:  ' + (carro.cambio == 'A'? 'Automático': 'Manual')}</h4>
            <h4 style={{fontSize: '10px'}}>{'Leiloado:  ' + (carro.leiloado == '0'? 'Não': 'Sim')}</h4>
            <h4 style={{fontSize: '10px'}}>{'GNV:  ' + (carro.gnv == '0'? 'Não': 'Sim')}</h4>
            <h4 style={{fontSize: '10px'}}>{'Observações:  ' + carro.observacoes}</h4>

        </div>
        
        </div>
      </>
      
    );
}

export default TemplateRecibo