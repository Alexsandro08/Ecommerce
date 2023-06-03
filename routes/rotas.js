const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
require('../models/products')
const Products = mongoose.model('products')



//rotas das categorias

router.get('/eletronics', (req,res)=>{
    Products.find({category:'eletronic'}).lean().then((products)=>{
        setTimeout(function(){
            res.render('products/eletronics', {products:products})
        },500)
        
    }).catch(err =>{
        console.log('falhou' + err)
        res.redirect('/')
    })
    
})

router.get('/app_and_games', (req,res)=>{
    Products.find({category:'games'}).lean().then((products)=>{
        setTimeout(function(){
            res.render('products/app_and_games', {products:products})
        },500) 
    }).catch(err =>{
        console.log('falhou' + err)
        res.redirect('/')
    })
    

})

router.get('/house', (req,res)=>{
    Products.find({category:'house'}).lean().then((products)=>{
        setTimeout(function(){
            res.render('products/house', {products:products})
        },500) 
        
    }).catch(err =>{
        console.log('falhou' + err)
        res.redirect('/')
    })
   

})

router.get('/kitchen', (req,res)=>{
    Products.find({category:'kitchen'}).lean().then((products)=>{
        setTimeout(function(){
            res.render('products/kitchen', {products:products})
        },500) 
        
        
    }).catch(err =>{
        console.log('falhou' + err)
        res.redirect('/')
    })
   
})

router.get('/computers_and_informatics', (req,res)=>{
    Products.find({category:'computers_and_informatics'}).lean().then((products)=>{
        setTimeout(function(){
            res.render('products/computers_and_informatics', {products:products})
        },500) 
       
    }).catch(err =>{
        console.log('falhou' + err)
        res.redirect('/')
    })
   
})

router.get('/sports', (req,res)=>{
    Products.find({category:'sports'}).lean().then((products)=>{
        setTimeout(function(){
            res.render('products/sports', {products:products})
        },500) 
      
    }).catch(err =>{
        console.log('falhou' + err)
        res.redirect('/')
    })
    
})

router.get('/smartphone', (req,res)=>{
    Products.find({category:'smartphone'}).lean().then((products)=>{
        setTimeout(function(){
            res.render('products/smartphone', {products:products})
        },500) 
        
    }).catch(err =>{
        console.log('falhou' + err)
        res.redirect('/')
       })
})

router.get('/product/:category',(req,res)=>{
    Products.findOne({category: req.params.category}).lean().then((products)=>{
        setTimeout(function(){
            res.render('partials/index', {products:products})
        },500) 
        
    }).catch(err =>{
        console.log('DEU ERRO' + err)
    })
})



module.exports = router