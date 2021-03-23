require("dotenv").config()

const configs = {
  PORT: process.env.PORT || 3000,
  DB_NAME: "field_notes",
  DB_URL: process.env.DB_URL || "mongodb://localhost:27017/field_notes"
}

module.exports = configs
