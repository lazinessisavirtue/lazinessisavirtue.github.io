sicp("1.3", function (a, b, c) {
	this("sum-of-squares", function (a, b) {
		return a * a + b * b;
	});
	
	if (a > b) {
		if (b > c) {
			return this("sum-of-squares")(a, b);
		} else  {
			return this("sum-of-squares")(a, c);
		}
	} else {
		if (a > c) {
			return this("sum-of-squares")(a, b);
		} else  {
			return this("sum-of-squares")(b, c);
		}
	}
})(4, 3, 5)