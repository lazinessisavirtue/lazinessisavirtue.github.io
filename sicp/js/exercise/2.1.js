(function (sicp) {
	
	sicp.gcd = function (a, b) {
		return b ? sicp.gcd(b, a % b) : a;
	};
	
	sicp.makeRat = function (n, d) {
		var g = sicp.gcd(Math.abs(n), Math.abs(d));
		var s = (d >= 0) ? 1 : -1;
		return [n * s / g, d * s / g];
	};

	return sicp.makeRat(4, -6);
	
})(sicp.$);