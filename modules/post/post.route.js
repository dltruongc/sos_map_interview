const express = require('express');
const router = express.Router();

const postCtrl = require('./post.controller');

router.route('/maker/:maker_id').get(postCtrl.getPostsByMakerId);

module.exports = router;
