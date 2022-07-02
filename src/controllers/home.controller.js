const Article = require('../models/article.model');

const index = async (req, res) => {
    let articles = await Article.find()
    res.render('index', {
        data: articles
    });
};

module.exports = {index}