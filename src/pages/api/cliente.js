
import { query } from "@/lib/db";


async function cadastraCliente(cpf, nomeCompleto, rg, cep, rua, numero, bairro, cidade, estado, telefone, email){

    const sql = `
        INSERT INTO cliente 
            (cpf, nomeCompleto, rg, cep, rua, numero, bairro, cidade, estado, telefone, email) 
        VALUES
            (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
    `
  const response = await query({
    query: sql,
    values: [cpf, nomeCompleto, rg, cep, rua, numero, bairro, cidade, estado, telefone, email]
  })

  if (Object.keys(response).length > 0) {
    return response
  } else {
    return null
  }

}

async function editarCliente(cpf, nomeCompleto, rg, cep, rua, numero, bairro, cidade, estado, telefone, email){

    const sql = `
        UPDATE cliente 
        SET
            cpf = ?,
            nomeCompleto = ?, 
            rg = ?, 
            cep = ?, 
            rua = ?, 
            numero = ?, 
            bairro = ?, 
            cidade = ?, 
            estado = ?, 
            telefone = ?, 
            email = ?
        WHERE
            cpf = ?
    `
  const response = await query({
    query: sql,
    values: [cpf, nomeCompleto, rg, cep, rua, numero, bairro, cidade, estado, telefone, email, cpf]
  })

  if (Object.keys(response).length > 0) {
    return response
  } else {
    return null
  }

}

async function todosClientes(){
  const response = await query({
    query: 'SELECT * FROM cliente',
    values: []
  })

  if (Object.keys(response).length > 0) {
    return response
  } else {
    return null
  }

}

async function getClientePorCpf(cpf){
  const response = await query({
    query: 'SELECT * FROM cliente WHERE cpf = ?',
    values: [cpf]
  })

  if (Object.keys(response).length > 0) {
    return response
  } else {
    return null
  }
  
}

async function excluiCliente(cpf){
  const response = await query({
    query: 'DELETE FROM cliente WHERE cpf = ?',
    values: [cpf]
  })

  if (Object.keys(response).length > 0) {
    return response
  } else {
    return null
  }
  
}

export default async function servicoCliente(req, res) {

  // Recebe o serviço
  const service = req.body.service;

  if(service){

    switch(service){

      
      case 'cadastraCliente':{

        const {cpf, nomeCompleto, rg, cep, rua, numero, bairro, cidade, estado, telefone, email} = req.body;
        const response = await cadastraCliente(cpf, nomeCompleto, rg, cep, rua, numero, bairro, cidade, estado, telefone, email);
        res.json({ result: response});
       
        break;
      }
     
      case'editarCliente' :{
        const {cpf, nomeCompleto, rg, cep, rua, numero, bairro, cidade, estado, telefone, email} = req.body;

        const response = await editarCliente(cpf, nomeCompleto, rg, cep, rua, numero, bairro, cidade, estado, telefone, email);
        res.json({ result: response});
        
        break;
      }
     
      case 'delete' :{

        const {cpf} = req.body;
        const response = await excluiCliente(cpf);
        res.json({ result: response});
        
        break;
      }
    }

  }else{
    // Se não passar o serviço no body, mas passar o cpf, ele retorna o cliente com esse cpf
    if(req.body.cpf){
        const cliente = await getClientePorCpf(req.body.cpf);
        res.json({ result: cliente});
        
    }
    // Se não passar nada no body ele retorna todos os clientes
    else{

      const clientes = await todosClientes();
      res.json({ result: clientes});
    }
    
  }
  
}