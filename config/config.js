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
    client: 'pg',
    host: '111.222.333',
    dialect: 'postgres',
    connection: process.env.DATABASE_URL,
    migrations: {
      tableName: "SequelizeMeta",
      directory: "./migrations"
    }
  }
}
