const express = require('express');
const router = express.Router();
const starWarsShips = require('../models/StarWarsShips');
// console.log(starWarsShips);

router.get('/star-wars-ships', (req, res) => {
    res.render('starwars/index.ejs', {abc: starWarsShips})
})

module.exports = router;