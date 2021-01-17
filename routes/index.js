const router = require('express').Router()
const users = require('./users')

router.get('/test', (req, res) => {
    res.send('Hello test!');
});

router.use('/users', users)

module.exports = router