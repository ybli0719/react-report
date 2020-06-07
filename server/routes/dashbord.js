const Router = require('koa-router')
const router = new Router({ prefix: '/dashbord' })

const { create } = require('../controllers/doshbord')

router.post('/add', create)

module.exports = router
