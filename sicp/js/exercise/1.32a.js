(function () {

	this("accumulate", function accumulate(combiner, nullValue, term, a, next, b) {
		if (a > b) {
			return nullValue;
		} else {
			return combiner(term(a), accumulate(combiner, nullValue, term, next(a), next, b));
		}
	});

	return this("1.32a", this("accumulate"));

}).apply(sicp.js)(
		function (a, b) { return a + b; },
		0,
		function (x) { return x; },
		1,
		function (x) { return x + 1; },
		100
);