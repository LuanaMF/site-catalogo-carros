
import { query } from "@/lib/db";

//Função retorna carro especifico passado id
async function getCarro(id){
    const sql = `
              SELECT * FROM carro WHERE id = ?
          `;
    
    const response = await query({
      query: sql,
      values: [id]
    })

    if (Object.keys(response).length > 0) {
      return response[0]
    } else {
      return null
    }

}

//Função retorna carro especifico passado id
async function getImgs(id){
  const sql = `
            SELECT img FROM img_carro WHERE id_carro = ?
        `;
  
  const response = await query({
    query: sql,
    values: [id]
  })

  if (Object.keys(response).length > 0) {
    return response
  } else {
    return null
  }

}

// Retorna todos carros
async function getAllCarros(){
  // Ele retorna as imagens em um só campo 'imagem' só que separado por virgula, ai a gente faz esse tratamento no front
  const sql = `
    SELECT c.*, GROUP_CONCAT(i.img) AS imagens
    FROM carro c
    LEFT JOIN img_carro i ON c.id = i.id_carro
    GROUP BY c.id;
  `
  connection.query(sql, (error, resultsCarro) => {
    if (error) {
      return error;
    }
    else{
      return resultsCarro
    }
  });
}

async function deleteCarro(id){
  connection.query('DELETE FROM carro WHERE id = ?', id, (error, results) => {
    if (error) {
      return error
    }
    else{
      return results
    }
  });
}

async function editaCarro(marca, modeloVersao, anoFabricacao, anoModelo, quilometragem, combustivel, cambio, id){
  const sql = `
            UPDATE carro SET
            marca = ?, modelo_versao = ?, ano_fabricacao = ?, ano_modelo = ?, quilometragem = ?, combustivel = ?, cambio = ?
            WHERE
            id = ?;
        `;

  connection.query(sql, [marca, modeloVersao, anoFabricacao, anoModelo, quilometragem, combustivel, cambio, id], (error, results) => {
      if (error) {
          return error
      }
      else{
          return results
      }
  });
}

async function cadastraCarro(marca, modeloVersao, anoFabricacao, anoModelo, quilometragem, combustivel, cambio){
  const sql = `
            INSERTO INTO carro (marca, modelo_versao, ano_fabricacao, ano_modelo, quilometragem, combustivel, cambio)
            VALUES (?, ?, ?, ?, ?, ?, ?);
        `;

  connection.query(sql, [marca, modeloVersao, anoFabricacao, anoModelo, quilometragem, combustivel, cambio], (error, results) => {
    if (error) {
        return error
    }
    else{
        return results
    }
  });
}

export default async function getAdmin(req, res) {

  // Recebe o serviço
  const service = req.body.service;

  if(service){

    switch(service){

      //Serviço que cadastra carro
      case 'cadastrarCarro':{
        const {marca, modeloVersao, anoFabricacao, anoModelo, quilometragem, combustivel, cambio} = req.body;

        const result = await cadastraCarro(marca, modeloVersao, anoFabricacao, anoModelo, quilometragem, combustivel, cambio);
        res.json({ result: result});
       
        break;
      }

      // Serviço que edita carro
      case'editarCarro' :{

        const {marca, modeloVersao, anoFabricacao, anoModelo, quilometragem, combustivel, cambio, id} = req.body;
        const result = await editaCarro(marca, modeloVersao, anoFabricacao, anoModelo, quilometragem, combustivel, cambio, id);
        res.json({ result: result});
       
        break;
      }

      // Serviço de deletar carro
      case 'delete' :{
        const { id } = req.body;
        const result = await deleteCarro(id);
        res.json({ result: result});
           
        break;
       
      }
    }

  }else{
    
    // Se não passar o serviço na requisição, mas passar o id, ele retorna o carro e imagens com esse id
    if(req.body.id){
        
        const { id } = req.body;
        const resultCarro = await getCarro(id);
        const resultImg = await getImgs(id);
       
        res.json({ carro: resultCarro, imagens: resultImg});

    }

    //Se não passar nada no body retorna todos os carros e suas imagens
    else{
      const result = await getAllCarros();
      res.json({ result: result});
        
    }
    
  }
  
}
