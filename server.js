// These are just setting up an instance of express. Literally directly from Express' documentation. 
const express = require('express');
const app = express();
const port = 4000
const fruitsController = require('./controllers/fruits');
const starWarsShipsController = require('./controllers/starwars-ships');
// console.log(fruitsController)

// This is going to the Fruits.js file in the models directory. It is set equal to the export from that file
// console.log(models);
// This is getting just the array of fruits. Not the whole object that has two key/value pairs.
// Models - Database stuff
// controllers - routes
// views - EJS files (EJS is literally just HTML and JS)

// Middleware 
// This is a view engine that is looking for EJS files to be rendered. It also sets up that ALL the EJS files for my frontend will be located in a file named views
app.set('view engine', 'ejs');

//near the top, around other app.use() calls
// This makes it so that any post from a form will be available in the req.body as an object with the keys of whatever the name is in the form itself
app.use(express.urlencoded({ extended:false }));


// Routes
// Hungry for more to create my own API, and APIs always should be in JSON
app.get('/api', (req, res) => {
    res.json({
        models,
        status: 200
    })
})

app.get('/', (req, res) => {
    res.render('home.ejs');
})

app.use('', fruitsController);
app.use('', starWarsShipsController);

app.get('/*', (req, res) => {
    res.render("404.ejs")
})

// Listen at the bottom
app.listen(port, () => {
    console.log(`🏝️ Server is listening to PORT ${port} 🎧`)
})