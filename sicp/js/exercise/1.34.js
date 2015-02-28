(function () {
	function f(g) {
		return g(2);
	}
	
	return f(f);
})();