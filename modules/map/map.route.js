const express = require('express');
const router = express.Router();

const mapCtrl = require('./map.controller');

router.route('/').get(mapCtrl.getMapInfoByLevel);

module.exports = router;
