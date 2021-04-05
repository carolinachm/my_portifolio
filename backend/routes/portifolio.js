const router = require('express').Router()

router.get('/', (req, res) =>{
    //acessando db
    const data = [{
        id: 1,
        name: "My first project",
        createAt: '2120-04-04'
    },
    {
        id: 2,
        name: "My second project",
        createAt: '2120-04-05'
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
});
router.get('/:portifolioId', (req, res) =>{
    console.log("Este foi o id informado: ", req.params.portifolioId);
    res.json({
        success: true,
        id: req.params.portifolioId
    })
})
router.post('/', (req, res) => {
    res.json(req.body)
})
module.exports = router