// By Cristian Franco
const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

// END-POINTS
router.get('/', getBicycles);

function getBicycles(req, res) {
    controller.listBicycles()
        .then(bicicletas => {
            response.success(req, res, bicicletas, 200);
        })
        .catch(err => {
            response.error(req, res, 'Internal error', 500, err);
        });
};

module.exports = router;