
import connection from '../../lib/db';


export default async function getAdmin(req, res) {

  // Recebe o serviço
  const service = req.body.service;

  if(service){

    switch(service){

      //Serviço que cadastra carro
      case 'cadastrarCarro':{
        const {marca, modeloVersao, anoFabricacao, anoModelo, quilometragem, combustivel, cambio} = req.body;

        const sql = `
            INSERTO INTO carro (marca, modelo_versao, ano_fabricacao, ano_modelo, quilometragem, combustivel, cambio)
            VALUES (?, ?, ?, ?, ?, ?, ?);
        `;

        connection.query(sql, [marca, modeloVersao, anoFabricacao, anoModelo, quilometragem, combustivel, cambio], (error, results) => {
        if (error) {
            return res.status(405).json({msg: 'Erro ao cadastrar o carro!', erro: error});
        }
        else{
            return res.status(200).json(results);

        }

        });
       
        break;
      }

      // Serviço que edita carro
      case'editarCarro' :{

        const {id, marca, modeloVersao, anoFabricacao, anoModelo, quilometragem, combustivel, cambio} = req.body;

        const sql = `
            UPDATE carro SET
            marca = ?, modelo_versao = ?, ano_fabricacao = ?, ano_modelo = ?, quilometragem = ?, combustivel = ?, cambio = ?
            WHERE
            id = ?;
        `;

        connection.query(sql, [marca, modeloVersao, anoFabricacao, anoModelo, quilometragem, combustivel, cambio, id], (error, results) => {
            if (error) {
                return res.status(405).json({msg: 'Erro ao editar o carro!', erro: error});
            }
            else{
                return res.status(200).json(results);
    
            }

        });
       
        break;
      }

      // Serviço de deletar carro
      case 'delete' :{
        connection.query('DELETE FROM carro WHERE id = ?', req.body.id, (error, results) => {
            if (error) {
                return res.status(405).json({msg: 'Erro ao deletar o carro!', erro: error});
            }
            else{
                return res.status(200).json(results);
            }
    
        });
           
        break;
       
      }
    }

  }else{
    // Se não passar o serviço no body, mas passar o id, ele retorna o carro e imagens com esse id
    if(req.body.id){
        
        const sql = `
            SELECT c.*, GROUP_CONCAT(i.img) AS imagens
            FROM carro c
            LEFT JOIN img_carro i ON c.id = i.id_carro
            WHERE c.id = ?;
        `;

        connection.query(sql, req.body.id, (error, results) => {
          if (error) {
            return res.status(405).json({msg: 'Erro ao buscar o carro!', erro: error});
          }
          else{
            return res.status(200).json(results);

          }
        });

    }

    //Se não passar nada no body retorna todos os carros e suas imagens
    else{
        // Ele retorna as imagens em um só campo 'imagem' só que separado por virgula, ai a gente faz esse tratamento no front
        const sql = `
            SELECT c.*, GROUP_CONCAT(i.img) AS imagens
            FROM carro c
            LEFT JOIN img_carro i ON c.id = i.id_carro
            GROUP BY c.id;
        `
        connection.query(sql, (error, resultsCarro) => {
            if (error) {
              return res.status(405).json({msg: 'Erro ao buscar os carros!', erro: error});
            }
            else{
               return res.status(200).json({msg: 'Carros recuperados com sucesso', carros: resultsCarro})
            }
        });
        
    }
    
  }
  
}
