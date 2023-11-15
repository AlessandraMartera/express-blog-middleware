const express = require('express');
const app = express();
const dotenv = require("dotenv").config();


// configuro express per leggere i dati in formato json
app.use(express.json());

// // configuro express per leggere i dati in formato x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// configuro i file statici
app.use(express.static("public"));

const port = process.env.PORT || 3000;

// controllerts
const home = require("./controllers/home.js");
// routes dove dentro verrà collegato il controllere dei posts
const routerPosts = require('./routers/posts.js');


app.use("/posts", routerPosts);



/*
app.get('/', (req, res) => {
    res.send('<h1>Benvenuto nel mio blog! da app.js</h1>');
   })
*/
app.listen(port, () => {
 console.log(`Server partito su porta http://localhost:${port}`)
})
