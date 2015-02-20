sicp("1.32a", function () {
	sicp("accumulate", function (combiner, nullValue, term, a, next, b) {
		if (a > b) {
			return nullValue;
		} else {
			return combiner(term(a), this("accumulate")(combiner, nullValue, term, next(a), next, b));
		}
	});
	
	return this("accumulate").apply(this, arguments);
})(
		function (a, b) { return a + b; },
		0,
		function (x) { return x; },
		1,
		function (x) { return x + 1; },
		100
);