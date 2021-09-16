const mongoose = require('mongoose');

mongoose
	.connect('mongodb://localhost:27017/sosmap?authSource=admin', {
		user: process.env.DB_USER,
		pass: process.env.DB_PASSWORD,
	})
	.then((_) => {
		console.info('DB connected');
	})
	.catch((e) =>
		console.error('Cannot connect to DB', e?.name + ':' + e.codeName)
	);
