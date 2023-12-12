var express = require('express');
var router = express.Router();

var teachersCtrl = require('../controllers/teachers')

//GET / ---> teacher (index)
router.get('/', teachersCtrl.index)

//GET /new ---> takes teachers to fill out a registration form 
router.get('/new', teachersCtrl.new)

//GET /id (show)
router.get('/:id', teachersCtrl.show)

//POST / ----> creates new teacher 
router.post('/', teachersCtrl.create)

//EDIT
router.get('/:id/edit', teachersCtrl.edit)

//PUT ---> updates
router.put('/:id', teachersCtrl.update)

//DELETE
router.delete('/:id', teachersCtrl.delete)


module.exports = router;
