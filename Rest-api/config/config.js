
const env = process.env.NODE_ENV || "development";

const config = {
	development: {
		port: process.env.PORT || 3000,
		dbURL: process.env.DB_URL,
		origin: []
	},
	production: {
		port: process.env.PORT || 3000,
		dbURL: process.env.DB_URL,
		origin: []
	}
};

module.exports = config[env];