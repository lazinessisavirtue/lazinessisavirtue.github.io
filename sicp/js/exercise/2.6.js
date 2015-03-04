(function (sicp) {
	
	sicp.zero = function (f) {
		return function (x) {
			return x;
		};
	};
	
	sicp.add1 = function (n) {
		return function (f) {
			return function (x) {
				return f(n(f)(x));
			};
		};
	};

	sicp.addToN = function (n) {
		return (n === 0) ? sicp.zero : sicp.add1(sicp.addToN(n - 1));
	};
	
	return [
			sicp.addToN(10)(function (x) { return x * 2; })(3),
			sicp.addToN(100)(function (x) { return 1 + 1 / x; })(4)
	];
	
})(sicp.$);

/*
	Proof by Induction: addToN(n)(f)(x) = f^n(x)
	
	Base case: addToN(0)(f)(x) = zero = f^0(x)
	
	Inductive Step:
		Assume: addToN(n)(f)(x) = f^n(x)
		Then: addToN(n + 1)(f)(x)
			= add1(addToN(n))(f)(x)
			= f(addToN(n)(f)(x))
			= f(f^n(x))
			= f^(n + 1)(x)
*/

