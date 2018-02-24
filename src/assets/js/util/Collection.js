class Collection extends Map {
	find(propOrFn, value) {
		if (typeof propOrFn === "string") {
			if (typeof value === "undefined") throw new Error("Value must be specified.");
			for (const item of this.values()) {
				if (item[propOrFn] === value) return item;
			}
			return undefined;
		} else if (typeof propOrFn === "function") {
			for (const [key, val] of this) {
				if (propOrFn(val, key, this)) return val;
			}
			return undefined;
		} else {
			throw new Error("First argument must be a property string or a function.");
		}
	}
}

module.exports = Collection;
