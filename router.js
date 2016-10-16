/**
 * Created by Home on 16/10/2016.
 */
var user = require('./routes/users');
var book = require('./routes/books');
var genre = require('./routes/genres');
var index = require('./routes/index');

module.exports = function (app) {

    /* Index(main) route */
    app.get('/', index.index);

    /* User Routes */
    app.post('/users', user.saveUser);
    app.get('/users', user.getAllUsers);
    app.delete('/user/:id', user.deleteUser);
    app.get('/user/:id', user.getUser);


    /* Book Routes*/
    app.post('/books', book.saveBook);
    app.get('/books', book.getAllBooks);
    app.delete('/book/:id', book.deleteBook);
    app.get('/book/:id', book.getBook);

    /* Genre Routes*/
    app.post('/genres', genre.saveGenre);
    app.get('/genres', genre.getGenres);
    app.delete('/genre/:id', genre.deleteGenre);
    app.get('/genre/:id', genre.getGenre)


};