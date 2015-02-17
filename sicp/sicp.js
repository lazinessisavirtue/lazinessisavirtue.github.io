(function (window) {
	
	var sicp = function () {
		if (arguments.length = 0) {
			return sicp.list();
		} else if (arguments.length = 1 && typeof arguments[0] == 'string') {
			return sicp.get.apply(this, arguments);
		} else if (arguments.length = 3 && typeof arguments[0] == 'string'
			&& typeof arguments[1] == 'function'
			&& arguments[2] instanceof Array) {
			return sicp.build.apply(this, arguments);
		} else {
			console.log(arguments);
			throw "unrecognizable arguments";
		}
	};
	
	sicp.map = {};

	sicp.list = function () {
		var l = [];
		for (var k in sicp.map) {
			l.push(k);
		}
		return l;
	};

	sicp.build = function (key, procedure, args) {
		sicp.map[key] = function () {
			return procedure.apply(this, arguments)
		}
		sicp.map[key].key = key;
		sicp.map[key].args = args;
		sicp.map[key].output = sicp.map[key](args);
		return sicp.map[key].output;
	};

	sicp.get = function (key) {
		return sicp.map[key];
	};
	
	window.sicp = sicp;
	
} (typeof window !== "undefined" ? window : this));