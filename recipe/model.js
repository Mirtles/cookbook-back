const Sequelize = require('sequelize')

const db = require('../db')
const Course = require('../course/model')
const User = require('../user/model')

const Recipe = db.define(
  'recipe',
  {
    name: { type: Sequelize.STRING },
    ingredients: { type: Sequelize.STRING },
    method: { type: Sequelize.STRING },
    url: { type: Sequelize.STRING },
  }
)

User.hasMany(Recipe)
Recipe.belongsTo(User)

Course.hasMany(Recipe)
Recipe.belongsTo(Course)

module.exports = Recipe