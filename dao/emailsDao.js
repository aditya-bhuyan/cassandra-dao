/**
 * New node file
 */
var cassandra = require('../config/config.js');
var uuid = require('node-uuid');
var queries = require('../cql/email.json');
var types = require('../node_modules/node-cassandra-cql/lib/types.js');

exports.addEmail = function(username,emails){
	var id = uuid.v1();
	var strQuery = queries.insert;
	var response ;
	cassandra.client.executeAsPrepared(strQuery,[id,username,{value:emails,hint:types.dataTypes.set}],function(err,result){
		if(err){
			console.log(err);
			response = err;
		}else{
			console.log('Email done successfully.');
			response = result;
		}
		
	});
	return response;
}

exports.getEmail = function(username){
	var id = uuid.v1();
	var strQuery = queries.select;
	var response ;
	cassandra.client.execute(strQuery,[username],function(err,result){
		if(err){
			console.log(err);
			response = err;
		}else{
			console.log('Email retrieval done successfully.');
			response = result;
		}
	});
	return response;
}