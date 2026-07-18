const express = require('express');
const getPublicProfileController = require('../controllers/public.controller.js');
const requireAuth = require('../middleware/auth.middleware.js');


const router = express.Router();

router.get("/:username",requireAuth,getPublicProfileController)

module.exports = router;