'use strict';

var varstr = module.exports = function (sep, objDef) {
  return {
    objectify: function (str) {
      str = str || '';
      var values = str.split(sep);
      return objDef.reduce(function (obj, field) {
        obj[field.name] = field.parse(values.shift() || '');
        return obj;
      }, {});
    },
    stringify: function (obj) {
      return objDef.reduce(function (str, field) {
        return str + field.toVarString(sep, obj[field.name]);
      }, '');
    }
  };
};

varstr.str = function (name, size) {
  return {
    name: name,
    parse: String,
    toVarString: function(sep, value) {
      value = value || '';
      return value + sep;
    }
  };
};

varstr.number = function (name, size) {
  return {
    name: name,
    parse: Number,
    toVarString: function (sep, value) {
      return value && value.toString ? value.toString() : '0';
    }
  };
};
