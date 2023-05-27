const mongoose = require('mongoose');

const AnnotationDataSchema = new mongoose.Schema({ 
    title: String,
    notes: String,
    priority: Boolean,
 }) // cria o schema para os dados

 module.exports = mongoose.model('Annotations', AnnotationDataSchema) 
 // exporta o modelo como 'Annotations', usando o AnnotationDataSchema acima