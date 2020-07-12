var express = require('express');
var router = express.Router();

//GET
router.get('/', (req, res, next)=> {
  var msg='何か書いて送信して下さい。';
  if(req.session.message != undefined){
    msg='Last Message:' + req.session.message;
  }
  var data={
    title:'Index',
    content:msg
  };
  res.render('index',data);
});

//POST
router.post('/',(req,res,next)=>{
  console.log('post完了！');
  var msg = req.body['message'];
  req.session.message = msg;
  var data={
    title:'Hello',
    content:'Last Message:' + req.session.message
  };
  res.render('index',data);
});

module.exports = router;
