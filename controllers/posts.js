// collego il json dei posts dentro la carte db a post.js
const fs = require("fs");
const posts = require("../db/db.json");
const path = require("path");

// INDEx
module.exports.index = function(req, res) {
    // throw che serve per lanciare errori e provare che le middlewares funzionino
    // throw new Error('errore di prova middleware');

    res.format({
        html: () => {
            const html = [];
            html.push("<ul>");
            for (const post of posts) {
                html.push(`<li>
                <h1>${post.title}</h1>
                <img style="width: 250px;" src="/posts/${post.image}">
                <p>${post.content}</p>
                <ul>
                    <li>${post.tags.join(", ")}</li>
                </ul>
                </li>`);
            }
            html.push("</ul>");
            res.send(html.join(""));
        },
        json: () => {
            res.send(posts);
        }
    })
}

// SHOW
module.exports.show = function(req, res) {
  
posts.map(post => post.image_url = `/posts/${post.image}`)
const postSlug = req.params.slug;

// creo una nuova costante in cui mettere il json che mi serve
// prendo l'array principale e vedo se è presente uno slug ugale a quello che sto cercando
// quando lo trovo lo metto dentro alla costante appena creata
   const post = posts.find(post => post.slug === postSlug);

// controllo se effettivamente estiste il json che ho appena cercato 
   if(post){
    post.image_url=`immagine`;
    res.json(post);

   } else{
    res.status(404).send(`<h1 style="text-align: center;"> il post relativo a ${postSlug} non è stato trovato </h1>`)
   }    
}

// /create - create: ritornerà un semplice html con un h1 con scritto Creazione nuovo post
//  e nel caso venga richiesta una risposta diversa da html lancerà un errore 406
module.exports.create = function(req, res){
  
    if(req.accepts("html")){
        res.send(`<h1 style="text-aling: center;">Creazione nuovo post</h1>`)
    }else {
        res.status(406).send("la richiesta non può essere elaborata")
    }
    
}

// /:slug/download - download: dovrà far scaricare l’immagine del post rappresentato dallo slug.
//  Attenzione, se lo slug contiene il simbolo / la rotta non funzionerà. C’è qualche strumento che ci permette di codificare lo slug?
module.exports.download = function(req, res){
    const postSlug = req.params.slug;
    const post = posts.find(post => post.slug === postSlug);
    // controllo se effettivamente estiste il json che ho appena cercato 
    if(post){   
        const filePath = path.resolve(
        __dirname,
        "..",
        "public",
        "posts",
        post.image
      );
      
        res.download(filePath);
    } else{
        res.status(404).send(`<h1 style="text-align: center;"> il post relativo a ${postSlug} non è stato trovato </h1>`)
    }    
}

// STORE
module.exports.store = function(req, res){
    const newPosts = req.body;
    posts.push(newPosts);

    const json = JSON.stringify(posts, null, 2);
    fs.writeFileSync(path.resolve(__dirname, "..", "db", "db.json"), json);
    
    res.end("ricetta salvata")
}

// DELETE
module.exports.delete = function(req, res){
    const postToDestroy = req.params.slug;

    // controllo se effettivamente estiste il json che ho appena cercato 
    const check = posts.find(post => post.slug === postToDestroy);
    // trovo l'indice della pizza da eliminare
    const slugToDestroy = posts.findIndex((post) => post.slug == postToDestroy);
    // rimuovo la pizza dall'array
    posts.splice(slugToDestroy, 1);
    // converto il DB in JSON
    const json = JSON.stringify(posts, null, 2);
    fs.writeFileSync(path.resolve(__dirname, "..", "db", "db.json"), json);

    if(check){ 
        res.end("ricetta cancellata")
    } else{
        res.status(404).send(`<h1 style="text-align: center;"> il post relativo a ${postSlug} non è stato trovato </h1>`)
    }   

}