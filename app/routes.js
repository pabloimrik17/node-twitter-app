var core = require('./controllers/core.controller');
var api = require('./controllers/api.controller');

module.exports = function (app) {

    app.get('/', core.home);

    app.get('/top', core.top);

    app.get('/results', core.results);

    app.get('/api/results', api.results);
};