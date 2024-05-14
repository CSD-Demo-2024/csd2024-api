var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/generate', function(req, res, next) {
  import('nanoid').then(({nanoid}) => res.send(nanoid()));
});

module.exports = router;
