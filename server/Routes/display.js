const express = require('express');
const Router = express.Router()
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const { body, validationResult } = require('express-validator')

Router.post('/foodData',(req,res)=>{
    try {
        console.log(global.data);
        res.send([global.data,global.category])
    } catch (error) {
        
    }
})
module.exports=Router