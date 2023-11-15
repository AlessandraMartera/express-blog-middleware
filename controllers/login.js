// collego il json dei posts dentro la carte db a post.js
const fs = require("fs");
const posts = require("../db/db.json");
const path = require("path");

// INDEx
module.exports.index = function(req, res) {
    res.end("rotta admin")
}