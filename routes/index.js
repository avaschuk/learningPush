var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  console.log('adsd');
});
router.get('/hello', function (req, res) {
    res.status(200).send("Hello world!!");
});

module.exports = router;
