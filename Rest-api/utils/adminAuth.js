const jwt = require("./jwt");
const { authCookieName } = require("../app-config");
const { adminModel, tokenBlacklistModel } = require("../models");

function authAdmin(redirectUnauthenticated = true ) {
	return function(req, res, next) {
		const token = req.cookies[authCookieName] || "";
		Promise.all([ jwt.verifyToken(token), tokenBlacklistModel.findOne({ token }) ])
			.then(([ data, blacklistedToken ]) => {
				if (blacklistedToken) {
					return Promise.reject(new Error("blacklisted token"));
				}
				adminModel.findById(data.id).then((user) => {
					req.user = user;
					req.isLogged = true;
					next();
				})
			})
			.catch((err) => {
				if (!redirectUnauthenticated) {
					next();
					return;
				}
				if ([ "token expired", "blacklisted token", "jwt must be provided" ].includes(err.message)) {
					console.error(err);
					res.status(401).send({ message: "Invalid token!" });
					return;
				}
				next(err);
			});
	};
}

module.exports = authAdmin;