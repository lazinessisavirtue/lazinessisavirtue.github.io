(function (window) {
	
	function sicpFactory(parentScope) {
		var sicp = function () {
			if (arguments.length === 0) {
				return sicp.list();
			} else if (arguments.length === 1 && typeof arguments[0] === "string") {
				return sicp.get.apply(this, arguments);
			} else if (arguments.length === 2 && typeof arguments[0] === "string") {
				return sicp.define.apply(this, arguments);
			} else {
				console.log(arguments);
				throw "unrecognizable arguments";
			}
		};
		
		sicp.scope = Object.create(parentScope);

		sicp.list = function () {
			var l = [];
			for (var k in sicp.scope) {
				l.push(k);
			}
			return l;
		};

		sicp.define = function (key, value) {
			var entry = (typeof value === "function") ? function () {
				return value.apply(sicpFactory(sicp.scope), arguments);
			} : function () {
				return value;
			};
			entry.value = value;
			entry.key = key;
			entry.sicp = sicpFactory(sicp.scope);
			sicp.scope[key] = entry;
			return entry;
		};

		sicp.get = function (key) {
			return sicp.scope[key];
		};
		
		return sicp;
	}
	
	window.sicpJs = window.sicpJs || sicpFactory(null);
	window.sicp = window.sicp || window.sicpJs;
	
} (typeof window !== "undefined" ? window : this));