const {Schema, model, Types} = require('mongoose');

const schema = Schema({
    title: {
        type: String,
        require: true,
    },
    body: {
        type: String,
        require: true,
    },
    owner: {
        type: Types.ObjectId,
        ref: "User"
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = model('Post', schema);
