const knex = require('../knex')

module.exports.getAll = () =>
    knex('category')
        .select('*')