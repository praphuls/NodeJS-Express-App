var express = require('express');
var bookRouter = express.Router();
var router = function(nav) {

    var books = [{
            "title": "War and Peace",
            "genre": "Historical Fiction",
            "author": "Lev Nikolayevich Tolstoy",
            "read": false
        },
        {
            "title": "Les Misérables",
            "genre": "Historical Fiction",
            "author": "Victor Hugo",
            "read": false
        },
        {
            "title": "The Time Machine",
            "genre": "Science Fiction",
            "author": "H. G. Wells",
            "read": false
        },
        {
            "title": "A Journey into the Center of the Earth",
            "genre": "Science Fiction",
            "author": "Jules Verne",
            "read": false
        },
        {
            "title": "The Dark World",
            "genre": "Fantasy",
            "author": "Henry Kuttner",
            "read": false
        }
    ]

    bookRouter.route('/')
        .get(function(req, res) {
            res.render('books', {
                title: 'Node JS Books',
                heading: 'Books Page',
                nav: nav,
                book: books
            });
        })
    bookRouter.route('/:id')
        .get(function(req, res) {
            var id = req.params.id;
            res.render('bookDetail', {
                title: 'Book Detail',
                heading: 'Book Detail of Book: ' + id,
                nav: nav,
                book: books[id]
            });
        })
    return bookRouter;
}
module.exports = router;