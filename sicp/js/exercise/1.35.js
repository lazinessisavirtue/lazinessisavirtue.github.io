(function () {

	var tolerance = 0.00001;
	
	this("fixed-point", function (f, firstGuess) {
		function closeEnough (v1, v2) {
			return Math.abs(v1 - v2) < tolerance;
		}
		function tryGuess(guess) {
			return (function (next) {
				if (closeEnough(guess, next)) {
					return next;
				} else {
					return tryGuess(next);
				}
			})(f(guess));
		}
		return tryGuess(firstGuess);
	});
	
	return this("1.35", [], function () {
		return this("fixed-point")(function (x) { return 1 + 1 / x; }, 1);
	});

}).apply(sicp.js)();