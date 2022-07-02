const Article = require('../models/article.model');

exports.create = (req, res) => {
    res.render('blog/create');
};

exports.store = async (req, res) => {
    let article = new Article({
        title: req.body.title,
        subtitle: req.body.subtitle,
        content: req.body.content
    });
    try {
        await article.save()
        res.redirect('/');
    } catch (e) {
        res.redirect('/blog/create');
    };
};

exports.show = async (req, res) => {
    try {
        const id = req.params.id;
        let article = await Article.findById(id);
        res.render('blog/show', {
            article,
        });
    } catch (e) {
        res.redirect('/')
    };
};

exports.edit = async (req, res) => {
    try {
        const id = req.params.id;
        let article = await Article.findById(id);
        res.render('blog/edit', {
            article,
        });
    } catch (e) {
        res.redirect('/')
    };
};

exports.update = async (req, res) => {
    try {
        const id = req.params.id;

        let article = await Article.findById(id);
        article.title = req.body.title;
        article.subtitle = req.body.subtitle;
        article.content = req.body.content;
        await article.save()
        
        res.redirect('/');
    } catch (e) {
        res.render('blog/edit', {
            article,
        })
    };
};
