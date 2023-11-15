const express = require('express');
const router = express.Router();

// Collego il controller
const adminController = require("../controllers/admin.js");


router.get('/admin', adminController.index);