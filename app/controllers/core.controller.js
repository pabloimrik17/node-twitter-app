var db = require('../shared/db');
var twClient = require('../shared/twitter');

exports.home = function(req, res) {
    db.loadDatabase({}, function() {
        res.render('index', {searches: db.getCollection('searches').data});
    });
};

exports.top = function(req, res) {
    db.loadDatabase({}, function() {
        res.render('top', {terms: db.getCollection('top').data});
    });
};

exports.results = function(req, res) {
    var query = req.query.q;

    if(query) {
        db.getCollection('searches').insert({term: query});
        db.saveDatabase();

        twClient.get('search/tweets', {q: query}, function(err, tweets, response) {
            res.render('results', {query: query, tweets: tweets.statuses});
        })
    } else {
        res.send('Error');
    }
};