var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  console.log('adsd');
});
router.get('/hello', function (req, res) {
    res.status(200).send("Hello world!!");
    console.log('hello world');
});
  console.log('55555555555555555555555555');

module.exports = router;
