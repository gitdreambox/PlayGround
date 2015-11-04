module.exports = function (express, app) {
    var router = express.Router();

    router.get('/', (req, res, next) => {
        res.render('index', { title: 'Welcome to ChatCat' });
    });

    router.get('/chatrooms', (req, res, next) => {
        res.render('chatrooms', { title: 'Chatrooms' });
    });

    app.use('/', router);
};

