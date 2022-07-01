exports.create = (req, res) => {
    res.render('blog/create');
};
exports.store = (req, res) => {
    let article = req.body;

    res.json(article);
};
