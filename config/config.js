require('dotenv').config({ path: './src/.env' });

module.exports = {
  "development": {
    "username": "postgres",
    "password": process.env.PASSWORD,
    "database": process.env.DATABASE,
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  production: {
    client: 'pc',
    dialect: 'postgres',
    connection: process.env.DATABASE_URL,
    username: process.env.NOME,
    password: process.env.SENHA,
    database: process.env.BANCO,
    host: process.env.HOSTIP,
    port: process.env.PORTA
  }
}
