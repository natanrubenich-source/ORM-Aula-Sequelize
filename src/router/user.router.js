import { Router } from 'express';
import * as userCtrl from '../controller/user.controller.js'

const UserRouter = Router();

////// Rotas do User

// GET - Puxar todos os User
UserRouter.get('/', userCtrl.getUser);

// GET - Puxar um User por ID
UserRouter.get('/:id', userCtrl.getUserId);

// POST - Cadastrar User

// Delete - Destruir um registro de usuario por ID


// Exporta a rota de user para o main(server.js)
export default UserRouter;