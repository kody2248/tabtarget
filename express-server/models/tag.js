const mongoose = require('mongoose')


const Tag = mongoose.Schema({
    //id: Number,
    name: String,
    icon: String,
    tagColor: String,
    ParentTag: String

});

module.exports = mongoose.model('Tag', Tag);