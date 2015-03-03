(function (window) {
	
	function sicpFactory(parentScope) {
		var sicp = function () {
			if (arguments.length === 0) {
				return arguments.callee.list();
			} else if (arguments.length === 1 && typeof arguments[0] === "string") {
				return arguments.callee.get.apply(arguments.callee, arguments);
			} else if (arguments.length === 2 && typeof arguments[0] === "string") {
				return arguments.callee.defineValue.apply(arguments.callee, arguments);
			} else if (arguments.length === 3 && typeof arguments[0] === "string"
					&& arguments[1] instanceof Array && typeof arguments[2] === "function") {
				return arguments.callee.defineFunction.apply(arguments.callee, arguments);
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

		sicp.defineValue = function (key, value) {
			if (key in this.scope) {
				if (this.scope.hasOwnProperty(key)) {
					if (value === this.scope[key].value) {
						return this.scope[key];
					} else {
						console.warn("Overwriting definition [" + key + "] with value");
					}
				} else {
					console.log("Overriding definition [" + key + "] with value");
				}
			}
			
			return this.scope[key] = value;
		};

		sicp.defineFunction = function (key, args, func) {
			if (key in this.scope) {
				if (this.scope.hasOwnProperty(key)) {
					if (typeof this.scope[key] === "function"
							&& args === this.scope[key].args
							&& func === this.scope[key].func) {
						return this.scope[key];
					} else {
						console.warn("Overwriting definition [" + key + "] with function");
					}
				} else {
					console.log("Overriding definition [" + key + "] with function");
				}
			}
			
			var entry = function () {
				var sub = sicpFactory(sicp.scope);
				for (var i = 0; i < args.length; i++) {
					sub(args[i], arguments[i]);
				}
				return func.apply(sub, arguments);
			}
			entry.args = args;
			entry.func = func;
			return this.scope[key] = entry;
		};

		sicp.get = function (key) {
			return sicp.scope[key];
		};
		
		return sicp;
	}

	window.sicp || (window.sicp = {});
	window.sicp.js || (window.sicp.js = sicpFactory({}));
	window.sicp.$ || (window.sicp.$ = {});
	
} (typeof window !== "undefined" ? window : this));