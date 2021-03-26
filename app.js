const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')
const config = require('./config/config')
const fileupload = require('express-fileupload')

require("./services/dataBase")

const app = express()

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Methods', '*');
  res.header("Access-Control-Allow-Headers", '*');

  if(req.method === 'OPTIONS') {
    res.send()
  } else {
    next();
  }
})
app.use(
  cors({
    origin: "https://fieldnotes-f0ccd.web.app",
  })
)
app.use('/static', express.static(path.join(__dirname, 'uploads')));
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
