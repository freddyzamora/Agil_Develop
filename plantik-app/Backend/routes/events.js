/*
    Event Routes
    /api/events
*/
const { Router } = require('express');
const { check } = require('express-validator');


const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');

const router = Router();

// Todas tienes que pasar por la validación del JWT
router.use( validarJWT );


// Obtener eventos 
router.get('/', getEventos );

// Crear un nuevo evento
router.post(
    '/',
    [
        check('codigo','El codigo es obligatorio').not().isEmpty(),
        check('nombre','El nombre es obligatorio').not().isEmpty(),
        check('valor','El valor es obligatorio').not().isEmpty(),


        validarCampos
    ],
    crearEvento 
);

// Actualizar Evento
// router.put(
//     '/:id', 
//     [
//         check('title','El titulo es obligatorio').not().isEmpty(),
//         validarCampos
//     ],
//     actualizarEvento 
// );

// Borrar evento
// router.delete('/:id', eliminarEvento );

module.exports = router;