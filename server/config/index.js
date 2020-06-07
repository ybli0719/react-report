const config = {
  PORT: 6060,
  DATABASE: {
    database: 'ybli',
    user: 'ybli',
    password: '123456789',
    options: {
      host: '120.79.32.248',
      dialect: 'mysql',
      operatorsAliases: false,
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
      },
    },
  },
}

module.exports = config
