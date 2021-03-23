const mongoose = require('mongoose')
const Schema = mongoose.Schema

const taskSchema = new Schema({
    _id: Schema.Types.ObjectId,
    title: { type: String },
    notes: String,
    task: { type: String },
    product: String,
    amount: String,
    unit: String,
    zone: [String],
    mowHeight: String,
    date: String,
    photo: String,
},
  {
    timestamps: true
  }
)

module.exports = mongoose.model("Task", taskSchema)
