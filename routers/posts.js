const express = require('express');
const router = express.Router();
// collego il json dei posts dentro la carte db a post.js
const posts = require("../db/db.json");
// Collego il controller
const postsController = require("../controllers/posts.js");
// importo multer per poter uplodare le i file con destinazione publice/posts
const uploader = multer({dest: "public/posts"});



router.get('/', postsController.index);

router.get('/create', postsController.create);

router.post('/', postsController.store);
// nel momento il cui bisgona uploadare un file ( es. file img ) bisogna usare la libreria multer
router.post('/', uploader.single("image"), postsController.store);

router.delete('/:slug', postsController.delete);

router.get('/:slug', postsController.show);

router.get('/:slug/download', postsController.download);

module.exports = router;

