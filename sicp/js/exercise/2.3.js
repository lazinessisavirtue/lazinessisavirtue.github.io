(function (sicp) {
	
	(function () {
		var point = sicp.point = function (x, y) {
			return [x, y];
		};
		point.x = function (p) {
			return p[0];
		};
		point.y = function (p) {
			return p[1];
		};
		return point;
	})();
	
	(function () {
		var point = sicp.pointByScoping = function (x, y) {
			return function (i) {
				return (i === 0) ? x : y; 
			};
		};
		point.x = function (p) {
			return p(0);
		};
		point.y = function (p) {
			return p(1);
		};
		return point;
	})();
	
	(function (point) {
		var rect = sicp.rect1 = function (p1, p2) {
			return [p1, p2];
		};
		rect.width = function (r) {
			return Math.abs(point.x(r[0]) - point.x(r[1]));
		};
		rect.height = function (r) {
			return Math.abs(point.y(r[0]) - point.y(r[1]));
		};
		return rect;
	})(sicp.point);
	
	(function (point) {
		var rect = sicp.rect2 = function (p1, p2) {
			return [p1, point(point.x(p2) - point.x(p1), point.y(p2) - point.y(p1))];
		};
		rect.width = function (r) {
			return Math.abs(point.x(r[1]));
		};
		rect.height = function (r) {
			return Math.abs(point.y(r[1]));
		};
		return rect;
	})(sicp.point);
	
	
	(function (rect) {
		rect.perimeter  = function (r) {
			return (rect.width(r) + rect.height(r)) * 2;
		};
		rect.area = function (r) {
			return rect.width(r) * rect.height(r);
		};
		return arguments.callee;
	})(sicp.rect1)(sicp.rect2);
	
	return (function (p1, p2) {
		var output = [];
		var r1 = sicp.rect1(p1, p2);
		output.push([r1, sicp.rect1.perimeter(r1), sicp.rect1.area(r1)]);
		var r2 = sicp.rect2(p1, p2);
		output.push([r2, sicp.rect2.perimeter(r2), sicp.rect2.area(r2)]);
		return output;
	})(sicp.point(2, 3), sicp.point(5, 8));
	
})(sicp.$);