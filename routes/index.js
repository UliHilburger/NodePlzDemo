var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res/*, next*/) {
  //We are in folder router => go one level up an then down to public
  res.sendFile('xmas.html', { root: path.join(__dirname, '../public') });
});

module.exports = router;
