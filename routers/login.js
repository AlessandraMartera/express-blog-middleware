const express = require('express');
const router = express.Router();

// Collego il controller
const loginController = require("../controllers/login.js");


router.get('/login', loginController.index);