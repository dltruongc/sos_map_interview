const express = require('express');
require('./loaders');

const app = express();
const AppConfiguration = require('./configs');

const port = process.env.PORT || 9001;
const host = process.env.host || 'localhost';

AppConfiguration.loadConfig(app);

app.listen(port, () => {
	console.log(`App listening at http://${host}:${port}`);
});
