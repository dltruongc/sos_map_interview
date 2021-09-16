function exceptionFilter(err, req, res, next) {
	console.error(err.message || 'An error has been occured!', err);

	return res.status(err.status || 500).json({
		message: err.message || 'Internal server error',
		code: err.code || 500,
	});
}

module.exports = exceptionFilter;
