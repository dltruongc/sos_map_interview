const express = require('express');
const morgan = require('morgan');

/**
 *
 * @param {import("express").Application} app
 */
module.exports.applyToApp = (app) => {
	app.use(express.urlencoded({ extended: true }));
	app.use(express.json());
	app.use(morgan('common'));
};
