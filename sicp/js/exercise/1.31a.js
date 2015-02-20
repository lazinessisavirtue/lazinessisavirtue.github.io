sicp("1.31a", function (n) {
	sicp("product-recursive", function (term, a, next, b) {
		if (a > b) {
			return 1;
		} else {
			return term(a) * this("product-recursive")(term, next(a), next, b);
		}
	});
	
	sicp("factorial-recursive", function (n) {
		this("identity", function (x) { return x; });
		this("inc", function (x) { return x + 1; });
		return this("product-recursive")(this("identity"), 1, this("inc"), n);
	});
	
	this("pi/4-term", function (a) {
		return (a - 1) / a * (a + 1) / a ;
	});
	this("pi/4-next", function (a) {
		return a + 2;
	});
	return this("product-recursive")(this("pi/4-term"), 3, this("pi/4-next"), n);
})(100);