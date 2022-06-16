import { Router } from 'express';
import dotenv from 'dotenv';

import CategoriaController from './app/Controllers/CategoriaController.js';
import ListarNoticiasController from './app/Controllers/ListarNoticiasController.js';
import NoticiaController from './app/Controllers/NoticiaController.js';

dotenv.config();
const Routes = new Router();

Routes.get('/', (req, res) => res.send('Hello'));

Routes.get(`/${process.env.API_NAME}/${process.env.API_VERSION}/categorias`, CategoriaController.index);
Routes.post(`/${process.env.API_NAME}/${process.env.API_VERSION}/categorias`, CategoriaController.store);

Routes.get(`/${process.env.API_NAME}/${process.env.API_VERSION}/categorias/:id_categoria/noticias`, ListarNoticiasController.index);

Routes.post(`/${process.env.API_NAME}/${process.env.API_VERSION}/categorias/:id_categoria/noticias`, NoticiaController.store);
Routes.get(`/${process.env.API_NAME}/${process.env.API_VERSION}/categorias/:id_categoria/noticias/:id_noticia`, NoticiaController.index);

export default Routes;