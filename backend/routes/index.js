var express = require('express');
var router = express.Router();
const bussniesRouter = require('../controller/BussinesController/router')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.use('/business', bussniesRouter)
module.exports = router;
