(function (sicp) {
	
	sicp.consByArray = function () {
		var cons = function (a, b) {
			return [a, b];
		};
		cons.car = function (c) {
			return c[0];
		};
		cons.cdr = function (c) {
			return c[1];
		};
		return cons;
	};
	
	sicp.consByDispatch = function () {
		var cons = function (a, b) {
			return function (i) {
				if (i === 0) {
					return a;
				} else if (i === 1) {
					return b;
				} else {
					throw new Error("i must be 0 or 1");
				}
			};
		};
		cons.car = function (c) {
			return c(0);
		};
		cons.cdr = function (c) {
			return c(1);
		};
		return cons;
	};

	sicp.consBySelector = function () {
		var cons = function (a, b) {
			return function (selector) {
				return selector(a, b); 
			};
		};
		cons.car = function (c) {
			return c(function (a, b) {
				return a;
			});
		};
		cons.cdr = function (c) {
			return c(function (a, b) {
				return b;
			});
		};
		return cons;
	};

	sicp.point = function (cons) {
		var point = function (x, y) {
			return cons(x, y);
		};
		point.x = function (p) {
			return cons.car(p);
		};
		point.y = function (p) {
			return cons.cdr(p);
		};
		return point;
	};
	
	sicp.rectBy2Points = function (cons, point) {
		var rect = function (p1, p2) {
			return cons(p1, p2);
		};
		rect.width = function (r) {
			return Math.abs(point.x(cons.car(r)) - point.x(cons.cdr(r)));
		};
		rect.height = function (r) {
			return Math.abs(point.y(cons.car(r)) - point.y(cons.cdr(r)));
		};
		return rect;
	};
	
	sicp.rectByOriginAndVector = function (cons, point) {
		var rect = function (p1, p2) {
			return cons(p1,
					cons(point.x(p2) - point.x(p1), point.y(p2) - point.y(p1)));
		};
		rect.width = function (r) {
			return Math.abs(cons.car(cons.cdr(r)));
		};
		rect.height = function (r) {
			return Math.abs(cons.cdr(cons.cdr(r)));
		};
		return rect;
	};
	
	sicp.enhanceRect = function (rect) {
		rect.perimeter = function (r) {
			return (rect.width(r) + rect.height(r)) * 2;
		};
		rect.area = function (r) {
			return rect.width(r) * rect.height(r);
		};
	};
	
	return (function (consBuilder, pointBuilder, rectBuilder) {
		var cons = consBuilder();
		var point = pointBuilder(cons);
		var rect = rectBuilder(cons, point);
		sicp.enhanceRect(rect);
		
		var test =  function (p1x, p1y, p2x, p2y) {
			var p1 = point(p1x, p1y);
			var p2 = point(p2x, p2y);
			var r = rect(p1, p2);
			var p = rect.perimeter(r);
			var a = rect.area(r);
			return [[point.x(p1), point.y(p1)], [point.x(p2), point.y(p2)],
				[rect.width(r), rect.height(r)], p, a]
		}
		
		return function () {
			var output = "";
			for (var i = 0; i < arguments.length; i++) {
				var result = test.apply(this, arguments[i]);
				console.log(result);
				output += result.toString() + "\n";
			}
			return output;
		}
	})(sicp.consBySelector, sicp.point, sicp.rectByOriginAndVector)(
			[1, 2, 3, 4], [2, 7, 5, 3]);
	
})(sicp.$);