const {Schema, model} = require('mongoose');

const schema = Schema({
    userName: {
        type: 'String',
        required: true,
        unique: true
    },
    password: {
        type: 'String',
        required: true,
    }
});

module.exports = model('User', schema);
