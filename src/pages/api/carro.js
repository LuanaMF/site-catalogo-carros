
import { query } from "@/lib/db";

//Função retorna carro especifico passado id
async function getCarro(id){
    const sql = `
              SELECT c.*, cb.descricao AS combustivel FROM carro c INNER JOIN combustivel cb ON c.combustivel_id = cb.id WHERE c.id = ?
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

async function getCombustiveis(){
  
  const response = await query({
    query: 'SELECT * from combustivel',
    values: []
  })

  if (Object.keys(response).length > 0) {
    return response
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
    SELECT * FROM carro
  `
  const response = await query({
    query: sql,
    values: []
  })

  if (Object.keys(response).length > 0) {
    return response
  } else {
    return null
  }
 
}

async function deleteCarro(id){

  const response = await query({
    query: 'DELETE FROM carro WHERE id = ?',
    values: [id]
  })

  if (Object.keys(response).length > 0) {
    return response[0]
  } else {
    return null
  }

}

async function editaCarro(marca, modeloVersao, anoFabricacao, anoModelo, quilometragem, combustivel, cambio, vendido, devolvido,leiloado, gnv, obs, id){
  const sql = `
            UPDATE carro SET
              marca = ?, modelo_versao = ?, ano_fabricacao = ?, ano_modelo = ?, quilometragem = ?, combustivel_id = ?, cambio = ?,
              vendido = ?, devolvido = ?, leiloado = ?, gnv = ?, observacoes = ?
            WHERE
              id = ?;
        `;

  const response = await query({
    query: sql,
    values: [marca, modeloVersao, anoFabricacao, anoModelo, quilometragem, combustivel, cambio, vendido, devolvido, leiloado, gnv, obs, id]
  })

  if (Object.keys(response).length > 0) {
    return response[0]
  } else {
    return null
        }
}

async function cadastraCarro(marca, modeloVersao, anoFabricacao, anoModelo, quilometragem, combustivel, cambio, vendido, devolvido, leiloado, gnv, obs){
  const sql = `
            INSERTO INTO carro (marca, modelo_versao, ano_fabricacao, ano_modelo, quilometragem, combustivel_id, cambio, vendido, devolvido, leiloado, gnv, observacoes)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
        `;

  const response = await query({
    query: sql,
    values: [id]
  })
  if (Object.keys(response).length > 0) {
    return response[marca, modeloVersao, anoFabricacao, anoModelo, quilometragem, combustivel, cambio, vendido, devolvido, leiloado, gnv, obs]
  } else {
    return null
  }
}

export default async function servicoCarro(req, res) {

  // Recebe o serviço
  const service = req.body.service;
  const {marca, modeloVersao, anoFabricacao, anoModelo, quilometragem, combustivel, cambio, vendido, devolvido, leiloado, gnv, obs} = req.body;
  
  if(service){

    switch(service){

      //Serviço que cadastra carro
      case 'cadastrarCarro':{
        const result = await cadastraCarro(marca, modeloVersao, anoFabricacao, anoModelo, quilometragem, combustivel, cambio, vendido, devolvido, leiloado, gnv, obs);
        res.json({ result: result});
       
        break;
      }

      // Serviço que edita carro
      case'editarCarro' :{
        const { id } = req.body;

        const result = await editaCarro(marca, modeloVersao, anoFabricacao, anoModelo, quilometragem, combustivel, cambio, vendido, devolvido, leiloado, gnv, obs, id);
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
      case 'getCombustiveis':{
        const result = await getCombustiveis();
        res.json({ result: result});
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
