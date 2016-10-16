var Model = require('./../models/Models');

/* Save a book */
var saveState = function (req, res) {
    new Model.State({
        name: req.body.name,
        country_id: req.body.country_id
    }).save()
        .then(function (genre) {
            res.json(genre);
        }).catch(function (error) {
        console.log(error);
        res.send('An error occured');
    });
};

/* Get all books */
var getStates = function (req, res) {
    new Model.State().fetchAll()
        .then(function (states) {
            res.json(states);
        }).catch(function (error) {
        console.log(error);
        res.send('An error occured');
    });
};

/* Delete a book */
var deleteState = function (req, res) {
    var genreId = req.params.id;
    new Model.State().where('genreId', genreId)
        .destroy()
        .catch(function (error) {
            console.log(error);
            res.send('An error occured');
        });
};

/* Get a book */
var getState = function (req, res) {
    var genreId = req.params.id;
    new Model.State().where('genreId', genreId)
        .fetch()
        .then(function (state) {
            res.json(state);
        }).catch(function (error) {
        console.log(error);
        res.send('An error occured');
    });
};

/* Exports all methods */
module.exports = {
    saveState: saveState,
    getStates: getStates,
    deleteState: deleteState,
    getState: getState
};