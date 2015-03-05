function ArgManipulation () {
		
		var sum = 0;
	

		function sumArguments() {
			var s = 0;
			var i = 0;
			for (i = 0; i < arguments.length; i++) {
				s += arguments[i];   
			}
			return s;
		}
		this.result = function() {
			var value = sum;
			sum = 0;
			return value;
		}
		this.add = function() {
			var copyArg= Array.prototype.slice.call(arguments);
			sum += sumArguments.apply({}, copyArg);
			return this;
		}
		this.sup = function() {
			var copyArg= Array.prototype.slice.call(arguments);
			sum -= sumArguments.apply({}, copyArg);
			return this;
		}
		return this;
	}
	var o = new ArgManipulation();
	
	console.log(o.add(3, 23).sup(3, 2).result());