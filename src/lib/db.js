import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: 'localhost', // Endereço do servidor MySQL
  user: 'root', // Usuário do banco de dados
  password: '123456', // Senha do banco de dados
  database: 'snetoVeiculosdb' // Nome do banco de dados
});

export default connection;