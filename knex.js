const connectionData = require('./credentials/data.json')

module.exports = require('knex')({
    client: "mysql",
    connection: connectionData
})