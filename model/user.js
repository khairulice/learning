const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    }
},
    {
        collection: 'users'
    });

module.exports = mongoose.model('User', UserSchema);