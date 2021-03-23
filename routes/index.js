const express = require('express')
const router = express.Router()

const indexController = require('../controllers/index')

const wrapper = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next).catch(next))

router.get('/', wrapper(indexController.home))

module.exports = router
