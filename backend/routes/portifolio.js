const router = require('express').Router()
const Portifolio = require('../models/Portifolio')

router.get('/',async (req, res) => {
    
    try {
        const portifolio = await Portifolio.find()

        res.json({
            success: true,
            data: portifolio
    })
    }catch (error) {
        res.json({
            success: false,
            message: error
        })
    }
   
});
router.get('/:portifolioId', (req, res) => {
    console.log("Este foi o id informado: ", req.params.portifolioId);
    res.json({
        success: true,
        id: req.params.portifolioId
    })
})
router.post('/', async(req, res) => {
    const portifolio = new Portifolio({
        title: req.body.title,
        description: req.body.description
    })
    try {
        const savedProtifolio = await portifolio.save()
        res.json({
            success: true,
            data: savedProtifolio
        })

    } catch (error) {
        res.json({
            success: false,
            message: err
        })
    }
})
module.exports = router