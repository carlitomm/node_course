const path = require('path')
const express = require('express');

const rootDir = require('../util/path')

const router = express.Router();

const products = []

// admin/add.product => GET
router.get('/add-product', (req, res, next) => {
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
    res.render('add-product', {pageTite: 'Add Product', path: '/admin/addoriduct'})
});

// admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    products.push({ title: req.body.title , body: req.body.body} )
    res.redirect('/');
})

exports.routes = router
exports.products = products