
import connection from '../../lib/db';

export function getAdmins(req, res) {
  connection.query('SELECT * FROM admin', (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results);
  });
}

export function createAdmin(nome, sobrenome, login, senha) {
    
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO admin SET (nome, sobrenome, login, senha) VALUES(?, ?, ?, ?);', [nome, sobrenome, login, senha], 

      (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results.insertId);
        }
      });
    });
}

