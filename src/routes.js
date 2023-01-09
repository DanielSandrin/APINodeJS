const express = require('express');
const CrudController = require('./controllers/CrudController');

const routes = express.Router();


routes.get('/GetAll', CrudController.GetAll);
routes.get('/GetID/:id', CrudController.GetID);
routes.post('/InsertAluno', CrudController.Post)
routes.put('/UpdateAlunos/:id', CrudController.Update)
routes.delete('/DeleteAlunos/:id', CrudController.Delete);

module.exports = routes;
