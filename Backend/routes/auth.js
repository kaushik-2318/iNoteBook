const express = require('express');
const User = require('../models/User');
const router = express.Router();


//Create a User using: post"/api/auth/". Doesn't require auth
router.post('/', (req, res)=>{
    console.log(req.body);
    // res.send("Hello");
    const user = User(req.body);
    user.save()
    res.send(req.body);
})
module.exports = router