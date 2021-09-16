const appRouter = require('./route');
const AppConfiguration = require('./app');

/**
 * @param {import("express").Application} app
 */
module.exports.loadConfig = (app) => {
	AppConfiguration.applyToApp(app);

	app.use(appRouter);

	app.use(require('../filters/exception.filter'));
};
