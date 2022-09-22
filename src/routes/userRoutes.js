const express = require("express");
const router = express.Router();

const controller = require("../controllers/userController");

router.get("/all", controller.getAll);
router.get("/:id", controller.getUser);
router.get("/:login", controller.getLogin);
//router.put("/:id", controller.getAll);
//router.delete("/:id", controller.getAll);

module.exports = router;
