var express = require('express');
var router = express.Router();

var lessonsCtrl = require('../controllers/lessons')

//GET  --> new lesson page
router.get('/:id/lessons/new', lessonsCtrl.new)

module.exports = router;