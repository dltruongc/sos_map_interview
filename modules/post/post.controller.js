const postService = require('./post.service');

/**
 * paginate posts by maker id
 * @param { import('express').Request} req
 * @param { import('express').Response} res
 */
module.exports.getPostsByMakerId = (req, res) => {
	const { maker_id: id } = req.params;
	const { page = 1, limit = 10 } = req.query;

	return postService.getPostByMaker(id, { page, limit });
};
