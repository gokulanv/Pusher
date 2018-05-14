const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "Participant"
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    emailId: {
        type: String,
        required: true
    },
    institution: {
        type: String
    },
    company: {
        type: String
    },
    phone:{
        type: Number
    }

})

const User = mongoose.model('User', UserSchema);

module.exports = User;

module.exports.findByUserId = ( userId, callback) => {
    const query = { userId : userId };
    User.findOne(query, callback);
}

module.exports.findByUserName = ( username, callback) => {
    const query = { username : username};
    USer.findOne(query, callback);
}

module.exports.addUser = (newUser, callback) => {
    newUser.save(callback);
}