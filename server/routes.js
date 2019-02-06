// Routes.js - Módulo de rutas
var express = require('express');
var router = express.Router();
var push = require('./push')


const mensajes = [

  {
    _id: '1',
    user: 'SpiderMan',
    mensaje: 'Hola Mundo'
  }

];



// Get mensajes
router.get('/', function (req, res) {
  res.json(mensajes);
});

//Post mensajes
router.post('/', function (req, res) {
  
  const mensaje = {
    mensaje: req.body.mensaje,
    user: req.body.user,
    lat: req.body.lat,
    lng: req.body.lng,
    foto: req.body.foto
  };

  mensajes.push( mensaje );

  console.log(mensajes);


  res.json({
    ok: true,
    mensaje
  });
});

//Almacenar la Suscripcion
router.post('/subscribe', (req, res) => {

  const suscripcion = req.body

  console.log(suscripcion)

  push.addSubscription(suscripcion);

  res.json('subscribe')

})

//Obtener Key
router.get('/key', (req, res) => {

  const key = push.getKey();

  res.send(key)

})

//Enviar Notificacion PUSH a las personas que nosotros queremos
//ES ALGO que se controla del lado del server
router.post('/push', (req, res) => {

  const post = {
    titulo : req.body.titulo,
    cuerpo : req.body.cuerpo,
    usuario : req.body.usuario
  }

  push.sendPush(post);  

  res.json(post)

})


module.exports = router;