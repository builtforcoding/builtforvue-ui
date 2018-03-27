'use strict'
require('dotenv').config()
module.exports = {
	NODE_ENV: '"production"',
	ALGOLIA_APP_ID: process.env.ALGOLIA_APP_ID,
	ALGOLIA_APP_KEY: process.env.ALGOLIA_APP_KEY,
	ALGOLIA_DB_INDEX: process.env.ALGOLIA_DB_INDEX
}
