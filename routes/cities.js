/**
 * Created by Home on 16/10/2016.
 */
var Model = require('./../models/Models');

/* Save a book */
var saveCity = function (req, res) {
    new Model.City({
        id : req.body.id,
        name: req.body.name,
        state_id: req.body.state_id,
    }).save()
        .then(function (city) {
            res.json(city);
        }).catch(function (error) {
        console.log(error);
        res.send('An error occured');
    });
};

/* Get all cities */
var getAllCities = function (req, res) {
    new Model.City().fetchAll()
        .then(function (cities) {
            res.json(cities);
        }).catch(function (error) {
        console.log(error);
        res.send('An error occured');
    });
};

/* Delete a city */
var deleteCity = function (req, res) {
    var isbn = req.params.id;
    new Model.City().where('ISBN', isbn)
        .destroy()
        .catch(function (error) {
            console.log(error);
            res.send('An error occured');
        });
};

/* Get a city */
var getCity = function (req, res) {
    var isbn = req.params.id;
    new Model.City().where('ISBN', isbn)
    //.fetch()
        .fetch({withRelated: ["states"]})
        .then(function (cities) {
            res.json(cities);
        }).catch(function (error) {
        console.log(error);
        res.send('An error occured');
    });
};

/* Exports all methods */
module.exports = {
    saveCity: saveCity,
    getAllCities: getAllCities,
    deleteCity: deleteCity,
    getCity: getCity
};