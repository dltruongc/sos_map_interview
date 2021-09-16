const { Post } = require('./post.model');

/**
 * paginate posts by maker id
 * @param { string } makerId
 * @param { import('mongoose').PaginateOptions } pagination
 */
async function getPostByMaker(makerId, pagination = { page: 1, limit: 10 }) {
	if (!makerId) {
		throw new Error('No maker id specified!');
	}

	return Post.paginate({ makerId }, pagination);
}

module.exports = { getPostByMaker };
