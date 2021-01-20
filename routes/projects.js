const router = require('express').Router();
const project = require('../controller/ProjectController');

router.get('/', project.get);
router.post('/', project.store);
router.get('/:id', project.show);
router.put('/:id', project.update);
router.delete('/:id', project.destroy);

module.exports = router