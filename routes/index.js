const router = require('express').Router()
const users = require('./users')
const profiles = require('./profiles')
const companies = require('./companies')
const projects = require('./projects')

router.use('/users', users)
router.use('/profiles', profiles)
router.use('/companies', companies)
router.use('/projects', projects)

module.exports = router