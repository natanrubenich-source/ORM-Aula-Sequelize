import { log } from 'node:console';
import { User } from '../models/user.model.js'
import bcrypt from 'bcryptjs';


export async function getUser(req, res) {
    try {
        // Puxa todos os usuarios da tabela de User
        const allUser = await User.findAll();
        res.status(201).json(allUser);
    } catch (error) {
        res.status(500).json(error);
    }
}

export async function getUserId(req, res) {
    const id = req.params.id;    
    try {
        // Puxar da tabela User pelo id
        const resUserId = await User.findByPk(id);
        res.status(201).json(resUserId);

    } catch (error) {
        res.status(500).json(error);
    }
}

export async function createUser(req, res) {
    const {nome, email, senha} = req.body;
    try {
        if (!nome || !email || !senha){
            res.status(403).json({error: "Requisição incompleta"});
        }
        const senha_hash = await bcrypt.hash(senha, 10);
        
        const resCreateUser = await User.create({
            nome: nome,
            email: email,
            senha: senha_hash
        });
        
        // Transforma em objeto simples
        const userJson = resCreateUser.toJSON();
        // Agora o delete funciona
        delete userJson.senha; 

        res.status(201).json({
            mensagem: "Usuario criado",
            resCreateUser: userJson
       });

    } catch (error) {
        res.status(500).json(error);
    }
}