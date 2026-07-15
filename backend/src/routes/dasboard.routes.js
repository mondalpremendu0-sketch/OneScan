const express = require('express');
const {
  dashboardController,
  getDashboardDataController,
  deleteLinkController
  
} = require('../controllers/dasboard.controller.js');
const router = express.Router();


router
.post("/dasboard",dashboardController)
.get("/dasboard",getDashboardDataController)
.delete("/dasboard/remove/:id",deleteLinkController);


module.exports = router;