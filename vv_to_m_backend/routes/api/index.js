var router = require('express').Router();

router.use('/farmers', require('./farmers'));
router.use('/vegitables', require('./vegitables'));
router.use('/transports', require('./transports'));

router.use(function(err, req, res, next){
  if(err.name === 'ValidationError'){
    return res.status(422).json({
      errors: Object.keys(err.errors).reduce(function(errors, key){
        errors[key] = err.errors[key].message;

        return errors;
      }, {})
    });
  }

  return next(err);
});

module.exports = router;