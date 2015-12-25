var redis = require("redis");

var DBWrapper = function (pluginName) {
	this.pluginName = pluginName;
	this.db = redis.createClient();
};

DBWrapper.prototype.set = function(key, value, callback) {
 	key = "ntb:"+this.pluginName+":"+key;
  	this.db.set(key, value, function(){
  		if(callback) callback.apply(callback, arguments);
  	});
};

DBWrapper.prototype.get = function(key, callback) {
  	key = "ntb:"+this.pluginName+":"+key;
  	this.db.get(key, function() {
  		if(callback) callback.apply(callback, arguments);
  	});
};


module.exports = DBWrapper;