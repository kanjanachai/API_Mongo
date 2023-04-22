var express = require('express');
var router = express.Router();

const idcardController = require('../controller/idcardController');

router.get('/', idcardController.showInfo);

router.post('/insert', idcardController.insertInfo);

router.put('/update/:id', idcardController.updateInfo);

router.delete('/delete/:id', idcardController.deleteInfo);

module.exports = router;