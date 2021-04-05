const express = require('express');
const bodyParser = require('body-parser');

const api = require('./backend/routes')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 3080;

app.get('/', (req, res)  => {
    res.json({
        'success': true
    });
})

app.use('/api', api);

app.listen(PORT);