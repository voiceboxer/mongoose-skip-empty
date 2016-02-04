module.exports = function(value) {
	if (value == null || (typeof value === 'string' && value.length === 0)) {
		return undefined;
	}

	return value;
};
