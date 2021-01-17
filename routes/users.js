const router = require('express').Router();
const user = require('../controller/UserController');

router.get('/', user.get);
router.post('/', user.store);
router.get('/:id', user.show);
router.put('/:id', user.update);
router.delete('/:id', user.destroy);

module.exports = router