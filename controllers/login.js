// collego il json dei posts dentro la carte db a post.js
const fs = require("fs");
const users  = require("../db/user.json");
const path = require("path");
// importo la funzione per generare io token
const generateJWT = require("../middlewares/jwtToken");

// Login
module.exports.login = function(req, res) {
    const { ursername, password } = req.body

    const user = posts.find( user => user.ursername === ursername && user)
}