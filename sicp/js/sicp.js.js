(function (window) {
	
	function sicpFactory(parentScope) {
		var sicp = function () {
			if (arguments.length === 0) {
				return arguments.callee.list();
			} else if (arguments.length === 1 && typeof arguments[0] === "string") {
				return arguments.callee.get.apply(arguments.callee, arguments);
			} else if (arguments.length === 2 && typeof arguments[0] === "string") {
				return arguments.callee.define.apply(arguments.callee, arguments);
			} else {
				console.log(arguments);
				throw new Error("Unrecognizable arguments");
			}
		};
		
		sicp.scope = Object.create(parentScope);

		sicp.list = function () {
			var l = [];
			for (var k in this.scope) {
				l.push(k);
			}
			return l;
		};

		sicp.define = function (key, value) {
			if (key in this.scope) {
				if (value === this.scope[key].value) {
					return this.scope[key];
				} else {
					console.log("Overwriting definition [" + key + "]");
				}
			}
			
			var entry = (typeof value === "function") ? function () {
				return value.apply(sicpFactory(sicp.scope), arguments);
			} : function () {
				return value;
			};
			entry.value = value;
			entry.key = key;
			entry.sicp = sicpFactory(this.scope);
			this.scope[key] = entry;
			return entry;
		};

		sicp.get = function (key) {
			return sicp.scope[key];
		};
		
		return sicp;
	}

	window.sicp = window.sicp || {};
	window.sicp.js = window.sicp.js || sicpFactory(null);
	
} (typeof window !== "undefined" ? window : this));