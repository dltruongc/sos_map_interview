const express = require('express');
const router = express.Router();

router.use('/maps', require('../modules/map/map.route'));
router.use('/posts', require('../modules/post/post.route'));

router.get('*', (req, res, next) => {
	res.status(404).send('Resource not found');
});

module.exports = router;
