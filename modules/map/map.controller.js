const { Map } = require('./map.model');
const mapService = require('./map.service');

/**
 * get map info by level
 * @param { number } level
 * @param { import('express').Request } req
 * @param { import('express').Response } res
 * @param { import('express').NextFunction } next
 */
async function getMapInfoByLevel(req, res, next) {
	try {
		const { level = 1 } = req;
		const result = await mapService.findByLevel(level);

		return res.json(result);
	} catch (e) {
		return next(e);
	}
}

module.exports = { getMapInfoByLevel };
