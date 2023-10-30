var express = require('express');
var router = express.Router();
const indexController = require('./index')
const createController = require('./create')
const destroyController = require('./destroy')
const updateController = require('./update')
const multer = require('multer');
router.post('/', multer().none(), createController)
router.get('/search', indexController)
router.put('/:id', updateController)
router.delete('/:id', destroyController)

module.exports = router;
