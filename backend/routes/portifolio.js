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
router.get('/:slug', async (req, res) => {
    try {
        const portifolio = await Portifolio.findOne({
            slug: req.params.slug
        })
       
        res.json({
            success: true,
            data: portifolio
        })
        
    } catch (error) {
        res.json({
            success: false,
            message: error
        })
    }
      
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

router.patch('/:slug', async(req, res) => {
   
    try {
        const updatedProtifolio = await Portifolio.updateOne({
            slug: req.params.slug
        },
        {
            title: req.body.title,
            description: req.body.description
        })
        res.json({
            success: true,
            data: updatedProtifolio
        })

    } catch (error) {
        res.json({
            success: false,
            message: err
        })
    }
})
router.delete('/:slug', async(req, res) => {
   
    try {
        const deletedProtifolio = await Portifolio.deleteOne({
            slug: req.params.slug
        })
        res.json({
            success: true,
            deleted: deletedProtifolio.deletedCount
        })

    } catch (error) {
        res.json({
            success: false,
            message: err
        })
    }
})
module.exports = router