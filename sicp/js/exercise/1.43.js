(function () {

	function square(x) {
		return x * x;
	}

	function repeat(f, n) {
		return (n === 0) ? function (x) {
			return x;
		} : function (x) {
			return repeat(f, n - 1)(f(x));
		};
	}
	
	return repeat(square, 2)(5);
	
})();