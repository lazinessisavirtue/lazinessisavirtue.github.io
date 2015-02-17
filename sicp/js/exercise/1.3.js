sicp("1.3", function (a, b, c) {
	sicp("sum-of-squares", function (a, b) {
		return a * a + b * b;
	})
	
	if (a > b) {
		if (b > c) {
			return sicp("sum-of-squares")(a, b);
		} else  {
			return sicp("sum-of-squares")(a, c);
		}
	} else {
		if (a > c) {
			return sicp("sum-of-squares")(a, b);
		} else  {
			return sicp("sum-of-squares")(b, c);
		}
	}
})