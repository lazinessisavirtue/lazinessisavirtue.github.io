(function () {
	
	sicp("+", function() {
		var result = 0;
		for (var i = 0; i < arguments.length; i++) {
			result += arguments[i];
		}
		return result;
	});
	
	sicp("-", function(a, b) {
		return a - b;
	});
	
	sicp("*", function() {
		var result = 0;
		for (var i = 0; i < arguments.length; i++) {
			result *= arguments[i];
		}
		return result;
	});
	
	sicp("/", function(a, b) {
		return a / b;
	});
	
	sicp("%", function(a, b) {
		return a % b;
	});
	
	sicp("==", function(a, b) {
		return a == b;
	});
	
	sicp("!=", function(a, b) {
		return a != b;
	});
	
	sicp("<", function(a, b) {
		return a < b;
	});
	
	sicp(">", function(a, b) {
		return a > b;
	});
	
	sicp("<=", function(a, b) {
		return a <= b;
	});
	
	sicp(">=", function(a, b) {
		return a >= b;
	});
	
	sicp("and", function() {
		for (var i = 0; i < arguments.length; i++) {
			if (!arguments[i]) {
				return false;
			}
		}
		return true;
	});
	
	sicp("or", function() {
		for (var i = 0; i < arguments.length; i++) {
			if (arguments[i]) {
				return true;
			}
		}
		return false;
	});
	
	sicp("not", function(a) {
		return !a;
	});
	
	return sicp();
	
})();