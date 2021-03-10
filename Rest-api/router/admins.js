const express = require("express");
const router = express.Router();
const { adminController } = require("../controllers");
const { adminModel } = require("../models");
const { adminAuth } = require("../utils");
const validator = require("../validators");


router.post(
	"/register",
	adminAuth(false),
	validator.checkMinLength(3, "username"),
	validator.checkMinLength(5, "password"),
	validator.onlyEnglishAndNumbers("username", "password"),
	validator.checkUsernameExisting(adminModel),
	validator.handleValidationErrors,
	adminController.register
);
router.post(
	"/login",
	validator.checkMinLength(3, "username"),
	validator.checkMinLength(5, "password"),
	validator.onlyEnglishAndNumbers("username", "password"),
	validator.handleValidationErrors,
	adminController.login
);
router.post("/logout", adminController.logout);

router.get("/profile", adminAuth(false), adminController.getProfileInfo);
router.put("/profile", adminAuth(),
	adminController.editProfileInfo);

router.get('/all-users', adminAuth(), adminController.getAllUsers);

router.post('/change_password',
	adminAuth(),
	validator.checkMinLength(5, 'oldPassword', 'newPassword'),
	validator.handleValidationErrors,
	adminController.changeUserPassword
);


module.exports = router;