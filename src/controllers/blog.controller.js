const Article = require('../models/article.model');

exports.create = (req, res) => {
    res.render('blog/create');
};


exports.store = async (req, res) => {
    let article = new Article({
        title: req.body.title,
        subtitle: req.body.subtitle,
        content: req.body.content,
        userIg: req.body.userIg,
    });
    try {
        await article.save();
        req.flash('msg', 'Data berhasil ditambah')
        res.redirect('/blog/artikel');
    } catch (e) {
        res.redirect('/blog/create');
    };
};

exports.show = async (req, res) => {
    try {
        const title = req.params.title;
        let article = await Article.findOne({title: title});
        res.render('blog/show', {
            article,
            date: new Date().toISOString().slice(0, 10)
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
        res.redirect('artikel')
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
        req.flash('msg', 'Data Berhasil diubah')
        res.redirect('artikel');
    } catch (e) {
        res.render('blog/edit', {
            article,
        })
    };
};

exports.delete = async (req, res) => {
        const id = req.params.id;
        await Article.findByIdAndDelete(id);
        req.flash('msg', 'Data Berhasil Dihapus')
        res.redirect('artikel');
};

exports.view = async (req, res) => {
    let articles = await Article.find()
    res.render('blog/artikel', {
        data: articles,
        msg: req.flash('msg'),
    });
};