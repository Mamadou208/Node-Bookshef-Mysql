/**
 * Created by Home on 16/10/2016.
 */
var Model = require('./../models/Models');

/* Save a country */
var saveCountry = function (req, res) {
    new Model.Country({
        id: req.body.id,
        sortname: req.body.sortname,
        name: req.body.name
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
            res.status(500).json({error: true, data: {message: error.message}});
        });
};

/* Get a country */
var getCountry = function (req, res) {
    var countryId = req.params.id;
    new Model.Country().where('id', countryId)
        .fetch({withRelated: ["states"]})
        .then(function (country) {
            res.json(country);
        }).catch(function (error) {
        console.log(error);
        res.status(500).json({error: true, data: {message: error.message}});
    });
};

/* Exports all methods */
module.exports = {
    saveCountry: saveCountry,
    getAllCountries: getAllCountries,
    deleteCountry: deleteCountry,
    getCountry: getCountry
};