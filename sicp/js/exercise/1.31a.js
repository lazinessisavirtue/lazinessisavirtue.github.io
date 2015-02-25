(function () {

	this("product-recursive", ["term", "a", "next", "b"], function () {
		if (this("a") > this("b")) {
			return 1;
		} else {
			return this("term")(this("a")) *
				this("product-recursive")(this("term"), this("next")(this("a")), this("next"), this("b"));
		}
	});
	
	this("factorial-recursive", ["n"], function () {
		this("identity", ["x"], function () { return this("x"); });
		this("inc", ["x"], function () { return this("x") + 1; });
		return this("product-recursive")(this("identity"), 1, this("inc"), this("n"));
	});
	
	return this("1.31a", ["n"], function () {
		this("pi/4-term", ["a"], function () {
			return (this("a") - 1) / this("a") * (this("a") + 1) / this("a");
		});
		this("pi/4-next", ["a"], function () {
			return this("a") + 2;
		});
		
		return this("product-recursive")(this("pi/4-term"), 3, this("pi/4-next"), this("n"));
	});

}).apply(sicp.js)(100);

