const express = require('express');

const app = express();

const PORT = 3080;

app.get('/', (req, res)  => {
    res.json({
        'success': true
    });
})
app.get('/portifolio', (req, res) =>{
    //acessando db
    const data = [{
        id: 1,
        name: "My first project",
        createAt: '2120-04-04'
    },
    {
        id: 2,
        name: "My second project",
        createAt: '2120-04-04'
    },
    {
        id: 3,
        name: "My other project",
        createAt: '2120-04-04'
    }
]
    res.json({
        'success': true,
        'data': data
    })
})

app.listen(PORT);