const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const main = require("./content/main");
const aboutme = require("./content/aboutme");
const games = require("./content/games");
const pcspec = require("./content/pc");

app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
    response.send(main)
})

app.get('/aboutme', (request, response) => {
    response.send(aboutme)
})

app.get('/games', (request, response) => {
    response.send(games)
})

app.get('/pc', (request, response) => {
    response.send(pcspec)
})

app.listen(8000, () => {
    console.log("Сервер запущен, порт: 8000.")
})