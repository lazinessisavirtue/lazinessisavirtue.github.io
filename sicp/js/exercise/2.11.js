(function (sicp) {
	
	sicp.interval = function (lower, upper) {
		return [lower, upper];
	};
	sicp.interval.lower = function (interval) {
		return interval[0];
	};
	sicp.interval.upper = function (interval) {
		return interval[1];
	};
	
	sicp.interval.add = function (i1, i2) {
		return sicp.interval(
				sicp.interval.lower(i1) + sicp.interval.lower(i2),
				sicp.interval.upper(i1) + sicp.interval.upper(i2));
	}

	sicp.interval.mul = function (i1, i2) {
		if (sicp.interval.lower(i1) >= 0) {
			if (sicp.interval.lower(i2) >= 0) {
				return sicp.interval(
						sicp.interval.lower(i1) * sicp.interval.lower(i2),
						sicp.interval.upper(i1) * sicp.interval.upper(i2));
			} else if (sicp.interval.upper(i2) <= 0) {
				return sicp.interval(
						sicp.interval.upper(i1) * sicp.interval.lower(i2),
						sicp.interval.lower(i1) * sicp.interval.upper(i2));
			} else {
				return sicp.interval(
						sicp.interval.upper(i1) * sicp.interval.lower(i2),
						sicp.interval.upper(i1) * sicp.interval.upper(i2));
			}
		} else if (sicp.interval.upper(i1) <= 0) {
			if (sicp.interval.lower(i2) >= 0) {
				return sicp.interval(
						sicp.interval.lower(i1) * sicp.interval.upper(i2),
						sicp.interval.upper(i1) * sicp.interval.lower(i2));
			} else if (sicp.interval.upper(i2) <= 0) {
				return sicp.interval(
						sicp.interval.upper(i1) * sicp.interval.upper(i2),
						sicp.interval.lower(i1) * sicp.interval.lower(i2));
			} else {
				return sicp.interval(
						sicp.interval.lower(i1) * sicp.interval.upper(i2),
						sicp.interval.lower(i1) * sicp.interval.lower(i2));
			}
		} else {
			if (sicp.interval.lower(i2) >= 0) {
				return sicp.interval(
						sicp.interval.lower(i1) * sicp.interval.upper(i2),
						sicp.interval.upper(i1) * sicp.interval.upper(i2));
			} else if (sicp.interval.upper(i2) <= 0) {
				return sicp.interval(
						sicp.interval.upper(i1) * sicp.interval.lower(i2),
						sicp.interval.lower(i1) * sicp.interval.lower(i2));
			} else {
				return sicp.interval(
					Math.min(
						sicp.interval.upper(i1) * sicp.interval.lower(i2),
						sicp.interval.lower(i1) * sicp.interval.upper(i2)),
					Math.max(
						sicp.interval.upper(i1) * sicp.interval.upper(i2),
						sicp.interval.lower(i1) * sicp.interval.lower(i2)));
			}
		}
	}
	

	return sicp.interval.mul(sicp.interval(-2, 3), sicp.interval(-4, 5));
	
})(sicp.$);