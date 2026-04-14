import { User } from '../models/user.model.js'

export async function getUser(req, res) {
    try {
        // Puxa todos os usuarios da tabela de User
        const allUser = await User.findAll();
        console.log(allUser);
        res.status(201).json(allUser);
    } catch (error) {
        res.status(500).json(error);
    }
}