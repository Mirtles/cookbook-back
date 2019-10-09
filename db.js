const Sequelize = require('sequelize')

const databaseUrl = process.env.DATABASE_URL || "postgres://postgres:pass@localhost:5432/postgres"

const db = new Sequelize(databaseUrl)

db.sync({
  // force: true
})
  .then(() => {
    const Course = require('./course/model')
    Course.findOrCreate({ where: { name: 'Breakfast' }, defaults: {} })
    Course.findOrCreate({ where: { name: 'Appetizer' }, defaults: {} })
    Course.findOrCreate({ where: { name: 'Salad' }, defaults: {} })
    Course.findOrCreate({ where: { name: 'Main' }, defaults: {} })
    Course.findOrCreate({ where: { name: 'Side' }, defaults: {} })
    Course.findOrCreate({ where: { name: 'Dessert' }, defaults: {} })
    Course.findOrCreate({ where: { name: 'Snack' }, defaults: {} })
  })
  .then(() => console.log('\nConnected to database.\n'))
  .catch(console.error)

module.exports = db