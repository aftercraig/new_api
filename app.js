const express = require("express")
const bodyParser = require("body-parser");
const app = express();

const aboutMe = require("./view/contacts")

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/students', (req, res) => {
    console.log(req.headers) // req.body, req.headers, req.query
    const student = {
        name: "Pablo",
        group: "IS22-11"
    }
    res.send(student)
})

app.get('/huesos', (req, res) => {
    console.log(req.headers) // req.body, req.headers, req.query
    res.json(aboutMe)
    
})


app.listen(8195, () => {
    console.log("Сервер запущен на порте 8195.")
})