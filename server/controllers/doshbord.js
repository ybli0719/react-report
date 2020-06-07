const joi = require('joi')
const uuid = require('node-uuid')
const { dashbord: DashbordModel, sequelize } = require('../models')

class DashbordController {
  static async create(ctx) {
    const validator = ctx.validate(ctx.request.body, {
      title: joi.string().required(),
    })

    if (validator) {
      const { title } = ctx.request.body
      const id = uuid.v4()
      const data = await DashbordModel.create({
        id,
        title,
      })

      ctx.body = data
    }
  }
}

module.exports = DashbordController
