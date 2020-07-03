const getData = require('./repository').getData
const express = require('express')
const app = express()
const port = 3000

app.get('/', async (req, res) => {
    const data = await getData();
    res.send(`Hello World!<br><br><pre>${JSON.stringify(data, null, 4)}</pre>`);
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
