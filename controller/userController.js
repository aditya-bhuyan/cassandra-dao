/**
 * New node file
 */
var dao = require('../dao/userDao.js');

exports.addUser = function(name){
	dao.addUser(name);
}

exports.updateUser = function(id,name){
	dao.updateUser(id,name);
}

exports.selectUser = function(id){
	dao.selectUser(id);
}

var test = function (name){
	dao.addUser(name); 
}