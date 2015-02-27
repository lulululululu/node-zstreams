var ZTransform = require('../transform');
var util = require('util');

function JSONStringifyStream (options) {
	ZTransform.call(this, options);
};
util.inherits(JSONStringifyStream, ZTransform);

JSONStringifyStream.prototype._transform = function(chunk, encoding, done) {
	if(typeof chunk !== 'object') return done(new Error('Upstream data must be an object'));

	
};