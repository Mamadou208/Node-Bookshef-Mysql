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
        res.status(500).json({error: true, data: {message: error.message}});
    });
};

/* Get all books */
var getStates = function (req, res) {
    new Model.State().fetchAll()
        .then(function (states) {
            res.json(states);
        }).catch(function (error) {
        console.log(error);
        res.status(500).json({error: true, data: {message: error.message}});
    });
};

/* Delete a book */
var deleteState = function (req, res) {
    var Id = req.params.id;
    new Model.State().where('id', Id)
        .destroy()
        .catch(function (error) {
            console.log(error);
            res.status(500).json({error: true, data: {message: error.message}});
        });
};

/* Get a book */
var getState = function (req, res) {
    var Id = req.params.id;
    new Model.State().where('id', Id)
        .fetch({withRelated: ["cities"]})
        .then(function (state) {
            res.json(state);
        }).catch(function (error) {
        console.log(error);
        res.status(500).json({error: true, data: {message: error.message}});
    });
};

/* Exports all methods */
module.exports = {
    saveState: saveState,
    getStates: getStates,
    deleteState: deleteState,
    getState: getState
};