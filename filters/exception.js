module.exports.AppError = class AppError extends Error {
	/**
	 * @param { { code?: number, message?: string, error?: Error } } input
	 */
	constructor(input = {}) {
		const { code, message, error } = input;

		super(message || error.message || 'Internal Server Error');
		this.code = code || error.code || 500;
		this.stack = error.stack;
	}
};
