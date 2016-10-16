/**
 * Created by Home on 16/10/2016.
 */

var DBConfig = {
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: 'Passw0rd',
        database: 'world',
        charset: 'utf8'
    }
};

var knex = require('knex')(DBConfig);
var bookshelf = require('bookshelf')(knex);

module.exports.bookshelf = bookshelf;