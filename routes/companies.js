const router = require('express').Router();
const company = require('../controller/CompanyController');

router.get('/', company.get);
router.post('/', company.store);
router.get('/:id', company.show);
router.put('/:id', company.update);
router.delete('/:id', company.destroy);

module.exports = router