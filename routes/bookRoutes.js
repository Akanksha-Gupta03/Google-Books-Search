const router = require("express").Router();
const bookController = require("../controller/bookContoller");


router.route("/")
.get(bookController.findAll)
.post(bookController.create);

router.route("/:id")
.delete(bookController.remove);