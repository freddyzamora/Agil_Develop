const { Schema, model } = require('mongoose');

const EventoSchema = Schema({

    codigo: {
        type: Number,
        required: true
    },
    nombre: {
        type: String,
        required: true        
    },
    descripcion: {
        type: String,
    },
    valor: {
        type: Number,
        required: true
    },
    imagen: {
        type: String,
    },
    disponible: {
        type: String,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }

});

EventoSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});



module.exports = model('Evento', EventoSchema );

