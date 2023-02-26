const header = require('../parts/header');
const footer = require('../parts/footer');
const head = require('../parts/head')

const aboutme = `
${head('Обо мне')}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>About me</title>
</head>
<body>
    ${header}
    <h1>Обо мне:</h1>
    <ul>
        <li>Имя: Павел</li>
        <li>Возраст: 18</li>
        <li>Город: Сургут</li>
        <li>Хобби: кодинг, сборка и ремонт комплектующих пк, компьютерные игры (например дбд, ксго), чтение (люблю энциклопедии по Великой Отечественной)</li>
    </ul>
    ${footer}
</body>
</html>
`

module.exports = aboutme;