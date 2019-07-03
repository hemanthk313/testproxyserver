const express = require('express')
const app = express()
const port = 3000
const Queue = require('bull');
const Proxy = new Queue('proxy', 'redis://127.0.0.1:6379');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.get('/', (req, res) => res.send('Hello World!'))
app.post('/', (req, res) => {
    Proxy.add(req.body)
    res.json(req.body);
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))