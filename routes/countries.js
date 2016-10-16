/**
 * Created by Home on 16/10/2016.
 */
var Model = require('./../models/Country');

/* Save a country */
var saveCountry = function (req, res) {
    new Model.Country({
        sortname: req.body.sortname,
        name: req.body.name,
    }).save()
        .then(function (country) {
            res.json(country);
        }).catch(function (error) {
        console.log(error);
        res.send('An error occured');
    });
};

/* Get all countries */
var getAllCountries = function (req, res) {
    new Model.Country().fetchAll()
        .then(function (countries) {
            res.json(countries);
        }).catch(function (error) {
        console.log(error);
        res.send('An error occured');
    });
};

/* Delete a country */
var deleteCountry = function (req, res) {
    var countryId = req.params.id;
    new Model.Country().where('id', countryId)
        .destroy()
        .catch(function (error) {
            console.log(error);
            res.send('An error occured');
        });
};

/* Get a country */
var getCountry = function (req, res) {
    var countryId = req.params.id;
    new Model.Country().where('id', countryId)
        .fetch()
        .then(function (country) {
            res.json(country);
        }).catch(function (error) {
        console.log(error);
        res.send('An error occured');
    });
};

/* Exports all methods */
module.exports = {
    saveCountry: saveCountry,
    getAllCountries: getAllCountries,
    deleteCountry: deleteCountry,
    getCountry: getCountry
};