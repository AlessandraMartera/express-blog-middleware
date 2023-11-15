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



app.use("/posts", routerPosts);

app.use("/", routerAdmin);



// Gestione degli errori
app.use(errorsMiddlewares);

// se non viene trovata nessuna rotta utilizzabile allora verrà usata 
// la middleware che dice che la pagina non è stata trova
app.use(notFoundMiddlewares);

app.listen(port, () => {
 console.log(`Server partito su porta http://localhost:${port}`)
})
