var express = require('express');
var router = express.Router();

const userController = require('../controller/userController')

router.get("/", userController.index);

router.put("/update", userController.updateInfo);

module.exports = router;
