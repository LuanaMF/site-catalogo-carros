
import { query } from "@/lib/db";

var md5 = require('md5');

async function alterarSenha(senha, login){
  const response = await query({
    query: 'UPDATE admin SET senha = ? WHERE login = ?',
    values: [senha, login]
  })

  if (Object.keys(response).length > 0) {
    return response[0]
  } else {
    return null
  }
}

async function cadastraAdmin(nome, sobrenome, login, senha){
  const response = await query({
    query: 'INSERT INTO admin (nome, sobrenome, login, senha) VALUES(?, ?, ?, ?);',
    values: [nome, sobrenome, login, senha]
  })

  if (Object.keys(response).length > 0) {
    return response[0]
  } else {
    return null
  }

}

async function login(login, senha){
  

}

async function todosAdmins(){
  const response = await query({
    query: 'SELECT * FROM admin',
    values: []
  })

  if (Object.keys(response).length > 0) {
    return response
  } else {
    return null
  }

}

async function getAdminPorEmail(login){
  const response = await query({
    query: 'SELECT * FROM admin WHERE login = ?',
    values: [login]
  })

  if (Object.keys(response).length > 0) {
    return response
  } else {
    return null
  }
  
}

async function excluiAdmin(login){
  const response = await query({
    query: 'DELETE FROM admin WHERE login = ?',
    values: [login]
  })

  if (Object.keys(response).length > 0) {
    return response
  } else {
    return null
  }
  
}

export default async function servicoAdmin(req, res) {

  // Recebe o serviço
  const service = req.body.service;

  if(service){

    switch(service){

      //Serviço que altera senha
      case 'alteraSenha':{

        const {login, novaSenha} = req.body;
        const senhaHash = md5(novaSenha);
        const response = await alterarSenha(senhaHash, login);
        res.json({ result: response});
       
        break;
      }
      // Serviço que cadastra admin
      case'cadastrarAdmin' :{
        const {nome, sobrenome, login, senha} = req.body;

        const response = await cadastraAdmin(nome, sobrenome, login, senha);
        res.json({ result: response});
        
        break;
      }
      // Serviço de login
      case 'login' :{

        const {login, senha} = req.body;
        const senhaHash = md5(senha);
        const response = await query({
          query: 'SELECT * FROM admin WHERE login = ? AND senha = ?;',
          values: [login, senhaHash]
        })

        if (Object.keys(response).length > 0) {
          res.json({ result: response[0]});
        } else {
          return res.json({ result: false});
        }
        
        
        break;
      }
      case 'delete':{
        const admin = await excluiAdmin(req.body.login);
        res.json({ result: admin});
      }
    }

  }else{
    // Se não passar o serviço no body, mas passar o login, ele retorna o admin com esse login
    if(req.body.login){
        const admin = await getAdminPorEmail(req.body.login);
        res.json({ result: admin});
        
    }
    // Se não passar nada no body ele retorna todos os admins
    else{

      const admins = await todosAdmins();
      res.json({ result: admins});
    }
    
  }
  
}