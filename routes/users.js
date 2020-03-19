var express = require('express');
var router = express.Router();
const { spawn } = require('child_process');
const {exec} = require("child_process");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/postgallery', function(req, res, next) {

  exec('nautilus ../Home/pi',(error,stdout,stderr)=>{
    if(error){
      console.log(error);
      return;
    }
    console.log(stdout);
    console.log(stderr);
  })
  res.send('respond with a resource');
});

module.exports = router;
