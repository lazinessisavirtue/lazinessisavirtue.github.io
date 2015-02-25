(function () {
	
	this("sum-of-squares-of-2-larger", ["a", "b", "c"], function () {
		this("sum-of-squares", ["a", "b"], function () {
			return this("a") * this("a") + this("b") * this("b");
		});
		
		if (this("a") > this("b")) {
			if (this("b") > this("c")) {
				return this("sum-of-squares")(this("a"), this("b"));
			} else  {
				return this("sum-of-squares")(this("a"), this("c"));
			}
		} else {
			if (this("a") > this("c")) {
				return this("sum-of-squares")(this("a"), this("b"));
			} else  {
				return this("sum-of-squares")(this("b"), this("c"));
			}
		}
	});
	
	return this("1.3", this("sum-of-squares-of-2-larger"));
	
}).apply(sicp.js)(4, 3, 5);