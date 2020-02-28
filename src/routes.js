import { Router } from 'express';

import UserController from './app/controllers/UsersController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware); // TODAS AS ROTAS PRA BAIXO SEMPRE VAO EXECUTAR ESSE MIDDLEWARE ANTES

routes.put('/users', UserController.update);

export default routes;
