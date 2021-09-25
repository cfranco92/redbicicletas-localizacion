// By Cristian Franco
const store = require('./store');

function listBicycles() {
    return store.list();
}

module.exports = {
    listBicycles,
}