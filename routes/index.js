const router = require('express').Router()
const users = require('./users')
const companies = require('./companies')
const projects = require('./projects')

router.use('/users', users)
router.use('/companies', companies)
router.use('/projects', projects)

module.exports = router