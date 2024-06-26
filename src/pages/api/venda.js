
import { query } from "@/lib/db";


async function cadastraVenda(data_venda, kilometragem_saida, tipo_pagamento, cpf_comprador, observacoes, retorno, valor){
  const response = await query({
    query: 'INSERT INTO venda (data_venda, kilometragem_saida, tipo_pagamento, cpf_comprador, observacoes, retorno, valor) VALUES(STR_TO_DATE( ?, "%Y-%m-%d %H:%i:%s"), ?, ?, ?, ?, ?, ?, ?);',
    values: [data_venda, kilometragem_saida, tipo_pagamento, cpf_comprador, observacoes, retorno, valor]
  })

  if (Object.keys(response).length > 0) {
    return response[0]
  } else {
    return null
  }

}

async function getVendas(){
  const response = await query({
    query: `SELECT *, (SELECT c.nomeCompleto from cliente c, carro ca WHERE ca.id = id_carro AND ca.fornecedor = c.cpf) AS nome_vendedor, 
    (SELECT c.cpf from cliente c, carro ca WHERE ca.id = id_carro AND ca.fornecedor = c.cpf) AS cpf_vendedor,
    (SELECT nomeCompleto FROM cliente WHERE cpf_comprador = cpf ) 
    AS nome_comprador FROM venda`,
    values: []
  })

  if (Object.keys(response).length > 0) {
    return response
  } else {
    return null
  }

}

async function getVendaPorId(id){
  const response = await query({
    query: `SELECT *, (SELECT c.nomeCompleto from cliente c, carro ca WHERE ca.id = id_carro AND ca.fornecedor = c.cpf) AS nome_vendedor, 
    (SELECT c.cpf from cliente c, carro ca WHERE ca.id = id_carro AND ca.fornecedor = c.cpf) AS cpf_vendedor,
    (SELECT nomeCompleto FROM cliente WHERE cpf_comprador = cpf ) 
    AS nome_comprador FROM venda WHERE id = ?`,
    values: [id]
  })

  if (Object.keys(response).length > 0) {
    return response
  } else {
    return null
  }
  
}

async function excluiVenda(id){
  const response = await query({
    query: 'DELETE FROM venda WHERE id = ?',
    values: [id]
  })

  if (Object.keys(response).length > 0) {
    return response
  } else {
    return null
  }
  
}

async function editaVenda(data_venda, kilometragem_saida, tipo_pagamento, cpf_comprador, observacoes, retorno, valor, idVenda){
  const sql = `
  UPDATE venda SET
    data_venda = ?, kilometragem_saida = ?, tipo_pagamento = ?, cpf_comprador = ?, observacoes = ?, retorno = ?,
    valor = ?
  WHERE
    id = ?;
  `
  const response = await query({
    query: sql,
    values: [data_venda, kilometragem_saida, tipo_pagamento, cpf_comprador, observacoes, retorno, valor, idVenda]
  })

  if (Object.keys(response).length > 0) {
    return response[0]
  } else {
    return null
  }

}

export default async function servicoVenda(req, res) {

  // Recebe o serviço
  const service = req.body.service;

  if(service){

    switch(service){

      //Serviço que altera senha
      case 'cadastraVenda':{

        const {data_venda, kilometragem_saida, tipo_pagamento, cpf_comprador, observacoes, retorno, valor} = req.body;
        const response = await cadastraVenda(data_venda, kilometragem_saida, tipo_pagamento, cpf_comprador, observacoes, retorno, valor);
        res.json({ result: response});
       
        break;
      }
      //Serviço que altera senha
      case 'editarVenda':{

        const {data_venda, kilometragem_saida, tipo_pagamento, cpf_comprador, observacoes, retorno, valor, id} = req.body;
        const response = await editaVenda(data_venda, kilometragem_saida, tipo_pagamento, cpf_comprador, observacoes, retorno, valor, id);
        res.json({ result: response});
       
        break;
      }
      // Serviço que cadastra admin
      case'delete' :{
        const {id} = req.body;

        const response = await excluiVenda(id);
        res.json({ result: response});
        
        break;
      }
     
    }

  }else{
    // Se não passar o serviço no body, mas passar o login, ele retorna o admin com esse login
    if(req.body.id){
        const venda = await getVendaPorId(req.body.id);
        res.json({ result: venda});
        
    }
    // Se não passar nada no body ele retorna todos os admins
    else{

      const vendas = await getVendas();
      res.json({ result: vendas});
    }
    
  }
  
}