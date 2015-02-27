(function (sicp) {
	
	sicp("product-iterative", function (term, a, next, b) {
		function iter(a, result) {
			if (a > b) {
				return result;
			} else {
				return iter(next(a), result * term(a));
			}
		}
		return iter(a, 1);
	});
	
	sicp("factorial-iterative", function (n) {
		function identity(x) { return x; }
		function inc(x) { return x + 1; }
		return sicp("product-iterative")(identity, 1, inc, n);
	});
	
	return sicp("1.31b", function (n) {
		function pi4term(a) {
			return (a - 1) / a * (a + 1) / a ;
		}
		function pi4next(a) {
			return a + 2;
		}
		return sicp("product-iterative")(pi4term, 3, pi4next, n);
	});
	
})(sicp.js)(1000);