const Router = require('express')

const auth = require('../auth/middleware')
const Course = require('./model')

const router = new Router()

router.get('/course', (req, res, next) => {
  Course.findAll()
    .then(courses => {
      res.send(courses)
    })
    .catch(err => next(err))
})

router.get('/course/:id', auth, (req, res, next) => {
  const { id } = req.params

  Course.findByPk(id,
    {
      include: [
        // { model: Recipe, attributes: ['name'] }
      ]
    })
    .then(course => {
      res.send(course)
    })
    .catch(err => next(err))
})

module.exports = router