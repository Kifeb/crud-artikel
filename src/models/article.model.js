const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    subtitle: {
        required: true,
        type: String
    },
    content: {
        required: true,
        type: String
    },
});

module.exports = mongoose.model('Article', articleSchema);
