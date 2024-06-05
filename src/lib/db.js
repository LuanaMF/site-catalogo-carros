import mysql from 'mysql2/promise';


export async function query({ query, values = [] }) {

  const connection = await mysql.createConnection({
    host: 'localhost', // Endereço do servidor MySQL
    user: 'root', // Usuário do banco de dados
    password: 'sqlbanco', // Senha do banco de dados
    database: 'snetoVeiculosdb' // Nome do banco de dados
  });

  try {
      const [results] = await connection.execute(query, values)
      connection.end()
      return results
  } catch (error) {
      throw Error(error.message)
  }
}
