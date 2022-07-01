module.exports = (app) => {
    const blog = require('../controllers/blog.controller')
    const router = require('express').Router();

    router.get('/create', blog.create);

    app.use('/blog', router)
};