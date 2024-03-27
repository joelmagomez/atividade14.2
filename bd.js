// db.js
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'monorail.proxy.rlwy.net',
  user: 'root',
  password: 'RBgVTibAukLaZttRMzwDWSrvfnmysflN',
  database: 'railway'
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados: ', err);
    return;
  }
  console.log('Conexão com o banco de dados MySQL estabelecida.');
});

module.exports = connection;