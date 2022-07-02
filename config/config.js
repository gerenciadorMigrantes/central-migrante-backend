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
    "username": process.env.NOMEUSUARIO,
    "password": process.env.SENHABANCO,
    "database": process.env.NOMEBANCO,
    "host": process.env.HOSTBANCO,
    "dialect": "postgres"
  }
}
