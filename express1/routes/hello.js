var express = require('express');
var router = express.Router();
var data={
  'mon':'tamapencha',
  'nao':'buchan',
  'maro':'got',
  'swa':'wagamamaoji'
}
//GET
router.get('/', (req, res, next)=> {
  res.render('hello',
   {
      title: 'Hello',
      content:'Helloページです。',
    data:data
  });

});

module.exports = router;
