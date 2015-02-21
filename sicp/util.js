(function (window) {
	
	function utilFactory(scope) {
		var util = function () {
			var l = [];
			for (var k in util) {
				l.push(k);
			}
			return l;
		};
		
		util.knowTypes = {
				"undefined": true,
				"boolean": true,
				"number": true,
				"object": true,
				"string": true,
				"function": true,
		};
		
		util.checkType = function (value, type) {
			if (typeof type === "string") {
				if (type in util.knowTypes) {
					return typeof value === type;
				} else {
					throw "Unknown type string [" + type + "]";
				}
			} else if (typeof type === "function") {
				return value instanceof type;
			} else {
				throw "Unknown type with type [" + typeof type + "]";
			}
		};

		return util;
	}
	
	window.util = window.util || utilFactory(); 
	
} (typeof window !== "undefined" ? window : this));