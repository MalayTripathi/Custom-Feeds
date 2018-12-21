const NewsController = require('./controllers/news.controller');

exports.routesConfig = function (app) {
    app.get('/news', NewsController.list);
    app.get('/news/:id', NewsController.getById );
};