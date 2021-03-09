const express = require("express");
const router = express.Router();
const { userController } = require("../controllers");
const { auth } = require("../utils");
const validator = require("../validators");


router.post(
	"/register",
	auth(false),
	validator.checkMinLength(3, "username"),
	validator.checkMinLength(5, "password"),
	validator.onlyEnglishAndNumbers("username", "password"),
	validator.checkUsernameExisting,
	validator.handleValidationErrors,
	userController.register
);
router.post(
	"/login",
	validator.checkMinLength(3, "username"),
	validator.checkMinLength(5, "password"),
	validator.onlyEnglishAndNumbers("username", "password"),
	validator.handleValidationErrors,
	userController.login
);
router.post("/logout", userController.logout);

router.get("/profile", auth(false), userController.getProfileInfo);
router.put("/profile", auth(),
	userController.editProfileInfo);

router.get('/all-users', auth(false), userController.getAllUsers);

router.post('/change_password',
	auth(),
	validator.checkMinLength(5, 'oldPassword', 'newPassword'),
	validator.handleValidationErrors,
	userController.changeUserPassword
);


module.exports = router;