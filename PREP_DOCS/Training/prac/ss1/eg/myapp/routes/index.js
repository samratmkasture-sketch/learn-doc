var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', dataArr:[{
    name:"Samrat",
    email:"test@this.com"
  },{
    name:"B",
    email:"b@this.com"
  },{
    name:"C",
    email:"c@this.com"
  },{
    name:"D",
    email:"d@this.com"
  }] });
});

module.exports = router;
