const Sequelize = require('sequelize')

const databaseUrl = process.env.DATABASE_URL || "postgres://postgres:pass@localhost:5432/postgres"

const db = new Sequelize(databaseUrl)

db.sync()
  .then(() => console.log('\nConnected to database.\n'))
  .catch(console.error)

module.exports = db