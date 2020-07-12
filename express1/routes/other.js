var express = require('express');
var router = express.Router();

//GET
router.get('/', (req, res, next)=> {
  res.render('other',
    {
      title:'Other',
      content:'Other Page'
    });
  });

module.exports = router;
