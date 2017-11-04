var db = require('../shared/db');
var twClient = require("../shared/twitter");

exports.results = function(req, res) {
    var query = req.query.q;

    if(query) {
        db.getCollection('searches').insert({term: query});
        db.saveDatabase();

        twClient.get('search/tweets', {q: query}, function(err, tweets, response) {
            res.json(tweets);

        })
    } else {
        res.send('Error');
    }
};