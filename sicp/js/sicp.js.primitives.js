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
	
	return sicp();
	
})();