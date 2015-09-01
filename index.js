exports.convert = function(json) {
	var tag = '';
	var fields = '';
	for (i in json.tags) {
		tag += ',' + i + '=' + json.tags[i]
	}
	for (i in json.fields) {
		var v = json.fields[i];
		if (typeof json.fields[i] === 'object') {
			if (json.fields[i].type === 'int') {
				v = v + 'i'; // interger influxdb >= 0.9.3
			} else if (json.fields[i].type === 'float') { // float

			}
		} else { // string
			v = "\"" + v + "\""
		}

		// boolean
		if (v === true) {
			v = 'TRUE';
		} else if (v === false) {
			v = 'FALSE';
		}
		fields += ',' + i + '=' + v
	}
	var r = json.measurement + tag + ' ' + fields.replace(',', '') + ' ' + json.time;
	return r;
};