'use strict';

module.exports = {

	db: {
		host: process.env.BITSTARTER_DB_HOST || 'localhost',
		port: parseInt(process.env.BITSTARTER_DB_HOST || 3306)
	},

	dbOptions : {
		host     : '127.0.0.1',
		port     : 3306,
		user     : process.env.TEST || 'bitstarter',
		password : 'password',
		database : process.env.TEST || 'bitstarter'
	}
};
