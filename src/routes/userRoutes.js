const express = require("express");
const router = express.Router();

const controller = require("../controllers/userController");

router.get("/all", controller.getAll);
router.get("/:id", controller.getUser);
router.post("/", controller.saveUser);
//router.put("/:id", controller.getAll);
router.delete("/delete/:id", controller.deleteUserById);

module.exports = router;
