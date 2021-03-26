const taskService = require('../services/task')

exports.all = async (req, res) => {
  const allTasks = await taskService.findAll()

  return res.status(200).json({ allTasks })
}

// noinspection CommaExpressionJS
exports.create = async (req, res) => {
  const createTask = await taskService.create(req)
    console.log(createTask)
  return res.status(200).json({ createTask })
}

exports.findById = async (req, res) => {
  const { postId: id } = req.params;
  const taskById = await taskService.findById(id)

  return res.status(200).json({ taskById })
}

exports.updateById = async (req, res) => {
  const { postId: id } = req.params;
  const { zone, title, notes, task, product, amount, mowHeight, date } = req.body

  let update = {
    zone: zone,
    title: title,
    notes: notes,
    task: task,
    product: product,
    amount: amount,
    mowHeight: mowHeight,
    date: date
  }

  await taskService.updateById({_id: id}, update)
  return res.status(200).json({ update });
}

exports.deleteById = async (req, res) => {
  const { postId: id } = req.params;

  await taskService.findById({_id: id})
  await taskService.delete({_id: id})

  return res.status(200).json({ message: "Task deleted successfully" });
}
