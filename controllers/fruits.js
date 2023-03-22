const express = require('express');
const router = express.Router();
const fruits = require('../models/Fruits');
// console.log(fruits);

router.get('/fruits', (req, res) => {
    res.render('fruits/index.ejs', {fruits: fruits})
})

router.get('/fruits/new', (req, res) => {
    res.render("fruits/new.ejs")
})

router.get('/fruits/:id', (req, res) => {
    console.log(req.params);
    // console.log(fruits);
    const fruit = fruits[req.params.id];
    console.log(fruit);
    res.render("fruits/show.ejs", {fruit: fruit});
})

router.post('/fruits', (req, res) => {
    // console.log(req.body);
    let newFruit = req.body;
    if(newFruit.readyToEat === "true") newFruit.readyToEat = true;
    else newFruit.readyToEat = false;
    fruits.push(newFruit);
    // Fruits.create(newFruit);
    console.log(fruits);
    res.redirect('/fruits');
})

module.exports = router;