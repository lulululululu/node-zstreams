var ZTransform = require('../transform');
var util = require('util');

function JSONStringifyStream (options) {
	this.begin = true;
	ZTransform.call(this, options);
};
util.inherits(JSONStringifyStream, ZTransform);

JSONStringifyStream.prototype._transform = function(chunk, encoding, done) {
	if(typeof chunk !== 'object') return done(new Error('Upstream data must be an object'));

	var str = '';
	if(this.begin) str += '[';

	if(chunk) this.push(str + JSON.stringify(chunk));
	else this.push(']');
	done();
};