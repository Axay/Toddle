const express = require('express');
const jwt = require('jsonwebtoken')
const router = new express.Router();


router.post('/login', (req, res) => {
    try {
        user = req.body.email; 
        token = jwt.sign({ user }, "process.env.SECRET" , { expiresIn:'24 hours' });;
        return res.send({user, token});
    }catch (e) {
        console.log(e);
        res.status(400).send({error : "log in failed"});
    }
});

module.exports = router;