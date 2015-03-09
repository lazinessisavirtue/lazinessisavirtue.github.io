(function (church) {
	
	church.zero = function (f) {
		return function (x) {
			return x;
		};
	};
	
	church.add1 = function (n) {
		return function (f) {
			return function (x) {
				return f(n(f)(x));
			};
		};
	};

	church.getN = function (n) {
		return (n === 0) ? church.zero : church.add1(church.getN(n - 1));
	};
	
	return [
			church.getN(10)(function (x) { return x * 2; })(3),
			church.getN(100)(function (x) { return 1 + 1 / x; })(4)
	];
	
})(sicp.$.church = Object.create(null));

/*
	Proof by Induction: getN(n)(f)(x) = f^n(x)
	
	Base case: getN(0)(f)(x) = zero(f)(x) = x = id(x) = f^0(x)
	
	Inductive Step:
		Assume: getN(n)(f)(x) = f^n(x)
		Then: getN(n + 1)(f)(x)
			= add1(getN(n))(f)(x)
			= f(getN(n)(f)(x))
			= f(f^n(x))
			= f^(n + 1)(x)
*/

