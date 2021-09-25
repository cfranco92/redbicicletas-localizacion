// By Cristian Franco
const Model = require('./model');

function listBicycle() {
    return Model.find();
}

module.exports = {
    list: listBicycle,
}