const express = require('express');
const app = express();
const dotenv = require("dotenv").config();


// configuro express per leggere i dati in formato json
app.use(express.json());

// // configuro express per leggere i dati in formato x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// configuro i file statici
app.use(express.static("public"));

// collegamento delle middlewares
const errorsMiddlewares = require('./middlewares/errorsMiddlewares.js');
const notFoundMiddlewares = require('./middlewares/notFoundMiddleware.js');



const port = process.env.PORT || 3000;

// routes dove dentro verrà collegato il controllere dei posts
const routerPosts = require('./routers/posts.js');

// collengamento per l'autenticazione 
const routerAdmin = require('./routers/admin.js');
const routerLogin = require('./routers/login.js');


app.use("/posts", routerPosts);

// app.use("/", routerAdmin);
// app.use("/", routerLogin);


// Gestione degli errori
app.use(errorsMiddlewares);

app.use(notFoundMiddlewares);

app.listen(port, () => {
 console.log(`Server partito su porta http://localhost:${port}`)
})
