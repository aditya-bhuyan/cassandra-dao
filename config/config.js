/**
 * New node file
 */
var cql = require('node-cassandra-cql');
var connectorData = require('./config.json');
exports.client = new cql.Client(connectorData);