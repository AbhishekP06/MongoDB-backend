const express = require('express')
const router = express.Router();

const Pioneer = require('../models/pioneerModel')

router.get('/pioneers', async(req, res) => {
    try{
        const pioneer = await Pioneer.find();
        res.status(200).json(pioneer);
    }
    catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
})

router.post('/pioneers', async(req, res) => {
    try{
        const {name, designation, sdesc, desc, img, aimg} = req.body;
        const newPoineer = new Pioneer({ name, designation, sdesc, desc, img, aimg });
        await newPoineer.save();
        res.status(200).json({
            success: true,
            pioneer: newPoineer
        });
    }
    catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
})

module.exports = router;