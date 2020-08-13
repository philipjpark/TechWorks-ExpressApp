const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
    <html>
    <head>
    <title> Puppies and Kittens Site </title>
    </head>
    <body>
    <h1> Puppies and Kittens Galore </h1>
    </body>
    </html>
    `)
})

app.get('/puppies', (req, res) => {
    res.send(`// Puppies are adorbs`)
})
    app.get('/kittens', (req, res) => {
        res.send(`// Kittens are cute`)
})

const PORT = 1337;
app.listen(PORT,() => {
    console.log(`listening on port ${PORT}`);
});