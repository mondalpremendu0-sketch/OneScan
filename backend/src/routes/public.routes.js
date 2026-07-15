const express = require('express');
const {getPublicProfile} = require('../controllers/public.controller.js');

const router = express.Router();

router.get("/public/:slug",getPublicProfile)

module.exports = router;