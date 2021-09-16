const { Map } = require('./map.model');
const { AppError } = require('../../filters/exception');

module.exports.findByLevel = async (level = 1) => {
	try {
		return await Map.paginate({ level }, { populate: { path: 'makers' } });
	} catch (error) {
		throw new AppError({ error });
	}
};
