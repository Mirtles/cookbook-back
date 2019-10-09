const Router = require('express')

const auth = require('../auth/middleware')
const Recipe = require('./model')

const router = new Router()

router.get('/course/:courseId/recipe', auth, (req, res, next) => {
  const userId = req.user.id
  const { courseId } = req.params

  Recipe.findAll({
    where: {
      userId,
      courseId
    }
  })
    .then(courses => {
      res.send(courses)
    })
    .catch(err => next(err))
})

router.post('/course/:courseId/recipe', auth, (req, res, next) => {
  const userId = req.user.id
  const { courseId } = req.params

  console.table({ user: userId, course: courseId, params: req.params })

  Recipe.create({
    ...req.body,
    userId,
    courseId
  })
    .then(recipe => {
      res.send(recipe)
    })
    .catch(err => next(err))
})

module.exports = router