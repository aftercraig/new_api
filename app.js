const express = require("express")
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    console.log(req.headers) // req.body, req.headers, req.query
    const student = {
        name: "Pablo",
        group: "IS22-11"
    }
    res.json(student)
})

app.get('/students', (req, res) => {
    console.log(req.headers) // req.body, req.headers, req.query
    const student = {
        name: "Gleb",
        group: "IS22-11"
    }
    res.json(student)
})


app.listen(8195, () => {
    console.log("Сервер запущен на порте 8195.")
})