const express = require('express')
const routes = express.Router()

// requer o controlador
const AnnotationController = require('./controllers/AnnotationController') 
const PriorityController = require('./controllers/PriorityController')
const ContentController = require('./controllers/ContentController')

// chama a função do controlador para cada rota e método utilizado

// rota annotations
routes.post('/annotations', AnnotationController.create) 
routes.get('/annotations', AnnotationController.read)
routes.delete('/annotations/:id', AnnotationController.delete)

// rota priority
routes.get('/priorities', PriorityController.read)
routes.post('/priorities/:id', PriorityController.update)

// rota content 
routes.post('/contents/:id', ContentController.update)

module.exports = routes;