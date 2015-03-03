(function (sicp) {
	
	var gcd = function (a, b) {
		return b ? gcd(b, a % b) : a;
	};
	
	sicp["make-rat"] = function (n, d) {
		var g = gcd(Math.abs(n), Math.abs(d));
		var s = (d >= 0) ? 1 : -1;
		return [n * s / g, d * s / g];
	};

	return sicp["make-rat"](4, -6);
	
})(sicp.$);