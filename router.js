/**
 * Created by Home on 16/10/2016.
 */
var country = require('./routes/countries');
var city = require('./routes/cities');
var state = require('./routes/states');
//var index = require('./routes/index');

module.exports = function (app) {

    /* Index(main) route */
    //  app.get('/', index.index);

    /* Country Routes */
    app.post('/countries', country.saveCountry);
    app.get('/countries', country.getAllCountries);
    app.delete('/country/:id', country.deleteCountry);
    app.get('/country/:id', country.getCountry);


    /* City Routes*/
    app.post('/cities', city.saveCity);
    app.get('/cities', city.getAllCities);
    app.delete('/city/:id', city.deleteCity);
    app.get('/city/:id', city.getCity);

    /* State Routes*/
    app.post('/states', state.saveState);
    app.get('/states', state.getStates);
    app.delete('/state/:id', state.deleteState);
    app.get('/state/:id', state.getState)


};