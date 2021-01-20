const router = require('express').Router()
const users = require('./users')
const projects = require('./projects')

router.get('/test', (req, res) => {
    res.send('Hello test!');
});

router.use('/users', users)
router.use('/projects', projects)

module.exports = router