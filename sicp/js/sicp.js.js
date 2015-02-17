(function (window) {
	
	util = {
		arrayOf: function (a) {
			return Array.prototype.slice.apply(a);
		}
	};
	
	var sicp = function () {
		if (arguments.length == 0) {
			return sicp.list();
		} else if (arguments.length == 1 && typeof arguments[0] == 'string') {
			return sicp.get.apply(this, util.arrayOf(arguments));
		} else if (arguments.length == 2 && typeof arguments[0] == 'string'
			&& typeof arguments[1] == 'function') {
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
		var entry = function () {
			return procedure.apply(this, arguments);
		}
		entry.key = key;
		sicp.map[key] = entry;
		return entry;
	};

	sicp.get = function (key) {
		return sicp.map[key];
	};
	
	window.sicp = window.sicp_js = sicp;
	
} (typeof window !== "undefined" ? window : this));