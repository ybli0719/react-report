const joi = require('joi')

function validate(params = {}, schema = {}) {
  const ctx = this
  const validator = joi.validate(params, joi.object().keys(schema), { allowUnknown: true })
  if (validator.error) {
    ctx.throw(400, validator.error.message)
    return false
  }
  return true
}

module.exports = validate
