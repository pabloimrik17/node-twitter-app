module.exports = function (app) {

    app.get('/', function (req, res) {
        res.send('Home page');
    });

    app.get('/top', function (req, res) {
        res.send('Top page');
    });

    app.get('/results', function (req, res) {
        res.send('Results page');
    });

    app.get('/api/results', function (req, res) {
        res.json({message: 'API JSON page'});
    });
};