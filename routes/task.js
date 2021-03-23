const express = require('express')
const router = express.Router()

const taskController = require('../controllers/task')

const wrapper = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next).catch(next))


router.get('/all', wrapper(taskController.all))

router.post('/create', wrapper(taskController.create))

router.get('/:postId', wrapper(taskController.findById))

router.patch('/:postId', wrapper(taskController.updateById))

router.delete('/:postId', wrapper(taskController.deleteById))


module.exports = router
