sicp("1.35", function (g) {
	var tolerance = 0.00001;
	sicp("fixed-point", function (f, firstGuess) {
		this("close-enough", function (v1, v2) {
			return Math.abs(v1 - v2) < tolerance;
		});
		this("try", function (guess) {
			return (function (next) {
				if (this("close-enough")(guess, next)) {
					return next;
				} else {
					return this("try")(next);
				}
			}).apply(this, [f(guess)]);
			return Math.abs(v1 - v2) < tolerance;
		});
		return this("try")(firstGuess);
	});
	
	return this("fixed-point")(function (x) { return 1 + 1 / x; }, 1);
})();