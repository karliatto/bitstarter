'use strict';

module.exports = function(app) {

	var session = require('express-session');
	var MySQLStore = require('express-mysql-session')(session);

	app.sessionStore = new MySQLStore(app.config.db);

	app.use(session({
		key: app.config.session.key,
		secret: app.config.session.secret,
		store: app.sessionStore,
		resave: false,
		saveUninitialized: true
	}));
};
