import 'dotenv/config';
import express from 'express';
import sequelize from'./src/database/db.js';
import { UserRouter } from './src/router/user.router.js'

// importar o modelo para garantir o registro do sequelize
import './src/models/user.model.js';

const app = express();
app.use(express.json());

// Chama o metodo das Rotas
app.use('/user', UserRouter);

// Sincronizando o Sequelize e então (.then()) iniciando o server
sequelize.sync({ alter: true }).then(() =>{
    app.listen(process.env.API_PORT, ()=>{
        console.log(`Servidor rodando em: localhost:${process.env.API_PORT}`);
    });
}).catch(err => console.log("Erro ao montar a API: ", err));
