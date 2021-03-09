const router = require("express").Router();
const users = require("./users");
const dishes = require("./dishes");

router.use("/users", users);
router.use("/dishes", dishes);

module.exports = router;