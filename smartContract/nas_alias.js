"use strict";

var AliasItem = function(text) {
	if (text) {
		var obj = JSON.parse(text);
		this.alias = obj.alias;
		this.address = obj.address;
		this.author = obj.author;
		this.created = obj.created;
	} else {
		this.alias = "";
		this.address = "";
		this.author = "";
		this.created = this.now();
	}
};

AliasItem.prototype = {
	toString: function () {
		return JSON.stringify(this);
	},
	now: function () {
		return Date.parse(new Date());
	}
};

var AliasMap = function () {
	LocalContractStorage.defineMapProperty(this, "aliasMap", {
		parse: function(text) {
			return new AliasItem(text);
		},
		stringify: function(obj) {
			return obj.toString();
		}
	});
	LocalContractStorage.defineMapProperty(this, "addressMap", {
		parse: function(text) {
			return new AliasItem(text);
		},
		stringify: function(obj) {
			return obj.toString();
		}
	});
};

AliasMap.prototype = {
	init: function() {},
	save: function(alias, address) {
		alias = alias.trim();
		address = address.trim();
		// motto = motto.trim();
		if (alias === "" || address === ""){
        throw new Error("empty alias / address!");
    }
    if (alias.length > 64 || address.length > 64){
        throw new Error("alias / address  exceed limit length!");
    }
    var author = Blockchain.transaction.from;
    var aliasItem = this.aliasMap.get(alias);
    if (aliasItem) {
    	throw new Error("alias has been occupied!");
    }
    aliasItem = new AliasItem();
    aliasItem.alias = alias;
    aliasItem.address = address;
    aliasItem.author = author;

    this.aliasMap.put(alias, aliasItem);
    this.addressMap.put(address, aliasItem);
	},
	get: function(mapName, value) {
		mapName = mapName.trim();
		value = value.trim();
		if (mapName === "" || value === "") {
			throw new Error("empty mapName / value!");
		}
		return this[mapName].get(value);
	}
};
module.exports = AliasMap;
