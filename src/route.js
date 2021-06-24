const express = require('express')
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

const route = express.Router()

route.get('/', (req,res) => res.render("index",{page: 'enter-room'}))
route.get('/creat-pass', (req,res) => res.render("index", {page: 'creat-pass'}))

route.get('/room/:room', (req,res) => res.render("room"))

// formato que o formulario passa a info
route.post('/question/:room/:question/:action', QuestionController.index)
route.post('/create-room', RoomController.create)

module.exports = route

