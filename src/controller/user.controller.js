import { User } from '../models/user.model.js'

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