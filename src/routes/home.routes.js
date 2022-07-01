module.exports = (app) => {
    const home = require('../controllers/home.controller')
    const router = require('express').Router();

    router.get('/', home.index);

    app.use('/', router)
};