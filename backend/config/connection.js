const postgres = require('postgres')

const sql = postgres('postgres://postgres:123456@localhost:5432/guru')

module.exports = sql