module.exports = (app) => {
    const blog = require('../controllers/blog.controller')
    const router = require('express').Router();

    router.get('/create', blog.create);
    router.post('/', blog.store)

    app.use('/blog', router)
};