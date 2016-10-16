/**
 * Created by Home on 16/10/2016.
 */
var bookshelf = require('./../config/db').bookshelf;

var Country = bookshelf.Model.extend({
    tableName: 'countries'
});

module.exports = {
    Country: Country
};