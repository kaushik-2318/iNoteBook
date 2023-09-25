const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');


//Create a User using: post"/api/auth/". Doesn't require auth
router.post('/', [
    body('name', 'Enter a Valid Name').isLength({min:3}),
    body('email', 'Enter a Valid Email').isEmail(),
    body('password', 'Enter a Valid Password').isLength({min:5}),
], (req, res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    User.create({
        name : req.body.name,
        password: req.body.password,
        email: req.body.email,
    }).then(user => res.json(user))
    .catch(err=> {console.log(err)
    res.json({error: 'Please Enter a Unique value for Email'})});

    // res.send(req.body);
})
module.exports = router