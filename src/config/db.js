const knex = require('knex')({
    client : 'mysql2',
    connection: {
        host : 'localhost',
        port : 3306,
        user : 'root',
        password : 'root',
        database : 'react-portofolio'
    }
})
module.exports = knex;