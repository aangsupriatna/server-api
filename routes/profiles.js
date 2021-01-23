const router = require('express').Router();
const profile = require('../controller/ProfileController');

router.get('/', profile.get);
router.post('/:id', profile.store);
router.get('/:id', profile.show);
router.put('/:id', profile.update);
router.delete('/:id', profile.destroy);

module.exports = router