const express = require('express');
const {dashboardController} = require('../controllers/dasboard.controller.js');
const router = express.Router();


router.post("/api/dasboard",dashboardController);


module.exports = router;