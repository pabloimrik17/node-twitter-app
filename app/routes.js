var core = require('./controllers/core.controller');

module.exports = function (app) {

    app.get('/', core.home);

    app.get('/top', core.top);

    app.get('/results', function (req, res) {
        res.send('Results page');
    });

    app.get('/api/results', function (req, res) {
        res.json({message: 'API JSON page'});
    });
};