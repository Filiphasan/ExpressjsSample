require('dotenv').config()

module.exports = {
  development: {
    username: process.env.DB_USER_NAME,
    password: process.env.DB_USER_PW,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres'
  },
  test: {
    username: process.env.DB_USER_NAME,
    password: process.env.DB_USER_PW,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres'
  },
  production: {
    username: process.env.DB_USER_NAME,
    password: process.env.DB_USER_PW,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres'
  }
}
