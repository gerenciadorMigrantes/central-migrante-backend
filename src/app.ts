
import indexRoute from './routers/index'
import produtoRouter from './routers/produtoRoute'
import usuarioRouter from './routers/usuarioRoute'
import enderecoRouter from './routers/enderecoRoute'
import { Sequelize } from "sequelize"
const cors =  require("cors")
const express =  require("express")
require('dotenv').config({ path: __dirname+'/.env' });

// const Role = require("../models").Role
const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://postgres:pac123@localhost:5432/mydb', {
    logging: false,
    dialectOptions: process.env.NODE_ENV === 'production' ? {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    } : {},
})

// sequelize.sync().then(() => {
//     console.log('Resync Db');
//     initial();
//   });

export const sequelizeConnection = async () => {
    try {
        sequelize
            .authenticate()
            .then(() => {
                console.log('Postgres connection has been established successfully.')
            })
    } catch (error) {
        console.error('Unable to connect to the database:', error)
    }
}

async function initial() {

    // try{
    //     await Role.create({
    //         id: 1,
    //         nome: "user",
    //         descricao: "usuario comum"
    //       });
    //
    //       await Role.create({
    //         id: 2,
    //         nome: "moderator",
    //         descricao: "usuario moderador"
    //       });
    //
    //       await Role.create({
    //         id: 3,
    //         nome: "admin",
    //         descricao: "usuario administrador"
    //       });
    //
    // }catch(e){
    //     console.log("\n \n Não foi possivel criar papeis, pois já foram criados \n\n")
    // }
    
}

const app = express()
const port = process.env.PORT;

app.use(cors());


app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.listen(process.env.PORT, "0.0.0.0", () => {
    console.log('Server running on port: ' + port)
})


app.use("/", indexRoute)
app.use("/produtos", produtoRouter)
app.use("/usuarios", usuarioRouter)
app.use("/enderecos", enderecoRouter)