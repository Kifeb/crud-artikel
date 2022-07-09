const Article = require('../models/article.model');

const index = async (req, res) => {
    let articles = await Article.find()
    res.render('index', {
        data: articles,
        date: new Date().toISOString().slice(0, 10)
    });
};

module.exports = {index}