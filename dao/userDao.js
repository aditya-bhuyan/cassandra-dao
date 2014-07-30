/**
 * New node file
 */
var cassandra = require('../config/config.js');
var uuid = require('node-uuid');
var queries = require('../cql/user.json');

exports.addUser = function(name){	


    var id = uuid.v1();
    var strQuery = queries.insert;
    console.log(strQuery);
    
    console.log(cassandra);
    console.log(cassandra.client);

    cassandra.client.execute(strQuery,[id,'Aditya'],function(err){
	if(err){
		console.log(err);
	}else{
		console.log('User done successfully.');
	}
});
}

exports.updateUser = function(id,name){	

        var strQuery = queries.update;
        console.log(strQuery);

        cassandra.client.execute(strQuery,['Aditya',id],function(err){
    	if(err){
    		console.log(err);
    	}else{
    		console.log('User updated successfully.');
    	}
    }); 
}

exports.selectUser = function(id){	

    var strQuery = queries.select;
    console.log(strQuery);

    cassandra.client.execute(strQuery,[id],function(err){
	if(err){
		console.log(err);
	}else{
		console.log('User retrieved successfully.');
	}
}); 
}


