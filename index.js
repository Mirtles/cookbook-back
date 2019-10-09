const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const userRouter = require('./user/router')
const loginRouter = require('./auth/router')
const courseRouter = require('./course/router')
const recipeRouter = require('./recipe/router')

const app = express()
const port = 4000

const corsMiddleware = cors()
const parserMiddleware = bodyParser.json()

app.use(
  corsMiddleware,
  parserMiddleware,
  userRouter,
  loginRouter,
  courseRouter,
  recipeRouter,
)

app.listen(port, () => console.log(`\nListening on port ${port}.\n`))