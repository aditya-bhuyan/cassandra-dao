/**
 * New node file
 */
var dao = require('../dao/emailsDao.js');

exports.addEmail = function(username,emails){
	return dao.addEmail(username,emails);
}

exports.getEmail = function(username){
	return dao.getEmail(username);
}