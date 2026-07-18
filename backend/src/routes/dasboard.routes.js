const express = require('express');
const {
  addLinkController,
  updateLinkUsernameController,
  deleteSocialLinkController,
  getMyProfileController,
  getMyLinkController
  
} = require('../controllers/dasboard.controller.js');
const requireAuth = require('../middleware/auth.middleware.js');



const router = express.Router();



router.get("/",requireAuth,getMyProfileController);
router.put("/",requireAuth,updateLinkUsernameController);
router.post("/addlink",requireAuth,addLinkController);
router.delete("/remove/:linkId",requireAuth,deleteSocialLinkController);
router.get("/link",requireAuth,getMyLinkController)



module.exports = router;