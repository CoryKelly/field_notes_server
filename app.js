const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')
const config = require('./config/config')
const fileupload = require('express-fileupload')

require("./services/dataBase")

const app = express()

app.use(
  cors({
    origin: "http://localhost:8080",
  })
)
app.use(logger( "dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(fileupload({ createParentPath: true }))


app.use("/", require('./routes/index'))
app.use("/task", require("./routes/task"))

app.use(function(error, req, res, next) {
  console.log(error)
  res.status(500).send({ message: "Something went wrong with your request"})
})

app.listen(config.PORT, () => {
  console.log(`Server listening on ${config.PORT}`)
})