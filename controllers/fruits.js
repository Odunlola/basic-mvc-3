const express = require('express');
const router = express.Router();
let fruits = require('../models/Fruits');
// console.log(fruits);

router.get('', (req, res) => {
    res.render('fruits/index.ejs', {fruits: fruits})
})

router.get('/new', (req, res) => {
    res.render("fruits/new.ejs")
})

router.get('/:id', (req, res) => {
    console.log(req.params);
    // console.log(fruits);
    const fruit = fruits[req.params.id];
    console.log(fruit);
    res.render("fruits/show.ejs", {fruit: fruit, idx: req.params.id});
})

router.post('', (req, res) => {
    // console.log(req.body);
    let newFruit = req.body;
    console.log(newFruit);
    if(newFruit.readyToEat === "true") newFruit.readyToEat = true;
    else newFruit.readyToEat = false;
    fruits.push(newFruit);
    // Fruits.create(newFruit);
    console.log(fruits);
    res.redirect('/fruits');
})

router.get('/:id/edit', (req, res) => {
    const fruitToBeEdited = fruits[req.params.id];
    // console.log(fruitToBeEdited);
    res.render('fruits/edit.ejs', {fruitToBeEdited, idx: req.params.id});
})

router.put('/:id', (req, res) => {
    let updatedFruit = req.body;
    if(!updatedFruit.color) updatedFruit.color = "Blue"
    if(updatedFruit.readyToEat === 'true') updatedFruit.readyToEat = true;
    else updatedFruit.readyToEat = false;
    console.log(updatedFruit);
    fruits[req.params.id] = updatedFruit;
    res.redirect(`/fruits/${req.params.id}`);
})

router.get('/:id/delete', (req, res) => {
    const fruitToBeDeleted = fruits[req.params.id];
    console.log(fruitToBeDeleted);
    res.render(`fruits/delete`, {fruitToBeDeleted, idx: req.params.id})
})

router.delete('/:id', (req, res) => {
    let deletedFruit = fruits[req.params.id];
    console.log(deletedFruit);
    fruits.splice(req.params.id, 1);
    res.redirect('/fruits')
})

module.exports = router;