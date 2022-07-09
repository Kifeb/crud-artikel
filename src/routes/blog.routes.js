module.exports = (app) => {
    const blog = require('../controllers/blog.controller')
    const router = require('express').Router();

    router.get('/artikel', blog.view);
    router.get('/create', blog.create);
    router.post('/', blog.store);
    router.get('/:title', blog.show);
    router.get('/:id/edit', blog.edit);
    router.patch('/:id', blog.update);
    router.delete('/:id', blog.delete);
    

    app.use('/blog', router);
};