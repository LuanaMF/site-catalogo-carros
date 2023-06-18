
import connection from '../../lib/db';

var md5 = require('md5');

export default async function getAdmin(req, res) {

  // Recebe o serviço
  const service = req.body.service;

  if(service){

    switch(service){

      //Serviço que altera senha
      case 'alteraSenha':{

        const {login, novaSenha} = req.body;
        const senhaHash = md5(novaSenha);
        
        connection.query('UPDATE admin SET senha = ? WHERE login = ?', [senhaHash, login],
        (error, results) => {
              if (error) {
                return res.status(405).json({msg: 'Erro ao alterar senha!', erro: error});
              }
              else{

                return res.status(200).json({msg: 'Senha alterada com sucesso!'});
              }
        });
        
        break;
      }
      // Serviço que cadastra admin
      case'cadastrarAdmin' :{
        const {nome, sobrenome, login, senha} = req.body;

        connection.query('INSERT INTO admin (nome, sobrenome, login, senha) VALUES(?, ?, ?, ?);', [nome, sobrenome, login, senha],
        (error, results) => {
            if (error) {
              return res.status(405).json({msg: 'Erro ao cadastrar o admin!', erro: error});
            }
            else{

              return res.status(200).json({msg: 'Admin registrado com sucesso'});
            }
        });
        
        break;
      }
      // Serviço de login
      case 'login' :{

        const {login, senha} = req.body;
        const senhaHash = md5(senha);
        
        connection.query('SELECT * FROM admin WHERE login = ? AND senha = ?;', [login, senhaHash],
        (error, results) => {
              if (error) {

                return res.status(405).json({msg: 'Erro ao buscar o admin!', erro: error});
              }
              else{

                if(results.length > 0){
                  return res.status(200).json({ admin: results});
                }
                else{
                  return res.status(200).json({msg: 'Login ou senha incorreta!'});
                  
                }
              }
        });
        
        break;
      }
    }

  }else{
    // Se não passar o serviço no body, mas passar o login, ele retorna o admin com esse login
    if(req.body.login){
      
        connection.query('SELECT * FROM admin WHERE login = ?', req.body.login, (error, results) => {
          if (error) {
            return res.status(405).json({msg: 'Erro ao buscar o admin!', erro: error});
          }
          else{
            return res.status(200).json(results);

          }
        });
    }
    // Se não passar nada no body ele retorna todos os admins
    else{

      connection.query('SELECT * FROM admin', (error, results) => {

        if (error) {
          return res.status(405).json({ msg: 'Erro ao buscar o admin!', erro: error });
        }
        else{

          return res.status(200).json(results);
        }

      });

    }
    
  }
  
}