const mongoose = require('mongoose')

const interfaceSchema = mongoose.Schema({

    name: String,
    images: Array,
    slug: String,
    url: String,
    tags: Array,
    user: {
        name: String,
        userID: String,
        role: String
    },
    date: {
        created: Date,
        modified: Date
    },
    description: String,
    visibile: {
        private: Boolean, //Only creator
        hidden: Boolean, // Direct link
        restricted: mongoose.Mixed, //Restricts view to specific users. False by default, list of user IDs if being used
        password: mongoose.Mixed //Password protected item. False by default, string of hashed password otherwise
    },
    views: Number,
    comments: Number,
    favorites: Number,
    downloads: Number

});

module.exports = mongoose.model('Interface', interfaceSchema);