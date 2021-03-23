const Task = require("../models/Task")
const { Types } = require('mongoose')

const taskService = {

  /**
   * @description Creates a Task document in the database
   * @return {Object} Task Document
   * @param req
   */
  create: async function (req) {
    let document = new Task()

    const photo = req.files.image
    await photo.mv('./uploads/' + photo.name)

    const { title, notes, task, product, amount, units, mowHeight, date, zone } = req.body

    document._id = new Types.ObjectId()
    document.title = title
    document.notes = notes
    document.task = task
    document.product = product
    document.amount = amount
    document.units = units
    document.mowHeight = mowHeight
    document.date = date
    document.zone = zone
    document.photo = photo

    await document.save()

    return document
  },

  /**
   * @description Finds all Task document in the database
   * @return {Array} Array of User Documents
   */
  findAll: async function () {
    let documents = await Task.find()

    return documents
  },

  /**
   * @description Finds Task by ID in database
   * @return {Object} Task Document
   * @param id
   */
  findById: async function (id) {
    let document = await Task.findById(id)

    return document
  },

  /**
   * @description Updates a User document in the database
   * @return {Object} User Document
   * @param id
   * @param update
   */
  updateById: async function (id, update) {
    let document = await Task.updateOne({ _id: id }, { $set: update })

    return document
  },

  delete: async function(id) {
    let document = await Task.deleteOne(id)

    return document
  }


}

module.exports = taskService
