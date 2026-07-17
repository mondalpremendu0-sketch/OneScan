const express = require('express');
const {
  dashboardController,
  getDashboardDataController,
  deleteLinkController,
  updateSlugController
  
} = require('../controllers/dasboard.controller.js');
const router = express.Router();


router
.post("/dasboard",dashboardController)
.get("/dasboard",getDashboardDataController);
router.delete("/dasboard/remove/:id",deleteLinkController);
router.put("/dasboard/update/slug",updateSlugController);


module.exports = router;