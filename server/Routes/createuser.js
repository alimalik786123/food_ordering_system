const express = require('express');
const Router = express.Router()
const User = require("../models/Schema");
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const { body, validationResult } = require('express-validator')
const jwt=require('jsonwebtoken')
const secret="mynameisalimalikmynameisalimalik"

Router.post("/user", jsonParser,
    [body('email').isEmail(),
    body('password').isLength({ min: 5 })]
    , async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        else {
            await User.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password



            })
            
            res.json({ success: true })
        }
        // console.log(try1);
    })

Router.post("/login",jsonParser, [body('email').isEmail(),
body('password').isLength({ min: 5 })], async (req, res) => {
    var email = req.body.email
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    

        let userdata = await User.findOne({email})
        if (!userdata) {
            return res.status(404).json({ errors: "wrong email" })
        }

        else if (req.body.password !== userdata.password) {
            return res.status(400).json({ errors: "wrong password" })
        }
        const data={
            user:{
                id:userdata.id
            }
        }
        const token=jwt.sign(data,secret)
        return res.json({ success: true,token:token })
    
   
})

module.exports = Router