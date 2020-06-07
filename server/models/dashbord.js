const moment = require('moment')

module.exports = (sequelize, dataTypes) => {
  const Dashbord = sequelize.define(
    'dashbord',
    {
      id: { type: dataTypes.UUID, primaryKey: true },
      title: { type: dataTypes.STRING(255), allowNull: false, unique: true },
      createdAt: {
        type: dataTypes.DATE,
        defaultValue: dataTypes.NOW,
        get() {
          return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD HH:mm:ss')
        },
      },
      updatedAt: {
        type: dataTypes.DATE,
        defaultValue: dataTypes.NOW,
        get() {
          return moment(this.getDataValue('updatedAt')).format('YYYY-MM-DD HH:mm:ss')
        },
      },
    },
    {
      timestamps: true,
    }
  )

  return Dashbord
}
