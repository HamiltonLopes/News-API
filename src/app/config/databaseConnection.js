import mysql from 'mysql2/promise'; //utilizando promise me possibilita de utilizar o await

export default async function connectMysql() {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST, //ip que está rodando o banco
        user: process.env.DB_USER, //usuario do mysql
        password: process.env.DB_PASSWORD, //senha mysql
        database: process.env.DB_NAME //nome da base de dados
    });
    // connection.connect(); com o promise não há necessidade do connect
    return connection;
}

