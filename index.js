exports.convert = function(json) {
	var tag = '';
	var fields = '';
	for (i in json.tags) {
		tag += ',' + i + '=' + json.tags[i]
	}
	for (i in json.fields) {
		var isNumber = false;
		if (typeof json.fields[i] === 'object' && json.fields[i].type === 'number') {
			isNumber = true;
		}
		var v = !isNumber ? "\"" + json.fields[i] + "\"" : json.fields[i];
		fields += ',' + i + '=' + v
	}
	var r = json.measurement + tag + ' ' + fields.replace(',', '') + ' ' + json.time;
	return r;
};