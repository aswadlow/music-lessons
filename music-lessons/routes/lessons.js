var express = require('express');
var router = express.Router();

var lessonsCtrl = require('../controllers/lessons')

//GET  --> new lesson page
router.get('/teachers/:id/lessons/new', lessonsCtrl.new)

//POST 
router.post('/teachers/:id/lessons', lessonsCtrl.create);

module.exports = router;