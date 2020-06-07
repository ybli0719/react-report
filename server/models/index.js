const Sequelize = require('sequelize')
const fs = require('fs')
const path = require('path')

const sequelize = new Sequelize('ybli', 'ybli', '123456789', {
  host: '120.79.32.248',
  dialect: 'mysql',
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
})
sequelize
  .authenticate()
  .then(() => {
    console.log('MYSQL 连接成功......')
  })
  .catch(err => {
    console.error('链接失败:', err)
  })

const db = {}

fs.readdirSync(__dirname)
  .filter(file => file !== 'index.js')
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })

db.sequelize = sequelize

module.exports = db
