(function () {

	function square(x) {
		return x * x;
	}

	function inc(x) {
		return x + 1;
	}

	function compose(f, g) {
		return function (x) {
			return f(g(x));
		};
	}
	
	return compose(square, inc)(6);
	
})();