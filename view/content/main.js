const header = require('../parts/header');
const footer = require('../parts/footer');
const head = require('../parts/head')

const main = `
${head('Главная')}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>Main page</title>
</head>
<body>
    ${header}
    <h1>This is my first api</h1>
    <p>Ничего особенного, просто главная страница</p>
    ${footer}
</body>
</html>
`

module.exports = main;