const express = require('express');
const questionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

const route = express.Router();

route.get('/', (req, res) => res.render("index", {page: 'enter-room'}))
route.get('/create-pass', (req, res) => res.render("index", {page: 'create-pass'}))

route.post('/create-room', RoomController.create)
route.get('/room/:room', RoomController.open)
route.post('/enterroom', RoomController.enter)

route.post('/question/create/:room', questionController.create)
route.post('/question/:room/:question/:action', questionController.index)


//Formato que o formulario de dentro da modal tem que passar a informação
//route.get('/room/:room/:question/:action', (req, res) => res.render("exemplo", {req}))



module.exports = route;
