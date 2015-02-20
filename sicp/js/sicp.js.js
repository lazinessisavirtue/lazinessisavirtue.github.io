(function (window) {
	
	function sicpFactory(scope) {
		var sicp = function () {
			if (arguments.length == 0) {
				return sicp.list();
			} else if (arguments.length == 1 && typeof arguments[0] == 'string') {
				return sicp.get.apply(this, arguments);
			} else if (arguments.length == 2 && typeof arguments[0] == 'string'
				&& typeof arguments[1] == 'function') {
				return sicp.define.apply(this, arguments);
			} else {
				console.log(arguments);
				throw "unrecognizable arguments";
			}
		};
		
		sicp.map = Object.create(scope);

		sicp.list = function () {
			var l = [];
			for (var k in sicp.map) {
				l.push(k);
			}
			return l;
		};

		sicp.define = function (key, procedure) {
			var entry = function () {
				return procedure.apply(entry.sicp, arguments);
			}
			entry.key = key;
			entry.sicp = sicpFactory(sicp.map);
			sicp.map[key] = entry;
			return entry;
		};

		sicp.get = function (key) {
			return sicp.map[key];
		};
		
		return sicp;
	}
	
	window.sicp_js = sicpFactory(null);
	if (window.sicp) {
		window.sicp.js = window.sicp_js;
	} else {
		window.sicp = window.sicp_js;
		window.sicp.js = window.sicp_js;
	}
	
} (typeof window !== "undefined" ? window : this));