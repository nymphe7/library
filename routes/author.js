const express=require('express');
const mongoose=require('mongoose');
const Author=require('../models/author');
const router=express.Router();

router.get('/',(req,res)=>{
    res.render('authors/new',{
        author:new Author()
    });
});

module.exports=router;