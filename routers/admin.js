const express = require('express');
const router = express.Router();

// Collego il controller
const adminController = require("../controllers/admin.js");
const authenticateMiddleware = require("./../middlewares/authenticate");

router.use(authenticateMiddleware);


router.get('/admin', adminController.index);

module.exports = router;