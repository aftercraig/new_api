const header = require('../parts/header');
const footer = require('../parts/footer');
const head = require('../parts/head')

const games = `
${head('Игры')}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>Preferred games</title>
</head>
<body>
    ${header}
    <h1>Игры, в которые вам явно стоит поиграть:</h1>
    <ul>
        <li>Cyberpunk 2077</li>
        <li>Do not feed the monkeys</li>
        <li>Papers, please</li>
        <li>Линейка игр Rock of Ages (особенно третья часть)</li>
        <li>Fallout: New Vegas</li>
        <li>Hearts of Iron 4</li>
        <li>Phasmophobia</li>
        <li>Sea of Thieves</li>
    </ul>
    <h1>Игры, в которые играть не стоит:</h1>
    <ul>
        <li>Dota 2</li>
        <li>Dead by Daylight</li>
        <li>Counter Strike: Global Offensive</li>
        <li>World of Tanks</li>
    </ul>
    ${footer}
</body>
</html>
`

module.exports = games;