
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

async function cadastraImagens(imagens){

  imagens.shift();
  imagens.forEach(async (img, index) => {
      const sql = `
             INSERT INTO img_carro (id_carro, img, principal)
             VALUES (?, ?, ?)
          `;
      let principal = index === 0 ? 1 : 0;

      const response = await query({
        query: sql,
        values: [img.id_carro, img.img, principal]
      })
  });
  

}

//Função retorna img principal de carro especifico passado id
async function getImgPrincipal(id){
  const sql = `
            SELECT img FROM img_carro WHERE id_carro = ? AND principal = true
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
    SELECT *, (SELECT img FROM img_carro as img WHERE img.id_carro = c.id AND principal = 1)AS imgPrincipal FROM carro AS c where vendido = 0;
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
// Retorna todos carros
async function getAllCarrosVendidos(){
  // Ele retorna as imagens em um só campo 'imagem' só que separado por virgula, ai a gente faz esse tratamento no front
  const sql = `
    SELECT *, (SELECT img FROM img_carro as img WHERE img.id_carro = c.id AND principal = 1)AS imgPrincipal FROM carro AS c where vendido = 1;
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

async function cadastraCarro(marca, modeloVersao, anoFabricacao, anoModelo, quilometragem, combustivel, cambio, vendido, devolvido, leiloado, gnv, obs, chassi, fornecedor, renavam, valor){
  const sql = `
            INSERT INTO carro (marca, modelo_versao, ano_fabricacao, ano_modelo, quilometragem, combustivel_id, cambio, vendido, devolvido, leiloado, gnv, observacoes, chassi, fornecedor, renavam, valor)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
        `;

  const response = await query({
    query: sql,
    values: [marca, modeloVersao, anoFabricacao, anoModelo, quilometragem, combustivel, cambio, vendido, devolvido, leiloado, gnv, obs, chassi, fornecedor, renavam, valor]
  })

  let idNovocarro = null;

  if ('insertId' in response) {
     idNovocarro = response.insertId;
  }

  if (Object.keys(response).length > 0) {
    return idNovocarro
  } else {
    return null
  }
}

export default async function servicoCarro(req, res) {

  // Recebe o serviço
  const service = req.body.service;
  const {marca, modelo_versao, ano_fabricacao, ano_modelo, quilometragem, combustivel_id, cambio, vendido, devolvido, leiloado, gnv, observacoes, chassi, fornecedor, renavam, valor} = req.body;
  
  if(service){

    switch(service){

      //Serviço que cadastra carro
      case 'cadastrarCarro':{
        const result = await cadastraCarro(marca, modelo_versao, ano_fabricacao, ano_modelo, quilometragem, combustivel_id, cambio, vendido, devolvido, leiloado, gnv, observacoes, chassi, fornecedor, renavam, valor);
        res.json({ result: result});
       
        break;
      }

      //Serviço que cadastra carro
      case 'saveImagens':{
        const result = await cadastraImagens(req.body.imagens);
        res.json({ result: 'Ok'});
       
        break;
      }

      // Serviço que edita carro
      case'editarCarro' :{
        const { id } = req.body;

        //const result = await editaCarro(marca, modeloVersao, anoFabricacao, anoModelo, quilometragem, combustivel, cambio, vendido, devolvido, leiloado, gnv, obs, id);
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
        break;
      }

      case 'getImgPrincipal':{
        const result = await getImgPrincipal(req.body.idCarro);
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

    if(req.body.apenasVendidos){
      const result = await getAllCarrosVendidos();
      res.json({ result: result});
    }
    
    //Se não passar nada no body retorna todos os carros e suas imagens
    else{
      const result = await getAllCarros();
      res.json({ result: result});
        
    }
    
  }
  
}
