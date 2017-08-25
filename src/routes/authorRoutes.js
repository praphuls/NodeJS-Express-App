var express = require('express');
var authorRouter = express.Router();

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

    authorRouter.route('/')
        .get(function(req, res) {
            res.render('authors', {
                title: 'Node JS Books Authors',
                heading: 'Authors Page',
                nav: nav,
                book: books
            });
        })
    authorRouter.route('/:id')
        .get(function(req, res) {
            var id = req.params.id;
            res.render('authorDetail', {
                title: 'Author Detail',
                heading: 'Author Detail of Book: ' + id,
                nav: nav,
                book: books[id]
            });
        })
    return authorRouter;
}
module.exports = router;