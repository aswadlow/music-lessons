var express = require('express');
var router = express.Router();

var teachersCtrl = require('../controllers/teachers')

//GET Index /teachers
router.get('/', teachersCtrl.index)


module.exports = router;
