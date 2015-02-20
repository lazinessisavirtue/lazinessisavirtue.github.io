sicp("1.31b", function (n) {
	sicp("product-iterative", function (term, a, next, b) {
		this("iter", function (a, result) {
			if (a > b) {
				return result;
			} else {
				return this("iter")(next(a), result * term(a));
			}
		});
		return this("iter")(a, 1);
	});
	
	sicp("factorial-iterative", function (n) {
		this("identity", function (x) { return x; });
		this("inc", function (x) { return x + 1; });
		return this("product-iterative")(this("identity"), 1, this("inc"), n);
	});
	
	this("pi/4-term", function (a) {
		return (a - 1) / a * (a + 1) / a ;
	});
	this("pi/4-next", function (a) {
		return a + 2;
	});
	return this("product-iterative")(this("pi/4-term"), 3, this("pi/4-next"), n);
})(100);