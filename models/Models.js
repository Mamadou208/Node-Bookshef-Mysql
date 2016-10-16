/**
 * Created by Home on 16/10/2016.
 */
var bookshelf = require('./../config/db').bookshelf;


var City = bookshelf.Model.extend({
    tableName: 'cities'
});

var Country = bookshelf.Model.extend({
    tableName: 'countries',

    states: function () {
        return this.hasMany(State, 'country_id')
    }
});

var State = bookshelf.Model.extend({
    tableName: 'states',

    cities: function () {
        return this.hasMany(City, 'state_id');
    }
});

module.exports = {
    Country: Country,
    State: State,
    City: City
};