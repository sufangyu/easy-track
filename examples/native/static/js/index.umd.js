(function(global2, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, factory(global2.EasyTrackCore = {}));
})(this, function(exports2) {
  "use strict";var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

  var _a2, _b;
  var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
  var freeSelf = typeof self == "object" && self && self.Object === Object && self;
  var root$2 = freeGlobal || freeSelf || Function("return this")();
  var Symbol$1 = root$2.Symbol;
  var objectProto$f = Object.prototype;
  var hasOwnProperty$c = objectProto$f.hasOwnProperty;
  var nativeObjectToString$1 = objectProto$f.toString;
  var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : void 0;
  function getRawTag(value) {
    var isOwn = hasOwnProperty$c.call(value, symToStringTag$1), tag = value[symToStringTag$1];
    try {
      value[symToStringTag$1] = void 0;
      var unmasked = true;
    } catch (e2) {
    }
    var result2 = nativeObjectToString$1.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag$1] = tag;
      } else {
        delete value[symToStringTag$1];
      }
    }
    return result2;
  }
  var objectProto$e = Object.prototype;
  var nativeObjectToString = objectProto$e.toString;
  function objectToString(value) {
    return nativeObjectToString.call(value);
  }
  var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
  var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : void 0;
  function baseGetTag(value) {
    if (value == null) {
      return value === void 0 ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
  }
  function isObjectLike(value) {
    return value != null && typeof value == "object";
  }
  var symbolTag$3 = "[object Symbol]";
  function isSymbol(value) {
    return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag$3;
  }
  function arrayMap(array, iteratee) {
    var index2 = -1, length = array == null ? 0 : array.length, result2 = Array(length);
    while (++index2 < length) {
      result2[index2] = iteratee(array[index2], index2, array);
    }
    return result2;
  }
  var isArray = Array.isArray;
  var INFINITY$3 = 1 / 0;
  var symbolProto$2 = Symbol$1 ? Symbol$1.prototype : void 0, symbolToString = symbolProto$2 ? symbolProto$2.toString : void 0;
  function baseToString(value) {
    if (typeof value == "string") {
      return value;
    }
    if (isArray(value)) {
      return arrayMap(value, baseToString) + "";
    }
    if (isSymbol(value)) {
      return symbolToString ? symbolToString.call(value) : "";
    }
    var result2 = value + "";
    return result2 == "0" && 1 / value == -INFINITY$3 ? "-0" : result2;
  }
  var reWhitespace = /\s/;
  function trimmedEndIndex(string) {
    var index2 = string.length;
    while (index2-- && reWhitespace.test(string.charAt(index2))) {
    }
    return index2;
  }
  var reTrimStart = /^\s+/;
  function baseTrim(string) {
    return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
  }
  function isObject(value) {
    var type = typeof value;
    return value != null && (type == "object" || type == "function");
  }
  var NAN = 0 / 0;
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
  var reIsBinary = /^0b[01]+$/i;
  var reIsOctal = /^0o[0-7]+$/i;
  var freeParseInt = parseInt;
  function toNumber(value) {
    if (typeof value == "number") {
      return value;
    }
    if (isSymbol(value)) {
      return NAN;
    }
    if (isObject(value)) {
      var other = typeof value.valueOf == "function" ? value.valueOf() : value;
      value = isObject(other) ? other + "" : other;
    }
    if (typeof value != "string") {
      return value === 0 ? value : +value;
    }
    value = baseTrim(value);
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
  }
  var INFINITY$2 = 1 / 0, MAX_INTEGER = 17976931348623157e292;
  function toFinite(value) {
    if (!value) {
      return value === 0 ? value : 0;
    }
    value = toNumber(value);
    if (value === INFINITY$2 || value === -INFINITY$2) {
      var sign = value < 0 ? -1 : 1;
      return sign * MAX_INTEGER;
    }
    return value === value ? value : 0;
  }
  function toInteger(value) {
    var result2 = toFinite(value), remainder = result2 % 1;
    return result2 === result2 ? remainder ? result2 - remainder : result2 : 0;
  }
  function identity(value) {
    return value;
  }
  var asyncTag = "[object AsyncFunction]", funcTag$2 = "[object Function]", genTag$1 = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
  function isFunction(value) {
    if (!isObject(value)) {
      return false;
    }
    var tag = baseGetTag(value);
    return tag == funcTag$2 || tag == genTag$1 || tag == asyncTag || tag == proxyTag;
  }
  var coreJsData = root$2["__core-js_shared__"];
  var maskSrcKey = function() {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
    return uid ? "Symbol(src)_1." + uid : "";
  }();
  function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }
  var funcProto$2 = Function.prototype;
  var funcToString$2 = funcProto$2.toString;
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString$2.call(func);
      } catch (e2) {
      }
      try {
        return func + "";
      } catch (e2) {
      }
    }
    return "";
  }
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  var funcProto$1 = Function.prototype, objectProto$d = Object.prototype;
  var funcToString$1 = funcProto$1.toString;
  var hasOwnProperty$b = objectProto$d.hasOwnProperty;
  var reIsNative = RegExp(
    "^" + funcToString$1.call(hasOwnProperty$b).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function baseIsNative(value) {
    if (!isObject(value) || isMasked(value)) {
      return false;
    }
    var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
  }
  function getValue(object, key) {
    return object == null ? void 0 : object[key];
  }
  function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : void 0;
  }
  var WeakMap$1 = getNative(root$2, "WeakMap");
  var objectCreate = Object.create;
  var baseCreate = /* @__PURE__ */ function() {
    function object() {
    }
    return function(proto) {
      if (!isObject(proto)) {
        return {};
      }
      if (objectCreate) {
        return objectCreate(proto);
      }
      object.prototype = proto;
      var result2 = new object();
      object.prototype = void 0;
      return result2;
    };
  }();
  function apply(func, thisArg, args) {
    switch (args.length) {
      case 0:
        return func.call(thisArg);
      case 1:
        return func.call(thisArg, args[0]);
      case 2:
        return func.call(thisArg, args[0], args[1]);
      case 3:
        return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }
  function noop() {
  }
  function copyArray(source, array) {
    var index2 = -1, length = source.length;
    array || (array = Array(length));
    while (++index2 < length) {
      array[index2] = source[index2];
    }
    return array;
  }
  var HOT_COUNT = 800, HOT_SPAN = 16;
  var nativeNow = Date.now;
  function shortOut(func) {
    var count = 0, lastCalled = 0;
    return function() {
      var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
      lastCalled = stamp;
      if (remaining > 0) {
        if (++count >= HOT_COUNT) {
          return arguments[0];
        }
      } else {
        count = 0;
      }
      return func.apply(void 0, arguments);
    };
  }
  function constant(value) {
    return function() {
      return value;
    };
  }
  var defineProperty = function() {
    try {
      var func = getNative(Object, "defineProperty");
      func({}, "", {});
      return func;
    } catch (e2) {
    }
  }();
  var baseSetToString = !defineProperty ? identity : function(func, string) {
    return defineProperty(func, "toString", {
      "configurable": true,
      "enumerable": false,
      "value": constant(string),
      "writable": true
    });
  };
  var setToString = shortOut(baseSetToString);
  function arrayEach(array, iteratee) {
    var index2 = -1, length = array == null ? 0 : array.length;
    while (++index2 < length) {
      if (iteratee(array[index2], index2, array) === false) {
        break;
      }
    }
    return array;
  }
  function baseFindIndex(array, predicate, fromIndex, fromRight) {
    var length = array.length, index2 = fromIndex + -1;
    while (++index2 < length) {
      if (predicate(array[index2], index2, array)) {
        return index2;
      }
    }
    return -1;
  }
  function baseIsNaN(value) {
    return value !== value;
  }
  function strictIndexOf(array, value, fromIndex) {
    var index2 = fromIndex - 1, length = array.length;
    while (++index2 < length) {
      if (array[index2] === value) {
        return index2;
      }
    }
    return -1;
  }
  function baseIndexOf(array, value, fromIndex) {
    return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
  }
  function arrayIncludes(array, value) {
    var length = array == null ? 0 : array.length;
    return !!length && baseIndexOf(array, value, 0) > -1;
  }
  var MAX_SAFE_INTEGER$1 = 9007199254740991;
  var reIsUint = /^(?:0|[1-9]\d*)$/;
  function isIndex(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER$1 : length;
    return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
  }
  function baseAssignValue(object, key, value) {
    if (key == "__proto__" && defineProperty) {
      defineProperty(object, key, {
        "configurable": true,
        "enumerable": true,
        "value": value,
        "writable": true
      });
    } else {
      object[key] = value;
    }
  }
  function eq(value, other) {
    return value === other || value !== value && other !== other;
  }
  var objectProto$c = Object.prototype;
  var hasOwnProperty$a = objectProto$c.hasOwnProperty;
  function assignValue(object, key, value) {
    var objValue = object[key];
    if (!(hasOwnProperty$a.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
      baseAssignValue(object, key, value);
    }
  }
  function copyObject(source, props, object, customizer) {
    var isNew = !object;
    object || (object = {});
    var index2 = -1, length = props.length;
    while (++index2 < length) {
      var key = props[index2];
      var newValue = void 0;
      if (newValue === void 0) {
        newValue = source[key];
      }
      if (isNew) {
        baseAssignValue(object, key, newValue);
      } else {
        assignValue(object, key, newValue);
      }
    }
    return object;
  }
  var nativeMax$1 = Math.max;
  function overRest(func, start, transform) {
    start = nativeMax$1(start === void 0 ? func.length - 1 : start, 0);
    return function() {
      var args = arguments, index2 = -1, length = nativeMax$1(args.length - start, 0), array = Array(length);
      while (++index2 < length) {
        array[index2] = args[start + index2];
      }
      index2 = -1;
      var otherArgs = Array(start + 1);
      while (++index2 < start) {
        otherArgs[index2] = args[index2];
      }
      otherArgs[start] = transform(array);
      return apply(func, this, otherArgs);
    };
  }
  function baseRest(func, start) {
    return setToString(overRest(func, start, identity), func + "");
  }
  var MAX_SAFE_INTEGER = 9007199254740991;
  function isLength(value) {
    return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }
  function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
  }
  function isIterateeCall(value, index2, object) {
    if (!isObject(object)) {
      return false;
    }
    var type = typeof index2;
    if (type == "number" ? isArrayLike(object) && isIndex(index2, object.length) : type == "string" && index2 in object) {
      return eq(object[index2], value);
    }
    return false;
  }
  function createAssigner(assigner) {
    return baseRest(function(object, sources2) {
      var index2 = -1, length = sources2.length, customizer = length > 1 ? sources2[length - 1] : void 0, guard = length > 2 ? sources2[2] : void 0;
      customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
      if (guard && isIterateeCall(sources2[0], sources2[1], guard)) {
        customizer = length < 3 ? void 0 : customizer;
        length = 1;
      }
      object = Object(object);
      while (++index2 < length) {
        var source = sources2[index2];
        if (source) {
          assigner(object, source, index2, customizer);
        }
      }
      return object;
    });
  }
  var objectProto$b = Object.prototype;
  function isPrototype(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$b;
    return value === proto;
  }
  function baseTimes(n2, iteratee) {
    var index2 = -1, result2 = Array(n2);
    while (++index2 < n2) {
      result2[index2] = iteratee(index2);
    }
    return result2;
  }
  var argsTag$3 = "[object Arguments]";
  function baseIsArguments(value) {
    return isObjectLike(value) && baseGetTag(value) == argsTag$3;
  }
  var objectProto$a = Object.prototype;
  var hasOwnProperty$9 = objectProto$a.hasOwnProperty;
  var propertyIsEnumerable$1 = objectProto$a.propertyIsEnumerable;
  var isArguments = baseIsArguments(/* @__PURE__ */ function() {
    return arguments;
  }()) ? baseIsArguments : function(value) {
    return isObjectLike(value) && hasOwnProperty$9.call(value, "callee") && !propertyIsEnumerable$1.call(value, "callee");
  };
  function stubFalse() {
    return false;
  }
  var freeExports$2 = typeof exports2 == "object" && exports2 && !exports2.nodeType && exports2;
  var freeModule$2 = freeExports$2 && typeof module == "object" && module && !module.nodeType && module;
  var moduleExports$2 = freeModule$2 && freeModule$2.exports === freeExports$2;
  var Buffer$2 = moduleExports$2 ? root$2.Buffer : void 0;
  var nativeIsBuffer = Buffer$2 ? Buffer$2.isBuffer : void 0;
  var isBuffer = nativeIsBuffer || stubFalse;
  var argsTag$2 = "[object Arguments]", arrayTag$2 = "[object Array]", boolTag$3 = "[object Boolean]", dateTag$3 = "[object Date]", errorTag$2 = "[object Error]", funcTag$1 = "[object Function]", mapTag$5 = "[object Map]", numberTag$3 = "[object Number]", objectTag$4 = "[object Object]", regexpTag$3 = "[object RegExp]", setTag$5 = "[object Set]", stringTag$4 = "[object String]", weakMapTag$2 = "[object WeakMap]";
  var arrayBufferTag$3 = "[object ArrayBuffer]", dataViewTag$4 = "[object DataView]", float32Tag$2 = "[object Float32Array]", float64Tag$2 = "[object Float64Array]", int8Tag$2 = "[object Int8Array]", int16Tag$2 = "[object Int16Array]", int32Tag$2 = "[object Int32Array]", uint8Tag$2 = "[object Uint8Array]", uint8ClampedTag$2 = "[object Uint8ClampedArray]", uint16Tag$2 = "[object Uint16Array]", uint32Tag$2 = "[object Uint32Array]";
  var typedArrayTags = {};
  typedArrayTags[float32Tag$2] = typedArrayTags[float64Tag$2] = typedArrayTags[int8Tag$2] = typedArrayTags[int16Tag$2] = typedArrayTags[int32Tag$2] = typedArrayTags[uint8Tag$2] = typedArrayTags[uint8ClampedTag$2] = typedArrayTags[uint16Tag$2] = typedArrayTags[uint32Tag$2] = true;
  typedArrayTags[argsTag$2] = typedArrayTags[arrayTag$2] = typedArrayTags[arrayBufferTag$3] = typedArrayTags[boolTag$3] = typedArrayTags[dataViewTag$4] = typedArrayTags[dateTag$3] = typedArrayTags[errorTag$2] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag$5] = typedArrayTags[numberTag$3] = typedArrayTags[objectTag$4] = typedArrayTags[regexpTag$3] = typedArrayTags[setTag$5] = typedArrayTags[stringTag$4] = typedArrayTags[weakMapTag$2] = false;
  function baseIsTypedArray(value) {
    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
  }
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }
  var freeExports$1 = typeof exports2 == "object" && exports2 && !exports2.nodeType && exports2;
  var freeModule$1 = freeExports$1 && typeof module == "object" && module && !module.nodeType && module;
  var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;
  var freeProcess = moduleExports$1 && freeGlobal.process;
  var nodeUtil = function() {
    try {
      var types = freeModule$1 && freeModule$1.require && freeModule$1.require("util").types;
      if (types) {
        return types;
      }
      return freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e2) {
    }
  }();
  var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
  var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
  var objectProto$9 = Object.prototype;
  var hasOwnProperty$8 = objectProto$9.hasOwnProperty;
  function arrayLikeKeys(value, inherited) {
    var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType2 = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType2, result2 = skipIndexes ? baseTimes(value.length, String) : [], length = result2.length;
    for (var key in value) {
      if ((inherited || hasOwnProperty$8.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
      (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      isType2 && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
      isIndex(key, length)))) {
        result2.push(key);
      }
    }
    return result2;
  }
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }
  var nativeKeys = overArg(Object.keys, Object);
  var objectProto$8 = Object.prototype;
  var hasOwnProperty$7 = objectProto$8.hasOwnProperty;
  function baseKeys(object) {
    if (!isPrototype(object)) {
      return nativeKeys(object);
    }
    var result2 = [];
    for (var key in Object(object)) {
      if (hasOwnProperty$7.call(object, key) && key != "constructor") {
        result2.push(key);
      }
    }
    return result2;
  }
  function keys(object) {
    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
  }
  function nativeKeysIn(object) {
    var result2 = [];
    if (object != null) {
      for (var key in Object(object)) {
        result2.push(key);
      }
    }
    return result2;
  }
  var objectProto$7 = Object.prototype;
  var hasOwnProperty$6 = objectProto$7.hasOwnProperty;
  function baseKeysIn(object) {
    if (!isObject(object)) {
      return nativeKeysIn(object);
    }
    var isProto = isPrototype(object), result2 = [];
    for (var key in object) {
      if (!(key == "constructor" && (isProto || !hasOwnProperty$6.call(object, key)))) {
        result2.push(key);
      }
    }
    return result2;
  }
  function keysIn(object) {
    return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
  }
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
  function isKey(value, object) {
    if (isArray(value)) {
      return false;
    }
    var type = typeof value;
    if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
      return true;
    }
    return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
  }
  var nativeCreate = getNative(Object, "create");
  function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
    this.size = 0;
  }
  function hashDelete(key) {
    var result2 = this.has(key) && delete this.__data__[key];
    this.size -= result2 ? 1 : 0;
    return result2;
  }
  var HASH_UNDEFINED$2 = "__lodash_hash_undefined__";
  var objectProto$6 = Object.prototype;
  var hasOwnProperty$5 = objectProto$6.hasOwnProperty;
  function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate) {
      var result2 = data[key];
      return result2 === HASH_UNDEFINED$2 ? void 0 : result2;
    }
    return hasOwnProperty$5.call(data, key) ? data[key] : void 0;
  }
  var objectProto$5 = Object.prototype;
  var hasOwnProperty$4 = objectProto$5.hasOwnProperty;
  function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? data[key] !== void 0 : hasOwnProperty$4.call(data, key);
  }
  var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
  function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED$1 : value;
    return this;
  }
  function Hash(entries2) {
    var index2 = -1, length = entries2 == null ? 0 : entries2.length;
    this.clear();
    while (++index2 < length) {
      var entry = entries2[index2];
      this.set(entry[0], entry[1]);
    }
  }
  Hash.prototype.clear = hashClear;
  Hash.prototype["delete"] = hashDelete;
  Hash.prototype.get = hashGet;
  Hash.prototype.has = hashHas;
  Hash.prototype.set = hashSet;
  function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
  }
  function assocIndexOf(array, key) {
    var length = array.length;
    while (length--) {
      if (eq(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }
  var arrayProto = Array.prototype;
  var splice = arrayProto.splice;
  function listCacheDelete(key) {
    var data = this.__data__, index2 = assocIndexOf(data, key);
    if (index2 < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index2 == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index2, 1);
    }
    --this.size;
    return true;
  }
  function listCacheGet(key) {
    var data = this.__data__, index2 = assocIndexOf(data, key);
    return index2 < 0 ? void 0 : data[index2][1];
  }
  function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
  }
  function listCacheSet(key, value) {
    var data = this.__data__, index2 = assocIndexOf(data, key);
    if (index2 < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index2][1] = value;
    }
    return this;
  }
  function ListCache(entries2) {
    var index2 = -1, length = entries2 == null ? 0 : entries2.length;
    this.clear();
    while (++index2 < length) {
      var entry = entries2[index2];
      this.set(entry[0], entry[1]);
    }
  }
  ListCache.prototype.clear = listCacheClear;
  ListCache.prototype["delete"] = listCacheDelete;
  ListCache.prototype.get = listCacheGet;
  ListCache.prototype.has = listCacheHas;
  ListCache.prototype.set = listCacheSet;
  var Map$1 = getNative(root$2, "Map");
  function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
      "hash": new Hash(),
      "map": new (Map$1 || ListCache)(),
      "string": new Hash()
    };
  }
  function isKeyable(value) {
    var type = typeof value;
    return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
  }
  function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
  }
  function mapCacheDelete(key) {
    var result2 = getMapData(this, key)["delete"](key);
    this.size -= result2 ? 1 : 0;
    return result2;
  }
  function mapCacheGet(key) {
    return getMapData(this, key).get(key);
  }
  function mapCacheHas(key) {
    return getMapData(this, key).has(key);
  }
  function mapCacheSet(key, value) {
    var data = getMapData(this, key), size = data.size;
    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
  }
  function MapCache(entries2) {
    var index2 = -1, length = entries2 == null ? 0 : entries2.length;
    this.clear();
    while (++index2 < length) {
      var entry = entries2[index2];
      this.set(entry[0], entry[1]);
    }
  }
  MapCache.prototype.clear = mapCacheClear;
  MapCache.prototype["delete"] = mapCacheDelete;
  MapCache.prototype.get = mapCacheGet;
  MapCache.prototype.has = mapCacheHas;
  MapCache.prototype.set = mapCacheSet;
  var FUNC_ERROR_TEXT$2 = "Expected a function";
  function memoize(func, resolver) {
    if (typeof func != "function" || resolver != null && typeof resolver != "function") {
      throw new TypeError(FUNC_ERROR_TEXT$2);
    }
    var memoized = function() {
      var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
      if (cache.has(key)) {
        return cache.get(key);
      }
      var result2 = func.apply(this, args);
      memoized.cache = cache.set(key, result2) || cache;
      return result2;
    };
    memoized.cache = new (memoize.Cache || MapCache)();
    return memoized;
  }
  memoize.Cache = MapCache;
  var MAX_MEMOIZE_SIZE = 500;
  function memoizeCapped(func) {
    var result2 = memoize(func, function(key) {
      if (cache.size === MAX_MEMOIZE_SIZE) {
        cache.clear();
      }
      return key;
    });
    var cache = result2.cache;
    return result2;
  }
  var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
  var reEscapeChar = /\\(\\)?/g;
  var stringToPath = memoizeCapped(function(string) {
    var result2 = [];
    if (string.charCodeAt(0) === 46) {
      result2.push("");
    }
    string.replace(rePropName, function(match, number, quote, subString) {
      result2.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
    });
    return result2;
  });
  function toString$2(value) {
    return value == null ? "" : baseToString(value);
  }
  function castPath(value, object) {
    if (isArray(value)) {
      return value;
    }
    return isKey(value, object) ? [value] : stringToPath(toString$2(value));
  }
  var INFINITY$1 = 1 / 0;
  function toKey(value) {
    if (typeof value == "string" || isSymbol(value)) {
      return value;
    }
    var result2 = value + "";
    return result2 == "0" && 1 / value == -INFINITY$1 ? "-0" : result2;
  }
  function baseGet(object, path) {
    path = castPath(path, object);
    var index2 = 0, length = path.length;
    while (object != null && index2 < length) {
      object = object[toKey(path[index2++])];
    }
    return index2 && index2 == length ? object : void 0;
  }
  function get(object, path, defaultValue) {
    var result2 = object == null ? void 0 : baseGet(object, path);
    return result2 === void 0 ? defaultValue : result2;
  }
  function arrayPush(array, values) {
    var index2 = -1, length = values.length, offset = array.length;
    while (++index2 < length) {
      array[offset + index2] = values[index2];
    }
    return array;
  }
  var getPrototype = overArg(Object.getPrototypeOf, Object);
  var objectTag$3 = "[object Object]";
  var funcProto = Function.prototype, objectProto$4 = Object.prototype;
  var funcToString = funcProto.toString;
  var hasOwnProperty$3 = objectProto$4.hasOwnProperty;
  var objectCtorString = funcToString.call(Object);
  function isPlainObject(value) {
    if (!isObjectLike(value) || baseGetTag(value) != objectTag$3) {
      return false;
    }
    var proto = getPrototype(value);
    if (proto === null) {
      return true;
    }
    var Ctor = hasOwnProperty$3.call(proto, "constructor") && proto.constructor;
    return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
  }
  function baseSlice(array, start, end) {
    var index2 = -1, length = array.length;
    if (start < 0) {
      start = -start > length ? 0 : length + start;
    }
    end = end > length ? length : end;
    if (end < 0) {
      end += length;
    }
    length = start > end ? 0 : end - start >>> 0;
    start >>>= 0;
    var result2 = Array(length);
    while (++index2 < length) {
      result2[index2] = array[index2 + start];
    }
    return result2;
  }
  function stackClear() {
    this.__data__ = new ListCache();
    this.size = 0;
  }
  function stackDelete(key) {
    var data = this.__data__, result2 = data["delete"](key);
    this.size = data.size;
    return result2;
  }
  function stackGet(key) {
    return this.__data__.get(key);
  }
  function stackHas(key) {
    return this.__data__.has(key);
  }
  var LARGE_ARRAY_SIZE$1 = 200;
  function stackSet(key, value) {
    var data = this.__data__;
    if (data instanceof ListCache) {
      var pairs = data.__data__;
      if (!Map$1 || pairs.length < LARGE_ARRAY_SIZE$1 - 1) {
        pairs.push([key, value]);
        this.size = ++data.size;
        return this;
      }
      data = this.__data__ = new MapCache(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
  }
  function Stack(entries2) {
    var data = this.__data__ = new ListCache(entries2);
    this.size = data.size;
  }
  Stack.prototype.clear = stackClear;
  Stack.prototype["delete"] = stackDelete;
  Stack.prototype.get = stackGet;
  Stack.prototype.has = stackHas;
  Stack.prototype.set = stackSet;
  function baseAssign(object, source) {
    return object && copyObject(source, keys(source), object);
  }
  function baseAssignIn(object, source) {
    return object && copyObject(source, keysIn(source), object);
  }
  var freeExports = typeof exports2 == "object" && exports2 && !exports2.nodeType && exports2;
  var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var Buffer$1 = moduleExports ? root$2.Buffer : void 0, allocUnsafe = Buffer$1 ? Buffer$1.allocUnsafe : void 0;
  function cloneBuffer(buffer, isDeep) {
    if (isDeep) {
      return buffer.slice();
    }
    var length = buffer.length, result2 = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
    buffer.copy(result2);
    return result2;
  }
  function arrayFilter(array, predicate) {
    var index2 = -1, length = array == null ? 0 : array.length, resIndex = 0, result2 = [];
    while (++index2 < length) {
      var value = array[index2];
      if (predicate(value, index2, array)) {
        result2[resIndex++] = value;
      }
    }
    return result2;
  }
  function stubArray() {
    return [];
  }
  var objectProto$3 = Object.prototype;
  var propertyIsEnumerable = objectProto$3.propertyIsEnumerable;
  var nativeGetSymbols$1 = Object.getOwnPropertySymbols;
  var getSymbols = !nativeGetSymbols$1 ? stubArray : function(object) {
    if (object == null) {
      return [];
    }
    object = Object(object);
    return arrayFilter(nativeGetSymbols$1(object), function(symbol) {
      return propertyIsEnumerable.call(object, symbol);
    });
  };
  function copySymbols(source, object) {
    return copyObject(source, getSymbols(source), object);
  }
  var nativeGetSymbols = Object.getOwnPropertySymbols;
  var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
    var result2 = [];
    while (object) {
      arrayPush(result2, getSymbols(object));
      object = getPrototype(object);
    }
    return result2;
  };
  function copySymbolsIn(source, object) {
    return copyObject(source, getSymbolsIn(source), object);
  }
  function baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result2 = keysFunc(object);
    return isArray(object) ? result2 : arrayPush(result2, symbolsFunc(object));
  }
  function getAllKeys(object) {
    return baseGetAllKeys(object, keys, getSymbols);
  }
  function getAllKeysIn(object) {
    return baseGetAllKeys(object, keysIn, getSymbolsIn);
  }
  var DataView$1 = getNative(root$2, "DataView");
  var Promise$1 = getNative(root$2, "Promise");
  var Set$1 = getNative(root$2, "Set");
  var mapTag$4 = "[object Map]", objectTag$2 = "[object Object]", promiseTag = "[object Promise]", setTag$4 = "[object Set]", weakMapTag$1 = "[object WeakMap]";
  var dataViewTag$3 = "[object DataView]";
  var dataViewCtorString = toSource(DataView$1), mapCtorString = toSource(Map$1), promiseCtorString = toSource(Promise$1), setCtorString = toSource(Set$1), weakMapCtorString = toSource(WeakMap$1);
  var getTag = baseGetTag;
  if (DataView$1 && getTag(new DataView$1(new ArrayBuffer(1))) != dataViewTag$3 || Map$1 && getTag(new Map$1()) != mapTag$4 || Promise$1 && getTag(Promise$1.resolve()) != promiseTag || Set$1 && getTag(new Set$1()) != setTag$4 || WeakMap$1 && getTag(new WeakMap$1()) != weakMapTag$1) {
    getTag = function(value) {
      var result2 = baseGetTag(value), Ctor = result2 == objectTag$2 ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
      if (ctorString) {
        switch (ctorString) {
          case dataViewCtorString:
            return dataViewTag$3;
          case mapCtorString:
            return mapTag$4;
          case promiseCtorString:
            return promiseTag;
          case setCtorString:
            return setTag$4;
          case weakMapCtorString:
            return weakMapTag$1;
        }
      }
      return result2;
    };
  }
  var objectProto$2 = Object.prototype;
  var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
  function initCloneArray(array) {
    var length = array.length, result2 = new array.constructor(length);
    if (length && typeof array[0] == "string" && hasOwnProperty$2.call(array, "index")) {
      result2.index = array.index;
      result2.input = array.input;
    }
    return result2;
  }
  var Uint8Array$1 = root$2.Uint8Array;
  function cloneArrayBuffer(arrayBuffer) {
    var result2 = new arrayBuffer.constructor(arrayBuffer.byteLength);
    new Uint8Array$1(result2).set(new Uint8Array$1(arrayBuffer));
    return result2;
  }
  function cloneDataView(dataView, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
    return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
  }
  var reFlags = /\w*$/;
  function cloneRegExp(regexp) {
    var result2 = new regexp.constructor(regexp.source, reFlags.exec(regexp));
    result2.lastIndex = regexp.lastIndex;
    return result2;
  }
  var symbolProto$1 = Symbol$1 ? Symbol$1.prototype : void 0, symbolValueOf$1 = symbolProto$1 ? symbolProto$1.valueOf : void 0;
  function cloneSymbol(symbol) {
    return symbolValueOf$1 ? Object(symbolValueOf$1.call(symbol)) : {};
  }
  function cloneTypedArray(typedArray, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
  }
  var boolTag$2 = "[object Boolean]", dateTag$2 = "[object Date]", mapTag$3 = "[object Map]", numberTag$2 = "[object Number]", regexpTag$2 = "[object RegExp]", setTag$3 = "[object Set]", stringTag$3 = "[object String]", symbolTag$2 = "[object Symbol]";
  var arrayBufferTag$2 = "[object ArrayBuffer]", dataViewTag$2 = "[object DataView]", float32Tag$1 = "[object Float32Array]", float64Tag$1 = "[object Float64Array]", int8Tag$1 = "[object Int8Array]", int16Tag$1 = "[object Int16Array]", int32Tag$1 = "[object Int32Array]", uint8Tag$1 = "[object Uint8Array]", uint8ClampedTag$1 = "[object Uint8ClampedArray]", uint16Tag$1 = "[object Uint16Array]", uint32Tag$1 = "[object Uint32Array]";
  function initCloneByTag(object, tag, isDeep) {
    var Ctor = object.constructor;
    switch (tag) {
      case arrayBufferTag$2:
        return cloneArrayBuffer(object);
      case boolTag$2:
      case dateTag$2:
        return new Ctor(+object);
      case dataViewTag$2:
        return cloneDataView(object, isDeep);
      case float32Tag$1:
      case float64Tag$1:
      case int8Tag$1:
      case int16Tag$1:
      case int32Tag$1:
      case uint8Tag$1:
      case uint8ClampedTag$1:
      case uint16Tag$1:
      case uint32Tag$1:
        return cloneTypedArray(object, isDeep);
      case mapTag$3:
        return new Ctor();
      case numberTag$2:
      case stringTag$3:
        return new Ctor(object);
      case regexpTag$2:
        return cloneRegExp(object);
      case setTag$3:
        return new Ctor();
      case symbolTag$2:
        return cloneSymbol(object);
    }
  }
  function initCloneObject(object) {
    return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
  }
  var mapTag$2 = "[object Map]";
  function baseIsMap(value) {
    return isObjectLike(value) && getTag(value) == mapTag$2;
  }
  var nodeIsMap = nodeUtil && nodeUtil.isMap;
  var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
  var setTag$2 = "[object Set]";
  function baseIsSet(value) {
    return isObjectLike(value) && getTag(value) == setTag$2;
  }
  var nodeIsSet = nodeUtil && nodeUtil.isSet;
  var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
  var CLONE_DEEP_FLAG$1 = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG$1 = 4;
  var argsTag$1 = "[object Arguments]", arrayTag$1 = "[object Array]", boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", errorTag$1 = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag$1 = "[object Map]", numberTag$1 = "[object Number]", objectTag$1 = "[object Object]", regexpTag$1 = "[object RegExp]", setTag$1 = "[object Set]", stringTag$2 = "[object String]", symbolTag$1 = "[object Symbol]", weakMapTag = "[object WeakMap]";
  var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
  var cloneableTags = {};
  cloneableTags[argsTag$1] = cloneableTags[arrayTag$1] = cloneableTags[arrayBufferTag$1] = cloneableTags[dataViewTag$1] = cloneableTags[boolTag$1] = cloneableTags[dateTag$1] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag$1] = cloneableTags[numberTag$1] = cloneableTags[objectTag$1] = cloneableTags[regexpTag$1] = cloneableTags[setTag$1] = cloneableTags[stringTag$2] = cloneableTags[symbolTag$1] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
  cloneableTags[errorTag$1] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
  function baseClone(value, bitmask, customizer, key, object, stack) {
    var result2, isDeep = bitmask & CLONE_DEEP_FLAG$1, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG$1;
    if (result2 !== void 0) {
      return result2;
    }
    if (!isObject(value)) {
      return value;
    }
    var isArr = isArray(value);
    if (isArr) {
      result2 = initCloneArray(value);
      if (!isDeep) {
        return copyArray(value, result2);
      }
    } else {
      var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
      if (isBuffer(value)) {
        return cloneBuffer(value, isDeep);
      }
      if (tag == objectTag$1 || tag == argsTag$1 || isFunc && !object) {
        result2 = isFlat || isFunc ? {} : initCloneObject(value);
        if (!isDeep) {
          return isFlat ? copySymbolsIn(value, baseAssignIn(result2, value)) : copySymbols(value, baseAssign(result2, value));
        }
      } else {
        if (!cloneableTags[tag]) {
          return object ? value : {};
        }
        result2 = initCloneByTag(value, tag, isDeep);
      }
    }
    stack || (stack = new Stack());
    var stacked = stack.get(value);
    if (stacked) {
      return stacked;
    }
    stack.set(value, result2);
    if (isSet(value)) {
      value.forEach(function(subValue) {
        result2.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
      });
    } else if (isMap(value)) {
      value.forEach(function(subValue, key2) {
        result2.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
      });
    }
    var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
    var props = isArr ? void 0 : keysFunc(value);
    arrayEach(props || value, function(subValue, key2) {
      if (props) {
        key2 = subValue;
        subValue = value[key2];
      }
      assignValue(result2, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
    });
    return result2;
  }
  var CLONE_DEEP_FLAG = 1, CLONE_SYMBOLS_FLAG = 4;
  function cloneDeep(value) {
    return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
  }
  var HASH_UNDEFINED = "__lodash_hash_undefined__";
  function setCacheAdd(value) {
    this.__data__.set(value, HASH_UNDEFINED);
    return this;
  }
  function setCacheHas(value) {
    return this.__data__.has(value);
  }
  function SetCache(values) {
    var index2 = -1, length = values == null ? 0 : values.length;
    this.__data__ = new MapCache();
    while (++index2 < length) {
      this.add(values[index2]);
    }
  }
  SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
  SetCache.prototype.has = setCacheHas;
  function arraySome(array, predicate) {
    var index2 = -1, length = array == null ? 0 : array.length;
    while (++index2 < length) {
      if (predicate(array[index2], index2, array)) {
        return true;
      }
    }
    return false;
  }
  function cacheHas(cache, key) {
    return cache.has(key);
  }
  var COMPARE_PARTIAL_FLAG$5 = 1, COMPARE_UNORDERED_FLAG$3 = 2;
  function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG$5, arrLength = array.length, othLength = other.length;
    if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
      return false;
    }
    var arrStacked = stack.get(array);
    var othStacked = stack.get(other);
    if (arrStacked && othStacked) {
      return arrStacked == other && othStacked == array;
    }
    var index2 = -1, result2 = true, seen = bitmask & COMPARE_UNORDERED_FLAG$3 ? new SetCache() : void 0;
    stack.set(array, other);
    stack.set(other, array);
    while (++index2 < arrLength) {
      var arrValue = array[index2], othValue = other[index2];
      if (customizer) {
        var compared = isPartial ? customizer(othValue, arrValue, index2, other, array, stack) : customizer(arrValue, othValue, index2, array, other, stack);
      }
      if (compared !== void 0) {
        if (compared) {
          continue;
        }
        result2 = false;
        break;
      }
      if (seen) {
        if (!arraySome(other, function(othValue2, othIndex) {
          if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
            return seen.push(othIndex);
          }
        })) {
          result2 = false;
          break;
        }
      } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
        result2 = false;
        break;
      }
    }
    stack["delete"](array);
    stack["delete"](other);
    return result2;
  }
  function mapToArray(map) {
    var index2 = -1, result2 = Array(map.size);
    map.forEach(function(value, key) {
      result2[++index2] = [key, value];
    });
    return result2;
  }
  function setToArray(set) {
    var index2 = -1, result2 = Array(set.size);
    set.forEach(function(value) {
      result2[++index2] = value;
    });
    return result2;
  }
  var COMPARE_PARTIAL_FLAG$4 = 1, COMPARE_UNORDERED_FLAG$2 = 2;
  var boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", mapTag = "[object Map]", numberTag = "[object Number]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag$1 = "[object String]", symbolTag = "[object Symbol]";
  var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]";
  var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
  function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
    switch (tag) {
      case dataViewTag:
        if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
          return false;
        }
        object = object.buffer;
        other = other.buffer;
      case arrayBufferTag:
        if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array$1(object), new Uint8Array$1(other))) {
          return false;
        }
        return true;
      case boolTag:
      case dateTag:
      case numberTag:
        return eq(+object, +other);
      case errorTag:
        return object.name == other.name && object.message == other.message;
      case regexpTag:
      case stringTag$1:
        return object == other + "";
      case mapTag:
        var convert = mapToArray;
      case setTag:
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG$4;
        convert || (convert = setToArray);
        if (object.size != other.size && !isPartial) {
          return false;
        }
        var stacked = stack.get(object);
        if (stacked) {
          return stacked == other;
        }
        bitmask |= COMPARE_UNORDERED_FLAG$2;
        stack.set(object, other);
        var result2 = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
        stack["delete"](object);
        return result2;
      case symbolTag:
        if (symbolValueOf) {
          return symbolValueOf.call(object) == symbolValueOf.call(other);
        }
    }
    return false;
  }
  var COMPARE_PARTIAL_FLAG$3 = 1;
  var objectProto$1 = Object.prototype;
  var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
  function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
    if (objLength != othLength && !isPartial) {
      return false;
    }
    var index2 = objLength;
    while (index2--) {
      var key = objProps[index2];
      if (!(isPartial ? key in other : hasOwnProperty$1.call(other, key))) {
        return false;
      }
    }
    var objStacked = stack.get(object);
    var othStacked = stack.get(other);
    if (objStacked && othStacked) {
      return objStacked == other && othStacked == object;
    }
    var result2 = true;
    stack.set(object, other);
    stack.set(other, object);
    var skipCtor = isPartial;
    while (++index2 < objLength) {
      key = objProps[index2];
      var objValue = object[key], othValue = other[key];
      if (customizer) {
        var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
      }
      if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
        result2 = false;
        break;
      }
      skipCtor || (skipCtor = key == "constructor");
    }
    if (result2 && !skipCtor) {
      var objCtor = object.constructor, othCtor = other.constructor;
      if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
        result2 = false;
      }
    }
    stack["delete"](object);
    stack["delete"](other);
    return result2;
  }
  var COMPARE_PARTIAL_FLAG$2 = 1;
  var argsTag = "[object Arguments]", arrayTag = "[object Array]", objectTag = "[object Object]";
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
    var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
    objTag = objTag == argsTag ? objectTag : objTag;
    othTag = othTag == argsTag ? objectTag : othTag;
    var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
    if (isSameTag && isBuffer(object)) {
      if (!isBuffer(other)) {
        return false;
      }
      objIsArr = true;
      objIsObj = false;
    }
    if (isSameTag && !objIsObj) {
      stack || (stack = new Stack());
      return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
    }
    if (!(bitmask & COMPARE_PARTIAL_FLAG$2)) {
      var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
      if (objIsWrapped || othIsWrapped) {
        var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
        stack || (stack = new Stack());
        return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
      }
    }
    if (!isSameTag) {
      return false;
    }
    stack || (stack = new Stack());
    return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
  }
  function baseIsEqual(value, other, bitmask, customizer, stack) {
    if (value === other) {
      return true;
    }
    if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
      return value !== value && other !== other;
    }
    return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
  }
  var COMPARE_PARTIAL_FLAG$1 = 1, COMPARE_UNORDERED_FLAG$1 = 2;
  function baseIsMatch(object, source, matchData, customizer) {
    var index2 = matchData.length, length = index2;
    if (object == null) {
      return !length;
    }
    object = Object(object);
    while (index2--) {
      var data = matchData[index2];
      if (data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
        return false;
      }
    }
    while (++index2 < length) {
      data = matchData[index2];
      var key = data[0], objValue = object[key], srcValue = data[1];
      if (data[2]) {
        if (objValue === void 0 && !(key in object)) {
          return false;
        }
      } else {
        var stack = new Stack();
        var result2;
        if (!(result2 === void 0 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$1 | COMPARE_UNORDERED_FLAG$1, customizer, stack) : result2)) {
          return false;
        }
      }
    }
    return true;
  }
  function isStrictComparable(value) {
    return value === value && !isObject(value);
  }
  function getMatchData(object) {
    var result2 = keys(object), length = result2.length;
    while (length--) {
      var key = result2[length], value = object[key];
      result2[length] = [key, value, isStrictComparable(value)];
    }
    return result2;
  }
  function matchesStrictComparable(key, srcValue) {
    return function(object) {
      if (object == null) {
        return false;
      }
      return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
    };
  }
  function baseMatches(source) {
    var matchData = getMatchData(source);
    if (matchData.length == 1 && matchData[0][2]) {
      return matchesStrictComparable(matchData[0][0], matchData[0][1]);
    }
    return function(object) {
      return object === source || baseIsMatch(object, source, matchData);
    };
  }
  function baseHasIn(object, key) {
    return object != null && key in Object(object);
  }
  function hasPath(object, path, hasFunc) {
    path = castPath(path, object);
    var index2 = -1, length = path.length, result2 = false;
    while (++index2 < length) {
      var key = toKey(path[index2]);
      if (!(result2 = object != null && hasFunc(object, key))) {
        break;
      }
      object = object[key];
    }
    if (result2 || ++index2 != length) {
      return result2;
    }
    length = object == null ? 0 : object.length;
    return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
  }
  function hasIn(object, path) {
    return object != null && hasPath(object, path, baseHasIn);
  }
  var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
  function baseMatchesProperty(path, srcValue) {
    if (isKey(path) && isStrictComparable(srcValue)) {
      return matchesStrictComparable(toKey(path), srcValue);
    }
    return function(object) {
      var objValue = get(object, path);
      return objValue === void 0 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
    };
  }
  function baseProperty(key) {
    return function(object) {
      return object == null ? void 0 : object[key];
    };
  }
  function basePropertyDeep(path) {
    return function(object) {
      return baseGet(object, path);
    };
  }
  function property(path) {
    return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
  }
  function baseIteratee(value) {
    if (typeof value == "function") {
      return value;
    }
    if (value == null) {
      return identity;
    }
    if (typeof value == "object") {
      return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
    }
    return property(value);
  }
  function createBaseFor(fromRight) {
    return function(object, iteratee, keysFunc) {
      var index2 = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
      while (length--) {
        var key = props[++index2];
        if (iteratee(iterable[key], key, iterable) === false) {
          break;
        }
      }
      return object;
    };
  }
  var baseFor = createBaseFor();
  var now = function() {
    return root$2.Date.now();
  };
  var FUNC_ERROR_TEXT$1 = "Expected a function";
  var nativeMax = Math.max, nativeMin = Math.min;
  function debounce(func, wait2, options2) {
    var lastArgs, lastThis, maxWait, result2, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
    if (typeof func != "function") {
      throw new TypeError(FUNC_ERROR_TEXT$1);
    }
    wait2 = toNumber(wait2) || 0;
    if (isObject(options2)) {
      leading = !!options2.leading;
      maxing = "maxWait" in options2;
      maxWait = maxing ? nativeMax(toNumber(options2.maxWait) || 0, wait2) : maxWait;
      trailing = "trailing" in options2 ? !!options2.trailing : trailing;
    }
    function invokeFunc(time) {
      var args = lastArgs, thisArg = lastThis;
      lastArgs = lastThis = void 0;
      lastInvokeTime = time;
      result2 = func.apply(thisArg, args);
      return result2;
    }
    function leadingEdge(time) {
      lastInvokeTime = time;
      timerId = setTimeout(timerExpired, wait2);
      return leading ? invokeFunc(time) : result2;
    }
    function remainingWait(time) {
      var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait2 - timeSinceLastCall;
      return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
    }
    function shouldInvoke(time) {
      var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
      return lastCallTime === void 0 || timeSinceLastCall >= wait2 || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
    }
    function timerExpired() {
      var time = now();
      if (shouldInvoke(time)) {
        return trailingEdge(time);
      }
      timerId = setTimeout(timerExpired, remainingWait(time));
    }
    function trailingEdge(time) {
      timerId = void 0;
      if (trailing && lastArgs) {
        return invokeFunc(time);
      }
      lastArgs = lastThis = void 0;
      return result2;
    }
    function cancel() {
      if (timerId !== void 0) {
        clearTimeout(timerId);
      }
      lastInvokeTime = 0;
      lastArgs = lastCallTime = lastThis = timerId = void 0;
    }
    function flush() {
      return timerId === void 0 ? result2 : trailingEdge(now());
    }
    function debounced() {
      var time = now(), isInvoking = shouldInvoke(time);
      lastArgs = arguments;
      lastThis = this;
      lastCallTime = time;
      if (isInvoking) {
        if (timerId === void 0) {
          return leadingEdge(lastCallTime);
        }
        if (maxing) {
          clearTimeout(timerId);
          timerId = setTimeout(timerExpired, wait2);
          return invokeFunc(lastCallTime);
        }
      }
      if (timerId === void 0) {
        timerId = setTimeout(timerExpired, wait2);
      }
      return result2;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
  }
  function assignMergeValue(object, key, value) {
    if (value !== void 0 && !eq(object[key], value) || value === void 0 && !(key in object)) {
      baseAssignValue(object, key, value);
    }
  }
  function isArrayLikeObject(value) {
    return isObjectLike(value) && isArrayLike(value);
  }
  function safeGet(object, key) {
    if (key === "constructor" && typeof object[key] === "function") {
      return;
    }
    if (key == "__proto__") {
      return;
    }
    return object[key];
  }
  function toPlainObject(value) {
    return copyObject(value, keysIn(value));
  }
  function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
    var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
    if (stacked) {
      assignMergeValue(object, key, stacked);
      return;
    }
    var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
    var isCommon = newValue === void 0;
    if (isCommon) {
      var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
      newValue = srcValue;
      if (isArr || isBuff || isTyped) {
        if (isArray(objValue)) {
          newValue = objValue;
        } else if (isArrayLikeObject(objValue)) {
          newValue = copyArray(objValue);
        } else if (isBuff) {
          isCommon = false;
          newValue = cloneBuffer(srcValue, true);
        } else if (isTyped) {
          isCommon = false;
          newValue = cloneTypedArray(srcValue, true);
        } else {
          newValue = [];
        }
      } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
        newValue = objValue;
        if (isArguments(objValue)) {
          newValue = toPlainObject(objValue);
        } else if (!isObject(objValue) || isFunction(objValue)) {
          newValue = initCloneObject(srcValue);
        }
      } else {
        isCommon = false;
      }
    }
    if (isCommon) {
      stack.set(srcValue, newValue);
      mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
      stack["delete"](srcValue);
    }
    assignMergeValue(object, key, newValue);
  }
  function baseMerge(object, source, srcIndex, customizer, stack) {
    if (object === source) {
      return;
    }
    baseFor(source, function(srcValue, key) {
      stack || (stack = new Stack());
      if (isObject(srcValue)) {
        baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
      } else {
        var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : void 0;
        if (newValue === void 0) {
          newValue = srcValue;
        }
        assignMergeValue(object, key, newValue);
      }
    }, keysIn);
  }
  var stringTag = "[object String]";
  function isString(value) {
    return typeof value == "string" || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
  }
  function isElement$1(value) {
    return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
  }
  function isUndefined(value) {
    return value === void 0;
  }
  var merge = createAssigner(function(object, source, srcIndex) {
    baseMerge(object, source, srcIndex);
  });
  function takeRight(array, n2, guard) {
    var length = array == null ? 0 : array.length;
    if (!length) {
      return [];
    }
    n2 = n2 === void 0 ? 1 : toInteger(n2);
    n2 = length - n2;
    return baseSlice(array, n2 < 0 ? 0 : n2, length);
  }
  var FUNC_ERROR_TEXT = "Expected a function";
  function throttle$1(func, wait2, options2) {
    var leading = true, trailing = true;
    if (typeof func != "function") {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    if (isObject(options2)) {
      leading = "leading" in options2 ? !!options2.leading : leading;
      trailing = "trailing" in options2 ? !!options2.trailing : trailing;
    }
    return debounce(func, wait2, {
      "leading": leading,
      "maxWait": wait2,
      "trailing": trailing
    });
  }
  var INFINITY = 1 / 0;
  var createSet = !(Set$1 && 1 / setToArray(new Set$1([, -0]))[1] == INFINITY) ? noop : function(values) {
    return new Set$1(values);
  };
  var LARGE_ARRAY_SIZE = 200;
  function baseUniq(array, iteratee, comparator) {
    var index2 = -1, includes2 = arrayIncludes, length = array.length, isCommon = true, result2 = [], seen = result2;
    if (length >= LARGE_ARRAY_SIZE) {
      var set = iteratee ? null : createSet(array);
      if (set) {
        return setToArray(set);
      }
      isCommon = false;
      includes2 = cacheHas;
      seen = new SetCache();
    } else {
      seen = iteratee ? [] : result2;
    }
    outer:
      while (++index2 < length) {
        var value = array[index2], computed = iteratee ? iteratee(value) : value;
        value = value !== 0 ? value : 0;
        if (isCommon && computed === computed) {
          var seenIndex = seen.length;
          while (seenIndex--) {
            if (seen[seenIndex] === computed) {
              continue outer;
            }
          }
          if (iteratee) {
            seen.push(computed);
          }
          result2.push(value);
        } else if (!includes2(seen, computed, comparator)) {
          if (seen !== result2) {
            seen.push(computed);
          }
          result2.push(value);
        }
      }
    return result2;
  }
  function uniqBy(array, iteratee) {
    return array && array.length ? baseUniq(array, baseIteratee(iteratee)) : [];
  }
  var __assign = function() {
    __assign = Object.assign || function __assign2(t2) {
      for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
        s2 = arguments[i2];
        for (var p2 in s2) if (Object.prototype.hasOwnProperty.call(s2, p2)) t2[p2] = s2[p2];
      }
      return t2;
    };
    return __assign.apply(this, arguments);
  };
  function __awaiter(thisArg, _arguments, P2, generator) {
    function adopt(value) {
      return value instanceof P2 ? value : new P2(function(resolve2) {
        resolve2(value);
      });
    }
    return new (P2 || (P2 = Promise))(function(resolve2, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e2) {
          reject(e2);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e2) {
          reject(e2);
        }
      }
      function step(result2) {
        result2.done ? resolve2(result2.value) : adopt(result2.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }
  function __generator(thisArg, body) {
    var _2 = { label: 0, sent: function() {
      if (t2[0] & 1) throw t2[1];
      return t2[1];
    }, trys: [], ops: [] }, f2, y2, t2, g2 = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g2.next = verb(0), g2["throw"] = verb(1), g2["return"] = verb(2), typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
      return this;
    }), g2;
    function verb(n2) {
      return function(v2) {
        return step([n2, v2]);
      };
    }
    function step(op) {
      if (f2) throw new TypeError("Generator is already executing.");
      while (g2 && (g2 = 0, op[0] && (_2 = 0)), _2) try {
        if (f2 = 1, y2 && (t2 = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t2 = y2["return"]) && t2.call(y2), 0) : y2.next) && !(t2 = t2.call(y2, op[1])).done) return t2;
        if (y2 = 0, t2) op = [op[0] & 2, t2.value];
        switch (op[0]) {
          case 0:
          case 1:
            t2 = op;
            break;
          case 4:
            _2.label++;
            return { value: op[1], done: false };
          case 5:
            _2.label++;
            y2 = op[1];
            op = [0];
            continue;
          case 7:
            op = _2.ops.pop();
            _2.trys.pop();
            continue;
          default:
            if (!(t2 = _2.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _2 = 0;
              continue;
            }
            if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
              _2.label = op[1];
              break;
            }
            if (op[0] === 6 && _2.label < t2[1]) {
              _2.label = t2[1];
              t2 = op;
              break;
            }
            if (t2 && _2.label < t2[2]) {
              _2.label = t2[2];
              _2.ops.push(op);
              break;
            }
            if (t2[2]) _2.ops.pop();
            _2.trys.pop();
            continue;
        }
        op = body.call(thisArg, _2);
      } catch (e2) {
        op = [6, e2];
        y2 = 0;
      } finally {
        f2 = t2 = 0;
      }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  }
  function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i2 = 0, l2 = from.length, ar; i2 < l2; i2++) {
      if (ar || !(i2 in from)) {
        if (!ar) ar = Array.prototype.slice.call(from, 0, i2);
        ar[i2] = from[i2];
      }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
  }
  typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e2 = new Error(message);
    return e2.name = "SuppressedError", e2.error = error, e2.suppressed = suppressed, e2;
  };
  var version$1 = "3.4.2";
  function wait(durationMs, resolveWith) {
    return new Promise(function(resolve2) {
      return setTimeout(resolve2, durationMs, resolveWith);
    });
  }
  function requestIdleCallbackIfAvailable(fallbackTimeout, deadlineTimeout) {
    if (deadlineTimeout === void 0) {
      deadlineTimeout = Infinity;
    }
    var requestIdleCallback2 = window.requestIdleCallback;
    if (requestIdleCallback2) {
      return new Promise(function(resolve2) {
        return requestIdleCallback2.call(window, function() {
          return resolve2();
        }, { timeout: deadlineTimeout });
      });
    } else {
      return wait(Math.min(fallbackTimeout, deadlineTimeout));
    }
  }
  function isPromise$2(value) {
    return !!value && typeof value.then === "function";
  }
  function awaitIfAsync(action, callback) {
    try {
      var returnedValue = action();
      if (isPromise$2(returnedValue)) {
        returnedValue.then(function(result2) {
          return callback(true, result2);
        }, function(error) {
          return callback(false, error);
        });
      } else {
        callback(true, returnedValue);
      }
    } catch (error) {
      callback(false, error);
    }
  }
  function mapWithBreaks(items, callback, loopReleaseInterval) {
    if (loopReleaseInterval === void 0) {
      loopReleaseInterval = 16;
    }
    return __awaiter(this, void 0, void 0, function() {
      var results, lastLoopReleaseTime, i2, now2;
      return __generator(this, function(_a3) {
        switch (_a3.label) {
          case 0:
            results = Array(items.length);
            lastLoopReleaseTime = Date.now();
            i2 = 0;
            _a3.label = 1;
          case 1:
            if (!(i2 < items.length)) return [3, 4];
            results[i2] = callback(items[i2], i2);
            now2 = Date.now();
            if (!(now2 >= lastLoopReleaseTime + loopReleaseInterval)) return [3, 3];
            lastLoopReleaseTime = now2;
            return [4, wait(0)];
          case 2:
            _a3.sent();
            _a3.label = 3;
          case 3:
            ++i2;
            return [3, 1];
          case 4:
            return [2, results];
        }
      });
    });
  }
  function suppressUnhandledRejectionWarning(promise) {
    promise.then(void 0, function() {
      return void 0;
    });
  }
  function x64Add(m2, n2) {
    m2 = [m2[0] >>> 16, m2[0] & 65535, m2[1] >>> 16, m2[1] & 65535];
    n2 = [n2[0] >>> 16, n2[0] & 65535, n2[1] >>> 16, n2[1] & 65535];
    var o2 = [0, 0, 0, 0];
    o2[3] += m2[3] + n2[3];
    o2[2] += o2[3] >>> 16;
    o2[3] &= 65535;
    o2[2] += m2[2] + n2[2];
    o2[1] += o2[2] >>> 16;
    o2[2] &= 65535;
    o2[1] += m2[1] + n2[1];
    o2[0] += o2[1] >>> 16;
    o2[1] &= 65535;
    o2[0] += m2[0] + n2[0];
    o2[0] &= 65535;
    return [o2[0] << 16 | o2[1], o2[2] << 16 | o2[3]];
  }
  function x64Multiply(m2, n2) {
    m2 = [m2[0] >>> 16, m2[0] & 65535, m2[1] >>> 16, m2[1] & 65535];
    n2 = [n2[0] >>> 16, n2[0] & 65535, n2[1] >>> 16, n2[1] & 65535];
    var o2 = [0, 0, 0, 0];
    o2[3] += m2[3] * n2[3];
    o2[2] += o2[3] >>> 16;
    o2[3] &= 65535;
    o2[2] += m2[2] * n2[3];
    o2[1] += o2[2] >>> 16;
    o2[2] &= 65535;
    o2[2] += m2[3] * n2[2];
    o2[1] += o2[2] >>> 16;
    o2[2] &= 65535;
    o2[1] += m2[1] * n2[3];
    o2[0] += o2[1] >>> 16;
    o2[1] &= 65535;
    o2[1] += m2[2] * n2[2];
    o2[0] += o2[1] >>> 16;
    o2[1] &= 65535;
    o2[1] += m2[3] * n2[1];
    o2[0] += o2[1] >>> 16;
    o2[1] &= 65535;
    o2[0] += m2[0] * n2[3] + m2[1] * n2[2] + m2[2] * n2[1] + m2[3] * n2[0];
    o2[0] &= 65535;
    return [o2[0] << 16 | o2[1], o2[2] << 16 | o2[3]];
  }
  function x64Rotl(m2, n2) {
    n2 %= 64;
    if (n2 === 32) {
      return [m2[1], m2[0]];
    } else if (n2 < 32) {
      return [m2[0] << n2 | m2[1] >>> 32 - n2, m2[1] << n2 | m2[0] >>> 32 - n2];
    } else {
      n2 -= 32;
      return [m2[1] << n2 | m2[0] >>> 32 - n2, m2[0] << n2 | m2[1] >>> 32 - n2];
    }
  }
  function x64LeftShift(m2, n2) {
    n2 %= 64;
    if (n2 === 0) {
      return m2;
    } else if (n2 < 32) {
      return [m2[0] << n2 | m2[1] >>> 32 - n2, m2[1] << n2];
    } else {
      return [m2[1] << n2 - 32, 0];
    }
  }
  function x64Xor(m2, n2) {
    return [m2[0] ^ n2[0], m2[1] ^ n2[1]];
  }
  function x64Fmix(h2) {
    h2 = x64Xor(h2, [0, h2[0] >>> 1]);
    h2 = x64Multiply(h2, [4283543511, 3981806797]);
    h2 = x64Xor(h2, [0, h2[0] >>> 1]);
    h2 = x64Multiply(h2, [3301882366, 444984403]);
    h2 = x64Xor(h2, [0, h2[0] >>> 1]);
    return h2;
  }
  function x64hash128(key, seed) {
    key = key || "";
    seed = seed || 0;
    var remainder = key.length % 16;
    var bytes = key.length - remainder;
    var h1 = [0, seed];
    var h2 = [0, seed];
    var k1 = [0, 0];
    var k2 = [0, 0];
    var c1 = [2277735313, 289559509];
    var c2 = [1291169091, 658871167];
    var i2;
    for (i2 = 0; i2 < bytes; i2 = i2 + 16) {
      k1 = [
        key.charCodeAt(i2 + 4) & 255 | (key.charCodeAt(i2 + 5) & 255) << 8 | (key.charCodeAt(i2 + 6) & 255) << 16 | (key.charCodeAt(i2 + 7) & 255) << 24,
        key.charCodeAt(i2) & 255 | (key.charCodeAt(i2 + 1) & 255) << 8 | (key.charCodeAt(i2 + 2) & 255) << 16 | (key.charCodeAt(i2 + 3) & 255) << 24
      ];
      k2 = [
        key.charCodeAt(i2 + 12) & 255 | (key.charCodeAt(i2 + 13) & 255) << 8 | (key.charCodeAt(i2 + 14) & 255) << 16 | (key.charCodeAt(i2 + 15) & 255) << 24,
        key.charCodeAt(i2 + 8) & 255 | (key.charCodeAt(i2 + 9) & 255) << 8 | (key.charCodeAt(i2 + 10) & 255) << 16 | (key.charCodeAt(i2 + 11) & 255) << 24
      ];
      k1 = x64Multiply(k1, c1);
      k1 = x64Rotl(k1, 31);
      k1 = x64Multiply(k1, c2);
      h1 = x64Xor(h1, k1);
      h1 = x64Rotl(h1, 27);
      h1 = x64Add(h1, h2);
      h1 = x64Add(x64Multiply(h1, [0, 5]), [0, 1390208809]);
      k2 = x64Multiply(k2, c2);
      k2 = x64Rotl(k2, 33);
      k2 = x64Multiply(k2, c1);
      h2 = x64Xor(h2, k2);
      h2 = x64Rotl(h2, 31);
      h2 = x64Add(h2, h1);
      h2 = x64Add(x64Multiply(h2, [0, 5]), [0, 944331445]);
    }
    k1 = [0, 0];
    k2 = [0, 0];
    switch (remainder) {
      case 15:
        k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i2 + 14)], 48));
      case 14:
        k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i2 + 13)], 40));
      case 13:
        k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i2 + 12)], 32));
      case 12:
        k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i2 + 11)], 24));
      case 11:
        k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i2 + 10)], 16));
      case 10:
        k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i2 + 9)], 8));
      case 9:
        k2 = x64Xor(k2, [0, key.charCodeAt(i2 + 8)]);
        k2 = x64Multiply(k2, c2);
        k2 = x64Rotl(k2, 33);
        k2 = x64Multiply(k2, c1);
        h2 = x64Xor(h2, k2);
      case 8:
        k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i2 + 7)], 56));
      case 7:
        k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i2 + 6)], 48));
      case 6:
        k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i2 + 5)], 40));
      case 5:
        k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i2 + 4)], 32));
      case 4:
        k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i2 + 3)], 24));
      case 3:
        k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i2 + 2)], 16));
      case 2:
        k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i2 + 1)], 8));
      case 1:
        k1 = x64Xor(k1, [0, key.charCodeAt(i2)]);
        k1 = x64Multiply(k1, c1);
        k1 = x64Rotl(k1, 31);
        k1 = x64Multiply(k1, c2);
        h1 = x64Xor(h1, k1);
    }
    h1 = x64Xor(h1, [0, key.length]);
    h2 = x64Xor(h2, [0, key.length]);
    h1 = x64Add(h1, h2);
    h2 = x64Add(h2, h1);
    h1 = x64Fmix(h1);
    h2 = x64Fmix(h2);
    h1 = x64Add(h1, h2);
    h2 = x64Add(h2, h1);
    return ("00000000" + (h1[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (h1[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (h2[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (h2[1] >>> 0).toString(16)).slice(-8);
  }
  function errorToObject(error) {
    var _a3;
    return __assign({ name: error.name, message: error.message, stack: (_a3 = error.stack) === null || _a3 === void 0 ? void 0 : _a3.split("\n") }, error);
  }
  function includes(haystack, needle) {
    for (var i2 = 0, l2 = haystack.length; i2 < l2; ++i2) {
      if (haystack[i2] === needle) {
        return true;
      }
    }
    return false;
  }
  function excludes(haystack, needle) {
    return !includes(haystack, needle);
  }
  function toInt(value) {
    return parseInt(value);
  }
  function toFloat(value) {
    return parseFloat(value);
  }
  function replaceNaN(value, replacement) {
    return typeof value === "number" && isNaN(value) ? replacement : value;
  }
  function countTruthy(values) {
    return values.reduce(function(sum, value) {
      return sum + (value ? 1 : 0);
    }, 0);
  }
  function round(value, base) {
    if (base === void 0) {
      base = 1;
    }
    if (Math.abs(base) >= 1) {
      return Math.round(value / base) * base;
    } else {
      var counterBase = 1 / base;
      return Math.round(value * counterBase) / counterBase;
    }
  }
  function parseSimpleCssSelector(selector) {
    var _a3, _b2;
    var errorMessage = "Unexpected syntax '".concat(selector, "'");
    var tagMatch = /^\s*([a-z-]*)(.*)$/i.exec(selector);
    var tag = tagMatch[1] || void 0;
    var attributes = {};
    var partsRegex = /([.:#][\w-]+|\[.+?\])/gi;
    var addAttribute = function(name, value) {
      attributes[name] = attributes[name] || [];
      attributes[name].push(value);
    };
    for (; ; ) {
      var match = partsRegex.exec(tagMatch[2]);
      if (!match) {
        break;
      }
      var part = match[0];
      switch (part[0]) {
        case ".":
          addAttribute("class", part.slice(1));
          break;
        case "#":
          addAttribute("id", part.slice(1));
          break;
        case "[": {
          var attributeMatch = /^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(part);
          if (attributeMatch) {
            addAttribute(attributeMatch[1], (_b2 = (_a3 = attributeMatch[4]) !== null && _a3 !== void 0 ? _a3 : attributeMatch[5]) !== null && _b2 !== void 0 ? _b2 : "");
          } else {
            throw new Error(errorMessage);
          }
          break;
        }
        default:
          throw new Error(errorMessage);
      }
    }
    return [tag, attributes];
  }
  function ensureErrorWithMessage(error) {
    return error && typeof error === "object" && "message" in error ? error : { message: error };
  }
  function isFinalResultLoaded(loadResult) {
    return typeof loadResult !== "function";
  }
  function loadSource(source, sourceOptions) {
    var sourceLoadPromise = new Promise(function(resolveLoad) {
      var loadStartTime = Date.now();
      awaitIfAsync(source.bind(null, sourceOptions), function() {
        var loadArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          loadArgs[_i] = arguments[_i];
        }
        var loadDuration = Date.now() - loadStartTime;
        if (!loadArgs[0]) {
          return resolveLoad(function() {
            return { error: ensureErrorWithMessage(loadArgs[1]), duration: loadDuration };
          });
        }
        var loadResult = loadArgs[1];
        if (isFinalResultLoaded(loadResult)) {
          return resolveLoad(function() {
            return { value: loadResult, duration: loadDuration };
          });
        }
        resolveLoad(function() {
          return new Promise(function(resolveGet) {
            var getStartTime = Date.now();
            awaitIfAsync(loadResult, function() {
              var getArgs = [];
              for (var _i2 = 0; _i2 < arguments.length; _i2++) {
                getArgs[_i2] = arguments[_i2];
              }
              var duration = loadDuration + Date.now() - getStartTime;
              if (!getArgs[0]) {
                return resolveGet({ error: ensureErrorWithMessage(getArgs[1]), duration });
              }
              resolveGet({ value: getArgs[1], duration });
            });
          });
        });
      });
    });
    suppressUnhandledRejectionWarning(sourceLoadPromise);
    return function getComponent() {
      return sourceLoadPromise.then(function(finalizeSource) {
        return finalizeSource();
      });
    };
  }
  function loadSources(sources2, sourceOptions, excludeSources) {
    var includedSources = Object.keys(sources2).filter(function(sourceKey) {
      return excludes(excludeSources, sourceKey);
    });
    var sourceGettersPromise = mapWithBreaks(includedSources, function(sourceKey) {
      return loadSource(sources2[sourceKey], sourceOptions);
    });
    suppressUnhandledRejectionWarning(sourceGettersPromise);
    return function getComponents() {
      return __awaiter(this, void 0, void 0, function() {
        var sourceGetters, componentPromises, componentArray, components, index2;
        return __generator(this, function(_a3) {
          switch (_a3.label) {
            case 0:
              return [4, sourceGettersPromise];
            case 1:
              sourceGetters = _a3.sent();
              return [4, mapWithBreaks(sourceGetters, function(sourceGetter) {
                var componentPromise = sourceGetter();
                suppressUnhandledRejectionWarning(componentPromise);
                return componentPromise;
              })];
            case 2:
              componentPromises = _a3.sent();
              return [
                4,
                Promise.all(componentPromises)
                // Keeping the component keys order the same as the source keys order
              ];
            case 3:
              componentArray = _a3.sent();
              components = {};
              for (index2 = 0; index2 < includedSources.length; ++index2) {
                components[includedSources[index2]] = componentArray[index2];
              }
              return [2, components];
          }
        });
      });
    };
  }
  function isTrident() {
    var w2 = window;
    var n2 = navigator;
    return countTruthy([
      "MSCSSMatrix" in w2,
      "msSetImmediate" in w2,
      "msIndexedDB" in w2,
      "msMaxTouchPoints" in n2,
      "msPointerEnabled" in n2
    ]) >= 4;
  }
  function isEdgeHTML() {
    var w2 = window;
    var n2 = navigator;
    return countTruthy(["msWriteProfilerMark" in w2, "MSStream" in w2, "msLaunchUri" in n2, "msSaveBlob" in n2]) >= 3 && !isTrident();
  }
  function isChromium() {
    var w2 = window;
    var n2 = navigator;
    return countTruthy([
      "webkitPersistentStorage" in n2,
      "webkitTemporaryStorage" in n2,
      n2.vendor.indexOf("Google") === 0,
      "webkitResolveLocalFileSystemURL" in w2,
      "BatteryManager" in w2,
      "webkitMediaStream" in w2,
      "webkitSpeechGrammar" in w2
    ]) >= 5;
  }
  function isWebKit() {
    var w2 = window;
    var n2 = navigator;
    return countTruthy([
      "ApplePayError" in w2,
      "CSSPrimitiveValue" in w2,
      "Counter" in w2,
      n2.vendor.indexOf("Apple") === 0,
      "getStorageUpdates" in n2,
      "WebKitMediaKeys" in w2
    ]) >= 4;
  }
  function isDesktopSafari() {
    var w2 = window;
    return countTruthy([
      "safari" in w2,
      !("DeviceMotionEvent" in w2),
      !("ongestureend" in w2),
      !("standalone" in navigator)
    ]) >= 3;
  }
  function isGecko() {
    var _a3, _b2;
    var w2 = window;
    return countTruthy([
      "buildID" in navigator,
      "MozAppearance" in ((_b2 = (_a3 = document.documentElement) === null || _a3 === void 0 ? void 0 : _a3.style) !== null && _b2 !== void 0 ? _b2 : {}),
      "onmozfullscreenchange" in w2,
      "mozInnerScreenX" in w2,
      "CSSMozDocumentRule" in w2,
      "CanvasCaptureMediaStream" in w2
    ]) >= 4;
  }
  function isChromium86OrNewer() {
    var w2 = window;
    return countTruthy([
      !("MediaSettingsRange" in w2),
      "RTCEncodedAudioFrame" in w2,
      "" + w2.Intl === "[object Intl]",
      "" + w2.Reflect === "[object Reflect]"
    ]) >= 3;
  }
  function isWebKit606OrNewer() {
    var w2 = window;
    return countTruthy([
      "DOMRectList" in w2,
      "RTCPeerConnectionIceEvent" in w2,
      "SVGGeometryElement" in w2,
      "ontransitioncancel" in w2
    ]) >= 3;
  }
  function isIPad() {
    if (navigator.platform === "iPad") {
      return true;
    }
    var s2 = screen;
    var screenRatio = s2.width / s2.height;
    return countTruthy([
      "MediaSource" in window,
      !!Element.prototype.webkitRequestFullscreen,
      // iPhone 4S that runs iOS 9 matches this. But it won't match the criteria above, so it won't be detected as iPad.
      screenRatio > 0.65 && screenRatio < 1.53
    ]) >= 2;
  }
  function getFullscreenElement() {
    var d2 = document;
    return d2.fullscreenElement || d2.msFullscreenElement || d2.mozFullScreenElement || d2.webkitFullscreenElement || null;
  }
  function exitFullscreen() {
    var d2 = document;
    return (d2.exitFullscreen || d2.msExitFullscreen || d2.mozCancelFullScreen || d2.webkitExitFullscreen).call(d2);
  }
  function isAndroid() {
    var isItChromium = isChromium();
    var isItGecko = isGecko();
    if (!isItChromium && !isItGecko) {
      return false;
    }
    var w2 = window;
    return countTruthy([
      "onorientationchange" in w2,
      "orientation" in w2,
      isItChromium && !("SharedWorker" in w2),
      isItGecko && /android/i.test(navigator.appVersion)
    ]) >= 2;
  }
  function getAudioFingerprint() {
    var w2 = window;
    var AudioContext = w2.OfflineAudioContext || w2.webkitOfflineAudioContext;
    if (!AudioContext) {
      return -2;
    }
    if (doesCurrentBrowserSuspendAudioContext()) {
      return -1;
    }
    var hashFromIndex = 4500;
    var hashToIndex = 5e3;
    var context = new AudioContext(1, hashToIndex, 44100);
    var oscillator = context.createOscillator();
    oscillator.type = "triangle";
    oscillator.frequency.value = 1e4;
    var compressor = context.createDynamicsCompressor();
    compressor.threshold.value = -50;
    compressor.knee.value = 40;
    compressor.ratio.value = 12;
    compressor.attack.value = 0;
    compressor.release.value = 0.25;
    oscillator.connect(compressor);
    compressor.connect(context.destination);
    oscillator.start(0);
    var _a3 = startRenderingAudio(context), renderPromise = _a3[0], finishRendering = _a3[1];
    var fingerprintPromise = renderPromise.then(function(buffer) {
      return getHash(buffer.getChannelData(0).subarray(hashFromIndex));
    }, function(error) {
      if (error.name === "timeout" || error.name === "suspended") {
        return -3;
      }
      throw error;
    });
    suppressUnhandledRejectionWarning(fingerprintPromise);
    return function() {
      finishRendering();
      return fingerprintPromise;
    };
  }
  function doesCurrentBrowserSuspendAudioContext() {
    return isWebKit() && !isDesktopSafari() && !isWebKit606OrNewer();
  }
  function startRenderingAudio(context) {
    var renderTryMaxCount = 3;
    var renderRetryDelay = 500;
    var runningMaxAwaitTime = 500;
    var runningSufficientTime = 5e3;
    var finalize = function() {
      return void 0;
    };
    var resultPromise = new Promise(function(resolve2, reject) {
      var isFinalized = false;
      var renderTryCount = 0;
      var startedRunningAt = 0;
      context.oncomplete = function(event) {
        return resolve2(event.renderedBuffer);
      };
      var startRunningTimeout = function() {
        setTimeout(function() {
          return reject(makeInnerError(
            "timeout"
            /* InnerErrorName.Timeout */
          ));
        }, Math.min(runningMaxAwaitTime, startedRunningAt + runningSufficientTime - Date.now()));
      };
      var tryRender = function() {
        try {
          var renderingPromise = context.startRendering();
          if (isPromise$2(renderingPromise)) {
            suppressUnhandledRejectionWarning(renderingPromise);
          }
          switch (context.state) {
            case "running":
              startedRunningAt = Date.now();
              if (isFinalized) {
                startRunningTimeout();
              }
              break;
            case "suspended":
              if (!document.hidden) {
                renderTryCount++;
              }
              if (isFinalized && renderTryCount >= renderTryMaxCount) {
                reject(makeInnerError(
                  "suspended"
                  /* InnerErrorName.Suspended */
                ));
              } else {
                setTimeout(tryRender, renderRetryDelay);
              }
              break;
          }
        } catch (error) {
          reject(error);
        }
      };
      tryRender();
      finalize = function() {
        if (!isFinalized) {
          isFinalized = true;
          if (startedRunningAt > 0) {
            startRunningTimeout();
          }
        }
      };
    });
    return [resultPromise, finalize];
  }
  function getHash(signal) {
    var hash = 0;
    for (var i2 = 0; i2 < signal.length; ++i2) {
      hash += Math.abs(signal[i2]);
    }
    return hash;
  }
  function makeInnerError(name) {
    var error = new Error(name);
    error.name = name;
    return error;
  }
  function withIframe(action, initialHtml, domPollInterval) {
    var _a3, _b2, _c;
    if (domPollInterval === void 0) {
      domPollInterval = 50;
    }
    return __awaiter(this, void 0, void 0, function() {
      var d2, iframe;
      return __generator(this, function(_d) {
        switch (_d.label) {
          case 0:
            d2 = document;
            _d.label = 1;
          case 1:
            if (!!d2.body) return [3, 3];
            return [4, wait(domPollInterval)];
          case 2:
            _d.sent();
            return [3, 1];
          case 3:
            iframe = d2.createElement("iframe");
            _d.label = 4;
          case 4:
            _d.trys.push([4, , 10, 11]);
            return [4, new Promise(function(_resolve, _reject) {
              var isComplete = false;
              var resolve2 = function() {
                isComplete = true;
                _resolve();
              };
              var reject = function(error) {
                isComplete = true;
                _reject(error);
              };
              iframe.onload = resolve2;
              iframe.onerror = reject;
              var style = iframe.style;
              style.setProperty("display", "block", "important");
              style.position = "absolute";
              style.top = "0";
              style.left = "0";
              style.visibility = "hidden";
              if (initialHtml && "srcdoc" in iframe) {
                iframe.srcdoc = initialHtml;
              } else {
                iframe.src = "about:blank";
              }
              d2.body.appendChild(iframe);
              var checkReadyState = function() {
                var _a4, _b3;
                if (isComplete) {
                  return;
                }
                if (((_b3 = (_a4 = iframe.contentWindow) === null || _a4 === void 0 ? void 0 : _a4.document) === null || _b3 === void 0 ? void 0 : _b3.readyState) === "complete") {
                  resolve2();
                } else {
                  setTimeout(checkReadyState, 10);
                }
              };
              checkReadyState();
            })];
          case 5:
            _d.sent();
            _d.label = 6;
          case 6:
            if (!!((_b2 = (_a3 = iframe.contentWindow) === null || _a3 === void 0 ? void 0 : _a3.document) === null || _b2 === void 0 ? void 0 : _b2.body)) return [3, 8];
            return [4, wait(domPollInterval)];
          case 7:
            _d.sent();
            return [3, 6];
          case 8:
            return [4, action(iframe, iframe.contentWindow)];
          case 9:
            return [2, _d.sent()];
          case 10:
            (_c = iframe.parentNode) === null || _c === void 0 ? void 0 : _c.removeChild(iframe);
            return [
              7
              /*endfinally*/
            ];
          case 11:
            return [
              2
              /*return*/
            ];
        }
      });
    });
  }
  function selectorToElement(selector) {
    var _a3 = parseSimpleCssSelector(selector), tag = _a3[0], attributes = _a3[1];
    var element = document.createElement(tag !== null && tag !== void 0 ? tag : "div");
    for (var _i = 0, _b2 = Object.keys(attributes); _i < _b2.length; _i++) {
      var name_1 = _b2[_i];
      var value = attributes[name_1].join(" ");
      if (name_1 === "style") {
        addStyleString(element.style, value);
      } else {
        element.setAttribute(name_1, value);
      }
    }
    return element;
  }
  function addStyleString(style, source) {
    for (var _i = 0, _a3 = source.split(";"); _i < _a3.length; _i++) {
      var property2 = _a3[_i];
      var match = /^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(property2);
      if (match) {
        var name_2 = match[1], value = match[2], priority = match[4];
        style.setProperty(name_2, value, priority || "");
      }
    }
  }
  var testString = "mmMwWLliI0O&1";
  var textSize = "48px";
  var baseFonts = ["monospace", "sans-serif", "serif"];
  var fontList = [
    // This is android-specific font from "Roboto" family
    "sans-serif-thin",
    "ARNO PRO",
    "Agency FB",
    "Arabic Typesetting",
    "Arial Unicode MS",
    "AvantGarde Bk BT",
    "BankGothic Md BT",
    "Batang",
    "Bitstream Vera Sans Mono",
    "Calibri",
    "Century",
    "Century Gothic",
    "Clarendon",
    "EUROSTILE",
    "Franklin Gothic",
    "Futura Bk BT",
    "Futura Md BT",
    "GOTHAM",
    "Gill Sans",
    "HELV",
    "Haettenschweiler",
    "Helvetica Neue",
    "Humanst521 BT",
    "Leelawadee",
    "Letter Gothic",
    "Levenim MT",
    "Lucida Bright",
    "Lucida Sans",
    "Menlo",
    "MS Mincho",
    "MS Outlook",
    "MS Reference Specialty",
    "MS UI Gothic",
    "MT Extra",
    "MYRIAD PRO",
    "Marlett",
    "Meiryo UI",
    "Microsoft Uighur",
    "Minion Pro",
    "Monotype Corsiva",
    "PMingLiU",
    "Pristina",
    "SCRIPTINA",
    "Segoe UI Light",
    "Serifa",
    "SimHei",
    "Small Fonts",
    "Staccato222 BT",
    "TRAJAN PRO",
    "Univers CE 55 Medium",
    "Vrinda",
    "ZWAdobeF"
  ];
  function getFonts() {
    return withIframe(function(_2, _a3) {
      var document2 = _a3.document;
      var holder = document2.body;
      holder.style.fontSize = textSize;
      var spansContainer = document2.createElement("div");
      var defaultWidth = {};
      var defaultHeight = {};
      var createSpan = function(fontFamily) {
        var span = document2.createElement("span");
        var style = span.style;
        style.position = "absolute";
        style.top = "0";
        style.left = "0";
        style.fontFamily = fontFamily;
        span.textContent = testString;
        spansContainer.appendChild(span);
        return span;
      };
      var createSpanWithFonts = function(fontToDetect, baseFont) {
        return createSpan("'".concat(fontToDetect, "',").concat(baseFont));
      };
      var initializeBaseFontsSpans = function() {
        return baseFonts.map(createSpan);
      };
      var initializeFontsSpans = function() {
        var spans = {};
        var _loop_1 = function(font2) {
          spans[font2] = baseFonts.map(function(baseFont) {
            return createSpanWithFonts(font2, baseFont);
          });
        };
        for (var _i = 0, fontList_1 = fontList; _i < fontList_1.length; _i++) {
          var font = fontList_1[_i];
          _loop_1(font);
        }
        return spans;
      };
      var isFontAvailable = function(fontSpans) {
        return baseFonts.some(function(baseFont, baseFontIndex) {
          return fontSpans[baseFontIndex].offsetWidth !== defaultWidth[baseFont] || fontSpans[baseFontIndex].offsetHeight !== defaultHeight[baseFont];
        });
      };
      var baseFontsSpans = initializeBaseFontsSpans();
      var fontsSpans = initializeFontsSpans();
      holder.appendChild(spansContainer);
      for (var index2 = 0; index2 < baseFonts.length; index2++) {
        defaultWidth[baseFonts[index2]] = baseFontsSpans[index2].offsetWidth;
        defaultHeight[baseFonts[index2]] = baseFontsSpans[index2].offsetHeight;
      }
      return fontList.filter(function(font) {
        return isFontAvailable(fontsSpans[font]);
      });
    });
  }
  function getPlugins() {
    var rawPlugins = navigator.plugins;
    if (!rawPlugins) {
      return void 0;
    }
    var plugins = [];
    for (var i2 = 0; i2 < rawPlugins.length; ++i2) {
      var plugin = rawPlugins[i2];
      if (!plugin) {
        continue;
      }
      var mimeTypes = [];
      for (var j2 = 0; j2 < plugin.length; ++j2) {
        var mimeType = plugin[j2];
        mimeTypes.push({
          type: mimeType.type,
          suffixes: mimeType.suffixes
        });
      }
      plugins.push({
        name: plugin.name,
        description: plugin.description,
        mimeTypes
      });
    }
    return plugins;
  }
  function getCanvasFingerprint() {
    var winding = false;
    var geometry;
    var text;
    var _a3 = makeCanvasContext(), canvas = _a3[0], context = _a3[1];
    if (!isSupported(canvas, context)) {
      geometry = text = "";
    } else {
      winding = doesSupportWinding(context);
      renderTextImage(canvas, context);
      var textImage1 = canvasToString(canvas);
      var textImage2 = canvasToString(canvas);
      if (textImage1 !== textImage2) {
        geometry = text = "unstable";
      } else {
        text = textImage1;
        renderGeometryImage(canvas, context);
        geometry = canvasToString(canvas);
      }
    }
    return { winding, geometry, text };
  }
  function makeCanvasContext() {
    var canvas = document.createElement("canvas");
    canvas.width = 1;
    canvas.height = 1;
    return [canvas, canvas.getContext("2d")];
  }
  function isSupported(canvas, context) {
    return !!(context && canvas.toDataURL);
  }
  function doesSupportWinding(context) {
    context.rect(0, 0, 10, 10);
    context.rect(2, 2, 6, 6);
    return !context.isPointInPath(5, 5, "evenodd");
  }
  function renderTextImage(canvas, context) {
    canvas.width = 240;
    canvas.height = 60;
    context.textBaseline = "alphabetic";
    context.fillStyle = "#f60";
    context.fillRect(100, 1, 62, 20);
    context.fillStyle = "#069";
    context.font = '11pt "Times New Roman"';
    var printedText = "Cwm fjordbank gly ".concat(
      String.fromCharCode(55357, 56835)
      /* 😃 */
    );
    context.fillText(printedText, 2, 15);
    context.fillStyle = "rgba(102, 204, 0, 0.2)";
    context.font = "18pt Arial";
    context.fillText(printedText, 4, 45);
  }
  function renderGeometryImage(canvas, context) {
    canvas.width = 122;
    canvas.height = 110;
    context.globalCompositeOperation = "multiply";
    for (var _i = 0, _a3 = [
      ["#f2f", 40, 40],
      ["#2ff", 80, 40],
      ["#ff2", 60, 80]
    ]; _i < _a3.length; _i++) {
      var _b2 = _a3[_i], color = _b2[0], x2 = _b2[1], y2 = _b2[2];
      context.fillStyle = color;
      context.beginPath();
      context.arc(x2, y2, 40, 0, Math.PI * 2, true);
      context.closePath();
      context.fill();
    }
    context.fillStyle = "#f9c";
    context.arc(60, 60, 60, 0, Math.PI * 2, true);
    context.arc(60, 60, 20, 0, Math.PI * 2, true);
    context.fill("evenodd");
  }
  function canvasToString(canvas) {
    return canvas.toDataURL();
  }
  function getTouchSupport() {
    var n2 = navigator;
    var maxTouchPoints = 0;
    var touchEvent;
    if (n2.maxTouchPoints !== void 0) {
      maxTouchPoints = toInt(n2.maxTouchPoints);
    } else if (n2.msMaxTouchPoints !== void 0) {
      maxTouchPoints = n2.msMaxTouchPoints;
    }
    try {
      document.createEvent("TouchEvent");
      touchEvent = true;
    } catch (_a3) {
      touchEvent = false;
    }
    var touchStart = "ontouchstart" in window;
    return {
      maxTouchPoints,
      touchEvent,
      touchStart
    };
  }
  function getOsCpu() {
    return navigator.oscpu;
  }
  function getLanguages() {
    var n2 = navigator;
    var result2 = [];
    var language = n2.language || n2.userLanguage || n2.browserLanguage || n2.systemLanguage;
    if (language !== void 0) {
      result2.push([language]);
    }
    if (Array.isArray(n2.languages)) {
      if (!(isChromium() && isChromium86OrNewer())) {
        result2.push(n2.languages);
      }
    } else if (typeof n2.languages === "string") {
      var languages = n2.languages;
      if (languages) {
        result2.push(languages.split(","));
      }
    }
    return result2;
  }
  function getColorDepth() {
    return window.screen.colorDepth;
  }
  function getDeviceMemory() {
    return replaceNaN(toFloat(navigator.deviceMemory), void 0);
  }
  function getScreenResolution() {
    var s2 = screen;
    var parseDimension = function(value) {
      return replaceNaN(toInt(value), null);
    };
    var dimensions = [parseDimension(s2.width), parseDimension(s2.height)];
    dimensions.sort().reverse();
    return dimensions;
  }
  var screenFrameCheckInterval = 2500;
  var roundingPrecision = 10;
  var screenFrameBackup;
  var screenFrameSizeTimeoutId;
  function watchScreenFrame() {
    if (screenFrameSizeTimeoutId !== void 0) {
      return;
    }
    var checkScreenFrame = function() {
      var frameSize = getCurrentScreenFrame();
      if (isFrameSizeNull(frameSize)) {
        screenFrameSizeTimeoutId = setTimeout(checkScreenFrame, screenFrameCheckInterval);
      } else {
        screenFrameBackup = frameSize;
        screenFrameSizeTimeoutId = void 0;
      }
    };
    checkScreenFrame();
  }
  function getScreenFrame() {
    var _this = this;
    watchScreenFrame();
    return function() {
      return __awaiter(_this, void 0, void 0, function() {
        var frameSize;
        return __generator(this, function(_a3) {
          switch (_a3.label) {
            case 0:
              frameSize = getCurrentScreenFrame();
              if (!isFrameSizeNull(frameSize)) return [3, 2];
              if (screenFrameBackup) {
                return [2, __spreadArray([], screenFrameBackup, true)];
              }
              if (!getFullscreenElement()) return [3, 2];
              return [4, exitFullscreen()];
            case 1:
              _a3.sent();
              frameSize = getCurrentScreenFrame();
              _a3.label = 2;
            case 2:
              if (!isFrameSizeNull(frameSize)) {
                screenFrameBackup = frameSize;
              }
              return [2, frameSize];
          }
        });
      });
    };
  }
  function getRoundedScreenFrame() {
    var _this = this;
    var screenFrameGetter = getScreenFrame();
    return function() {
      return __awaiter(_this, void 0, void 0, function() {
        var frameSize, processSize;
        return __generator(this, function(_a3) {
          switch (_a3.label) {
            case 0:
              return [4, screenFrameGetter()];
            case 1:
              frameSize = _a3.sent();
              processSize = function(sideSize) {
                return sideSize === null ? null : round(sideSize, roundingPrecision);
              };
              return [2, [processSize(frameSize[0]), processSize(frameSize[1]), processSize(frameSize[2]), processSize(frameSize[3])]];
          }
        });
      });
    };
  }
  function getCurrentScreenFrame() {
    var s2 = screen;
    return [
      replaceNaN(toFloat(s2.availTop), null),
      replaceNaN(toFloat(s2.width) - toFloat(s2.availWidth) - replaceNaN(toFloat(s2.availLeft), 0), null),
      replaceNaN(toFloat(s2.height) - toFloat(s2.availHeight) - replaceNaN(toFloat(s2.availTop), 0), null),
      replaceNaN(toFloat(s2.availLeft), null)
    ];
  }
  function isFrameSizeNull(frameSize) {
    for (var i2 = 0; i2 < 4; ++i2) {
      if (frameSize[i2]) {
        return false;
      }
    }
    return true;
  }
  function getHardwareConcurrency() {
    return replaceNaN(toInt(navigator.hardwareConcurrency), void 0);
  }
  function getTimezone() {
    var _a3;
    var DateTimeFormat = (_a3 = window.Intl) === null || _a3 === void 0 ? void 0 : _a3.DateTimeFormat;
    if (DateTimeFormat) {
      var timezone = new DateTimeFormat().resolvedOptions().timeZone;
      if (timezone) {
        return timezone;
      }
    }
    var offset = -getTimezoneOffset();
    return "UTC".concat(offset >= 0 ? "+" : "").concat(Math.abs(offset));
  }
  function getTimezoneOffset() {
    var currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    return Math.max(
      // `getTimezoneOffset` returns a number as a string in some unidentified cases
      toFloat(new Date(currentYear, 0, 1).getTimezoneOffset()),
      toFloat(new Date(currentYear, 6, 1).getTimezoneOffset())
    );
  }
  function getSessionStorage() {
    try {
      return !!window.sessionStorage;
    } catch (error) {
      return true;
    }
  }
  function getLocalStorage() {
    try {
      return !!window.localStorage;
    } catch (e2) {
      return true;
    }
  }
  function getIndexedDB() {
    if (isTrident() || isEdgeHTML()) {
      return void 0;
    }
    try {
      return !!window.indexedDB;
    } catch (e2) {
      return true;
    }
  }
  function getOpenDatabase() {
    return !!window.openDatabase;
  }
  function getCpuClass() {
    return navigator.cpuClass;
  }
  function getPlatform() {
    var platform = navigator.platform;
    if (platform === "MacIntel") {
      if (isWebKit() && !isDesktopSafari()) {
        return isIPad() ? "iPad" : "iPhone";
      }
    }
    return platform;
  }
  function getVendor() {
    return navigator.vendor || "";
  }
  function getVendorFlavors() {
    var flavors = [];
    for (var _i = 0, _a3 = [
      // Blink and some browsers on iOS
      "chrome",
      // Safari on macOS
      "safari",
      // Chrome on iOS (checked in 85 on 13 and 87 on 14)
      "__crWeb",
      "__gCrWeb",
      // Yandex Browser on iOS, macOS and Android (checked in 21.2 on iOS 14, macOS and Android)
      "yandex",
      // Yandex Browser on iOS (checked in 21.2 on 14)
      "__yb",
      "__ybro",
      // Firefox on iOS (checked in 32 on 14)
      "__firefox__",
      // Edge on iOS (checked in 46 on 14)
      "__edgeTrackingPreventionStatistics",
      "webkit",
      // Opera Touch on iOS (checked in 2.6 on 14)
      "oprt",
      // Samsung Internet on Android (checked in 11.1)
      "samsungAr",
      // UC Browser on Android (checked in 12.10 and 13.0)
      "ucweb",
      "UCShellJava",
      // Puffin on Android (checked in 9.0)
      "puffinDevice"
      // UC on iOS and Opera on Android have no specific global variables
      // Edge for Android isn't checked
    ]; _i < _a3.length; _i++) {
      var key = _a3[_i];
      var value = window[key];
      if (value && typeof value === "object") {
        flavors.push(key);
      }
    }
    return flavors.sort();
  }
  function areCookiesEnabled() {
    var d2 = document;
    try {
      d2.cookie = "cookietest=1; SameSite=Strict;";
      var result2 = d2.cookie.indexOf("cookietest=") !== -1;
      d2.cookie = "cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT";
      return result2;
    } catch (e2) {
      return false;
    }
  }
  function getFilters() {
    var fromB64 = atob;
    return {
      abpIndo: [
        "#Iklan-Melayang",
        "#Kolom-Iklan-728",
        "#SidebarIklan-wrapper",
        '[title="ALIENBOLA" i]',
        fromB64("I0JveC1CYW5uZXItYWRz")
      ],
      abpvn: [".quangcao", "#mobileCatfish", fromB64("LmNsb3NlLWFkcw=="), '[id^="bn_bottom_fixed_"]', "#pmadv"],
      adBlockFinland: [
        ".mainostila",
        fromB64("LnNwb25zb3JpdA=="),
        ".ylamainos",
        fromB64("YVtocmVmKj0iL2NsaWNrdGhyZ2guYXNwPyJd"),
        fromB64("YVtocmVmXj0iaHR0cHM6Ly9hcHAucmVhZHBlYWsuY29tL2FkcyJd")
      ],
      adBlockPersian: [
        "#navbar_notice_50",
        ".kadr",
        'TABLE[width="140px"]',
        "#divAgahi",
        fromB64("YVtocmVmXj0iaHR0cDovL2cxLnYuZndtcm0ubmV0L2FkLyJd")
      ],
      adBlockWarningRemoval: [
        "#adblock-honeypot",
        ".adblocker-root",
        ".wp_adblock_detect",
        fromB64("LmhlYWRlci1ibG9ja2VkLWFk"),
        fromB64("I2FkX2Jsb2NrZXI=")
      ],
      adGuardAnnoyances: [
        ".hs-sosyal",
        "#cookieconsentdiv",
        'div[class^="app_gdpr"]',
        ".as-oil",
        '[data-cypress="soft-push-notification-modal"]'
      ],
      adGuardBase: [
        ".BetterJsPopOverlay",
        fromB64("I2FkXzMwMFgyNTA="),
        fromB64("I2Jhbm5lcmZsb2F0MjI="),
        fromB64("I2NhbXBhaWduLWJhbm5lcg=="),
        fromB64("I0FkLUNvbnRlbnQ=")
      ],
      adGuardChinese: [
        fromB64("LlppX2FkX2FfSA=="),
        fromB64("YVtocmVmKj0iLmh0aGJldDM0LmNvbSJd"),
        "#widget-quan",
        fromB64("YVtocmVmKj0iLzg0OTkyMDIwLnh5eiJd"),
        fromB64("YVtocmVmKj0iLjE5NTZobC5jb20vIl0=")
      ],
      adGuardFrench: [
        "#pavePub",
        fromB64("LmFkLWRlc2t0b3AtcmVjdGFuZ2xl"),
        ".mobile_adhesion",
        ".widgetadv",
        fromB64("LmFkc19iYW4=")
      ],
      adGuardGerman: ['aside[data-portal-id="leaderboard"]'],
      adGuardJapanese: [
        "#kauli_yad_1",
        fromB64("YVtocmVmXj0iaHR0cDovL2FkMi50cmFmZmljZ2F0ZS5uZXQvIl0="),
        fromB64("Ll9wb3BJbl9pbmZpbml0ZV9hZA=="),
        fromB64("LmFkZ29vZ2xl"),
        fromB64("Ll9faXNib29zdFJldHVybkFk")
      ],
      adGuardMobile: [
        fromB64("YW1wLWF1dG8tYWRz"),
        fromB64("LmFtcF9hZA=="),
        'amp-embed[type="24smi"]',
        "#mgid_iframe1",
        fromB64("I2FkX2ludmlld19hcmVh")
      ],
      adGuardRussian: [
        fromB64("YVtocmVmXj0iaHR0cHM6Ly9hZC5sZXRtZWFkcy5jb20vIl0="),
        fromB64("LnJlY2xhbWE="),
        'div[id^="smi2adblock"]',
        fromB64("ZGl2W2lkXj0iQWRGb3hfYmFubmVyXyJd"),
        "#psyduckpockeball"
      ],
      adGuardSocial: [
        fromB64("YVtocmVmXj0iLy93d3cuc3R1bWJsZXVwb24uY29tL3N1Ym1pdD91cmw9Il0="),
        fromB64("YVtocmVmXj0iLy90ZWxlZ3JhbS5tZS9zaGFyZS91cmw/Il0="),
        ".etsy-tweet",
        "#inlineShare",
        ".popup-social"
      ],
      adGuardSpanishPortuguese: ["#barraPublicidade", "#Publicidade", "#publiEspecial", "#queTooltip", ".cnt-publi"],
      adGuardTrackingProtection: [
        "#qoo-counter",
        fromB64("YVtocmVmXj0iaHR0cDovL2NsaWNrLmhvdGxvZy5ydS8iXQ=="),
        fromB64("YVtocmVmXj0iaHR0cDovL2hpdGNvdW50ZXIucnUvdG9wL3N0YXQucGhwIl0="),
        fromB64("YVtocmVmXj0iaHR0cDovL3RvcC5tYWlsLnJ1L2p1bXAiXQ=="),
        "#top100counter"
      ],
      adGuardTurkish: [
        "#backkapat",
        fromB64("I3Jla2xhbWk="),
        fromB64("YVtocmVmXj0iaHR0cDovL2Fkc2Vydi5vbnRlay5jb20udHIvIl0="),
        fromB64("YVtocmVmXj0iaHR0cDovL2l6bGVuemkuY29tL2NhbXBhaWduLyJd"),
        fromB64("YVtocmVmXj0iaHR0cDovL3d3dy5pbnN0YWxsYWRzLm5ldC8iXQ==")
      ],
      bulgarian: [fromB64("dGQjZnJlZW5ldF90YWJsZV9hZHM="), "#ea_intext_div", ".lapni-pop-over", "#xenium_hot_offers"],
      easyList: [
        ".yb-floorad",
        fromB64("LndpZGdldF9wb19hZHNfd2lkZ2V0"),
        fromB64("LnRyYWZmaWNqdW5reS1hZA=="),
        ".textad_headline",
        fromB64("LnNwb25zb3JlZC10ZXh0LWxpbmtz")
      ],
      easyListChina: [
        fromB64("LmFwcGd1aWRlLXdyYXBbb25jbGljayo9ImJjZWJvcy5jb20iXQ=="),
        fromB64("LmZyb250cGFnZUFkdk0="),
        "#taotaole",
        "#aafoot.top_box",
        ".cfa_popup"
      ],
      easyListCookie: [
        ".ezmob-footer",
        ".cc-CookieWarning",
        "[data-cookie-number]",
        fromB64("LmF3LWNvb2tpZS1iYW5uZXI="),
        ".sygnal24-gdpr-modal-wrap"
      ],
      easyListCzechSlovak: [
        "#onlajny-stickers",
        fromB64("I3Jla2xhbW5pLWJveA=="),
        fromB64("LnJla2xhbWEtbWVnYWJvYXJk"),
        ".sklik",
        fromB64("W2lkXj0ic2tsaWtSZWtsYW1hIl0=")
      ],
      easyListDutch: [
        fromB64("I2FkdmVydGVudGll"),
        fromB64("I3ZpcEFkbWFya3RCYW5uZXJCbG9jaw=="),
        ".adstekst",
        fromB64("YVtocmVmXj0iaHR0cHM6Ly94bHR1YmUubmwvY2xpY2svIl0="),
        "#semilo-lrectangle"
      ],
      easyListGermany: [
        "#SSpotIMPopSlider",
        fromB64("LnNwb25zb3JsaW5rZ3J1ZW4="),
        fromB64("I3dlcmJ1bmdza3k="),
        fromB64("I3Jla2xhbWUtcmVjaHRzLW1pdHRl"),
        fromB64("YVtocmVmXj0iaHR0cHM6Ly9iZDc0Mi5jb20vIl0=")
      ],
      easyListItaly: [
        fromB64("LmJveF9hZHZfYW5udW5jaQ=="),
        ".sb-box-pubbliredazionale",
        fromB64("YVtocmVmXj0iaHR0cDovL2FmZmlsaWF6aW9uaWFkcy5zbmFpLml0LyJd"),
        fromB64("YVtocmVmXj0iaHR0cHM6Ly9hZHNlcnZlci5odG1sLml0LyJd"),
        fromB64("YVtocmVmXj0iaHR0cHM6Ly9hZmZpbGlhemlvbmlhZHMuc25haS5pdC8iXQ==")
      ],
      easyListLithuania: [
        fromB64("LnJla2xhbW9zX3RhcnBhcw=="),
        fromB64("LnJla2xhbW9zX251b3JvZG9z"),
        fromB64("aW1nW2FsdD0iUmVrbGFtaW5pcyBza3lkZWxpcyJd"),
        fromB64("aW1nW2FsdD0iRGVkaWt1b3RpLmx0IHNlcnZlcmlhaSJd"),
        fromB64("aW1nW2FsdD0iSG9zdGluZ2FzIFNlcnZlcmlhaS5sdCJd")
      ],
      estonian: [fromB64("QVtocmVmKj0iaHR0cDovL3BheTRyZXN1bHRzMjQuZXUiXQ==")],
      fanboyAnnoyances: ["#ac-lre-player", ".navigate-to-top", "#subscribe_popup", ".newsletter_holder", "#back-top"],
      fanboyAntiFacebook: [".util-bar-module-firefly-visible"],
      fanboyEnhancedTrackers: [
        ".open.pushModal",
        "#issuem-leaky-paywall-articles-zero-remaining-nag",
        "#sovrn_container",
        'div[class$="-hide"][zoompage-fontsize][style="display: block;"]',
        ".BlockNag__Card"
      ],
      fanboySocial: ["#FollowUs", "#meteored_share", "#social_follow", ".article-sharer", ".community__social-desc"],
      frellwitSwedish: [
        fromB64("YVtocmVmKj0iY2FzaW5vcHJvLnNlIl1bdGFyZ2V0PSJfYmxhbmsiXQ=="),
        fromB64("YVtocmVmKj0iZG9rdG9yLXNlLm9uZWxpbmsubWUiXQ=="),
        "article.category-samarbete",
        fromB64("ZGl2LmhvbGlkQWRz"),
        "ul.adsmodern"
      ],
      greekAdBlock: [
        fromB64("QVtocmVmKj0iYWRtYW4ub3RlbmV0LmdyL2NsaWNrPyJd"),
        fromB64("QVtocmVmKj0iaHR0cDovL2F4aWFiYW5uZXJzLmV4b2R1cy5nci8iXQ=="),
        fromB64("QVtocmVmKj0iaHR0cDovL2ludGVyYWN0aXZlLmZvcnRobmV0LmdyL2NsaWNrPyJd"),
        "DIV.agores300",
        "TABLE.advright"
      ],
      hungarian: [
        "#cemp_doboz",
        ".optimonk-iframe-container",
        fromB64("LmFkX19tYWlu"),
        fromB64("W2NsYXNzKj0iR29vZ2xlQWRzIl0="),
        "#hirdetesek_box"
      ],
      iDontCareAboutCookies: [
        '.alert-info[data-block-track*="CookieNotice"]',
        ".ModuleTemplateCookieIndicator",
        ".o--cookies--container",
        "#cookies-policy-sticky",
        "#stickyCookieBar"
      ],
      icelandicAbp: [fromB64("QVtocmVmXj0iL2ZyYW1ld29yay9yZXNvdXJjZXMvZm9ybXMvYWRzLmFzcHgiXQ==")],
      latvian: [
        fromB64("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMjBweDsgaGVpZ2h0OiA0MHB4OyBvdmVyZmxvdzogaGlkZGVuOyBwb3NpdGlvbjogcmVsYXRpdmU7Il0="),
        fromB64("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiA4OHB4OyBoZWlnaHQ6IDMxcHg7IG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiByZWxhdGl2ZTsiXQ==")
      ],
      listKr: [
        fromB64("YVtocmVmKj0iLy9hZC5wbGFuYnBsdXMuY28ua3IvIl0="),
        fromB64("I2xpdmVyZUFkV3JhcHBlcg=="),
        fromB64("YVtocmVmKj0iLy9hZHYuaW1hZHJlcC5jby5rci8iXQ=="),
        fromB64("aW5zLmZhc3R2aWV3LWFk"),
        ".revenue_unit_item.dable"
      ],
      listeAr: [
        fromB64("LmdlbWluaUxCMUFk"),
        ".right-and-left-sponsers",
        fromB64("YVtocmVmKj0iLmFmbGFtLmluZm8iXQ=="),
        fromB64("YVtocmVmKj0iYm9vcmFxLm9yZyJd"),
        fromB64("YVtocmVmKj0iZHViaXp6bGUuY29tL2FyLz91dG1fc291cmNlPSJd")
      ],
      listeFr: [
        fromB64("YVtocmVmXj0iaHR0cDovL3Byb21vLnZhZG9yLmNvbS8iXQ=="),
        fromB64("I2FkY29udGFpbmVyX3JlY2hlcmNoZQ=="),
        fromB64("YVtocmVmKj0id2Vib3JhbWEuZnIvZmNnaS1iaW4vIl0="),
        ".site-pub-interstitiel",
        'div[id^="crt-"][data-criteo-id]'
      ],
      officialPolish: [
        "#ceneo-placeholder-ceneo-12",
        fromB64("W2hyZWZePSJodHRwczovL2FmZi5zZW5kaHViLnBsLyJd"),
        fromB64("YVtocmVmXj0iaHR0cDovL2Fkdm1hbmFnZXIudGVjaGZ1bi5wbC9yZWRpcmVjdC8iXQ=="),
        fromB64("YVtocmVmXj0iaHR0cDovL3d3dy50cml6ZXIucGwvP3V0bV9zb3VyY2UiXQ=="),
        fromB64("ZGl2I3NrYXBpZWNfYWQ=")
      ],
      ro: [
        fromB64("YVtocmVmXj0iLy9hZmZ0cmsuYWx0ZXgucm8vQ291bnRlci9DbGljayJd"),
        fromB64("YVtocmVmXj0iaHR0cHM6Ly9ibGFja2ZyaWRheXNhbGVzLnJvL3Ryay9zaG9wLyJd"),
        fromB64("YVtocmVmXj0iaHR0cHM6Ly9ldmVudC4ycGVyZm9ybWFudC5jb20vZXZlbnRzL2NsaWNrIl0="),
        fromB64("YVtocmVmXj0iaHR0cHM6Ly9sLnByb2ZpdHNoYXJlLnJvLyJd"),
        'a[href^="/url/"]'
      ],
      ruAd: [
        fromB64("YVtocmVmKj0iLy9mZWJyYXJlLnJ1LyJd"),
        fromB64("YVtocmVmKj0iLy91dGltZy5ydS8iXQ=="),
        fromB64("YVtocmVmKj0iOi8vY2hpa2lkaWtpLnJ1Il0="),
        "#pgeldiz",
        ".yandex-rtb-block"
      ],
      thaiAds: [
        "a[href*=macau-uta-popup]",
        fromB64("I2Fkcy1nb29nbGUtbWlkZGxlX3JlY3RhbmdsZS1ncm91cA=="),
        fromB64("LmFkczMwMHM="),
        ".bumq",
        ".img-kosana"
      ],
      webAnnoyancesUltralist: [
        "#mod-social-share-2",
        "#social-tools",
        fromB64("LmN0cGwtZnVsbGJhbm5lcg=="),
        ".zergnet-recommend",
        ".yt.btn-link.btn-md.btn"
      ]
    };
  }
  function getDomBlockers(_a3) {
    var _b2 = _a3 === void 0 ? {} : _a3, debug = _b2.debug;
    return __awaiter(this, void 0, void 0, function() {
      var filters, filterNames, allSelectors, blockedSelectors, activeBlockers;
      var _c;
      return __generator(this, function(_d) {
        switch (_d.label) {
          case 0:
            if (!isApplicable()) {
              return [2, void 0];
            }
            filters = getFilters();
            filterNames = Object.keys(filters);
            allSelectors = (_c = []).concat.apply(_c, filterNames.map(function(filterName) {
              return filters[filterName];
            }));
            return [4, getBlockedSelectors(allSelectors)];
          case 1:
            blockedSelectors = _d.sent();
            if (debug) {
              printDebug(filters, blockedSelectors);
            }
            activeBlockers = filterNames.filter(function(filterName) {
              var selectors = filters[filterName];
              var blockedCount = countTruthy(selectors.map(function(selector) {
                return blockedSelectors[selector];
              }));
              return blockedCount > selectors.length * 0.6;
            });
            activeBlockers.sort();
            return [2, activeBlockers];
        }
      });
    });
  }
  function isApplicable() {
    return isWebKit() || isAndroid();
  }
  function getBlockedSelectors(selectors) {
    var _a3;
    return __awaiter(this, void 0, void 0, function() {
      var d2, root2, elements, blockedSelectors, i2, element, holder, i2;
      return __generator(this, function(_b2) {
        switch (_b2.label) {
          case 0:
            d2 = document;
            root2 = d2.createElement("div");
            elements = new Array(selectors.length);
            blockedSelectors = {};
            forceShow(root2);
            for (i2 = 0; i2 < selectors.length; ++i2) {
              element = selectorToElement(selectors[i2]);
              if (element.tagName === "DIALOG") {
                element.show();
              }
              holder = d2.createElement("div");
              forceShow(holder);
              holder.appendChild(element);
              root2.appendChild(holder);
              elements[i2] = element;
            }
            _b2.label = 1;
          case 1:
            if (!!d2.body) return [3, 3];
            return [4, wait(50)];
          case 2:
            _b2.sent();
            return [3, 1];
          case 3:
            d2.body.appendChild(root2);
            try {
              for (i2 = 0; i2 < selectors.length; ++i2) {
                if (!elements[i2].offsetParent) {
                  blockedSelectors[selectors[i2]] = true;
                }
              }
            } finally {
              (_a3 = root2.parentNode) === null || _a3 === void 0 ? void 0 : _a3.removeChild(root2);
            }
            return [2, blockedSelectors];
        }
      });
    });
  }
  function forceShow(element) {
    element.style.setProperty("display", "block", "important");
  }
  function printDebug(filters, blockedSelectors) {
    var message = "DOM blockers debug:\n```";
    for (var _i = 0, _a3 = Object.keys(filters); _i < _a3.length; _i++) {
      var filterName = _a3[_i];
      message += "\n".concat(filterName, ":");
      for (var _b2 = 0, _c = filters[filterName]; _b2 < _c.length; _b2++) {
        var selector = _c[_b2];
        message += "\n  ".concat(blockedSelectors[selector] ? "🚫" : "➡️", " ").concat(selector);
      }
    }
    console.log("".concat(message, "\n```"));
  }
  function getColorGamut() {
    for (var _i = 0, _a3 = ["rec2020", "p3", "srgb"]; _i < _a3.length; _i++) {
      var gamut = _a3[_i];
      if (matchMedia("(color-gamut: ".concat(gamut, ")")).matches) {
        return gamut;
      }
    }
    return void 0;
  }
  function areColorsInverted() {
    if (doesMatch$4("inverted")) {
      return true;
    }
    if (doesMatch$4("none")) {
      return false;
    }
    return void 0;
  }
  function doesMatch$4(value) {
    return matchMedia("(inverted-colors: ".concat(value, ")")).matches;
  }
  function areColorsForced() {
    if (doesMatch$3("active")) {
      return true;
    }
    if (doesMatch$3("none")) {
      return false;
    }
    return void 0;
  }
  function doesMatch$3(value) {
    return matchMedia("(forced-colors: ".concat(value, ")")).matches;
  }
  var maxValueToCheck = 100;
  function getMonochromeDepth() {
    if (!matchMedia("(min-monochrome: 0)").matches) {
      return void 0;
    }
    for (var i2 = 0; i2 <= maxValueToCheck; ++i2) {
      if (matchMedia("(max-monochrome: ".concat(i2, ")")).matches) {
        return i2;
      }
    }
    throw new Error("Too high value");
  }
  function getContrastPreference() {
    if (doesMatch$2("no-preference")) {
      return 0;
    }
    if (doesMatch$2("high") || doesMatch$2("more")) {
      return 1;
    }
    if (doesMatch$2("low") || doesMatch$2("less")) {
      return -1;
    }
    if (doesMatch$2("forced")) {
      return 10;
    }
    return void 0;
  }
  function doesMatch$2(value) {
    return matchMedia("(prefers-contrast: ".concat(value, ")")).matches;
  }
  function isMotionReduced() {
    if (doesMatch$1("reduce")) {
      return true;
    }
    if (doesMatch$1("no-preference")) {
      return false;
    }
    return void 0;
  }
  function doesMatch$1(value) {
    return matchMedia("(prefers-reduced-motion: ".concat(value, ")")).matches;
  }
  function isHDR() {
    if (doesMatch("high")) {
      return true;
    }
    if (doesMatch("standard")) {
      return false;
    }
    return void 0;
  }
  function doesMatch(value) {
    return matchMedia("(dynamic-range: ".concat(value, ")")).matches;
  }
  var M$1 = Math;
  var fallbackFn = function() {
    return 0;
  };
  function getMathFingerprint() {
    var acos = M$1.acos || fallbackFn;
    var acosh = M$1.acosh || fallbackFn;
    var asin = M$1.asin || fallbackFn;
    var asinh = M$1.asinh || fallbackFn;
    var atanh = M$1.atanh || fallbackFn;
    var atan = M$1.atan || fallbackFn;
    var sin = M$1.sin || fallbackFn;
    var sinh = M$1.sinh || fallbackFn;
    var cos = M$1.cos || fallbackFn;
    var cosh = M$1.cosh || fallbackFn;
    var tan = M$1.tan || fallbackFn;
    var tanh = M$1.tanh || fallbackFn;
    var exp = M$1.exp || fallbackFn;
    var expm1 = M$1.expm1 || fallbackFn;
    var log1p = M$1.log1p || fallbackFn;
    var powPI = function(value) {
      return M$1.pow(M$1.PI, value);
    };
    var acoshPf = function(value) {
      return M$1.log(value + M$1.sqrt(value * value - 1));
    };
    var asinhPf = function(value) {
      return M$1.log(value + M$1.sqrt(value * value + 1));
    };
    var atanhPf = function(value) {
      return M$1.log((1 + value) / (1 - value)) / 2;
    };
    var sinhPf = function(value) {
      return M$1.exp(value) - 1 / M$1.exp(value) / 2;
    };
    var coshPf = function(value) {
      return (M$1.exp(value) + 1 / M$1.exp(value)) / 2;
    };
    var expm1Pf = function(value) {
      return M$1.exp(value) - 1;
    };
    var tanhPf = function(value) {
      return (M$1.exp(2 * value) - 1) / (M$1.exp(2 * value) + 1);
    };
    var log1pPf = function(value) {
      return M$1.log(1 + value);
    };
    return {
      acos: acos(0.12312423423423424),
      acosh: acosh(1e308),
      acoshPf: acoshPf(1e154),
      asin: asin(0.12312423423423424),
      asinh: asinh(1),
      asinhPf: asinhPf(1),
      atanh: atanh(0.5),
      atanhPf: atanhPf(0.5),
      atan: atan(0.5),
      sin: sin(-1e300),
      sinh: sinh(1),
      sinhPf: sinhPf(1),
      cos: cos(10.000000000123),
      cosh: cosh(1),
      coshPf: coshPf(1),
      tan: tan(-1e300),
      tanh: tanh(1),
      tanhPf: tanhPf(1),
      exp: exp(1),
      expm1: expm1(1),
      expm1Pf: expm1Pf(1),
      log1p: log1p(10),
      log1pPf: log1pPf(10),
      powPI: powPI(-100)
    };
  }
  var defaultText = "mmMwWLliI0fiflO&1";
  var presets = {
    /**
     * The default font. User can change it in desktop Chrome, desktop Firefox, IE 11,
     * Android Chrome (but only when the size is ≥ than the default) and Android Firefox.
     */
    default: [],
    /** OS font on macOS. User can change its size and weight. Applies after Safari restart. */
    apple: [{ font: "-apple-system-body" }],
    /** User can change it in desktop Chrome and desktop Firefox. */
    serif: [{ fontFamily: "serif" }],
    /** User can change it in desktop Chrome and desktop Firefox. */
    sans: [{ fontFamily: "sans-serif" }],
    /** User can change it in desktop Chrome and desktop Firefox. */
    mono: [{ fontFamily: "monospace" }],
    /**
     * Check the smallest allowed font size. User can change it in desktop Chrome, desktop Firefox and desktop Safari.
     * The height can be 0 in Chrome on a retina display.
     */
    min: [{ fontSize: "1px" }],
    /** Tells one OS from another in desktop Chrome. */
    system: [{ fontFamily: "system-ui" }]
  };
  function getFontPreferences() {
    return withNaturalFonts(function(document2, container2) {
      var elements = {};
      var sizes = {};
      for (var _i = 0, _a3 = Object.keys(presets); _i < _a3.length; _i++) {
        var key = _a3[_i];
        var _b2 = presets[key], _c = _b2[0], style = _c === void 0 ? {} : _c, _d = _b2[1], text = _d === void 0 ? defaultText : _d;
        var element = document2.createElement("span");
        element.textContent = text;
        element.style.whiteSpace = "nowrap";
        for (var _e = 0, _f = Object.keys(style); _e < _f.length; _e++) {
          var name_1 = _f[_e];
          var value = style[name_1];
          if (value !== void 0) {
            element.style[name_1] = value;
          }
        }
        elements[key] = element;
        container2.appendChild(document2.createElement("br"));
        container2.appendChild(element);
      }
      for (var _g = 0, _h = Object.keys(presets); _g < _h.length; _g++) {
        var key = _h[_g];
        sizes[key] = elements[key].getBoundingClientRect().width;
      }
      return sizes;
    });
  }
  function withNaturalFonts(action, containerWidthPx) {
    if (containerWidthPx === void 0) {
      containerWidthPx = 4e3;
    }
    return withIframe(function(_2, iframeWindow) {
      var iframeDocument = iframeWindow.document;
      var iframeBody = iframeDocument.body;
      var bodyStyle = iframeBody.style;
      bodyStyle.width = "".concat(containerWidthPx, "px");
      bodyStyle.webkitTextSizeAdjust = bodyStyle.textSizeAdjust = "none";
      if (isChromium()) {
        iframeBody.style.zoom = "".concat(1 / iframeWindow.devicePixelRatio);
      } else if (isWebKit()) {
        iframeBody.style.zoom = "reset";
      }
      var linesOfText = iframeDocument.createElement("div");
      linesOfText.textContent = __spreadArray([], Array(containerWidthPx / 20 << 0), true).map(function() {
        return "word";
      }).join(" ");
      iframeBody.appendChild(linesOfText);
      return action(iframeDocument, iframeBody);
    }, '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">');
  }
  function getVideoCard() {
    var _a3;
    var canvas = document.createElement("canvas");
    var gl = (_a3 = canvas.getContext("webgl")) !== null && _a3 !== void 0 ? _a3 : canvas.getContext("experimental-webgl");
    if (gl && "getExtension" in gl) {
      var debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
      if (debugInfo) {
        return {
          vendor: (gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL) || "").toString(),
          renderer: (gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) || "").toString()
        };
      }
    }
    return void 0;
  }
  function isPdfViewerEnabled() {
    return navigator.pdfViewerEnabled;
  }
  function getArchitecture() {
    var f2 = new Float32Array(1);
    var u8 = new Uint8Array(f2.buffer);
    f2[0] = Infinity;
    f2[0] = f2[0] - f2[0];
    return u8[3];
  }
  var sources = {
    // READ FIRST:
    // See https://github.com/fingerprintjs/fingerprintjs/blob/master/contributing.md#how-to-make-an-entropy-source
    // to learn how entropy source works and how to make your own.
    // The sources run in this exact order.
    // The asynchronous sources are at the start to run in parallel with other sources.
    fonts: getFonts,
    domBlockers: getDomBlockers,
    fontPreferences: getFontPreferences,
    audio: getAudioFingerprint,
    screenFrame: getRoundedScreenFrame,
    osCpu: getOsCpu,
    languages: getLanguages,
    colorDepth: getColorDepth,
    deviceMemory: getDeviceMemory,
    screenResolution: getScreenResolution,
    hardwareConcurrency: getHardwareConcurrency,
    timezone: getTimezone,
    sessionStorage: getSessionStorage,
    localStorage: getLocalStorage,
    indexedDB: getIndexedDB,
    openDatabase: getOpenDatabase,
    cpuClass: getCpuClass,
    platform: getPlatform,
    plugins: getPlugins,
    canvas: getCanvasFingerprint,
    touchSupport: getTouchSupport,
    vendor: getVendor,
    vendorFlavors: getVendorFlavors,
    cookiesEnabled: areCookiesEnabled,
    colorGamut: getColorGamut,
    invertedColors: areColorsInverted,
    forcedColors: areColorsForced,
    monochrome: getMonochromeDepth,
    contrast: getContrastPreference,
    reducedMotion: isMotionReduced,
    hdr: isHDR,
    math: getMathFingerprint,
    videoCard: getVideoCard,
    pdfViewerEnabled: isPdfViewerEnabled,
    architecture: getArchitecture
  };
  function loadBuiltinSources(options2) {
    return loadSources(sources, options2, []);
  }
  var commentTemplate = "$ if upgrade to Pro: https://fpjs.dev/pro";
  function getConfidence(components) {
    var openConfidenceScore = getOpenConfidenceScore(components);
    var proConfidenceScore = deriveProConfidenceScore(openConfidenceScore);
    return { score: openConfidenceScore, comment: commentTemplate.replace(/\$/g, "".concat(proConfidenceScore)) };
  }
  function getOpenConfidenceScore(components) {
    if (isAndroid()) {
      return 0.4;
    }
    if (isWebKit()) {
      return isDesktopSafari() ? 0.5 : 0.3;
    }
    var platform = components.platform.value || "";
    if (/^Win/.test(platform)) {
      return 0.6;
    }
    if (/^Mac/.test(platform)) {
      return 0.5;
    }
    return 0.7;
  }
  function deriveProConfidenceScore(openConfidenceScore) {
    return round(0.99 + 0.01 * openConfidenceScore, 1e-4);
  }
  function componentsToCanonicalString(components) {
    var result2 = "";
    for (var _i = 0, _a3 = Object.keys(components).sort(); _i < _a3.length; _i++) {
      var componentKey = _a3[_i];
      var component = components[componentKey];
      var value = component.error ? "error" : JSON.stringify(component.value);
      result2 += "".concat(result2 ? "|" : "").concat(componentKey.replace(/([:|\\])/g, "\\$1"), ":").concat(value);
    }
    return result2;
  }
  function componentsToDebugString(components) {
    return JSON.stringify(components, function(_key, value) {
      if (value instanceof Error) {
        return errorToObject(value);
      }
      return value;
    }, 2);
  }
  function hashComponents(components) {
    return x64hash128(componentsToCanonicalString(components));
  }
  function makeLazyGetResult(components) {
    var visitorIdCache;
    var confidence = getConfidence(components);
    return {
      get visitorId() {
        if (visitorIdCache === void 0) {
          visitorIdCache = hashComponents(this.components);
        }
        return visitorIdCache;
      },
      set visitorId(visitorId) {
        visitorIdCache = visitorId;
      },
      confidence,
      components,
      version: version$1
    };
  }
  function prepareForSources(delayFallback) {
    if (delayFallback === void 0) {
      delayFallback = 50;
    }
    return requestIdleCallbackIfAvailable(delayFallback, delayFallback * 2);
  }
  function makeAgent(getComponents, debug) {
    var creationTime = Date.now();
    return {
      get: function(options2) {
        return __awaiter(this, void 0, void 0, function() {
          var startTime, components, result2;
          return __generator(this, function(_a3) {
            switch (_a3.label) {
              case 0:
                startTime = Date.now();
                return [4, getComponents()];
              case 1:
                components = _a3.sent();
                result2 = makeLazyGetResult(components);
                if (debug || (options2 === null || options2 === void 0 ? void 0 : options2.debug)) {
                  console.log("Copy the text below to get the debug data:\n\n```\nversion: ".concat(result2.version, "\nuserAgent: ").concat(navigator.userAgent, "\ntimeBetweenLoadAndGet: ").concat(startTime - creationTime, "\nvisitorId: ").concat(result2.visitorId, "\ncomponents: ").concat(componentsToDebugString(components), "\n```"));
                }
                return [2, result2];
            }
          });
        });
      }
    };
  }
  function monitor() {
    if (window.__fpjs_d_m || Math.random() >= 1e-3) {
      return;
    }
    try {
      var request = new XMLHttpRequest();
      request.open("get", "https://m1.openfpcdn.io/fingerprintjs/v".concat(version$1, "/npm-monitoring"), true);
      request.send();
    } catch (error) {
      console.error(error);
    }
  }
  function load(_a3) {
    var _b2 = _a3 === void 0 ? {} : _a3, delayFallback = _b2.delayFallback, debug = _b2.debug, _c = _b2.monitoring, monitoring = _c === void 0 ? true : _c;
    return __awaiter(this, void 0, void 0, function() {
      var getComponents;
      return __generator(this, function(_d) {
        switch (_d.label) {
          case 0:
            if (monitoring) {
              monitor();
            }
            return [4, prepareForSources(delayFallback)];
          case 1:
            _d.sent();
            getComponents = loadBuiltinSources({ debug });
            return [2, makeAgent(getComponents, debug)];
        }
      });
    });
  }
  const PACKAGES_NAME = "EASY TRACK";
  const STORAGE_VERSION = 1;
  const STORAGE_KEY_SUFFIX = "_easy_track";
  const DB_EVENT_STORE_NAME = "event_store";
  const DB_EVENT_STORE_PRIMARY_KEY = "id";
  const NATIVE_EVENTS = [
    "click",
    "dblclick",
    "keydown",
    "keyup",
    "keypress",
    "mouseenter",
    "mouseleave",
    "mousedown",
    "mouseup",
    "mousemove",
    "input",
    "change",
    "submit",
    "focus",
    "blur",
    "load",
    "error",
    "scroll",
    "visibilitychange",
    "pageshow",
    "pagehide",
    "beforeunload",
    "hashchange",
    "popstate",
    "replaceState",
    "pushState",
    "unhandledrejection",
    "loadend",
    "online",
    "offline"
  ];
  var EventType$1 = /* @__PURE__ */ ((EventType2) => {
    EventType2["BLANK_SCREEN"] = "blank-screen";
    EventType2["PERFORMANCE"] = "performance";
    EventType2["RESOURCE"] = "resource";
    EventType2["NETWORK"] = "network";
    EventType2["LOGGER"] = "logger";
    EventType2["XHR"] = "xhr";
    EventType2["FETCH"] = "fetch";
    EventType2["REQUEST"] = "request";
    EventType2["ERROR"] = "error";
    EventType2["UNHANDLEDREJECTION"] = "unhandledrejection";
    EventType2["EVENT_TRACK"] = "event-track";
    EventType2["EXPOSURE_TRACK"] = "exposure-track";
    EventType2["RECORD_SCREEN"] = "record-screen";
    EventType2["PV"] = "pv";
    EventType2["HASH_CHANGE"] = "hashchange";
    EventType2["HISTORY"] = "history";
    EventType2["HISTORY_PUSHSTATE"] = "history-pushState";
    EventType2["HISTORY_REPLACESTATE"] = "history-replaceState";
    return EventType2;
  })(EventType$1 || {});
  var StatusType = /* @__PURE__ */ ((StatusType2) => {
    StatusType2["Ok"] = "ok";
    StatusType2["Error"] = "error";
    return StatusType2;
  })(StatusType || {});
  var NetworkStatus = /* @__PURE__ */ ((NetworkStatus2) => {
    NetworkStatus2["ONLINE"] = "online";
    NetworkStatus2["OFFLINE"] = "offline";
    NetworkStatus2["CHANGE"] = "change";
    return NetworkStatus2;
  })(NetworkStatus || {});
  var RequestMethod = /* @__PURE__ */ ((RequestMethod2) => {
    RequestMethod2["GET"] = "get";
    RequestMethod2["POST"] = "post";
    RequestMethod2["PUT"] = "put";
    RequestMethod2["DELETE"] = "delete";
    return RequestMethod2;
  })(RequestMethod || {});
  var HttpStatusCode = /* @__PURE__ */ ((HttpStatusCode2) => {
    HttpStatusCode2[HttpStatusCode2["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HttpStatusCode2[HttpStatusCode2["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    return HttpStatusCode2;
  })(HttpStatusCode || {});
  var SpanStatus = /* @__PURE__ */ ((SpanStatus2) => {
    SpanStatus2["Ok"] = "ok";
    SpanStatus2["Bad"] = "bad";
    SpanStatus2["DeadlineExceeded"] = "deadline_exceeded";
    SpanStatus2["Unauthenticated"] = "unauthenticated";
    SpanStatus2["PermissionDenied"] = "permission_denied";
    SpanStatus2["NotFound"] = "not_found";
    SpanStatus2["ResourceExhausted"] = "resource_exhausted";
    SpanStatus2["InvalidArgument"] = "invalid_argument";
    SpanStatus2["Unimplemented"] = "unimplemented";
    SpanStatus2["Unavailable"] = "unavailable";
    SpanStatus2["InternalError"] = "internal_error";
    SpanStatus2["UnknownError"] = "unknown_error";
    SpanStatus2["Cancelled"] = "cancelled";
    SpanStatus2["AlreadyExists"] = "already_exists";
    SpanStatus2["FailedPrecondition"] = "failed_precondition";
    SpanStatus2["Aborted"] = "aborted";
    SpanStatus2["OutOfRange"] = "out_of_range";
    SpanStatus2["DataLoss"] = "data_loss";
    return SpanStatus2;
  })(SpanStatus || {});
  var TransactionType = /* @__PURE__ */ ((TransactionType2) => {
    TransactionType2["Readwrite"] = "readwrite";
    TransactionType2["Readonly"] = "readonly";
    return TransactionType2;
  })(TransactionType || {});
  const getTimestamp = () => Date.now();
  const getLocationHref = () => window.location.href;
  const getCurrentDomain = () => window.location.host;
  const getCurrentReferrer = () => document.referrer;
  const getCurrentDpr = () => window.devicePixelRatio ?? "1";
  const getCurrentLanguage = () => navigator.language ?? "";
  const getCurrentSize = () => {
    return {
      screenWidth: window.screen.width,
      screenHeight: window.screen.height,
      viewportWidth: document.body.clientWidth,
      viewportHeight: document.body.clientHeight
    };
  };
  const getCurrentNetworkInfo = () => {
    const isSupport = "connection" in navigator;
    if (!isSupport) {
      return null;
    }
    return navigator.connection ?? null;
  };
  const getUserAgent = () => navigator.userAgent;
  const parseUrlToObj = (url) => {
    if (!url) {
      return {};
    }
    const match = url.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
    if (!match) {
      return {};
    }
    const query = match[6] || "";
    const fragment = match[8] || "";
    let relative2 = match[5] + query + fragment;
    relative2 = relative2.startsWith("#") ? `/${relative2}` : relative2;
    return {
      host: match[4],
      path: match[5],
      protocol: match[2],
      relative: relative2
    };
  };
  const logPrefix = [`%c[${PACKAGES_NAME}]:`, "font-weight: normal; color: white"];
  const logger = {
    _flag: false,
    setFlag: (flag = false) => {
      logger._flag = flag;
    },
    log: (...args) => {
      if (!logger._flag) {
        return;
      }
      console.log(...logPrefix, ...args);
    },
    warn: (...args) => {
      if (!logger._flag) {
        return;
      }
      console.warn(...logPrefix, ...args);
    },
    error: (...args) => {
      if (!logger._flag) {
        return;
      }
      console.error(...logPrefix, ...args);
    }
  };
  const safeExecute = (executor, errorHandler2) => {
    try {
      return executor();
    } catch (err2) {
      logger.warn(err2);
      return errorHandler2 == null ? void 0 : errorHandler2();
    }
  };
  function isType(type) {
    return function(value) {
      return Object.prototype.toString.call(value) === `[object ${type}]`;
    };
  }
  const isWindow = isType("Window");
  function isTypeofAny(target) {
    return Object.prototype.toString.call(target).slice(8, -1).toLowerCase();
  }
  class TrackStorage {
    constructor(options2) {
      __publicField(this, "storage");
      __publicField(this, "suffix");
      __publicField(this, "version");
      const { storage: storage2 = localStorage, suffix, version: version2 } = options2;
      this.storage = storage2;
      this.suffix = suffix;
      this.version = version2;
    }
    getKey(key) {
      return `${key}${this.suffix}_v${this.version}`;
    }
    setItem(key, value) {
      let val = value;
      try {
        val = JSON.stringify(value);
      } catch (_err) {
        val = value;
      }
      this.storage.setItem(this.getKey(key), val);
    }
    getItem(key) {
      const item = this.storage.getItem(this.getKey(key));
      if (!item) {
        return null;
      }
      try {
        return JSON.parse(item);
      } catch (_err) {
        return item;
      }
    }
    putItem(key, value) {
      const val = this.getItem(key) ?? [];
      if (Array.isArray(val)) {
        val.push(value);
        this.setItem(key, val);
      }
    }
    removeItem(key) {
      this.storage.removeItem(this.getKey(key));
    }
    clear() {
      this.storage.clear();
    }
    getAllKeys() {
      return Object.keys(this.storage);
    }
  }
  class TrackIndexedDB {
    constructor(options2) {
      __publicField(this, "dbNamesuffix");
      __publicField(this, "_dbName", "");
      __publicField(this, "dbName", "");
      __publicField(this, "dbVersion");
      __publicField(this, "db");
      __publicField(this, "stores", []);
      __publicField(this, "isInitialized", false);
      __publicField(this, "unInitializedDataMap", /* @__PURE__ */ new Map());
      const { dbVersion, dbNamesuffix, stores } = options2;
      this.dbVersion = dbVersion;
      this.dbNamesuffix = dbNamesuffix;
      this.stores = stores || [];
    }
    /**
     * 打开或创建数据库
     *
     * @param {Pick<DBOptions, "dbName">} options
     * @memberof TrackIndexedDB
     */
    async init(options2) {
      const { dbName } = options2;
      this._dbName = dbName;
      this.dbName = `${this._dbName}${this.dbNamesuffix}`;
      return new Promise((resolve2, reject) => {
        const request = indexedDB.open(this.dbName, this.dbVersion);
        request.onupgradeneeded = (event) => {
          this.db = event.target.result;
          this.stores.forEach(({ name, params }) => this.createStore(name, params));
          resolve2();
        };
        request.onsuccess = (event) => {
          this.db = event.target.result;
          this.isInitialized = true;
          this.unInitializedDataMap.forEach((dataList, storeName) => {
            dataList.forEach(async (item) => {
              await this.add(storeName, item);
            });
          });
          this.unInitializedDataMap.clear();
          resolve2();
        };
        request.onerror = (event) => {
          reject(event.target.error);
        };
      });
    }
    /**
     * 创建数据库表/存储空间
     *
     * @private
     * @param {string} storeName
     * @param {IDBObjectStoreParameters} [options]
     * @memberof TrackIndexedDB
     */
    createStore(storeName, options2) {
      const { objectStoreNames } = this.db;
      if (!objectStoreNames.contains(storeName)) {
        this.db.createObjectStore(storeName, options2);
      }
    }
    /**
     * 获取数据库事务
     *
     * @private
     * @param {string} storeName
     * @param {TransactionType} transactionType
     * @return {*}
     * @memberof TrackIndexedDB
     */
    getTransaction(storeName, transactionType) {
      if (!this.isInitialized) {
        return;
      }
      return this.db.transaction(storeName, transactionType);
    }
    /**
     * 获取数据库对象存储
     *
     * @private
     * @param {string} storeName
     * @param {TransactionType} transactionType
     * @return {*}
     * @memberof TrackIndexedDB
     */
    getObjectStore(storeName, transactionType) {
      const transaction = this.getTransaction(storeName, transactionType);
      const objectStore = transaction == null ? void 0 : transaction.objectStore(storeName);
      return objectStore;
    }
    /**
     * 添加表数据
     *
     * @param {string} storeName 表名
     * @param {T} item 数据
     * @return {*}  {Promise<void>}
     * @memberof TrackIndexedDB
     */
    add(storeName, item) {
      return new Promise((resolve2, reject) => {
        if (!this.isInitialized) {
          let curStoreUnInitializedData = this.unInitializedDataMap.get(storeName);
          if (!curStoreUnInitializedData) {
            curStoreUnInitializedData = [];
            this.unInitializedDataMap.set(storeName, curStoreUnInitializedData);
          }
          curStoreUnInitializedData.push(item);
          return;
        }
        const transaction = this.getTransaction(storeName, TransactionType.Readwrite);
        const objectStore = transaction.objectStore(storeName);
        const uniqueKey = `${Math.random().toString(36).substr(2, 9)}-${item.time || Date.now().toString()}`;
        objectStore.add({ id: uniqueKey, ...item });
        transaction.oncomplete = () => resolve2();
        transaction.onerror = (event) => {
          reject(event.target.error);
        };
      });
    }
    /**
     * 根据表名和主键获取数据
     *
     * @param storeName 表名
     * @param primaryKey 主键
     * @returns 返回查询结果，若未找到则返回 undefined
     */
    get(storeName, primaryKey) {
      return new Promise((resolve2, reject) => {
        if (!this.isInitialized) {
          return;
        }
        const objectStore = this.getObjectStore(storeName, TransactionType.Readonly);
        const request = objectStore.get(primaryKey);
        request.onsuccess = (event) => {
          resolve2(event.target.result);
        };
        request.onerror = (event) => {
          reject(event.target.error);
        };
      });
    }
    /**
     * 更新表数据
     *
     * @param {string} storeName 表名
     * @param {T} item 更新数据
     * @return {*}  {Promise<void>}
     * @memberof TrackIndexedDB
     */
    update(storeName, item) {
      return new Promise((resolve2, reject) => {
        if (!this.isInitialized) {
          return;
        }
        const transaction = this.getTransaction(storeName, TransactionType.Readwrite);
        const objectStore = transaction.objectStore(storeName);
        objectStore.put(item);
        transaction.oncomplete = () => resolve2();
        transaction.onerror = (event) => {
          reject(event.target.error);
        };
      });
    }
    /**
     * 删除表数据
     *
     * @param {string} storeName 表名
     * @param {string} primaryKey 删除数据主键
     * @return {*}  {Promise<void>}
     * @memberof TrackIndexedDB
     */
    remove(storeName, primaryKey) {
      return new Promise((resolve2, reject) => {
        if (!this.isInitialized) {
          return;
        }
        const transaction = this.getTransaction(storeName, TransactionType.Readwrite);
        const objectStore = transaction.objectStore(storeName);
        objectStore.delete(primaryKey);
        transaction.oncomplete = () => resolve2();
        transaction.onerror = (event) => {
          reject(event.target.error);
        };
      });
    }
    /**
     * 获取表数据条数
     *
     * @param {string} storeName 表名
     * @return {*}  {Promise<number>}
     * @memberof TrackIndexedDB
     */
    getCount(storeName) {
      return new Promise((resolve2, reject) => {
        if (!this.isInitialized) {
          return;
        }
        const objectStore = this.getObjectStore(storeName, TransactionType.Readonly);
        const request = objectStore.count();
        request.onsuccess = (event) => {
          resolve2(event.target.result);
        };
        request.onerror = (event) => {
          reject(event.target.error);
        };
      });
    }
    /**
     * 获取表全部数据
     *
     * @param {string} storeName 表名
     * @return {*}  {(Promise<T[] | undefined>)}
     * @memberof TrackIndexedDB
     */
    getAll(storeName) {
      return new Promise((resolve2, reject) => {
        if (!this.isInitialized) {
          return;
        }
        const objectStore = this.getObjectStore(storeName, TransactionType.Readonly);
        const request = objectStore.getAll();
        request.onsuccess = (event) => {
          resolve2(event.target.result);
        };
        request.onerror = (event) => {
          reject(event.target.error);
        };
      });
    }
    /**
     * 删除数据库
     *
     * @param {string} storeName 数据库名称
     * @return {*}  {Promise<void>}
     * @memberof TrackIndexedDB
     */
    async clear(storeName) {
      return new Promise((resolve2, reject) => {
        if (!this.isInitialized) {
          return;
        }
        const transaction = this.getTransaction(storeName, TransactionType.Readwrite);
        const objectStore = this.getObjectStore(storeName, TransactionType.Readwrite);
        objectStore.clear();
        transaction.oncomplete = () => resolve2();
        transaction.onerror = (event) => {
          reject(event.target.error);
        };
      });
    }
  }
  const checkIsIndexedDBSupported = () => {
    if ("indexedDB" in window) {
      return true;
    }
    logger.warn("IndexedDB is not supported in this browser.");
    return false;
  };
  class EventEmitter {
    constructor() {
      __publicField(this, "eventHandlers");
      this.eventHandlers = /* @__PURE__ */ new Map();
    }
    /**
     * 订阅事件
     *
     * @param {string} eventName
     * @param {EventHandler<T>} handler
     * @memberof EventEmitter
     */
    subscribe(eventName, handler) {
      const target = this.eventHandlers.get(eventName);
      if (target) {
        target.push(handler);
      } else {
        this.eventHandlers.set(eventName, [handler]);
      }
    }
    /**
     * 取消订阅事件
     *
     * @param {string} eventName 事件名称
     * @param {EventHandler<T>} handler 事件处理函数
     * @memberof EventEmitter
     */
    unsubscribe(eventName, handler) {
      if (!this.eventHandlers.has(eventName)) {
        return;
      }
      const handlers = this.eventHandlers.get(eventName);
      const index2 = handlers.indexOf(handler);
      if (index2 !== -1) {
        handlers.splice(index2, 1);
        if (handlers.length === 0) {
          this.eventHandlers.delete(eventName);
        }
      }
    }
    /**
     * 触发事件
     *
     * @param {string} eventName 事件名称
     * @param {T} [data] 数据
     * @return {*}
     * @memberof EventEmitter
     */
    emit(eventName, data) {
      if (!this.eventHandlers.has(eventName)) {
        return;
      }
      const handlers = this.eventHandlers.get(eventName);
      handlers.forEach((handler) => {
        safeExecute(() => handler(data));
      });
    }
  }
  const eventEmitter = new EventEmitter();
  const validEvent = ({ el, eventName, event }) => {
    const isEl = isElement$1(el) || [window, document].includes(el) || el instanceof XMLHttpRequest;
    const isAllowEventName = NATIVE_EVENTS.includes(eventName);
    const isEventFn = isFunction(event);
    return isEl && isAllowEventName && isEventFn;
  };
  const on$1 = ({ el, eventName, event, capture = false }) => {
    const validate = validEvent({ el, eventName, event });
    if (!validate) {
      return;
    }
    el.addEventListener(eventName, event, capture);
  };
  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  var uaParser = { exports: {} };
  (function(module2, exports3) {
    (function(window2, undefined$1) {
      var LIBVERSION = "1.0.38", EMPTY = "", UNKNOWN2 = "?", FUNC_TYPE = "function", UNDEF_TYPE = "undefined", OBJ_TYPE = "object", STR_TYPE = "string", MAJOR = "major", MODEL = "model", NAME2 = "name", TYPE2 = "type", VENDOR = "vendor", VERSION2 = "version", ARCHITECTURE = "architecture", CONSOLE = "console", MOBILE = "mobile", TABLET = "tablet", SMARTTV = "smarttv", WEARABLE = "wearable", EMBEDDED = "embedded", UA_MAX_LENGTH = 500;
      var AMAZON = "Amazon", APPLE = "Apple", ASUS = "ASUS", BLACKBERRY = "BlackBerry", BROWSER = "Browser", CHROME = "Chrome", EDGE = "Edge", FIREFOX = "Firefox", GOOGLE = "Google", HUAWEI = "Huawei", LG = "LG", MICROSOFT = "Microsoft", MOTOROLA = "Motorola", OPERA = "Opera", SAMSUNG = "Samsung", SHARP = "Sharp", SONY = "Sony", XIAOMI = "Xiaomi", ZEBRA = "Zebra", FACEBOOK = "Facebook", CHROMIUM_OS = "Chromium OS", MAC_OS = "Mac OS";
      var extend = function(regexes2, extensions) {
        var mergedRegexes = {};
        for (var i2 in regexes2) {
          if (extensions[i2] && extensions[i2].length % 2 === 0) {
            mergedRegexes[i2] = extensions[i2].concat(regexes2[i2]);
          } else {
            mergedRegexes[i2] = regexes2[i2];
          }
        }
        return mergedRegexes;
      }, enumerize = function(arr) {
        var enums = {};
        for (var i2 = 0; i2 < arr.length; i2++) {
          enums[arr[i2].toUpperCase()] = arr[i2];
        }
        return enums;
      }, has = function(str1, str2) {
        return typeof str1 === STR_TYPE ? lowerize(str2).indexOf(lowerize(str1)) !== -1 : false;
      }, lowerize = function(str) {
        return str.toLowerCase();
      }, majorize = function(version2) {
        return typeof version2 === STR_TYPE ? version2.replace(/[^\d\.]/g, EMPTY).split(".")[0] : undefined$1;
      }, trim = function(str, len) {
        if (typeof str === STR_TYPE) {
          str = str.replace(/^\s\s*/, EMPTY);
          return typeof len === UNDEF_TYPE ? str : str.substring(0, UA_MAX_LENGTH);
        }
      };
      var rgxMapper = function(ua2, arrays) {
        var i2 = 0, j2, k2, p2, q2, matches, match;
        while (i2 < arrays.length && !matches) {
          var regex = arrays[i2], props = arrays[i2 + 1];
          j2 = k2 = 0;
          while (j2 < regex.length && !matches) {
            if (!regex[j2]) {
              break;
            }
            matches = regex[j2++].exec(ua2);
            if (!!matches) {
              for (p2 = 0; p2 < props.length; p2++) {
                match = matches[++k2];
                q2 = props[p2];
                if (typeof q2 === OBJ_TYPE && q2.length > 0) {
                  if (q2.length === 2) {
                    if (typeof q2[1] == FUNC_TYPE) {
                      this[q2[0]] = q2[1].call(this, match);
                    } else {
                      this[q2[0]] = q2[1];
                    }
                  } else if (q2.length === 3) {
                    if (typeof q2[1] === FUNC_TYPE && !(q2[1].exec && q2[1].test)) {
                      this[q2[0]] = match ? q2[1].call(this, match, q2[2]) : undefined$1;
                    } else {
                      this[q2[0]] = match ? match.replace(q2[1], q2[2]) : undefined$1;
                    }
                  } else if (q2.length === 4) {
                    this[q2[0]] = match ? q2[3].call(this, match.replace(q2[1], q2[2])) : undefined$1;
                  }
                } else {
                  this[q2] = match ? match : undefined$1;
                }
              }
            }
          }
          i2 += 2;
        }
      }, strMapper = function(str, map) {
        for (var i2 in map) {
          if (typeof map[i2] === OBJ_TYPE && map[i2].length > 0) {
            for (var j2 = 0; j2 < map[i2].length; j2++) {
              if (has(map[i2][j2], str)) {
                return i2 === UNKNOWN2 ? undefined$1 : i2;
              }
            }
          } else if (has(map[i2], str)) {
            return i2 === UNKNOWN2 ? undefined$1 : i2;
          }
        }
        return str;
      };
      var oldSafariMap = {
        "1.0": "/8",
        "1.2": "/1",
        "1.3": "/3",
        "2.0": "/412",
        "2.0.2": "/416",
        "2.0.3": "/417",
        "2.0.4": "/419",
        "?": "/"
      }, windowsVersionMap = {
        "ME": "4.90",
        "NT 3.11": "NT3.51",
        "NT 4.0": "NT4.0",
        "2000": "NT 5.0",
        "XP": ["NT 5.1", "NT 5.2"],
        "Vista": "NT 6.0",
        "7": "NT 6.1",
        "8": "NT 6.2",
        "8.1": "NT 6.3",
        "10": ["NT 6.4", "NT 10.0"],
        "RT": "ARM"
      };
      var regexes = {
        browser: [
          [
            /\b(?:crmo|crios)\/([\w\.]+)/i
            // Chrome for Android/iOS
          ],
          [VERSION2, [NAME2, "Chrome"]],
          [
            /edg(?:e|ios|a)?\/([\w\.]+)/i
            // Microsoft Edge
          ],
          [VERSION2, [NAME2, "Edge"]],
          [
            // Presto based
            /(opera mini)\/([-\w\.]+)/i,
            // Opera Mini
            /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
            // Opera Mobi/Tablet
            /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i
            // Opera
          ],
          [NAME2, VERSION2],
          [
            /opios[\/ ]+([\w\.]+)/i
            // Opera mini on iphone >= 8.0
          ],
          [VERSION2, [NAME2, OPERA + " Mini"]],
          [
            /\bop(?:rg)?x\/([\w\.]+)/i
            // Opera GX
          ],
          [VERSION2, [NAME2, OPERA + " GX"]],
          [
            /\bopr\/([\w\.]+)/i
            // Opera Webkit
          ],
          [VERSION2, [NAME2, OPERA]],
          [
            // Mixed
            /\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i
            // Baidu
          ],
          [VERSION2, [NAME2, "Baidu"]],
          [
            /(kindle)\/([\w\.]+)/i,
            // Kindle
            /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
            // Lunascape/Maxthon/Netfront/Jasmine/Blazer
            // Trident based
            /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i,
            // Avant/IEMobile/SlimBrowser
            /(?:ms|\()(ie) ([\w\.]+)/i,
            // Internet Explorer
            // Webkit/KHTML based                                               // Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser/QupZilla/Falkon
            /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,
            // Rekonq/Puffin/Brave/Whale/QQBrowserLite/QQ, aka ShouQ
            /(heytap|ovi)browser\/([\d\.]+)/i,
            // Heytap/Ovi
            /(weibo)__([\d\.]+)/i
            // Weibo
          ],
          [NAME2, VERSION2],
          [
            /\bddg\/([\w\.]+)/i
            // DuckDuckGo
          ],
          [VERSION2, [NAME2, "DuckDuckGo"]],
          [
            /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i
            // UCBrowser
          ],
          [VERSION2, [NAME2, "UC" + BROWSER]],
          [
            /microm.+\bqbcore\/([\w\.]+)/i,
            // WeChat Desktop for Windows Built-in Browser
            /\bqbcore\/([\w\.]+).+microm/i,
            /micromessenger\/([\w\.]+)/i
            // WeChat
          ],
          [VERSION2, [NAME2, "WeChat"]],
          [
            /konqueror\/([\w\.]+)/i
            // Konqueror
          ],
          [VERSION2, [NAME2, "Konqueror"]],
          [
            /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i
            // IE11
          ],
          [VERSION2, [NAME2, "IE"]],
          [
            /ya(?:search)?browser\/([\w\.]+)/i
            // Yandex
          ],
          [VERSION2, [NAME2, "Yandex"]],
          [
            /slbrowser\/([\w\.]+)/i
            // Smart Lenovo Browser
          ],
          [VERSION2, [NAME2, "Smart Lenovo " + BROWSER]],
          [
            /(avast|avg)\/([\w\.]+)/i
            // Avast/AVG Secure Browser
          ],
          [[NAME2, /(.+)/, "$1 Secure " + BROWSER], VERSION2],
          [
            /\bfocus\/([\w\.]+)/i
            // Firefox Focus
          ],
          [VERSION2, [NAME2, FIREFOX + " Focus"]],
          [
            /\bopt\/([\w\.]+)/i
            // Opera Touch
          ],
          [VERSION2, [NAME2, OPERA + " Touch"]],
          [
            /coc_coc\w+\/([\w\.]+)/i
            // Coc Coc Browser
          ],
          [VERSION2, [NAME2, "Coc Coc"]],
          [
            /dolfin\/([\w\.]+)/i
            // Dolphin
          ],
          [VERSION2, [NAME2, "Dolphin"]],
          [
            /coast\/([\w\.]+)/i
            // Opera Coast
          ],
          [VERSION2, [NAME2, OPERA + " Coast"]],
          [
            /miuibrowser\/([\w\.]+)/i
            // MIUI Browser
          ],
          [VERSION2, [NAME2, "MIUI " + BROWSER]],
          [
            /fxios\/([-\w\.]+)/i
            // Firefox for iOS
          ],
          [VERSION2, [NAME2, FIREFOX]],
          [
            /\bqihu|(qi?ho?o?|360)browser/i
            // 360
          ],
          [[NAME2, "360 " + BROWSER]],
          [
            /(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i
          ],
          [[NAME2, /(.+)/, "$1 " + BROWSER], VERSION2],
          [
            // Oculus/Sailfish/HuaweiBrowser/VivoBrowser
            /samsungbrowser\/([\w\.]+)/i
            // Samsung Internet
          ],
          [VERSION2, [NAME2, SAMSUNG + " Internet"]],
          [
            /(comodo_dragon)\/([\w\.]+)/i
            // Comodo Dragon
          ],
          [[NAME2, /_/g, " "], VERSION2],
          [
            /metasr[\/ ]?([\d\.]+)/i
            // Sogou Explorer
          ],
          [VERSION2, [NAME2, "Sogou Explorer"]],
          [
            /(sogou)mo\w+\/([\d\.]+)/i
            // Sogou Mobile
          ],
          [[NAME2, "Sogou Mobile"], VERSION2],
          [
            /(electron)\/([\w\.]+) safari/i,
            // Electron-based App
            /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
            // Tesla
            /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i
            // QQBrowser/2345 Browser
          ],
          [NAME2, VERSION2],
          [
            /(lbbrowser)/i,
            // LieBao Browser
            /\[(linkedin)app\]/i
            // LinkedIn App for iOS & Android
          ],
          [NAME2],
          [
            // WebView
            /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i
            // Facebook App for iOS & Android
          ],
          [[NAME2, FACEBOOK], VERSION2],
          [
            /(Klarna)\/([\w\.]+)/i,
            // Klarna Shopping Browser for iOS & Android
            /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
            // Kakao App
            /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
            // Naver InApp
            /safari (line)\/([\w\.]+)/i,
            // Line App for iOS
            /\b(line)\/([\w\.]+)\/iab/i,
            // Line App for Android
            /(alipay)client\/([\w\.]+)/i,
            // Alipay
            /(twitter)(?:and| f.+e\/([\w\.]+))/i,
            // Twitter
            /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i
            // Chromium/Instagram/Snapchat
          ],
          [NAME2, VERSION2],
          [
            /\bgsa\/([\w\.]+) .*safari\//i
            // Google Search Appliance on iOS
          ],
          [VERSION2, [NAME2, "GSA"]],
          [
            /musical_ly(?:.+app_?version\/|_)([\w\.]+)/i
            // TikTok
          ],
          [VERSION2, [NAME2, "TikTok"]],
          [
            /headlesschrome(?:\/([\w\.]+)| )/i
            // Chrome Headless
          ],
          [VERSION2, [NAME2, CHROME + " Headless"]],
          [
            / wv\).+(chrome)\/([\w\.]+)/i
            // Chrome WebView
          ],
          [[NAME2, CHROME + " WebView"], VERSION2],
          [
            /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i
            // Android Browser
          ],
          [VERSION2, [NAME2, "Android " + BROWSER]],
          [
            /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i
            // Chrome/OmniWeb/Arora/Tizen/Nokia
          ],
          [NAME2, VERSION2],
          [
            /version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i
            // Mobile Safari
          ],
          [VERSION2, [NAME2, "Mobile Safari"]],
          [
            /version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i
            // Safari & Safari Mobile
          ],
          [VERSION2, NAME2],
          [
            /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i
            // Safari < 3.0
          ],
          [NAME2, [VERSION2, strMapper, oldSafariMap]],
          [
            /(webkit|khtml)\/([\w\.]+)/i
          ],
          [NAME2, VERSION2],
          [
            // Gecko based
            /(navigator|netscape\d?)\/([-\w\.]+)/i
            // Netscape
          ],
          [[NAME2, "Netscape"], VERSION2],
          [
            /mobile vr; rv:([\w\.]+)\).+firefox/i
            // Firefox Reality
          ],
          [VERSION2, [NAME2, FIREFOX + " Reality"]],
          [
            /ekiohf.+(flow)\/([\w\.]+)/i,
            // Flow
            /(swiftfox)/i,
            // Swiftfox
            /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
            // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror/Klar
            /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
            // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
            /(firefox)\/([\w\.]+)/i,
            // Other Firefox-based
            /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
            // Mozilla
            // Other
            /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
            // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir/Obigo/Mosaic/Go/ICE/UP.Browser
            /(links) \(([\w\.]+)/i,
            // Links
            /panasonic;(viera)/i
            // Panasonic Viera
          ],
          [NAME2, VERSION2],
          [
            /(cobalt)\/([\w\.]+)/i
            // Cobalt
          ],
          [NAME2, [VERSION2, /master.|lts./, ""]]
        ],
        cpu: [
          [
            /(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i
            // AMD64 (x64)
          ],
          [[ARCHITECTURE, "amd64"]],
          [
            /(ia32(?=;))/i
            // IA32 (quicktime)
          ],
          [[ARCHITECTURE, lowerize]],
          [
            /((?:i[346]|x)86)[;\)]/i
            // IA32 (x86)
          ],
          [[ARCHITECTURE, "ia32"]],
          [
            /\b(aarch64|arm(v?8e?l?|_?64))\b/i
            // ARM64
          ],
          [[ARCHITECTURE, "arm64"]],
          [
            /\b(arm(?:v[67])?ht?n?[fl]p?)\b/i
            // ARMHF
          ],
          [[ARCHITECTURE, "armhf"]],
          [
            // PocketPC mistakenly identified as PowerPC
            /windows (ce|mobile); ppc;/i
          ],
          [[ARCHITECTURE, "arm"]],
          [
            /((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i
            // PowerPC
          ],
          [[ARCHITECTURE, /ower/, EMPTY, lowerize]],
          [
            /(sun4\w)[;\)]/i
            // SPARC
          ],
          [[ARCHITECTURE, "sparc"]],
          [
            /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i
            // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
          ],
          [[ARCHITECTURE, lowerize]]
        ],
        device: [
          [
            //////////////////////////
            // MOBILES & TABLETS
            /////////////////////////
            // Samsung
            /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
          ],
          [MODEL, [VENDOR, SAMSUNG], [TYPE2, TABLET]],
          [
            /\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
            /samsung[- ]([-\w]+)/i,
            /sec-(sgh\w+)/i
          ],
          [MODEL, [VENDOR, SAMSUNG], [TYPE2, MOBILE]],
          [
            // Apple
            /(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i
            // iPod/iPhone
          ],
          [MODEL, [VENDOR, APPLE], [TYPE2, MOBILE]],
          [
            /\((ipad);[-\w\),; ]+apple/i,
            // iPad
            /applecoremedia\/[\w\.]+ \((ipad)/i,
            /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
          ],
          [MODEL, [VENDOR, APPLE], [TYPE2, TABLET]],
          [
            /(macintosh);/i
          ],
          [MODEL, [VENDOR, APPLE]],
          [
            // Sharp
            /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
          ],
          [MODEL, [VENDOR, SHARP], [TYPE2, MOBILE]],
          [
            // Huawei
            /\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i
          ],
          [MODEL, [VENDOR, HUAWEI], [TYPE2, TABLET]],
          [
            /(?:huawei|honor)([-\w ]+)[;\)]/i,
            /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i
          ],
          [MODEL, [VENDOR, HUAWEI], [TYPE2, MOBILE]],
          [
            // Xiaomi
            /\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,
            // Xiaomi POCO
            /\b; (\w+) build\/hm\1/i,
            // Xiaomi Hongmi 'numeric' models
            /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
            // Xiaomi Hongmi
            /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
            // Xiaomi Redmi
            /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,
            // Xiaomi Redmi 'numeric' models
            /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i
            // Xiaomi Mi
          ],
          [[MODEL, /_/g, " "], [VENDOR, XIAOMI], [TYPE2, MOBILE]],
          [
            /oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,
            // Redmi Pad
            /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i
            // Mi Pad tablets
          ],
          [[MODEL, /_/g, " "], [VENDOR, XIAOMI], [TYPE2, TABLET]],
          [
            // OPPO
            /; (\w+) bui.+ oppo/i,
            /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
          ],
          [MODEL, [VENDOR, "OPPO"], [TYPE2, MOBILE]],
          [
            /\b(opd2\d{3}a?) bui/i
          ],
          [MODEL, [VENDOR, "OPPO"], [TYPE2, TABLET]],
          [
            // Vivo
            /vivo (\w+)(?: bui|\))/i,
            /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
          ],
          [MODEL, [VENDOR, "Vivo"], [TYPE2, MOBILE]],
          [
            // Realme
            /\b(rmx[1-3]\d{3})(?: bui|;|\))/i
          ],
          [MODEL, [VENDOR, "Realme"], [TYPE2, MOBILE]],
          [
            // Motorola
            /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
            /\bmot(?:orola)?[- ](\w*)/i,
            /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
          ],
          [MODEL, [VENDOR, MOTOROLA], [TYPE2, MOBILE]],
          [
            /\b(mz60\d|xoom[2 ]{0,2}) build\//i
          ],
          [MODEL, [VENDOR, MOTOROLA], [TYPE2, TABLET]],
          [
            // LG
            /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
          ],
          [MODEL, [VENDOR, LG], [TYPE2, TABLET]],
          [
            /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
            /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
            /\blg-?([\d\w]+) bui/i
          ],
          [MODEL, [VENDOR, LG], [TYPE2, MOBILE]],
          [
            // Lenovo
            /(ideatab[-\w ]+)/i,
            /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i
          ],
          [MODEL, [VENDOR, "Lenovo"], [TYPE2, TABLET]],
          [
            // Nokia
            /(?:maemo|nokia).*(n900|lumia \d+)/i,
            /nokia[-_ ]?([-\w\.]*)/i
          ],
          [[MODEL, /_/g, " "], [VENDOR, "Nokia"], [TYPE2, MOBILE]],
          [
            // Google
            /(pixel c)\b/i
            // Google Pixel C
          ],
          [MODEL, [VENDOR, GOOGLE], [TYPE2, TABLET]],
          [
            /droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i
            // Google Pixel
          ],
          [MODEL, [VENDOR, GOOGLE], [TYPE2, MOBILE]],
          [
            // Sony
            /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
          ],
          [MODEL, [VENDOR, SONY], [TYPE2, MOBILE]],
          [
            /sony tablet [ps]/i,
            /\b(?:sony)?sgp\w+(?: bui|\))/i
          ],
          [[MODEL, "Xperia Tablet"], [VENDOR, SONY], [TYPE2, TABLET]],
          [
            // OnePlus
            / (kb2005|in20[12]5|be20[12][59])\b/i,
            /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
          ],
          [MODEL, [VENDOR, "OnePlus"], [TYPE2, MOBILE]],
          [
            // Amazon
            /(alexa)webm/i,
            /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,
            // Kindle Fire without Silk / Echo Show
            /(kf[a-z]+)( bui|\)).+silk\//i
            // Kindle Fire HD
          ],
          [MODEL, [VENDOR, AMAZON], [TYPE2, TABLET]],
          [
            /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i
            // Fire Phone
          ],
          [[MODEL, /(.+)/g, "Fire Phone $1"], [VENDOR, AMAZON], [TYPE2, MOBILE]],
          [
            // BlackBerry
            /(playbook);[-\w\),; ]+(rim)/i
            // BlackBerry PlayBook
          ],
          [MODEL, VENDOR, [TYPE2, TABLET]],
          [
            /\b((?:bb[a-f]|st[hv])100-\d)/i,
            /\(bb10; (\w+)/i
            // BlackBerry 10
          ],
          [MODEL, [VENDOR, BLACKBERRY], [TYPE2, MOBILE]],
          [
            // Asus
            /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
          ],
          [MODEL, [VENDOR, ASUS], [TYPE2, TABLET]],
          [
            / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
          ],
          [MODEL, [VENDOR, ASUS], [TYPE2, MOBILE]],
          [
            // HTC
            /(nexus 9)/i
            // HTC Nexus 9
          ],
          [MODEL, [VENDOR, "HTC"], [TYPE2, TABLET]],
          [
            /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
            // HTC
            // ZTE
            /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
            /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i
            // Alcatel/GeeksPhone/Nexian/Panasonic/Sony
          ],
          [VENDOR, [MODEL, /_/g, " "], [TYPE2, MOBILE]],
          [
            // Acer
            /droid.+; ([ab][1-7]-?[0178a]\d\d?)/i
          ],
          [MODEL, [VENDOR, "Acer"], [TYPE2, TABLET]],
          [
            // Meizu
            /droid.+; (m[1-5] note) bui/i,
            /\bmz-([-\w]{2,})/i
          ],
          [MODEL, [VENDOR, "Meizu"], [TYPE2, MOBILE]],
          [
            // Ulefone
            /; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i
          ],
          [MODEL, [VENDOR, "Ulefone"], [TYPE2, MOBILE]],
          [
            // MIXED
            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,
            // BlackBerry/BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron
            /(hp) ([\w ]+\w)/i,
            // HP iPAQ
            /(asus)-?(\w+)/i,
            // Asus
            /(microsoft); (lumia[\w ]+)/i,
            // Microsoft Lumia
            /(lenovo)[-_ ]?([-\w]+)/i,
            // Lenovo
            /(jolla)/i,
            // Jolla
            /(oppo) ?([\w ]+) bui/i
            // OPPO
          ],
          [VENDOR, MODEL, [TYPE2, MOBILE]],
          [
            /(kobo)\s(ereader|touch)/i,
            // Kobo
            /(archos) (gamepad2?)/i,
            // Archos
            /(hp).+(touchpad(?!.+tablet)|tablet)/i,
            // HP TouchPad
            /(kindle)\/([\w\.]+)/i,
            // Kindle
            /(nook)[\w ]+build\/(\w+)/i,
            // Nook
            /(dell) (strea[kpr\d ]*[\dko])/i,
            // Dell Streak
            /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
            // Le Pan Tablets
            /(trinity)[- ]*(t\d{3}) bui/i,
            // Trinity Tablets
            /(gigaset)[- ]+(q\w{1,9}) bui/i,
            // Gigaset Tablets
            /(vodafone) ([\w ]+)(?:\)| bui)/i
            // Vodafone
          ],
          [VENDOR, MODEL, [TYPE2, TABLET]],
          [
            /(surface duo)/i
            // Surface Duo
          ],
          [MODEL, [VENDOR, MICROSOFT], [TYPE2, TABLET]],
          [
            /droid [\d\.]+; (fp\du?)(?: b|\))/i
            // Fairphone
          ],
          [MODEL, [VENDOR, "Fairphone"], [TYPE2, MOBILE]],
          [
            /(u304aa)/i
            // AT&T
          ],
          [MODEL, [VENDOR, "AT&T"], [TYPE2, MOBILE]],
          [
            /\bsie-(\w*)/i
            // Siemens
          ],
          [MODEL, [VENDOR, "Siemens"], [TYPE2, MOBILE]],
          [
            /\b(rct\w+) b/i
            // RCA Tablets
          ],
          [MODEL, [VENDOR, "RCA"], [TYPE2, TABLET]],
          [
            /\b(venue[\d ]{2,7}) b/i
            // Dell Venue Tablets
          ],
          [MODEL, [VENDOR, "Dell"], [TYPE2, TABLET]],
          [
            /\b(q(?:mv|ta)\w+) b/i
            // Verizon Tablet
          ],
          [MODEL, [VENDOR, "Verizon"], [TYPE2, TABLET]],
          [
            /\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i
            // Barnes & Noble Tablet
          ],
          [MODEL, [VENDOR, "Barnes & Noble"], [TYPE2, TABLET]],
          [
            /\b(tm\d{3}\w+) b/i
          ],
          [MODEL, [VENDOR, "NuVision"], [TYPE2, TABLET]],
          [
            /\b(k88) b/i
            // ZTE K Series Tablet
          ],
          [MODEL, [VENDOR, "ZTE"], [TYPE2, TABLET]],
          [
            /\b(nx\d{3}j) b/i
            // ZTE Nubia
          ],
          [MODEL, [VENDOR, "ZTE"], [TYPE2, MOBILE]],
          [
            /\b(gen\d{3}) b.+49h/i
            // Swiss GEN Mobile
          ],
          [MODEL, [VENDOR, "Swiss"], [TYPE2, MOBILE]],
          [
            /\b(zur\d{3}) b/i
            // Swiss ZUR Tablet
          ],
          [MODEL, [VENDOR, "Swiss"], [TYPE2, TABLET]],
          [
            /\b((zeki)?tb.*\b) b/i
            // Zeki Tablets
          ],
          [MODEL, [VENDOR, "Zeki"], [TYPE2, TABLET]],
          [
            /\b([yr]\d{2}) b/i,
            /\b(dragon[- ]+touch |dt)(\w{5}) b/i
            // Dragon Touch Tablet
          ],
          [[VENDOR, "Dragon Touch"], MODEL, [TYPE2, TABLET]],
          [
            /\b(ns-?\w{0,9}) b/i
            // Insignia Tablets
          ],
          [MODEL, [VENDOR, "Insignia"], [TYPE2, TABLET]],
          [
            /\b((nxa|next)-?\w{0,9}) b/i
            // NextBook Tablets
          ],
          [MODEL, [VENDOR, "NextBook"], [TYPE2, TABLET]],
          [
            /\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i
            // Voice Xtreme Phones
          ],
          [[VENDOR, "Voice"], MODEL, [TYPE2, MOBILE]],
          [
            /\b(lvtel\-)?(v1[12]) b/i
            // LvTel Phones
          ],
          [[VENDOR, "LvTel"], MODEL, [TYPE2, MOBILE]],
          [
            /\b(ph-1) /i
            // Essential PH-1
          ],
          [MODEL, [VENDOR, "Essential"], [TYPE2, MOBILE]],
          [
            /\b(v(100md|700na|7011|917g).*\b) b/i
            // Envizen Tablets
          ],
          [MODEL, [VENDOR, "Envizen"], [TYPE2, TABLET]],
          [
            /\b(trio[-\w\. ]+) b/i
            // MachSpeed Tablets
          ],
          [MODEL, [VENDOR, "MachSpeed"], [TYPE2, TABLET]],
          [
            /\btu_(1491) b/i
            // Rotor Tablets
          ],
          [MODEL, [VENDOR, "Rotor"], [TYPE2, TABLET]],
          [
            /(shield[\w ]+) b/i
            // Nvidia Shield Tablets
          ],
          [MODEL, [VENDOR, "Nvidia"], [TYPE2, TABLET]],
          [
            /(sprint) (\w+)/i
            // Sprint Phones
          ],
          [VENDOR, MODEL, [TYPE2, MOBILE]],
          [
            /(kin\.[onetw]{3})/i
            // Microsoft Kin
          ],
          [[MODEL, /\./g, " "], [VENDOR, MICROSOFT], [TYPE2, MOBILE]],
          [
            /droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i
            // Zebra
          ],
          [MODEL, [VENDOR, ZEBRA], [TYPE2, TABLET]],
          [
            /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
          ],
          [MODEL, [VENDOR, ZEBRA], [TYPE2, MOBILE]],
          [
            ///////////////////
            // SMARTTVS
            ///////////////////
            /smart-tv.+(samsung)/i
            // Samsung
          ],
          [VENDOR, [TYPE2, SMARTTV]],
          [
            /hbbtv.+maple;(\d+)/i
          ],
          [[MODEL, /^/, "SmartTV"], [VENDOR, SAMSUNG], [TYPE2, SMARTTV]],
          [
            /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i
            // LG SmartTV
          ],
          [[VENDOR, LG], [TYPE2, SMARTTV]],
          [
            /(apple) ?tv/i
            // Apple TV
          ],
          [VENDOR, [MODEL, APPLE + " TV"], [TYPE2, SMARTTV]],
          [
            /crkey/i
            // Google Chromecast
          ],
          [[MODEL, CHROME + "cast"], [VENDOR, GOOGLE], [TYPE2, SMARTTV]],
          [
            /droid.+aft(\w+)( bui|\))/i
            // Fire TV
          ],
          [MODEL, [VENDOR, AMAZON], [TYPE2, SMARTTV]],
          [
            /\(dtv[\);].+(aquos)/i,
            /(aquos-tv[\w ]+)\)/i
            // Sharp
          ],
          [MODEL, [VENDOR, SHARP], [TYPE2, SMARTTV]],
          [
            /(bravia[\w ]+)( bui|\))/i
            // Sony
          ],
          [MODEL, [VENDOR, SONY], [TYPE2, SMARTTV]],
          [
            /(mitv-\w{5}) bui/i
            // Xiaomi
          ],
          [MODEL, [VENDOR, XIAOMI], [TYPE2, SMARTTV]],
          [
            /Hbbtv.*(technisat) (.*);/i
            // TechniSAT
          ],
          [VENDOR, MODEL, [TYPE2, SMARTTV]],
          [
            /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
            // Roku
            /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i
            // HbbTV devices
          ],
          [[VENDOR, trim], [MODEL, trim], [TYPE2, SMARTTV]],
          [
            /\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i
            // SmartTV from Unidentified Vendors
          ],
          [[TYPE2, SMARTTV]],
          [
            ///////////////////
            // CONSOLES
            ///////////////////
            /(ouya)/i,
            // Ouya
            /(nintendo) ([wids3utch]+)/i
            // Nintendo
          ],
          [VENDOR, MODEL, [TYPE2, CONSOLE]],
          [
            /droid.+; (shield) bui/i
            // Nvidia
          ],
          [MODEL, [VENDOR, "Nvidia"], [TYPE2, CONSOLE]],
          [
            /(playstation [345portablevi]+)/i
            // Playstation
          ],
          [MODEL, [VENDOR, SONY], [TYPE2, CONSOLE]],
          [
            /\b(xbox(?: one)?(?!; xbox))[\); ]/i
            // Microsoft Xbox
          ],
          [MODEL, [VENDOR, MICROSOFT], [TYPE2, CONSOLE]],
          [
            ///////////////////
            // WEARABLES
            ///////////////////
            /((pebble))app/i
            // Pebble
          ],
          [VENDOR, MODEL, [TYPE2, WEARABLE]],
          [
            /(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i
            // Apple Watch
          ],
          [MODEL, [VENDOR, APPLE], [TYPE2, WEARABLE]],
          [
            /droid.+; (glass) \d/i
            // Google Glass
          ],
          [MODEL, [VENDOR, GOOGLE], [TYPE2, WEARABLE]],
          [
            /droid.+; (wt63?0{2,3})\)/i
          ],
          [MODEL, [VENDOR, ZEBRA], [TYPE2, WEARABLE]],
          [
            /(quest( \d| pro)?)/i
            // Oculus Quest
          ],
          [MODEL, [VENDOR, FACEBOOK], [TYPE2, WEARABLE]],
          [
            ///////////////////
            // EMBEDDED
            ///////////////////
            /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i
            // Tesla
          ],
          [VENDOR, [TYPE2, EMBEDDED]],
          [
            /(aeobc)\b/i
            // Echo Dot
          ],
          [MODEL, [VENDOR, AMAZON], [TYPE2, EMBEDDED]],
          [
            ////////////////////
            // MIXED (GENERIC)
            ///////////////////
            /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i
            // Android Phones from Unidentified Vendors
          ],
          [MODEL, [TYPE2, MOBILE]],
          [
            /droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i
            // Android Tablets from Unidentified Vendors
          ],
          [MODEL, [TYPE2, TABLET]],
          [
            /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i
            // Unidentifiable Tablet
          ],
          [[TYPE2, TABLET]],
          [
            /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i
            // Unidentifiable Mobile
          ],
          [[TYPE2, MOBILE]],
          [
            /(android[-\w\. ]{0,9});.+buil/i
            // Generic Android Device
          ],
          [MODEL, [VENDOR, "Generic"]]
        ],
        engine: [
          [
            /windows.+ edge\/([\w\.]+)/i
            // EdgeHTML
          ],
          [VERSION2, [NAME2, EDGE + "HTML"]],
          [
            /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i
            // Blink
          ],
          [VERSION2, [NAME2, "Blink"]],
          [
            /(presto)\/([\w\.]+)/i,
            // Presto
            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
            // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m/Goanna
            /ekioh(flow)\/([\w\.]+)/i,
            // Flow
            /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
            // KHTML/Tasman/Links
            /(icab)[\/ ]([23]\.[\d\.]+)/i,
            // iCab
            /\b(libweb)/i
          ],
          [NAME2, VERSION2],
          [
            /rv\:([\w\.]{1,9})\b.+(gecko)/i
            // Gecko
          ],
          [VERSION2, NAME2]
        ],
        os: [
          [
            // Windows
            /microsoft (windows) (vista|xp)/i
            // Windows (iTunes)
          ],
          [NAME2, VERSION2],
          [
            /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i
            // Windows Phone
          ],
          [NAME2, [VERSION2, strMapper, windowsVersionMap]],
          [
            /windows nt 6\.2; (arm)/i,
            // Windows RT
            /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
            /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i
          ],
          [[VERSION2, strMapper, windowsVersionMap], [NAME2, "Windows"]],
          [
            // iOS/macOS
            /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
            // iOS
            /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
            /cfnetwork\/.+darwin/i
          ],
          [[VERSION2, /_/g, "."], [NAME2, "iOS"]],
          [
            /(mac os x) ?([\w\. ]*)/i,
            /(macintosh|mac_powerpc\b)(?!.+haiku)/i
            // Mac OS
          ],
          [[NAME2, MAC_OS], [VERSION2, /_/g, "."]],
          [
            // Mobile OSes
            /droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i
            // Android-x86/HarmonyOS
          ],
          [VERSION2, NAME2],
          [
            // Android/WebOS/QNX/Bada/RIM/Maemo/MeeGo/Sailfish OS
            /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
            /(blackberry)\w*\/([\w\.]*)/i,
            // Blackberry
            /(tizen|kaios)[\/ ]([\w\.]+)/i,
            // Tizen/KaiOS
            /\((series40);/i
            // Series 40
          ],
          [NAME2, VERSION2],
          [
            /\(bb(10);/i
            // BlackBerry 10
          ],
          [VERSION2, [NAME2, BLACKBERRY]],
          [
            /(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i
            // Symbian
          ],
          [VERSION2, [NAME2, "Symbian"]],
          [
            /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i
            // Firefox OS
          ],
          [VERSION2, [NAME2, FIREFOX + " OS"]],
          [
            /web0s;.+rt(tv)/i,
            /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i
            // WebOS
          ],
          [VERSION2, [NAME2, "webOS"]],
          [
            /watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i
            // watchOS
          ],
          [VERSION2, [NAME2, "watchOS"]],
          [
            // Google Chromecast
            /crkey\/([\d\.]+)/i
            // Google Chromecast
          ],
          [VERSION2, [NAME2, CHROME + "cast"]],
          [
            /(cros) [\w]+(?:\)| ([\w\.]+)\b)/i
            // Chromium OS
          ],
          [[NAME2, CHROMIUM_OS], VERSION2],
          [
            // Smart TVs
            /panasonic;(viera)/i,
            // Panasonic Viera
            /(netrange)mmh/i,
            // Netrange
            /(nettv)\/(\d+\.[\w\.]+)/i,
            // NetTV
            // Console
            /(nintendo|playstation) ([wids345portablevuch]+)/i,
            // Nintendo/Playstation
            /(xbox); +xbox ([^\);]+)/i,
            // Microsoft Xbox (360, One, X, S, Series X, Series S)
            // Other
            /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
            // Joli/Palm
            /(mint)[\/\(\) ]?(\w*)/i,
            // Mint
            /(mageia|vectorlinux)[; ]/i,
            // Mageia/VectorLinux
            /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
            // Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware/Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus/Raspbian/Plan9/Minix/RISCOS/Contiki/Deepin/Manjaro/elementary/Sabayon/Linspire
            /(hurd|linux) ?([\w\.]*)/i,
            // Hurd/Linux
            /(gnu) ?([\w\.]*)/i,
            // GNU
            /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
            // FreeBSD/NetBSD/OpenBSD/PC-BSD/GhostBSD/DragonFly
            /(haiku) (\w+)/i
            // Haiku
          ],
          [NAME2, VERSION2],
          [
            /(sunos) ?([\w\.\d]*)/i
            // Solaris
          ],
          [[NAME2, "Solaris"], VERSION2],
          [
            /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
            // Solaris
            /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
            // AIX
            /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
            // BeOS/OS2/AmigaOS/MorphOS/OpenVMS/Fuchsia/HP-UX/SerenityOS
            /(unix) ?([\w\.]*)/i
            // UNIX
          ],
          [NAME2, VERSION2]
        ]
      };
      var UAParser = function(ua2, extensions) {
        if (typeof ua2 === OBJ_TYPE) {
          extensions = ua2;
          ua2 = undefined$1;
        }
        if (!(this instanceof UAParser)) {
          return new UAParser(ua2, extensions).getResult();
        }
        var _navigator = typeof window2 !== UNDEF_TYPE && window2.navigator ? window2.navigator : undefined$1;
        var _ua = ua2 || (_navigator && _navigator.userAgent ? _navigator.userAgent : EMPTY);
        var _uach = _navigator && _navigator.userAgentData ? _navigator.userAgentData : undefined$1;
        var _rgxmap = extensions ? extend(regexes, extensions) : regexes;
        var _isSelfNav = _navigator && _navigator.userAgent == _ua;
        this.getBrowser = function() {
          var _browser = {};
          _browser[NAME2] = undefined$1;
          _browser[VERSION2] = undefined$1;
          rgxMapper.call(_browser, _ua, _rgxmap.browser);
          _browser[MAJOR] = majorize(_browser[VERSION2]);
          if (_isSelfNav && _navigator && _navigator.brave && typeof _navigator.brave.isBrave == FUNC_TYPE) {
            _browser[NAME2] = "Brave";
          }
          return _browser;
        };
        this.getCPU = function() {
          var _cpu = {};
          _cpu[ARCHITECTURE] = undefined$1;
          rgxMapper.call(_cpu, _ua, _rgxmap.cpu);
          return _cpu;
        };
        this.getDevice = function() {
          var _device = {};
          _device[VENDOR] = undefined$1;
          _device[MODEL] = undefined$1;
          _device[TYPE2] = undefined$1;
          rgxMapper.call(_device, _ua, _rgxmap.device);
          if (_isSelfNav && !_device[TYPE2] && _uach && _uach.mobile) {
            _device[TYPE2] = MOBILE;
          }
          if (_isSelfNav && _device[MODEL] == "Macintosh" && _navigator && typeof _navigator.standalone !== UNDEF_TYPE && _navigator.maxTouchPoints && _navigator.maxTouchPoints > 2) {
            _device[MODEL] = "iPad";
            _device[TYPE2] = TABLET;
          }
          return _device;
        };
        this.getEngine = function() {
          var _engine = {};
          _engine[NAME2] = undefined$1;
          _engine[VERSION2] = undefined$1;
          rgxMapper.call(_engine, _ua, _rgxmap.engine);
          return _engine;
        };
        this.getOS = function() {
          var _os = {};
          _os[NAME2] = undefined$1;
          _os[VERSION2] = undefined$1;
          rgxMapper.call(_os, _ua, _rgxmap.os);
          if (_isSelfNav && !_os[NAME2] && _uach && _uach.platform && _uach.platform != "Unknown") {
            _os[NAME2] = _uach.platform.replace(/chrome os/i, CHROMIUM_OS).replace(/macos/i, MAC_OS);
          }
          return _os;
        };
        this.getResult = function() {
          return {
            ua: this.getUA(),
            browser: this.getBrowser(),
            engine: this.getEngine(),
            os: this.getOS(),
            device: this.getDevice(),
            cpu: this.getCPU()
          };
        };
        this.getUA = function() {
          return _ua;
        };
        this.setUA = function(ua3) {
          _ua = typeof ua3 === STR_TYPE && ua3.length > UA_MAX_LENGTH ? trim(ua3, UA_MAX_LENGTH) : ua3;
          return this;
        };
        this.setUA(_ua);
        return this;
      };
      UAParser.VERSION = LIBVERSION;
      UAParser.BROWSER = enumerize([NAME2, VERSION2, MAJOR]);
      UAParser.CPU = enumerize([ARCHITECTURE]);
      UAParser.DEVICE = enumerize([MODEL, VENDOR, TYPE2, CONSOLE, MOBILE, SMARTTV, TABLET, WEARABLE, EMBEDDED]);
      UAParser.ENGINE = UAParser.OS = enumerize([NAME2, VERSION2]);
      {
        if (module2.exports) {
          exports3 = module2.exports = UAParser;
        }
        exports3.UAParser = UAParser;
      }
      var $2 = typeof window2 !== UNDEF_TYPE && (window2.jQuery || window2.Zepto);
      if ($2 && !$2.ua) {
        var parser2 = new UAParser();
        $2.ua = parser2.getResult();
        $2.ua.get = function() {
          return parser2.getUA();
        };
        $2.ua.set = function(ua2) {
          parser2.setUA(ua2);
          var result2 = parser2.getResult();
          for (var prop in result2) {
            $2.ua[prop] = result2[prop];
          }
        };
      }
    })(typeof window === "object" ? window : commonjsGlobal);
  })(uaParser, uaParser.exports);
  var uaParserExports = uaParser.exports;
  const ua = new uaParserExports.UAParser().getResult();
  const UNKNOWN = "Unknown";
  const __EASY_TRACK__ = {
    deviceInfo: {
      browserVendor: ua.browser.name ?? UNKNOWN,
      browserVersion: ua.browser.version ?? UNKNOWN,
      os: ua.os.name ?? UNKNOWN,
      osVersion: ua.os.version ?? UNKNOWN,
      device: ua.device.model ?? UNKNOWN,
      deviceType: ua.device.type ?? UNKNOWN,
      deviceVendor: ua.device.vendor ?? UNKNOWN
    },
    pv: {
      entryTime: getTimestamp()
    },
    hasError: false,
    networkStatus: NetworkStatus.ONLINE,
    networkType: ""
  };
  const isBrowserEnv = isWindow(typeof window !== "undefined" ? window : 0);
  const isElectronEnv = !!((_b = (_a2 = window == null ? void 0 : window.process) == null ? void 0 : _a2.versions) == null ? void 0 : _b.electron);
  const getGlobal = () => {
    if (isBrowserEnv || isElectronEnv) {
      return window;
    }
    return {};
  };
  const _global = getGlobal();
  _global.__EASY_TRACK__ = __EASY_TRACK__;
  const isSupportFetch = () => "fetch" in _global;
  class Queue {
    constructor() {
      __publicField(this, "stack", []);
      __publicField(this, "isFlushing", false);
    }
    addFunc(fn) {
      if (!isFunction(fn)) {
        return;
      }
      if (!("requestIdleCallback" in _global || "Promise" in _global)) {
        fn();
        return;
      }
      this.stack.push(fn);
      if (!this.isFlushing) {
        this.isFlushing = true;
        if ("requestIdleCallback" in _global) {
          requestIdleCallback(() => this.flushStack());
        } else {
          Promise.resolve().then(() => this.flushStack());
        }
      }
    }
    clear() {
      this.stack = [];
    }
    getStack() {
      return this.stack;
    }
    flushStack() {
      const temp = this.stack.slice(0);
      this.stack = [];
      this.isFlushing = false;
      for (let i2 = 0; i2 < temp.length; i2++) {
        temp[i2]();
      }
    }
  }
  const replaceAop = (source, name, replacement, isForced = false) => {
    if (source === void 0) {
      return;
    }
    if (name in source || isForced) {
      const original = source[name];
      const wrapped = replacement(original);
      if (typeof wrapped === "function") {
        source[name] = wrapped;
      }
    }
  };
  const unknownToString = (target) => {
    if (isString(target)) {
      return target;
    }
    if (isUndefined(target)) {
      return "undefined";
    }
    return JSON.stringify(target);
  };
  const unknownToObject = (target) => {
    try {
      return JSON.parse(target);
    } catch (_error) {
      return target;
    }
  };
  const interceptStr = (str, interceptLength) => {
    if (isString(str)) {
      return str.slice(0, interceptLength) + (str.length > interceptLength ? `:截取前${interceptLength}个字符` : "");
    }
    return "";
  };
  const httpTransform = (data) => {
    const { checkHttpStatus } = options.get();
    const { response } = data;
    let status;
    let message = `请求成功, HTTP状态码(${response == null ? void 0 : response.status})`;
    if ((response == null ? void 0 : response.status) === 0) {
      status = StatusType.Error;
      message = `请求失败, HTTP状态码(${response == null ? void 0 : response.status}), ${fromHttpStatus(response == null ? void 0 : response.status)}`;
    } else if ((response == null ? void 0 : response.status) < HttpStatusCode.BAD_REQUEST) {
      status = StatusType.Ok;
      if (isFunction(checkHttpStatus)) {
        status = checkHttpStatus(response) ? StatusType.Ok : StatusType.Error;
        status === StatusType.Error && (message = `接口报错, 错误信息：${unknownToString(response)}`);
      }
    } else {
      status = StatusType.Error;
      message = `请求失败, HTTP状态码(${response == null ? void 0 : response.status}), ${fromHttpStatus(response == null ? void 0 : response.status)}`;
    }
    data.status = status;
    data.message = message;
    return data;
  };
  function fromHttpStatus(httpStatus) {
    if (httpStatus === 0) {
      return SpanStatus.Bad;
    }
    if (httpStatus < 400) {
      return SpanStatus.Ok;
    }
    if (httpStatus >= 400 && httpStatus < 500) {
      switch (httpStatus) {
        case 401:
          return SpanStatus.Unauthenticated;
        case 403:
          return SpanStatus.PermissionDenied;
        case 404:
          return SpanStatus.NotFound;
        case 409:
          return SpanStatus.AlreadyExists;
        case 413:
          return SpanStatus.FailedPrecondition;
        case 429:
          return SpanStatus.ResourceExhausted;
        default:
          return SpanStatus.InvalidArgument;
      }
    }
    if (httpStatus >= 500 && httpStatus < 600) {
      switch (httpStatus) {
        case 501:
          return SpanStatus.Unimplemented;
        case 503:
          return SpanStatus.Unavailable;
        case 504:
          return SpanStatus.DeadlineExceeded;
        default:
          return SpanStatus.InternalError;
      }
    }
    return SpanStatus.UnknownError;
  }
  const parseResponseHeaders = (allHeaders) => {
    const headers = {};
    allHeaders.trim().split(/[\r\n]+/).forEach((line) => {
      var _a3;
      const parts = line.split(": ");
      const key = (_a3 = parts.shift()) == null ? void 0 : _a3.toLowerCase();
      const value = parts.join(": ");
      key && (headers[key] = value);
    });
    return headers;
  };
  const getPVTime = (time, url) => {
    const { entryTime } = __EASY_TRACK__.pv;
    const leaveTime = time;
    const stayTime = time - entryTime;
    const pageUrl = url ?? getLocationHref();
    const referer = getCurrentReferrer();
    __EASY_TRACK__.pv.entryTime = time;
    return {
      entryTime,
      leaveTime,
      stayTime,
      pageUrl,
      referer
    };
  };
  const getElementXPath = (element) => {
    if (!element) {
      return null;
    }
    if (element === document.body) {
      return "/html/body";
    }
    let path = "";
    while (element && element.nodeType === Node.ELEMENT_NODE) {
      let index2 = 0;
      let sibling = element.previousSibling;
      while (sibling) {
        if (sibling.nodeType === Node.ELEMENT_NODE && sibling.nodeName === element.nodeName) {
          index2++;
        }
        sibling = sibling.previousSibling;
      }
      const tagName = element.nodeName.toLowerCase();
      const position = index2 ? `[${index2 + 1}]` : "";
      path = `/${tagName}${position}${path}`;
      element = element.parentElement;
    }
    return path;
  };
  function htmlElementAsString(target) {
    const tagName = target.tagName.toLowerCase();
    if (tagName === "body") {
      return "";
    }
    let classNames = target.classList.value;
    classNames = classNames !== "" ? ` class='${classNames}'` : "";
    const id = target.id ? ` id="${target.id}"` : "";
    let datasetResult = "";
    const dataset = target.dataset;
    for (const [key, value] of Object.entries(dataset)) {
      datasetResult += `${key}_${value};`;
    }
    datasetResult = datasetResult ? ` dataset=[${datasetResult}]` : "";
    const { innerText } = target;
    return `<${tagName}${id}${classNames !== "" ? classNames : ""}${datasetResult}>${interceptStr(innerText, 250)}</${tagName}>`;
  }
  const getTargetDomByPointerEvent = (ev) => {
    const el = document.elementFromPoint(ev.pageX, ev.pageY);
    return el ? el : null;
  };
  const getDefaultOptions = () => ({
    dsn: "",
    appCode: "",
    appVersion: "",
    userId: "",
    report: {
      headers: {},
      reportType: "http"
    },
    cacheType: "storage",
    switchs: {
      eventTrack: true,
      exposureTrack: true,
      xhr: true,
      fetch: true,
      error: true,
      unhandledrejection: true,
      blankScreen: true,
      hashchange: true,
      history: false,
      performance: true,
      resource: true,
      recordScreen: true,
      network: true,
      logger: true
    },
    containerElements: ["html", "body", "#app", "#root"],
    skeleton: false,
    maxEvents: 10,
    historyUrlsNum: 3,
    exposureTrack: {},
    debug: false
  });
  class Options {
    constructor(options2) {
      __publicField(this, "options", getDefaultOptions());
      __publicField(this, "switchMap", {});
      if (options2) {
        this.options = options2;
      }
    }
    set(otps) {
      const { options: options2 } = this;
      this.options = merge(options2, otps);
      this.setSwitchMap();
    }
    get() {
      return {
        ...this.options,
        report: this.getReport(),
        globalClickListeners: this.getGlobalClickListeners()
      };
    }
    setCacheType(cacheType) {
      this.options = merge(this.options, { cacheType });
    }
    getReport() {
      return this.options.report;
    }
    getGlobalClickListeners() {
      const { globalClickListeners } = this.options;
      if (!isArray(globalClickListeners)) return [];
      return uniqBy(globalClickListeners, (o2) => `${o2.selector}${o2.elementText}${o2.data}`);
    }
    getSwitchMap() {
      return this.switchMap;
    }
    getSwitchs() {
      var _a3;
      const curSwitchs = ((_a3 = this.options) == null ? void 0 : _a3.switchs) ?? {};
      return {
        ...curSwitchs
      };
    }
    /**
     * 设置监控功能开关
     *
     * @memberof Options
     */
    setSwitchMap() {
      const {
        eventTrack: eventTrack2,
        exposureTrack,
        xhr,
        fetch: fetch2,
        error,
        unhandledrejection,
        blankScreen,
        hashchange,
        history,
        performance: performance2,
        resource,
        recordScreen,
        network,
        logger: log
      } = this.getSwitchs();
      if (hashchange && history) {
        logger.warn("hashchange 和 history 不能同时开启, 需按项目路由模式开启");
      }
      this.switchMap[EventType$1.EVENT_TRACK] = eventTrack2;
      this.switchMap[EventType$1.EXPOSURE_TRACK] = exposureTrack;
      this.switchMap[EventType$1.RECORD_SCREEN] = recordScreen;
      this.switchMap[EventType$1.XHR] = xhr;
      this.switchMap[EventType$1.FETCH] = fetch2;
      this.switchMap[EventType$1.ERROR] = error;
      this.switchMap[EventType$1.UNHANDLEDREJECTION] = unhandledrejection;
      this.switchMap[EventType$1.BLANK_SCREEN] = blankScreen;
      this.switchMap[EventType$1.HASH_CHANGE] = hashchange;
      this.switchMap[EventType$1.HISTORY] = history;
      this.switchMap[EventType$1.PERFORMANCE] = performance2;
      this.switchMap[EventType$1.RESOURCE] = resource;
      this.switchMap[EventType$1.NETWORK] = network;
      this.switchMap[EventType$1.LOGGER] = log;
    }
  }
  const validateOptionMustFill = (val, name) => {
    if (typeof val === "function") {
      return true;
    }
    if (isUndefined(val)) {
      console.warn(`【${name}】参数必填`);
      return false;
    }
    return true;
  };
  const _validateMustFill = (options2) => {
    const validateList = [
      validateOptionMustFill(options2.dsn, "dsn"),
      validateOptionMustFill(options2.appCode, "appCode"),
      validateOptionMustFill(options2.userId, "userId")
    ];
    return validateList.every((res) => !!res);
  };
  const validateOption = (value, targetName, expectType) => {
    if (!value || isTypeofAny(value) === expectType) {
      return true;
    }
    console.error(
      `[${PACKAGES_NAME}]:`,
      `参数类型错误!【${targetName}】期望传入${expectType}类型，目前是${isTypeofAny(value)}类型`
    );
    return false;
  };
  const _validateInitOption = (options2) => {
    const {
      dsn,
      appCode,
      appVersion,
      userId,
      uuid,
      report: report2,
      cacheType,
      globalClickListeners,
      containerElements,
      skeleton,
      switchs,
      maxEvents,
      checkHttpStatus,
      filterHttpUrl,
      historyUrlsNum,
      performance: performance2,
      exposureTrack,
      debug
    } = options2;
    const validateList = [
      validateOption(dsn, "dsn", "string"),
      validateOption(appCode, "appCode", "string"),
      validateOption(appVersion, "appVersion", "string"),
      validateOption(cacheType, "cacheType", "string"),
      validateOption(globalClickListeners, "globalClickListeners", "array"),
      validateOption(containerElements, "containerElements", "array"),
      validateOption(skeleton, "skeleton", "boolean"),
      validateOption(switchs, "switchs", "object"),
      validateOption(maxEvents, "maxEvents", "number"),
      validateOption(checkHttpStatus, "checkHttpStatus", "function"),
      validateOption(filterHttpUrl, "filterHttpUrl", "function"),
      validateOption(historyUrlsNum, "historyUrlsNum", "number"),
      validateOption(debug, "debug", "boolean")
    ];
    if (userId && typeof userId === "function") {
      validateList.push(validateOption(userId, "userId", "function"));
    } else {
      validateList.push(validateOption(userId, "userId", "string"));
    }
    if (uuid && typeof uuid === "function") {
      validateList.push(validateOption(uuid, "uuid", "function"));
    } else {
      validateList.push(validateOption(uuid, "uuid", "string"));
    }
    if (report2 && typeof report2 === "object") {
      if (typeof report2.headers === "function") {
        validateList.push(validateOption(report2.headers, "report.headers", "function"));
      } else {
        validateList.push(validateOption(report2.headers, "report.headers", "object"));
      }
      validateList.push(validateOption(report2.reportType, "report.reportType", "string"));
      validateList.push(validateOption(report2.format, "report.format", "function"));
      validateList.push(validateOption(report2.customReport, "report.customReport", "function"));
      validateList.push(validateOption(report2.isReport, "report.isReport", "function"));
    }
    if (performance2) {
      validateList.push(
        validateOption(performance2.filterLongtask, "performance.filterLongtask", "function")
      );
    }
    validateList.push(validateOption(exposureTrack, "exposureTrack", "object"));
    validateList.push(validateOption(exposureTrack == null ? void 0 : exposureTrack.elements, "exposureTrack.elements", "array"));
    validateList.push(
      validateOption(exposureTrack == null ? void 0 : exposureTrack.exposureIdAttr, "exposureTrack.exposureIdAttr", "string")
    );
    validateList.push(
      validateOption(exposureTrack == null ? void 0 : exposureTrack.minObserveTime, "exposureTrack.minObserveTime", "number")
    );
    return validateList.every((res) => !!res);
  };
  const options = new Options();
  function initOptions(initOptions2) {
    const { debug } = initOptions2;
    logger.setFlag(debug);
    if (!_validateMustFill(initOptions2) || !_validateInitOption(initOptions2)) {
      console.error(`[${PACKAGES_NAME}]:`, "初始化失败, 请检查初始化参数");
      return false;
    }
    options.set(initOptions2);
    const curOptions = options.get();
    const { dsn, report: reportOptions, appCode, cacheType, maxEvents, userId } = curOptions;
    eventTrack.setOptions({
      appCode,
      cacheType,
      maxEvents
    });
    report.setOptions({
      dsn,
      userId,
      ...reportOptions
    });
    return true;
  }
  class Report {
    constructor() {
      __publicField(this, "options");
      __publicField(this, "queue", new Queue());
      __publicField(this, "uuid");
    }
    setOptions(options$1) {
      const { uuid } = options.get();
      if (uuid) {
        this.uuid = isFunction(uuid) ? uuid() : uuid;
      } else {
        load().then((fp) => fp.get()).then((result2) => this.uuid = result2.visitorId);
      }
      this.options = options$1;
    }
    getUserId() {
      const { userId } = this.options;
      return isFunction(userId) ? userId() : userId;
    }
    getHeaders() {
      const { headers } = this.options;
      return isFunction(headers) ? headers() : headers;
    }
    /**
     * 获取公共上报数据
     *
     * @return {*}  {CommonReportParams}
     * @memberof Report
     */
    getCommonReportData() {
      return {
        userId: this.getUserId(),
        uuid: this.uuid,
        deviceInfo: __EASY_TRACK__.deviceInfo
      };
    }
    /**
     * 获取上报数据
     *
     * @param {EventParams} data
     * @return {*}  {ReportParams}
     * @memberof Report
     */
    getReportData(data) {
      return {
        ...data,
        ...this.getCommonReportData()
      };
    }
    /**
     * 上报数据
     *
     * @param {(EventParams | EventParams[])} data
     * @param {Callback} [beforeSend]
     * @return {*}
     * @memberof Report
     */
    async send(data, beforeSend) {
      const currentData = isArray(data) ? data : [data];
      const { dsn: url, format, customReport, reportType = "http", isReport } = this.options;
      let reportData = currentData.map((item) => this.getReportData(item));
      reportData = isFunction(format) ? format(reportData) : reportData;
      if (isFunction(isReport) && !isReport(reportData)) {
        logger.log("取消上报:", reportData);
        return;
      }
      logger.log("上报数据:", reportData);
      isFunction(beforeSend) && (beforeSend == null ? void 0 : beforeSend());
      if (isFunction(customReport)) {
        customReport(reportData);
        return;
      }
      switch (reportType) {
        case "beacon":
          this.beaconReport(url, reportData);
          break;
        case "img":
          this.imgReport(url, reportData);
          break;
        default:
          this.httpReport(url, reportData);
          break;
      }
    }
    beaconReport(url, data) {
      return navigator.sendBeacon(url, JSON.stringify(data));
    }
    imgReport(url, data) {
      const requestFunc = () => {
        const img = new Image();
        const spliceStr = url.indexOf("?") === -1 ? "?" : "&";
        img.src = `${url}${spliceStr}data=${encodeURIComponent(JSON.stringify(data))}`;
      };
      this.queue.addFunc(requestFunc);
    }
    async httpReport(url, data) {
      isSupportFetch() ? this.fetchReport(url, data) : this.xhrReport(url, data);
    }
    async fetchReport(url, data) {
      const headers = this.getHeaders() ?? {};
      const allHeaders = {
        "Content-Type": "application/json"
      };
      Object.keys(headers).forEach((key) => {
        allHeaders[key] = encodeURIComponent(headers[key]);
      });
      const requestFunc = () => {
        fetch(url, {
          method: RequestMethod.POST,
          body: JSON.stringify(data),
          headers: allHeaders
        });
      };
      this.queue.addFunc(requestFunc);
    }
    async xhrReport(url, data) {
      const requestFunc = () => {
        const xhr = new XMLHttpRequest();
        xhr.open(RequestMethod.POST, url, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        const headers = this.getHeaders() ?? {};
        Object.keys(headers).forEach((key) => {
          xhr.setRequestHeader(key, encodeURIComponent(headers[key]));
        });
        xhr.send(JSON.stringify(data));
      };
      this.queue.addFunc(requestFunc);
    }
  }
  const report = new Report();
  const storage = new TrackStorage({
    suffix: STORAGE_KEY_SUFFIX,
    version: STORAGE_VERSION
  });
  const db = new TrackIndexedDB({
    dbNamesuffix: STORAGE_KEY_SUFFIX,
    dbVersion: STORAGE_VERSION,
    stores: [
      {
        name: DB_EVENT_STORE_NAME,
        params: { keyPath: DB_EVENT_STORE_PRIMARY_KEY }
      }
    ]
  });
  class EventTrack {
    constructor() {
      __publicField(this, "cacheType");
      __publicField(this, "appCode");
      // 待上报队列数据
      __publicField(this, "data", []);
      // 待上传队列数据最大个数
      __publicField(this, "maxEvents");
    }
    setOptions(options2) {
      const { appCode, cacheType = "normal", maxEvents = 10 } = options2;
      this.appCode = appCode;
      this.cacheType = cacheType;
      this.maxEvents = maxEvents;
    }
    /**
     * 添加上报数据到待上报队列中
     *
     * - 判断上报数据是否合法
     * - 记录上报数据到相应的缓存中
     * - 判断上报数据是否达到/超出队列个数最大限制, 达到则上报数据
     *
     * @param {EventParams} params
     * @memberof EventTrack
     */
    async add(params) {
      const { maxEvents, cacheType } = this;
      logger.log("添加到队列:", params);
      if (!this.validate(params)) {
        return;
      }
      const curParams = {
        ...params,
        baseInfo: this.getBaseInfo()
      };
      this.setErrorForRecordScreen(curParams);
      let data = [];
      switch (cacheType) {
        case "normal":
          this.data.push(curParams);
          data = this.data;
          break;
        case "storage":
          storage.putItem(this.appCode, curParams);
          data = storage.getItem(this.appCode) || [];
          break;
        case "db":
          await db.add(DB_EVENT_STORE_NAME, curParams);
          data = await db.getAll(DB_EVENT_STORE_NAME) || [];
          break;
      }
      if (data.length >= maxEvents) {
        await this.report(cloneDeep(data));
      }
    }
    /**
     * 立即上报数据
     *
     * - 实际上是调用 `report.send` 发送数据
     *
     * @param {(EventParams | EventParams[])} params
     * @param {Callback} [beforeSend]
     * @return {*}
     * @memberof Report
     */
    async send(params, beforeSend) {
      const curParams = (Array.isArray(params) ? params : [params]).map((it) => {
        return {
          ...it,
          baseInfo: this.getBaseInfo()
        };
      });
      this.setErrorForRecordScreen(curParams);
      report.send(curParams, beforeSend);
    }
    /**
     * 获取基础信息对象
     *
     * @private
     * @return {*}  {BaseInfo}
     * @memberof EventTrack
     */
    getBaseInfo() {
      const curSize = getCurrentSize();
      const curConnection = getCurrentNetworkInfo();
      const baseInfo = {
        domain: getCurrentDomain(),
        href: getLocationHref(),
        referer: getCurrentReferrer(),
        userAgent: getUserAgent(),
        screenWidth: curSize.screenWidth,
        screenHeight: curSize.screenHeight,
        vireportWidth: curSize.viewportWidth,
        vireportHeight: curSize.viewportHeight,
        language: getCurrentLanguage(),
        dpr: getCurrentDpr(),
        networkType: (curConnection == null ? void 0 : curConnection.effectiveType) || "",
        networkSpeed: (curConnection == null ? void 0 : curConnection.downlink) ?? 0
      };
      return baseInfo;
    }
    /**
     * 设置错误状态
     *
     * - 当请求报错时出现错误时, 设置 `__EASY_TRACK__.hasError` 为 `true`,
     *   用于上报当前时间段的操作录屏
     *
     * @private
     * @param {EventParams} params
     * @memberof EventTrack
     */
    setErrorForRecordScreen(params) {
      const paramsList = Array.isArray(params) ? params : [params];
      paramsList.forEach((curParams) => {
        if (curParams.type === EventType$1.REQUEST && curParams.status === StatusType.Error) {
          __EASY_TRACK__.hasError = true;
        }
      });
    }
    async clearReportData() {
      const { cacheType, appCode } = this;
      switch (cacheType) {
        case "normal":
          this.data = [];
          break;
        case "storage":
          storage.removeItem(appCode);
          break;
        case "db":
          await db.clear(DB_EVENT_STORE_NAME);
          break;
      }
    }
    /**
     * 上报数据
     *
     * @private
     * @param {EventParams[]} data
     * @memberof EventTrack
     */
    async report(data) {
      await this.clearReportData();
      report.send(data, async () => await this.clearReportData());
    }
    validate(params) {
      if (!isPlainObject(params)) {
        logger.warn("上报参数检验错误, 参数必须为对象");
        return false;
      }
      const keys2 = ["category", "data", "status", "time", "type"];
      if (Object.keys(params).some((key) => !keys2.includes(key))) {
        logger.warn("上报参数检验错误, 缺少必要参数");
        return false;
      }
      return true;
    }
  }
  const eventTrack = new EventTrack();
  var e, n$1, t, r, i, o = -1, a = function(e2) {
    addEventListener("pageshow", function(n2) {
      n2.persisted && (o = n2.timeStamp, e2(n2));
    }, true);
  }, c = function() {
    var e2 = self.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0];
    if (e2 && e2.responseStart > 0 && e2.responseStart < performance.now()) return e2;
  }, u = function() {
    var e2 = c();
    return e2 && e2.activationStart || 0;
  }, f = function(e2, n2) {
    var t2 = c(), r2 = "navigate";
    o >= 0 ? r2 = "back-forward-cache" : t2 && (document.prerendering || u() > 0 ? r2 = "prerender" : document.wasDiscarded ? r2 = "restore" : t2.type && (r2 = t2.type.replace(/_/g, "-")));
    return { name: e2, value: void 0 === n2 ? -1 : n2, rating: "good", delta: 0, entries: [], id: "v4-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12), navigationType: r2 };
  }, s = function(e2, n2, t2) {
    try {
      if (PerformanceObserver.supportedEntryTypes.includes(e2)) {
        var r2 = new PerformanceObserver(function(e3) {
          Promise.resolve().then(function() {
            n2(e3.getEntries());
          });
        });
        return r2.observe(Object.assign({ type: e2, buffered: true }, t2 || {})), r2;
      }
    } catch (e3) {
    }
  }, d = function(e2, n2, t2, r2) {
    var i2, o2;
    return function(a2) {
      n2.value >= 0 && (a2 || r2) && ((o2 = n2.value - (i2 || 0)) || void 0 === i2) && (i2 = n2.value, n2.delta = o2, n2.rating = function(e3, n3) {
        return e3 > n3[1] ? "poor" : e3 > n3[0] ? "needs-improvement" : "good";
      }(n2.value, t2), e2(n2));
    };
  }, l = function(e2) {
    requestAnimationFrame(function() {
      return requestAnimationFrame(function() {
        return e2();
      });
    });
  }, p = function(e2) {
    document.addEventListener("visibilitychange", function() {
      "hidden" === document.visibilityState && e2();
    });
  }, v = function(e2) {
    var n2 = false;
    return function() {
      n2 || (e2(), n2 = true);
    };
  }, m = -1, h = function() {
    return "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0;
  }, g = function(e2) {
    "hidden" === document.visibilityState && m > -1 && (m = "visibilitychange" === e2.type ? e2.timeStamp : 0, T());
  }, y = function() {
    addEventListener("visibilitychange", g, true), addEventListener("prerenderingchange", g, true);
  }, T = function() {
    removeEventListener("visibilitychange", g, true), removeEventListener("prerenderingchange", g, true);
  }, E = function() {
    return m < 0 && (m = h(), y(), a(function() {
      setTimeout(function() {
        m = h(), y();
      }, 0);
    })), { get firstHiddenTime() {
      return m;
    } };
  }, C = function(e2) {
    document.prerendering ? addEventListener("prerenderingchange", function() {
      return e2();
    }, true) : e2();
  }, b = [1800, 3e3], S = function(e2, n2) {
    n2 = n2 || {}, C(function() {
      var t2, r2 = E(), i2 = f("FCP"), o2 = s("paint", function(e3) {
        e3.forEach(function(e4) {
          "first-contentful-paint" === e4.name && (o2.disconnect(), e4.startTime < r2.firstHiddenTime && (i2.value = Math.max(e4.startTime - u(), 0), i2.entries.push(e4), t2(true)));
        });
      });
      o2 && (t2 = d(e2, i2, b, n2.reportAllChanges), a(function(r3) {
        i2 = f("FCP"), t2 = d(e2, i2, b, n2.reportAllChanges), l(function() {
          i2.value = performance.now() - r3.timeStamp, t2(true);
        });
      }));
    });
  }, L = [0.1, 0.25], w = function(e2, n2) {
    n2 = n2 || {}, S(v(function() {
      var t2, r2 = f("CLS", 0), i2 = 0, o2 = [], c2 = function(e3) {
        e3.forEach(function(e4) {
          if (!e4.hadRecentInput) {
            var n3 = o2[0], t3 = o2[o2.length - 1];
            i2 && e4.startTime - t3.startTime < 1e3 && e4.startTime - n3.startTime < 5e3 ? (i2 += e4.value, o2.push(e4)) : (i2 = e4.value, o2 = [e4]);
          }
        }), i2 > r2.value && (r2.value = i2, r2.entries = o2, t2());
      }, u2 = s("layout-shift", c2);
      u2 && (t2 = d(e2, r2, L, n2.reportAllChanges), p(function() {
        c2(u2.takeRecords()), t2(true);
      }), a(function() {
        i2 = 0, r2 = f("CLS", 0), t2 = d(e2, r2, L, n2.reportAllChanges), l(function() {
          return t2();
        });
      }), setTimeout(t2, 0));
    }));
  }, A = 0, I = 1 / 0, P = 0, M = function(e2) {
    e2.forEach(function(e3) {
      e3.interactionId && (I = Math.min(I, e3.interactionId), P = Math.max(P, e3.interactionId), A = P ? (P - I) / 7 + 1 : 0);
    });
  }, k = function() {
    return e ? A : performance.interactionCount || 0;
  }, F = function() {
    "interactionCount" in performance || e || (e = s("event", M, { type: "event", buffered: true, durationThreshold: 0 }));
  }, D = [], x$2 = /* @__PURE__ */ new Map(), R = 0, B = function() {
    var e2 = Math.min(D.length - 1, Math.floor((k() - R) / 50));
    return D[e2];
  }, H = [], q = function(e2) {
    if (H.forEach(function(n3) {
      return n3(e2);
    }), e2.interactionId || "first-input" === e2.entryType) {
      var n2 = D[D.length - 1], t2 = x$2.get(e2.interactionId);
      if (t2 || D.length < 10 || e2.duration > n2.latency) {
        if (t2) e2.duration > t2.latency ? (t2.entries = [e2], t2.latency = e2.duration) : e2.duration === t2.latency && e2.startTime === t2.entries[0].startTime && t2.entries.push(e2);
        else {
          var r2 = { id: e2.interactionId, latency: e2.duration, entries: [e2] };
          x$2.set(r2.id, r2), D.push(r2);
        }
        D.sort(function(e3, n3) {
          return n3.latency - e3.latency;
        }), D.length > 10 && D.splice(10).forEach(function(e3) {
          return x$2.delete(e3.id);
        });
      }
    }
  }, O = function(e2) {
    var n2 = self.requestIdleCallback || self.setTimeout, t2 = -1;
    return e2 = v(e2), "hidden" === document.visibilityState ? e2() : (t2 = n2(e2), p(e2)), t2;
  }, N = [200, 500], j = function(e2, n2) {
    "PerformanceEventTiming" in self && "interactionId" in PerformanceEventTiming.prototype && (n2 = n2 || {}, C(function() {
      var t2;
      F();
      var r2, i2 = f("INP"), o2 = function(e3) {
        O(function() {
          e3.forEach(q);
          var n3 = B();
          n3 && n3.latency !== i2.value && (i2.value = n3.latency, i2.entries = n3.entries, r2());
        });
      }, c2 = s("event", o2, { durationThreshold: null !== (t2 = n2.durationThreshold) && void 0 !== t2 ? t2 : 40 });
      r2 = d(e2, i2, N, n2.reportAllChanges), c2 && (c2.observe({ type: "first-input", buffered: true }), p(function() {
        o2(c2.takeRecords()), r2(true);
      }), a(function() {
        R = k(), D.length = 0, x$2.clear(), i2 = f("INP"), r2 = d(e2, i2, N, n2.reportAllChanges);
      }));
    }));
  }, _ = [2500, 4e3], z = {}, G = function(e2, n2) {
    n2 = n2 || {}, C(function() {
      var t2, r2 = E(), i2 = f("LCP"), o2 = function(e3) {
        n2.reportAllChanges || (e3 = e3.slice(-1)), e3.forEach(function(e4) {
          e4.startTime < r2.firstHiddenTime && (i2.value = Math.max(e4.startTime - u(), 0), i2.entries = [e4], t2());
        });
      }, c2 = s("largest-contentful-paint", o2);
      if (c2) {
        t2 = d(e2, i2, _, n2.reportAllChanges);
        var m2 = v(function() {
          z[i2.id] || (o2(c2.takeRecords()), c2.disconnect(), z[i2.id] = true, t2(true));
        });
        ["keydown", "click"].forEach(function(e3) {
          addEventListener(e3, function() {
            return O(m2);
          }, true);
        }), p(m2), a(function(r3) {
          i2 = f("LCP"), t2 = d(e2, i2, _, n2.reportAllChanges), l(function() {
            i2.value = performance.now() - r3.timeStamp, z[i2.id] = true, t2(true);
          });
        });
      }
    });
  }, J = [800, 1800], K = function e2(n2) {
    document.prerendering ? C(function() {
      return e2(n2);
    }) : "complete" !== document.readyState ? addEventListener("load", function() {
      return e2(n2);
    }, true) : setTimeout(n2, 0);
  }, Q = function(e2, n2) {
    n2 = n2 || {};
    var t2 = f("TTFB"), r2 = d(e2, t2, J, n2.reportAllChanges);
    K(function() {
      var i2 = c();
      i2 && (t2.value = Math.max(i2.responseStart - u(), 0), t2.entries = [i2], r2(true), a(function() {
        t2 = f("TTFB", 0), (r2 = d(e2, t2, J, n2.reportAllChanges))(true);
      }));
    });
  }, U = { passive: true, capture: true }, V = /* @__PURE__ */ new Date(), W = function(e2, i2) {
    n$1 || (n$1 = i2, t = e2, r = /* @__PURE__ */ new Date(), Z(removeEventListener), X());
  }, X = function() {
    if (t >= 0 && t < r - V) {
      var e2 = { entryType: "first-input", name: n$1.type, target: n$1.target, cancelable: n$1.cancelable, startTime: n$1.timeStamp, processingStart: n$1.timeStamp + t };
      i.forEach(function(n2) {
        n2(e2);
      }), i = [];
    }
  }, Y = function(e2) {
    if (e2.cancelable) {
      var n2 = (e2.timeStamp > 1e12 ? /* @__PURE__ */ new Date() : performance.now()) - e2.timeStamp;
      "pointerdown" == e2.type ? function(e3, n3) {
        var t2 = function() {
          W(e3, n3), i2();
        }, r2 = function() {
          i2();
        }, i2 = function() {
          removeEventListener("pointerup", t2, U), removeEventListener("pointercancel", r2, U);
        };
        addEventListener("pointerup", t2, U), addEventListener("pointercancel", r2, U);
      }(n2, e2) : W(n2, e2);
    }
  }, Z = function(e2) {
    ["mousedown", "keydown", "touchstart", "pointerdown"].forEach(function(n2) {
      return e2(n2, Y, U);
    });
  }, $ = [100, 300], ee = function(e2, r2) {
    r2 = r2 || {}, C(function() {
      var o2, c2 = E(), u2 = f("FID"), l2 = function(e3) {
        e3.startTime < c2.firstHiddenTime && (u2.value = e3.processingStart - e3.startTime, u2.entries.push(e3), o2(true));
      }, m2 = function(e3) {
        e3.forEach(l2);
      }, h2 = s("first-input", m2);
      o2 = d(e2, u2, $, r2.reportAllChanges), h2 && (p(v(function() {
        m2(h2.takeRecords()), h2.disconnect();
      })), a(function() {
        var a2;
        u2 = f("FID"), o2 = d(e2, u2, $, r2.reportAllChanges), i = [], t = -1, n$1 = null, Z(addEventListener), a2 = l2, i.push(a2), X();
      }));
    });
  };
  const getLCP = (cb) => {
    const entryHandler = (entries2) => {
      for (const entry of entries2.getEntries()) {
        observer2.disconnect();
        cb({
          name: "LCP",
          value: entry.startTime,
          rating: entry.startTime > 2500 ? "poor" : "good"
        });
      }
    };
    const observer2 = new PerformanceObserver(entryHandler);
    observer2.observe({ type: "largest-contentful-paint", buffered: true });
  };
  function getFID(cb) {
    const entryHandler = (entries2) => {
      for (const entry of entries2.getEntries()) {
        observer2.disconnect();
        const eventEntry = entry;
        const value = eventEntry.processingStart - eventEntry.startTime;
        cb({
          name: "FID",
          value,
          rating: value > 100 ? "poor" : "good"
        });
      }
    };
    const observer2 = new PerformanceObserver(entryHandler);
    observer2.observe({ type: "first-input", buffered: true });
  }
  const getCLS = (cb) => {
    let clsValue = 0;
    let sessionValue = 0;
    let sessionEntries = [];
    const entryHandler = (entries2) => {
      for (const entry of entries2.getEntries()) {
        if (!entry.hadRecentInput) {
          const firstSessionEntry = sessionEntries[0];
          const lastSessionEntry = sessionEntries[sessionEntries.length - 1];
          if (sessionValue && entry.startTime - lastSessionEntry.startTime < 1e3 && entry.startTime - firstSessionEntry.startTime < 5e3) {
            sessionValue += entry.value;
            sessionEntries.push(entry);
          } else {
            sessionValue = entry.value;
            sessionEntries = [entry];
          }
          if (sessionValue > clsValue) {
            clsValue = sessionValue;
            observer2.disconnect();
            cb({
              name: "CLS",
              value: clsValue,
              rating: clsValue > 2500 ? "poor" : "good"
            });
          }
        }
      }
    };
    const observer2 = new PerformanceObserver(entryHandler);
    observer2.observe({ type: "layout-shift", buffered: true });
  };
  function getFCP(callback) {
    const entryHandler = (entries2) => {
      for (const entry of entries2.getEntries()) {
        if (entry.name === "first-contentful-paint") {
          observer2.disconnect();
          callback({
            name: "FCP",
            value: entry.startTime,
            rating: entry.startTime > 2500 ? "poor" : "good"
          });
        }
      }
    };
    const observer2 = new PerformanceObserver(entryHandler);
    observer2.observe({ type: "paint", buffered: true });
  }
  function getTTFB(cb) {
    on$1({
      el: window,
      eventName: "load",
      event: () => {
        const { responseStart, navigationStart } = window.performance.timing;
        const value = responseStart - navigationStart;
        cb({
          name: "TTFB",
          value,
          rating: value > 100 ? "poor" : "good"
        });
      }
    });
  }
  const onFSP = (cb) => {
    getFirstScreenPaint((res) => {
      const data = {
        name: "FSP",
        value: res,
        rating: res > 2500 ? "poor" : "good"
      };
      cb(data);
    });
  };
  function getFirstScreenPaint(cb) {
    if ("requestIdleCallback" in window) {
      requestIdleCallback((deadline) => {
        if (deadline.timeRemaining() > 0) {
          observeFirstScreenPaint(cb);
        }
      });
    } else {
      observeFirstScreenPaint(cb);
    }
  }
  let observer;
  let timer;
  let entries = [];
  function getRenderTime() {
    let startTime = (/* @__PURE__ */ new Date()).getTime();
    entries.forEach((entry) => {
      if (entry.startTime > startTime) {
        startTime = entry.startTime;
      }
    });
    return startTime - performance.timing.navigationStart;
  }
  function checkDOMChange(callback) {
    cancelAnimationFrame(timer);
    timer = requestAnimationFrame(() => {
      const isOnLoaded = document.readyState === "complete";
      if (isOnLoaded) {
        observer && observer.disconnect();
        const firstScreenPaint = getRenderTime();
        callback && callback(firstScreenPaint);
        entries = [];
      } else {
        checkDOMChange(callback);
      }
    });
  }
  function observeFirstScreenPaint(cb) {
    const ignoreDOMList = ["STYLE", "SCRIPT", "LINK"];
    observer = new MutationObserver((mutationList) => {
      const entry = { children: [], startTime: 0 };
      for (const mutation of mutationList) {
        if (mutation.addedNodes.length && isInScreen(mutation.target)) {
          for (const node2 of mutation.addedNodes) {
            if (node2.nodeType === 1 && !ignoreDOMList.includes(node2.tagName) && isInScreen(node2)) {
              entry.children.push(node2);
            }
          }
        }
      }
      if (entry.children.length) {
        entry.startTime = (/* @__PURE__ */ new Date()).getTime();
        entries.push(entry);
      }
      checkDOMChange(cb);
    });
    observer.observe(document, {
      childList: true,
      // 监听添加或删除子节点
      subtree: true,
      // 监听整个子树
      characterData: true,
      // 监听元素的文本是否变化
      attributes: true
      // 监听元素的属性是否变化
    });
  }
  function isInScreen(dom) {
    const { left, top } = dom.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    return left < viewportWidth && top < viewportHeight;
  }
  function isSafari() {
    return /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
  }
  function isCache(entry) {
    return entry.deliveryType !== void 0 ? entry.deliveryType === "cache" : entry.transferSize === 0 || entry.transferSize !== 0 && entry.encodedBodySize === 0;
  }
  const getResources = () => {
    const entries2 = performance.getEntriesByType("resource");
    const list2 = entries2.filter((entry) => ["fetch", "xmlhttprequest", "beacon"].indexOf(entry.initiatorType) === -1).map((entry) => {
      entry.isCache = isCache(entry);
      return JSON.parse(JSON.stringify(entry));
    });
    return list2;
  };
  class WebPerformance {
    constructor() {
      this.getWebVitals((res) => {
        const { name, rating, value } = res;
        eventTrack.add({
          type: EventType$1.PERFORMANCE,
          category: "performance",
          status: StatusType.Ok,
          time: getTimestamp(),
          data: {
            name,
            rating,
            value
          }
        });
      });
      this.getLongtask();
      this.getMemory();
    }
    /**
     * 获取 FCP、LCP、TTFB、FID、FSP 等指标
     *
     * @private
     * @param {Callback} cb
     * @memberof WebPerformance
     */
    getWebVitals(cb) {
      onFSP(cb);
      if (isSafari()) {
        getLCP((res) => cb(res));
        getFID((res) => cb(res));
        getCLS((res) => cb(res));
        getFCP((res) => cb(res));
        getTTFB((res) => cb(res));
        return;
      }
      G((res) => cb(res));
      ee((res) => cb(res));
      w((res) => cb(res));
      S((res) => cb(res));
      Q((res) => cb(res));
      j((res) => cb(res));
    }
    /**
     * 获取长任务上报
     *
     * @private
     * @memberof WebPerformance
     */
    getLongtask() {
      const { performance: performance2 } = options.get();
      const observer2 = new PerformanceObserver((entries2) => {
        if (isFunction(performance2 == null ? void 0 : performance2.filterLongtask) && performance2.filterLongtask()) {
          return;
        }
        for (const long of entries2.getEntries()) {
          eventTrack.add({
            type: EventType$1.PERFORMANCE,
            category: "longtask",
            time: getTimestamp(),
            status: StatusType.Ok,
            data: JSON.parse(JSON.stringify(long))
          });
        }
      });
      observer2.observe({ entryTypes: ["longtask"] });
    }
    /**
     * 获取内存情况
     *
     * - 注意: safari、firefox不支持该属性
     *
     * @private
     * @memberof WebPerformance
     */
    getMemory() {
      on$1({
        el: _global,
        eventName: "load",
        event: () => {
          var _a3, _b2, _c;
          const performance2 = window.performance;
          if (performance2.memory) {
            eventTrack.add({
              type: EventType$1.PERFORMANCE,
              category: "memory",
              time: getTimestamp(),
              status: StatusType.Ok,
              data: {
                // 上下文内可用堆的最大体积，以字节计算
                jsHeapSizeLimit: ((_a3 = performance2.memory) == null ? void 0 : _a3.jsHeapSizeLimit) ?? 0,
                // 已分配的堆体积，以字节计算
                totalJSHeapSize: ((_b2 = performance2.memory) == null ? void 0 : _b2.totalJSHeapSize) ?? 0,
                // 当前 JS 堆活跃段（segment）的体积，以字节计算
                usedJSHeapSize: ((_c = performance2.memory) == null ? void 0 : _c.usedJSHeapSize) ?? 0
              }
            });
          }
        }
      });
    }
  }
  const listenWebPerformance = () => {
    new WebPerformance();
  };
  const listenWebResource = () => {
    on$1({
      el: _global,
      eventName: "load",
      event: () => {
        const source = getResources();
        eventEmitter.emit(EventType$1.RESOURCE, source);
      }
    });
  };
  const webResourceCallback = () => (data) => {
    eventTrack.add({
      type: EventType$1.PERFORMANCE,
      category: "resource",
      time: getTimestamp(),
      status: StatusType.Ok,
      data
    });
  };
  const listenBlankScreen = () => {
    const { containerElements = [], skeleton = false } = options.get();
    const blankScreen = new BlankScreen({
      skeleton,
      containerElements,
      callback: (status) => {
        eventTrack.add({
          status: StatusType.Ok,
          type: EventType$1.BLANK_SCREEN,
          category: "blank-screen",
          time: getTimestamp(),
          data: {
            status,
            url: getLocationHref()
          }
        });
      }
    });
    blankScreen.check();
  };
  class BlankScreen {
    constructor(options2) {
      /**
       * 是否骨架屏项目
       *
       * @private
       * @type {boolean}
       * @memberof BlankScreen
       */
      __publicField(this, "skeleton");
      /**
       * 元素容器
       *
       * @private
       * @type {string[]}
       * @memberof BlankScreen
       */
      __publicField(this, "containerElements");
      /**
       * 结果回调函数
       *
       * @private
       * @type {(status: StatusType) => void}
       * @memberof BlankScreen
       */
      __publicField(this, "callback");
      /**
       * 最大循环次数
       *
       * @private
       * @type {number}
       * @memberof BlankScreen
       */
      __publicField(this, "maxLoops");
      /**
       * 循环定时器
       *
       * @private
       * @type {NodeJS.Timeout}
       * @memberof BlankScreen
       */
      __publicField(this, "loopTimer", null);
      /**
       * 循环次数
       *
       * @private
       * @type {number}
       * @memberof BlankScreen
       */
      __publicField(this, "loopCount", 0);
      /**
       * 是否停止循环
       *
       * @private
       * @type {boolean}
       * @memberof BlankScreen
       */
      __publicField(this, "isStopedLoop", false);
      /**
       * 骨架屏初始元素列表
       *
       * @private
       * @type {string[]}
       * @memberof BlankScreen
       */
      __publicField(this, "skeletonInitList", []);
      /**
       * 骨架屏当前元素列表
       *
       * @private
       * @type {string[]}
       * @memberof BlankScreen
       */
      __publicField(this, "skeletonCurrentList", []);
      this.maxLoops = options2.maxLoops ?? 30;
      this.skeleton = options2.skeleton ?? false;
      this.containerElements = options2.containerElements ?? ["html", "body", "#app", "#root"];
      this.callback = options2.callback;
    }
    /**
     * 开始检测
     *
     * - 骨架屏项目: 一开始就检测
     * - 非骨架屏项目: 页面加载完毕后检测
     *
     * @static
     * @memberof BlankScreen
     */
    check() {
      if (this.skeleton) {
        document.readyState !== "complete" && this.idleCallback();
      } else {
        document.readyState === "complete" ? this.idleCallback() : _global.addEventListener("load", () => this.idleCallback());
      }
    }
    /**
     * 空闲回调执行检测白屏
     *
     * @private
     * @memberof BlankScreen
     */
    idleCallback() {
      !("requestIdleCallback" in _global) ? this.sampling() : requestIdleCallback((deadline) => {
        if (deadline.timeRemaining() > 0) {
          this.sampling();
        }
      });
    }
    /**
     * 开始抽样检查
     *
     * @private
     * @memberof BlankScreen
     */
    sampling() {
      if (this.isStopedLoop) {
        return;
      }
      let emptyPoints = 0;
      const checkPoints = 15;
      const centerPoints = checkPoints / 2 + 1;
      const allCheckPoints = checkPoints * 2 - 1;
      const { innerWidth, innerHeight } = _global;
      for (let i2 = 1; i2 <= checkPoints; i2++) {
        const xPosition = {
          x: innerWidth * i2 / (checkPoints + 1),
          y: innerHeight / 2
        };
        const yPosition = {
          x: innerWidth / 2,
          y: innerHeight * i2 / (checkPoints + 1)
        };
        const upDiagonalPosition = {
          x: innerWidth * i2 / (checkPoints + 1),
          y: innerHeight * i2 / (checkPoints + 1)
        };
        const downDiagonalPosition = {
          x: innerWidth * i2 / (checkPoints + 1),
          y: innerHeight - innerHeight * i2 / (checkPoints + 1)
        };
        const xElements = document.elementsFromPoint(xPosition.x, xPosition.y);
        const yElements = document.elementsFromPoint(yPosition.x, yPosition.y);
        const upDiagonalElements = document == null ? void 0 : document.elementsFromPoint(
          upDiagonalPosition.x,
          upDiagonalPosition.y
        );
        const downDiagonalElements = document == null ? void 0 : document.elementsFromPoint(
          downDiagonalPosition.x,
          downDiagonalPosition.y
        );
        if (this.isContainer(xElements[0])) {
          emptyPoints++;
        }
        if (i2 !== centerPoints) {
          if (this.isContainer(yElements[0]) && this.isContainer(upDiagonalElements[0]) && this.isContainer(downDiagonalElements[0])) {
            emptyPoints++;
          }
        }
      }
      if (emptyPoints !== allCheckPoints) {
        if (this.skeleton) {
          if (!this.loopCount) {
            this.startLoopCheck();
            return;
          }
          if (this.skeletonCurrentList.join() === this.skeletonInitList.join()) {
            if (this.loopCount >= this.maxLoops) {
              isFunction(this.callback) && this.callback(StatusType.Error);
              this.stopLoopCheck();
            }
            return;
          }
        }
        this.stopLoopCheck();
      } else {
        this.startLoopCheck();
      }
      const result2 = emptyPoints === allCheckPoints ? StatusType.Error : StatusType.Ok;
      if (result2 === StatusType.Ok || this.loopCount >= this.maxLoops) {
        isFunction(this.callback) && this.callback(result2);
        this.stopLoopCheck();
      }
    }
    /**
     * 开始轮询检测
     *
     * - 每2秒执行一次
     *
     * @private
     * @memberof BlankScreen
     */
    startLoopCheck() {
      if (this.loopCount >= this.maxLoops) {
        this.stopLoopCheck();
      }
      if (this.loopTimer) {
        return;
      }
      this.loopTimer = setInterval(() => {
        this.skeleton && (this.skeletonCurrentList = []);
        this.loopCount++;
        this.idleCallback();
      }, 2e3);
    }
    /**
     * 停止轮询检测
     *
     * @private
     * @memberof BlankScreen
     */
    stopLoopCheck() {
      if (this.loopTimer) {
        clearInterval(this.loopTimer);
        this.loopTimer = null;
        this.loopCount = 0;
        this.isStopedLoop = true;
        logger.log("停止轮询检测", "是否已停止轮询:", this.isStopedLoop);
      }
    }
    /**
     * 判断元素是否是容器元素
     *
     * 注意: 如果是骨架屏项目, 还有记录初化元素和最新元素
     *
     * @param element 要判断的元素
     * @returns
     */
    isContainer(element) {
      var _a3;
      const selector = this.getSelector(element);
      if (this.skeleton) {
        this.loopCount > 0 ? this.skeletonCurrentList.push(selector) : this.skeletonInitList.push(selector);
      }
      return ((_a3 = this.containerElements) == null ? void 0 : _a3.indexOf(selector)) !== -1;
    }
    /**
     * 获取元素的名称
     *
     * @private
     * @param {Element} element
     * @return {*}  {string}
     * @memberof BlankScreen
     */
    getSelector(element) {
      var _a3;
      if (!element) {
        return "";
      }
      if ((element == null ? void 0 : element.id) && isString(element.id)) {
        return `#${element.id}`;
      }
      if ((element == null ? void 0 : element.className) && isString(element.className)) {
        return `.${element.className.split(" ").filter((item) => !!item).join(".")}`;
      }
      return (_a3 = element == null ? void 0 : element.nodeName) == null ? void 0 : _a3.toLowerCase();
    }
  }
  const listenHashChange = () => {
    on$1({
      el: _global,
      eventName: "hashchange",
      event: (ev) => {
        eventEmitter.emit(EventType$1.HASH_CHANGE, ev);
      }
    });
  };
  const hashCallback = () => {
    let urls = [];
    return (data) => {
      const { historyUrlsNum } = options.get();
      const { oldURL, newURL } = data;
      const { relative: currentFrom } = parseUrlToObj(oldURL);
      const { relative: currentTo } = parseUrlToObj(newURL);
      const isSame = currentFrom === currentTo;
      if (isSame) {
        return;
      }
      currentTo && urls.push(currentTo);
      urls = takeRight(urls, historyUrlsNum);
      const time = getTimestamp();
      const pv = getPVTime(time, currentFrom);
      eventTrack.add({
        type: EventType$1.PV,
        category: "hashchange",
        status: StatusType.Ok,
        time,
        data: {
          from: currentFrom,
          to: currentTo,
          urls: cloneDeep(urls),
          pv
        }
      });
    };
  };
  let lastHref = getLocationHref();
  const replaceHistoryPushState = () => {
    if (!("history" in _global) || !("pushState" in _global.history)) {
      return;
    }
    const replaceFunc = (originalFn) => function(...args) {
      const url = args == null ? void 0 : args[2];
      if (url) {
        const from = lastHref;
        const to = url;
        lastHref = to;
        eventEmitter.emit(EventType$1.HISTORY_PUSHSTATE, {
          from,
          to
        });
      }
      return originalFn.apply(this, args);
    };
    replaceAop(_global.history, "pushState", replaceFunc);
  };
  const replaceHistoryReplaceState = () => {
    if (!("history" in _global) || !("replaceState" in _global.history)) {
      return;
    }
    const replaceFunc = (originalFn) => function(...args) {
      const url = args == null ? void 0 : args[2];
      if (url) {
        const from = lastHref;
        const to = url;
        lastHref = to;
        eventEmitter.emit(EventType$1.HISTORY_REPLACESTATE, {
          from,
          to
        });
      }
      return originalFn.apply(this, args);
    };
    replaceAop(_global.history, "replaceState", replaceFunc);
  };
  const replaceHistory = () => {
    const onPopstate = window.onpopstate;
    window.onpopstate = function(...args) {
      const [lastPopState] = args;
      const { current, forward } = lastPopState.state || {};
      eventEmitter.emit(EventType$1.HISTORY, {
        from: forward,
        to: current
      });
      onPopstate == null ? void 0 : onPopstate.apply(this, args);
    };
  };
  const historyCallback = (category) => {
    let urls = [];
    return (data) => {
      const { historyUrlsNum } = options.get();
      const { from, to } = data;
      const { relative: currentFrom } = parseUrlToObj(from);
      const { relative: currentTo } = parseUrlToObj(to);
      const isSame = currentFrom === currentTo;
      if (isSame) {
        return;
      }
      if (category === EventType$1.HISTORY_REPLACESTATE) {
        const curLocationUrl = getLocationHref();
        const { relative: currentRelative } = parseUrlToObj(curLocationUrl);
        if (currentTo === currentRelative) {
          return;
        }
      }
      currentTo && urls.push(currentTo);
      urls = takeRight(urls, historyUrlsNum);
      const time = getTimestamp();
      const pv = getPVTime(time, currentFrom);
      eventTrack.add({
        type: EventType$1.PV,
        category,
        status: StatusType.Ok,
        time,
        data: {
          from: currentFrom || "/",
          to: currentTo || "/",
          urls: cloneDeep(urls),
          pv
        }
      });
    };
  };
  let isLoaded = false;
  const listenPageVisibility = () => {
    on$1({
      el: _global,
      eventName: "pageshow",
      event: () => {
        __EASY_TRACK__.pv.entryTime = getTimestamp();
      }
    });
    on$1({
      el: _global,
      eventName: "pagehide",
      event: () => {
        isLoaded && eventEmitter.emit(EventType$1.PV, "pagehide");
      }
    });
    on$1({
      el: _global,
      eventName: "visibilitychange",
      event: () => {
        if (document.visibilityState === "visible") {
          __EASY_TRACK__.pv.entryTime = getTimestamp();
        }
        if (document.visibilityState === "hidden") {
          isLoaded && eventEmitter.emit(EventType$1.PV, "pagehide");
        }
      }
    });
    on$1({
      el: _global,
      eventName: "beforeunload",
      event: () => {
        eventEmitter.emit(EventType$1.PV, "beforeunload");
      }
    });
  };
  const pvCallback = () => (category) => {
    const time = getTimestamp();
    const curPageUrl = getLocationHref();
    const pv = getPVTime(time, curPageUrl);
    if (category === "pagehide") {
      isLoaded = true;
    }
    eventTrack.add({
      type: EventType$1.PV,
      category,
      status: StatusType.Ok,
      time,
      data: {
        pv
      }
    });
  };
  const FIREFOX_SAFARI_STACK_REGEXP = /(^|@)\S+:\d+/;
  const CHROME_IE_STACK_REGEXP = /^\s*at .*(\S+:\d+|\(native\))/m;
  const SAFARI_NATIVE_CODE_REGEXP = /^(eval@)?(\[native code\])?$/;
  function parse$7(error, options2) {
    if (typeof error.stacktrace !== "undefined" || typeof error["opera#sourceloc"] !== "undefined")
      return parseOpera(error);
    else if (error.stack && error.stack.match(CHROME_IE_STACK_REGEXP))
      return parseV8OrIE(error);
    else if (error.stack)
      return parseFFOrSafari(error);
    else throw new Error("Cannot parse given Error object");
  }
  function extractLocation(urlLike) {
    if (!urlLike.includes(":"))
      return [urlLike, void 0, void 0];
    const regExp = /(.+?)(?::(\d+))?(?::(\d+))?$/;
    const parts = regExp.exec(urlLike.replace(/[()]/g, ""));
    return [parts[1], parts[2] || void 0, parts[3] || void 0];
  }
  function applySlice(lines, options2) {
    return lines;
  }
  function parseV8OrIE(error, options2) {
    return parseV8OrIeString(error.stack);
  }
  function parseV8OrIeString(stack, options2) {
    const filtered = applySlice(
      stack.split("\n").filter((line) => {
        return !!line.match(CHROME_IE_STACK_REGEXP);
      })
    );
    return filtered.map((line) => {
      if (line.includes("(eval ")) {
        line = line.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(,.*$)/g, "");
      }
      let sanitizedLine = line.replace(/^\s+/, "").replace(/\(eval code/g, "(").replace(/^.*?\s+/, "");
      const location = sanitizedLine.match(/ (\(.+\)$)/);
      sanitizedLine = location ? sanitizedLine.replace(location[0], "") : sanitizedLine;
      const locationParts = extractLocation(location ? location[1] : sanitizedLine);
      const functionName = location && sanitizedLine || void 0;
      const fileName = ["eval", "<anonymous>"].includes(locationParts[0]) ? void 0 : locationParts[0];
      return {
        function: functionName,
        file: fileName,
        line: locationParts[1] ? +locationParts[1] : void 0,
        col: locationParts[2] ? +locationParts[2] : void 0,
        raw: line
      };
    });
  }
  function parseFFOrSafari(error, options2) {
    return parseFFOrSafariString(error.stack);
  }
  function parseFFOrSafariString(stack, options2) {
    const filtered = applySlice(
      stack.split("\n").filter((line) => {
        return !line.match(SAFARI_NATIVE_CODE_REGEXP);
      })
    );
    return filtered.map((line) => {
      if (line.includes(" > eval"))
        line = line.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1");
      if (!line.includes("@") && !line.includes(":")) {
        return {
          function: line
        };
      } else {
        const functionNameRegex = /(([^\n\r"\u2028\u2029]*".[^\n\r"\u2028\u2029]*"[^\n\r@\u2028\u2029]*(?:@[^\n\r"\u2028\u2029]*"[^\n\r@\u2028\u2029]*)*(?:[\n\r\u2028\u2029][^@]*)?)?[^@]*)@/;
        const matches = line.match(functionNameRegex);
        const functionName = matches && matches[1] ? matches[1] : void 0;
        const locationParts = extractLocation(line.replace(functionNameRegex, ""));
        return {
          function: functionName,
          file: locationParts[0],
          line: locationParts[1] ? +locationParts[1] : void 0,
          col: locationParts[2] ? +locationParts[2] : void 0,
          raw: line
        };
      }
    });
  }
  function parseOpera(e2, options2) {
    if (!e2.stacktrace || e2.message.includes("\n") && e2.message.split("\n").length > e2.stacktrace.split("\n").length)
      return parseOpera9(e2);
    else if (!e2.stack)
      return parseOpera10(e2);
    else
      return parseOpera11(e2);
  }
  function parseOpera9(e2, options2) {
    const lineRE = /Line (\d+).*script (?:in )?(\S+)/i;
    const lines = e2.message.split("\n");
    const result2 = [];
    for (let i2 = 2, len = lines.length; i2 < len; i2 += 2) {
      const match = lineRE.exec(lines[i2]);
      if (match) {
        result2.push({
          file: match[2],
          line: +match[1],
          raw: lines[i2]
        });
      }
    }
    return applySlice(result2);
  }
  function parseOpera10(e2, options2) {
    const lineRE = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;
    const lines = e2.stacktrace.split("\n");
    const result2 = [];
    for (let i2 = 0, len = lines.length; i2 < len; i2 += 2) {
      const match = lineRE.exec(lines[i2]);
      if (match) {
        result2.push({
          function: match[3] || void 0,
          file: match[2],
          line: match[1] ? +match[1] : void 0,
          raw: lines[i2]
        });
      }
    }
    return applySlice(result2);
  }
  function parseOpera11(error, options2) {
    const filtered = applySlice(
      // @ts-expect-error missing stack property
      error.stack.split("\n").filter((line) => {
        return !!line.match(FIREFOX_SAFARI_STACK_REGEXP) && !line.match(/^Error created at/);
      })
    );
    return filtered.map((line) => {
      const tokens = line.split("@");
      const locationParts = extractLocation(tokens.pop());
      const functionCall = tokens.shift() || "";
      const functionName = functionCall.replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^)]*\)/g, "") || void 0;
      let argsRaw;
      if (functionCall.match(/\(([^)]*)\)/))
        argsRaw = functionCall.replace(/^[^(]+\(([^)]*)\)$/, "$1");
      const args = argsRaw === void 0 || argsRaw === "[arguments not available]" ? void 0 : argsRaw.split(",");
      return {
        function: functionName,
        args,
        file: locationParts[0],
        line: locationParts[1] ? +locationParts[1] : void 0,
        col: locationParts[2] ? +locationParts[2] : void 0,
        raw: line
      };
    });
  }
  function stackframesLiteToStackframes(liteStackframes) {
    return liteStackframes.map((liteStackframe) => {
      return {
        functionName: liteStackframe.function,
        args: liteStackframe.args,
        fileName: liteStackframe.file,
        lineNumber: liteStackframe.line,
        columnNumber: liteStackframe.col,
        source: liteStackframe.raw
      };
    });
  }
  function parse$6(error, options2) {
    return stackframesLiteToStackframes(parse$7(error));
  }
  const listenError = () => {
    on$1({
      el: _global,
      eventName: "error",
      event: (err2) => {
        eventEmitter.emit(EventType$1.ERROR, err2);
      },
      capture: true
    });
  };
  const errorCallback = () => (ev) => {
    const { target, error = "", message = "", name = "unknown" } = ev;
    if (!(target == null ? void 0 : target.localName)) {
      const [stackFrame] = parse$6(!target ? ev : error);
      const { fileName = "", functionName = "", columnNumber: column, lineNumber: line } = stackFrame;
      if (fileName.startsWith("chrome-extension://")) {
        return;
      }
      const data = {
        fileName,
        errorType: name,
        functionName,
        line,
        column,
        message
      };
      eventTrack.send({
        type: EventType$1.ERROR,
        category: "error",
        time: getTimestamp(),
        status: StatusType.Error,
        data
      });
    }
    if (target == null ? void 0 : target.localName) {
      const url = (target == null ? void 0 : target.src) || (target == null ? void 0 : target.href) || "";
      const data = {
        name: (target == null ? void 0 : target.localName) || "",
        url: interceptStr(url, 250),
        message: `${interceptStr(url, 250)}资源加载失败`
      };
      eventTrack.send({
        type: EventType$1.ERROR,
        category: "resource",
        time: getTimestamp(),
        status: StatusType.Error,
        data
      });
    }
  };
  const listenUnhandledrejection = () => {
    on$1({
      el: _global,
      eventName: "unhandledrejection",
      event: (ev) => {
        eventEmitter.emit(EventType$1.UNHANDLEDREJECTION, ev);
      }
    });
  };
  const unhandledrejectionCallback = () => (ev) => {
    const { reason } = ev;
    if (!(reason instanceof Error)) {
      return;
    }
    const [stackFrame] = parse$6(reason);
    const { fileName = "", functionName = "", columnNumber: column, lineNumber: line } = stackFrame;
    if (fileName.startsWith("chrome-extension://")) {
      return;
    }
    const data = {
      fileName,
      errorType: reason.name ?? "unknown",
      functionName,
      line,
      column,
      message: unknownToString(reason.message || reason.stack)
    };
    eventTrack.send({
      type: EventType$1.UNHANDLEDREJECTION,
      category: "unhandledrejection",
      status: StatusType.Error,
      time: getTimestamp(),
      data
    });
  };
  const listenEventTrack = () => {
    on$1({
      el: _global,
      eventName: "click",
      event: throttle$1((ev) => {
        eventEmitter.emit(EventType$1.EVENT_TRACK, ev);
      }, 250),
      capture: true
    });
    on$1({
      el: _global,
      eventName: "blur",
      event: throttle$1((ev) => {
        eventEmitter.emit(EventType$1.EVENT_TRACK, ev);
      }, 250),
      capture: true
    });
  };
  const eventTrackCallback = () => (ev) => {
    const curType = ev.type;
    const el = ev.type !== "blur" ? getTargetDomByPointerEvent(ev) : ev.target;
    const globalClickListeners = options.getGlobalClickListeners() ?? [{ selector: "[data-track]" }];
    if (!el || el && el instanceof Window) {
      return;
    }
    const isUnInputElement = !((el == null ? void 0 : el.hasAttribute("contenteditable")) && (el == null ? void 0 : el.getAttribute("contenteditable")) !== "false" || ["INPUT", "TEXTAREA"].includes(el == null ? void 0 : el.tagName));
    if (curType === "blur" && isUnInputElement) {
      return;
    }
    const htmlString = htmlElementAsString(el);
    const rect = el.getBoundingClientRect();
    let curEventName = el.getAttribute("data-event-name") ?? "";
    let curEventParams = el.getAttribute("data-event-params") ?? "";
    let xPath = getElementXPath(el);
    if (globalClickListeners.length > 0) {
      let isTargetEle = false;
      let curSelector = "";
      let curElementText = "";
      let curData = null;
      for (let i2 = 0; i2 < globalClickListeners.length; i2++) {
        const {
          selector = "",
          elementText = "",
          eventName = "",
          data = ""
        } = globalClickListeners[i2];
        curSelector = selector;
        curElementText = elementText;
        curData = data;
        if (selector) {
          const elements = document.querySelectorAll(selector);
          const curEle = findTargetNode(el, [...elements]);
          if (curEle) {
            curEventName = curEventName || curEle.getAttribute("data-event-name") || eventName || "";
            curEventParams = curEventParams || curEle.getAttribute("data-event-params") || "";
          }
          isTargetEle = !!curEle;
        } else if (el.textContent === elementText) {
          isTargetEle = true;
        }
        if (isTargetEle) {
          break;
        }
      }
      if (!isTargetEle) {
        return;
      }
      eventTrack.add({
        type: EventType$1.EVENT_TRACK,
        category: curType,
        status: StatusType.Ok,
        time: getTimestamp(),
        data: {
          selector: curSelector,
          inputValue: el.value ?? el.innerText ?? "",
          elementText: curElementText ?? el.textContent,
          rect,
          url: getLocationHref(),
          eventName: curEventName,
          xPath,
          data: unknownToObject(curData),
          params: unknownToObject(curEventParams)
        }
      });
      return;
    }
    if (htmlString) {
      eventTrack.add({
        type: EventType$1.EVENT_TRACK,
        category: curType,
        status: StatusType.Ok,
        time: getTimestamp(),
        data: {
          selector: interceptStr(htmlString, 200),
          inputValue: el.value ?? el.innerText ?? "",
          elementText: interceptStr(el.innerText || "", 100),
          rect,
          url: getLocationHref(),
          eventName: curEventName,
          xPath,
          params: unknownToObject(curEventParams)
        }
      });
    }
  };
  const findTargetNode = (currentNode, targetNodes, maxDepth = 5) => {
    let depth = 0;
    let node2 = currentNode;
    while (node2 && depth < maxDepth) {
      if ([...targetNodes].includes(node2)) {
        return node2;
      }
      if (node2.tagName.toLowerCase() === "body") {
        break;
      }
      node2 = node2.parentElement;
      depth++;
    }
    return null;
  };
  (function() {
    if (typeof window !== "object") {
      return;
    }
    if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) {
      if (!("isIntersecting" in window.IntersectionObserverEntry.prototype)) {
        Object.defineProperty(
          window.IntersectionObserverEntry.prototype,
          "isIntersecting",
          {
            get: function() {
              return this.intersectionRatio > 0;
            }
          }
        );
      }
      return;
    }
    function getFrameElement(doc) {
      try {
        return doc.defaultView && doc.defaultView.frameElement || null;
      } catch (e2) {
        return null;
      }
    }
    var document2 = function(startDoc) {
      var doc = startDoc;
      var frame = getFrameElement(doc);
      while (frame) {
        doc = frame.ownerDocument;
        frame = getFrameElement(doc);
      }
      return doc;
    }(window.document);
    var registry = [];
    var crossOriginUpdater = null;
    var crossOriginRect = null;
    function IntersectionObserverEntry(entry) {
      this.time = entry.time;
      this.target = entry.target;
      this.rootBounds = ensureDOMRect(entry.rootBounds);
      this.boundingClientRect = ensureDOMRect(entry.boundingClientRect);
      this.intersectionRect = ensureDOMRect(entry.intersectionRect || getEmptyRect());
      this.isIntersecting = !!entry.intersectionRect;
      var targetRect = this.boundingClientRect;
      var targetArea = targetRect.width * targetRect.height;
      var intersectionRect = this.intersectionRect;
      var intersectionArea = intersectionRect.width * intersectionRect.height;
      if (targetArea) {
        this.intersectionRatio = Number((intersectionArea / targetArea).toFixed(4));
      } else {
        this.intersectionRatio = this.isIntersecting ? 1 : 0;
      }
    }
    function IntersectionObserver2(callback, opt_options) {
      var options2 = opt_options || {};
      if (typeof callback != "function") {
        throw new Error("callback must be a function");
      }
      if (options2.root && options2.root.nodeType != 1 && options2.root.nodeType != 9) {
        throw new Error("root must be a Document or Element");
      }
      this._checkForIntersections = throttle2(
        this._checkForIntersections.bind(this),
        this.THROTTLE_TIMEOUT
      );
      this._callback = callback;
      this._observationTargets = [];
      this._queuedEntries = [];
      this._rootMarginValues = this._parseRootMargin(options2.rootMargin);
      this.thresholds = this._initThresholds(options2.threshold);
      this.root = options2.root || null;
      this.rootMargin = this._rootMarginValues.map(function(margin) {
        return margin.value + margin.unit;
      }).join(" ");
      this._monitoringDocuments = [];
      this._monitoringUnsubscribes = [];
    }
    IntersectionObserver2.prototype.THROTTLE_TIMEOUT = 100;
    IntersectionObserver2.prototype.POLL_INTERVAL = null;
    IntersectionObserver2.prototype.USE_MUTATION_OBSERVER = true;
    IntersectionObserver2._setupCrossOriginUpdater = function() {
      if (!crossOriginUpdater) {
        crossOriginUpdater = function(boundingClientRect, intersectionRect) {
          if (!boundingClientRect || !intersectionRect) {
            crossOriginRect = getEmptyRect();
          } else {
            crossOriginRect = convertFromParentRect(boundingClientRect, intersectionRect);
          }
          registry.forEach(function(observer2) {
            observer2._checkForIntersections();
          });
        };
      }
      return crossOriginUpdater;
    };
    IntersectionObserver2._resetCrossOriginUpdater = function() {
      crossOriginUpdater = null;
      crossOriginRect = null;
    };
    IntersectionObserver2.prototype.observe = function(target) {
      var isTargetAlreadyObserved = this._observationTargets.some(function(item) {
        return item.element == target;
      });
      if (isTargetAlreadyObserved) {
        return;
      }
      if (!(target && target.nodeType == 1)) {
        throw new Error("target must be an Element");
      }
      this._registerInstance();
      this._observationTargets.push({ element: target, entry: null });
      this._monitorIntersections(target.ownerDocument);
      this._checkForIntersections();
    };
    IntersectionObserver2.prototype.unobserve = function(target) {
      this._observationTargets = this._observationTargets.filter(function(item) {
        return item.element != target;
      });
      this._unmonitorIntersections(target.ownerDocument);
      if (this._observationTargets.length == 0) {
        this._unregisterInstance();
      }
    };
    IntersectionObserver2.prototype.disconnect = function() {
      this._observationTargets = [];
      this._unmonitorAllIntersections();
      this._unregisterInstance();
    };
    IntersectionObserver2.prototype.takeRecords = function() {
      var records = this._queuedEntries.slice();
      this._queuedEntries = [];
      return records;
    };
    IntersectionObserver2.prototype._initThresholds = function(opt_threshold) {
      var threshold = opt_threshold || [0];
      if (!Array.isArray(threshold)) threshold = [threshold];
      return threshold.sort().filter(function(t2, i2, a2) {
        if (typeof t2 != "number" || isNaN(t2) || t2 < 0 || t2 > 1) {
          throw new Error("threshold must be a number between 0 and 1 inclusively");
        }
        return t2 !== a2[i2 - 1];
      });
    };
    IntersectionObserver2.prototype._parseRootMargin = function(opt_rootMargin) {
      var marginString = opt_rootMargin || "0px";
      var margins = marginString.split(/\s+/).map(function(margin) {
        var parts = /^(-?\d*\.?\d+)(px|%)$/.exec(margin);
        if (!parts) {
          throw new Error("rootMargin must be specified in pixels or percent");
        }
        return { value: parseFloat(parts[1]), unit: parts[2] };
      });
      margins[1] = margins[1] || margins[0];
      margins[2] = margins[2] || margins[0];
      margins[3] = margins[3] || margins[1];
      return margins;
    };
    IntersectionObserver2.prototype._monitorIntersections = function(doc) {
      var win = doc.defaultView;
      if (!win) {
        return;
      }
      if (this._monitoringDocuments.indexOf(doc) != -1) {
        return;
      }
      var callback = this._checkForIntersections;
      var monitoringInterval = null;
      var domObserver = null;
      if (this.POLL_INTERVAL) {
        monitoringInterval = win.setInterval(callback, this.POLL_INTERVAL);
      } else {
        addEvent(win, "resize", callback, true);
        addEvent(doc, "scroll", callback, true);
        if (this.USE_MUTATION_OBSERVER && "MutationObserver" in win) {
          domObserver = new win.MutationObserver(callback);
          domObserver.observe(doc, {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true
          });
        }
      }
      this._monitoringDocuments.push(doc);
      this._monitoringUnsubscribes.push(function() {
        var win2 = doc.defaultView;
        if (win2) {
          if (monitoringInterval) {
            win2.clearInterval(monitoringInterval);
          }
          removeEvent(win2, "resize", callback, true);
        }
        removeEvent(doc, "scroll", callback, true);
        if (domObserver) {
          domObserver.disconnect();
        }
      });
      var rootDoc = this.root && (this.root.ownerDocument || this.root) || document2;
      if (doc != rootDoc) {
        var frame = getFrameElement(doc);
        if (frame) {
          this._monitorIntersections(frame.ownerDocument);
        }
      }
    };
    IntersectionObserver2.prototype._unmonitorIntersections = function(doc) {
      var index2 = this._monitoringDocuments.indexOf(doc);
      if (index2 == -1) {
        return;
      }
      var rootDoc = this.root && (this.root.ownerDocument || this.root) || document2;
      var hasDependentTargets = this._observationTargets.some(function(item) {
        var itemDoc = item.element.ownerDocument;
        if (itemDoc == doc) {
          return true;
        }
        while (itemDoc && itemDoc != rootDoc) {
          var frame2 = getFrameElement(itemDoc);
          itemDoc = frame2 && frame2.ownerDocument;
          if (itemDoc == doc) {
            return true;
          }
        }
        return false;
      });
      if (hasDependentTargets) {
        return;
      }
      var unsubscribe = this._monitoringUnsubscribes[index2];
      this._monitoringDocuments.splice(index2, 1);
      this._monitoringUnsubscribes.splice(index2, 1);
      unsubscribe();
      if (doc != rootDoc) {
        var frame = getFrameElement(doc);
        if (frame) {
          this._unmonitorIntersections(frame.ownerDocument);
        }
      }
    };
    IntersectionObserver2.prototype._unmonitorAllIntersections = function() {
      var unsubscribes = this._monitoringUnsubscribes.slice(0);
      this._monitoringDocuments.length = 0;
      this._monitoringUnsubscribes.length = 0;
      for (var i2 = 0; i2 < unsubscribes.length; i2++) {
        unsubscribes[i2]();
      }
    };
    IntersectionObserver2.prototype._checkForIntersections = function() {
      if (!this.root && crossOriginUpdater && !crossOriginRect) {
        return;
      }
      var rootIsInDom = this._rootIsInDom();
      var rootRect = rootIsInDom ? this._getRootRect() : getEmptyRect();
      this._observationTargets.forEach(function(item) {
        var target = item.element;
        var targetRect = getBoundingClientRect(target);
        var rootContainsTarget = this._rootContainsTarget(target);
        var oldEntry = item.entry;
        var intersectionRect = rootIsInDom && rootContainsTarget && this._computeTargetAndRootIntersection(target, targetRect, rootRect);
        var rootBounds = null;
        if (!this._rootContainsTarget(target)) {
          rootBounds = getEmptyRect();
        } else if (!crossOriginUpdater || this.root) {
          rootBounds = rootRect;
        }
        var newEntry = item.entry = new IntersectionObserverEntry({
          time: now2(),
          target,
          boundingClientRect: targetRect,
          rootBounds,
          intersectionRect
        });
        if (!oldEntry) {
          this._queuedEntries.push(newEntry);
        } else if (rootIsInDom && rootContainsTarget) {
          if (this._hasCrossedThreshold(oldEntry, newEntry)) {
            this._queuedEntries.push(newEntry);
          }
        } else {
          if (oldEntry && oldEntry.isIntersecting) {
            this._queuedEntries.push(newEntry);
          }
        }
      }, this);
      if (this._queuedEntries.length) {
        this._callback(this.takeRecords(), this);
      }
    };
    IntersectionObserver2.prototype._computeTargetAndRootIntersection = function(target, targetRect, rootRect) {
      if (window.getComputedStyle(target).display == "none") return;
      var intersectionRect = targetRect;
      var parent = getParentNode(target);
      var atRoot = false;
      while (!atRoot && parent) {
        var parentRect = null;
        var parentComputedStyle = parent.nodeType == 1 ? window.getComputedStyle(parent) : {};
        if (parentComputedStyle.display == "none") return null;
        if (parent == this.root || parent.nodeType == /* DOCUMENT */
        9) {
          atRoot = true;
          if (parent == this.root || parent == document2) {
            if (crossOriginUpdater && !this.root) {
              if (!crossOriginRect || crossOriginRect.width == 0 && crossOriginRect.height == 0) {
                parent = null;
                parentRect = null;
                intersectionRect = null;
              } else {
                parentRect = crossOriginRect;
              }
            } else {
              parentRect = rootRect;
            }
          } else {
            var frame = getParentNode(parent);
            var frameRect = frame && getBoundingClientRect(frame);
            var frameIntersect = frame && this._computeTargetAndRootIntersection(frame, frameRect, rootRect);
            if (frameRect && frameIntersect) {
              parent = frame;
              parentRect = convertFromParentRect(frameRect, frameIntersect);
            } else {
              parent = null;
              intersectionRect = null;
            }
          }
        } else {
          var doc = parent.ownerDocument;
          if (parent != doc.body && parent != doc.documentElement && parentComputedStyle.overflow != "visible") {
            parentRect = getBoundingClientRect(parent);
          }
        }
        if (parentRect) {
          intersectionRect = computeRectIntersection(parentRect, intersectionRect);
        }
        if (!intersectionRect) break;
        parent = parent && getParentNode(parent);
      }
      return intersectionRect;
    };
    IntersectionObserver2.prototype._getRootRect = function() {
      var rootRect;
      if (this.root && !isDoc(this.root)) {
        rootRect = getBoundingClientRect(this.root);
      } else {
        var doc = isDoc(this.root) ? this.root : document2;
        var html = doc.documentElement;
        var body = doc.body;
        rootRect = {
          top: 0,
          left: 0,
          right: html.clientWidth || body.clientWidth,
          width: html.clientWidth || body.clientWidth,
          bottom: html.clientHeight || body.clientHeight,
          height: html.clientHeight || body.clientHeight
        };
      }
      return this._expandRectByRootMargin(rootRect);
    };
    IntersectionObserver2.prototype._expandRectByRootMargin = function(rect) {
      var margins = this._rootMarginValues.map(function(margin, i2) {
        return margin.unit == "px" ? margin.value : margin.value * (i2 % 2 ? rect.width : rect.height) / 100;
      });
      var newRect = {
        top: rect.top - margins[0],
        right: rect.right + margins[1],
        bottom: rect.bottom + margins[2],
        left: rect.left - margins[3]
      };
      newRect.width = newRect.right - newRect.left;
      newRect.height = newRect.bottom - newRect.top;
      return newRect;
    };
    IntersectionObserver2.prototype._hasCrossedThreshold = function(oldEntry, newEntry) {
      var oldRatio = oldEntry && oldEntry.isIntersecting ? oldEntry.intersectionRatio || 0 : -1;
      var newRatio = newEntry.isIntersecting ? newEntry.intersectionRatio || 0 : -1;
      if (oldRatio === newRatio) return;
      for (var i2 = 0; i2 < this.thresholds.length; i2++) {
        var threshold = this.thresholds[i2];
        if (threshold == oldRatio || threshold == newRatio || threshold < oldRatio !== threshold < newRatio) {
          return true;
        }
      }
    };
    IntersectionObserver2.prototype._rootIsInDom = function() {
      return !this.root || containsDeep(document2, this.root);
    };
    IntersectionObserver2.prototype._rootContainsTarget = function(target) {
      var rootDoc = this.root && (this.root.ownerDocument || this.root) || document2;
      return containsDeep(rootDoc, target) && (!this.root || rootDoc == target.ownerDocument);
    };
    IntersectionObserver2.prototype._registerInstance = function() {
      if (registry.indexOf(this) < 0) {
        registry.push(this);
      }
    };
    IntersectionObserver2.prototype._unregisterInstance = function() {
      var index2 = registry.indexOf(this);
      if (index2 != -1) registry.splice(index2, 1);
    };
    function now2() {
      return window.performance && performance.now && performance.now();
    }
    function throttle2(fn, timeout) {
      var timer2 = null;
      return function() {
        if (!timer2) {
          timer2 = setTimeout(function() {
            fn();
            timer2 = null;
          }, timeout);
        }
      };
    }
    function addEvent(node2, event, fn, opt_useCapture) {
      if (typeof node2.addEventListener == "function") {
        node2.addEventListener(event, fn, opt_useCapture);
      } else if (typeof node2.attachEvent == "function") {
        node2.attachEvent("on" + event, fn);
      }
    }
    function removeEvent(node2, event, fn, opt_useCapture) {
      if (typeof node2.removeEventListener == "function") {
        node2.removeEventListener(event, fn, opt_useCapture);
      } else if (typeof node2.detachEvent == "function") {
        node2.detachEvent("on" + event, fn);
      }
    }
    function computeRectIntersection(rect1, rect2) {
      var top = Math.max(rect1.top, rect2.top);
      var bottom = Math.min(rect1.bottom, rect2.bottom);
      var left = Math.max(rect1.left, rect2.left);
      var right = Math.min(rect1.right, rect2.right);
      var width = right - left;
      var height = bottom - top;
      return width >= 0 && height >= 0 && {
        top,
        bottom,
        left,
        right,
        width,
        height
      } || null;
    }
    function getBoundingClientRect(el) {
      var rect;
      try {
        rect = el.getBoundingClientRect();
      } catch (err2) {
      }
      if (!rect) return getEmptyRect();
      if (!(rect.width && rect.height)) {
        rect = {
          top: rect.top,
          right: rect.right,
          bottom: rect.bottom,
          left: rect.left,
          width: rect.right - rect.left,
          height: rect.bottom - rect.top
        };
      }
      return rect;
    }
    function getEmptyRect() {
      return {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        width: 0,
        height: 0
      };
    }
    function ensureDOMRect(rect) {
      if (!rect || "x" in rect) {
        return rect;
      }
      return {
        top: rect.top,
        y: rect.top,
        bottom: rect.bottom,
        left: rect.left,
        x: rect.left,
        right: rect.right,
        width: rect.width,
        height: rect.height
      };
    }
    function convertFromParentRect(parentBoundingRect, parentIntersectionRect) {
      var top = parentIntersectionRect.top - parentBoundingRect.top;
      var left = parentIntersectionRect.left - parentBoundingRect.left;
      return {
        top,
        left,
        height: parentIntersectionRect.height,
        width: parentIntersectionRect.width,
        bottom: top + parentIntersectionRect.height,
        right: left + parentIntersectionRect.width
      };
    }
    function containsDeep(parent, child) {
      var node2 = child;
      while (node2) {
        if (node2 == parent) return true;
        node2 = getParentNode(node2);
      }
      return false;
    }
    function getParentNode(node2) {
      var parent = node2.parentNode;
      if (node2.nodeType == /* DOCUMENT */
      9 && node2 != document2) {
        return getFrameElement(node2);
      }
      if (parent && parent.assignedSlot) {
        parent = parent.assignedSlot.parentNode;
      }
      if (parent && parent.nodeType == 11 && parent.host) {
        return parent.host;
      }
      return parent;
    }
    function isDoc(node2) {
      return node2 && node2.nodeType === 9;
    }
    window.IntersectionObserver = IntersectionObserver2;
    window.IntersectionObserverEntry = IntersectionObserverEntry;
  })();
  const listenExposureTrack = () => {
    const { exposureTrack: exposureTrackOptions } = options.get();
    const exposureTrack = new ExposureTrack({
      elements: exposureTrackOptions == null ? void 0 : exposureTrackOptions.elements,
      exposureIdAttr: exposureTrackOptions == null ? void 0 : exposureTrackOptions.exposureIdAttr,
      minObserveTime: exposureTrackOptions == null ? void 0 : exposureTrackOptions.minObserveTime,
      callback(exposureLise) {
        eventTrack.add({
          type: EventType$1.EVENT_TRACK,
          category: "exposure",
          time: getTimestamp(),
          status: StatusType.Ok,
          data: exposureLise
        });
      }
    });
    exposureTrack.start();
  };
  class ExposureTrack {
    constructor(options2) {
      /** 最小曝光时长, 超过即上报 */
      __publicField(this, "minObserveTime", 500);
      __publicField(this, "intersectionObserver", null);
      __publicField(this, "mutationObserver", null);
      /** 曝光定时检查 */
      __publicField(this, "timer", null);
      /** 曝光检查循环时长 */
      __publicField(this, "LOOP_TIME", 1e3);
      /** 监控元素集合 */
      __publicField(this, "trackElements", []);
      /** 元素采集标记的属性名 */
      __publicField(this, "exposureIdAttr");
      /** 元素曝光信息列表 */
      __publicField(this, "observeList", []);
      /** 回调函数 */
      __publicField(this, "callback");
      this.trackElements = (options2 == null ? void 0 : options2.elements) || [{ selector: "[data-exposure-track]" }];
      this.exposureIdAttr = (options2 == null ? void 0 : options2.exposureIdAttr) || "data-exposure";
      this.minObserveTime = (options2 == null ? void 0 : options2.minObserveTime) || 500;
      this.callback = options2 == null ? void 0 : options2.callback;
      this.initObserver();
    }
    /**
     * 初始化监听器
     *
     * @private
     * @memberof ExposureTrack
     */
    initObserver() {
      this.intersectionObserver = new IntersectionObserver(
        (entries2) => this.intersectionObserverCallback(entries2),
        { threshold: 0.5 }
      );
      this.mutationObserver = new MutationObserver((mutationList) => {
        mutationList.forEach((mutation) => {
          if (mutation.type !== "childList") {
            return;
          }
          mutation.addedNodes.forEach((node2) => {
            node2.nodeType === 1 && this.start(node2);
          });
          mutation.removedNodes.forEach((node2) => {
            node2.nodeType === 1 && this.removeObserve(node2);
          });
        });
      });
      this.mutationObserver.observe(document.body, {
        subtree: true,
        childList: true
      });
    }
    /**
     * 开始监听
     *
     * @param {(Element | Document)} [baseElement=document]
     * @memberof Exposure
     */
    start(baseElement = document) {
      this.trackElements.forEach((ele) => {
        if (!ele.selector) {
          return;
        }
        const elements = baseElement.querySelectorAll(ele.selector) ?? [];
        elements.forEach((el) => {
          var _a3;
          (_a3 = this.intersectionObserver) == null ? void 0 : _a3.observe(el);
        });
      });
      this.loopCheck();
    }
    /**
     * 停止监听
     *
     * - 移除所有观察者
     * - 移除所有观察列表
     * - 清除定时器任务
     *
     * @memberof Exposure
     */
    stop() {
      var _a3, _b2;
      (_a3 = this.intersectionObserver) == null ? void 0 : _a3.disconnect();
      (_b2 = this.mutationObserver) == null ? void 0 : _b2.disconnect();
      this.timer && clearInterval(this.timer);
      this.observeList = [];
    }
    /**
     * 移除监控
     *
     * - 将其曝光事件从列表删除
     * - 移除元素监听
     *
     * @private
     * @param {(Element | Document)} [baseElement=document]
     * @memberof ExposureTrack
     */
    removeObserve(baseElement = document) {
      this.trackElements.forEach((ele) => {
        if (!ele.selector) {
          return;
        }
        const elements = baseElement.querySelectorAll(ele.selector) ?? [];
        elements.forEach((el) => {
          var _a3;
          const expId = el.getAttribute(this.exposureIdAttr);
          if (expId) {
            this.observeList = this.observeList.filter((it) => it.id !== expId);
          }
          (_a3 = this.intersectionObserver) == null ? void 0 : _a3.unobserve(el);
        });
      });
    }
    /**
     * 监听元素是否出现在可视区域回调
     *
     * @private
     * @param {IntersectionObserverEntry[]} entries
     * @memberof Exposure
     */
    intersectionObserverCallback(entries2) {
      entries2.forEach((entry, idx) => {
        const entryElem = entry.target;
        let expId = entryElem.getAttribute(this.exposureIdAttr);
        const exposureName = entryElem.getAttribute("data-exposure-name") ?? "";
        const exposureParams = entryElem.getAttribute("data-exposure-params") ?? "";
        const currentItem = this.observeList.find((o2) => o2.id === expId);
        if (entry.isIntersecting) {
          if (!expId) {
            expId = `${Math.random().toString(36).substr(2, 9)}-${idx}`;
            entryElem.setAttribute(this.exposureIdAttr, expId);
          }
          if (!currentItem) {
            const time = getTimestamp();
            this.observeList.push({
              id: expId,
              element: entryElem,
              xPath: getElementXPath(entryElem) ?? "",
              startTime: time,
              endTime: time,
              exposureTime: time - time,
              exposureName,
              exposureParams: unknownToObject(exposureParams),
              isReported: false
            });
          }
        } else {
          if (!expId || !currentItem) {
            return;
          }
          const endTime = getTimestamp();
          const exposureTime = endTime - currentItem.startTime;
          if (exposureTime >= this.minObserveTime) {
            currentItem.isReported = true;
            currentItem.endTime = endTime;
            currentItem.exposureTime = exposureTime;
            this.reportExposure();
          }
        }
      });
    }
    /**
     * 移除已上报的元素，并更新监控列表
     *
     * @private
     * @memberof Exposure
     */
    removeObserveList() {
      const reportExposureLise = this.observeList.filter((o2) => o2.isReported);
      reportExposureLise.forEach((item) => {
        var _a3;
        (_a3 = this.intersectionObserver) == null ? void 0 : _a3.unobserve(item.element);
      });
      this.observeList = this.observeList.filter((o2) => !o2.isReported);
    }
    /**
     * 轮询检查
     *
     * - 避免一开始就在可视区域的曝光元素无法上报
     * @private
     * @memberof Exposure
     */
    loopCheck() {
      this.timer = setInterval(() => {
        this.observeList.forEach((item) => {
          const time = getTimestamp();
          const exposureTime = time - item.startTime;
          if (!item.isReported && exposureTime >= this.minObserveTime) {
            item.isReported = true;
            item.endTime = time;
            item.exposureTime = exposureTime;
          }
        });
        this.reportExposure();
      }, this.LOOP_TIME);
    }
    /**
     * 上报曝光数据
     *
     * - 回调函数, 上报数据
     * - 移除已上报的元素，并更新监控列表
     *
     * @private
     * @memberof Exposure
     */
    reportExposure() {
      const reportExposureLise = this.observeList.filter((o2) => o2.isReported).map((it) => {
        const curItem = cloneDeep(it);
        curItem.selector = htmlElementAsString(it.element);
        delete curItem.element;
        delete curItem.isReported;
        return { ...curItem };
      });
      if (reportExposureLise.length === 0) {
        return;
      }
      isFunction(this.callback) && this.callback(reportExposureLise);
      this.removeObserveList();
    }
  }
  const version = "3.7.7";
  const VERSION = version;
  const _hasBuffer = typeof Buffer === "function";
  const _TD = typeof TextDecoder === "function" ? new TextDecoder() : void 0;
  const _TE = typeof TextEncoder === "function" ? new TextEncoder() : void 0;
  const b64ch = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  const b64chs = Array.prototype.slice.call(b64ch);
  const b64tab = ((a2) => {
    let tab = {};
    a2.forEach((c2, i2) => tab[c2] = i2);
    return tab;
  })(b64chs);
  const b64re = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
  const _fromCC = String.fromCharCode.bind(String);
  const _U8Afrom = typeof Uint8Array.from === "function" ? Uint8Array.from.bind(Uint8Array) : (it) => new Uint8Array(Array.prototype.slice.call(it, 0));
  const _mkUriSafe = (src) => src.replace(/=/g, "").replace(/[+\/]/g, (m0) => m0 == "+" ? "-" : "_");
  const _tidyB64 = (s2) => s2.replace(/[^A-Za-z0-9\+\/]/g, "");
  const btoaPolyfill = (bin) => {
    let u32, c0, c1, c2, asc = "";
    const pad = bin.length % 3;
    for (let i2 = 0; i2 < bin.length; ) {
      if ((c0 = bin.charCodeAt(i2++)) > 255 || (c1 = bin.charCodeAt(i2++)) > 255 || (c2 = bin.charCodeAt(i2++)) > 255)
        throw new TypeError("invalid character found");
      u32 = c0 << 16 | c1 << 8 | c2;
      asc += b64chs[u32 >> 18 & 63] + b64chs[u32 >> 12 & 63] + b64chs[u32 >> 6 & 63] + b64chs[u32 & 63];
    }
    return pad ? asc.slice(0, pad - 3) + "===".substring(pad) : asc;
  };
  const _btoa = typeof btoa === "function" ? (bin) => btoa(bin) : _hasBuffer ? (bin) => Buffer.from(bin, "binary").toString("base64") : btoaPolyfill;
  const _fromUint8Array = _hasBuffer ? (u8a) => Buffer.from(u8a).toString("base64") : (u8a) => {
    const maxargs = 4096;
    let strs = [];
    for (let i2 = 0, l2 = u8a.length; i2 < l2; i2 += maxargs) {
      strs.push(_fromCC.apply(null, u8a.subarray(i2, i2 + maxargs)));
    }
    return _btoa(strs.join(""));
  };
  const fromUint8Array = (u8a, urlsafe = false) => urlsafe ? _mkUriSafe(_fromUint8Array(u8a)) : _fromUint8Array(u8a);
  const cb_utob = (c2) => {
    if (c2.length < 2) {
      var cc = c2.charCodeAt(0);
      return cc < 128 ? c2 : cc < 2048 ? _fromCC(192 | cc >>> 6) + _fromCC(128 | cc & 63) : _fromCC(224 | cc >>> 12 & 15) + _fromCC(128 | cc >>> 6 & 63) + _fromCC(128 | cc & 63);
    } else {
      var cc = 65536 + (c2.charCodeAt(0) - 55296) * 1024 + (c2.charCodeAt(1) - 56320);
      return _fromCC(240 | cc >>> 18 & 7) + _fromCC(128 | cc >>> 12 & 63) + _fromCC(128 | cc >>> 6 & 63) + _fromCC(128 | cc & 63);
    }
  };
  const re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
  const utob = (u2) => u2.replace(re_utob, cb_utob);
  const _encode = _hasBuffer ? (s2) => Buffer.from(s2, "utf8").toString("base64") : _TE ? (s2) => _fromUint8Array(_TE.encode(s2)) : (s2) => _btoa(utob(s2));
  const encode$1 = (src, urlsafe = false) => urlsafe ? _mkUriSafe(_encode(src)) : _encode(src);
  const encodeURI$1 = (src) => encode$1(src, true);
  const re_btou = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g;
  const cb_btou = (cccc) => {
    switch (cccc.length) {
      case 4:
        var cp = (7 & cccc.charCodeAt(0)) << 18 | (63 & cccc.charCodeAt(1)) << 12 | (63 & cccc.charCodeAt(2)) << 6 | 63 & cccc.charCodeAt(3), offset = cp - 65536;
        return _fromCC((offset >>> 10) + 55296) + _fromCC((offset & 1023) + 56320);
      case 3:
        return _fromCC((15 & cccc.charCodeAt(0)) << 12 | (63 & cccc.charCodeAt(1)) << 6 | 63 & cccc.charCodeAt(2));
      default:
        return _fromCC((31 & cccc.charCodeAt(0)) << 6 | 63 & cccc.charCodeAt(1));
    }
  };
  const btou = (b2) => b2.replace(re_btou, cb_btou);
  const atobPolyfill = (asc) => {
    asc = asc.replace(/\s+/g, "");
    if (!b64re.test(asc))
      throw new TypeError("malformed base64.");
    asc += "==".slice(2 - (asc.length & 3));
    let u24, bin = "", r1, r2;
    for (let i2 = 0; i2 < asc.length; ) {
      u24 = b64tab[asc.charAt(i2++)] << 18 | b64tab[asc.charAt(i2++)] << 12 | (r1 = b64tab[asc.charAt(i2++)]) << 6 | (r2 = b64tab[asc.charAt(i2++)]);
      bin += r1 === 64 ? _fromCC(u24 >> 16 & 255) : r2 === 64 ? _fromCC(u24 >> 16 & 255, u24 >> 8 & 255) : _fromCC(u24 >> 16 & 255, u24 >> 8 & 255, u24 & 255);
    }
    return bin;
  };
  const _atob = typeof atob === "function" ? (asc) => atob(_tidyB64(asc)) : _hasBuffer ? (asc) => Buffer.from(asc, "base64").toString("binary") : atobPolyfill;
  const _toUint8Array = _hasBuffer ? (a2) => _U8Afrom(Buffer.from(a2, "base64")) : (a2) => _U8Afrom(_atob(a2).split("").map((c2) => c2.charCodeAt(0)));
  const toUint8Array = (a2) => _toUint8Array(_unURI(a2));
  const _decode = _hasBuffer ? (a2) => Buffer.from(a2, "base64").toString("utf8") : _TD ? (a2) => _TD.decode(_toUint8Array(a2)) : (a2) => btou(_atob(a2));
  const _unURI = (a2) => _tidyB64(a2.replace(/[-_]/g, (m0) => m0 == "-" ? "+" : "/"));
  const decode = (src) => _decode(_unURI(src));
  const isValid = (src) => {
    if (typeof src !== "string")
      return false;
    const s2 = src.replace(/\s+/g, "").replace(/={0,2}$/, "");
    return !/[^\s0-9a-zA-Z\+/]/.test(s2) || !/[^\s0-9a-zA-Z\-_]/.test(s2);
  };
  const _noEnum = (v2) => {
    return {
      value: v2,
      enumerable: false,
      writable: true,
      configurable: true
    };
  };
  const extendString = function() {
    const _add = (name, body) => Object.defineProperty(String.prototype, name, _noEnum(body));
    _add("fromBase64", function() {
      return decode(this);
    });
    _add("toBase64", function(urlsafe) {
      return encode$1(this, urlsafe);
    });
    _add("toBase64URI", function() {
      return encode$1(this, true);
    });
    _add("toBase64URL", function() {
      return encode$1(this, true);
    });
    _add("toUint8Array", function() {
      return toUint8Array(this);
    });
  };
  const extendUint8Array = function() {
    const _add = (name, body) => Object.defineProperty(Uint8Array.prototype, name, _noEnum(body));
    _add("toBase64", function(urlsafe) {
      return fromUint8Array(this, urlsafe);
    });
    _add("toBase64URI", function() {
      return fromUint8Array(this, true);
    });
    _add("toBase64URL", function() {
      return fromUint8Array(this, true);
    });
  };
  const extendBuiltins = () => {
    extendString();
    extendUint8Array();
  };
  const gBase64 = {
    version,
    VERSION,
    atob: _atob,
    atobPolyfill,
    btoa: _btoa,
    btoaPolyfill,
    fromBase64: decode,
    toBase64: encode$1,
    encode: encode$1,
    encodeURI: encodeURI$1,
    encodeURL: encodeURI$1,
    utob,
    btou,
    decode,
    isValid,
    fromUint8Array,
    toUint8Array,
    extendString,
    extendUint8Array,
    extendBuiltins
  };
  /*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */
  const Z_FIXED$1 = 4;
  const Z_BINARY = 0;
  const Z_TEXT = 1;
  const Z_UNKNOWN$1 = 2;
  function zero$1(buf) {
    let len = buf.length;
    while (--len >= 0) {
      buf[len] = 0;
    }
  }
  const STORED_BLOCK = 0;
  const STATIC_TREES = 1;
  const DYN_TREES = 2;
  const MIN_MATCH$1 = 3;
  const MAX_MATCH$1 = 258;
  const LENGTH_CODES$1 = 29;
  const LITERALS$1 = 256;
  const L_CODES$1 = LITERALS$1 + 1 + LENGTH_CODES$1;
  const D_CODES$1 = 30;
  const BL_CODES$1 = 19;
  const HEAP_SIZE$1 = 2 * L_CODES$1 + 1;
  const MAX_BITS$1 = 15;
  const Buf_size = 16;
  const MAX_BL_BITS = 7;
  const END_BLOCK = 256;
  const REP_3_6 = 16;
  const REPZ_3_10 = 17;
  const REPZ_11_138 = 18;
  const extra_lbits = (
    /* extra bits for each length code */
    new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0])
  );
  const extra_dbits = (
    /* extra bits for each distance code */
    new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13])
  );
  const extra_blbits = (
    /* extra bits for each bit length code */
    new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7])
  );
  const bl_order = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
  const DIST_CODE_LEN = 512;
  const static_ltree = new Array((L_CODES$1 + 2) * 2);
  zero$1(static_ltree);
  const static_dtree = new Array(D_CODES$1 * 2);
  zero$1(static_dtree);
  const _dist_code = new Array(DIST_CODE_LEN);
  zero$1(_dist_code);
  const _length_code = new Array(MAX_MATCH$1 - MIN_MATCH$1 + 1);
  zero$1(_length_code);
  const base_length = new Array(LENGTH_CODES$1);
  zero$1(base_length);
  const base_dist = new Array(D_CODES$1);
  zero$1(base_dist);
  function StaticTreeDesc(static_tree, extra_bits, extra_base, elems, max_length) {
    this.static_tree = static_tree;
    this.extra_bits = extra_bits;
    this.extra_base = extra_base;
    this.elems = elems;
    this.max_length = max_length;
    this.has_stree = static_tree && static_tree.length;
  }
  let static_l_desc;
  let static_d_desc;
  let static_bl_desc;
  function TreeDesc(dyn_tree, stat_desc) {
    this.dyn_tree = dyn_tree;
    this.max_code = 0;
    this.stat_desc = stat_desc;
  }
  const d_code = (dist) => {
    return dist < 256 ? _dist_code[dist] : _dist_code[256 + (dist >>> 7)];
  };
  const put_short = (s2, w2) => {
    s2.pending_buf[s2.pending++] = w2 & 255;
    s2.pending_buf[s2.pending++] = w2 >>> 8 & 255;
  };
  const send_bits = (s2, value, length) => {
    if (s2.bi_valid > Buf_size - length) {
      s2.bi_buf |= value << s2.bi_valid & 65535;
      put_short(s2, s2.bi_buf);
      s2.bi_buf = value >> Buf_size - s2.bi_valid;
      s2.bi_valid += length - Buf_size;
    } else {
      s2.bi_buf |= value << s2.bi_valid & 65535;
      s2.bi_valid += length;
    }
  };
  const send_code = (s2, c2, tree) => {
    send_bits(
      s2,
      tree[c2 * 2],
      tree[c2 * 2 + 1]
      /*.Len*/
    );
  };
  const bi_reverse = (code, len) => {
    let res = 0;
    do {
      res |= code & 1;
      code >>>= 1;
      res <<= 1;
    } while (--len > 0);
    return res >>> 1;
  };
  const bi_flush = (s2) => {
    if (s2.bi_valid === 16) {
      put_short(s2, s2.bi_buf);
      s2.bi_buf = 0;
      s2.bi_valid = 0;
    } else if (s2.bi_valid >= 8) {
      s2.pending_buf[s2.pending++] = s2.bi_buf & 255;
      s2.bi_buf >>= 8;
      s2.bi_valid -= 8;
    }
  };
  const gen_bitlen = (s2, desc) => {
    const tree = desc.dyn_tree;
    const max_code = desc.max_code;
    const stree = desc.stat_desc.static_tree;
    const has_stree = desc.stat_desc.has_stree;
    const extra = desc.stat_desc.extra_bits;
    const base = desc.stat_desc.extra_base;
    const max_length = desc.stat_desc.max_length;
    let h2;
    let n2, m2;
    let bits;
    let xbits;
    let f2;
    let overflow = 0;
    for (bits = 0; bits <= MAX_BITS$1; bits++) {
      s2.bl_count[bits] = 0;
    }
    tree[s2.heap[s2.heap_max] * 2 + 1] = 0;
    for (h2 = s2.heap_max + 1; h2 < HEAP_SIZE$1; h2++) {
      n2 = s2.heap[h2];
      bits = tree[tree[n2 * 2 + 1] * 2 + 1] + 1;
      if (bits > max_length) {
        bits = max_length;
        overflow++;
      }
      tree[n2 * 2 + 1] = bits;
      if (n2 > max_code) {
        continue;
      }
      s2.bl_count[bits]++;
      xbits = 0;
      if (n2 >= base) {
        xbits = extra[n2 - base];
      }
      f2 = tree[n2 * 2];
      s2.opt_len += f2 * (bits + xbits);
      if (has_stree) {
        s2.static_len += f2 * (stree[n2 * 2 + 1] + xbits);
      }
    }
    if (overflow === 0) {
      return;
    }
    do {
      bits = max_length - 1;
      while (s2.bl_count[bits] === 0) {
        bits--;
      }
      s2.bl_count[bits]--;
      s2.bl_count[bits + 1] += 2;
      s2.bl_count[max_length]--;
      overflow -= 2;
    } while (overflow > 0);
    for (bits = max_length; bits !== 0; bits--) {
      n2 = s2.bl_count[bits];
      while (n2 !== 0) {
        m2 = s2.heap[--h2];
        if (m2 > max_code) {
          continue;
        }
        if (tree[m2 * 2 + 1] !== bits) {
          s2.opt_len += (bits - tree[m2 * 2 + 1]) * tree[m2 * 2];
          tree[m2 * 2 + 1] = bits;
        }
        n2--;
      }
    }
  };
  const gen_codes = (tree, max_code, bl_count) => {
    const next_code = new Array(MAX_BITS$1 + 1);
    let code = 0;
    let bits;
    let n2;
    for (bits = 1; bits <= MAX_BITS$1; bits++) {
      code = code + bl_count[bits - 1] << 1;
      next_code[bits] = code;
    }
    for (n2 = 0; n2 <= max_code; n2++) {
      let len = tree[n2 * 2 + 1];
      if (len === 0) {
        continue;
      }
      tree[n2 * 2] = bi_reverse(next_code[len]++, len);
    }
  };
  const tr_static_init = () => {
    let n2;
    let bits;
    let length;
    let code;
    let dist;
    const bl_count = new Array(MAX_BITS$1 + 1);
    length = 0;
    for (code = 0; code < LENGTH_CODES$1 - 1; code++) {
      base_length[code] = length;
      for (n2 = 0; n2 < 1 << extra_lbits[code]; n2++) {
        _length_code[length++] = code;
      }
    }
    _length_code[length - 1] = code;
    dist = 0;
    for (code = 0; code < 16; code++) {
      base_dist[code] = dist;
      for (n2 = 0; n2 < 1 << extra_dbits[code]; n2++) {
        _dist_code[dist++] = code;
      }
    }
    dist >>= 7;
    for (; code < D_CODES$1; code++) {
      base_dist[code] = dist << 7;
      for (n2 = 0; n2 < 1 << extra_dbits[code] - 7; n2++) {
        _dist_code[256 + dist++] = code;
      }
    }
    for (bits = 0; bits <= MAX_BITS$1; bits++) {
      bl_count[bits] = 0;
    }
    n2 = 0;
    while (n2 <= 143) {
      static_ltree[n2 * 2 + 1] = 8;
      n2++;
      bl_count[8]++;
    }
    while (n2 <= 255) {
      static_ltree[n2 * 2 + 1] = 9;
      n2++;
      bl_count[9]++;
    }
    while (n2 <= 279) {
      static_ltree[n2 * 2 + 1] = 7;
      n2++;
      bl_count[7]++;
    }
    while (n2 <= 287) {
      static_ltree[n2 * 2 + 1] = 8;
      n2++;
      bl_count[8]++;
    }
    gen_codes(static_ltree, L_CODES$1 + 1, bl_count);
    for (n2 = 0; n2 < D_CODES$1; n2++) {
      static_dtree[n2 * 2 + 1] = 5;
      static_dtree[n2 * 2] = bi_reverse(n2, 5);
    }
    static_l_desc = new StaticTreeDesc(static_ltree, extra_lbits, LITERALS$1 + 1, L_CODES$1, MAX_BITS$1);
    static_d_desc = new StaticTreeDesc(static_dtree, extra_dbits, 0, D_CODES$1, MAX_BITS$1);
    static_bl_desc = new StaticTreeDesc(new Array(0), extra_blbits, 0, BL_CODES$1, MAX_BL_BITS);
  };
  const init_block = (s2) => {
    let n2;
    for (n2 = 0; n2 < L_CODES$1; n2++) {
      s2.dyn_ltree[n2 * 2] = 0;
    }
    for (n2 = 0; n2 < D_CODES$1; n2++) {
      s2.dyn_dtree[n2 * 2] = 0;
    }
    for (n2 = 0; n2 < BL_CODES$1; n2++) {
      s2.bl_tree[n2 * 2] = 0;
    }
    s2.dyn_ltree[END_BLOCK * 2] = 1;
    s2.opt_len = s2.static_len = 0;
    s2.sym_next = s2.matches = 0;
  };
  const bi_windup = (s2) => {
    if (s2.bi_valid > 8) {
      put_short(s2, s2.bi_buf);
    } else if (s2.bi_valid > 0) {
      s2.pending_buf[s2.pending++] = s2.bi_buf;
    }
    s2.bi_buf = 0;
    s2.bi_valid = 0;
  };
  const smaller = (tree, n2, m2, depth) => {
    const _n2 = n2 * 2;
    const _m2 = m2 * 2;
    return tree[_n2] < tree[_m2] || tree[_n2] === tree[_m2] && depth[n2] <= depth[m2];
  };
  const pqdownheap = (s2, tree, k2) => {
    const v2 = s2.heap[k2];
    let j2 = k2 << 1;
    while (j2 <= s2.heap_len) {
      if (j2 < s2.heap_len && smaller(tree, s2.heap[j2 + 1], s2.heap[j2], s2.depth)) {
        j2++;
      }
      if (smaller(tree, v2, s2.heap[j2], s2.depth)) {
        break;
      }
      s2.heap[k2] = s2.heap[j2];
      k2 = j2;
      j2 <<= 1;
    }
    s2.heap[k2] = v2;
  };
  const compress_block = (s2, ltree, dtree) => {
    let dist;
    let lc;
    let sx = 0;
    let code;
    let extra;
    if (s2.sym_next !== 0) {
      do {
        dist = s2.pending_buf[s2.sym_buf + sx++] & 255;
        dist += (s2.pending_buf[s2.sym_buf + sx++] & 255) << 8;
        lc = s2.pending_buf[s2.sym_buf + sx++];
        if (dist === 0) {
          send_code(s2, lc, ltree);
        } else {
          code = _length_code[lc];
          send_code(s2, code + LITERALS$1 + 1, ltree);
          extra = extra_lbits[code];
          if (extra !== 0) {
            lc -= base_length[code];
            send_bits(s2, lc, extra);
          }
          dist--;
          code = d_code(dist);
          send_code(s2, code, dtree);
          extra = extra_dbits[code];
          if (extra !== 0) {
            dist -= base_dist[code];
            send_bits(s2, dist, extra);
          }
        }
      } while (sx < s2.sym_next);
    }
    send_code(s2, END_BLOCK, ltree);
  };
  const build_tree = (s2, desc) => {
    const tree = desc.dyn_tree;
    const stree = desc.stat_desc.static_tree;
    const has_stree = desc.stat_desc.has_stree;
    const elems = desc.stat_desc.elems;
    let n2, m2;
    let max_code = -1;
    let node2;
    s2.heap_len = 0;
    s2.heap_max = HEAP_SIZE$1;
    for (n2 = 0; n2 < elems; n2++) {
      if (tree[n2 * 2] !== 0) {
        s2.heap[++s2.heap_len] = max_code = n2;
        s2.depth[n2] = 0;
      } else {
        tree[n2 * 2 + 1] = 0;
      }
    }
    while (s2.heap_len < 2) {
      node2 = s2.heap[++s2.heap_len] = max_code < 2 ? ++max_code : 0;
      tree[node2 * 2] = 1;
      s2.depth[node2] = 0;
      s2.opt_len--;
      if (has_stree) {
        s2.static_len -= stree[node2 * 2 + 1];
      }
    }
    desc.max_code = max_code;
    for (n2 = s2.heap_len >> 1; n2 >= 1; n2--) {
      pqdownheap(s2, tree, n2);
    }
    node2 = elems;
    do {
      n2 = s2.heap[
        1
        /*SMALLEST*/
      ];
      s2.heap[
        1
        /*SMALLEST*/
      ] = s2.heap[s2.heap_len--];
      pqdownheap(
        s2,
        tree,
        1
        /*SMALLEST*/
      );
      m2 = s2.heap[
        1
        /*SMALLEST*/
      ];
      s2.heap[--s2.heap_max] = n2;
      s2.heap[--s2.heap_max] = m2;
      tree[node2 * 2] = tree[n2 * 2] + tree[m2 * 2];
      s2.depth[node2] = (s2.depth[n2] >= s2.depth[m2] ? s2.depth[n2] : s2.depth[m2]) + 1;
      tree[n2 * 2 + 1] = tree[m2 * 2 + 1] = node2;
      s2.heap[
        1
        /*SMALLEST*/
      ] = node2++;
      pqdownheap(
        s2,
        tree,
        1
        /*SMALLEST*/
      );
    } while (s2.heap_len >= 2);
    s2.heap[--s2.heap_max] = s2.heap[
      1
      /*SMALLEST*/
    ];
    gen_bitlen(s2, desc);
    gen_codes(tree, max_code, s2.bl_count);
  };
  const scan_tree = (s2, tree, max_code) => {
    let n2;
    let prevlen = -1;
    let curlen;
    let nextlen = tree[0 * 2 + 1];
    let count = 0;
    let max_count = 7;
    let min_count = 4;
    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;
    }
    tree[(max_code + 1) * 2 + 1] = 65535;
    for (n2 = 0; n2 <= max_code; n2++) {
      curlen = nextlen;
      nextlen = tree[(n2 + 1) * 2 + 1];
      if (++count < max_count && curlen === nextlen) {
        continue;
      } else if (count < min_count) {
        s2.bl_tree[curlen * 2] += count;
      } else if (curlen !== 0) {
        if (curlen !== prevlen) {
          s2.bl_tree[curlen * 2]++;
        }
        s2.bl_tree[REP_3_6 * 2]++;
      } else if (count <= 10) {
        s2.bl_tree[REPZ_3_10 * 2]++;
      } else {
        s2.bl_tree[REPZ_11_138 * 2]++;
      }
      count = 0;
      prevlen = curlen;
      if (nextlen === 0) {
        max_count = 138;
        min_count = 3;
      } else if (curlen === nextlen) {
        max_count = 6;
        min_count = 3;
      } else {
        max_count = 7;
        min_count = 4;
      }
    }
  };
  const send_tree = (s2, tree, max_code) => {
    let n2;
    let prevlen = -1;
    let curlen;
    let nextlen = tree[0 * 2 + 1];
    let count = 0;
    let max_count = 7;
    let min_count = 4;
    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;
    }
    for (n2 = 0; n2 <= max_code; n2++) {
      curlen = nextlen;
      nextlen = tree[(n2 + 1) * 2 + 1];
      if (++count < max_count && curlen === nextlen) {
        continue;
      } else if (count < min_count) {
        do {
          send_code(s2, curlen, s2.bl_tree);
        } while (--count !== 0);
      } else if (curlen !== 0) {
        if (curlen !== prevlen) {
          send_code(s2, curlen, s2.bl_tree);
          count--;
        }
        send_code(s2, REP_3_6, s2.bl_tree);
        send_bits(s2, count - 3, 2);
      } else if (count <= 10) {
        send_code(s2, REPZ_3_10, s2.bl_tree);
        send_bits(s2, count - 3, 3);
      } else {
        send_code(s2, REPZ_11_138, s2.bl_tree);
        send_bits(s2, count - 11, 7);
      }
      count = 0;
      prevlen = curlen;
      if (nextlen === 0) {
        max_count = 138;
        min_count = 3;
      } else if (curlen === nextlen) {
        max_count = 6;
        min_count = 3;
      } else {
        max_count = 7;
        min_count = 4;
      }
    }
  };
  const build_bl_tree = (s2) => {
    let max_blindex;
    scan_tree(s2, s2.dyn_ltree, s2.l_desc.max_code);
    scan_tree(s2, s2.dyn_dtree, s2.d_desc.max_code);
    build_tree(s2, s2.bl_desc);
    for (max_blindex = BL_CODES$1 - 1; max_blindex >= 3; max_blindex--) {
      if (s2.bl_tree[bl_order[max_blindex] * 2 + 1] !== 0) {
        break;
      }
    }
    s2.opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4;
    return max_blindex;
  };
  const send_all_trees = (s2, lcodes, dcodes, blcodes) => {
    let rank2;
    send_bits(s2, lcodes - 257, 5);
    send_bits(s2, dcodes - 1, 5);
    send_bits(s2, blcodes - 4, 4);
    for (rank2 = 0; rank2 < blcodes; rank2++) {
      send_bits(s2, s2.bl_tree[bl_order[rank2] * 2 + 1], 3);
    }
    send_tree(s2, s2.dyn_ltree, lcodes - 1);
    send_tree(s2, s2.dyn_dtree, dcodes - 1);
  };
  const detect_data_type = (s2) => {
    let block_mask = 4093624447;
    let n2;
    for (n2 = 0; n2 <= 31; n2++, block_mask >>>= 1) {
      if (block_mask & 1 && s2.dyn_ltree[n2 * 2] !== 0) {
        return Z_BINARY;
      }
    }
    if (s2.dyn_ltree[9 * 2] !== 0 || s2.dyn_ltree[10 * 2] !== 0 || s2.dyn_ltree[13 * 2] !== 0) {
      return Z_TEXT;
    }
    for (n2 = 32; n2 < LITERALS$1; n2++) {
      if (s2.dyn_ltree[n2 * 2] !== 0) {
        return Z_TEXT;
      }
    }
    return Z_BINARY;
  };
  let static_init_done = false;
  const _tr_init$1 = (s2) => {
    if (!static_init_done) {
      tr_static_init();
      static_init_done = true;
    }
    s2.l_desc = new TreeDesc(s2.dyn_ltree, static_l_desc);
    s2.d_desc = new TreeDesc(s2.dyn_dtree, static_d_desc);
    s2.bl_desc = new TreeDesc(s2.bl_tree, static_bl_desc);
    s2.bi_buf = 0;
    s2.bi_valid = 0;
    init_block(s2);
  };
  const _tr_stored_block$1 = (s2, buf, stored_len, last) => {
    send_bits(s2, (STORED_BLOCK << 1) + (last ? 1 : 0), 3);
    bi_windup(s2);
    put_short(s2, stored_len);
    put_short(s2, ~stored_len);
    if (stored_len) {
      s2.pending_buf.set(s2.window.subarray(buf, buf + stored_len), s2.pending);
    }
    s2.pending += stored_len;
  };
  const _tr_align$1 = (s2) => {
    send_bits(s2, STATIC_TREES << 1, 3);
    send_code(s2, END_BLOCK, static_ltree);
    bi_flush(s2);
  };
  const _tr_flush_block$1 = (s2, buf, stored_len, last) => {
    let opt_lenb, static_lenb;
    let max_blindex = 0;
    if (s2.level > 0) {
      if (s2.strm.data_type === Z_UNKNOWN$1) {
        s2.strm.data_type = detect_data_type(s2);
      }
      build_tree(s2, s2.l_desc);
      build_tree(s2, s2.d_desc);
      max_blindex = build_bl_tree(s2);
      opt_lenb = s2.opt_len + 3 + 7 >>> 3;
      static_lenb = s2.static_len + 3 + 7 >>> 3;
      if (static_lenb <= opt_lenb) {
        opt_lenb = static_lenb;
      }
    } else {
      opt_lenb = static_lenb = stored_len + 5;
    }
    if (stored_len + 4 <= opt_lenb && buf !== -1) {
      _tr_stored_block$1(s2, buf, stored_len, last);
    } else if (s2.strategy === Z_FIXED$1 || static_lenb === opt_lenb) {
      send_bits(s2, (STATIC_TREES << 1) + (last ? 1 : 0), 3);
      compress_block(s2, static_ltree, static_dtree);
    } else {
      send_bits(s2, (DYN_TREES << 1) + (last ? 1 : 0), 3);
      send_all_trees(s2, s2.l_desc.max_code + 1, s2.d_desc.max_code + 1, max_blindex + 1);
      compress_block(s2, s2.dyn_ltree, s2.dyn_dtree);
    }
    init_block(s2);
    if (last) {
      bi_windup(s2);
    }
  };
  const _tr_tally$1 = (s2, dist, lc) => {
    s2.pending_buf[s2.sym_buf + s2.sym_next++] = dist;
    s2.pending_buf[s2.sym_buf + s2.sym_next++] = dist >> 8;
    s2.pending_buf[s2.sym_buf + s2.sym_next++] = lc;
    if (dist === 0) {
      s2.dyn_ltree[lc * 2]++;
    } else {
      s2.matches++;
      dist--;
      s2.dyn_ltree[(_length_code[lc] + LITERALS$1 + 1) * 2]++;
      s2.dyn_dtree[d_code(dist) * 2]++;
    }
    return s2.sym_next === s2.sym_end;
  };
  var _tr_init_1 = _tr_init$1;
  var _tr_stored_block_1 = _tr_stored_block$1;
  var _tr_flush_block_1 = _tr_flush_block$1;
  var _tr_tally_1 = _tr_tally$1;
  var _tr_align_1 = _tr_align$1;
  var trees = {
    _tr_init: _tr_init_1,
    _tr_stored_block: _tr_stored_block_1,
    _tr_flush_block: _tr_flush_block_1,
    _tr_tally: _tr_tally_1,
    _tr_align: _tr_align_1
  };
  const adler32 = (adler, buf, len, pos) => {
    let s1 = adler & 65535 | 0, s2 = adler >>> 16 & 65535 | 0, n2 = 0;
    while (len !== 0) {
      n2 = len > 2e3 ? 2e3 : len;
      len -= n2;
      do {
        s1 = s1 + buf[pos++] | 0;
        s2 = s2 + s1 | 0;
      } while (--n2);
      s1 %= 65521;
      s2 %= 65521;
    }
    return s1 | s2 << 16 | 0;
  };
  var adler32_1 = adler32;
  const makeTable = () => {
    let c2, table = [];
    for (var n2 = 0; n2 < 256; n2++) {
      c2 = n2;
      for (var k2 = 0; k2 < 8; k2++) {
        c2 = c2 & 1 ? 3988292384 ^ c2 >>> 1 : c2 >>> 1;
      }
      table[n2] = c2;
    }
    return table;
  };
  const crcTable = new Uint32Array(makeTable());
  const crc32 = (crc, buf, len, pos) => {
    const t2 = crcTable;
    const end = pos + len;
    crc ^= -1;
    for (let i2 = pos; i2 < end; i2++) {
      crc = crc >>> 8 ^ t2[(crc ^ buf[i2]) & 255];
    }
    return crc ^ -1;
  };
  var crc32_1 = crc32;
  var messages = {
    2: "need dictionary",
    /* Z_NEED_DICT       2  */
    1: "stream end",
    /* Z_STREAM_END      1  */
    0: "",
    /* Z_OK              0  */
    "-1": "file error",
    /* Z_ERRNO         (-1) */
    "-2": "stream error",
    /* Z_STREAM_ERROR  (-2) */
    "-3": "data error",
    /* Z_DATA_ERROR    (-3) */
    "-4": "insufficient memory",
    /* Z_MEM_ERROR     (-4) */
    "-5": "buffer error",
    /* Z_BUF_ERROR     (-5) */
    "-6": "incompatible version"
    /* Z_VERSION_ERROR (-6) */
  };
  var constants$2 = {
    /* Allowed flush values; see deflate() and inflate() below for details */
    Z_NO_FLUSH: 0,
    Z_PARTIAL_FLUSH: 1,
    Z_SYNC_FLUSH: 2,
    Z_FULL_FLUSH: 3,
    Z_FINISH: 4,
    Z_BLOCK: 5,
    Z_TREES: 6,
    /* Return codes for the compression/decompression functions. Negative values
    * are errors, positive values are used for special but normal events.
    */
    Z_OK: 0,
    Z_STREAM_END: 1,
    Z_NEED_DICT: 2,
    Z_ERRNO: -1,
    Z_STREAM_ERROR: -2,
    Z_DATA_ERROR: -3,
    Z_MEM_ERROR: -4,
    Z_BUF_ERROR: -5,
    //Z_VERSION_ERROR: -6,
    /* compression levels */
    Z_NO_COMPRESSION: 0,
    Z_BEST_SPEED: 1,
    Z_BEST_COMPRESSION: 9,
    Z_DEFAULT_COMPRESSION: -1,
    Z_FILTERED: 1,
    Z_HUFFMAN_ONLY: 2,
    Z_RLE: 3,
    Z_FIXED: 4,
    Z_DEFAULT_STRATEGY: 0,
    /* Possible values of the data_type field (though see inflate()) */
    Z_BINARY: 0,
    Z_TEXT: 1,
    //Z_ASCII:                1, // = Z_TEXT (deprecated)
    Z_UNKNOWN: 2,
    /* The deflate compression method */
    Z_DEFLATED: 8
    //Z_NULL:                 null // Use -1 or null inline, depending on var type
  };
  const { _tr_init, _tr_stored_block, _tr_flush_block, _tr_tally, _tr_align } = trees;
  const {
    Z_NO_FLUSH: Z_NO_FLUSH$2,
    Z_PARTIAL_FLUSH,
    Z_FULL_FLUSH: Z_FULL_FLUSH$1,
    Z_FINISH: Z_FINISH$3,
    Z_BLOCK: Z_BLOCK$1,
    Z_OK: Z_OK$3,
    Z_STREAM_END: Z_STREAM_END$3,
    Z_STREAM_ERROR: Z_STREAM_ERROR$2,
    Z_DATA_ERROR: Z_DATA_ERROR$2,
    Z_BUF_ERROR: Z_BUF_ERROR$1,
    Z_DEFAULT_COMPRESSION: Z_DEFAULT_COMPRESSION$1,
    Z_FILTERED,
    Z_HUFFMAN_ONLY,
    Z_RLE,
    Z_FIXED,
    Z_DEFAULT_STRATEGY: Z_DEFAULT_STRATEGY$1,
    Z_UNKNOWN,
    Z_DEFLATED: Z_DEFLATED$2
  } = constants$2;
  const MAX_MEM_LEVEL = 9;
  const MAX_WBITS$1 = 15;
  const DEF_MEM_LEVEL = 8;
  const LENGTH_CODES = 29;
  const LITERALS = 256;
  const L_CODES = LITERALS + 1 + LENGTH_CODES;
  const D_CODES = 30;
  const BL_CODES = 19;
  const HEAP_SIZE = 2 * L_CODES + 1;
  const MAX_BITS = 15;
  const MIN_MATCH = 3;
  const MAX_MATCH = 258;
  const MIN_LOOKAHEAD = MAX_MATCH + MIN_MATCH + 1;
  const PRESET_DICT = 32;
  const INIT_STATE = 42;
  const GZIP_STATE = 57;
  const EXTRA_STATE = 69;
  const NAME_STATE = 73;
  const COMMENT_STATE = 91;
  const HCRC_STATE = 103;
  const BUSY_STATE = 113;
  const FINISH_STATE = 666;
  const BS_NEED_MORE = 1;
  const BS_BLOCK_DONE = 2;
  const BS_FINISH_STARTED = 3;
  const BS_FINISH_DONE = 4;
  const OS_CODE = 3;
  const err = (strm, errorCode) => {
    strm.msg = messages[errorCode];
    return errorCode;
  };
  const rank = (f2) => {
    return f2 * 2 - (f2 > 4 ? 9 : 0);
  };
  const zero = (buf) => {
    let len = buf.length;
    while (--len >= 0) {
      buf[len] = 0;
    }
  };
  const slide_hash = (s2) => {
    let n2, m2;
    let p2;
    let wsize = s2.w_size;
    n2 = s2.hash_size;
    p2 = n2;
    do {
      m2 = s2.head[--p2];
      s2.head[p2] = m2 >= wsize ? m2 - wsize : 0;
    } while (--n2);
    n2 = wsize;
    p2 = n2;
    do {
      m2 = s2.prev[--p2];
      s2.prev[p2] = m2 >= wsize ? m2 - wsize : 0;
    } while (--n2);
  };
  let HASH_ZLIB = (s2, prev, data) => (prev << s2.hash_shift ^ data) & s2.hash_mask;
  let HASH = HASH_ZLIB;
  const flush_pending = (strm) => {
    const s2 = strm.state;
    let len = s2.pending;
    if (len > strm.avail_out) {
      len = strm.avail_out;
    }
    if (len === 0) {
      return;
    }
    strm.output.set(s2.pending_buf.subarray(s2.pending_out, s2.pending_out + len), strm.next_out);
    strm.next_out += len;
    s2.pending_out += len;
    strm.total_out += len;
    strm.avail_out -= len;
    s2.pending -= len;
    if (s2.pending === 0) {
      s2.pending_out = 0;
    }
  };
  const flush_block_only = (s2, last) => {
    _tr_flush_block(s2, s2.block_start >= 0 ? s2.block_start : -1, s2.strstart - s2.block_start, last);
    s2.block_start = s2.strstart;
    flush_pending(s2.strm);
  };
  const put_byte = (s2, b2) => {
    s2.pending_buf[s2.pending++] = b2;
  };
  const putShortMSB = (s2, b2) => {
    s2.pending_buf[s2.pending++] = b2 >>> 8 & 255;
    s2.pending_buf[s2.pending++] = b2 & 255;
  };
  const read_buf = (strm, buf, start, size) => {
    let len = strm.avail_in;
    if (len > size) {
      len = size;
    }
    if (len === 0) {
      return 0;
    }
    strm.avail_in -= len;
    buf.set(strm.input.subarray(strm.next_in, strm.next_in + len), start);
    if (strm.state.wrap === 1) {
      strm.adler = adler32_1(strm.adler, buf, len, start);
    } else if (strm.state.wrap === 2) {
      strm.adler = crc32_1(strm.adler, buf, len, start);
    }
    strm.next_in += len;
    strm.total_in += len;
    return len;
  };
  const longest_match = (s2, cur_match) => {
    let chain_length = s2.max_chain_length;
    let scan = s2.strstart;
    let match;
    let len;
    let best_len = s2.prev_length;
    let nice_match = s2.nice_match;
    const limit = s2.strstart > s2.w_size - MIN_LOOKAHEAD ? s2.strstart - (s2.w_size - MIN_LOOKAHEAD) : 0;
    const _win = s2.window;
    const wmask = s2.w_mask;
    const prev = s2.prev;
    const strend = s2.strstart + MAX_MATCH;
    let scan_end1 = _win[scan + best_len - 1];
    let scan_end = _win[scan + best_len];
    if (s2.prev_length >= s2.good_match) {
      chain_length >>= 2;
    }
    if (nice_match > s2.lookahead) {
      nice_match = s2.lookahead;
    }
    do {
      match = cur_match;
      if (_win[match + best_len] !== scan_end || _win[match + best_len - 1] !== scan_end1 || _win[match] !== _win[scan] || _win[++match] !== _win[scan + 1]) {
        continue;
      }
      scan += 2;
      match++;
      do {
      } while (_win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && scan < strend);
      len = MAX_MATCH - (strend - scan);
      scan = strend - MAX_MATCH;
      if (len > best_len) {
        s2.match_start = cur_match;
        best_len = len;
        if (len >= nice_match) {
          break;
        }
        scan_end1 = _win[scan + best_len - 1];
        scan_end = _win[scan + best_len];
      }
    } while ((cur_match = prev[cur_match & wmask]) > limit && --chain_length !== 0);
    if (best_len <= s2.lookahead) {
      return best_len;
    }
    return s2.lookahead;
  };
  const fill_window = (s2) => {
    const _w_size = s2.w_size;
    let n2, more, str;
    do {
      more = s2.window_size - s2.lookahead - s2.strstart;
      if (s2.strstart >= _w_size + (_w_size - MIN_LOOKAHEAD)) {
        s2.window.set(s2.window.subarray(_w_size, _w_size + _w_size - more), 0);
        s2.match_start -= _w_size;
        s2.strstart -= _w_size;
        s2.block_start -= _w_size;
        if (s2.insert > s2.strstart) {
          s2.insert = s2.strstart;
        }
        slide_hash(s2);
        more += _w_size;
      }
      if (s2.strm.avail_in === 0) {
        break;
      }
      n2 = read_buf(s2.strm, s2.window, s2.strstart + s2.lookahead, more);
      s2.lookahead += n2;
      if (s2.lookahead + s2.insert >= MIN_MATCH) {
        str = s2.strstart - s2.insert;
        s2.ins_h = s2.window[str];
        s2.ins_h = HASH(s2, s2.ins_h, s2.window[str + 1]);
        while (s2.insert) {
          s2.ins_h = HASH(s2, s2.ins_h, s2.window[str + MIN_MATCH - 1]);
          s2.prev[str & s2.w_mask] = s2.head[s2.ins_h];
          s2.head[s2.ins_h] = str;
          str++;
          s2.insert--;
          if (s2.lookahead + s2.insert < MIN_MATCH) {
            break;
          }
        }
      }
    } while (s2.lookahead < MIN_LOOKAHEAD && s2.strm.avail_in !== 0);
  };
  const deflate_stored = (s2, flush) => {
    let min_block = s2.pending_buf_size - 5 > s2.w_size ? s2.w_size : s2.pending_buf_size - 5;
    let len, left, have, last = 0;
    let used = s2.strm.avail_in;
    do {
      len = 65535;
      have = s2.bi_valid + 42 >> 3;
      if (s2.strm.avail_out < have) {
        break;
      }
      have = s2.strm.avail_out - have;
      left = s2.strstart - s2.block_start;
      if (len > left + s2.strm.avail_in) {
        len = left + s2.strm.avail_in;
      }
      if (len > have) {
        len = have;
      }
      if (len < min_block && (len === 0 && flush !== Z_FINISH$3 || flush === Z_NO_FLUSH$2 || len !== left + s2.strm.avail_in)) {
        break;
      }
      last = flush === Z_FINISH$3 && len === left + s2.strm.avail_in ? 1 : 0;
      _tr_stored_block(s2, 0, 0, last);
      s2.pending_buf[s2.pending - 4] = len;
      s2.pending_buf[s2.pending - 3] = len >> 8;
      s2.pending_buf[s2.pending - 2] = ~len;
      s2.pending_buf[s2.pending - 1] = ~len >> 8;
      flush_pending(s2.strm);
      if (left) {
        if (left > len) {
          left = len;
        }
        s2.strm.output.set(s2.window.subarray(s2.block_start, s2.block_start + left), s2.strm.next_out);
        s2.strm.next_out += left;
        s2.strm.avail_out -= left;
        s2.strm.total_out += left;
        s2.block_start += left;
        len -= left;
      }
      if (len) {
        read_buf(s2.strm, s2.strm.output, s2.strm.next_out, len);
        s2.strm.next_out += len;
        s2.strm.avail_out -= len;
        s2.strm.total_out += len;
      }
    } while (last === 0);
    used -= s2.strm.avail_in;
    if (used) {
      if (used >= s2.w_size) {
        s2.matches = 2;
        s2.window.set(s2.strm.input.subarray(s2.strm.next_in - s2.w_size, s2.strm.next_in), 0);
        s2.strstart = s2.w_size;
        s2.insert = s2.strstart;
      } else {
        if (s2.window_size - s2.strstart <= used) {
          s2.strstart -= s2.w_size;
          s2.window.set(s2.window.subarray(s2.w_size, s2.w_size + s2.strstart), 0);
          if (s2.matches < 2) {
            s2.matches++;
          }
          if (s2.insert > s2.strstart) {
            s2.insert = s2.strstart;
          }
        }
        s2.window.set(s2.strm.input.subarray(s2.strm.next_in - used, s2.strm.next_in), s2.strstart);
        s2.strstart += used;
        s2.insert += used > s2.w_size - s2.insert ? s2.w_size - s2.insert : used;
      }
      s2.block_start = s2.strstart;
    }
    if (s2.high_water < s2.strstart) {
      s2.high_water = s2.strstart;
    }
    if (last) {
      return BS_FINISH_DONE;
    }
    if (flush !== Z_NO_FLUSH$2 && flush !== Z_FINISH$3 && s2.strm.avail_in === 0 && s2.strstart === s2.block_start) {
      return BS_BLOCK_DONE;
    }
    have = s2.window_size - s2.strstart;
    if (s2.strm.avail_in > have && s2.block_start >= s2.w_size) {
      s2.block_start -= s2.w_size;
      s2.strstart -= s2.w_size;
      s2.window.set(s2.window.subarray(s2.w_size, s2.w_size + s2.strstart), 0);
      if (s2.matches < 2) {
        s2.matches++;
      }
      have += s2.w_size;
      if (s2.insert > s2.strstart) {
        s2.insert = s2.strstart;
      }
    }
    if (have > s2.strm.avail_in) {
      have = s2.strm.avail_in;
    }
    if (have) {
      read_buf(s2.strm, s2.window, s2.strstart, have);
      s2.strstart += have;
      s2.insert += have > s2.w_size - s2.insert ? s2.w_size - s2.insert : have;
    }
    if (s2.high_water < s2.strstart) {
      s2.high_water = s2.strstart;
    }
    have = s2.bi_valid + 42 >> 3;
    have = s2.pending_buf_size - have > 65535 ? 65535 : s2.pending_buf_size - have;
    min_block = have > s2.w_size ? s2.w_size : have;
    left = s2.strstart - s2.block_start;
    if (left >= min_block || (left || flush === Z_FINISH$3) && flush !== Z_NO_FLUSH$2 && s2.strm.avail_in === 0 && left <= have) {
      len = left > have ? have : left;
      last = flush === Z_FINISH$3 && s2.strm.avail_in === 0 && len === left ? 1 : 0;
      _tr_stored_block(s2, s2.block_start, len, last);
      s2.block_start += len;
      flush_pending(s2.strm);
    }
    return last ? BS_FINISH_STARTED : BS_NEED_MORE;
  };
  const deflate_fast = (s2, flush) => {
    let hash_head;
    let bflush;
    for (; ; ) {
      if (s2.lookahead < MIN_LOOKAHEAD) {
        fill_window(s2);
        if (s2.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH$2) {
          return BS_NEED_MORE;
        }
        if (s2.lookahead === 0) {
          break;
        }
      }
      hash_head = 0;
      if (s2.lookahead >= MIN_MATCH) {
        s2.ins_h = HASH(s2, s2.ins_h, s2.window[s2.strstart + MIN_MATCH - 1]);
        hash_head = s2.prev[s2.strstart & s2.w_mask] = s2.head[s2.ins_h];
        s2.head[s2.ins_h] = s2.strstart;
      }
      if (hash_head !== 0 && s2.strstart - hash_head <= s2.w_size - MIN_LOOKAHEAD) {
        s2.match_length = longest_match(s2, hash_head);
      }
      if (s2.match_length >= MIN_MATCH) {
        bflush = _tr_tally(s2, s2.strstart - s2.match_start, s2.match_length - MIN_MATCH);
        s2.lookahead -= s2.match_length;
        if (s2.match_length <= s2.max_lazy_match && s2.lookahead >= MIN_MATCH) {
          s2.match_length--;
          do {
            s2.strstart++;
            s2.ins_h = HASH(s2, s2.ins_h, s2.window[s2.strstart + MIN_MATCH - 1]);
            hash_head = s2.prev[s2.strstart & s2.w_mask] = s2.head[s2.ins_h];
            s2.head[s2.ins_h] = s2.strstart;
          } while (--s2.match_length !== 0);
          s2.strstart++;
        } else {
          s2.strstart += s2.match_length;
          s2.match_length = 0;
          s2.ins_h = s2.window[s2.strstart];
          s2.ins_h = HASH(s2, s2.ins_h, s2.window[s2.strstart + 1]);
        }
      } else {
        bflush = _tr_tally(s2, 0, s2.window[s2.strstart]);
        s2.lookahead--;
        s2.strstart++;
      }
      if (bflush) {
        flush_block_only(s2, false);
        if (s2.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
      }
    }
    s2.insert = s2.strstart < MIN_MATCH - 1 ? s2.strstart : MIN_MATCH - 1;
    if (flush === Z_FINISH$3) {
      flush_block_only(s2, true);
      if (s2.strm.avail_out === 0) {
        return BS_FINISH_STARTED;
      }
      return BS_FINISH_DONE;
    }
    if (s2.sym_next) {
      flush_block_only(s2, false);
      if (s2.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    }
    return BS_BLOCK_DONE;
  };
  const deflate_slow = (s2, flush) => {
    let hash_head;
    let bflush;
    let max_insert;
    for (; ; ) {
      if (s2.lookahead < MIN_LOOKAHEAD) {
        fill_window(s2);
        if (s2.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH$2) {
          return BS_NEED_MORE;
        }
        if (s2.lookahead === 0) {
          break;
        }
      }
      hash_head = 0;
      if (s2.lookahead >= MIN_MATCH) {
        s2.ins_h = HASH(s2, s2.ins_h, s2.window[s2.strstart + MIN_MATCH - 1]);
        hash_head = s2.prev[s2.strstart & s2.w_mask] = s2.head[s2.ins_h];
        s2.head[s2.ins_h] = s2.strstart;
      }
      s2.prev_length = s2.match_length;
      s2.prev_match = s2.match_start;
      s2.match_length = MIN_MATCH - 1;
      if (hash_head !== 0 && s2.prev_length < s2.max_lazy_match && s2.strstart - hash_head <= s2.w_size - MIN_LOOKAHEAD) {
        s2.match_length = longest_match(s2, hash_head);
        if (s2.match_length <= 5 && (s2.strategy === Z_FILTERED || s2.match_length === MIN_MATCH && s2.strstart - s2.match_start > 4096)) {
          s2.match_length = MIN_MATCH - 1;
        }
      }
      if (s2.prev_length >= MIN_MATCH && s2.match_length <= s2.prev_length) {
        max_insert = s2.strstart + s2.lookahead - MIN_MATCH;
        bflush = _tr_tally(s2, s2.strstart - 1 - s2.prev_match, s2.prev_length - MIN_MATCH);
        s2.lookahead -= s2.prev_length - 1;
        s2.prev_length -= 2;
        do {
          if (++s2.strstart <= max_insert) {
            s2.ins_h = HASH(s2, s2.ins_h, s2.window[s2.strstart + MIN_MATCH - 1]);
            hash_head = s2.prev[s2.strstart & s2.w_mask] = s2.head[s2.ins_h];
            s2.head[s2.ins_h] = s2.strstart;
          }
        } while (--s2.prev_length !== 0);
        s2.match_available = 0;
        s2.match_length = MIN_MATCH - 1;
        s2.strstart++;
        if (bflush) {
          flush_block_only(s2, false);
          if (s2.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
        }
      } else if (s2.match_available) {
        bflush = _tr_tally(s2, 0, s2.window[s2.strstart - 1]);
        if (bflush) {
          flush_block_only(s2, false);
        }
        s2.strstart++;
        s2.lookahead--;
        if (s2.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
      } else {
        s2.match_available = 1;
        s2.strstart++;
        s2.lookahead--;
      }
    }
    if (s2.match_available) {
      bflush = _tr_tally(s2, 0, s2.window[s2.strstart - 1]);
      s2.match_available = 0;
    }
    s2.insert = s2.strstart < MIN_MATCH - 1 ? s2.strstart : MIN_MATCH - 1;
    if (flush === Z_FINISH$3) {
      flush_block_only(s2, true);
      if (s2.strm.avail_out === 0) {
        return BS_FINISH_STARTED;
      }
      return BS_FINISH_DONE;
    }
    if (s2.sym_next) {
      flush_block_only(s2, false);
      if (s2.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    }
    return BS_BLOCK_DONE;
  };
  const deflate_rle = (s2, flush) => {
    let bflush;
    let prev;
    let scan, strend;
    const _win = s2.window;
    for (; ; ) {
      if (s2.lookahead <= MAX_MATCH) {
        fill_window(s2);
        if (s2.lookahead <= MAX_MATCH && flush === Z_NO_FLUSH$2) {
          return BS_NEED_MORE;
        }
        if (s2.lookahead === 0) {
          break;
        }
      }
      s2.match_length = 0;
      if (s2.lookahead >= MIN_MATCH && s2.strstart > 0) {
        scan = s2.strstart - 1;
        prev = _win[scan];
        if (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan]) {
          strend = s2.strstart + MAX_MATCH;
          do {
          } while (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && scan < strend);
          s2.match_length = MAX_MATCH - (strend - scan);
          if (s2.match_length > s2.lookahead) {
            s2.match_length = s2.lookahead;
          }
        }
      }
      if (s2.match_length >= MIN_MATCH) {
        bflush = _tr_tally(s2, 1, s2.match_length - MIN_MATCH);
        s2.lookahead -= s2.match_length;
        s2.strstart += s2.match_length;
        s2.match_length = 0;
      } else {
        bflush = _tr_tally(s2, 0, s2.window[s2.strstart]);
        s2.lookahead--;
        s2.strstart++;
      }
      if (bflush) {
        flush_block_only(s2, false);
        if (s2.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
      }
    }
    s2.insert = 0;
    if (flush === Z_FINISH$3) {
      flush_block_only(s2, true);
      if (s2.strm.avail_out === 0) {
        return BS_FINISH_STARTED;
      }
      return BS_FINISH_DONE;
    }
    if (s2.sym_next) {
      flush_block_only(s2, false);
      if (s2.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    }
    return BS_BLOCK_DONE;
  };
  const deflate_huff = (s2, flush) => {
    let bflush;
    for (; ; ) {
      if (s2.lookahead === 0) {
        fill_window(s2);
        if (s2.lookahead === 0) {
          if (flush === Z_NO_FLUSH$2) {
            return BS_NEED_MORE;
          }
          break;
        }
      }
      s2.match_length = 0;
      bflush = _tr_tally(s2, 0, s2.window[s2.strstart]);
      s2.lookahead--;
      s2.strstart++;
      if (bflush) {
        flush_block_only(s2, false);
        if (s2.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
      }
    }
    s2.insert = 0;
    if (flush === Z_FINISH$3) {
      flush_block_only(s2, true);
      if (s2.strm.avail_out === 0) {
        return BS_FINISH_STARTED;
      }
      return BS_FINISH_DONE;
    }
    if (s2.sym_next) {
      flush_block_only(s2, false);
      if (s2.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    }
    return BS_BLOCK_DONE;
  };
  function Config(good_length, max_lazy, nice_length, max_chain, func) {
    this.good_length = good_length;
    this.max_lazy = max_lazy;
    this.nice_length = nice_length;
    this.max_chain = max_chain;
    this.func = func;
  }
  const configuration_table = [
    /*      good lazy nice chain */
    new Config(0, 0, 0, 0, deflate_stored),
    /* 0 store only */
    new Config(4, 4, 8, 4, deflate_fast),
    /* 1 max speed, no lazy matches */
    new Config(4, 5, 16, 8, deflate_fast),
    /* 2 */
    new Config(4, 6, 32, 32, deflate_fast),
    /* 3 */
    new Config(4, 4, 16, 16, deflate_slow),
    /* 4 lazy matches */
    new Config(8, 16, 32, 32, deflate_slow),
    /* 5 */
    new Config(8, 16, 128, 128, deflate_slow),
    /* 6 */
    new Config(8, 32, 128, 256, deflate_slow),
    /* 7 */
    new Config(32, 128, 258, 1024, deflate_slow),
    /* 8 */
    new Config(32, 258, 258, 4096, deflate_slow)
    /* 9 max compression */
  ];
  const lm_init = (s2) => {
    s2.window_size = 2 * s2.w_size;
    zero(s2.head);
    s2.max_lazy_match = configuration_table[s2.level].max_lazy;
    s2.good_match = configuration_table[s2.level].good_length;
    s2.nice_match = configuration_table[s2.level].nice_length;
    s2.max_chain_length = configuration_table[s2.level].max_chain;
    s2.strstart = 0;
    s2.block_start = 0;
    s2.lookahead = 0;
    s2.insert = 0;
    s2.match_length = s2.prev_length = MIN_MATCH - 1;
    s2.match_available = 0;
    s2.ins_h = 0;
  };
  function DeflateState() {
    this.strm = null;
    this.status = 0;
    this.pending_buf = null;
    this.pending_buf_size = 0;
    this.pending_out = 0;
    this.pending = 0;
    this.wrap = 0;
    this.gzhead = null;
    this.gzindex = 0;
    this.method = Z_DEFLATED$2;
    this.last_flush = -1;
    this.w_size = 0;
    this.w_bits = 0;
    this.w_mask = 0;
    this.window = null;
    this.window_size = 0;
    this.prev = null;
    this.head = null;
    this.ins_h = 0;
    this.hash_size = 0;
    this.hash_bits = 0;
    this.hash_mask = 0;
    this.hash_shift = 0;
    this.block_start = 0;
    this.match_length = 0;
    this.prev_match = 0;
    this.match_available = 0;
    this.strstart = 0;
    this.match_start = 0;
    this.lookahead = 0;
    this.prev_length = 0;
    this.max_chain_length = 0;
    this.max_lazy_match = 0;
    this.level = 0;
    this.strategy = 0;
    this.good_match = 0;
    this.nice_match = 0;
    this.dyn_ltree = new Uint16Array(HEAP_SIZE * 2);
    this.dyn_dtree = new Uint16Array((2 * D_CODES + 1) * 2);
    this.bl_tree = new Uint16Array((2 * BL_CODES + 1) * 2);
    zero(this.dyn_ltree);
    zero(this.dyn_dtree);
    zero(this.bl_tree);
    this.l_desc = null;
    this.d_desc = null;
    this.bl_desc = null;
    this.bl_count = new Uint16Array(MAX_BITS + 1);
    this.heap = new Uint16Array(2 * L_CODES + 1);
    zero(this.heap);
    this.heap_len = 0;
    this.heap_max = 0;
    this.depth = new Uint16Array(2 * L_CODES + 1);
    zero(this.depth);
    this.sym_buf = 0;
    this.lit_bufsize = 0;
    this.sym_next = 0;
    this.sym_end = 0;
    this.opt_len = 0;
    this.static_len = 0;
    this.matches = 0;
    this.insert = 0;
    this.bi_buf = 0;
    this.bi_valid = 0;
  }
  const deflateStateCheck = (strm) => {
    if (!strm) {
      return 1;
    }
    const s2 = strm.state;
    if (!s2 || s2.strm !== strm || s2.status !== INIT_STATE && //#ifdef GZIP
    s2.status !== GZIP_STATE && //#endif
    s2.status !== EXTRA_STATE && s2.status !== NAME_STATE && s2.status !== COMMENT_STATE && s2.status !== HCRC_STATE && s2.status !== BUSY_STATE && s2.status !== FINISH_STATE) {
      return 1;
    }
    return 0;
  };
  const deflateResetKeep = (strm) => {
    if (deflateStateCheck(strm)) {
      return err(strm, Z_STREAM_ERROR$2);
    }
    strm.total_in = strm.total_out = 0;
    strm.data_type = Z_UNKNOWN;
    const s2 = strm.state;
    s2.pending = 0;
    s2.pending_out = 0;
    if (s2.wrap < 0) {
      s2.wrap = -s2.wrap;
    }
    s2.status = //#ifdef GZIP
    s2.wrap === 2 ? GZIP_STATE : (
      //#endif
      s2.wrap ? INIT_STATE : BUSY_STATE
    );
    strm.adler = s2.wrap === 2 ? 0 : 1;
    s2.last_flush = -2;
    _tr_init(s2);
    return Z_OK$3;
  };
  const deflateReset = (strm) => {
    const ret = deflateResetKeep(strm);
    if (ret === Z_OK$3) {
      lm_init(strm.state);
    }
    return ret;
  };
  const deflateSetHeader = (strm, head) => {
    if (deflateStateCheck(strm) || strm.state.wrap !== 2) {
      return Z_STREAM_ERROR$2;
    }
    strm.state.gzhead = head;
    return Z_OK$3;
  };
  const deflateInit2 = (strm, level, method, windowBits, memLevel, strategy) => {
    if (!strm) {
      return Z_STREAM_ERROR$2;
    }
    let wrap = 1;
    if (level === Z_DEFAULT_COMPRESSION$1) {
      level = 6;
    }
    if (windowBits < 0) {
      wrap = 0;
      windowBits = -windowBits;
    } else if (windowBits > 15) {
      wrap = 2;
      windowBits -= 16;
    }
    if (memLevel < 1 || memLevel > MAX_MEM_LEVEL || method !== Z_DEFLATED$2 || windowBits < 8 || windowBits > 15 || level < 0 || level > 9 || strategy < 0 || strategy > Z_FIXED || windowBits === 8 && wrap !== 1) {
      return err(strm, Z_STREAM_ERROR$2);
    }
    if (windowBits === 8) {
      windowBits = 9;
    }
    const s2 = new DeflateState();
    strm.state = s2;
    s2.strm = strm;
    s2.status = INIT_STATE;
    s2.wrap = wrap;
    s2.gzhead = null;
    s2.w_bits = windowBits;
    s2.w_size = 1 << s2.w_bits;
    s2.w_mask = s2.w_size - 1;
    s2.hash_bits = memLevel + 7;
    s2.hash_size = 1 << s2.hash_bits;
    s2.hash_mask = s2.hash_size - 1;
    s2.hash_shift = ~~((s2.hash_bits + MIN_MATCH - 1) / MIN_MATCH);
    s2.window = new Uint8Array(s2.w_size * 2);
    s2.head = new Uint16Array(s2.hash_size);
    s2.prev = new Uint16Array(s2.w_size);
    s2.lit_bufsize = 1 << memLevel + 6;
    s2.pending_buf_size = s2.lit_bufsize * 4;
    s2.pending_buf = new Uint8Array(s2.pending_buf_size);
    s2.sym_buf = s2.lit_bufsize;
    s2.sym_end = (s2.lit_bufsize - 1) * 3;
    s2.level = level;
    s2.strategy = strategy;
    s2.method = method;
    return deflateReset(strm);
  };
  const deflateInit = (strm, level) => {
    return deflateInit2(strm, level, Z_DEFLATED$2, MAX_WBITS$1, DEF_MEM_LEVEL, Z_DEFAULT_STRATEGY$1);
  };
  const deflate$2 = (strm, flush) => {
    if (deflateStateCheck(strm) || flush > Z_BLOCK$1 || flush < 0) {
      return strm ? err(strm, Z_STREAM_ERROR$2) : Z_STREAM_ERROR$2;
    }
    const s2 = strm.state;
    if (!strm.output || strm.avail_in !== 0 && !strm.input || s2.status === FINISH_STATE && flush !== Z_FINISH$3) {
      return err(strm, strm.avail_out === 0 ? Z_BUF_ERROR$1 : Z_STREAM_ERROR$2);
    }
    const old_flush = s2.last_flush;
    s2.last_flush = flush;
    if (s2.pending !== 0) {
      flush_pending(strm);
      if (strm.avail_out === 0) {
        s2.last_flush = -1;
        return Z_OK$3;
      }
    } else if (strm.avail_in === 0 && rank(flush) <= rank(old_flush) && flush !== Z_FINISH$3) {
      return err(strm, Z_BUF_ERROR$1);
    }
    if (s2.status === FINISH_STATE && strm.avail_in !== 0) {
      return err(strm, Z_BUF_ERROR$1);
    }
    if (s2.status === INIT_STATE && s2.wrap === 0) {
      s2.status = BUSY_STATE;
    }
    if (s2.status === INIT_STATE) {
      let header = Z_DEFLATED$2 + (s2.w_bits - 8 << 4) << 8;
      let level_flags = -1;
      if (s2.strategy >= Z_HUFFMAN_ONLY || s2.level < 2) {
        level_flags = 0;
      } else if (s2.level < 6) {
        level_flags = 1;
      } else if (s2.level === 6) {
        level_flags = 2;
      } else {
        level_flags = 3;
      }
      header |= level_flags << 6;
      if (s2.strstart !== 0) {
        header |= PRESET_DICT;
      }
      header += 31 - header % 31;
      putShortMSB(s2, header);
      if (s2.strstart !== 0) {
        putShortMSB(s2, strm.adler >>> 16);
        putShortMSB(s2, strm.adler & 65535);
      }
      strm.adler = 1;
      s2.status = BUSY_STATE;
      flush_pending(strm);
      if (s2.pending !== 0) {
        s2.last_flush = -1;
        return Z_OK$3;
      }
    }
    if (s2.status === GZIP_STATE) {
      strm.adler = 0;
      put_byte(s2, 31);
      put_byte(s2, 139);
      put_byte(s2, 8);
      if (!s2.gzhead) {
        put_byte(s2, 0);
        put_byte(s2, 0);
        put_byte(s2, 0);
        put_byte(s2, 0);
        put_byte(s2, 0);
        put_byte(s2, s2.level === 9 ? 2 : s2.strategy >= Z_HUFFMAN_ONLY || s2.level < 2 ? 4 : 0);
        put_byte(s2, OS_CODE);
        s2.status = BUSY_STATE;
        flush_pending(strm);
        if (s2.pending !== 0) {
          s2.last_flush = -1;
          return Z_OK$3;
        }
      } else {
        put_byte(
          s2,
          (s2.gzhead.text ? 1 : 0) + (s2.gzhead.hcrc ? 2 : 0) + (!s2.gzhead.extra ? 0 : 4) + (!s2.gzhead.name ? 0 : 8) + (!s2.gzhead.comment ? 0 : 16)
        );
        put_byte(s2, s2.gzhead.time & 255);
        put_byte(s2, s2.gzhead.time >> 8 & 255);
        put_byte(s2, s2.gzhead.time >> 16 & 255);
        put_byte(s2, s2.gzhead.time >> 24 & 255);
        put_byte(s2, s2.level === 9 ? 2 : s2.strategy >= Z_HUFFMAN_ONLY || s2.level < 2 ? 4 : 0);
        put_byte(s2, s2.gzhead.os & 255);
        if (s2.gzhead.extra && s2.gzhead.extra.length) {
          put_byte(s2, s2.gzhead.extra.length & 255);
          put_byte(s2, s2.gzhead.extra.length >> 8 & 255);
        }
        if (s2.gzhead.hcrc) {
          strm.adler = crc32_1(strm.adler, s2.pending_buf, s2.pending, 0);
        }
        s2.gzindex = 0;
        s2.status = EXTRA_STATE;
      }
    }
    if (s2.status === EXTRA_STATE) {
      if (s2.gzhead.extra) {
        let beg = s2.pending;
        let left = (s2.gzhead.extra.length & 65535) - s2.gzindex;
        while (s2.pending + left > s2.pending_buf_size) {
          let copy = s2.pending_buf_size - s2.pending;
          s2.pending_buf.set(s2.gzhead.extra.subarray(s2.gzindex, s2.gzindex + copy), s2.pending);
          s2.pending = s2.pending_buf_size;
          if (s2.gzhead.hcrc && s2.pending > beg) {
            strm.adler = crc32_1(strm.adler, s2.pending_buf, s2.pending - beg, beg);
          }
          s2.gzindex += copy;
          flush_pending(strm);
          if (s2.pending !== 0) {
            s2.last_flush = -1;
            return Z_OK$3;
          }
          beg = 0;
          left -= copy;
        }
        let gzhead_extra = new Uint8Array(s2.gzhead.extra);
        s2.pending_buf.set(gzhead_extra.subarray(s2.gzindex, s2.gzindex + left), s2.pending);
        s2.pending += left;
        if (s2.gzhead.hcrc && s2.pending > beg) {
          strm.adler = crc32_1(strm.adler, s2.pending_buf, s2.pending - beg, beg);
        }
        s2.gzindex = 0;
      }
      s2.status = NAME_STATE;
    }
    if (s2.status === NAME_STATE) {
      if (s2.gzhead.name) {
        let beg = s2.pending;
        let val;
        do {
          if (s2.pending === s2.pending_buf_size) {
            if (s2.gzhead.hcrc && s2.pending > beg) {
              strm.adler = crc32_1(strm.adler, s2.pending_buf, s2.pending - beg, beg);
            }
            flush_pending(strm);
            if (s2.pending !== 0) {
              s2.last_flush = -1;
              return Z_OK$3;
            }
            beg = 0;
          }
          if (s2.gzindex < s2.gzhead.name.length) {
            val = s2.gzhead.name.charCodeAt(s2.gzindex++) & 255;
          } else {
            val = 0;
          }
          put_byte(s2, val);
        } while (val !== 0);
        if (s2.gzhead.hcrc && s2.pending > beg) {
          strm.adler = crc32_1(strm.adler, s2.pending_buf, s2.pending - beg, beg);
        }
        s2.gzindex = 0;
      }
      s2.status = COMMENT_STATE;
    }
    if (s2.status === COMMENT_STATE) {
      if (s2.gzhead.comment) {
        let beg = s2.pending;
        let val;
        do {
          if (s2.pending === s2.pending_buf_size) {
            if (s2.gzhead.hcrc && s2.pending > beg) {
              strm.adler = crc32_1(strm.adler, s2.pending_buf, s2.pending - beg, beg);
            }
            flush_pending(strm);
            if (s2.pending !== 0) {
              s2.last_flush = -1;
              return Z_OK$3;
            }
            beg = 0;
          }
          if (s2.gzindex < s2.gzhead.comment.length) {
            val = s2.gzhead.comment.charCodeAt(s2.gzindex++) & 255;
          } else {
            val = 0;
          }
          put_byte(s2, val);
        } while (val !== 0);
        if (s2.gzhead.hcrc && s2.pending > beg) {
          strm.adler = crc32_1(strm.adler, s2.pending_buf, s2.pending - beg, beg);
        }
      }
      s2.status = HCRC_STATE;
    }
    if (s2.status === HCRC_STATE) {
      if (s2.gzhead.hcrc) {
        if (s2.pending + 2 > s2.pending_buf_size) {
          flush_pending(strm);
          if (s2.pending !== 0) {
            s2.last_flush = -1;
            return Z_OK$3;
          }
        }
        put_byte(s2, strm.adler & 255);
        put_byte(s2, strm.adler >> 8 & 255);
        strm.adler = 0;
      }
      s2.status = BUSY_STATE;
      flush_pending(strm);
      if (s2.pending !== 0) {
        s2.last_flush = -1;
        return Z_OK$3;
      }
    }
    if (strm.avail_in !== 0 || s2.lookahead !== 0 || flush !== Z_NO_FLUSH$2 && s2.status !== FINISH_STATE) {
      let bstate = s2.level === 0 ? deflate_stored(s2, flush) : s2.strategy === Z_HUFFMAN_ONLY ? deflate_huff(s2, flush) : s2.strategy === Z_RLE ? deflate_rle(s2, flush) : configuration_table[s2.level].func(s2, flush);
      if (bstate === BS_FINISH_STARTED || bstate === BS_FINISH_DONE) {
        s2.status = FINISH_STATE;
      }
      if (bstate === BS_NEED_MORE || bstate === BS_FINISH_STARTED) {
        if (strm.avail_out === 0) {
          s2.last_flush = -1;
        }
        return Z_OK$3;
      }
      if (bstate === BS_BLOCK_DONE) {
        if (flush === Z_PARTIAL_FLUSH) {
          _tr_align(s2);
        } else if (flush !== Z_BLOCK$1) {
          _tr_stored_block(s2, 0, 0, false);
          if (flush === Z_FULL_FLUSH$1) {
            zero(s2.head);
            if (s2.lookahead === 0) {
              s2.strstart = 0;
              s2.block_start = 0;
              s2.insert = 0;
            }
          }
        }
        flush_pending(strm);
        if (strm.avail_out === 0) {
          s2.last_flush = -1;
          return Z_OK$3;
        }
      }
    }
    if (flush !== Z_FINISH$3) {
      return Z_OK$3;
    }
    if (s2.wrap <= 0) {
      return Z_STREAM_END$3;
    }
    if (s2.wrap === 2) {
      put_byte(s2, strm.adler & 255);
      put_byte(s2, strm.adler >> 8 & 255);
      put_byte(s2, strm.adler >> 16 & 255);
      put_byte(s2, strm.adler >> 24 & 255);
      put_byte(s2, strm.total_in & 255);
      put_byte(s2, strm.total_in >> 8 & 255);
      put_byte(s2, strm.total_in >> 16 & 255);
      put_byte(s2, strm.total_in >> 24 & 255);
    } else {
      putShortMSB(s2, strm.adler >>> 16);
      putShortMSB(s2, strm.adler & 65535);
    }
    flush_pending(strm);
    if (s2.wrap > 0) {
      s2.wrap = -s2.wrap;
    }
    return s2.pending !== 0 ? Z_OK$3 : Z_STREAM_END$3;
  };
  const deflateEnd = (strm) => {
    if (deflateStateCheck(strm)) {
      return Z_STREAM_ERROR$2;
    }
    const status = strm.state.status;
    strm.state = null;
    return status === BUSY_STATE ? err(strm, Z_DATA_ERROR$2) : Z_OK$3;
  };
  const deflateSetDictionary = (strm, dictionary) => {
    let dictLength = dictionary.length;
    if (deflateStateCheck(strm)) {
      return Z_STREAM_ERROR$2;
    }
    const s2 = strm.state;
    const wrap = s2.wrap;
    if (wrap === 2 || wrap === 1 && s2.status !== INIT_STATE || s2.lookahead) {
      return Z_STREAM_ERROR$2;
    }
    if (wrap === 1) {
      strm.adler = adler32_1(strm.adler, dictionary, dictLength, 0);
    }
    s2.wrap = 0;
    if (dictLength >= s2.w_size) {
      if (wrap === 0) {
        zero(s2.head);
        s2.strstart = 0;
        s2.block_start = 0;
        s2.insert = 0;
      }
      let tmpDict = new Uint8Array(s2.w_size);
      tmpDict.set(dictionary.subarray(dictLength - s2.w_size, dictLength), 0);
      dictionary = tmpDict;
      dictLength = s2.w_size;
    }
    const avail = strm.avail_in;
    const next = strm.next_in;
    const input2 = strm.input;
    strm.avail_in = dictLength;
    strm.next_in = 0;
    strm.input = dictionary;
    fill_window(s2);
    while (s2.lookahead >= MIN_MATCH) {
      let str = s2.strstart;
      let n2 = s2.lookahead - (MIN_MATCH - 1);
      do {
        s2.ins_h = HASH(s2, s2.ins_h, s2.window[str + MIN_MATCH - 1]);
        s2.prev[str & s2.w_mask] = s2.head[s2.ins_h];
        s2.head[s2.ins_h] = str;
        str++;
      } while (--n2);
      s2.strstart = str;
      s2.lookahead = MIN_MATCH - 1;
      fill_window(s2);
    }
    s2.strstart += s2.lookahead;
    s2.block_start = s2.strstart;
    s2.insert = s2.lookahead;
    s2.lookahead = 0;
    s2.match_length = s2.prev_length = MIN_MATCH - 1;
    s2.match_available = 0;
    strm.next_in = next;
    strm.input = input2;
    strm.avail_in = avail;
    s2.wrap = wrap;
    return Z_OK$3;
  };
  var deflateInit_1 = deflateInit;
  var deflateInit2_1 = deflateInit2;
  var deflateReset_1 = deflateReset;
  var deflateResetKeep_1 = deflateResetKeep;
  var deflateSetHeader_1 = deflateSetHeader;
  var deflate_2$1 = deflate$2;
  var deflateEnd_1 = deflateEnd;
  var deflateSetDictionary_1 = deflateSetDictionary;
  var deflateInfo = "pako deflate (from Nodeca project)";
  var deflate_1$2 = {
    deflateInit: deflateInit_1,
    deflateInit2: deflateInit2_1,
    deflateReset: deflateReset_1,
    deflateResetKeep: deflateResetKeep_1,
    deflateSetHeader: deflateSetHeader_1,
    deflate: deflate_2$1,
    deflateEnd: deflateEnd_1,
    deflateSetDictionary: deflateSetDictionary_1,
    deflateInfo
  };
  const _has = (obj, key) => {
    return Object.prototype.hasOwnProperty.call(obj, key);
  };
  var assign = function(obj) {
    const sources2 = Array.prototype.slice.call(arguments, 1);
    while (sources2.length) {
      const source = sources2.shift();
      if (!source) {
        continue;
      }
      if (typeof source !== "object") {
        throw new TypeError(source + "must be non-object");
      }
      for (const p2 in source) {
        if (_has(source, p2)) {
          obj[p2] = source[p2];
        }
      }
    }
    return obj;
  };
  var flattenChunks = (chunks) => {
    let len = 0;
    for (let i2 = 0, l2 = chunks.length; i2 < l2; i2++) {
      len += chunks[i2].length;
    }
    const result2 = new Uint8Array(len);
    for (let i2 = 0, pos = 0, l2 = chunks.length; i2 < l2; i2++) {
      let chunk = chunks[i2];
      result2.set(chunk, pos);
      pos += chunk.length;
    }
    return result2;
  };
  var common = {
    assign,
    flattenChunks
  };
  let STR_APPLY_UIA_OK = true;
  try {
    String.fromCharCode.apply(null, new Uint8Array(1));
  } catch (__) {
    STR_APPLY_UIA_OK = false;
  }
  const _utf8len = new Uint8Array(256);
  for (let q2 = 0; q2 < 256; q2++) {
    _utf8len[q2] = q2 >= 252 ? 6 : q2 >= 248 ? 5 : q2 >= 240 ? 4 : q2 >= 224 ? 3 : q2 >= 192 ? 2 : 1;
  }
  _utf8len[254] = _utf8len[254] = 1;
  var string2buf = (str) => {
    if (typeof TextEncoder === "function" && TextEncoder.prototype.encode) {
      return new TextEncoder().encode(str);
    }
    let buf, c2, c22, m_pos, i2, str_len = str.length, buf_len = 0;
    for (m_pos = 0; m_pos < str_len; m_pos++) {
      c2 = str.charCodeAt(m_pos);
      if ((c2 & 64512) === 55296 && m_pos + 1 < str_len) {
        c22 = str.charCodeAt(m_pos + 1);
        if ((c22 & 64512) === 56320) {
          c2 = 65536 + (c2 - 55296 << 10) + (c22 - 56320);
          m_pos++;
        }
      }
      buf_len += c2 < 128 ? 1 : c2 < 2048 ? 2 : c2 < 65536 ? 3 : 4;
    }
    buf = new Uint8Array(buf_len);
    for (i2 = 0, m_pos = 0; i2 < buf_len; m_pos++) {
      c2 = str.charCodeAt(m_pos);
      if ((c2 & 64512) === 55296 && m_pos + 1 < str_len) {
        c22 = str.charCodeAt(m_pos + 1);
        if ((c22 & 64512) === 56320) {
          c2 = 65536 + (c2 - 55296 << 10) + (c22 - 56320);
          m_pos++;
        }
      }
      if (c2 < 128) {
        buf[i2++] = c2;
      } else if (c2 < 2048) {
        buf[i2++] = 192 | c2 >>> 6;
        buf[i2++] = 128 | c2 & 63;
      } else if (c2 < 65536) {
        buf[i2++] = 224 | c2 >>> 12;
        buf[i2++] = 128 | c2 >>> 6 & 63;
        buf[i2++] = 128 | c2 & 63;
      } else {
        buf[i2++] = 240 | c2 >>> 18;
        buf[i2++] = 128 | c2 >>> 12 & 63;
        buf[i2++] = 128 | c2 >>> 6 & 63;
        buf[i2++] = 128 | c2 & 63;
      }
    }
    return buf;
  };
  const buf2binstring = (buf, len) => {
    if (len < 65534) {
      if (buf.subarray && STR_APPLY_UIA_OK) {
        return String.fromCharCode.apply(null, buf.length === len ? buf : buf.subarray(0, len));
      }
    }
    let result2 = "";
    for (let i2 = 0; i2 < len; i2++) {
      result2 += String.fromCharCode(buf[i2]);
    }
    return result2;
  };
  var buf2string = (buf, max) => {
    const len = max || buf.length;
    if (typeof TextDecoder === "function" && TextDecoder.prototype.decode) {
      return new TextDecoder().decode(buf.subarray(0, max));
    }
    let i2, out;
    const utf16buf = new Array(len * 2);
    for (out = 0, i2 = 0; i2 < len; ) {
      let c2 = buf[i2++];
      if (c2 < 128) {
        utf16buf[out++] = c2;
        continue;
      }
      let c_len = _utf8len[c2];
      if (c_len > 4) {
        utf16buf[out++] = 65533;
        i2 += c_len - 1;
        continue;
      }
      c2 &= c_len === 2 ? 31 : c_len === 3 ? 15 : 7;
      while (c_len > 1 && i2 < len) {
        c2 = c2 << 6 | buf[i2++] & 63;
        c_len--;
      }
      if (c_len > 1) {
        utf16buf[out++] = 65533;
        continue;
      }
      if (c2 < 65536) {
        utf16buf[out++] = c2;
      } else {
        c2 -= 65536;
        utf16buf[out++] = 55296 | c2 >> 10 & 1023;
        utf16buf[out++] = 56320 | c2 & 1023;
      }
    }
    return buf2binstring(utf16buf, out);
  };
  var utf8border = (buf, max) => {
    max = max || buf.length;
    if (max > buf.length) {
      max = buf.length;
    }
    let pos = max - 1;
    while (pos >= 0 && (buf[pos] & 192) === 128) {
      pos--;
    }
    if (pos < 0) {
      return max;
    }
    if (pos === 0) {
      return max;
    }
    return pos + _utf8len[buf[pos]] > max ? pos : max;
  };
  var strings = {
    string2buf,
    buf2string,
    utf8border
  };
  function ZStream() {
    this.input = null;
    this.next_in = 0;
    this.avail_in = 0;
    this.total_in = 0;
    this.output = null;
    this.next_out = 0;
    this.avail_out = 0;
    this.total_out = 0;
    this.msg = "";
    this.state = null;
    this.data_type = 2;
    this.adler = 0;
  }
  var zstream = ZStream;
  const toString$1 = Object.prototype.toString;
  const {
    Z_NO_FLUSH: Z_NO_FLUSH$1,
    Z_SYNC_FLUSH,
    Z_FULL_FLUSH,
    Z_FINISH: Z_FINISH$2,
    Z_OK: Z_OK$2,
    Z_STREAM_END: Z_STREAM_END$2,
    Z_DEFAULT_COMPRESSION,
    Z_DEFAULT_STRATEGY,
    Z_DEFLATED: Z_DEFLATED$1
  } = constants$2;
  function Deflate$1(options2) {
    this.options = common.assign({
      level: Z_DEFAULT_COMPRESSION,
      method: Z_DEFLATED$1,
      chunkSize: 16384,
      windowBits: 15,
      memLevel: 8,
      strategy: Z_DEFAULT_STRATEGY
    }, options2 || {});
    let opt = this.options;
    if (opt.raw && opt.windowBits > 0) {
      opt.windowBits = -opt.windowBits;
    } else if (opt.gzip && opt.windowBits > 0 && opt.windowBits < 16) {
      opt.windowBits += 16;
    }
    this.err = 0;
    this.msg = "";
    this.ended = false;
    this.chunks = [];
    this.strm = new zstream();
    this.strm.avail_out = 0;
    let status = deflate_1$2.deflateInit2(
      this.strm,
      opt.level,
      opt.method,
      opt.windowBits,
      opt.memLevel,
      opt.strategy
    );
    if (status !== Z_OK$2) {
      throw new Error(messages[status]);
    }
    if (opt.header) {
      deflate_1$2.deflateSetHeader(this.strm, opt.header);
    }
    if (opt.dictionary) {
      let dict;
      if (typeof opt.dictionary === "string") {
        dict = strings.string2buf(opt.dictionary);
      } else if (toString$1.call(opt.dictionary) === "[object ArrayBuffer]") {
        dict = new Uint8Array(opt.dictionary);
      } else {
        dict = opt.dictionary;
      }
      status = deflate_1$2.deflateSetDictionary(this.strm, dict);
      if (status !== Z_OK$2) {
        throw new Error(messages[status]);
      }
      this._dict_set = true;
    }
  }
  Deflate$1.prototype.push = function(data, flush_mode) {
    const strm = this.strm;
    const chunkSize = this.options.chunkSize;
    let status, _flush_mode;
    if (this.ended) {
      return false;
    }
    if (flush_mode === ~~flush_mode) _flush_mode = flush_mode;
    else _flush_mode = flush_mode === true ? Z_FINISH$2 : Z_NO_FLUSH$1;
    if (typeof data === "string") {
      strm.input = strings.string2buf(data);
    } else if (toString$1.call(data) === "[object ArrayBuffer]") {
      strm.input = new Uint8Array(data);
    } else {
      strm.input = data;
    }
    strm.next_in = 0;
    strm.avail_in = strm.input.length;
    for (; ; ) {
      if (strm.avail_out === 0) {
        strm.output = new Uint8Array(chunkSize);
        strm.next_out = 0;
        strm.avail_out = chunkSize;
      }
      if ((_flush_mode === Z_SYNC_FLUSH || _flush_mode === Z_FULL_FLUSH) && strm.avail_out <= 6) {
        this.onData(strm.output.subarray(0, strm.next_out));
        strm.avail_out = 0;
        continue;
      }
      status = deflate_1$2.deflate(strm, _flush_mode);
      if (status === Z_STREAM_END$2) {
        if (strm.next_out > 0) {
          this.onData(strm.output.subarray(0, strm.next_out));
        }
        status = deflate_1$2.deflateEnd(this.strm);
        this.onEnd(status);
        this.ended = true;
        return status === Z_OK$2;
      }
      if (strm.avail_out === 0) {
        this.onData(strm.output);
        continue;
      }
      if (_flush_mode > 0 && strm.next_out > 0) {
        this.onData(strm.output.subarray(0, strm.next_out));
        strm.avail_out = 0;
        continue;
      }
      if (strm.avail_in === 0) break;
    }
    return true;
  };
  Deflate$1.prototype.onData = function(chunk) {
    this.chunks.push(chunk);
  };
  Deflate$1.prototype.onEnd = function(status) {
    if (status === Z_OK$2) {
      this.result = common.flattenChunks(this.chunks);
    }
    this.chunks = [];
    this.err = status;
    this.msg = this.strm.msg;
  };
  function deflate$1(input2, options2) {
    const deflator = new Deflate$1(options2);
    deflator.push(input2, true);
    if (deflator.err) {
      throw deflator.msg || messages[deflator.err];
    }
    return deflator.result;
  }
  function deflateRaw$1(input2, options2) {
    options2 = options2 || {};
    options2.raw = true;
    return deflate$1(input2, options2);
  }
  function gzip$1(input2, options2) {
    options2 = options2 || {};
    options2.gzip = true;
    return deflate$1(input2, options2);
  }
  var Deflate_1$1 = Deflate$1;
  var deflate_2 = deflate$1;
  var deflateRaw_1$1 = deflateRaw$1;
  var gzip_1$1 = gzip$1;
  var constants$1 = constants$2;
  var deflate_1$1 = {
    Deflate: Deflate_1$1,
    deflate: deflate_2,
    deflateRaw: deflateRaw_1$1,
    gzip: gzip_1$1,
    constants: constants$1
  };
  const BAD$1 = 16209;
  const TYPE$1 = 16191;
  var inffast = function inflate_fast(strm, start) {
    let _in;
    let last;
    let _out;
    let beg;
    let end;
    let dmax;
    let wsize;
    let whave;
    let wnext;
    let s_window;
    let hold;
    let bits;
    let lcode;
    let dcode;
    let lmask;
    let dmask;
    let here;
    let op;
    let len;
    let dist;
    let from;
    let from_source;
    let input2, output;
    const state = strm.state;
    _in = strm.next_in;
    input2 = strm.input;
    last = _in + (strm.avail_in - 5);
    _out = strm.next_out;
    output = strm.output;
    beg = _out - (start - strm.avail_out);
    end = _out + (strm.avail_out - 257);
    dmax = state.dmax;
    wsize = state.wsize;
    whave = state.whave;
    wnext = state.wnext;
    s_window = state.window;
    hold = state.hold;
    bits = state.bits;
    lcode = state.lencode;
    dcode = state.distcode;
    lmask = (1 << state.lenbits) - 1;
    dmask = (1 << state.distbits) - 1;
    top:
      do {
        if (bits < 15) {
          hold += input2[_in++] << bits;
          bits += 8;
          hold += input2[_in++] << bits;
          bits += 8;
        }
        here = lcode[hold & lmask];
        dolen:
          for (; ; ) {
            op = here >>> 24;
            hold >>>= op;
            bits -= op;
            op = here >>> 16 & 255;
            if (op === 0) {
              output[_out++] = here & 65535;
            } else if (op & 16) {
              len = here & 65535;
              op &= 15;
              if (op) {
                if (bits < op) {
                  hold += input2[_in++] << bits;
                  bits += 8;
                }
                len += hold & (1 << op) - 1;
                hold >>>= op;
                bits -= op;
              }
              if (bits < 15) {
                hold += input2[_in++] << bits;
                bits += 8;
                hold += input2[_in++] << bits;
                bits += 8;
              }
              here = dcode[hold & dmask];
              dodist:
                for (; ; ) {
                  op = here >>> 24;
                  hold >>>= op;
                  bits -= op;
                  op = here >>> 16 & 255;
                  if (op & 16) {
                    dist = here & 65535;
                    op &= 15;
                    if (bits < op) {
                      hold += input2[_in++] << bits;
                      bits += 8;
                      if (bits < op) {
                        hold += input2[_in++] << bits;
                        bits += 8;
                      }
                    }
                    dist += hold & (1 << op) - 1;
                    if (dist > dmax) {
                      strm.msg = "invalid distance too far back";
                      state.mode = BAD$1;
                      break top;
                    }
                    hold >>>= op;
                    bits -= op;
                    op = _out - beg;
                    if (dist > op) {
                      op = dist - op;
                      if (op > whave) {
                        if (state.sane) {
                          strm.msg = "invalid distance too far back";
                          state.mode = BAD$1;
                          break top;
                        }
                      }
                      from = 0;
                      from_source = s_window;
                      if (wnext === 0) {
                        from += wsize - op;
                        if (op < len) {
                          len -= op;
                          do {
                            output[_out++] = s_window[from++];
                          } while (--op);
                          from = _out - dist;
                          from_source = output;
                        }
                      } else if (wnext < op) {
                        from += wsize + wnext - op;
                        op -= wnext;
                        if (op < len) {
                          len -= op;
                          do {
                            output[_out++] = s_window[from++];
                          } while (--op);
                          from = 0;
                          if (wnext < len) {
                            op = wnext;
                            len -= op;
                            do {
                              output[_out++] = s_window[from++];
                            } while (--op);
                            from = _out - dist;
                            from_source = output;
                          }
                        }
                      } else {
                        from += wnext - op;
                        if (op < len) {
                          len -= op;
                          do {
                            output[_out++] = s_window[from++];
                          } while (--op);
                          from = _out - dist;
                          from_source = output;
                        }
                      }
                      while (len > 2) {
                        output[_out++] = from_source[from++];
                        output[_out++] = from_source[from++];
                        output[_out++] = from_source[from++];
                        len -= 3;
                      }
                      if (len) {
                        output[_out++] = from_source[from++];
                        if (len > 1) {
                          output[_out++] = from_source[from++];
                        }
                      }
                    } else {
                      from = _out - dist;
                      do {
                        output[_out++] = output[from++];
                        output[_out++] = output[from++];
                        output[_out++] = output[from++];
                        len -= 3;
                      } while (len > 2);
                      if (len) {
                        output[_out++] = output[from++];
                        if (len > 1) {
                          output[_out++] = output[from++];
                        }
                      }
                    }
                  } else if ((op & 64) === 0) {
                    here = dcode[(here & 65535) + (hold & (1 << op) - 1)];
                    continue dodist;
                  } else {
                    strm.msg = "invalid distance code";
                    state.mode = BAD$1;
                    break top;
                  }
                  break;
                }
            } else if ((op & 64) === 0) {
              here = lcode[(here & 65535) + (hold & (1 << op) - 1)];
              continue dolen;
            } else if (op & 32) {
              state.mode = TYPE$1;
              break top;
            } else {
              strm.msg = "invalid literal/length code";
              state.mode = BAD$1;
              break top;
            }
            break;
          }
      } while (_in < last && _out < end);
    len = bits >> 3;
    _in -= len;
    bits -= len << 3;
    hold &= (1 << bits) - 1;
    strm.next_in = _in;
    strm.next_out = _out;
    strm.avail_in = _in < last ? 5 + (last - _in) : 5 - (_in - last);
    strm.avail_out = _out < end ? 257 + (end - _out) : 257 - (_out - end);
    state.hold = hold;
    state.bits = bits;
    return;
  };
  const MAXBITS = 15;
  const ENOUGH_LENS$1 = 852;
  const ENOUGH_DISTS$1 = 592;
  const CODES$1 = 0;
  const LENS$1 = 1;
  const DISTS$1 = 2;
  const lbase = new Uint16Array([
    /* Length codes 257..285 base */
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    13,
    15,
    17,
    19,
    23,
    27,
    31,
    35,
    43,
    51,
    59,
    67,
    83,
    99,
    115,
    131,
    163,
    195,
    227,
    258,
    0,
    0
  ]);
  const lext = new Uint8Array([
    /* Length codes 257..285 extra */
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    17,
    17,
    17,
    17,
    18,
    18,
    18,
    18,
    19,
    19,
    19,
    19,
    20,
    20,
    20,
    20,
    21,
    21,
    21,
    21,
    16,
    72,
    78
  ]);
  const dbase = new Uint16Array([
    /* Distance codes 0..29 base */
    1,
    2,
    3,
    4,
    5,
    7,
    9,
    13,
    17,
    25,
    33,
    49,
    65,
    97,
    129,
    193,
    257,
    385,
    513,
    769,
    1025,
    1537,
    2049,
    3073,
    4097,
    6145,
    8193,
    12289,
    16385,
    24577,
    0,
    0
  ]);
  const dext = new Uint8Array([
    /* Distance codes 0..29 extra */
    16,
    16,
    16,
    16,
    17,
    17,
    18,
    18,
    19,
    19,
    20,
    20,
    21,
    21,
    22,
    22,
    23,
    23,
    24,
    24,
    25,
    25,
    26,
    26,
    27,
    27,
    28,
    28,
    29,
    29,
    64,
    64
  ]);
  const inflate_table = (type, lens, lens_index, codes, table, table_index, work, opts) => {
    const bits = opts.bits;
    let len = 0;
    let sym = 0;
    let min = 0, max = 0;
    let root2 = 0;
    let curr = 0;
    let drop = 0;
    let left = 0;
    let used = 0;
    let huff = 0;
    let incr;
    let fill;
    let low;
    let mask;
    let next;
    let base = null;
    let match;
    const count = new Uint16Array(MAXBITS + 1);
    const offs = new Uint16Array(MAXBITS + 1);
    let extra = null;
    let here_bits, here_op, here_val;
    for (len = 0; len <= MAXBITS; len++) {
      count[len] = 0;
    }
    for (sym = 0; sym < codes; sym++) {
      count[lens[lens_index + sym]]++;
    }
    root2 = bits;
    for (max = MAXBITS; max >= 1; max--) {
      if (count[max] !== 0) {
        break;
      }
    }
    if (root2 > max) {
      root2 = max;
    }
    if (max === 0) {
      table[table_index++] = 1 << 24 | 64 << 16 | 0;
      table[table_index++] = 1 << 24 | 64 << 16 | 0;
      opts.bits = 1;
      return 0;
    }
    for (min = 1; min < max; min++) {
      if (count[min] !== 0) {
        break;
      }
    }
    if (root2 < min) {
      root2 = min;
    }
    left = 1;
    for (len = 1; len <= MAXBITS; len++) {
      left <<= 1;
      left -= count[len];
      if (left < 0) {
        return -1;
      }
    }
    if (left > 0 && (type === CODES$1 || max !== 1)) {
      return -1;
    }
    offs[1] = 0;
    for (len = 1; len < MAXBITS; len++) {
      offs[len + 1] = offs[len] + count[len];
    }
    for (sym = 0; sym < codes; sym++) {
      if (lens[lens_index + sym] !== 0) {
        work[offs[lens[lens_index + sym]]++] = sym;
      }
    }
    if (type === CODES$1) {
      base = extra = work;
      match = 20;
    } else if (type === LENS$1) {
      base = lbase;
      extra = lext;
      match = 257;
    } else {
      base = dbase;
      extra = dext;
      match = 0;
    }
    huff = 0;
    sym = 0;
    len = min;
    next = table_index;
    curr = root2;
    drop = 0;
    low = -1;
    used = 1 << root2;
    mask = used - 1;
    if (type === LENS$1 && used > ENOUGH_LENS$1 || type === DISTS$1 && used > ENOUGH_DISTS$1) {
      return 1;
    }
    for (; ; ) {
      here_bits = len - drop;
      if (work[sym] + 1 < match) {
        here_op = 0;
        here_val = work[sym];
      } else if (work[sym] >= match) {
        here_op = extra[work[sym] - match];
        here_val = base[work[sym] - match];
      } else {
        here_op = 32 + 64;
        here_val = 0;
      }
      incr = 1 << len - drop;
      fill = 1 << curr;
      min = fill;
      do {
        fill -= incr;
        table[next + (huff >> drop) + fill] = here_bits << 24 | here_op << 16 | here_val | 0;
      } while (fill !== 0);
      incr = 1 << len - 1;
      while (huff & incr) {
        incr >>= 1;
      }
      if (incr !== 0) {
        huff &= incr - 1;
        huff += incr;
      } else {
        huff = 0;
      }
      sym++;
      if (--count[len] === 0) {
        if (len === max) {
          break;
        }
        len = lens[lens_index + work[sym]];
      }
      if (len > root2 && (huff & mask) !== low) {
        if (drop === 0) {
          drop = root2;
        }
        next += min;
        curr = len - drop;
        left = 1 << curr;
        while (curr + drop < max) {
          left -= count[curr + drop];
          if (left <= 0) {
            break;
          }
          curr++;
          left <<= 1;
        }
        used += 1 << curr;
        if (type === LENS$1 && used > ENOUGH_LENS$1 || type === DISTS$1 && used > ENOUGH_DISTS$1) {
          return 1;
        }
        low = huff & mask;
        table[low] = root2 << 24 | curr << 16 | next - table_index | 0;
      }
    }
    if (huff !== 0) {
      table[next + huff] = len - drop << 24 | 64 << 16 | 0;
    }
    opts.bits = root2;
    return 0;
  };
  var inftrees = inflate_table;
  const CODES = 0;
  const LENS = 1;
  const DISTS = 2;
  const {
    Z_FINISH: Z_FINISH$1,
    Z_BLOCK,
    Z_TREES,
    Z_OK: Z_OK$1,
    Z_STREAM_END: Z_STREAM_END$1,
    Z_NEED_DICT: Z_NEED_DICT$1,
    Z_STREAM_ERROR: Z_STREAM_ERROR$1,
    Z_DATA_ERROR: Z_DATA_ERROR$1,
    Z_MEM_ERROR: Z_MEM_ERROR$1,
    Z_BUF_ERROR,
    Z_DEFLATED
  } = constants$2;
  const HEAD = 16180;
  const FLAGS = 16181;
  const TIME = 16182;
  const OS = 16183;
  const EXLEN = 16184;
  const EXTRA = 16185;
  const NAME = 16186;
  const COMMENT = 16187;
  const HCRC = 16188;
  const DICTID = 16189;
  const DICT = 16190;
  const TYPE = 16191;
  const TYPEDO = 16192;
  const STORED = 16193;
  const COPY_ = 16194;
  const COPY = 16195;
  const TABLE = 16196;
  const LENLENS = 16197;
  const CODELENS = 16198;
  const LEN_ = 16199;
  const LEN = 16200;
  const LENEXT = 16201;
  const DIST = 16202;
  const DISTEXT = 16203;
  const MATCH = 16204;
  const LIT = 16205;
  const CHECK = 16206;
  const LENGTH = 16207;
  const DONE = 16208;
  const BAD = 16209;
  const MEM = 16210;
  const SYNC = 16211;
  const ENOUGH_LENS = 852;
  const ENOUGH_DISTS = 592;
  const MAX_WBITS = 15;
  const DEF_WBITS = MAX_WBITS;
  const zswap32 = (q2) => {
    return (q2 >>> 24 & 255) + (q2 >>> 8 & 65280) + ((q2 & 65280) << 8) + ((q2 & 255) << 24);
  };
  function InflateState() {
    this.strm = null;
    this.mode = 0;
    this.last = false;
    this.wrap = 0;
    this.havedict = false;
    this.flags = 0;
    this.dmax = 0;
    this.check = 0;
    this.total = 0;
    this.head = null;
    this.wbits = 0;
    this.wsize = 0;
    this.whave = 0;
    this.wnext = 0;
    this.window = null;
    this.hold = 0;
    this.bits = 0;
    this.length = 0;
    this.offset = 0;
    this.extra = 0;
    this.lencode = null;
    this.distcode = null;
    this.lenbits = 0;
    this.distbits = 0;
    this.ncode = 0;
    this.nlen = 0;
    this.ndist = 0;
    this.have = 0;
    this.next = null;
    this.lens = new Uint16Array(320);
    this.work = new Uint16Array(288);
    this.lendyn = null;
    this.distdyn = null;
    this.sane = 0;
    this.back = 0;
    this.was = 0;
  }
  const inflateStateCheck = (strm) => {
    if (!strm) {
      return 1;
    }
    const state = strm.state;
    if (!state || state.strm !== strm || state.mode < HEAD || state.mode > SYNC) {
      return 1;
    }
    return 0;
  };
  const inflateResetKeep = (strm) => {
    if (inflateStateCheck(strm)) {
      return Z_STREAM_ERROR$1;
    }
    const state = strm.state;
    strm.total_in = strm.total_out = state.total = 0;
    strm.msg = "";
    if (state.wrap) {
      strm.adler = state.wrap & 1;
    }
    state.mode = HEAD;
    state.last = 0;
    state.havedict = 0;
    state.flags = -1;
    state.dmax = 32768;
    state.head = null;
    state.hold = 0;
    state.bits = 0;
    state.lencode = state.lendyn = new Int32Array(ENOUGH_LENS);
    state.distcode = state.distdyn = new Int32Array(ENOUGH_DISTS);
    state.sane = 1;
    state.back = -1;
    return Z_OK$1;
  };
  const inflateReset = (strm) => {
    if (inflateStateCheck(strm)) {
      return Z_STREAM_ERROR$1;
    }
    const state = strm.state;
    state.wsize = 0;
    state.whave = 0;
    state.wnext = 0;
    return inflateResetKeep(strm);
  };
  const inflateReset2 = (strm, windowBits) => {
    let wrap;
    if (inflateStateCheck(strm)) {
      return Z_STREAM_ERROR$1;
    }
    const state = strm.state;
    if (windowBits < 0) {
      wrap = 0;
      windowBits = -windowBits;
    } else {
      wrap = (windowBits >> 4) + 5;
      if (windowBits < 48) {
        windowBits &= 15;
      }
    }
    if (windowBits && (windowBits < 8 || windowBits > 15)) {
      return Z_STREAM_ERROR$1;
    }
    if (state.window !== null && state.wbits !== windowBits) {
      state.window = null;
    }
    state.wrap = wrap;
    state.wbits = windowBits;
    return inflateReset(strm);
  };
  const inflateInit2 = (strm, windowBits) => {
    if (!strm) {
      return Z_STREAM_ERROR$1;
    }
    const state = new InflateState();
    strm.state = state;
    state.strm = strm;
    state.window = null;
    state.mode = HEAD;
    const ret = inflateReset2(strm, windowBits);
    if (ret !== Z_OK$1) {
      strm.state = null;
    }
    return ret;
  };
  const inflateInit = (strm) => {
    return inflateInit2(strm, DEF_WBITS);
  };
  let virgin = true;
  let lenfix, distfix;
  const fixedtables = (state) => {
    if (virgin) {
      lenfix = new Int32Array(512);
      distfix = new Int32Array(32);
      let sym = 0;
      while (sym < 144) {
        state.lens[sym++] = 8;
      }
      while (sym < 256) {
        state.lens[sym++] = 9;
      }
      while (sym < 280) {
        state.lens[sym++] = 7;
      }
      while (sym < 288) {
        state.lens[sym++] = 8;
      }
      inftrees(LENS, state.lens, 0, 288, lenfix, 0, state.work, { bits: 9 });
      sym = 0;
      while (sym < 32) {
        state.lens[sym++] = 5;
      }
      inftrees(DISTS, state.lens, 0, 32, distfix, 0, state.work, { bits: 5 });
      virgin = false;
    }
    state.lencode = lenfix;
    state.lenbits = 9;
    state.distcode = distfix;
    state.distbits = 5;
  };
  const updatewindow = (strm, src, end, copy) => {
    let dist;
    const state = strm.state;
    if (state.window === null) {
      state.wsize = 1 << state.wbits;
      state.wnext = 0;
      state.whave = 0;
      state.window = new Uint8Array(state.wsize);
    }
    if (copy >= state.wsize) {
      state.window.set(src.subarray(end - state.wsize, end), 0);
      state.wnext = 0;
      state.whave = state.wsize;
    } else {
      dist = state.wsize - state.wnext;
      if (dist > copy) {
        dist = copy;
      }
      state.window.set(src.subarray(end - copy, end - copy + dist), state.wnext);
      copy -= dist;
      if (copy) {
        state.window.set(src.subarray(end - copy, end), 0);
        state.wnext = copy;
        state.whave = state.wsize;
      } else {
        state.wnext += dist;
        if (state.wnext === state.wsize) {
          state.wnext = 0;
        }
        if (state.whave < state.wsize) {
          state.whave += dist;
        }
      }
    }
    return 0;
  };
  const inflate$2 = (strm, flush) => {
    let state;
    let input2, output;
    let next;
    let put;
    let have, left;
    let hold;
    let bits;
    let _in, _out;
    let copy;
    let from;
    let from_source;
    let here = 0;
    let here_bits, here_op, here_val;
    let last_bits, last_op, last_val;
    let len;
    let ret;
    const hbuf = new Uint8Array(4);
    let opts;
    let n2;
    const order = (
      /* permutation of code lengths */
      new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15])
    );
    if (inflateStateCheck(strm) || !strm.output || !strm.input && strm.avail_in !== 0) {
      return Z_STREAM_ERROR$1;
    }
    state = strm.state;
    if (state.mode === TYPE) {
      state.mode = TYPEDO;
    }
    put = strm.next_out;
    output = strm.output;
    left = strm.avail_out;
    next = strm.next_in;
    input2 = strm.input;
    have = strm.avail_in;
    hold = state.hold;
    bits = state.bits;
    _in = have;
    _out = left;
    ret = Z_OK$1;
    inf_leave:
      for (; ; ) {
        switch (state.mode) {
          case HEAD:
            if (state.wrap === 0) {
              state.mode = TYPEDO;
              break;
            }
            while (bits < 16) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input2[next++] << bits;
              bits += 8;
            }
            if (state.wrap & 2 && hold === 35615) {
              if (state.wbits === 0) {
                state.wbits = 15;
              }
              state.check = 0;
              hbuf[0] = hold & 255;
              hbuf[1] = hold >>> 8 & 255;
              state.check = crc32_1(state.check, hbuf, 2, 0);
              hold = 0;
              bits = 0;
              state.mode = FLAGS;
              break;
            }
            if (state.head) {
              state.head.done = false;
            }
            if (!(state.wrap & 1) || /* check if zlib header allowed */
            (((hold & 255) << 8) + (hold >> 8)) % 31) {
              strm.msg = "incorrect header check";
              state.mode = BAD;
              break;
            }
            if ((hold & 15) !== Z_DEFLATED) {
              strm.msg = "unknown compression method";
              state.mode = BAD;
              break;
            }
            hold >>>= 4;
            bits -= 4;
            len = (hold & 15) + 8;
            if (state.wbits === 0) {
              state.wbits = len;
            }
            if (len > 15 || len > state.wbits) {
              strm.msg = "invalid window size";
              state.mode = BAD;
              break;
            }
            state.dmax = 1 << state.wbits;
            state.flags = 0;
            strm.adler = state.check = 1;
            state.mode = hold & 512 ? DICTID : TYPE;
            hold = 0;
            bits = 0;
            break;
          case FLAGS:
            while (bits < 16) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input2[next++] << bits;
              bits += 8;
            }
            state.flags = hold;
            if ((state.flags & 255) !== Z_DEFLATED) {
              strm.msg = "unknown compression method";
              state.mode = BAD;
              break;
            }
            if (state.flags & 57344) {
              strm.msg = "unknown header flags set";
              state.mode = BAD;
              break;
            }
            if (state.head) {
              state.head.text = hold >> 8 & 1;
            }
            if (state.flags & 512 && state.wrap & 4) {
              hbuf[0] = hold & 255;
              hbuf[1] = hold >>> 8 & 255;
              state.check = crc32_1(state.check, hbuf, 2, 0);
            }
            hold = 0;
            bits = 0;
            state.mode = TIME;
          case TIME:
            while (bits < 32) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input2[next++] << bits;
              bits += 8;
            }
            if (state.head) {
              state.head.time = hold;
            }
            if (state.flags & 512 && state.wrap & 4) {
              hbuf[0] = hold & 255;
              hbuf[1] = hold >>> 8 & 255;
              hbuf[2] = hold >>> 16 & 255;
              hbuf[3] = hold >>> 24 & 255;
              state.check = crc32_1(state.check, hbuf, 4, 0);
            }
            hold = 0;
            bits = 0;
            state.mode = OS;
          case OS:
            while (bits < 16) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input2[next++] << bits;
              bits += 8;
            }
            if (state.head) {
              state.head.xflags = hold & 255;
              state.head.os = hold >> 8;
            }
            if (state.flags & 512 && state.wrap & 4) {
              hbuf[0] = hold & 255;
              hbuf[1] = hold >>> 8 & 255;
              state.check = crc32_1(state.check, hbuf, 2, 0);
            }
            hold = 0;
            bits = 0;
            state.mode = EXLEN;
          case EXLEN:
            if (state.flags & 1024) {
              while (bits < 16) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input2[next++] << bits;
                bits += 8;
              }
              state.length = hold;
              if (state.head) {
                state.head.extra_len = hold;
              }
              if (state.flags & 512 && state.wrap & 4) {
                hbuf[0] = hold & 255;
                hbuf[1] = hold >>> 8 & 255;
                state.check = crc32_1(state.check, hbuf, 2, 0);
              }
              hold = 0;
              bits = 0;
            } else if (state.head) {
              state.head.extra = null;
            }
            state.mode = EXTRA;
          case EXTRA:
            if (state.flags & 1024) {
              copy = state.length;
              if (copy > have) {
                copy = have;
              }
              if (copy) {
                if (state.head) {
                  len = state.head.extra_len - state.length;
                  if (!state.head.extra) {
                    state.head.extra = new Uint8Array(state.head.extra_len);
                  }
                  state.head.extra.set(
                    input2.subarray(
                      next,
                      // extra field is limited to 65536 bytes
                      // - no need for additional size check
                      next + copy
                    ),
                    /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
                    len
                  );
                }
                if (state.flags & 512 && state.wrap & 4) {
                  state.check = crc32_1(state.check, input2, copy, next);
                }
                have -= copy;
                next += copy;
                state.length -= copy;
              }
              if (state.length) {
                break inf_leave;
              }
            }
            state.length = 0;
            state.mode = NAME;
          case NAME:
            if (state.flags & 2048) {
              if (have === 0) {
                break inf_leave;
              }
              copy = 0;
              do {
                len = input2[next + copy++];
                if (state.head && len && state.length < 65536) {
                  state.head.name += String.fromCharCode(len);
                }
              } while (len && copy < have);
              if (state.flags & 512 && state.wrap & 4) {
                state.check = crc32_1(state.check, input2, copy, next);
              }
              have -= copy;
              next += copy;
              if (len) {
                break inf_leave;
              }
            } else if (state.head) {
              state.head.name = null;
            }
            state.length = 0;
            state.mode = COMMENT;
          case COMMENT:
            if (state.flags & 4096) {
              if (have === 0) {
                break inf_leave;
              }
              copy = 0;
              do {
                len = input2[next + copy++];
                if (state.head && len && state.length < 65536) {
                  state.head.comment += String.fromCharCode(len);
                }
              } while (len && copy < have);
              if (state.flags & 512 && state.wrap & 4) {
                state.check = crc32_1(state.check, input2, copy, next);
              }
              have -= copy;
              next += copy;
              if (len) {
                break inf_leave;
              }
            } else if (state.head) {
              state.head.comment = null;
            }
            state.mode = HCRC;
          case HCRC:
            if (state.flags & 512) {
              while (bits < 16) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input2[next++] << bits;
                bits += 8;
              }
              if (state.wrap & 4 && hold !== (state.check & 65535)) {
                strm.msg = "header crc mismatch";
                state.mode = BAD;
                break;
              }
              hold = 0;
              bits = 0;
            }
            if (state.head) {
              state.head.hcrc = state.flags >> 9 & 1;
              state.head.done = true;
            }
            strm.adler = state.check = 0;
            state.mode = TYPE;
            break;
          case DICTID:
            while (bits < 32) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input2[next++] << bits;
              bits += 8;
            }
            strm.adler = state.check = zswap32(hold);
            hold = 0;
            bits = 0;
            state.mode = DICT;
          case DICT:
            if (state.havedict === 0) {
              strm.next_out = put;
              strm.avail_out = left;
              strm.next_in = next;
              strm.avail_in = have;
              state.hold = hold;
              state.bits = bits;
              return Z_NEED_DICT$1;
            }
            strm.adler = state.check = 1;
            state.mode = TYPE;
          case TYPE:
            if (flush === Z_BLOCK || flush === Z_TREES) {
              break inf_leave;
            }
          case TYPEDO:
            if (state.last) {
              hold >>>= bits & 7;
              bits -= bits & 7;
              state.mode = CHECK;
              break;
            }
            while (bits < 3) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input2[next++] << bits;
              bits += 8;
            }
            state.last = hold & 1;
            hold >>>= 1;
            bits -= 1;
            switch (hold & 3) {
              case 0:
                state.mode = STORED;
                break;
              case 1:
                fixedtables(state);
                state.mode = LEN_;
                if (flush === Z_TREES) {
                  hold >>>= 2;
                  bits -= 2;
                  break inf_leave;
                }
                break;
              case 2:
                state.mode = TABLE;
                break;
              case 3:
                strm.msg = "invalid block type";
                state.mode = BAD;
            }
            hold >>>= 2;
            bits -= 2;
            break;
          case STORED:
            hold >>>= bits & 7;
            bits -= bits & 7;
            while (bits < 32) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input2[next++] << bits;
              bits += 8;
            }
            if ((hold & 65535) !== (hold >>> 16 ^ 65535)) {
              strm.msg = "invalid stored block lengths";
              state.mode = BAD;
              break;
            }
            state.length = hold & 65535;
            hold = 0;
            bits = 0;
            state.mode = COPY_;
            if (flush === Z_TREES) {
              break inf_leave;
            }
          case COPY_:
            state.mode = COPY;
          case COPY:
            copy = state.length;
            if (copy) {
              if (copy > have) {
                copy = have;
              }
              if (copy > left) {
                copy = left;
              }
              if (copy === 0) {
                break inf_leave;
              }
              output.set(input2.subarray(next, next + copy), put);
              have -= copy;
              next += copy;
              left -= copy;
              put += copy;
              state.length -= copy;
              break;
            }
            state.mode = TYPE;
            break;
          case TABLE:
            while (bits < 14) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input2[next++] << bits;
              bits += 8;
            }
            state.nlen = (hold & 31) + 257;
            hold >>>= 5;
            bits -= 5;
            state.ndist = (hold & 31) + 1;
            hold >>>= 5;
            bits -= 5;
            state.ncode = (hold & 15) + 4;
            hold >>>= 4;
            bits -= 4;
            if (state.nlen > 286 || state.ndist > 30) {
              strm.msg = "too many length or distance symbols";
              state.mode = BAD;
              break;
            }
            state.have = 0;
            state.mode = LENLENS;
          case LENLENS:
            while (state.have < state.ncode) {
              while (bits < 3) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input2[next++] << bits;
                bits += 8;
              }
              state.lens[order[state.have++]] = hold & 7;
              hold >>>= 3;
              bits -= 3;
            }
            while (state.have < 19) {
              state.lens[order[state.have++]] = 0;
            }
            state.lencode = state.lendyn;
            state.lenbits = 7;
            opts = { bits: state.lenbits };
            ret = inftrees(CODES, state.lens, 0, 19, state.lencode, 0, state.work, opts);
            state.lenbits = opts.bits;
            if (ret) {
              strm.msg = "invalid code lengths set";
              state.mode = BAD;
              break;
            }
            state.have = 0;
            state.mode = CODELENS;
          case CODELENS:
            while (state.have < state.nlen + state.ndist) {
              for (; ; ) {
                here = state.lencode[hold & (1 << state.lenbits) - 1];
                here_bits = here >>> 24;
                here_op = here >>> 16 & 255;
                here_val = here & 65535;
                if (here_bits <= bits) {
                  break;
                }
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input2[next++] << bits;
                bits += 8;
              }
              if (here_val < 16) {
                hold >>>= here_bits;
                bits -= here_bits;
                state.lens[state.have++] = here_val;
              } else {
                if (here_val === 16) {
                  n2 = here_bits + 2;
                  while (bits < n2) {
                    if (have === 0) {
                      break inf_leave;
                    }
                    have--;
                    hold += input2[next++] << bits;
                    bits += 8;
                  }
                  hold >>>= here_bits;
                  bits -= here_bits;
                  if (state.have === 0) {
                    strm.msg = "invalid bit length repeat";
                    state.mode = BAD;
                    break;
                  }
                  len = state.lens[state.have - 1];
                  copy = 3 + (hold & 3);
                  hold >>>= 2;
                  bits -= 2;
                } else if (here_val === 17) {
                  n2 = here_bits + 3;
                  while (bits < n2) {
                    if (have === 0) {
                      break inf_leave;
                    }
                    have--;
                    hold += input2[next++] << bits;
                    bits += 8;
                  }
                  hold >>>= here_bits;
                  bits -= here_bits;
                  len = 0;
                  copy = 3 + (hold & 7);
                  hold >>>= 3;
                  bits -= 3;
                } else {
                  n2 = here_bits + 7;
                  while (bits < n2) {
                    if (have === 0) {
                      break inf_leave;
                    }
                    have--;
                    hold += input2[next++] << bits;
                    bits += 8;
                  }
                  hold >>>= here_bits;
                  bits -= here_bits;
                  len = 0;
                  copy = 11 + (hold & 127);
                  hold >>>= 7;
                  bits -= 7;
                }
                if (state.have + copy > state.nlen + state.ndist) {
                  strm.msg = "invalid bit length repeat";
                  state.mode = BAD;
                  break;
                }
                while (copy--) {
                  state.lens[state.have++] = len;
                }
              }
            }
            if (state.mode === BAD) {
              break;
            }
            if (state.lens[256] === 0) {
              strm.msg = "invalid code -- missing end-of-block";
              state.mode = BAD;
              break;
            }
            state.lenbits = 9;
            opts = { bits: state.lenbits };
            ret = inftrees(LENS, state.lens, 0, state.nlen, state.lencode, 0, state.work, opts);
            state.lenbits = opts.bits;
            if (ret) {
              strm.msg = "invalid literal/lengths set";
              state.mode = BAD;
              break;
            }
            state.distbits = 6;
            state.distcode = state.distdyn;
            opts = { bits: state.distbits };
            ret = inftrees(DISTS, state.lens, state.nlen, state.ndist, state.distcode, 0, state.work, opts);
            state.distbits = opts.bits;
            if (ret) {
              strm.msg = "invalid distances set";
              state.mode = BAD;
              break;
            }
            state.mode = LEN_;
            if (flush === Z_TREES) {
              break inf_leave;
            }
          case LEN_:
            state.mode = LEN;
          case LEN:
            if (have >= 6 && left >= 258) {
              strm.next_out = put;
              strm.avail_out = left;
              strm.next_in = next;
              strm.avail_in = have;
              state.hold = hold;
              state.bits = bits;
              inffast(strm, _out);
              put = strm.next_out;
              output = strm.output;
              left = strm.avail_out;
              next = strm.next_in;
              input2 = strm.input;
              have = strm.avail_in;
              hold = state.hold;
              bits = state.bits;
              if (state.mode === TYPE) {
                state.back = -1;
              }
              break;
            }
            state.back = 0;
            for (; ; ) {
              here = state.lencode[hold & (1 << state.lenbits) - 1];
              here_bits = here >>> 24;
              here_op = here >>> 16 & 255;
              here_val = here & 65535;
              if (here_bits <= bits) {
                break;
              }
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input2[next++] << bits;
              bits += 8;
            }
            if (here_op && (here_op & 240) === 0) {
              last_bits = here_bits;
              last_op = here_op;
              last_val = here_val;
              for (; ; ) {
                here = state.lencode[last_val + ((hold & (1 << last_bits + last_op) - 1) >> last_bits)];
                here_bits = here >>> 24;
                here_op = here >>> 16 & 255;
                here_val = here & 65535;
                if (last_bits + here_bits <= bits) {
                  break;
                }
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input2[next++] << bits;
                bits += 8;
              }
              hold >>>= last_bits;
              bits -= last_bits;
              state.back += last_bits;
            }
            hold >>>= here_bits;
            bits -= here_bits;
            state.back += here_bits;
            state.length = here_val;
            if (here_op === 0) {
              state.mode = LIT;
              break;
            }
            if (here_op & 32) {
              state.back = -1;
              state.mode = TYPE;
              break;
            }
            if (here_op & 64) {
              strm.msg = "invalid literal/length code";
              state.mode = BAD;
              break;
            }
            state.extra = here_op & 15;
            state.mode = LENEXT;
          case LENEXT:
            if (state.extra) {
              n2 = state.extra;
              while (bits < n2) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input2[next++] << bits;
                bits += 8;
              }
              state.length += hold & (1 << state.extra) - 1;
              hold >>>= state.extra;
              bits -= state.extra;
              state.back += state.extra;
            }
            state.was = state.length;
            state.mode = DIST;
          case DIST:
            for (; ; ) {
              here = state.distcode[hold & (1 << state.distbits) - 1];
              here_bits = here >>> 24;
              here_op = here >>> 16 & 255;
              here_val = here & 65535;
              if (here_bits <= bits) {
                break;
              }
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input2[next++] << bits;
              bits += 8;
            }
            if ((here_op & 240) === 0) {
              last_bits = here_bits;
              last_op = here_op;
              last_val = here_val;
              for (; ; ) {
                here = state.distcode[last_val + ((hold & (1 << last_bits + last_op) - 1) >> last_bits)];
                here_bits = here >>> 24;
                here_op = here >>> 16 & 255;
                here_val = here & 65535;
                if (last_bits + here_bits <= bits) {
                  break;
                }
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input2[next++] << bits;
                bits += 8;
              }
              hold >>>= last_bits;
              bits -= last_bits;
              state.back += last_bits;
            }
            hold >>>= here_bits;
            bits -= here_bits;
            state.back += here_bits;
            if (here_op & 64) {
              strm.msg = "invalid distance code";
              state.mode = BAD;
              break;
            }
            state.offset = here_val;
            state.extra = here_op & 15;
            state.mode = DISTEXT;
          case DISTEXT:
            if (state.extra) {
              n2 = state.extra;
              while (bits < n2) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input2[next++] << bits;
                bits += 8;
              }
              state.offset += hold & (1 << state.extra) - 1;
              hold >>>= state.extra;
              bits -= state.extra;
              state.back += state.extra;
            }
            if (state.offset > state.dmax) {
              strm.msg = "invalid distance too far back";
              state.mode = BAD;
              break;
            }
            state.mode = MATCH;
          case MATCH:
            if (left === 0) {
              break inf_leave;
            }
            copy = _out - left;
            if (state.offset > copy) {
              copy = state.offset - copy;
              if (copy > state.whave) {
                if (state.sane) {
                  strm.msg = "invalid distance too far back";
                  state.mode = BAD;
                  break;
                }
              }
              if (copy > state.wnext) {
                copy -= state.wnext;
                from = state.wsize - copy;
              } else {
                from = state.wnext - copy;
              }
              if (copy > state.length) {
                copy = state.length;
              }
              from_source = state.window;
            } else {
              from_source = output;
              from = put - state.offset;
              copy = state.length;
            }
            if (copy > left) {
              copy = left;
            }
            left -= copy;
            state.length -= copy;
            do {
              output[put++] = from_source[from++];
            } while (--copy);
            if (state.length === 0) {
              state.mode = LEN;
            }
            break;
          case LIT:
            if (left === 0) {
              break inf_leave;
            }
            output[put++] = state.length;
            left--;
            state.mode = LEN;
            break;
          case CHECK:
            if (state.wrap) {
              while (bits < 32) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold |= input2[next++] << bits;
                bits += 8;
              }
              _out -= left;
              strm.total_out += _out;
              state.total += _out;
              if (state.wrap & 4 && _out) {
                strm.adler = state.check = /*UPDATE_CHECK(state.check, put - _out, _out);*/
                state.flags ? crc32_1(state.check, output, _out, put - _out) : adler32_1(state.check, output, _out, put - _out);
              }
              _out = left;
              if (state.wrap & 4 && (state.flags ? hold : zswap32(hold)) !== state.check) {
                strm.msg = "incorrect data check";
                state.mode = BAD;
                break;
              }
              hold = 0;
              bits = 0;
            }
            state.mode = LENGTH;
          case LENGTH:
            if (state.wrap && state.flags) {
              while (bits < 32) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input2[next++] << bits;
                bits += 8;
              }
              if (state.wrap & 4 && hold !== (state.total & 4294967295)) {
                strm.msg = "incorrect length check";
                state.mode = BAD;
                break;
              }
              hold = 0;
              bits = 0;
            }
            state.mode = DONE;
          case DONE:
            ret = Z_STREAM_END$1;
            break inf_leave;
          case BAD:
            ret = Z_DATA_ERROR$1;
            break inf_leave;
          case MEM:
            return Z_MEM_ERROR$1;
          case SYNC:
          default:
            return Z_STREAM_ERROR$1;
        }
      }
    strm.next_out = put;
    strm.avail_out = left;
    strm.next_in = next;
    strm.avail_in = have;
    state.hold = hold;
    state.bits = bits;
    if (state.wsize || _out !== strm.avail_out && state.mode < BAD && (state.mode < CHECK || flush !== Z_FINISH$1)) {
      if (updatewindow(strm, strm.output, strm.next_out, _out - strm.avail_out)) ;
    }
    _in -= strm.avail_in;
    _out -= strm.avail_out;
    strm.total_in += _in;
    strm.total_out += _out;
    state.total += _out;
    if (state.wrap & 4 && _out) {
      strm.adler = state.check = /*UPDATE_CHECK(state.check, strm.next_out - _out, _out);*/
      state.flags ? crc32_1(state.check, output, _out, strm.next_out - _out) : adler32_1(state.check, output, _out, strm.next_out - _out);
    }
    strm.data_type = state.bits + (state.last ? 64 : 0) + (state.mode === TYPE ? 128 : 0) + (state.mode === LEN_ || state.mode === COPY_ ? 256 : 0);
    if ((_in === 0 && _out === 0 || flush === Z_FINISH$1) && ret === Z_OK$1) {
      ret = Z_BUF_ERROR;
    }
    return ret;
  };
  const inflateEnd = (strm) => {
    if (inflateStateCheck(strm)) {
      return Z_STREAM_ERROR$1;
    }
    let state = strm.state;
    if (state.window) {
      state.window = null;
    }
    strm.state = null;
    return Z_OK$1;
  };
  const inflateGetHeader = (strm, head) => {
    if (inflateStateCheck(strm)) {
      return Z_STREAM_ERROR$1;
    }
    const state = strm.state;
    if ((state.wrap & 2) === 0) {
      return Z_STREAM_ERROR$1;
    }
    state.head = head;
    head.done = false;
    return Z_OK$1;
  };
  const inflateSetDictionary = (strm, dictionary) => {
    const dictLength = dictionary.length;
    let state;
    let dictid;
    let ret;
    if (inflateStateCheck(strm)) {
      return Z_STREAM_ERROR$1;
    }
    state = strm.state;
    if (state.wrap !== 0 && state.mode !== DICT) {
      return Z_STREAM_ERROR$1;
    }
    if (state.mode === DICT) {
      dictid = 1;
      dictid = adler32_1(dictid, dictionary, dictLength, 0);
      if (dictid !== state.check) {
        return Z_DATA_ERROR$1;
      }
    }
    ret = updatewindow(strm, dictionary, dictLength, dictLength);
    if (ret) {
      state.mode = MEM;
      return Z_MEM_ERROR$1;
    }
    state.havedict = 1;
    return Z_OK$1;
  };
  var inflateReset_1 = inflateReset;
  var inflateReset2_1 = inflateReset2;
  var inflateResetKeep_1 = inflateResetKeep;
  var inflateInit_1 = inflateInit;
  var inflateInit2_1 = inflateInit2;
  var inflate_2$1 = inflate$2;
  var inflateEnd_1 = inflateEnd;
  var inflateGetHeader_1 = inflateGetHeader;
  var inflateSetDictionary_1 = inflateSetDictionary;
  var inflateInfo = "pako inflate (from Nodeca project)";
  var inflate_1$2 = {
    inflateReset: inflateReset_1,
    inflateReset2: inflateReset2_1,
    inflateResetKeep: inflateResetKeep_1,
    inflateInit: inflateInit_1,
    inflateInit2: inflateInit2_1,
    inflate: inflate_2$1,
    inflateEnd: inflateEnd_1,
    inflateGetHeader: inflateGetHeader_1,
    inflateSetDictionary: inflateSetDictionary_1,
    inflateInfo
  };
  function GZheader() {
    this.text = 0;
    this.time = 0;
    this.xflags = 0;
    this.os = 0;
    this.extra = null;
    this.extra_len = 0;
    this.name = "";
    this.comment = "";
    this.hcrc = 0;
    this.done = false;
  }
  var gzheader = GZheader;
  const toString = Object.prototype.toString;
  const {
    Z_NO_FLUSH,
    Z_FINISH,
    Z_OK,
    Z_STREAM_END,
    Z_NEED_DICT,
    Z_STREAM_ERROR,
    Z_DATA_ERROR,
    Z_MEM_ERROR
  } = constants$2;
  function Inflate$1(options2) {
    this.options = common.assign({
      chunkSize: 1024 * 64,
      windowBits: 15,
      to: ""
    }, options2 || {});
    const opt = this.options;
    if (opt.raw && opt.windowBits >= 0 && opt.windowBits < 16) {
      opt.windowBits = -opt.windowBits;
      if (opt.windowBits === 0) {
        opt.windowBits = -15;
      }
    }
    if (opt.windowBits >= 0 && opt.windowBits < 16 && !(options2 && options2.windowBits)) {
      opt.windowBits += 32;
    }
    if (opt.windowBits > 15 && opt.windowBits < 48) {
      if ((opt.windowBits & 15) === 0) {
        opt.windowBits |= 15;
      }
    }
    this.err = 0;
    this.msg = "";
    this.ended = false;
    this.chunks = [];
    this.strm = new zstream();
    this.strm.avail_out = 0;
    let status = inflate_1$2.inflateInit2(
      this.strm,
      opt.windowBits
    );
    if (status !== Z_OK) {
      throw new Error(messages[status]);
    }
    this.header = new gzheader();
    inflate_1$2.inflateGetHeader(this.strm, this.header);
    if (opt.dictionary) {
      if (typeof opt.dictionary === "string") {
        opt.dictionary = strings.string2buf(opt.dictionary);
      } else if (toString.call(opt.dictionary) === "[object ArrayBuffer]") {
        opt.dictionary = new Uint8Array(opt.dictionary);
      }
      if (opt.raw) {
        status = inflate_1$2.inflateSetDictionary(this.strm, opt.dictionary);
        if (status !== Z_OK) {
          throw new Error(messages[status]);
        }
      }
    }
  }
  Inflate$1.prototype.push = function(data, flush_mode) {
    const strm = this.strm;
    const chunkSize = this.options.chunkSize;
    const dictionary = this.options.dictionary;
    let status, _flush_mode, last_avail_out;
    if (this.ended) return false;
    if (flush_mode === ~~flush_mode) _flush_mode = flush_mode;
    else _flush_mode = flush_mode === true ? Z_FINISH : Z_NO_FLUSH;
    if (toString.call(data) === "[object ArrayBuffer]") {
      strm.input = new Uint8Array(data);
    } else {
      strm.input = data;
    }
    strm.next_in = 0;
    strm.avail_in = strm.input.length;
    for (; ; ) {
      if (strm.avail_out === 0) {
        strm.output = new Uint8Array(chunkSize);
        strm.next_out = 0;
        strm.avail_out = chunkSize;
      }
      status = inflate_1$2.inflate(strm, _flush_mode);
      if (status === Z_NEED_DICT && dictionary) {
        status = inflate_1$2.inflateSetDictionary(strm, dictionary);
        if (status === Z_OK) {
          status = inflate_1$2.inflate(strm, _flush_mode);
        } else if (status === Z_DATA_ERROR) {
          status = Z_NEED_DICT;
        }
      }
      while (strm.avail_in > 0 && status === Z_STREAM_END && strm.state.wrap > 0 && data[strm.next_in] !== 0) {
        inflate_1$2.inflateReset(strm);
        status = inflate_1$2.inflate(strm, _flush_mode);
      }
      switch (status) {
        case Z_STREAM_ERROR:
        case Z_DATA_ERROR:
        case Z_NEED_DICT:
        case Z_MEM_ERROR:
          this.onEnd(status);
          this.ended = true;
          return false;
      }
      last_avail_out = strm.avail_out;
      if (strm.next_out) {
        if (strm.avail_out === 0 || status === Z_STREAM_END) {
          if (this.options.to === "string") {
            let next_out_utf8 = strings.utf8border(strm.output, strm.next_out);
            let tail = strm.next_out - next_out_utf8;
            let utf8str = strings.buf2string(strm.output, next_out_utf8);
            strm.next_out = tail;
            strm.avail_out = chunkSize - tail;
            if (tail) strm.output.set(strm.output.subarray(next_out_utf8, next_out_utf8 + tail), 0);
            this.onData(utf8str);
          } else {
            this.onData(strm.output.length === strm.next_out ? strm.output : strm.output.subarray(0, strm.next_out));
          }
        }
      }
      if (status === Z_OK && last_avail_out === 0) continue;
      if (status === Z_STREAM_END) {
        status = inflate_1$2.inflateEnd(this.strm);
        this.onEnd(status);
        this.ended = true;
        return true;
      }
      if (strm.avail_in === 0) break;
    }
    return true;
  };
  Inflate$1.prototype.onData = function(chunk) {
    this.chunks.push(chunk);
  };
  Inflate$1.prototype.onEnd = function(status) {
    if (status === Z_OK) {
      if (this.options.to === "string") {
        this.result = this.chunks.join("");
      } else {
        this.result = common.flattenChunks(this.chunks);
      }
    }
    this.chunks = [];
    this.err = status;
    this.msg = this.strm.msg;
  };
  function inflate$1(input2, options2) {
    const inflator = new Inflate$1(options2);
    inflator.push(input2);
    if (inflator.err) throw inflator.msg || messages[inflator.err];
    return inflator.result;
  }
  function inflateRaw$1(input2, options2) {
    options2 = options2 || {};
    options2.raw = true;
    return inflate$1(input2, options2);
  }
  var Inflate_1$1 = Inflate$1;
  var inflate_2 = inflate$1;
  var inflateRaw_1$1 = inflateRaw$1;
  var ungzip$1 = inflate$1;
  var constants = constants$2;
  var inflate_1$1 = {
    Inflate: Inflate_1$1,
    inflate: inflate_2,
    inflateRaw: inflateRaw_1$1,
    ungzip: ungzip$1,
    constants
  };
  const { Deflate, deflate, deflateRaw, gzip } = deflate_1$1;
  const { Inflate, inflate, inflateRaw, ungzip } = inflate_1$1;
  var Deflate_1 = Deflate;
  var deflate_1 = deflate;
  var deflateRaw_1 = deflateRaw;
  var gzip_1 = gzip;
  var Inflate_1 = Inflate;
  var inflate_1 = inflate;
  var inflateRaw_1 = inflateRaw;
  var ungzip_1 = ungzip;
  var constants_1 = constants$2;
  var pako = {
    Deflate: Deflate_1,
    deflate: deflate_1,
    deflateRaw: deflateRaw_1,
    gzip: gzip_1,
    Inflate: Inflate_1,
    inflate: inflate_1,
    inflateRaw: inflateRaw_1,
    ungzip: ungzip_1,
    constants: constants_1
  };
  var __defProp2 = Object.defineProperty;
  var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __publicField2 = (obj, key, value) => __defNormalProp2(obj, typeof key !== "symbol" ? key + "" : key, value);
  var _a;
  var __defProp$1 = Object.defineProperty;
  var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __publicField$1 = (obj, key, value) => __defNormalProp$1(obj, typeof key !== "symbol" ? key + "" : key, value);
  var NodeType$2 = /* @__PURE__ */ ((NodeType2) => {
    NodeType2[NodeType2["Document"] = 0] = "Document";
    NodeType2[NodeType2["DocumentType"] = 1] = "DocumentType";
    NodeType2[NodeType2["Element"] = 2] = "Element";
    NodeType2[NodeType2["Text"] = 3] = "Text";
    NodeType2[NodeType2["CDATA"] = 4] = "CDATA";
    NodeType2[NodeType2["Comment"] = 5] = "Comment";
    return NodeType2;
  })(NodeType$2 || {});
  const testableAccessors$1 = {
    Node: ["childNodes", "parentNode", "parentElement", "textContent"],
    ShadowRoot: ["host", "styleSheets"],
    Element: ["shadowRoot", "querySelector", "querySelectorAll"],
    MutationObserver: []
  };
  const testableMethods$1 = {
    Node: ["contains", "getRootNode"],
    ShadowRoot: ["getSelection"],
    Element: [],
    MutationObserver: ["constructor"]
  };
  const untaintedBasePrototype$1 = {};
  function getUntaintedPrototype$1(key) {
    if (untaintedBasePrototype$1[key])
      return untaintedBasePrototype$1[key];
    const defaultObj = globalThis[key];
    const defaultPrototype = defaultObj.prototype;
    const accessorNames = key in testableAccessors$1 ? testableAccessors$1[key] : void 0;
    const isUntaintedAccessors = Boolean(
      accessorNames && // @ts-expect-error 2345
      accessorNames.every(
        (accessor) => {
          var _a22, _b2;
          return Boolean(
            (_b2 = (_a22 = Object.getOwnPropertyDescriptor(defaultPrototype, accessor)) == null ? void 0 : _a22.get) == null ? void 0 : _b2.toString().includes("[native code]")
          );
        }
      )
    );
    const methodNames = key in testableMethods$1 ? testableMethods$1[key] : void 0;
    const isUntaintedMethods = Boolean(
      methodNames && methodNames.every(
        // @ts-expect-error 2345
        (method) => {
          var _a22;
          return typeof defaultPrototype[method] === "function" && ((_a22 = defaultPrototype[method]) == null ? void 0 : _a22.toString().includes("[native code]"));
        }
      )
    );
    if (isUntaintedAccessors && isUntaintedMethods) {
      untaintedBasePrototype$1[key] = defaultObj.prototype;
      return defaultObj.prototype;
    }
    try {
      const iframeEl = document.createElement("iframe");
      document.body.appendChild(iframeEl);
      const win = iframeEl.contentWindow;
      if (!win) return defaultObj.prototype;
      const untaintedObject = win[key].prototype;
      document.body.removeChild(iframeEl);
      if (!untaintedObject) return defaultPrototype;
      return untaintedBasePrototype$1[key] = untaintedObject;
    } catch {
      return defaultPrototype;
    }
  }
  const untaintedAccessorCache$1 = {};
  function getUntaintedAccessor$1(key, instance, accessor) {
    var _a22;
    const cacheKey = `${key}.${String(accessor)}`;
    if (untaintedAccessorCache$1[cacheKey])
      return untaintedAccessorCache$1[cacheKey].call(
        instance
      );
    const untaintedPrototype = getUntaintedPrototype$1(key);
    const untaintedAccessor = (_a22 = Object.getOwnPropertyDescriptor(
      untaintedPrototype,
      accessor
    )) == null ? void 0 : _a22.get;
    if (!untaintedAccessor) return instance[accessor];
    untaintedAccessorCache$1[cacheKey] = untaintedAccessor;
    return untaintedAccessor.call(instance);
  }
  const untaintedMethodCache$1 = {};
  function getUntaintedMethod$1(key, instance, method) {
    const cacheKey = `${key}.${String(method)}`;
    if (untaintedMethodCache$1[cacheKey])
      return untaintedMethodCache$1[cacheKey].bind(
        instance
      );
    const untaintedPrototype = getUntaintedPrototype$1(key);
    const untaintedMethod = untaintedPrototype[method];
    if (typeof untaintedMethod !== "function") return instance[method];
    untaintedMethodCache$1[cacheKey] = untaintedMethod;
    return untaintedMethod.bind(instance);
  }
  function childNodes$1(n2) {
    return getUntaintedAccessor$1("Node", n2, "childNodes");
  }
  function parentNode$1(n2) {
    return getUntaintedAccessor$1("Node", n2, "parentNode");
  }
  function parentElement$1(n2) {
    return getUntaintedAccessor$1("Node", n2, "parentElement");
  }
  function textContent$1(n2) {
    return getUntaintedAccessor$1("Node", n2, "textContent");
  }
  function contains$1(n2, other) {
    return getUntaintedMethod$1("Node", n2, "contains")(other);
  }
  function getRootNode$1(n2) {
    return getUntaintedMethod$1("Node", n2, "getRootNode")();
  }
  function host$1(n2) {
    if (!n2 || !("host" in n2)) return null;
    return getUntaintedAccessor$1("ShadowRoot", n2, "host");
  }
  function styleSheets$1(n2) {
    return n2.styleSheets;
  }
  function shadowRoot$1(n2) {
    if (!n2 || !("shadowRoot" in n2)) return null;
    return getUntaintedAccessor$1("Element", n2, "shadowRoot");
  }
  function querySelector$1(n2, selectors) {
    return getUntaintedAccessor$1("Element", n2, "querySelector")(selectors);
  }
  function querySelectorAll$1(n2, selectors) {
    return getUntaintedAccessor$1("Element", n2, "querySelectorAll")(selectors);
  }
  function mutationObserverCtor$1() {
    return getUntaintedPrototype$1("MutationObserver").constructor;
  }
  const index$1 = {
    childNodes: childNodes$1,
    parentNode: parentNode$1,
    parentElement: parentElement$1,
    textContent: textContent$1,
    contains: contains$1,
    getRootNode: getRootNode$1,
    host: host$1,
    styleSheets: styleSheets$1,
    shadowRoot: shadowRoot$1,
    querySelector: querySelector$1,
    querySelectorAll: querySelectorAll$1,
    mutationObserver: mutationObserverCtor$1
  };
  function isElement(n2) {
    return n2.nodeType === n2.ELEMENT_NODE;
  }
  function isShadowRoot(n2) {
    const hostEl = (
      // anchor and textarea elements also have a `host` property
      // but only shadow roots have a `mode` property
      n2 && "host" in n2 && "mode" in n2 && index$1.host(n2) || null
    );
    return Boolean(
      hostEl && "shadowRoot" in hostEl && index$1.shadowRoot(hostEl) === n2
    );
  }
  function isNativeShadowDom(shadowRoot2) {
    return Object.prototype.toString.call(shadowRoot2) === "[object ShadowRoot]";
  }
  function fixBrowserCompatibilityIssuesInCSS(cssText) {
    if (cssText.includes(" background-clip: text;") && !cssText.includes(" -webkit-background-clip: text;")) {
      cssText = cssText.replace(
        /\sbackground-clip:\s*text;/g,
        " -webkit-background-clip: text; background-clip: text;"
      );
    }
    return cssText;
  }
  function escapeImportStatement(rule2) {
    const { cssText } = rule2;
    if (cssText.split('"').length < 3) return cssText;
    const statement = ["@import", `url(${JSON.stringify(rule2.href)})`];
    if (rule2.layerName === "") {
      statement.push(`layer`);
    } else if (rule2.layerName) {
      statement.push(`layer(${rule2.layerName})`);
    }
    if (rule2.supportsText) {
      statement.push(`supports(${rule2.supportsText})`);
    }
    if (rule2.media.length) {
      statement.push(rule2.media.mediaText);
    }
    return statement.join(" ") + ";";
  }
  function stringifyStylesheet(s2) {
    try {
      const rules2 = s2.rules || s2.cssRules;
      if (!rules2) {
        return null;
      }
      const stringifiedRules = Array.from(
        rules2,
        (rule2) => stringifyRule(rule2, s2.href)
      ).join("");
      return fixBrowserCompatibilityIssuesInCSS(stringifiedRules);
    } catch (error) {
      return null;
    }
  }
  function stringifyRule(rule2, sheetHref) {
    if (isCSSImportRule(rule2)) {
      let importStringified;
      try {
        importStringified = // for same-origin stylesheets,
        // we can access the imported stylesheet rules directly
        stringifyStylesheet(rule2.styleSheet) || // work around browser issues with the raw string `@import url(...)` statement
        escapeImportStatement(rule2);
      } catch (error) {
        importStringified = rule2.cssText;
      }
      if (rule2.styleSheet.href) {
        return absolutifyURLs(importStringified, rule2.styleSheet.href);
      }
      return importStringified;
    } else {
      let ruleStringified = rule2.cssText;
      if (isCSSStyleRule(rule2) && rule2.selectorText.includes(":")) {
        ruleStringified = fixSafariColons(ruleStringified);
      }
      if (sheetHref) {
        return absolutifyURLs(ruleStringified, sheetHref);
      }
      return ruleStringified;
    }
  }
  function fixSafariColons(cssStringified) {
    const regex = /(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm;
    return cssStringified.replace(regex, "$1\\$2");
  }
  function isCSSImportRule(rule2) {
    return "styleSheet" in rule2;
  }
  function isCSSStyleRule(rule2) {
    return "selectorText" in rule2;
  }
  class Mirror {
    constructor() {
      __publicField$1(this, "idNodeMap", /* @__PURE__ */ new Map());
      __publicField$1(this, "nodeMetaMap", /* @__PURE__ */ new WeakMap());
    }
    getId(n2) {
      var _a22;
      if (!n2) return -1;
      const id = (_a22 = this.getMeta(n2)) == null ? void 0 : _a22.id;
      return id ?? -1;
    }
    getNode(id) {
      return this.idNodeMap.get(id) || null;
    }
    getIds() {
      return Array.from(this.idNodeMap.keys());
    }
    getMeta(n2) {
      return this.nodeMetaMap.get(n2) || null;
    }
    // removes the node from idNodeMap
    // doesn't remove the node from nodeMetaMap
    removeNodeFromMap(n2) {
      const id = this.getId(n2);
      this.idNodeMap.delete(id);
      if (n2.childNodes) {
        n2.childNodes.forEach(
          (childNode) => this.removeNodeFromMap(childNode)
        );
      }
    }
    has(id) {
      return this.idNodeMap.has(id);
    }
    hasNode(node2) {
      return this.nodeMetaMap.has(node2);
    }
    add(n2, meta) {
      const id = meta.id;
      this.idNodeMap.set(id, n2);
      this.nodeMetaMap.set(n2, meta);
    }
    replace(id, n2) {
      const oldNode = this.getNode(id);
      if (oldNode) {
        const meta = this.nodeMetaMap.get(oldNode);
        if (meta) this.nodeMetaMap.set(n2, meta);
      }
      this.idNodeMap.set(id, n2);
    }
    reset() {
      this.idNodeMap = /* @__PURE__ */ new Map();
      this.nodeMetaMap = /* @__PURE__ */ new WeakMap();
    }
  }
  function createMirror$2() {
    return new Mirror();
  }
  function maskInputValue({
    element,
    maskInputOptions,
    tagName,
    type,
    value,
    maskInputFn
  }) {
    let text = value || "";
    const actualType = type && toLowerCase(type);
    if (maskInputOptions[tagName.toLowerCase()] || actualType && maskInputOptions[actualType]) {
      if (maskInputFn) {
        text = maskInputFn(text, element);
      } else {
        text = "*".repeat(text.length);
      }
    }
    return text;
  }
  function toLowerCase(str) {
    return str.toLowerCase();
  }
  const ORIGINAL_ATTRIBUTE_NAME = "__rrweb_original__";
  function is2DCanvasBlank(canvas) {
    const ctx = canvas.getContext("2d");
    if (!ctx) return true;
    const chunkSize = 50;
    for (let x2 = 0; x2 < canvas.width; x2 += chunkSize) {
      for (let y2 = 0; y2 < canvas.height; y2 += chunkSize) {
        const getImageData = ctx.getImageData;
        const originalGetImageData = ORIGINAL_ATTRIBUTE_NAME in getImageData ? getImageData[ORIGINAL_ATTRIBUTE_NAME] : getImageData;
        const pixelBuffer = new Uint32Array(
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
          originalGetImageData.call(
            ctx,
            x2,
            y2,
            Math.min(chunkSize, canvas.width - x2),
            Math.min(chunkSize, canvas.height - y2)
          ).data.buffer
        );
        if (pixelBuffer.some((pixel) => pixel !== 0)) return false;
      }
    }
    return true;
  }
  function getInputType(element) {
    const type = element.type;
    return element.hasAttribute("data-rr-is-password") ? "password" : type ? (
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
      toLowerCase(type)
    ) : null;
  }
  function extractFileExtension(path, baseURL) {
    let url;
    try {
      url = new URL(path, baseURL ?? window.location.href);
    } catch (err2) {
      return null;
    }
    const regex = /\.([0-9a-z]+)(?:$)/i;
    const match = url.pathname.match(regex);
    return (match == null ? void 0 : match[1]) ?? null;
  }
  function extractOrigin(url) {
    let origin = "";
    if (url.indexOf("//") > -1) {
      origin = url.split("/").slice(0, 3).join("/");
    } else {
      origin = url.split("/")[0];
    }
    origin = origin.split("?")[0];
    return origin;
  }
  const URL_IN_CSS_REF = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm;
  const URL_PROTOCOL_MATCH = /^(?:[a-z+]+:)?\/\//i;
  const URL_WWW_MATCH = /^www\..*/i;
  const DATA_URI = /^(data:)([^,]*),(.*)/i;
  function absolutifyURLs(cssText, href) {
    return (cssText || "").replace(
      URL_IN_CSS_REF,
      (origin, quote1, path1, quote2, path2, path3) => {
        const filePath = path1 || path2 || path3;
        const maybeQuote = quote1 || quote2 || "";
        if (!filePath) {
          return origin;
        }
        if (URL_PROTOCOL_MATCH.test(filePath) || URL_WWW_MATCH.test(filePath)) {
          return `url(${maybeQuote}${filePath}${maybeQuote})`;
        }
        if (DATA_URI.test(filePath)) {
          return `url(${maybeQuote}${filePath}${maybeQuote})`;
        }
        if (filePath[0] === "/") {
          return `url(${maybeQuote}${extractOrigin(href) + filePath}${maybeQuote})`;
        }
        const stack = href.split("/");
        const parts = filePath.split("/");
        stack.pop();
        for (const part of parts) {
          if (part === ".") {
            continue;
          } else if (part === "..") {
            stack.pop();
          } else {
            stack.push(part);
          }
        }
        return `url(${maybeQuote}${stack.join("/")}${maybeQuote})`;
      }
    );
  }
  let _id = 1;
  const tagNameRegex = new RegExp("[^a-z0-9-_:]");
  const IGNORED_NODE = -2;
  function genId() {
    return _id++;
  }
  function getValidTagName$1(element) {
    if (element instanceof HTMLFormElement) {
      return "form";
    }
    const processedTagName = toLowerCase(element.tagName);
    if (tagNameRegex.test(processedTagName)) {
      return "div";
    }
    return processedTagName;
  }
  let canvasService;
  let canvasCtx;
  const SRCSET_NOT_SPACES = /^[^ \t\n\r\u000c]+/;
  const SRCSET_COMMAS_OR_SPACES = /^[, \t\n\r\u000c]+/;
  function getAbsoluteSrcsetString(doc, attributeValue) {
    if (attributeValue.trim() === "") {
      return attributeValue;
    }
    let pos = 0;
    function collectCharacters(regEx) {
      let chars2;
      const match = regEx.exec(attributeValue.substring(pos));
      if (match) {
        chars2 = match[0];
        pos += chars2.length;
        return chars2;
      }
      return "";
    }
    const output = [];
    while (true) {
      collectCharacters(SRCSET_COMMAS_OR_SPACES);
      if (pos >= attributeValue.length) {
        break;
      }
      let url = collectCharacters(SRCSET_NOT_SPACES);
      if (url.slice(-1) === ",") {
        url = absoluteToDoc(doc, url.substring(0, url.length - 1));
        output.push(url);
      } else {
        let descriptorsStr = "";
        url = absoluteToDoc(doc, url);
        let inParens = false;
        while (true) {
          const c2 = attributeValue.charAt(pos);
          if (c2 === "") {
            output.push((url + descriptorsStr).trim());
            break;
          } else if (!inParens) {
            if (c2 === ",") {
              pos += 1;
              output.push((url + descriptorsStr).trim());
              break;
            } else if (c2 === "(") {
              inParens = true;
            }
          } else {
            if (c2 === ")") {
              inParens = false;
            }
          }
          descriptorsStr += c2;
          pos += 1;
        }
      }
    }
    return output.join(", ");
  }
  const cachedDocument = /* @__PURE__ */ new WeakMap();
  function absoluteToDoc(doc, attributeValue) {
    if (!attributeValue || attributeValue.trim() === "") {
      return attributeValue;
    }
    return getHref(doc, attributeValue);
  }
  function isSVGElement(el) {
    return Boolean(el.tagName === "svg" || el.ownerSVGElement);
  }
  function getHref(doc, customHref) {
    let a2 = cachedDocument.get(doc);
    if (!a2) {
      a2 = doc.createElement("a");
      cachedDocument.set(doc, a2);
    }
    if (!customHref) {
      customHref = "";
    } else if (customHref.startsWith("blob:") || customHref.startsWith("data:")) {
      return customHref;
    }
    a2.setAttribute("href", customHref);
    return a2.href;
  }
  function transformAttribute(doc, tagName, name, value) {
    if (!value) {
      return value;
    }
    if (name === "src" || name === "href" && !(tagName === "use" && value[0] === "#")) {
      return absoluteToDoc(doc, value);
    } else if (name === "xlink:href" && value[0] !== "#") {
      return absoluteToDoc(doc, value);
    } else if (name === "background" && (tagName === "table" || tagName === "td" || tagName === "th")) {
      return absoluteToDoc(doc, value);
    } else if (name === "srcset") {
      return getAbsoluteSrcsetString(doc, value);
    } else if (name === "style") {
      return absolutifyURLs(value, getHref(doc));
    } else if (tagName === "object" && name === "data") {
      return absoluteToDoc(doc, value);
    }
    return value;
  }
  function ignoreAttribute(tagName, name, _value) {
    return (tagName === "video" || tagName === "audio") && name === "autoplay";
  }
  function _isBlockedElement(element, blockClass, blockSelector) {
    try {
      if (typeof blockClass === "string") {
        if (element.classList.contains(blockClass)) {
          return true;
        }
      } else {
        for (let eIndex = element.classList.length; eIndex--; ) {
          const className = element.classList[eIndex];
          if (blockClass.test(className)) {
            return true;
          }
        }
      }
      if (blockSelector) {
        return element.matches(blockSelector);
      }
    } catch (e2) {
    }
    return false;
  }
  function classMatchesRegex(node2, regex, checkAncestors) {
    if (!node2) return false;
    if (node2.nodeType !== node2.ELEMENT_NODE) {
      if (!checkAncestors) return false;
      return classMatchesRegex(index$1.parentNode(node2), regex, checkAncestors);
    }
    for (let eIndex = node2.classList.length; eIndex--; ) {
      const className = node2.classList[eIndex];
      if (regex.test(className)) {
        return true;
      }
    }
    if (!checkAncestors) return false;
    return classMatchesRegex(index$1.parentNode(node2), regex, checkAncestors);
  }
  function needMaskingText(node2, maskTextClass, maskTextSelector, checkAncestors) {
    let el;
    if (isElement(node2)) {
      el = node2;
      if (!index$1.childNodes(el).length) {
        return false;
      }
    } else if (index$1.parentElement(node2) === null) {
      return false;
    } else {
      el = index$1.parentElement(node2);
    }
    try {
      if (typeof maskTextClass === "string") {
        if (checkAncestors) {
          if (el.closest(`.${maskTextClass}`)) return true;
        } else {
          if (el.classList.contains(maskTextClass)) return true;
        }
      } else {
        if (classMatchesRegex(el, maskTextClass, checkAncestors)) return true;
      }
      if (maskTextSelector) {
        if (checkAncestors) {
          if (el.closest(maskTextSelector)) return true;
        } else {
          if (el.matches(maskTextSelector)) return true;
        }
      }
    } catch (e2) {
    }
    return false;
  }
  function onceIframeLoaded(iframeEl, listener, iframeLoadTimeout) {
    const win = iframeEl.contentWindow;
    if (!win) {
      return;
    }
    let fired = false;
    let readyState;
    try {
      readyState = win.document.readyState;
    } catch (error) {
      return;
    }
    if (readyState !== "complete") {
      const timer2 = setTimeout(() => {
        if (!fired) {
          listener();
          fired = true;
        }
      }, iframeLoadTimeout);
      iframeEl.addEventListener("load", () => {
        clearTimeout(timer2);
        fired = true;
        listener();
      });
      return;
    }
    const blankUrl = "about:blank";
    if (win.location.href !== blankUrl || iframeEl.src === blankUrl || iframeEl.src === "") {
      setTimeout(listener, 0);
      return iframeEl.addEventListener("load", listener);
    }
    iframeEl.addEventListener("load", listener);
  }
  function onceStylesheetLoaded(link, listener, styleSheetLoadTimeout) {
    let fired = false;
    let styleSheetLoaded;
    try {
      styleSheetLoaded = link.sheet;
    } catch (error) {
      return;
    }
    if (styleSheetLoaded) return;
    const timer2 = setTimeout(() => {
      if (!fired) {
        listener();
        fired = true;
      }
    }, styleSheetLoadTimeout);
    link.addEventListener("load", () => {
      clearTimeout(timer2);
      fired = true;
      listener();
    });
  }
  function serializeNode(n2, options2) {
    const {
      doc,
      mirror: mirror2,
      blockClass,
      blockSelector,
      needsMask,
      inlineStylesheet,
      maskInputOptions = {},
      maskTextFn,
      maskInputFn,
      dataURLOptions = {},
      inlineImages,
      recordCanvas,
      keepIframeSrcFn,
      newlyAddedElement = false
    } = options2;
    const rootId = getRootId(doc, mirror2);
    switch (n2.nodeType) {
      case n2.DOCUMENT_NODE:
        if (n2.compatMode !== "CSS1Compat") {
          return {
            type: NodeType$2.Document,
            childNodes: [],
            compatMode: n2.compatMode
            // probably "BackCompat"
          };
        } else {
          return {
            type: NodeType$2.Document,
            childNodes: []
          };
        }
      case n2.DOCUMENT_TYPE_NODE:
        return {
          type: NodeType$2.DocumentType,
          name: n2.name,
          publicId: n2.publicId,
          systemId: n2.systemId,
          rootId
        };
      case n2.ELEMENT_NODE:
        return serializeElementNode(n2, {
          doc,
          blockClass,
          blockSelector,
          inlineStylesheet,
          maskInputOptions,
          maskInputFn,
          dataURLOptions,
          inlineImages,
          recordCanvas,
          keepIframeSrcFn,
          newlyAddedElement,
          rootId
        });
      case n2.TEXT_NODE:
        return serializeTextNode(n2, {
          doc,
          needsMask,
          maskTextFn,
          rootId
        });
      case n2.CDATA_SECTION_NODE:
        return {
          type: NodeType$2.CDATA,
          textContent: "",
          rootId
        };
      case n2.COMMENT_NODE:
        return {
          type: NodeType$2.Comment,
          textContent: index$1.textContent(n2) || "",
          rootId
        };
      default:
        return false;
    }
  }
  function getRootId(doc, mirror2) {
    if (!mirror2.hasNode(doc)) return void 0;
    const docId = mirror2.getId(doc);
    return docId === 1 ? void 0 : docId;
  }
  function serializeTextNode(n2, options2) {
    var _a22;
    const { needsMask, maskTextFn, rootId } = options2;
    const parent = index$1.parentNode(n2);
    const parentTagName = parent && parent.tagName;
    let text = index$1.textContent(n2);
    const isStyle = parentTagName === "STYLE" ? true : void 0;
    const isScript = parentTagName === "SCRIPT" ? true : void 0;
    if (isStyle && text) {
      try {
        if (n2.nextSibling || n2.previousSibling) {
        } else if ((_a22 = parent.sheet) == null ? void 0 : _a22.cssRules) {
          text = stringifyStylesheet(parent.sheet);
        }
      } catch (err2) {
        console.warn(
          `Cannot get CSS styles from text's parentNode. Error: ${err2}`,
          n2
        );
      }
      text = absolutifyURLs(text, getHref(options2.doc));
    }
    if (isScript) {
      text = "SCRIPT_PLACEHOLDER";
    }
    if (!isStyle && !isScript && text && needsMask) {
      text = maskTextFn ? maskTextFn(text, index$1.parentElement(n2)) : text.replace(/[\S]/g, "*");
    }
    return {
      type: NodeType$2.Text,
      textContent: text || "",
      isStyle,
      rootId
    };
  }
  function serializeElementNode(n2, options2) {
    const {
      doc,
      blockClass,
      blockSelector,
      inlineStylesheet,
      maskInputOptions = {},
      maskInputFn,
      dataURLOptions = {},
      inlineImages,
      recordCanvas,
      keepIframeSrcFn,
      newlyAddedElement = false,
      rootId
    } = options2;
    const needBlock = _isBlockedElement(n2, blockClass, blockSelector);
    const tagName = getValidTagName$1(n2);
    let attributes = {};
    const len = n2.attributes.length;
    for (let i2 = 0; i2 < len; i2++) {
      const attr = n2.attributes[i2];
      if (!ignoreAttribute(tagName, attr.name, attr.value)) {
        attributes[attr.name] = transformAttribute(
          doc,
          tagName,
          toLowerCase(attr.name),
          attr.value
        );
      }
    }
    if (tagName === "link" && inlineStylesheet) {
      const stylesheet = Array.from(doc.styleSheets).find((s2) => {
        return s2.href === n2.href;
      });
      let cssText = null;
      if (stylesheet) {
        cssText = stringifyStylesheet(stylesheet);
      }
      if (cssText) {
        delete attributes.rel;
        delete attributes.href;
        attributes._cssText = cssText;
      }
    }
    if (tagName === "style" && n2.sheet && // TODO: Currently we only try to get dynamic stylesheet when it is an empty style element
    !(n2.innerText || index$1.textContent(n2) || "").trim().length) {
      const cssText = stringifyStylesheet(
        n2.sheet
      );
      if (cssText) {
        attributes._cssText = cssText;
      }
    }
    if (tagName === "input" || tagName === "textarea" || tagName === "select") {
      const value = n2.value;
      const checked = n2.checked;
      if (attributes.type !== "radio" && attributes.type !== "checkbox" && attributes.type !== "submit" && attributes.type !== "button" && value) {
        attributes.value = maskInputValue({
          element: n2,
          type: getInputType(n2),
          tagName,
          value,
          maskInputOptions,
          maskInputFn
        });
      } else if (checked) {
        attributes.checked = checked;
      }
    }
    if (tagName === "option") {
      if (n2.selected && !maskInputOptions["select"]) {
        attributes.selected = true;
      } else {
        delete attributes.selected;
      }
    }
    if (tagName === "dialog" && n2.open) {
      attributes.rr_open_mode = n2.matches("dialog:modal") ? "modal" : "non-modal";
    }
    if (tagName === "canvas" && recordCanvas) {
      if (n2.__context === "2d") {
        if (!is2DCanvasBlank(n2)) {
          attributes.rr_dataURL = n2.toDataURL(
            dataURLOptions.type,
            dataURLOptions.quality
          );
        }
      } else if (!("__context" in n2)) {
        const canvasDataURL = n2.toDataURL(
          dataURLOptions.type,
          dataURLOptions.quality
        );
        const blankCanvas = doc.createElement("canvas");
        blankCanvas.width = n2.width;
        blankCanvas.height = n2.height;
        const blankCanvasDataURL = blankCanvas.toDataURL(
          dataURLOptions.type,
          dataURLOptions.quality
        );
        if (canvasDataURL !== blankCanvasDataURL) {
          attributes.rr_dataURL = canvasDataURL;
        }
      }
    }
    if (tagName === "img" && inlineImages) {
      if (!canvasService) {
        canvasService = doc.createElement("canvas");
        canvasCtx = canvasService.getContext("2d");
      }
      const image = n2;
      const imageSrc = image.currentSrc || image.getAttribute("src") || "<unknown-src>";
      const priorCrossOrigin = image.crossOrigin;
      const recordInlineImage = () => {
        image.removeEventListener("load", recordInlineImage);
        try {
          canvasService.width = image.naturalWidth;
          canvasService.height = image.naturalHeight;
          canvasCtx.drawImage(image, 0, 0);
          attributes.rr_dataURL = canvasService.toDataURL(
            dataURLOptions.type,
            dataURLOptions.quality
          );
        } catch (err2) {
          if (image.crossOrigin !== "anonymous") {
            image.crossOrigin = "anonymous";
            if (image.complete && image.naturalWidth !== 0)
              recordInlineImage();
            else image.addEventListener("load", recordInlineImage);
            return;
          } else {
            console.warn(
              `Cannot inline img src=${imageSrc}! Error: ${err2}`
            );
          }
        }
        if (image.crossOrigin === "anonymous") {
          priorCrossOrigin ? attributes.crossOrigin = priorCrossOrigin : image.removeAttribute("crossorigin");
        }
      };
      if (image.complete && image.naturalWidth !== 0) recordInlineImage();
      else image.addEventListener("load", recordInlineImage);
    }
    if (tagName === "audio" || tagName === "video") {
      const mediaAttributes = attributes;
      mediaAttributes.rr_mediaState = n2.paused ? "paused" : "played";
      mediaAttributes.rr_mediaCurrentTime = n2.currentTime;
      mediaAttributes.rr_mediaPlaybackRate = n2.playbackRate;
      mediaAttributes.rr_mediaMuted = n2.muted;
      mediaAttributes.rr_mediaLoop = n2.loop;
      mediaAttributes.rr_mediaVolume = n2.volume;
    }
    if (!newlyAddedElement) {
      if (n2.scrollLeft) {
        attributes.rr_scrollLeft = n2.scrollLeft;
      }
      if (n2.scrollTop) {
        attributes.rr_scrollTop = n2.scrollTop;
      }
    }
    if (needBlock) {
      const { width, height } = n2.getBoundingClientRect();
      attributes = {
        class: attributes.class,
        rr_width: `${width}px`,
        rr_height: `${height}px`
      };
    }
    if (tagName === "iframe" && !keepIframeSrcFn(attributes.src)) {
      if (!n2.contentDocument) {
        attributes.rr_src = attributes.src;
      }
      delete attributes.src;
    }
    let isCustomElement;
    try {
      if (customElements.get(tagName)) isCustomElement = true;
    } catch (e2) {
    }
    return {
      type: NodeType$2.Element,
      tagName,
      attributes,
      childNodes: [],
      isSVG: isSVGElement(n2) || void 0,
      needBlock,
      rootId,
      isCustom: isCustomElement
    };
  }
  function lowerIfExists(maybeAttr) {
    if (maybeAttr === void 0 || maybeAttr === null) {
      return "";
    } else {
      return maybeAttr.toLowerCase();
    }
  }
  function slimDOMExcluded(sn, slimDOMOptions) {
    if (slimDOMOptions.comment && sn.type === NodeType$2.Comment) {
      return true;
    } else if (sn.type === NodeType$2.Element) {
      if (slimDOMOptions.script && // script tag
      (sn.tagName === "script" || // (module)preload link
      sn.tagName === "link" && (sn.attributes.rel === "preload" || sn.attributes.rel === "modulepreload") && sn.attributes.as === "script" || // prefetch link
      sn.tagName === "link" && sn.attributes.rel === "prefetch" && typeof sn.attributes.href === "string" && extractFileExtension(sn.attributes.href) === "js")) {
        return true;
      } else if (slimDOMOptions.headFavicon && (sn.tagName === "link" && sn.attributes.rel === "shortcut icon" || sn.tagName === "meta" && (lowerIfExists(sn.attributes.name).match(
        /^msapplication-tile(image|color)$/
      ) || lowerIfExists(sn.attributes.name) === "application-name" || lowerIfExists(sn.attributes.rel) === "icon" || lowerIfExists(sn.attributes.rel) === "apple-touch-icon" || lowerIfExists(sn.attributes.rel) === "shortcut icon"))) {
        return true;
      } else if (sn.tagName === "meta") {
        if (slimDOMOptions.headMetaDescKeywords && lowerIfExists(sn.attributes.name).match(/^description|keywords$/)) {
          return true;
        } else if (slimDOMOptions.headMetaSocial && (lowerIfExists(sn.attributes.property).match(/^(og|twitter|fb):/) || // og = opengraph (facebook)
        lowerIfExists(sn.attributes.name).match(/^(og|twitter):/) || lowerIfExists(sn.attributes.name) === "pinterest")) {
          return true;
        } else if (slimDOMOptions.headMetaRobots && (lowerIfExists(sn.attributes.name) === "robots" || lowerIfExists(sn.attributes.name) === "googlebot" || lowerIfExists(sn.attributes.name) === "bingbot")) {
          return true;
        } else if (slimDOMOptions.headMetaHttpEquiv && sn.attributes["http-equiv"] !== void 0) {
          return true;
        } else if (slimDOMOptions.headMetaAuthorship && (lowerIfExists(sn.attributes.name) === "author" || lowerIfExists(sn.attributes.name) === "generator" || lowerIfExists(sn.attributes.name) === "framework" || lowerIfExists(sn.attributes.name) === "publisher" || lowerIfExists(sn.attributes.name) === "progid" || lowerIfExists(sn.attributes.property).match(/^article:/) || lowerIfExists(sn.attributes.property).match(/^product:/))) {
          return true;
        } else if (slimDOMOptions.headMetaVerification && (lowerIfExists(sn.attributes.name) === "google-site-verification" || lowerIfExists(sn.attributes.name) === "yandex-verification" || lowerIfExists(sn.attributes.name) === "csrf-token" || lowerIfExists(sn.attributes.name) === "p:domain_verify" || lowerIfExists(sn.attributes.name) === "verify-v1" || lowerIfExists(sn.attributes.name) === "verification" || lowerIfExists(sn.attributes.name) === "shopify-checkout-api-token")) {
          return true;
        }
      }
    }
    return false;
  }
  function serializeNodeWithId(n2, options2) {
    const {
      doc,
      mirror: mirror2,
      blockClass,
      blockSelector,
      maskTextClass,
      maskTextSelector,
      skipChild = false,
      inlineStylesheet = true,
      maskInputOptions = {},
      maskTextFn,
      maskInputFn,
      slimDOMOptions,
      dataURLOptions = {},
      inlineImages = false,
      recordCanvas = false,
      onSerialize,
      onIframeLoad,
      iframeLoadTimeout = 5e3,
      onStylesheetLoad,
      stylesheetLoadTimeout = 5e3,
      keepIframeSrcFn = () => false,
      newlyAddedElement = false
    } = options2;
    let { needsMask } = options2;
    let { preserveWhiteSpace = true } = options2;
    if (!needsMask) {
      const checkAncestors = needsMask === void 0;
      needsMask = needMaskingText(
        n2,
        maskTextClass,
        maskTextSelector,
        checkAncestors
      );
    }
    const _serializedNode = serializeNode(n2, {
      doc,
      mirror: mirror2,
      blockClass,
      blockSelector,
      needsMask,
      inlineStylesheet,
      maskInputOptions,
      maskTextFn,
      maskInputFn,
      dataURLOptions,
      inlineImages,
      recordCanvas,
      keepIframeSrcFn,
      newlyAddedElement
    });
    if (!_serializedNode) {
      console.warn(n2, "not serialized");
      return null;
    }
    let id;
    if (mirror2.hasNode(n2)) {
      id = mirror2.getId(n2);
    } else if (slimDOMExcluded(_serializedNode, slimDOMOptions) || !preserveWhiteSpace && _serializedNode.type === NodeType$2.Text && !_serializedNode.isStyle && !_serializedNode.textContent.replace(/^\s+|\s+$/gm, "").length) {
      id = IGNORED_NODE;
    } else {
      id = genId();
    }
    const serializedNode = Object.assign(_serializedNode, { id });
    mirror2.add(n2, serializedNode);
    if (id === IGNORED_NODE) {
      return null;
    }
    if (onSerialize) {
      onSerialize(n2);
    }
    let recordChild = !skipChild;
    if (serializedNode.type === NodeType$2.Element) {
      recordChild = recordChild && !serializedNode.needBlock;
      delete serializedNode.needBlock;
      const shadowRootEl = index$1.shadowRoot(n2);
      if (shadowRootEl && isNativeShadowDom(shadowRootEl))
        serializedNode.isShadowHost = true;
    }
    if ((serializedNode.type === NodeType$2.Document || serializedNode.type === NodeType$2.Element) && recordChild) {
      if (slimDOMOptions.headWhitespace && serializedNode.type === NodeType$2.Element && serializedNode.tagName === "head") {
        preserveWhiteSpace = false;
      }
      const bypassOptions = {
        doc,
        mirror: mirror2,
        blockClass,
        blockSelector,
        needsMask,
        maskTextClass,
        maskTextSelector,
        skipChild,
        inlineStylesheet,
        maskInputOptions,
        maskTextFn,
        maskInputFn,
        slimDOMOptions,
        dataURLOptions,
        inlineImages,
        recordCanvas,
        preserveWhiteSpace,
        onSerialize,
        onIframeLoad,
        iframeLoadTimeout,
        onStylesheetLoad,
        stylesheetLoadTimeout,
        keepIframeSrcFn
      };
      if (serializedNode.type === NodeType$2.Element && serializedNode.tagName === "textarea" && serializedNode.attributes.value !== void 0) ;
      else {
        for (const childN of Array.from(index$1.childNodes(n2))) {
          const serializedChildNode = serializeNodeWithId(childN, bypassOptions);
          if (serializedChildNode) {
            serializedNode.childNodes.push(serializedChildNode);
          }
        }
      }
      let shadowRootEl = null;
      if (isElement(n2) && (shadowRootEl = index$1.shadowRoot(n2))) {
        for (const childN of Array.from(index$1.childNodes(shadowRootEl))) {
          const serializedChildNode = serializeNodeWithId(childN, bypassOptions);
          if (serializedChildNode) {
            isNativeShadowDom(shadowRootEl) && (serializedChildNode.isShadow = true);
            serializedNode.childNodes.push(serializedChildNode);
          }
        }
      }
    }
    const parent = index$1.parentNode(n2);
    if (parent && isShadowRoot(parent) && isNativeShadowDom(parent)) {
      serializedNode.isShadow = true;
    }
    if (serializedNode.type === NodeType$2.Element && serializedNode.tagName === "iframe") {
      onceIframeLoaded(
        n2,
        () => {
          const iframeDoc = n2.contentDocument;
          if (iframeDoc && onIframeLoad) {
            const serializedIframeNode = serializeNodeWithId(iframeDoc, {
              doc: iframeDoc,
              mirror: mirror2,
              blockClass,
              blockSelector,
              needsMask,
              maskTextClass,
              maskTextSelector,
              skipChild: false,
              inlineStylesheet,
              maskInputOptions,
              maskTextFn,
              maskInputFn,
              slimDOMOptions,
              dataURLOptions,
              inlineImages,
              recordCanvas,
              preserveWhiteSpace,
              onSerialize,
              onIframeLoad,
              iframeLoadTimeout,
              onStylesheetLoad,
              stylesheetLoadTimeout,
              keepIframeSrcFn
            });
            if (serializedIframeNode) {
              onIframeLoad(
                n2,
                serializedIframeNode
              );
            }
          }
        },
        iframeLoadTimeout
      );
    }
    if (serializedNode.type === NodeType$2.Element && serializedNode.tagName === "link" && typeof serializedNode.attributes.rel === "string" && (serializedNode.attributes.rel === "stylesheet" || serializedNode.attributes.rel === "preload" && typeof serializedNode.attributes.href === "string" && extractFileExtension(serializedNode.attributes.href) === "css")) {
      onceStylesheetLoaded(
        n2,
        () => {
          if (onStylesheetLoad) {
            const serializedLinkNode = serializeNodeWithId(n2, {
              doc,
              mirror: mirror2,
              blockClass,
              blockSelector,
              needsMask,
              maskTextClass,
              maskTextSelector,
              skipChild: false,
              inlineStylesheet,
              maskInputOptions,
              maskTextFn,
              maskInputFn,
              slimDOMOptions,
              dataURLOptions,
              inlineImages,
              recordCanvas,
              preserveWhiteSpace,
              onSerialize,
              onIframeLoad,
              iframeLoadTimeout,
              onStylesheetLoad,
              stylesheetLoadTimeout,
              keepIframeSrcFn
            });
            if (serializedLinkNode) {
              onStylesheetLoad(
                n2,
                serializedLinkNode
              );
            }
          }
        },
        stylesheetLoadTimeout
      );
    }
    return serializedNode;
  }
  function snapshot(n2, options2) {
    const {
      mirror: mirror2 = new Mirror(),
      blockClass = "rr-block",
      blockSelector = null,
      maskTextClass = "rr-mask",
      maskTextSelector = null,
      inlineStylesheet = true,
      inlineImages = false,
      recordCanvas = false,
      maskAllInputs = false,
      maskTextFn,
      maskInputFn,
      slimDOM = false,
      dataURLOptions,
      preserveWhiteSpace,
      onSerialize,
      onIframeLoad,
      iframeLoadTimeout,
      onStylesheetLoad,
      stylesheetLoadTimeout,
      keepIframeSrcFn = () => false
    } = options2 || {};
    const maskInputOptions = maskAllInputs === true ? {
      color: true,
      date: true,
      "datetime-local": true,
      email: true,
      month: true,
      number: true,
      range: true,
      search: true,
      tel: true,
      text: true,
      time: true,
      url: true,
      week: true,
      textarea: true,
      select: true,
      password: true
    } : maskAllInputs === false ? {
      password: true
    } : maskAllInputs;
    const slimDOMOptions = slimDOM === true || slimDOM === "all" ? (
      // if true: set of sensible options that should not throw away any information
      {
        script: true,
        comment: true,
        headFavicon: true,
        headWhitespace: true,
        headMetaDescKeywords: slimDOM === "all",
        // destructive
        headMetaSocial: true,
        headMetaRobots: true,
        headMetaHttpEquiv: true,
        headMetaAuthorship: true,
        headMetaVerification: true
      }
    ) : slimDOM === false ? {} : slimDOM;
    return serializeNodeWithId(n2, {
      doc: n2,
      mirror: mirror2,
      blockClass,
      blockSelector,
      maskTextClass,
      maskTextSelector,
      skipChild: false,
      inlineStylesheet,
      maskInputOptions,
      maskTextFn,
      maskInputFn,
      slimDOMOptions,
      dataURLOptions,
      inlineImages,
      recordCanvas,
      preserveWhiteSpace,
      onSerialize,
      onIframeLoad,
      iframeLoadTimeout,
      onStylesheetLoad,
      stylesheetLoadTimeout,
      keepIframeSrcFn,
      newlyAddedElement: false
    });
  }
  function getDefaultExportFromCjs$1(x2) {
    return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
  }
  function getAugmentedNamespace$1(n2) {
    if (n2.__esModule) return n2;
    var f2 = n2.default;
    if (typeof f2 == "function") {
      var a2 = function a22() {
        if (this instanceof a22) {
          return Reflect.construct(f2, arguments, this.constructor);
        }
        return f2.apply(this, arguments);
      };
      a2.prototype = f2.prototype;
    } else a2 = {};
    Object.defineProperty(a2, "__esModule", { value: true });
    Object.keys(n2).forEach(function(k2) {
      var d2 = Object.getOwnPropertyDescriptor(n2, k2);
      Object.defineProperty(a2, k2, d2.get ? d2 : {
        enumerable: true,
        get: function() {
          return n2[k2];
        }
      });
    });
    return a2;
  }
  var picocolors_browser$1 = { exports: {} };
  var x$1 = String;
  var create$1 = function() {
    return { isColorSupported: false, reset: x$1, bold: x$1, dim: x$1, italic: x$1, underline: x$1, inverse: x$1, hidden: x$1, strikethrough: x$1, black: x$1, red: x$1, green: x$1, yellow: x$1, blue: x$1, magenta: x$1, cyan: x$1, white: x$1, gray: x$1, bgBlack: x$1, bgRed: x$1, bgGreen: x$1, bgYellow: x$1, bgBlue: x$1, bgMagenta: x$1, bgCyan: x$1, bgWhite: x$1 };
  };
  picocolors_browser$1.exports = create$1();
  picocolors_browser$1.exports.createColors = create$1;
  var picocolors_browserExports$1 = picocolors_browser$1.exports;
  const __viteBrowserExternal$2 = {};
  const __viteBrowserExternal$1$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    default: __viteBrowserExternal$2
  }, Symbol.toStringTag, { value: "Module" }));
  const require$$2$1 = /* @__PURE__ */ getAugmentedNamespace$1(__viteBrowserExternal$1$1);
  let pico$1 = picocolors_browserExports$1;
  let terminalHighlight$1$1 = require$$2$1;
  let CssSyntaxError$3$1 = class CssSyntaxError extends Error {
    constructor(message, line, column, source, file, plugin22) {
      super(message);
      this.name = "CssSyntaxError";
      this.reason = message;
      if (file) {
        this.file = file;
      }
      if (source) {
        this.source = source;
      }
      if (plugin22) {
        this.plugin = plugin22;
      }
      if (typeof line !== "undefined" && typeof column !== "undefined") {
        if (typeof line === "number") {
          this.line = line;
          this.column = column;
        } else {
          this.line = line.line;
          this.column = line.column;
          this.endLine = column.line;
          this.endColumn = column.column;
        }
      }
      this.setMessage();
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, CssSyntaxError);
      }
    }
    setMessage() {
      this.message = this.plugin ? this.plugin + ": " : "";
      this.message += this.file ? this.file : "<css input>";
      if (typeof this.line !== "undefined") {
        this.message += ":" + this.line + ":" + this.column;
      }
      this.message += ": " + this.reason;
    }
    showSourceCode(color) {
      if (!this.source) return "";
      let css = this.source;
      if (color == null) color = pico$1.isColorSupported;
      if (terminalHighlight$1$1) {
        if (color) css = terminalHighlight$1$1(css);
      }
      let lines = css.split(/\r?\n/);
      let start = Math.max(this.line - 3, 0);
      let end = Math.min(this.line + 2, lines.length);
      let maxWidth = String(end).length;
      let mark, aside;
      if (color) {
        let { bold, gray, red } = pico$1.createColors(true);
        mark = (text) => bold(red(text));
        aside = (text) => gray(text);
      } else {
        mark = aside = (str) => str;
      }
      return lines.slice(start, end).map((line, index2) => {
        let number = start + 1 + index2;
        let gutter = " " + (" " + number).slice(-maxWidth) + " | ";
        if (number === this.line) {
          let spacing = aside(gutter.replace(/\d/g, " ")) + line.slice(0, this.column - 1).replace(/[^\t]/g, " ");
          return mark(">") + aside(gutter) + line + "\n " + spacing + mark("^");
        }
        return " " + aside(gutter) + line;
      }).join("\n");
    }
    toString() {
      let code = this.showSourceCode();
      if (code) {
        code = "\n\n" + code + "\n";
      }
      return this.name + ": " + this.message + code;
    }
  };
  var cssSyntaxError$1 = CssSyntaxError$3$1;
  CssSyntaxError$3$1.default = CssSyntaxError$3$1;
  var symbols$1 = {};
  symbols$1.isClean = Symbol("isClean");
  symbols$1.my = Symbol("my");
  const DEFAULT_RAW$1 = {
    after: "\n",
    beforeClose: "\n",
    beforeComment: "\n",
    beforeDecl: "\n",
    beforeOpen: " ",
    beforeRule: "\n",
    colon: ": ",
    commentLeft: " ",
    commentRight: " ",
    emptyBody: "",
    indent: "    ",
    semicolon: false
  };
  function capitalize$1(str) {
    return str[0].toUpperCase() + str.slice(1);
  }
  let Stringifier$2$1 = class Stringifier {
    constructor(builder) {
      this.builder = builder;
    }
    atrule(node2, semicolon) {
      let name = "@" + node2.name;
      let params = node2.params ? this.rawValue(node2, "params") : "";
      if (typeof node2.raws.afterName !== "undefined") {
        name += node2.raws.afterName;
      } else if (params) {
        name += " ";
      }
      if (node2.nodes) {
        this.block(node2, name + params);
      } else {
        let end = (node2.raws.between || "") + (semicolon ? ";" : "");
        this.builder(name + params + end, node2);
      }
    }
    beforeAfter(node2, detect) {
      let value;
      if (node2.type === "decl") {
        value = this.raw(node2, null, "beforeDecl");
      } else if (node2.type === "comment") {
        value = this.raw(node2, null, "beforeComment");
      } else if (detect === "before") {
        value = this.raw(node2, null, "beforeRule");
      } else {
        value = this.raw(node2, null, "beforeClose");
      }
      let buf = node2.parent;
      let depth = 0;
      while (buf && buf.type !== "root") {
        depth += 1;
        buf = buf.parent;
      }
      if (value.includes("\n")) {
        let indent = this.raw(node2, null, "indent");
        if (indent.length) {
          for (let step = 0; step < depth; step++) value += indent;
        }
      }
      return value;
    }
    block(node2, start) {
      let between = this.raw(node2, "between", "beforeOpen");
      this.builder(start + between + "{", node2, "start");
      let after;
      if (node2.nodes && node2.nodes.length) {
        this.body(node2);
        after = this.raw(node2, "after");
      } else {
        after = this.raw(node2, "after", "emptyBody");
      }
      if (after) this.builder(after);
      this.builder("}", node2, "end");
    }
    body(node2) {
      let last = node2.nodes.length - 1;
      while (last > 0) {
        if (node2.nodes[last].type !== "comment") break;
        last -= 1;
      }
      let semicolon = this.raw(node2, "semicolon");
      for (let i2 = 0; i2 < node2.nodes.length; i2++) {
        let child = node2.nodes[i2];
        let before = this.raw(child, "before");
        if (before) this.builder(before);
        this.stringify(child, last !== i2 || semicolon);
      }
    }
    comment(node2) {
      let left = this.raw(node2, "left", "commentLeft");
      let right = this.raw(node2, "right", "commentRight");
      this.builder("/*" + left + node2.text + right + "*/", node2);
    }
    decl(node2, semicolon) {
      let between = this.raw(node2, "between", "colon");
      let string = node2.prop + between + this.rawValue(node2, "value");
      if (node2.important) {
        string += node2.raws.important || " !important";
      }
      if (semicolon) string += ";";
      this.builder(string, node2);
    }
    document(node2) {
      this.body(node2);
    }
    raw(node2, own, detect) {
      let value;
      if (!detect) detect = own;
      if (own) {
        value = node2.raws[own];
        if (typeof value !== "undefined") return value;
      }
      let parent = node2.parent;
      if (detect === "before") {
        if (!parent || parent.type === "root" && parent.first === node2) {
          return "";
        }
        if (parent && parent.type === "document") {
          return "";
        }
      }
      if (!parent) return DEFAULT_RAW$1[detect];
      let root2 = node2.root();
      if (!root2.rawCache) root2.rawCache = {};
      if (typeof root2.rawCache[detect] !== "undefined") {
        return root2.rawCache[detect];
      }
      if (detect === "before" || detect === "after") {
        return this.beforeAfter(node2, detect);
      } else {
        let method = "raw" + capitalize$1(detect);
        if (this[method]) {
          value = this[method](root2, node2);
        } else {
          root2.walk((i2) => {
            value = i2.raws[own];
            if (typeof value !== "undefined") return false;
          });
        }
      }
      if (typeof value === "undefined") value = DEFAULT_RAW$1[detect];
      root2.rawCache[detect] = value;
      return value;
    }
    rawBeforeClose(root2) {
      let value;
      root2.walk((i2) => {
        if (i2.nodes && i2.nodes.length > 0) {
          if (typeof i2.raws.after !== "undefined") {
            value = i2.raws.after;
            if (value.includes("\n")) {
              value = value.replace(/[^\n]+$/, "");
            }
            return false;
          }
        }
      });
      if (value) value = value.replace(/\S/g, "");
      return value;
    }
    rawBeforeComment(root2, node2) {
      let value;
      root2.walkComments((i2) => {
        if (typeof i2.raws.before !== "undefined") {
          value = i2.raws.before;
          if (value.includes("\n")) {
            value = value.replace(/[^\n]+$/, "");
          }
          return false;
        }
      });
      if (typeof value === "undefined") {
        value = this.raw(node2, null, "beforeDecl");
      } else if (value) {
        value = value.replace(/\S/g, "");
      }
      return value;
    }
    rawBeforeDecl(root2, node2) {
      let value;
      root2.walkDecls((i2) => {
        if (typeof i2.raws.before !== "undefined") {
          value = i2.raws.before;
          if (value.includes("\n")) {
            value = value.replace(/[^\n]+$/, "");
          }
          return false;
        }
      });
      if (typeof value === "undefined") {
        value = this.raw(node2, null, "beforeRule");
      } else if (value) {
        value = value.replace(/\S/g, "");
      }
      return value;
    }
    rawBeforeOpen(root2) {
      let value;
      root2.walk((i2) => {
        if (i2.type !== "decl") {
          value = i2.raws.between;
          if (typeof value !== "undefined") return false;
        }
      });
      return value;
    }
    rawBeforeRule(root2) {
      let value;
      root2.walk((i2) => {
        if (i2.nodes && (i2.parent !== root2 || root2.first !== i2)) {
          if (typeof i2.raws.before !== "undefined") {
            value = i2.raws.before;
            if (value.includes("\n")) {
              value = value.replace(/[^\n]+$/, "");
            }
            return false;
          }
        }
      });
      if (value) value = value.replace(/\S/g, "");
      return value;
    }
    rawColon(root2) {
      let value;
      root2.walkDecls((i2) => {
        if (typeof i2.raws.between !== "undefined") {
          value = i2.raws.between.replace(/[^\s:]/g, "");
          return false;
        }
      });
      return value;
    }
    rawEmptyBody(root2) {
      let value;
      root2.walk((i2) => {
        if (i2.nodes && i2.nodes.length === 0) {
          value = i2.raws.after;
          if (typeof value !== "undefined") return false;
        }
      });
      return value;
    }
    rawIndent(root2) {
      if (root2.raws.indent) return root2.raws.indent;
      let value;
      root2.walk((i2) => {
        let p2 = i2.parent;
        if (p2 && p2 !== root2 && p2.parent && p2.parent === root2) {
          if (typeof i2.raws.before !== "undefined") {
            let parts = i2.raws.before.split("\n");
            value = parts[parts.length - 1];
            value = value.replace(/\S/g, "");
            return false;
          }
        }
      });
      return value;
    }
    rawSemicolon(root2) {
      let value;
      root2.walk((i2) => {
        if (i2.nodes && i2.nodes.length && i2.last.type === "decl") {
          value = i2.raws.semicolon;
          if (typeof value !== "undefined") return false;
        }
      });
      return value;
    }
    rawValue(node2, prop) {
      let value = node2[prop];
      let raw = node2.raws[prop];
      if (raw && raw.value === value) {
        return raw.raw;
      }
      return value;
    }
    root(node2) {
      this.body(node2);
      if (node2.raws.after) this.builder(node2.raws.after);
    }
    rule(node2) {
      this.block(node2, this.rawValue(node2, "selector"));
      if (node2.raws.ownSemicolon) {
        this.builder(node2.raws.ownSemicolon, node2, "end");
      }
    }
    stringify(node2, semicolon) {
      if (!this[node2.type]) {
        throw new Error(
          "Unknown AST node type " + node2.type + ". Maybe you need to change PostCSS stringifier."
        );
      }
      this[node2.type](node2, semicolon);
    }
  };
  var stringifier$1 = Stringifier$2$1;
  Stringifier$2$1.default = Stringifier$2$1;
  let Stringifier$1$1 = stringifier$1;
  function stringify$4$1(node2, builder) {
    let str = new Stringifier$1$1(builder);
    str.stringify(node2);
  }
  var stringify_1$1 = stringify$4$1;
  stringify$4$1.default = stringify$4$1;
  let { isClean: isClean$2$1, my: my$2$1 } = symbols$1;
  let CssSyntaxError$2$1 = cssSyntaxError$1;
  let Stringifier2$1 = stringifier$1;
  let stringify$3$1 = stringify_1$1;
  function cloneNode$1(obj, parent) {
    let cloned = new obj.constructor();
    for (let i2 in obj) {
      if (!Object.prototype.hasOwnProperty.call(obj, i2)) {
        continue;
      }
      if (i2 === "proxyCache") continue;
      let value = obj[i2];
      let type = typeof value;
      if (i2 === "parent" && type === "object") {
        if (parent) cloned[i2] = parent;
      } else if (i2 === "source") {
        cloned[i2] = value;
      } else if (Array.isArray(value)) {
        cloned[i2] = value.map((j2) => cloneNode$1(j2, cloned));
      } else {
        if (type === "object" && value !== null) value = cloneNode$1(value);
        cloned[i2] = value;
      }
    }
    return cloned;
  }
  let Node$4$1 = class Node2 {
    constructor(defaults = {}) {
      this.raws = {};
      this[isClean$2$1] = false;
      this[my$2$1] = true;
      for (let name in defaults) {
        if (name === "nodes") {
          this.nodes = [];
          for (let node2 of defaults[name]) {
            if (typeof node2.clone === "function") {
              this.append(node2.clone());
            } else {
              this.append(node2);
            }
          }
        } else {
          this[name] = defaults[name];
        }
      }
    }
    addToError(error) {
      error.postcssNode = this;
      if (error.stack && this.source && /\n\s{4}at /.test(error.stack)) {
        let s2 = this.source;
        error.stack = error.stack.replace(
          /\n\s{4}at /,
          `$&${s2.input.from}:${s2.start.line}:${s2.start.column}$&`
        );
      }
      return error;
    }
    after(add) {
      this.parent.insertAfter(this, add);
      return this;
    }
    assign(overrides = {}) {
      for (let name in overrides) {
        this[name] = overrides[name];
      }
      return this;
    }
    before(add) {
      this.parent.insertBefore(this, add);
      return this;
    }
    cleanRaws(keepBetween) {
      delete this.raws.before;
      delete this.raws.after;
      if (!keepBetween) delete this.raws.between;
    }
    clone(overrides = {}) {
      let cloned = cloneNode$1(this);
      for (let name in overrides) {
        cloned[name] = overrides[name];
      }
      return cloned;
    }
    cloneAfter(overrides = {}) {
      let cloned = this.clone(overrides);
      this.parent.insertAfter(this, cloned);
      return cloned;
    }
    cloneBefore(overrides = {}) {
      let cloned = this.clone(overrides);
      this.parent.insertBefore(this, cloned);
      return cloned;
    }
    error(message, opts = {}) {
      if (this.source) {
        let { end, start } = this.rangeBy(opts);
        return this.source.input.error(
          message,
          { column: start.column, line: start.line },
          { column: end.column, line: end.line },
          opts
        );
      }
      return new CssSyntaxError$2$1(message);
    }
    getProxyProcessor() {
      return {
        get(node2, prop) {
          if (prop === "proxyOf") {
            return node2;
          } else if (prop === "root") {
            return () => node2.root().toProxy();
          } else {
            return node2[prop];
          }
        },
        set(node2, prop, value) {
          if (node2[prop] === value) return true;
          node2[prop] = value;
          if (prop === "prop" || prop === "value" || prop === "name" || prop === "params" || prop === "important" || /* c8 ignore next */
          prop === "text") {
            node2.markDirty();
          }
          return true;
        }
      };
    }
    markDirty() {
      if (this[isClean$2$1]) {
        this[isClean$2$1] = false;
        let next = this;
        while (next = next.parent) {
          next[isClean$2$1] = false;
        }
      }
    }
    next() {
      if (!this.parent) return void 0;
      let index2 = this.parent.index(this);
      return this.parent.nodes[index2 + 1];
    }
    positionBy(opts, stringRepresentation) {
      let pos = this.source.start;
      if (opts.index) {
        pos = this.positionInside(opts.index, stringRepresentation);
      } else if (opts.word) {
        stringRepresentation = this.toString();
        let index2 = stringRepresentation.indexOf(opts.word);
        if (index2 !== -1) pos = this.positionInside(index2, stringRepresentation);
      }
      return pos;
    }
    positionInside(index2, stringRepresentation) {
      let string = stringRepresentation || this.toString();
      let column = this.source.start.column;
      let line = this.source.start.line;
      for (let i2 = 0; i2 < index2; i2++) {
        if (string[i2] === "\n") {
          column = 1;
          line += 1;
        } else {
          column += 1;
        }
      }
      return { column, line };
    }
    prev() {
      if (!this.parent) return void 0;
      let index2 = this.parent.index(this);
      return this.parent.nodes[index2 - 1];
    }
    rangeBy(opts) {
      let start = {
        column: this.source.start.column,
        line: this.source.start.line
      };
      let end = this.source.end ? {
        column: this.source.end.column + 1,
        line: this.source.end.line
      } : {
        column: start.column + 1,
        line: start.line
      };
      if (opts.word) {
        let stringRepresentation = this.toString();
        let index2 = stringRepresentation.indexOf(opts.word);
        if (index2 !== -1) {
          start = this.positionInside(index2, stringRepresentation);
          end = this.positionInside(index2 + opts.word.length, stringRepresentation);
        }
      } else {
        if (opts.start) {
          start = {
            column: opts.start.column,
            line: opts.start.line
          };
        } else if (opts.index) {
          start = this.positionInside(opts.index);
        }
        if (opts.end) {
          end = {
            column: opts.end.column,
            line: opts.end.line
          };
        } else if (typeof opts.endIndex === "number") {
          end = this.positionInside(opts.endIndex);
        } else if (opts.index) {
          end = this.positionInside(opts.index + 1);
        }
      }
      if (end.line < start.line || end.line === start.line && end.column <= start.column) {
        end = { column: start.column + 1, line: start.line };
      }
      return { end, start };
    }
    raw(prop, defaultType) {
      let str = new Stringifier2$1();
      return str.raw(this, prop, defaultType);
    }
    remove() {
      if (this.parent) {
        this.parent.removeChild(this);
      }
      this.parent = void 0;
      return this;
    }
    replaceWith(...nodes) {
      if (this.parent) {
        let bookmark = this;
        let foundSelf = false;
        for (let node2 of nodes) {
          if (node2 === this) {
            foundSelf = true;
          } else if (foundSelf) {
            this.parent.insertAfter(bookmark, node2);
            bookmark = node2;
          } else {
            this.parent.insertBefore(bookmark, node2);
          }
        }
        if (!foundSelf) {
          this.remove();
        }
      }
      return this;
    }
    root() {
      let result2 = this;
      while (result2.parent && result2.parent.type !== "document") {
        result2 = result2.parent;
      }
      return result2;
    }
    toJSON(_2, inputs) {
      let fixed = {};
      let emitInputs = inputs == null;
      inputs = inputs || /* @__PURE__ */ new Map();
      let inputsNextIndex = 0;
      for (let name in this) {
        if (!Object.prototype.hasOwnProperty.call(this, name)) {
          continue;
        }
        if (name === "parent" || name === "proxyCache") continue;
        let value = this[name];
        if (Array.isArray(value)) {
          fixed[name] = value.map((i2) => {
            if (typeof i2 === "object" && i2.toJSON) {
              return i2.toJSON(null, inputs);
            } else {
              return i2;
            }
          });
        } else if (typeof value === "object" && value.toJSON) {
          fixed[name] = value.toJSON(null, inputs);
        } else if (name === "source") {
          let inputId = inputs.get(value.input);
          if (inputId == null) {
            inputId = inputsNextIndex;
            inputs.set(value.input, inputsNextIndex);
            inputsNextIndex++;
          }
          fixed[name] = {
            end: value.end,
            inputId,
            start: value.start
          };
        } else {
          fixed[name] = value;
        }
      }
      if (emitInputs) {
        fixed.inputs = [...inputs.keys()].map((input2) => input2.toJSON());
      }
      return fixed;
    }
    toProxy() {
      if (!this.proxyCache) {
        this.proxyCache = new Proxy(this, this.getProxyProcessor());
      }
      return this.proxyCache;
    }
    toString(stringifier2 = stringify$3$1) {
      if (stringifier2.stringify) stringifier2 = stringifier2.stringify;
      let result2 = "";
      stringifier2(this, (i2) => {
        result2 += i2;
      });
      return result2;
    }
    warn(result2, text, opts) {
      let data = { node: this };
      for (let i2 in opts) data[i2] = opts[i2];
      return result2.warn(text, data);
    }
    get proxyOf() {
      return this;
    }
  };
  var node$1 = Node$4$1;
  Node$4$1.default = Node$4$1;
  let Node$3$1 = node$1;
  let Declaration$4$1 = class Declaration extends Node$3$1 {
    constructor(defaults) {
      if (defaults && typeof defaults.value !== "undefined" && typeof defaults.value !== "string") {
        defaults = { ...defaults, value: String(defaults.value) };
      }
      super(defaults);
      this.type = "decl";
    }
    get variable() {
      return this.prop.startsWith("--") || this.prop[0] === "$";
    }
  };
  var declaration$1 = Declaration$4$1;
  Declaration$4$1.default = Declaration$4$1;
  let urlAlphabet$1 = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
  let customAlphabet$1 = (alphabet, defaultSize = 21) => {
    return (size = defaultSize) => {
      let id = "";
      let i2 = size;
      while (i2--) {
        id += alphabet[Math.random() * alphabet.length | 0];
      }
      return id;
    };
  };
  let nanoid$1$1 = (size = 21) => {
    let id = "";
    let i2 = size;
    while (i2--) {
      id += urlAlphabet$1[Math.random() * 64 | 0];
    }
    return id;
  };
  var nonSecure$1 = { nanoid: nanoid$1$1, customAlphabet: customAlphabet$1 };
  let { SourceMapConsumer: SourceMapConsumer$2$1, SourceMapGenerator: SourceMapGenerator$2$1 } = require$$2$1;
  let { existsSync: existsSync$1, readFileSync: readFileSync$1 } = require$$2$1;
  let { dirname: dirname$1$1, join: join$1 } = require$$2$1;
  function fromBase64$1(str) {
    if (Buffer) {
      return Buffer.from(str, "base64").toString();
    } else {
      return window.atob(str);
    }
  }
  let PreviousMap$2$1 = class PreviousMap {
    constructor(css, opts) {
      if (opts.map === false) return;
      this.loadAnnotation(css);
      this.inline = this.startWith(this.annotation, "data:");
      let prev = opts.map ? opts.map.prev : void 0;
      let text = this.loadMap(opts.from, prev);
      if (!this.mapFile && opts.from) {
        this.mapFile = opts.from;
      }
      if (this.mapFile) this.root = dirname$1$1(this.mapFile);
      if (text) this.text = text;
    }
    consumer() {
      if (!this.consumerCache) {
        this.consumerCache = new SourceMapConsumer$2$1(this.text);
      }
      return this.consumerCache;
    }
    decodeInline(text) {
      let baseCharsetUri = /^data:application\/json;charset=utf-?8;base64,/;
      let baseUri = /^data:application\/json;base64,/;
      let charsetUri = /^data:application\/json;charset=utf-?8,/;
      let uri = /^data:application\/json,/;
      if (charsetUri.test(text) || uri.test(text)) {
        return decodeURIComponent(text.substr(RegExp.lastMatch.length));
      }
      if (baseCharsetUri.test(text) || baseUri.test(text)) {
        return fromBase64$1(text.substr(RegExp.lastMatch.length));
      }
      let encoding = text.match(/data:application\/json;([^,]+),/)[1];
      throw new Error("Unsupported source map encoding " + encoding);
    }
    getAnnotationURL(sourceMapString) {
      return sourceMapString.replace(/^\/\*\s*# sourceMappingURL=/, "").trim();
    }
    isMap(map) {
      if (typeof map !== "object") return false;
      return typeof map.mappings === "string" || typeof map._mappings === "string" || Array.isArray(map.sections);
    }
    loadAnnotation(css) {
      let comments = css.match(/\/\*\s*# sourceMappingURL=/gm);
      if (!comments) return;
      let start = css.lastIndexOf(comments.pop());
      let end = css.indexOf("*/", start);
      if (start > -1 && end > -1) {
        this.annotation = this.getAnnotationURL(css.substring(start, end));
      }
    }
    loadFile(path) {
      this.root = dirname$1$1(path);
      if (existsSync$1(path)) {
        this.mapFile = path;
        return readFileSync$1(path, "utf-8").toString().trim();
      }
    }
    loadMap(file, prev) {
      if (prev === false) return false;
      if (prev) {
        if (typeof prev === "string") {
          return prev;
        } else if (typeof prev === "function") {
          let prevPath = prev(file);
          if (prevPath) {
            let map = this.loadFile(prevPath);
            if (!map) {
              throw new Error(
                "Unable to load previous source map: " + prevPath.toString()
              );
            }
            return map;
          }
        } else if (prev instanceof SourceMapConsumer$2$1) {
          return SourceMapGenerator$2$1.fromSourceMap(prev).toString();
        } else if (prev instanceof SourceMapGenerator$2$1) {
          return prev.toString();
        } else if (this.isMap(prev)) {
          return JSON.stringify(prev);
        } else {
          throw new Error(
            "Unsupported previous source map format: " + prev.toString()
          );
        }
      } else if (this.inline) {
        return this.decodeInline(this.annotation);
      } else if (this.annotation) {
        let map = this.annotation;
        if (file) map = join$1(dirname$1$1(file), map);
        return this.loadFile(map);
      }
    }
    startWith(string, start) {
      if (!string) return false;
      return string.substr(0, start.length) === start;
    }
    withContent() {
      return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0);
    }
  };
  var previousMap$1 = PreviousMap$2$1;
  PreviousMap$2$1.default = PreviousMap$2$1;
  let { SourceMapConsumer: SourceMapConsumer$1$1, SourceMapGenerator: SourceMapGenerator$1$1 } = require$$2$1;
  let { fileURLToPath: fileURLToPath$1, pathToFileURL: pathToFileURL$1$1 } = require$$2$1;
  let { isAbsolute: isAbsolute$1, resolve: resolve$1$1 } = require$$2$1;
  let { nanoid: nanoid$2 } = nonSecure$1;
  let terminalHighlight$2 = require$$2$1;
  let CssSyntaxError$1$1 = cssSyntaxError$1;
  let PreviousMap$1$1 = previousMap$1;
  let fromOffsetCache$1 = Symbol("fromOffsetCache");
  let sourceMapAvailable$1$1 = Boolean(SourceMapConsumer$1$1 && SourceMapGenerator$1$1);
  let pathAvailable$1$1 = Boolean(resolve$1$1 && isAbsolute$1);
  let Input$4$1 = class Input {
    constructor(css, opts = {}) {
      if (css === null || typeof css === "undefined" || typeof css === "object" && !css.toString) {
        throw new Error(`PostCSS received ${css} instead of CSS string`);
      }
      this.css = css.toString();
      if (this.css[0] === "\uFEFF" || this.css[0] === "￾") {
        this.hasBOM = true;
        this.css = this.css.slice(1);
      } else {
        this.hasBOM = false;
      }
      if (opts.from) {
        if (!pathAvailable$1$1 || /^\w+:\/\//.test(opts.from) || isAbsolute$1(opts.from)) {
          this.file = opts.from;
        } else {
          this.file = resolve$1$1(opts.from);
        }
      }
      if (pathAvailable$1$1 && sourceMapAvailable$1$1) {
        let map = new PreviousMap$1$1(this.css, opts);
        if (map.text) {
          this.map = map;
          let file = map.consumer().file;
          if (!this.file && file) this.file = this.mapResolve(file);
        }
      }
      if (!this.file) {
        this.id = "<input css " + nanoid$2(6) + ">";
      }
      if (this.map) this.map.file = this.from;
    }
    error(message, line, column, opts = {}) {
      let result2, endLine, endColumn;
      if (line && typeof line === "object") {
        let start = line;
        let end = column;
        if (typeof start.offset === "number") {
          let pos = this.fromOffset(start.offset);
          line = pos.line;
          column = pos.col;
        } else {
          line = start.line;
          column = start.column;
        }
        if (typeof end.offset === "number") {
          let pos = this.fromOffset(end.offset);
          endLine = pos.line;
          endColumn = pos.col;
        } else {
          endLine = end.line;
          endColumn = end.column;
        }
      } else if (!column) {
        let pos = this.fromOffset(line);
        line = pos.line;
        column = pos.col;
      }
      let origin = this.origin(line, column, endLine, endColumn);
      if (origin) {
        result2 = new CssSyntaxError$1$1(
          message,
          origin.endLine === void 0 ? origin.line : { column: origin.column, line: origin.line },
          origin.endLine === void 0 ? origin.column : { column: origin.endColumn, line: origin.endLine },
          origin.source,
          origin.file,
          opts.plugin
        );
      } else {
        result2 = new CssSyntaxError$1$1(
          message,
          endLine === void 0 ? line : { column, line },
          endLine === void 0 ? column : { column: endColumn, line: endLine },
          this.css,
          this.file,
          opts.plugin
        );
      }
      result2.input = { column, endColumn, endLine, line, source: this.css };
      if (this.file) {
        if (pathToFileURL$1$1) {
          result2.input.url = pathToFileURL$1$1(this.file).toString();
        }
        result2.input.file = this.file;
      }
      return result2;
    }
    fromOffset(offset) {
      let lastLine, lineToIndex;
      if (!this[fromOffsetCache$1]) {
        let lines = this.css.split("\n");
        lineToIndex = new Array(lines.length);
        let prevIndex = 0;
        for (let i2 = 0, l2 = lines.length; i2 < l2; i2++) {
          lineToIndex[i2] = prevIndex;
          prevIndex += lines[i2].length + 1;
        }
        this[fromOffsetCache$1] = lineToIndex;
      } else {
        lineToIndex = this[fromOffsetCache$1];
      }
      lastLine = lineToIndex[lineToIndex.length - 1];
      let min = 0;
      if (offset >= lastLine) {
        min = lineToIndex.length - 1;
      } else {
        let max = lineToIndex.length - 2;
        let mid;
        while (min < max) {
          mid = min + (max - min >> 1);
          if (offset < lineToIndex[mid]) {
            max = mid - 1;
          } else if (offset >= lineToIndex[mid + 1]) {
            min = mid + 1;
          } else {
            min = mid;
            break;
          }
        }
      }
      return {
        col: offset - lineToIndex[min] + 1,
        line: min + 1
      };
    }
    mapResolve(file) {
      if (/^\w+:\/\//.test(file)) {
        return file;
      }
      return resolve$1$1(this.map.consumer().sourceRoot || this.map.root || ".", file);
    }
    origin(line, column, endLine, endColumn) {
      if (!this.map) return false;
      let consumer = this.map.consumer();
      let from = consumer.originalPositionFor({ column, line });
      if (!from.source) return false;
      let to;
      if (typeof endLine === "number") {
        to = consumer.originalPositionFor({ column: endColumn, line: endLine });
      }
      let fromUrl;
      if (isAbsolute$1(from.source)) {
        fromUrl = pathToFileURL$1$1(from.source);
      } else {
        fromUrl = new URL(
          from.source,
          this.map.consumer().sourceRoot || pathToFileURL$1$1(this.map.mapFile)
        );
      }
      let result2 = {
        column: from.column,
        endColumn: to && to.column,
        endLine: to && to.line,
        line: from.line,
        url: fromUrl.toString()
      };
      if (fromUrl.protocol === "file:") {
        if (fileURLToPath$1) {
          result2.file = fileURLToPath$1(fromUrl);
        } else {
          throw new Error(`file: protocol is not available in this PostCSS build`);
        }
      }
      let source = consumer.sourceContentFor(from.source);
      if (source) result2.source = source;
      return result2;
    }
    toJSON() {
      let json = {};
      for (let name of ["hasBOM", "css", "file", "id"]) {
        if (this[name] != null) {
          json[name] = this[name];
        }
      }
      if (this.map) {
        json.map = { ...this.map };
        if (json.map.consumerCache) {
          json.map.consumerCache = void 0;
        }
      }
      return json;
    }
    get from() {
      return this.file || this.id;
    }
  };
  var input$1 = Input$4$1;
  Input$4$1.default = Input$4$1;
  if (terminalHighlight$2 && terminalHighlight$2.registerInput) {
    terminalHighlight$2.registerInput(Input$4$1);
  }
  let { SourceMapConsumer: SourceMapConsumer$3, SourceMapGenerator: SourceMapGenerator$3 } = require$$2$1;
  let { dirname: dirname$2, relative: relative$1, resolve: resolve$2, sep: sep$1 } = require$$2$1;
  let { pathToFileURL: pathToFileURL$2 } = require$$2$1;
  let Input$3$1 = input$1;
  let sourceMapAvailable$2 = Boolean(SourceMapConsumer$3 && SourceMapGenerator$3);
  let pathAvailable$2 = Boolean(dirname$2 && resolve$2 && relative$1 && sep$1);
  let MapGenerator$2$1 = class MapGenerator {
    constructor(stringify2, root2, opts, cssString) {
      this.stringify = stringify2;
      this.mapOpts = opts.map || {};
      this.root = root2;
      this.opts = opts;
      this.css = cssString;
      this.originalCSS = cssString;
      this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute;
      this.memoizedFileURLs = /* @__PURE__ */ new Map();
      this.memoizedPaths = /* @__PURE__ */ new Map();
      this.memoizedURLs = /* @__PURE__ */ new Map();
    }
    addAnnotation() {
      let content;
      if (this.isInline()) {
        content = "data:application/json;base64," + this.toBase64(this.map.toString());
      } else if (typeof this.mapOpts.annotation === "string") {
        content = this.mapOpts.annotation;
      } else if (typeof this.mapOpts.annotation === "function") {
        content = this.mapOpts.annotation(this.opts.to, this.root);
      } else {
        content = this.outputFile() + ".map";
      }
      let eol = "\n";
      if (this.css.includes("\r\n")) eol = "\r\n";
      this.css += eol + "/*# sourceMappingURL=" + content + " */";
    }
    applyPrevMaps() {
      for (let prev of this.previous()) {
        let from = this.toUrl(this.path(prev.file));
        let root2 = prev.root || dirname$2(prev.file);
        let map;
        if (this.mapOpts.sourcesContent === false) {
          map = new SourceMapConsumer$3(prev.text);
          if (map.sourcesContent) {
            map.sourcesContent = null;
          }
        } else {
          map = prev.consumer();
        }
        this.map.applySourceMap(map, from, this.toUrl(this.path(root2)));
      }
    }
    clearAnnotation() {
      if (this.mapOpts.annotation === false) return;
      if (this.root) {
        let node2;
        for (let i2 = this.root.nodes.length - 1; i2 >= 0; i2--) {
          node2 = this.root.nodes[i2];
          if (node2.type !== "comment") continue;
          if (node2.text.indexOf("# sourceMappingURL=") === 0) {
            this.root.removeChild(i2);
          }
        }
      } else if (this.css) {
        this.css = this.css.replace(/\n*?\/\*#[\S\s]*?\*\/$/gm, "");
      }
    }
    generate() {
      this.clearAnnotation();
      if (pathAvailable$2 && sourceMapAvailable$2 && this.isMap()) {
        return this.generateMap();
      } else {
        let result2 = "";
        this.stringify(this.root, (i2) => {
          result2 += i2;
        });
        return [result2];
      }
    }
    generateMap() {
      if (this.root) {
        this.generateString();
      } else if (this.previous().length === 1) {
        let prev = this.previous()[0].consumer();
        prev.file = this.outputFile();
        this.map = SourceMapGenerator$3.fromSourceMap(prev, {
          ignoreInvalidMapping: true
        });
      } else {
        this.map = new SourceMapGenerator$3({
          file: this.outputFile(),
          ignoreInvalidMapping: true
        });
        this.map.addMapping({
          generated: { column: 0, line: 1 },
          original: { column: 0, line: 1 },
          source: this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>"
        });
      }
      if (this.isSourcesContent()) this.setSourcesContent();
      if (this.root && this.previous().length > 0) this.applyPrevMaps();
      if (this.isAnnotation()) this.addAnnotation();
      if (this.isInline()) {
        return [this.css];
      } else {
        return [this.css, this.map];
      }
    }
    generateString() {
      this.css = "";
      this.map = new SourceMapGenerator$3({
        file: this.outputFile(),
        ignoreInvalidMapping: true
      });
      let line = 1;
      let column = 1;
      let noSource = "<no source>";
      let mapping = {
        generated: { column: 0, line: 0 },
        original: { column: 0, line: 0 },
        source: ""
      };
      let lines, last;
      this.stringify(this.root, (str, node2, type) => {
        this.css += str;
        if (node2 && type !== "end") {
          mapping.generated.line = line;
          mapping.generated.column = column - 1;
          if (node2.source && node2.source.start) {
            mapping.source = this.sourcePath(node2);
            mapping.original.line = node2.source.start.line;
            mapping.original.column = node2.source.start.column - 1;
            this.map.addMapping(mapping);
          } else {
            mapping.source = noSource;
            mapping.original.line = 1;
            mapping.original.column = 0;
            this.map.addMapping(mapping);
          }
        }
        lines = str.match(/\n/g);
        if (lines) {
          line += lines.length;
          last = str.lastIndexOf("\n");
          column = str.length - last;
        } else {
          column += str.length;
        }
        if (node2 && type !== "start") {
          let p2 = node2.parent || { raws: {} };
          let childless = node2.type === "decl" || node2.type === "atrule" && !node2.nodes;
          if (!childless || node2 !== p2.last || p2.raws.semicolon) {
            if (node2.source && node2.source.end) {
              mapping.source = this.sourcePath(node2);
              mapping.original.line = node2.source.end.line;
              mapping.original.column = node2.source.end.column - 1;
              mapping.generated.line = line;
              mapping.generated.column = column - 2;
              this.map.addMapping(mapping);
            } else {
              mapping.source = noSource;
              mapping.original.line = 1;
              mapping.original.column = 0;
              mapping.generated.line = line;
              mapping.generated.column = column - 1;
              this.map.addMapping(mapping);
            }
          }
        }
      });
    }
    isAnnotation() {
      if (this.isInline()) {
        return true;
      }
      if (typeof this.mapOpts.annotation !== "undefined") {
        return this.mapOpts.annotation;
      }
      if (this.previous().length) {
        return this.previous().some((i2) => i2.annotation);
      }
      return true;
    }
    isInline() {
      if (typeof this.mapOpts.inline !== "undefined") {
        return this.mapOpts.inline;
      }
      let annotation = this.mapOpts.annotation;
      if (typeof annotation !== "undefined" && annotation !== true) {
        return false;
      }
      if (this.previous().length) {
        return this.previous().some((i2) => i2.inline);
      }
      return true;
    }
    isMap() {
      if (typeof this.opts.map !== "undefined") {
        return !!this.opts.map;
      }
      return this.previous().length > 0;
    }
    isSourcesContent() {
      if (typeof this.mapOpts.sourcesContent !== "undefined") {
        return this.mapOpts.sourcesContent;
      }
      if (this.previous().length) {
        return this.previous().some((i2) => i2.withContent());
      }
      return true;
    }
    outputFile() {
      if (this.opts.to) {
        return this.path(this.opts.to);
      } else if (this.opts.from) {
        return this.path(this.opts.from);
      } else {
        return "to.css";
      }
    }
    path(file) {
      if (this.mapOpts.absolute) return file;
      if (file.charCodeAt(0) === 60) return file;
      if (/^\w+:\/\//.test(file)) return file;
      let cached = this.memoizedPaths.get(file);
      if (cached) return cached;
      let from = this.opts.to ? dirname$2(this.opts.to) : ".";
      if (typeof this.mapOpts.annotation === "string") {
        from = dirname$2(resolve$2(from, this.mapOpts.annotation));
      }
      let path = relative$1(from, file);
      this.memoizedPaths.set(file, path);
      return path;
    }
    previous() {
      if (!this.previousMaps) {
        this.previousMaps = [];
        if (this.root) {
          this.root.walk((node2) => {
            if (node2.source && node2.source.input.map) {
              let map = node2.source.input.map;
              if (!this.previousMaps.includes(map)) {
                this.previousMaps.push(map);
              }
            }
          });
        } else {
          let input2 = new Input$3$1(this.originalCSS, this.opts);
          if (input2.map) this.previousMaps.push(input2.map);
        }
      }
      return this.previousMaps;
    }
    setSourcesContent() {
      let already = {};
      if (this.root) {
        this.root.walk((node2) => {
          if (node2.source) {
            let from = node2.source.input.from;
            if (from && !already[from]) {
              already[from] = true;
              let fromUrl = this.usesFileUrls ? this.toFileUrl(from) : this.toUrl(this.path(from));
              this.map.setSourceContent(fromUrl, node2.source.input.css);
            }
          }
        });
      } else if (this.css) {
        let from = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
        this.map.setSourceContent(from, this.css);
      }
    }
    sourcePath(node2) {
      if (this.mapOpts.from) {
        return this.toUrl(this.mapOpts.from);
      } else if (this.usesFileUrls) {
        return this.toFileUrl(node2.source.input.from);
      } else {
        return this.toUrl(this.path(node2.source.input.from));
      }
    }
    toBase64(str) {
      if (Buffer) {
        return Buffer.from(str).toString("base64");
      } else {
        return window.btoa(unescape(encodeURIComponent(str)));
      }
    }
    toFileUrl(path) {
      let cached = this.memoizedFileURLs.get(path);
      if (cached) return cached;
      if (pathToFileURL$2) {
        let fileURL = pathToFileURL$2(path).toString();
        this.memoizedFileURLs.set(path, fileURL);
        return fileURL;
      } else {
        throw new Error(
          "`map.absolute` option is not available in this PostCSS build"
        );
      }
    }
    toUrl(path) {
      let cached = this.memoizedURLs.get(path);
      if (cached) return cached;
      if (sep$1 === "\\") {
        path = path.replace(/\\/g, "/");
      }
      let url = encodeURI(path).replace(/[#?]/g, encodeURIComponent);
      this.memoizedURLs.set(path, url);
      return url;
    }
  };
  var mapGenerator$1 = MapGenerator$2$1;
  let Node$2$1 = node$1;
  let Comment$4$1 = class Comment extends Node$2$1 {
    constructor(defaults) {
      super(defaults);
      this.type = "comment";
    }
  };
  var comment$1 = Comment$4$1;
  Comment$4$1.default = Comment$4$1;
  let { isClean: isClean$1$1, my: my$1$1 } = symbols$1;
  let Declaration$3$1 = declaration$1;
  let Comment$3$1 = comment$1;
  let Node$1$1 = node$1;
  let parse$4$1, Rule$4$1, AtRule$4$1, Root$6$1;
  function cleanSource$1(nodes) {
    return nodes.map((i2) => {
      if (i2.nodes) i2.nodes = cleanSource$1(i2.nodes);
      delete i2.source;
      return i2;
    });
  }
  function markDirtyUp$1(node2) {
    node2[isClean$1$1] = false;
    if (node2.proxyOf.nodes) {
      for (let i2 of node2.proxyOf.nodes) {
        markDirtyUp$1(i2);
      }
    }
  }
  let Container$7$1 = class Container extends Node$1$1 {
    append(...children) {
      for (let child of children) {
        let nodes = this.normalize(child, this.last);
        for (let node2 of nodes) this.proxyOf.nodes.push(node2);
      }
      this.markDirty();
      return this;
    }
    cleanRaws(keepBetween) {
      super.cleanRaws(keepBetween);
      if (this.nodes) {
        for (let node2 of this.nodes) node2.cleanRaws(keepBetween);
      }
    }
    each(callback) {
      if (!this.proxyOf.nodes) return void 0;
      let iterator = this.getIterator();
      let index2, result2;
      while (this.indexes[iterator] < this.proxyOf.nodes.length) {
        index2 = this.indexes[iterator];
        result2 = callback(this.proxyOf.nodes[index2], index2);
        if (result2 === false) break;
        this.indexes[iterator] += 1;
      }
      delete this.indexes[iterator];
      return result2;
    }
    every(condition) {
      return this.nodes.every(condition);
    }
    getIterator() {
      if (!this.lastEach) this.lastEach = 0;
      if (!this.indexes) this.indexes = {};
      this.lastEach += 1;
      let iterator = this.lastEach;
      this.indexes[iterator] = 0;
      return iterator;
    }
    getProxyProcessor() {
      return {
        get(node2, prop) {
          if (prop === "proxyOf") {
            return node2;
          } else if (!node2[prop]) {
            return node2[prop];
          } else if (prop === "each" || typeof prop === "string" && prop.startsWith("walk")) {
            return (...args) => {
              return node2[prop](
                ...args.map((i2) => {
                  if (typeof i2 === "function") {
                    return (child, index2) => i2(child.toProxy(), index2);
                  } else {
                    return i2;
                  }
                })
              );
            };
          } else if (prop === "every" || prop === "some") {
            return (cb) => {
              return node2[prop](
                (child, ...other) => cb(child.toProxy(), ...other)
              );
            };
          } else if (prop === "root") {
            return () => node2.root().toProxy();
          } else if (prop === "nodes") {
            return node2.nodes.map((i2) => i2.toProxy());
          } else if (prop === "first" || prop === "last") {
            return node2[prop].toProxy();
          } else {
            return node2[prop];
          }
        },
        set(node2, prop, value) {
          if (node2[prop] === value) return true;
          node2[prop] = value;
          if (prop === "name" || prop === "params" || prop === "selector") {
            node2.markDirty();
          }
          return true;
        }
      };
    }
    index(child) {
      if (typeof child === "number") return child;
      if (child.proxyOf) child = child.proxyOf;
      return this.proxyOf.nodes.indexOf(child);
    }
    insertAfter(exist, add) {
      let existIndex = this.index(exist);
      let nodes = this.normalize(add, this.proxyOf.nodes[existIndex]).reverse();
      existIndex = this.index(exist);
      for (let node2 of nodes) this.proxyOf.nodes.splice(existIndex + 1, 0, node2);
      let index2;
      for (let id in this.indexes) {
        index2 = this.indexes[id];
        if (existIndex < index2) {
          this.indexes[id] = index2 + nodes.length;
        }
      }
      this.markDirty();
      return this;
    }
    insertBefore(exist, add) {
      let existIndex = this.index(exist);
      let type = existIndex === 0 ? "prepend" : false;
      let nodes = this.normalize(add, this.proxyOf.nodes[existIndex], type).reverse();
      existIndex = this.index(exist);
      for (let node2 of nodes) this.proxyOf.nodes.splice(existIndex, 0, node2);
      let index2;
      for (let id in this.indexes) {
        index2 = this.indexes[id];
        if (existIndex <= index2) {
          this.indexes[id] = index2 + nodes.length;
        }
      }
      this.markDirty();
      return this;
    }
    normalize(nodes, sample) {
      if (typeof nodes === "string") {
        nodes = cleanSource$1(parse$4$1(nodes).nodes);
      } else if (typeof nodes === "undefined") {
        nodes = [];
      } else if (Array.isArray(nodes)) {
        nodes = nodes.slice(0);
        for (let i2 of nodes) {
          if (i2.parent) i2.parent.removeChild(i2, "ignore");
        }
      } else if (nodes.type === "root" && this.type !== "document") {
        nodes = nodes.nodes.slice(0);
        for (let i2 of nodes) {
          if (i2.parent) i2.parent.removeChild(i2, "ignore");
        }
      } else if (nodes.type) {
        nodes = [nodes];
      } else if (nodes.prop) {
        if (typeof nodes.value === "undefined") {
          throw new Error("Value field is missed in node creation");
        } else if (typeof nodes.value !== "string") {
          nodes.value = String(nodes.value);
        }
        nodes = [new Declaration$3$1(nodes)];
      } else if (nodes.selector) {
        nodes = [new Rule$4$1(nodes)];
      } else if (nodes.name) {
        nodes = [new AtRule$4$1(nodes)];
      } else if (nodes.text) {
        nodes = [new Comment$3$1(nodes)];
      } else {
        throw new Error("Unknown node type in node creation");
      }
      let processed = nodes.map((i2) => {
        if (!i2[my$1$1]) Container.rebuild(i2);
        i2 = i2.proxyOf;
        if (i2.parent) i2.parent.removeChild(i2);
        if (i2[isClean$1$1]) markDirtyUp$1(i2);
        if (typeof i2.raws.before === "undefined") {
          if (sample && typeof sample.raws.before !== "undefined") {
            i2.raws.before = sample.raws.before.replace(/\S/g, "");
          }
        }
        i2.parent = this.proxyOf;
        return i2;
      });
      return processed;
    }
    prepend(...children) {
      children = children.reverse();
      for (let child of children) {
        let nodes = this.normalize(child, this.first, "prepend").reverse();
        for (let node2 of nodes) this.proxyOf.nodes.unshift(node2);
        for (let id in this.indexes) {
          this.indexes[id] = this.indexes[id] + nodes.length;
        }
      }
      this.markDirty();
      return this;
    }
    push(child) {
      child.parent = this;
      this.proxyOf.nodes.push(child);
      return this;
    }
    removeAll() {
      for (let node2 of this.proxyOf.nodes) node2.parent = void 0;
      this.proxyOf.nodes = [];
      this.markDirty();
      return this;
    }
    removeChild(child) {
      child = this.index(child);
      this.proxyOf.nodes[child].parent = void 0;
      this.proxyOf.nodes.splice(child, 1);
      let index2;
      for (let id in this.indexes) {
        index2 = this.indexes[id];
        if (index2 >= child) {
          this.indexes[id] = index2 - 1;
        }
      }
      this.markDirty();
      return this;
    }
    replaceValues(pattern, opts, callback) {
      if (!callback) {
        callback = opts;
        opts = {};
      }
      this.walkDecls((decl) => {
        if (opts.props && !opts.props.includes(decl.prop)) return;
        if (opts.fast && !decl.value.includes(opts.fast)) return;
        decl.value = decl.value.replace(pattern, callback);
      });
      this.markDirty();
      return this;
    }
    some(condition) {
      return this.nodes.some(condition);
    }
    walk(callback) {
      return this.each((child, i2) => {
        let result2;
        try {
          result2 = callback(child, i2);
        } catch (e2) {
          throw child.addToError(e2);
        }
        if (result2 !== false && child.walk) {
          result2 = child.walk(callback);
        }
        return result2;
      });
    }
    walkAtRules(name, callback) {
      if (!callback) {
        callback = name;
        return this.walk((child, i2) => {
          if (child.type === "atrule") {
            return callback(child, i2);
          }
        });
      }
      if (name instanceof RegExp) {
        return this.walk((child, i2) => {
          if (child.type === "atrule" && name.test(child.name)) {
            return callback(child, i2);
          }
        });
      }
      return this.walk((child, i2) => {
        if (child.type === "atrule" && child.name === name) {
          return callback(child, i2);
        }
      });
    }
    walkComments(callback) {
      return this.walk((child, i2) => {
        if (child.type === "comment") {
          return callback(child, i2);
        }
      });
    }
    walkDecls(prop, callback) {
      if (!callback) {
        callback = prop;
        return this.walk((child, i2) => {
          if (child.type === "decl") {
            return callback(child, i2);
          }
        });
      }
      if (prop instanceof RegExp) {
        return this.walk((child, i2) => {
          if (child.type === "decl" && prop.test(child.prop)) {
            return callback(child, i2);
          }
        });
      }
      return this.walk((child, i2) => {
        if (child.type === "decl" && child.prop === prop) {
          return callback(child, i2);
        }
      });
    }
    walkRules(selector, callback) {
      if (!callback) {
        callback = selector;
        return this.walk((child, i2) => {
          if (child.type === "rule") {
            return callback(child, i2);
          }
        });
      }
      if (selector instanceof RegExp) {
        return this.walk((child, i2) => {
          if (child.type === "rule" && selector.test(child.selector)) {
            return callback(child, i2);
          }
        });
      }
      return this.walk((child, i2) => {
        if (child.type === "rule" && child.selector === selector) {
          return callback(child, i2);
        }
      });
    }
    get first() {
      if (!this.proxyOf.nodes) return void 0;
      return this.proxyOf.nodes[0];
    }
    get last() {
      if (!this.proxyOf.nodes) return void 0;
      return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
    }
  };
  Container$7$1.registerParse = (dependant) => {
    parse$4$1 = dependant;
  };
  Container$7$1.registerRule = (dependant) => {
    Rule$4$1 = dependant;
  };
  Container$7$1.registerAtRule = (dependant) => {
    AtRule$4$1 = dependant;
  };
  Container$7$1.registerRoot = (dependant) => {
    Root$6$1 = dependant;
  };
  var container$1 = Container$7$1;
  Container$7$1.default = Container$7$1;
  Container$7$1.rebuild = (node2) => {
    if (node2.type === "atrule") {
      Object.setPrototypeOf(node2, AtRule$4$1.prototype);
    } else if (node2.type === "rule") {
      Object.setPrototypeOf(node2, Rule$4$1.prototype);
    } else if (node2.type === "decl") {
      Object.setPrototypeOf(node2, Declaration$3$1.prototype);
    } else if (node2.type === "comment") {
      Object.setPrototypeOf(node2, Comment$3$1.prototype);
    } else if (node2.type === "root") {
      Object.setPrototypeOf(node2, Root$6$1.prototype);
    }
    node2[my$1$1] = true;
    if (node2.nodes) {
      node2.nodes.forEach((child) => {
        Container$7$1.rebuild(child);
      });
    }
  };
  let Container$6$1 = container$1;
  let LazyResult$4$1, Processor$3$1;
  let Document$3$1 = class Document2 extends Container$6$1 {
    constructor(defaults) {
      super({ type: "document", ...defaults });
      if (!this.nodes) {
        this.nodes = [];
      }
    }
    toResult(opts = {}) {
      let lazy = new LazyResult$4$1(new Processor$3$1(), this, opts);
      return lazy.stringify();
    }
  };
  Document$3$1.registerLazyResult = (dependant) => {
    LazyResult$4$1 = dependant;
  };
  Document$3$1.registerProcessor = (dependant) => {
    Processor$3$1 = dependant;
  };
  var document$1$1 = Document$3$1;
  Document$3$1.default = Document$3$1;
  let printed$1 = {};
  var warnOnce$2$1 = function warnOnce(message) {
    if (printed$1[message]) return;
    printed$1[message] = true;
    if (typeof console !== "undefined" && console.warn) {
      console.warn(message);
    }
  };
  let Warning$2$1 = class Warning {
    constructor(text, opts = {}) {
      this.type = "warning";
      this.text = text;
      if (opts.node && opts.node.source) {
        let range = opts.node.rangeBy(opts);
        this.line = range.start.line;
        this.column = range.start.column;
        this.endLine = range.end.line;
        this.endColumn = range.end.column;
      }
      for (let opt in opts) this[opt] = opts[opt];
    }
    toString() {
      if (this.node) {
        return this.node.error(this.text, {
          index: this.index,
          plugin: this.plugin,
          word: this.word
        }).message;
      }
      if (this.plugin) {
        return this.plugin + ": " + this.text;
      }
      return this.text;
    }
  };
  var warning$1 = Warning$2$1;
  Warning$2$1.default = Warning$2$1;
  let Warning$1$1 = warning$1;
  let Result$3$1 = class Result {
    constructor(processor2, root2, opts) {
      this.processor = processor2;
      this.messages = [];
      this.root = root2;
      this.opts = opts;
      this.css = void 0;
      this.map = void 0;
    }
    toString() {
      return this.css;
    }
    warn(text, opts = {}) {
      if (!opts.plugin) {
        if (this.lastPlugin && this.lastPlugin.postcssPlugin) {
          opts.plugin = this.lastPlugin.postcssPlugin;
        }
      }
      let warning2 = new Warning$1$1(text, opts);
      this.messages.push(warning2);
      return warning2;
    }
    warnings() {
      return this.messages.filter((i2) => i2.type === "warning");
    }
    get content() {
      return this.css;
    }
  };
  var result$1 = Result$3$1;
  Result$3$1.default = Result$3$1;
  const SINGLE_QUOTE$1 = "'".charCodeAt(0);
  const DOUBLE_QUOTE$1 = '"'.charCodeAt(0);
  const BACKSLASH$1 = "\\".charCodeAt(0);
  const SLASH$1 = "/".charCodeAt(0);
  const NEWLINE$1 = "\n".charCodeAt(0);
  const SPACE$1 = " ".charCodeAt(0);
  const FEED$1 = "\f".charCodeAt(0);
  const TAB$1 = "	".charCodeAt(0);
  const CR$1 = "\r".charCodeAt(0);
  const OPEN_SQUARE$1 = "[".charCodeAt(0);
  const CLOSE_SQUARE$1 = "]".charCodeAt(0);
  const OPEN_PARENTHESES$1 = "(".charCodeAt(0);
  const CLOSE_PARENTHESES$1 = ")".charCodeAt(0);
  const OPEN_CURLY$1 = "{".charCodeAt(0);
  const CLOSE_CURLY$1 = "}".charCodeAt(0);
  const SEMICOLON$1 = ";".charCodeAt(0);
  const ASTERISK$1 = "*".charCodeAt(0);
  const COLON$1 = ":".charCodeAt(0);
  const AT$1 = "@".charCodeAt(0);
  const RE_AT_END$1 = /[\t\n\f\r "#'()/;[\\\]{}]/g;
  const RE_WORD_END$1 = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g;
  const RE_BAD_BRACKET$1 = /.[\r\n"'(/\\]/;
  const RE_HEX_ESCAPE$1 = /[\da-f]/i;
  var tokenize$1 = function tokenizer(input2, options2 = {}) {
    let css = input2.css.valueOf();
    let ignore = options2.ignoreErrors;
    let code, next, quote, content, escape;
    let escaped, escapePos, prev, n2, currentToken;
    let length = css.length;
    let pos = 0;
    let buffer = [];
    let returned = [];
    function position() {
      return pos;
    }
    function unclosed(what) {
      throw input2.error("Unclosed " + what, pos);
    }
    function endOfFile() {
      return returned.length === 0 && pos >= length;
    }
    function nextToken(opts) {
      if (returned.length) return returned.pop();
      if (pos >= length) return;
      let ignoreUnclosed = opts ? opts.ignoreUnclosed : false;
      code = css.charCodeAt(pos);
      switch (code) {
        case NEWLINE$1:
        case SPACE$1:
        case TAB$1:
        case CR$1:
        case FEED$1: {
          next = pos;
          do {
            next += 1;
            code = css.charCodeAt(next);
          } while (code === SPACE$1 || code === NEWLINE$1 || code === TAB$1 || code === CR$1 || code === FEED$1);
          currentToken = ["space", css.slice(pos, next)];
          pos = next - 1;
          break;
        }
        case OPEN_SQUARE$1:
        case CLOSE_SQUARE$1:
        case OPEN_CURLY$1:
        case CLOSE_CURLY$1:
        case COLON$1:
        case SEMICOLON$1:
        case CLOSE_PARENTHESES$1: {
          let controlChar = String.fromCharCode(code);
          currentToken = [controlChar, controlChar, pos];
          break;
        }
        case OPEN_PARENTHESES$1: {
          prev = buffer.length ? buffer.pop()[1] : "";
          n2 = css.charCodeAt(pos + 1);
          if (prev === "url" && n2 !== SINGLE_QUOTE$1 && n2 !== DOUBLE_QUOTE$1 && n2 !== SPACE$1 && n2 !== NEWLINE$1 && n2 !== TAB$1 && n2 !== FEED$1 && n2 !== CR$1) {
            next = pos;
            do {
              escaped = false;
              next = css.indexOf(")", next + 1);
              if (next === -1) {
                if (ignore || ignoreUnclosed) {
                  next = pos;
                  break;
                } else {
                  unclosed("bracket");
                }
              }
              escapePos = next;
              while (css.charCodeAt(escapePos - 1) === BACKSLASH$1) {
                escapePos -= 1;
                escaped = !escaped;
              }
            } while (escaped);
            currentToken = ["brackets", css.slice(pos, next + 1), pos, next];
            pos = next;
          } else {
            next = css.indexOf(")", pos + 1);
            content = css.slice(pos, next + 1);
            if (next === -1 || RE_BAD_BRACKET$1.test(content)) {
              currentToken = ["(", "(", pos];
            } else {
              currentToken = ["brackets", content, pos, next];
              pos = next;
            }
          }
          break;
        }
        case SINGLE_QUOTE$1:
        case DOUBLE_QUOTE$1: {
          quote = code === SINGLE_QUOTE$1 ? "'" : '"';
          next = pos;
          do {
            escaped = false;
            next = css.indexOf(quote, next + 1);
            if (next === -1) {
              if (ignore || ignoreUnclosed) {
                next = pos + 1;
                break;
              } else {
                unclosed("string");
              }
            }
            escapePos = next;
            while (css.charCodeAt(escapePos - 1) === BACKSLASH$1) {
              escapePos -= 1;
              escaped = !escaped;
            }
          } while (escaped);
          currentToken = ["string", css.slice(pos, next + 1), pos, next];
          pos = next;
          break;
        }
        case AT$1: {
          RE_AT_END$1.lastIndex = pos + 1;
          RE_AT_END$1.test(css);
          if (RE_AT_END$1.lastIndex === 0) {
            next = css.length - 1;
          } else {
            next = RE_AT_END$1.lastIndex - 2;
          }
          currentToken = ["at-word", css.slice(pos, next + 1), pos, next];
          pos = next;
          break;
        }
        case BACKSLASH$1: {
          next = pos;
          escape = true;
          while (css.charCodeAt(next + 1) === BACKSLASH$1) {
            next += 1;
            escape = !escape;
          }
          code = css.charCodeAt(next + 1);
          if (escape && code !== SLASH$1 && code !== SPACE$1 && code !== NEWLINE$1 && code !== TAB$1 && code !== CR$1 && code !== FEED$1) {
            next += 1;
            if (RE_HEX_ESCAPE$1.test(css.charAt(next))) {
              while (RE_HEX_ESCAPE$1.test(css.charAt(next + 1))) {
                next += 1;
              }
              if (css.charCodeAt(next + 1) === SPACE$1) {
                next += 1;
              }
            }
          }
          currentToken = ["word", css.slice(pos, next + 1), pos, next];
          pos = next;
          break;
        }
        default: {
          if (code === SLASH$1 && css.charCodeAt(pos + 1) === ASTERISK$1) {
            next = css.indexOf("*/", pos + 2) + 1;
            if (next === 0) {
              if (ignore || ignoreUnclosed) {
                next = css.length;
              } else {
                unclosed("comment");
              }
            }
            currentToken = ["comment", css.slice(pos, next + 1), pos, next];
            pos = next;
          } else {
            RE_WORD_END$1.lastIndex = pos + 1;
            RE_WORD_END$1.test(css);
            if (RE_WORD_END$1.lastIndex === 0) {
              next = css.length - 1;
            } else {
              next = RE_WORD_END$1.lastIndex - 2;
            }
            currentToken = ["word", css.slice(pos, next + 1), pos, next];
            buffer.push(currentToken);
            pos = next;
          }
          break;
        }
      }
      pos++;
      return currentToken;
    }
    function back(token) {
      returned.push(token);
    }
    return {
      back,
      endOfFile,
      nextToken,
      position
    };
  };
  let Container$5$1 = container$1;
  let AtRule$3$1 = class AtRule extends Container$5$1 {
    constructor(defaults) {
      super(defaults);
      this.type = "atrule";
    }
    append(...children) {
      if (!this.proxyOf.nodes) this.nodes = [];
      return super.append(...children);
    }
    prepend(...children) {
      if (!this.proxyOf.nodes) this.nodes = [];
      return super.prepend(...children);
    }
  };
  var atRule$1 = AtRule$3$1;
  AtRule$3$1.default = AtRule$3$1;
  Container$5$1.registerAtRule(AtRule$3$1);
  let Container$4$1 = container$1;
  let LazyResult$3$1, Processor$2$1;
  let Root$5$1 = class Root extends Container$4$1 {
    constructor(defaults) {
      super(defaults);
      this.type = "root";
      if (!this.nodes) this.nodes = [];
    }
    normalize(child, sample, type) {
      let nodes = super.normalize(child);
      if (sample) {
        if (type === "prepend") {
          if (this.nodes.length > 1) {
            sample.raws.before = this.nodes[1].raws.before;
          } else {
            delete sample.raws.before;
          }
        } else if (this.first !== sample) {
          for (let node2 of nodes) {
            node2.raws.before = sample.raws.before;
          }
        }
      }
      return nodes;
    }
    removeChild(child, ignore) {
      let index2 = this.index(child);
      if (!ignore && index2 === 0 && this.nodes.length > 1) {
        this.nodes[1].raws.before = this.nodes[index2].raws.before;
      }
      return super.removeChild(child);
    }
    toResult(opts = {}) {
      let lazy = new LazyResult$3$1(new Processor$2$1(), this, opts);
      return lazy.stringify();
    }
  };
  Root$5$1.registerLazyResult = (dependant) => {
    LazyResult$3$1 = dependant;
  };
  Root$5$1.registerProcessor = (dependant) => {
    Processor$2$1 = dependant;
  };
  var root$1 = Root$5$1;
  Root$5$1.default = Root$5$1;
  Container$4$1.registerRoot(Root$5$1);
  let list$2$1 = {
    comma(string) {
      return list$2$1.split(string, [","], true);
    },
    space(string) {
      let spaces = [" ", "\n", "	"];
      return list$2$1.split(string, spaces);
    },
    split(string, separators, last) {
      let array = [];
      let current = "";
      let split = false;
      let func = 0;
      let inQuote = false;
      let prevQuote = "";
      let escape = false;
      for (let letter of string) {
        if (escape) {
          escape = false;
        } else if (letter === "\\") {
          escape = true;
        } else if (inQuote) {
          if (letter === prevQuote) {
            inQuote = false;
          }
        } else if (letter === '"' || letter === "'") {
          inQuote = true;
          prevQuote = letter;
        } else if (letter === "(") {
          func += 1;
        } else if (letter === ")") {
          if (func > 0) func -= 1;
        } else if (func === 0) {
          if (separators.includes(letter)) split = true;
        }
        if (split) {
          if (current !== "") array.push(current.trim());
          current = "";
          split = false;
        } else {
          current += letter;
        }
      }
      if (last || current !== "") array.push(current.trim());
      return array;
    }
  };
  var list_1$1 = list$2$1;
  list$2$1.default = list$2$1;
  let Container$3$1 = container$1;
  let list$1$1 = list_1$1;
  let Rule$3$1 = class Rule extends Container$3$1 {
    constructor(defaults) {
      super(defaults);
      this.type = "rule";
      if (!this.nodes) this.nodes = [];
    }
    get selectors() {
      return list$1$1.comma(this.selector);
    }
    set selectors(values) {
      let match = this.selector ? this.selector.match(/,\s*/) : null;
      let sep2 = match ? match[0] : "," + this.raw("between", "beforeOpen");
      this.selector = values.join(sep2);
    }
  };
  var rule$1 = Rule$3$1;
  Rule$3$1.default = Rule$3$1;
  Container$3$1.registerRule(Rule$3$1);
  let Declaration$2$1 = declaration$1;
  let tokenizer2$1 = tokenize$1;
  let Comment$2$1 = comment$1;
  let AtRule$2$1 = atRule$1;
  let Root$4$1 = root$1;
  let Rule$2$1 = rule$1;
  const SAFE_COMMENT_NEIGHBOR$1 = {
    empty: true,
    space: true
  };
  function findLastWithPosition$1(tokens) {
    for (let i2 = tokens.length - 1; i2 >= 0; i2--) {
      let token = tokens[i2];
      let pos = token[3] || token[2];
      if (pos) return pos;
    }
  }
  let Parser$1$1 = class Parser {
    constructor(input2) {
      this.input = input2;
      this.root = new Root$4$1();
      this.current = this.root;
      this.spaces = "";
      this.semicolon = false;
      this.createTokenizer();
      this.root.source = { input: input2, start: { column: 1, line: 1, offset: 0 } };
    }
    atrule(token) {
      let node2 = new AtRule$2$1();
      node2.name = token[1].slice(1);
      if (node2.name === "") {
        this.unnamedAtrule(node2, token);
      }
      this.init(node2, token[2]);
      let type;
      let prev;
      let shift;
      let last = false;
      let open = false;
      let params = [];
      let brackets = [];
      while (!this.tokenizer.endOfFile()) {
        token = this.tokenizer.nextToken();
        type = token[0];
        if (type === "(" || type === "[") {
          brackets.push(type === "(" ? ")" : "]");
        } else if (type === "{" && brackets.length > 0) {
          brackets.push("}");
        } else if (type === brackets[brackets.length - 1]) {
          brackets.pop();
        }
        if (brackets.length === 0) {
          if (type === ";") {
            node2.source.end = this.getPosition(token[2]);
            node2.source.end.offset++;
            this.semicolon = true;
            break;
          } else if (type === "{") {
            open = true;
            break;
          } else if (type === "}") {
            if (params.length > 0) {
              shift = params.length - 1;
              prev = params[shift];
              while (prev && prev[0] === "space") {
                prev = params[--shift];
              }
              if (prev) {
                node2.source.end = this.getPosition(prev[3] || prev[2]);
                node2.source.end.offset++;
              }
            }
            this.end(token);
            break;
          } else {
            params.push(token);
          }
        } else {
          params.push(token);
        }
        if (this.tokenizer.endOfFile()) {
          last = true;
          break;
        }
      }
      node2.raws.between = this.spacesAndCommentsFromEnd(params);
      if (params.length) {
        node2.raws.afterName = this.spacesAndCommentsFromStart(params);
        this.raw(node2, "params", params);
        if (last) {
          token = params[params.length - 1];
          node2.source.end = this.getPosition(token[3] || token[2]);
          node2.source.end.offset++;
          this.spaces = node2.raws.between;
          node2.raws.between = "";
        }
      } else {
        node2.raws.afterName = "";
        node2.params = "";
      }
      if (open) {
        node2.nodes = [];
        this.current = node2;
      }
    }
    checkMissedSemicolon(tokens) {
      let colon = this.colon(tokens);
      if (colon === false) return;
      let founded = 0;
      let token;
      for (let j2 = colon - 1; j2 >= 0; j2--) {
        token = tokens[j2];
        if (token[0] !== "space") {
          founded += 1;
          if (founded === 2) break;
        }
      }
      throw this.input.error(
        "Missed semicolon",
        token[0] === "word" ? token[3] + 1 : token[2]
      );
    }
    colon(tokens) {
      let brackets = 0;
      let token, type, prev;
      for (let [i2, element] of tokens.entries()) {
        token = element;
        type = token[0];
        if (type === "(") {
          brackets += 1;
        }
        if (type === ")") {
          brackets -= 1;
        }
        if (brackets === 0 && type === ":") {
          if (!prev) {
            this.doubleColon(token);
          } else if (prev[0] === "word" && prev[1] === "progid") {
            continue;
          } else {
            return i2;
          }
        }
        prev = token;
      }
      return false;
    }
    comment(token) {
      let node2 = new Comment$2$1();
      this.init(node2, token[2]);
      node2.source.end = this.getPosition(token[3] || token[2]);
      node2.source.end.offset++;
      let text = token[1].slice(2, -2);
      if (/^\s*$/.test(text)) {
        node2.text = "";
        node2.raws.left = text;
        node2.raws.right = "";
      } else {
        let match = text.match(/^(\s*)([^]*\S)(\s*)$/);
        node2.text = match[2];
        node2.raws.left = match[1];
        node2.raws.right = match[3];
      }
    }
    createTokenizer() {
      this.tokenizer = tokenizer2$1(this.input);
    }
    decl(tokens, customProperty) {
      let node2 = new Declaration$2$1();
      this.init(node2, tokens[0][2]);
      let last = tokens[tokens.length - 1];
      if (last[0] === ";") {
        this.semicolon = true;
        tokens.pop();
      }
      node2.source.end = this.getPosition(
        last[3] || last[2] || findLastWithPosition$1(tokens)
      );
      node2.source.end.offset++;
      while (tokens[0][0] !== "word") {
        if (tokens.length === 1) this.unknownWord(tokens);
        node2.raws.before += tokens.shift()[1];
      }
      node2.source.start = this.getPosition(tokens[0][2]);
      node2.prop = "";
      while (tokens.length) {
        let type = tokens[0][0];
        if (type === ":" || type === "space" || type === "comment") {
          break;
        }
        node2.prop += tokens.shift()[1];
      }
      node2.raws.between = "";
      let token;
      while (tokens.length) {
        token = tokens.shift();
        if (token[0] === ":") {
          node2.raws.between += token[1];
          break;
        } else {
          if (token[0] === "word" && /\w/.test(token[1])) {
            this.unknownWord([token]);
          }
          node2.raws.between += token[1];
        }
      }
      if (node2.prop[0] === "_" || node2.prop[0] === "*") {
        node2.raws.before += node2.prop[0];
        node2.prop = node2.prop.slice(1);
      }
      let firstSpaces = [];
      let next;
      while (tokens.length) {
        next = tokens[0][0];
        if (next !== "space" && next !== "comment") break;
        firstSpaces.push(tokens.shift());
      }
      this.precheckMissedSemicolon(tokens);
      for (let i2 = tokens.length - 1; i2 >= 0; i2--) {
        token = tokens[i2];
        if (token[1].toLowerCase() === "!important") {
          node2.important = true;
          let string = this.stringFrom(tokens, i2);
          string = this.spacesFromEnd(tokens) + string;
          if (string !== " !important") node2.raws.important = string;
          break;
        } else if (token[1].toLowerCase() === "important") {
          let cache = tokens.slice(0);
          let str = "";
          for (let j2 = i2; j2 > 0; j2--) {
            let type = cache[j2][0];
            if (str.trim().indexOf("!") === 0 && type !== "space") {
              break;
            }
            str = cache.pop()[1] + str;
          }
          if (str.trim().indexOf("!") === 0) {
            node2.important = true;
            node2.raws.important = str;
            tokens = cache;
          }
        }
        if (token[0] !== "space" && token[0] !== "comment") {
          break;
        }
      }
      let hasWord = tokens.some((i2) => i2[0] !== "space" && i2[0] !== "comment");
      if (hasWord) {
        node2.raws.between += firstSpaces.map((i2) => i2[1]).join("");
        firstSpaces = [];
      }
      this.raw(node2, "value", firstSpaces.concat(tokens), customProperty);
      if (node2.value.includes(":") && !customProperty) {
        this.checkMissedSemicolon(tokens);
      }
    }
    doubleColon(token) {
      throw this.input.error(
        "Double colon",
        { offset: token[2] },
        { offset: token[2] + token[1].length }
      );
    }
    emptyRule(token) {
      let node2 = new Rule$2$1();
      this.init(node2, token[2]);
      node2.selector = "";
      node2.raws.between = "";
      this.current = node2;
    }
    end(token) {
      if (this.current.nodes && this.current.nodes.length) {
        this.current.raws.semicolon = this.semicolon;
      }
      this.semicolon = false;
      this.current.raws.after = (this.current.raws.after || "") + this.spaces;
      this.spaces = "";
      if (this.current.parent) {
        this.current.source.end = this.getPosition(token[2]);
        this.current.source.end.offset++;
        this.current = this.current.parent;
      } else {
        this.unexpectedClose(token);
      }
    }
    endFile() {
      if (this.current.parent) this.unclosedBlock();
      if (this.current.nodes && this.current.nodes.length) {
        this.current.raws.semicolon = this.semicolon;
      }
      this.current.raws.after = (this.current.raws.after || "") + this.spaces;
      this.root.source.end = this.getPosition(this.tokenizer.position());
    }
    freeSemicolon(token) {
      this.spaces += token[1];
      if (this.current.nodes) {
        let prev = this.current.nodes[this.current.nodes.length - 1];
        if (prev && prev.type === "rule" && !prev.raws.ownSemicolon) {
          prev.raws.ownSemicolon = this.spaces;
          this.spaces = "";
        }
      }
    }
    // Helpers
    getPosition(offset) {
      let pos = this.input.fromOffset(offset);
      return {
        column: pos.col,
        line: pos.line,
        offset
      };
    }
    init(node2, offset) {
      this.current.push(node2);
      node2.source = {
        input: this.input,
        start: this.getPosition(offset)
      };
      node2.raws.before = this.spaces;
      this.spaces = "";
      if (node2.type !== "comment") this.semicolon = false;
    }
    other(start) {
      let end = false;
      let type = null;
      let colon = false;
      let bracket = null;
      let brackets = [];
      let customProperty = start[1].startsWith("--");
      let tokens = [];
      let token = start;
      while (token) {
        type = token[0];
        tokens.push(token);
        if (type === "(" || type === "[") {
          if (!bracket) bracket = token;
          brackets.push(type === "(" ? ")" : "]");
        } else if (customProperty && colon && type === "{") {
          if (!bracket) bracket = token;
          brackets.push("}");
        } else if (brackets.length === 0) {
          if (type === ";") {
            if (colon) {
              this.decl(tokens, customProperty);
              return;
            } else {
              break;
            }
          } else if (type === "{") {
            this.rule(tokens);
            return;
          } else if (type === "}") {
            this.tokenizer.back(tokens.pop());
            end = true;
            break;
          } else if (type === ":") {
            colon = true;
          }
        } else if (type === brackets[brackets.length - 1]) {
          brackets.pop();
          if (brackets.length === 0) bracket = null;
        }
        token = this.tokenizer.nextToken();
      }
      if (this.tokenizer.endOfFile()) end = true;
      if (brackets.length > 0) this.unclosedBracket(bracket);
      if (end && colon) {
        if (!customProperty) {
          while (tokens.length) {
            token = tokens[tokens.length - 1][0];
            if (token !== "space" && token !== "comment") break;
            this.tokenizer.back(tokens.pop());
          }
        }
        this.decl(tokens, customProperty);
      } else {
        this.unknownWord(tokens);
      }
    }
    parse() {
      let token;
      while (!this.tokenizer.endOfFile()) {
        token = this.tokenizer.nextToken();
        switch (token[0]) {
          case "space":
            this.spaces += token[1];
            break;
          case ";":
            this.freeSemicolon(token);
            break;
          case "}":
            this.end(token);
            break;
          case "comment":
            this.comment(token);
            break;
          case "at-word":
            this.atrule(token);
            break;
          case "{":
            this.emptyRule(token);
            break;
          default:
            this.other(token);
            break;
        }
      }
      this.endFile();
    }
    precheckMissedSemicolon() {
    }
    raw(node2, prop, tokens, customProperty) {
      let token, type;
      let length = tokens.length;
      let value = "";
      let clean = true;
      let next, prev;
      for (let i2 = 0; i2 < length; i2 += 1) {
        token = tokens[i2];
        type = token[0];
        if (type === "space" && i2 === length - 1 && !customProperty) {
          clean = false;
        } else if (type === "comment") {
          prev = tokens[i2 - 1] ? tokens[i2 - 1][0] : "empty";
          next = tokens[i2 + 1] ? tokens[i2 + 1][0] : "empty";
          if (!SAFE_COMMENT_NEIGHBOR$1[prev] && !SAFE_COMMENT_NEIGHBOR$1[next]) {
            if (value.slice(-1) === ",") {
              clean = false;
            } else {
              value += token[1];
            }
          } else {
            clean = false;
          }
        } else {
          value += token[1];
        }
      }
      if (!clean) {
        let raw = tokens.reduce((all, i2) => all + i2[1], "");
        node2.raws[prop] = { raw, value };
      }
      node2[prop] = value;
    }
    rule(tokens) {
      tokens.pop();
      let node2 = new Rule$2$1();
      this.init(node2, tokens[0][2]);
      node2.raws.between = this.spacesAndCommentsFromEnd(tokens);
      this.raw(node2, "selector", tokens);
      this.current = node2;
    }
    spacesAndCommentsFromEnd(tokens) {
      let lastTokenType;
      let spaces = "";
      while (tokens.length) {
        lastTokenType = tokens[tokens.length - 1][0];
        if (lastTokenType !== "space" && lastTokenType !== "comment") break;
        spaces = tokens.pop()[1] + spaces;
      }
      return spaces;
    }
    // Errors
    spacesAndCommentsFromStart(tokens) {
      let next;
      let spaces = "";
      while (tokens.length) {
        next = tokens[0][0];
        if (next !== "space" && next !== "comment") break;
        spaces += tokens.shift()[1];
      }
      return spaces;
    }
    spacesFromEnd(tokens) {
      let lastTokenType;
      let spaces = "";
      while (tokens.length) {
        lastTokenType = tokens[tokens.length - 1][0];
        if (lastTokenType !== "space") break;
        spaces = tokens.pop()[1] + spaces;
      }
      return spaces;
    }
    stringFrom(tokens, from) {
      let result2 = "";
      for (let i2 = from; i2 < tokens.length; i2++) {
        result2 += tokens[i2][1];
      }
      tokens.splice(from, tokens.length - from);
      return result2;
    }
    unclosedBlock() {
      let pos = this.current.source.start;
      throw this.input.error("Unclosed block", pos.line, pos.column);
    }
    unclosedBracket(bracket) {
      throw this.input.error(
        "Unclosed bracket",
        { offset: bracket[2] },
        { offset: bracket[2] + 1 }
      );
    }
    unexpectedClose(token) {
      throw this.input.error(
        "Unexpected }",
        { offset: token[2] },
        { offset: token[2] + 1 }
      );
    }
    unknownWord(tokens) {
      throw this.input.error(
        "Unknown word",
        { offset: tokens[0][2] },
        { offset: tokens[0][2] + tokens[0][1].length }
      );
    }
    unnamedAtrule(node2, token) {
      throw this.input.error(
        "At-rule without name",
        { offset: token[2] },
        { offset: token[2] + token[1].length }
      );
    }
  };
  var parser$1 = Parser$1$1;
  let Container$2$1 = container$1;
  let Parser2$1 = parser$1;
  let Input$2$1 = input$1;
  function parse$3$1(css, opts) {
    let input2 = new Input$2$1(css, opts);
    let parser2 = new Parser2$1(input2);
    try {
      parser2.parse();
    } catch (e2) {
      if (process.env.NODE_ENV !== "production") {
        if (e2.name === "CssSyntaxError" && opts && opts.from) {
          if (/\.scss$/i.test(opts.from)) {
            e2.message += "\nYou tried to parse SCSS with the standard CSS parser; try again with the postcss-scss parser";
          } else if (/\.sass/i.test(opts.from)) {
            e2.message += "\nYou tried to parse Sass with the standard CSS parser; try again with the postcss-sass parser";
          } else if (/\.less$/i.test(opts.from)) {
            e2.message += "\nYou tried to parse Less with the standard CSS parser; try again with the postcss-less parser";
          }
        }
      }
      throw e2;
    }
    return parser2.root;
  }
  var parse_1$1 = parse$3$1;
  parse$3$1.default = parse$3$1;
  Container$2$1.registerParse(parse$3$1);
  let { isClean: isClean$3, my: my$3 } = symbols$1;
  let MapGenerator$1$1 = mapGenerator$1;
  let stringify$2$1 = stringify_1$1;
  let Container$1$1 = container$1;
  let Document$2$1 = document$1$1;
  let warnOnce$1$1 = warnOnce$2$1;
  let Result$2$1 = result$1;
  let parse$2$1 = parse_1$1;
  let Root$3$1 = root$1;
  const TYPE_TO_CLASS_NAME$1 = {
    atrule: "AtRule",
    comment: "Comment",
    decl: "Declaration",
    document: "Document",
    root: "Root",
    rule: "Rule"
  };
  const PLUGIN_PROPS$1 = {
    AtRule: true,
    AtRuleExit: true,
    Comment: true,
    CommentExit: true,
    Declaration: true,
    DeclarationExit: true,
    Document: true,
    DocumentExit: true,
    Once: true,
    OnceExit: true,
    postcssPlugin: true,
    prepare: true,
    Root: true,
    RootExit: true,
    Rule: true,
    RuleExit: true
  };
  const NOT_VISITORS$1 = {
    Once: true,
    postcssPlugin: true,
    prepare: true
  };
  const CHILDREN$1 = 0;
  function isPromise$1(obj) {
    return typeof obj === "object" && typeof obj.then === "function";
  }
  function getEvents$1(node2) {
    let key = false;
    let type = TYPE_TO_CLASS_NAME$1[node2.type];
    if (node2.type === "decl") {
      key = node2.prop.toLowerCase();
    } else if (node2.type === "atrule") {
      key = node2.name.toLowerCase();
    }
    if (key && node2.append) {
      return [
        type,
        type + "-" + key,
        CHILDREN$1,
        type + "Exit",
        type + "Exit-" + key
      ];
    } else if (key) {
      return [type, type + "-" + key, type + "Exit", type + "Exit-" + key];
    } else if (node2.append) {
      return [type, CHILDREN$1, type + "Exit"];
    } else {
      return [type, type + "Exit"];
    }
  }
  function toStack$1(node2) {
    let events;
    if (node2.type === "document") {
      events = ["Document", CHILDREN$1, "DocumentExit"];
    } else if (node2.type === "root") {
      events = ["Root", CHILDREN$1, "RootExit"];
    } else {
      events = getEvents$1(node2);
    }
    return {
      eventIndex: 0,
      events,
      iterator: 0,
      node: node2,
      visitorIndex: 0,
      visitors: []
    };
  }
  function cleanMarks$1(node2) {
    node2[isClean$3] = false;
    if (node2.nodes) node2.nodes.forEach((i2) => cleanMarks$1(i2));
    return node2;
  }
  let postcss$2$1 = {};
  let LazyResult$2$1 = class LazyResult {
    constructor(processor2, css, opts) {
      this.stringified = false;
      this.processed = false;
      let root2;
      if (typeof css === "object" && css !== null && (css.type === "root" || css.type === "document")) {
        root2 = cleanMarks$1(css);
      } else if (css instanceof LazyResult || css instanceof Result$2$1) {
        root2 = cleanMarks$1(css.root);
        if (css.map) {
          if (typeof opts.map === "undefined") opts.map = {};
          if (!opts.map.inline) opts.map.inline = false;
          opts.map.prev = css.map;
        }
      } else {
        let parser2 = parse$2$1;
        if (opts.syntax) parser2 = opts.syntax.parse;
        if (opts.parser) parser2 = opts.parser;
        if (parser2.parse) parser2 = parser2.parse;
        try {
          root2 = parser2(css, opts);
        } catch (error) {
          this.processed = true;
          this.error = error;
        }
        if (root2 && !root2[my$3]) {
          Container$1$1.rebuild(root2);
        }
      }
      this.result = new Result$2$1(processor2, root2, opts);
      this.helpers = { ...postcss$2$1, postcss: postcss$2$1, result: this.result };
      this.plugins = this.processor.plugins.map((plugin22) => {
        if (typeof plugin22 === "object" && plugin22.prepare) {
          return { ...plugin22, ...plugin22.prepare(this.result) };
        } else {
          return plugin22;
        }
      });
    }
    async() {
      if (this.error) return Promise.reject(this.error);
      if (this.processed) return Promise.resolve(this.result);
      if (!this.processing) {
        this.processing = this.runAsync();
      }
      return this.processing;
    }
    catch(onRejected) {
      return this.async().catch(onRejected);
    }
    finally(onFinally) {
      return this.async().then(onFinally, onFinally);
    }
    getAsyncError() {
      throw new Error("Use process(css).then(cb) to work with async plugins");
    }
    handleError(error, node2) {
      let plugin22 = this.result.lastPlugin;
      try {
        if (node2) node2.addToError(error);
        this.error = error;
        if (error.name === "CssSyntaxError" && !error.plugin) {
          error.plugin = plugin22.postcssPlugin;
          error.setMessage();
        } else if (plugin22.postcssVersion) {
          if (process.env.NODE_ENV !== "production") {
            let pluginName = plugin22.postcssPlugin;
            let pluginVer = plugin22.postcssVersion;
            let runtimeVer = this.result.processor.version;
            let a2 = pluginVer.split(".");
            let b2 = runtimeVer.split(".");
            if (a2[0] !== b2[0] || parseInt(a2[1]) > parseInt(b2[1])) {
              console.error(
                "Unknown error from PostCSS plugin. Your current PostCSS version is " + runtimeVer + ", but " + pluginName + " uses " + pluginVer + ". Perhaps this is the source of the error below."
              );
            }
          }
        }
      } catch (err2) {
        if (console && console.error) console.error(err2);
      }
      return error;
    }
    prepareVisitors() {
      this.listeners = {};
      let add = (plugin22, type, cb) => {
        if (!this.listeners[type]) this.listeners[type] = [];
        this.listeners[type].push([plugin22, cb]);
      };
      for (let plugin22 of this.plugins) {
        if (typeof plugin22 === "object") {
          for (let event in plugin22) {
            if (!PLUGIN_PROPS$1[event] && /^[A-Z]/.test(event)) {
              throw new Error(
                `Unknown event ${event} in ${plugin22.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`
              );
            }
            if (!NOT_VISITORS$1[event]) {
              if (typeof plugin22[event] === "object") {
                for (let filter in plugin22[event]) {
                  if (filter === "*") {
                    add(plugin22, event, plugin22[event][filter]);
                  } else {
                    add(
                      plugin22,
                      event + "-" + filter.toLowerCase(),
                      plugin22[event][filter]
                    );
                  }
                }
              } else if (typeof plugin22[event] === "function") {
                add(plugin22, event, plugin22[event]);
              }
            }
          }
        }
      }
      this.hasListener = Object.keys(this.listeners).length > 0;
    }
    async runAsync() {
      this.plugin = 0;
      for (let i2 = 0; i2 < this.plugins.length; i2++) {
        let plugin22 = this.plugins[i2];
        let promise = this.runOnRoot(plugin22);
        if (isPromise$1(promise)) {
          try {
            await promise;
          } catch (error) {
            throw this.handleError(error);
          }
        }
      }
      this.prepareVisitors();
      if (this.hasListener) {
        let root2 = this.result.root;
        while (!root2[isClean$3]) {
          root2[isClean$3] = true;
          let stack = [toStack$1(root2)];
          while (stack.length > 0) {
            let promise = this.visitTick(stack);
            if (isPromise$1(promise)) {
              try {
                await promise;
              } catch (e2) {
                let node2 = stack[stack.length - 1].node;
                throw this.handleError(e2, node2);
              }
            }
          }
        }
        if (this.listeners.OnceExit) {
          for (let [plugin22, visitor] of this.listeners.OnceExit) {
            this.result.lastPlugin = plugin22;
            try {
              if (root2.type === "document") {
                let roots = root2.nodes.map(
                  (subRoot) => visitor(subRoot, this.helpers)
                );
                await Promise.all(roots);
              } else {
                await visitor(root2, this.helpers);
              }
            } catch (e2) {
              throw this.handleError(e2);
            }
          }
        }
      }
      this.processed = true;
      return this.stringify();
    }
    runOnRoot(plugin22) {
      this.result.lastPlugin = plugin22;
      try {
        if (typeof plugin22 === "object" && plugin22.Once) {
          if (this.result.root.type === "document") {
            let roots = this.result.root.nodes.map(
              (root2) => plugin22.Once(root2, this.helpers)
            );
            if (isPromise$1(roots[0])) {
              return Promise.all(roots);
            }
            return roots;
          }
          return plugin22.Once(this.result.root, this.helpers);
        } else if (typeof plugin22 === "function") {
          return plugin22(this.result.root, this.result);
        }
      } catch (error) {
        throw this.handleError(error);
      }
    }
    stringify() {
      if (this.error) throw this.error;
      if (this.stringified) return this.result;
      this.stringified = true;
      this.sync();
      let opts = this.result.opts;
      let str = stringify$2$1;
      if (opts.syntax) str = opts.syntax.stringify;
      if (opts.stringifier) str = opts.stringifier;
      if (str.stringify) str = str.stringify;
      let map = new MapGenerator$1$1(str, this.result.root, this.result.opts);
      let data = map.generate();
      this.result.css = data[0];
      this.result.map = data[1];
      return this.result;
    }
    sync() {
      if (this.error) throw this.error;
      if (this.processed) return this.result;
      this.processed = true;
      if (this.processing) {
        throw this.getAsyncError();
      }
      for (let plugin22 of this.plugins) {
        let promise = this.runOnRoot(plugin22);
        if (isPromise$1(promise)) {
          throw this.getAsyncError();
        }
      }
      this.prepareVisitors();
      if (this.hasListener) {
        let root2 = this.result.root;
        while (!root2[isClean$3]) {
          root2[isClean$3] = true;
          this.walkSync(root2);
        }
        if (this.listeners.OnceExit) {
          if (root2.type === "document") {
            for (let subRoot of root2.nodes) {
              this.visitSync(this.listeners.OnceExit, subRoot);
            }
          } else {
            this.visitSync(this.listeners.OnceExit, root2);
          }
        }
      }
      return this.result;
    }
    then(onFulfilled, onRejected) {
      if (process.env.NODE_ENV !== "production") {
        if (!("from" in this.opts)) {
          warnOnce$1$1(
            "Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning."
          );
        }
      }
      return this.async().then(onFulfilled, onRejected);
    }
    toString() {
      return this.css;
    }
    visitSync(visitors, node2) {
      for (let [plugin22, visitor] of visitors) {
        this.result.lastPlugin = plugin22;
        let promise;
        try {
          promise = visitor(node2, this.helpers);
        } catch (e2) {
          throw this.handleError(e2, node2.proxyOf);
        }
        if (node2.type !== "root" && node2.type !== "document" && !node2.parent) {
          return true;
        }
        if (isPromise$1(promise)) {
          throw this.getAsyncError();
        }
      }
    }
    visitTick(stack) {
      let visit2 = stack[stack.length - 1];
      let { node: node2, visitors } = visit2;
      if (node2.type !== "root" && node2.type !== "document" && !node2.parent) {
        stack.pop();
        return;
      }
      if (visitors.length > 0 && visit2.visitorIndex < visitors.length) {
        let [plugin22, visitor] = visitors[visit2.visitorIndex];
        visit2.visitorIndex += 1;
        if (visit2.visitorIndex === visitors.length) {
          visit2.visitors = [];
          visit2.visitorIndex = 0;
        }
        this.result.lastPlugin = plugin22;
        try {
          return visitor(node2.toProxy(), this.helpers);
        } catch (e2) {
          throw this.handleError(e2, node2);
        }
      }
      if (visit2.iterator !== 0) {
        let iterator = visit2.iterator;
        let child;
        while (child = node2.nodes[node2.indexes[iterator]]) {
          node2.indexes[iterator] += 1;
          if (!child[isClean$3]) {
            child[isClean$3] = true;
            stack.push(toStack$1(child));
            return;
          }
        }
        visit2.iterator = 0;
        delete node2.indexes[iterator];
      }
      let events = visit2.events;
      while (visit2.eventIndex < events.length) {
        let event = events[visit2.eventIndex];
        visit2.eventIndex += 1;
        if (event === CHILDREN$1) {
          if (node2.nodes && node2.nodes.length) {
            node2[isClean$3] = true;
            visit2.iterator = node2.getIterator();
          }
          return;
        } else if (this.listeners[event]) {
          visit2.visitors = this.listeners[event];
          return;
        }
      }
      stack.pop();
    }
    walkSync(node2) {
      node2[isClean$3] = true;
      let events = getEvents$1(node2);
      for (let event of events) {
        if (event === CHILDREN$1) {
          if (node2.nodes) {
            node2.each((child) => {
              if (!child[isClean$3]) this.walkSync(child);
            });
          }
        } else {
          let visitors = this.listeners[event];
          if (visitors) {
            if (this.visitSync(visitors, node2.toProxy())) return;
          }
        }
      }
    }
    warnings() {
      return this.sync().warnings();
    }
    get content() {
      return this.stringify().content;
    }
    get css() {
      return this.stringify().css;
    }
    get map() {
      return this.stringify().map;
    }
    get messages() {
      return this.sync().messages;
    }
    get opts() {
      return this.result.opts;
    }
    get processor() {
      return this.result.processor;
    }
    get root() {
      return this.sync().root;
    }
    get [Symbol.toStringTag]() {
      return "LazyResult";
    }
  };
  LazyResult$2$1.registerPostcss = (dependant) => {
    postcss$2$1 = dependant;
  };
  var lazyResult$1 = LazyResult$2$1;
  LazyResult$2$1.default = LazyResult$2$1;
  Root$3$1.registerLazyResult(LazyResult$2$1);
  Document$2$1.registerLazyResult(LazyResult$2$1);
  let MapGenerator2$1 = mapGenerator$1;
  let stringify$1$1 = stringify_1$1;
  let warnOnce2$1 = warnOnce$2$1;
  let parse$1$1 = parse_1$1;
  const Result$1$1 = result$1;
  let NoWorkResult$1$1 = class NoWorkResult {
    constructor(processor2, css, opts) {
      css = css.toString();
      this.stringified = false;
      this._processor = processor2;
      this._css = css;
      this._opts = opts;
      this._map = void 0;
      let root2;
      let str = stringify$1$1;
      this.result = new Result$1$1(this._processor, root2, this._opts);
      this.result.css = css;
      let self2 = this;
      Object.defineProperty(this.result, "root", {
        get() {
          return self2.root;
        }
      });
      let map = new MapGenerator2$1(str, root2, this._opts, css);
      if (map.isMap()) {
        let [generatedCSS, generatedMap] = map.generate();
        if (generatedCSS) {
          this.result.css = generatedCSS;
        }
        if (generatedMap) {
          this.result.map = generatedMap;
        }
      } else {
        map.clearAnnotation();
        this.result.css = map.css;
      }
    }
    async() {
      if (this.error) return Promise.reject(this.error);
      return Promise.resolve(this.result);
    }
    catch(onRejected) {
      return this.async().catch(onRejected);
    }
    finally(onFinally) {
      return this.async().then(onFinally, onFinally);
    }
    sync() {
      if (this.error) throw this.error;
      return this.result;
    }
    then(onFulfilled, onRejected) {
      if (process.env.NODE_ENV !== "production") {
        if (!("from" in this._opts)) {
          warnOnce2$1(
            "Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning."
          );
        }
      }
      return this.async().then(onFulfilled, onRejected);
    }
    toString() {
      return this._css;
    }
    warnings() {
      return [];
    }
    get content() {
      return this.result.css;
    }
    get css() {
      return this.result.css;
    }
    get map() {
      return this.result.map;
    }
    get messages() {
      return [];
    }
    get opts() {
      return this.result.opts;
    }
    get processor() {
      return this.result.processor;
    }
    get root() {
      if (this._root) {
        return this._root;
      }
      let root2;
      let parser2 = parse$1$1;
      try {
        root2 = parser2(this._css, this._opts);
      } catch (error) {
        this.error = error;
      }
      if (this.error) {
        throw this.error;
      } else {
        this._root = root2;
        return root2;
      }
    }
    get [Symbol.toStringTag]() {
      return "NoWorkResult";
    }
  };
  var noWorkResult$1 = NoWorkResult$1$1;
  NoWorkResult$1$1.default = NoWorkResult$1$1;
  let NoWorkResult2$1 = noWorkResult$1;
  let LazyResult$1$1 = lazyResult$1;
  let Document$1$1 = document$1$1;
  let Root$2$1 = root$1;
  let Processor$1$1 = class Processor {
    constructor(plugins = []) {
      this.version = "8.4.38";
      this.plugins = this.normalize(plugins);
    }
    normalize(plugins) {
      let normalized = [];
      for (let i2 of plugins) {
        if (i2.postcss === true) {
          i2 = i2();
        } else if (i2.postcss) {
          i2 = i2.postcss;
        }
        if (typeof i2 === "object" && Array.isArray(i2.plugins)) {
          normalized = normalized.concat(i2.plugins);
        } else if (typeof i2 === "object" && i2.postcssPlugin) {
          normalized.push(i2);
        } else if (typeof i2 === "function") {
          normalized.push(i2);
        } else if (typeof i2 === "object" && (i2.parse || i2.stringify)) {
          if (process.env.NODE_ENV !== "production") {
            throw new Error(
              "PostCSS syntaxes cannot be used as plugins. Instead, please use one of the syntax/parser/stringifier options as outlined in your PostCSS runner documentation."
            );
          }
        } else {
          throw new Error(i2 + " is not a PostCSS plugin");
        }
      }
      return normalized;
    }
    process(css, opts = {}) {
      if (!this.plugins.length && !opts.parser && !opts.stringifier && !opts.syntax) {
        return new NoWorkResult2$1(this, css, opts);
      } else {
        return new LazyResult$1$1(this, css, opts);
      }
    }
    use(plugin22) {
      this.plugins = this.plugins.concat(this.normalize([plugin22]));
      return this;
    }
  };
  var processor$1 = Processor$1$1;
  Processor$1$1.default = Processor$1$1;
  Root$2$1.registerProcessor(Processor$1$1);
  Document$1$1.registerProcessor(Processor$1$1);
  let Declaration$1$1 = declaration$1;
  let PreviousMap2$1 = previousMap$1;
  let Comment$1$1 = comment$1;
  let AtRule$1$1 = atRule$1;
  let Input$1$1 = input$1;
  let Root$1$1 = root$1;
  let Rule$1$1 = rule$1;
  function fromJSON$1$1(json, inputs) {
    if (Array.isArray(json)) return json.map((n2) => fromJSON$1$1(n2));
    let { inputs: ownInputs, ...defaults } = json;
    if (ownInputs) {
      inputs = [];
      for (let input2 of ownInputs) {
        let inputHydrated = { ...input2, __proto__: Input$1$1.prototype };
        if (inputHydrated.map) {
          inputHydrated.map = {
            ...inputHydrated.map,
            __proto__: PreviousMap2$1.prototype
          };
        }
        inputs.push(inputHydrated);
      }
    }
    if (defaults.nodes) {
      defaults.nodes = json.nodes.map((n2) => fromJSON$1$1(n2, inputs));
    }
    if (defaults.source) {
      let { inputId, ...source } = defaults.source;
      defaults.source = source;
      if (inputId != null) {
        defaults.source.input = inputs[inputId];
      }
    }
    if (defaults.type === "root") {
      return new Root$1$1(defaults);
    } else if (defaults.type === "decl") {
      return new Declaration$1$1(defaults);
    } else if (defaults.type === "rule") {
      return new Rule$1$1(defaults);
    } else if (defaults.type === "comment") {
      return new Comment$1$1(defaults);
    } else if (defaults.type === "atrule") {
      return new AtRule$1$1(defaults);
    } else {
      throw new Error("Unknown node type: " + json.type);
    }
  }
  var fromJSON_1$1 = fromJSON$1$1;
  fromJSON$1$1.default = fromJSON$1$1;
  let CssSyntaxError2$1 = cssSyntaxError$1;
  let Declaration2$1 = declaration$1;
  let LazyResult2$1 = lazyResult$1;
  let Container2$1 = container$1;
  let Processor2$1 = processor$1;
  let stringify$5 = stringify_1$1;
  let fromJSON$2 = fromJSON_1$1;
  let Document22 = document$1$1;
  let Warning2$1 = warning$1;
  let Comment2$1 = comment$1;
  let AtRule2$1 = atRule$1;
  let Result2$1 = result$1;
  let Input2$1 = input$1;
  let parse$5 = parse_1$1;
  let list$3 = list_1$1;
  let Rule2$1 = rule$1;
  let Root2$1 = root$1;
  let Node2$1 = node$1;
  function postcss$3(...plugins) {
    if (plugins.length === 1 && Array.isArray(plugins[0])) {
      plugins = plugins[0];
    }
    return new Processor2$1(plugins);
  }
  postcss$3.plugin = function plugin(name, initializer) {
    let warningPrinted = false;
    function creator(...args) {
      if (console && console.warn && !warningPrinted) {
        warningPrinted = true;
        console.warn(
          name + ": postcss.plugin was deprecated. Migration guide:\nhttps://evilmartians.com/chronicles/postcss-8-plugin-migration"
        );
        if (process.env.LANG && process.env.LANG.startsWith("cn")) {
          console.warn(
            name + ": 里面 postcss.plugin 被弃用. 迁移指南:\nhttps://www.w3ctech.com/topic/2226"
          );
        }
      }
      let transformer = initializer(...args);
      transformer.postcssPlugin = name;
      transformer.postcssVersion = new Processor2$1().version;
      return transformer;
    }
    let cache;
    Object.defineProperty(creator, "postcss", {
      get() {
        if (!cache) cache = creator();
        return cache;
      }
    });
    creator.process = function(css, processOpts, pluginOpts) {
      return postcss$3([creator(pluginOpts)]).process(css, processOpts);
    };
    return creator;
  };
  postcss$3.stringify = stringify$5;
  postcss$3.parse = parse$5;
  postcss$3.fromJSON = fromJSON$2;
  postcss$3.list = list$3;
  postcss$3.comment = (defaults) => new Comment2$1(defaults);
  postcss$3.atRule = (defaults) => new AtRule2$1(defaults);
  postcss$3.decl = (defaults) => new Declaration2$1(defaults);
  postcss$3.rule = (defaults) => new Rule2$1(defaults);
  postcss$3.root = (defaults) => new Root2$1(defaults);
  postcss$3.document = (defaults) => new Document22(defaults);
  postcss$3.CssSyntaxError = CssSyntaxError2$1;
  postcss$3.Declaration = Declaration2$1;
  postcss$3.Container = Container2$1;
  postcss$3.Processor = Processor2$1;
  postcss$3.Document = Document22;
  postcss$3.Comment = Comment2$1;
  postcss$3.Warning = Warning2$1;
  postcss$3.AtRule = AtRule2$1;
  postcss$3.Result = Result2$1;
  postcss$3.Input = Input2$1;
  postcss$3.Rule = Rule2$1;
  postcss$3.Root = Root2$1;
  postcss$3.Node = Node2$1;
  LazyResult2$1.registerPostcss(postcss$3);
  var postcss_1$1 = postcss$3;
  postcss$3.default = postcss$3;
  const postcss$1$1 = /* @__PURE__ */ getDefaultExportFromCjs$1(postcss_1$1);
  postcss$1$1.stringify;
  postcss$1$1.fromJSON;
  postcss$1$1.plugin;
  postcss$1$1.parse;
  postcss$1$1.list;
  postcss$1$1.document;
  postcss$1$1.comment;
  postcss$1$1.atRule;
  postcss$1$1.rule;
  postcss$1$1.decl;
  postcss$1$1.root;
  postcss$1$1.CssSyntaxError;
  postcss$1$1.Declaration;
  postcss$1$1.Container;
  postcss$1$1.Processor;
  postcss$1$1.Document;
  postcss$1$1.Comment;
  postcss$1$1.Warning;
  postcss$1$1.AtRule;
  postcss$1$1.Result;
  postcss$1$1.Input;
  postcss$1$1.Rule;
  postcss$1$1.Root;
  postcss$1$1.Node;
  var __defProp22 = Object.defineProperty;
  var __defNormalProp22 = (obj, key, value) => key in obj ? __defProp22(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __publicField22 = (obj, key, value) => __defNormalProp22(obj, typeof key !== "symbol" ? key + "" : key, value);
  function getDefaultExportFromCjs(x2) {
    return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
  }
  function getAugmentedNamespace(n2) {
    if (n2.__esModule) return n2;
    var f2 = n2.default;
    if (typeof f2 == "function") {
      var a2 = function a22() {
        if (this instanceof a22) {
          return Reflect.construct(f2, arguments, this.constructor);
        }
        return f2.apply(this, arguments);
      };
      a2.prototype = f2.prototype;
    } else a2 = {};
    Object.defineProperty(a2, "__esModule", { value: true });
    Object.keys(n2).forEach(function(k2) {
      var d2 = Object.getOwnPropertyDescriptor(n2, k2);
      Object.defineProperty(a2, k2, d2.get ? d2 : {
        enumerable: true,
        get: function() {
          return n2[k2];
        }
      });
    });
    return a2;
  }
  var picocolors_browser = { exports: {} };
  var x = String;
  var create = function() {
    return { isColorSupported: false, reset: x, bold: x, dim: x, italic: x, underline: x, inverse: x, hidden: x, strikethrough: x, black: x, red: x, green: x, yellow: x, blue: x, magenta: x, cyan: x, white: x, gray: x, bgBlack: x, bgRed: x, bgGreen: x, bgYellow: x, bgBlue: x, bgMagenta: x, bgCyan: x, bgWhite: x };
  };
  picocolors_browser.exports = create();
  picocolors_browser.exports.createColors = create;
  var picocolors_browserExports = picocolors_browser.exports;
  const __viteBrowserExternal = {};
  const __viteBrowserExternal$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    default: __viteBrowserExternal
  }, Symbol.toStringTag, { value: "Module" }));
  const require$$2 = /* @__PURE__ */ getAugmentedNamespace(__viteBrowserExternal$1);
  let pico = picocolors_browserExports;
  let terminalHighlight$1 = require$$2;
  let CssSyntaxError$3 = class CssSyntaxError2 extends Error {
    constructor(message, line, column, source, file, plugin22) {
      super(message);
      this.name = "CssSyntaxError";
      this.reason = message;
      if (file) {
        this.file = file;
      }
      if (source) {
        this.source = source;
      }
      if (plugin22) {
        this.plugin = plugin22;
      }
      if (typeof line !== "undefined" && typeof column !== "undefined") {
        if (typeof line === "number") {
          this.line = line;
          this.column = column;
        } else {
          this.line = line.line;
          this.column = line.column;
          this.endLine = column.line;
          this.endColumn = column.column;
        }
      }
      this.setMessage();
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, CssSyntaxError2);
      }
    }
    setMessage() {
      this.message = this.plugin ? this.plugin + ": " : "";
      this.message += this.file ? this.file : "<css input>";
      if (typeof this.line !== "undefined") {
        this.message += ":" + this.line + ":" + this.column;
      }
      this.message += ": " + this.reason;
    }
    showSourceCode(color) {
      if (!this.source) return "";
      let css = this.source;
      if (color == null) color = pico.isColorSupported;
      if (terminalHighlight$1) {
        if (color) css = terminalHighlight$1(css);
      }
      let lines = css.split(/\r?\n/);
      let start = Math.max(this.line - 3, 0);
      let end = Math.min(this.line + 2, lines.length);
      let maxWidth = String(end).length;
      let mark, aside;
      if (color) {
        let { bold, gray, red } = pico.createColors(true);
        mark = (text) => bold(red(text));
        aside = (text) => gray(text);
      } else {
        mark = aside = (str) => str;
      }
      return lines.slice(start, end).map((line, index2) => {
        let number = start + 1 + index2;
        let gutter = " " + (" " + number).slice(-maxWidth) + " | ";
        if (number === this.line) {
          let spacing = aside(gutter.replace(/\d/g, " ")) + line.slice(0, this.column - 1).replace(/[^\t]/g, " ");
          return mark(">") + aside(gutter) + line + "\n " + spacing + mark("^");
        }
        return " " + aside(gutter) + line;
      }).join("\n");
    }
    toString() {
      let code = this.showSourceCode();
      if (code) {
        code = "\n\n" + code + "\n";
      }
      return this.name + ": " + this.message + code;
    }
  };
  var cssSyntaxError = CssSyntaxError$3;
  CssSyntaxError$3.default = CssSyntaxError$3;
  var symbols = {};
  symbols.isClean = Symbol("isClean");
  symbols.my = Symbol("my");
  const DEFAULT_RAW = {
    after: "\n",
    beforeClose: "\n",
    beforeComment: "\n",
    beforeDecl: "\n",
    beforeOpen: " ",
    beforeRule: "\n",
    colon: ": ",
    commentLeft: " ",
    commentRight: " ",
    emptyBody: "",
    indent: "    ",
    semicolon: false
  };
  function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
  }
  let Stringifier$2 = class Stringifier2 {
    constructor(builder) {
      this.builder = builder;
    }
    atrule(node2, semicolon) {
      let name = "@" + node2.name;
      let params = node2.params ? this.rawValue(node2, "params") : "";
      if (typeof node2.raws.afterName !== "undefined") {
        name += node2.raws.afterName;
      } else if (params) {
        name += " ";
      }
      if (node2.nodes) {
        this.block(node2, name + params);
      } else {
        let end = (node2.raws.between || "") + (semicolon ? ";" : "");
        this.builder(name + params + end, node2);
      }
    }
    beforeAfter(node2, detect) {
      let value;
      if (node2.type === "decl") {
        value = this.raw(node2, null, "beforeDecl");
      } else if (node2.type === "comment") {
        value = this.raw(node2, null, "beforeComment");
      } else if (detect === "before") {
        value = this.raw(node2, null, "beforeRule");
      } else {
        value = this.raw(node2, null, "beforeClose");
      }
      let buf = node2.parent;
      let depth = 0;
      while (buf && buf.type !== "root") {
        depth += 1;
        buf = buf.parent;
      }
      if (value.includes("\n")) {
        let indent = this.raw(node2, null, "indent");
        if (indent.length) {
          for (let step = 0; step < depth; step++) value += indent;
        }
      }
      return value;
    }
    block(node2, start) {
      let between = this.raw(node2, "between", "beforeOpen");
      this.builder(start + between + "{", node2, "start");
      let after;
      if (node2.nodes && node2.nodes.length) {
        this.body(node2);
        after = this.raw(node2, "after");
      } else {
        after = this.raw(node2, "after", "emptyBody");
      }
      if (after) this.builder(after);
      this.builder("}", node2, "end");
    }
    body(node2) {
      let last = node2.nodes.length - 1;
      while (last > 0) {
        if (node2.nodes[last].type !== "comment") break;
        last -= 1;
      }
      let semicolon = this.raw(node2, "semicolon");
      for (let i2 = 0; i2 < node2.nodes.length; i2++) {
        let child = node2.nodes[i2];
        let before = this.raw(child, "before");
        if (before) this.builder(before);
        this.stringify(child, last !== i2 || semicolon);
      }
    }
    comment(node2) {
      let left = this.raw(node2, "left", "commentLeft");
      let right = this.raw(node2, "right", "commentRight");
      this.builder("/*" + left + node2.text + right + "*/", node2);
    }
    decl(node2, semicolon) {
      let between = this.raw(node2, "between", "colon");
      let string = node2.prop + between + this.rawValue(node2, "value");
      if (node2.important) {
        string += node2.raws.important || " !important";
      }
      if (semicolon) string += ";";
      this.builder(string, node2);
    }
    document(node2) {
      this.body(node2);
    }
    raw(node2, own, detect) {
      let value;
      if (!detect) detect = own;
      if (own) {
        value = node2.raws[own];
        if (typeof value !== "undefined") return value;
      }
      let parent = node2.parent;
      if (detect === "before") {
        if (!parent || parent.type === "root" && parent.first === node2) {
          return "";
        }
        if (parent && parent.type === "document") {
          return "";
        }
      }
      if (!parent) return DEFAULT_RAW[detect];
      let root2 = node2.root();
      if (!root2.rawCache) root2.rawCache = {};
      if (typeof root2.rawCache[detect] !== "undefined") {
        return root2.rawCache[detect];
      }
      if (detect === "before" || detect === "after") {
        return this.beforeAfter(node2, detect);
      } else {
        let method = "raw" + capitalize(detect);
        if (this[method]) {
          value = this[method](root2, node2);
        } else {
          root2.walk((i2) => {
            value = i2.raws[own];
            if (typeof value !== "undefined") return false;
          });
        }
      }
      if (typeof value === "undefined") value = DEFAULT_RAW[detect];
      root2.rawCache[detect] = value;
      return value;
    }
    rawBeforeClose(root2) {
      let value;
      root2.walk((i2) => {
        if (i2.nodes && i2.nodes.length > 0) {
          if (typeof i2.raws.after !== "undefined") {
            value = i2.raws.after;
            if (value.includes("\n")) {
              value = value.replace(/[^\n]+$/, "");
            }
            return false;
          }
        }
      });
      if (value) value = value.replace(/\S/g, "");
      return value;
    }
    rawBeforeComment(root2, node2) {
      let value;
      root2.walkComments((i2) => {
        if (typeof i2.raws.before !== "undefined") {
          value = i2.raws.before;
          if (value.includes("\n")) {
            value = value.replace(/[^\n]+$/, "");
          }
          return false;
        }
      });
      if (typeof value === "undefined") {
        value = this.raw(node2, null, "beforeDecl");
      } else if (value) {
        value = value.replace(/\S/g, "");
      }
      return value;
    }
    rawBeforeDecl(root2, node2) {
      let value;
      root2.walkDecls((i2) => {
        if (typeof i2.raws.before !== "undefined") {
          value = i2.raws.before;
          if (value.includes("\n")) {
            value = value.replace(/[^\n]+$/, "");
          }
          return false;
        }
      });
      if (typeof value === "undefined") {
        value = this.raw(node2, null, "beforeRule");
      } else if (value) {
        value = value.replace(/\S/g, "");
      }
      return value;
    }
    rawBeforeOpen(root2) {
      let value;
      root2.walk((i2) => {
        if (i2.type !== "decl") {
          value = i2.raws.between;
          if (typeof value !== "undefined") return false;
        }
      });
      return value;
    }
    rawBeforeRule(root2) {
      let value;
      root2.walk((i2) => {
        if (i2.nodes && (i2.parent !== root2 || root2.first !== i2)) {
          if (typeof i2.raws.before !== "undefined") {
            value = i2.raws.before;
            if (value.includes("\n")) {
              value = value.replace(/[^\n]+$/, "");
            }
            return false;
          }
        }
      });
      if (value) value = value.replace(/\S/g, "");
      return value;
    }
    rawColon(root2) {
      let value;
      root2.walkDecls((i2) => {
        if (typeof i2.raws.between !== "undefined") {
          value = i2.raws.between.replace(/[^\s:]/g, "");
          return false;
        }
      });
      return value;
    }
    rawEmptyBody(root2) {
      let value;
      root2.walk((i2) => {
        if (i2.nodes && i2.nodes.length === 0) {
          value = i2.raws.after;
          if (typeof value !== "undefined") return false;
        }
      });
      return value;
    }
    rawIndent(root2) {
      if (root2.raws.indent) return root2.raws.indent;
      let value;
      root2.walk((i2) => {
        let p2 = i2.parent;
        if (p2 && p2 !== root2 && p2.parent && p2.parent === root2) {
          if (typeof i2.raws.before !== "undefined") {
            let parts = i2.raws.before.split("\n");
            value = parts[parts.length - 1];
            value = value.replace(/\S/g, "");
            return false;
          }
        }
      });
      return value;
    }
    rawSemicolon(root2) {
      let value;
      root2.walk((i2) => {
        if (i2.nodes && i2.nodes.length && i2.last.type === "decl") {
          value = i2.raws.semicolon;
          if (typeof value !== "undefined") return false;
        }
      });
      return value;
    }
    rawValue(node2, prop) {
      let value = node2[prop];
      let raw = node2.raws[prop];
      if (raw && raw.value === value) {
        return raw.raw;
      }
      return value;
    }
    root(node2) {
      this.body(node2);
      if (node2.raws.after) this.builder(node2.raws.after);
    }
    rule(node2) {
      this.block(node2, this.rawValue(node2, "selector"));
      if (node2.raws.ownSemicolon) {
        this.builder(node2.raws.ownSemicolon, node2, "end");
      }
    }
    stringify(node2, semicolon) {
      if (!this[node2.type]) {
        throw new Error(
          "Unknown AST node type " + node2.type + ". Maybe you need to change PostCSS stringifier."
        );
      }
      this[node2.type](node2, semicolon);
    }
  };
  var stringifier = Stringifier$2;
  Stringifier$2.default = Stringifier$2;
  let Stringifier$1 = stringifier;
  function stringify$4(node2, builder) {
    let str = new Stringifier$1(builder);
    str.stringify(node2);
  }
  var stringify_1 = stringify$4;
  stringify$4.default = stringify$4;
  let { isClean: isClean$2, my: my$2 } = symbols;
  let CssSyntaxError$2 = cssSyntaxError;
  let Stringifier22 = stringifier;
  let stringify$3 = stringify_1;
  function cloneNode(obj, parent) {
    let cloned = new obj.constructor();
    for (let i2 in obj) {
      if (!Object.prototype.hasOwnProperty.call(obj, i2)) {
        continue;
      }
      if (i2 === "proxyCache") continue;
      let value = obj[i2];
      let type = typeof value;
      if (i2 === "parent" && type === "object") {
        if (parent) cloned[i2] = parent;
      } else if (i2 === "source") {
        cloned[i2] = value;
      } else if (Array.isArray(value)) {
        cloned[i2] = value.map((j2) => cloneNode(j2, cloned));
      } else {
        if (type === "object" && value !== null) value = cloneNode(value);
        cloned[i2] = value;
      }
    }
    return cloned;
  }
  let Node$4 = class Node3 {
    constructor(defaults = {}) {
      this.raws = {};
      this[isClean$2] = false;
      this[my$2] = true;
      for (let name in defaults) {
        if (name === "nodes") {
          this.nodes = [];
          for (let node2 of defaults[name]) {
            if (typeof node2.clone === "function") {
              this.append(node2.clone());
            } else {
              this.append(node2);
            }
          }
        } else {
          this[name] = defaults[name];
        }
      }
    }
    addToError(error) {
      error.postcssNode = this;
      if (error.stack && this.source && /\n\s{4}at /.test(error.stack)) {
        let s2 = this.source;
        error.stack = error.stack.replace(
          /\n\s{4}at /,
          `$&${s2.input.from}:${s2.start.line}:${s2.start.column}$&`
        );
      }
      return error;
    }
    after(add) {
      this.parent.insertAfter(this, add);
      return this;
    }
    assign(overrides = {}) {
      for (let name in overrides) {
        this[name] = overrides[name];
      }
      return this;
    }
    before(add) {
      this.parent.insertBefore(this, add);
      return this;
    }
    cleanRaws(keepBetween) {
      delete this.raws.before;
      delete this.raws.after;
      if (!keepBetween) delete this.raws.between;
    }
    clone(overrides = {}) {
      let cloned = cloneNode(this);
      for (let name in overrides) {
        cloned[name] = overrides[name];
      }
      return cloned;
    }
    cloneAfter(overrides = {}) {
      let cloned = this.clone(overrides);
      this.parent.insertAfter(this, cloned);
      return cloned;
    }
    cloneBefore(overrides = {}) {
      let cloned = this.clone(overrides);
      this.parent.insertBefore(this, cloned);
      return cloned;
    }
    error(message, opts = {}) {
      if (this.source) {
        let { end, start } = this.rangeBy(opts);
        return this.source.input.error(
          message,
          { column: start.column, line: start.line },
          { column: end.column, line: end.line },
          opts
        );
      }
      return new CssSyntaxError$2(message);
    }
    getProxyProcessor() {
      return {
        get(node2, prop) {
          if (prop === "proxyOf") {
            return node2;
          } else if (prop === "root") {
            return () => node2.root().toProxy();
          } else {
            return node2[prop];
          }
        },
        set(node2, prop, value) {
          if (node2[prop] === value) return true;
          node2[prop] = value;
          if (prop === "prop" || prop === "value" || prop === "name" || prop === "params" || prop === "important" || /* c8 ignore next */
          prop === "text") {
            node2.markDirty();
          }
          return true;
        }
      };
    }
    markDirty() {
      if (this[isClean$2]) {
        this[isClean$2] = false;
        let next = this;
        while (next = next.parent) {
          next[isClean$2] = false;
        }
      }
    }
    next() {
      if (!this.parent) return void 0;
      let index2 = this.parent.index(this);
      return this.parent.nodes[index2 + 1];
    }
    positionBy(opts, stringRepresentation) {
      let pos = this.source.start;
      if (opts.index) {
        pos = this.positionInside(opts.index, stringRepresentation);
      } else if (opts.word) {
        stringRepresentation = this.toString();
        let index2 = stringRepresentation.indexOf(opts.word);
        if (index2 !== -1) pos = this.positionInside(index2, stringRepresentation);
      }
      return pos;
    }
    positionInside(index2, stringRepresentation) {
      let string = stringRepresentation || this.toString();
      let column = this.source.start.column;
      let line = this.source.start.line;
      for (let i2 = 0; i2 < index2; i2++) {
        if (string[i2] === "\n") {
          column = 1;
          line += 1;
        } else {
          column += 1;
        }
      }
      return { column, line };
    }
    prev() {
      if (!this.parent) return void 0;
      let index2 = this.parent.index(this);
      return this.parent.nodes[index2 - 1];
    }
    rangeBy(opts) {
      let start = {
        column: this.source.start.column,
        line: this.source.start.line
      };
      let end = this.source.end ? {
        column: this.source.end.column + 1,
        line: this.source.end.line
      } : {
        column: start.column + 1,
        line: start.line
      };
      if (opts.word) {
        let stringRepresentation = this.toString();
        let index2 = stringRepresentation.indexOf(opts.word);
        if (index2 !== -1) {
          start = this.positionInside(index2, stringRepresentation);
          end = this.positionInside(index2 + opts.word.length, stringRepresentation);
        }
      } else {
        if (opts.start) {
          start = {
            column: opts.start.column,
            line: opts.start.line
          };
        } else if (opts.index) {
          start = this.positionInside(opts.index);
        }
        if (opts.end) {
          end = {
            column: opts.end.column,
            line: opts.end.line
          };
        } else if (typeof opts.endIndex === "number") {
          end = this.positionInside(opts.endIndex);
        } else if (opts.index) {
          end = this.positionInside(opts.index + 1);
        }
      }
      if (end.line < start.line || end.line === start.line && end.column <= start.column) {
        end = { column: start.column + 1, line: start.line };
      }
      return { end, start };
    }
    raw(prop, defaultType) {
      let str = new Stringifier22();
      return str.raw(this, prop, defaultType);
    }
    remove() {
      if (this.parent) {
        this.parent.removeChild(this);
      }
      this.parent = void 0;
      return this;
    }
    replaceWith(...nodes) {
      if (this.parent) {
        let bookmark = this;
        let foundSelf = false;
        for (let node2 of nodes) {
          if (node2 === this) {
            foundSelf = true;
          } else if (foundSelf) {
            this.parent.insertAfter(bookmark, node2);
            bookmark = node2;
          } else {
            this.parent.insertBefore(bookmark, node2);
          }
        }
        if (!foundSelf) {
          this.remove();
        }
      }
      return this;
    }
    root() {
      let result2 = this;
      while (result2.parent && result2.parent.type !== "document") {
        result2 = result2.parent;
      }
      return result2;
    }
    toJSON(_2, inputs) {
      let fixed = {};
      let emitInputs = inputs == null;
      inputs = inputs || /* @__PURE__ */ new Map();
      let inputsNextIndex = 0;
      for (let name in this) {
        if (!Object.prototype.hasOwnProperty.call(this, name)) {
          continue;
        }
        if (name === "parent" || name === "proxyCache") continue;
        let value = this[name];
        if (Array.isArray(value)) {
          fixed[name] = value.map((i2) => {
            if (typeof i2 === "object" && i2.toJSON) {
              return i2.toJSON(null, inputs);
            } else {
              return i2;
            }
          });
        } else if (typeof value === "object" && value.toJSON) {
          fixed[name] = value.toJSON(null, inputs);
        } else if (name === "source") {
          let inputId = inputs.get(value.input);
          if (inputId == null) {
            inputId = inputsNextIndex;
            inputs.set(value.input, inputsNextIndex);
            inputsNextIndex++;
          }
          fixed[name] = {
            end: value.end,
            inputId,
            start: value.start
          };
        } else {
          fixed[name] = value;
        }
      }
      if (emitInputs) {
        fixed.inputs = [...inputs.keys()].map((input2) => input2.toJSON());
      }
      return fixed;
    }
    toProxy() {
      if (!this.proxyCache) {
        this.proxyCache = new Proxy(this, this.getProxyProcessor());
      }
      return this.proxyCache;
    }
    toString(stringifier2 = stringify$3) {
      if (stringifier2.stringify) stringifier2 = stringifier2.stringify;
      let result2 = "";
      stringifier2(this, (i2) => {
        result2 += i2;
      });
      return result2;
    }
    warn(result2, text, opts) {
      let data = { node: this };
      for (let i2 in opts) data[i2] = opts[i2];
      return result2.warn(text, data);
    }
    get proxyOf() {
      return this;
    }
  };
  var node = Node$4;
  Node$4.default = Node$4;
  let Node$3 = node;
  let Declaration$4 = class Declaration2 extends Node$3 {
    constructor(defaults) {
      if (defaults && typeof defaults.value !== "undefined" && typeof defaults.value !== "string") {
        defaults = { ...defaults, value: String(defaults.value) };
      }
      super(defaults);
      this.type = "decl";
    }
    get variable() {
      return this.prop.startsWith("--") || this.prop[0] === "$";
    }
  };
  var declaration = Declaration$4;
  Declaration$4.default = Declaration$4;
  let urlAlphabet = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
  let customAlphabet = (alphabet, defaultSize = 21) => {
    return (size = defaultSize) => {
      let id = "";
      let i2 = size;
      while (i2--) {
        id += alphabet[Math.random() * alphabet.length | 0];
      }
      return id;
    };
  };
  let nanoid$1 = (size = 21) => {
    let id = "";
    let i2 = size;
    while (i2--) {
      id += urlAlphabet[Math.random() * 64 | 0];
    }
    return id;
  };
  var nonSecure = { nanoid: nanoid$1, customAlphabet };
  let { SourceMapConsumer: SourceMapConsumer$2, SourceMapGenerator: SourceMapGenerator$2 } = require$$2;
  let { existsSync, readFileSync } = require$$2;
  let { dirname: dirname$1, join } = require$$2;
  function fromBase64(str) {
    if (Buffer) {
      return Buffer.from(str, "base64").toString();
    } else {
      return window.atob(str);
    }
  }
  let PreviousMap$2 = class PreviousMap2 {
    constructor(css, opts) {
      if (opts.map === false) return;
      this.loadAnnotation(css);
      this.inline = this.startWith(this.annotation, "data:");
      let prev = opts.map ? opts.map.prev : void 0;
      let text = this.loadMap(opts.from, prev);
      if (!this.mapFile && opts.from) {
        this.mapFile = opts.from;
      }
      if (this.mapFile) this.root = dirname$1(this.mapFile);
      if (text) this.text = text;
    }
    consumer() {
      if (!this.consumerCache) {
        this.consumerCache = new SourceMapConsumer$2(this.text);
      }
      return this.consumerCache;
    }
    decodeInline(text) {
      let baseCharsetUri = /^data:application\/json;charset=utf-?8;base64,/;
      let baseUri = /^data:application\/json;base64,/;
      let charsetUri = /^data:application\/json;charset=utf-?8,/;
      let uri = /^data:application\/json,/;
      if (charsetUri.test(text) || uri.test(text)) {
        return decodeURIComponent(text.substr(RegExp.lastMatch.length));
      }
      if (baseCharsetUri.test(text) || baseUri.test(text)) {
        return fromBase64(text.substr(RegExp.lastMatch.length));
      }
      let encoding = text.match(/data:application\/json;([^,]+),/)[1];
      throw new Error("Unsupported source map encoding " + encoding);
    }
    getAnnotationURL(sourceMapString) {
      return sourceMapString.replace(/^\/\*\s*# sourceMappingURL=/, "").trim();
    }
    isMap(map) {
      if (typeof map !== "object") return false;
      return typeof map.mappings === "string" || typeof map._mappings === "string" || Array.isArray(map.sections);
    }
    loadAnnotation(css) {
      let comments = css.match(/\/\*\s*# sourceMappingURL=/gm);
      if (!comments) return;
      let start = css.lastIndexOf(comments.pop());
      let end = css.indexOf("*/", start);
      if (start > -1 && end > -1) {
        this.annotation = this.getAnnotationURL(css.substring(start, end));
      }
    }
    loadFile(path) {
      this.root = dirname$1(path);
      if (existsSync(path)) {
        this.mapFile = path;
        return readFileSync(path, "utf-8").toString().trim();
      }
    }
    loadMap(file, prev) {
      if (prev === false) return false;
      if (prev) {
        if (typeof prev === "string") {
          return prev;
        } else if (typeof prev === "function") {
          let prevPath = prev(file);
          if (prevPath) {
            let map = this.loadFile(prevPath);
            if (!map) {
              throw new Error(
                "Unable to load previous source map: " + prevPath.toString()
              );
            }
            return map;
          }
        } else if (prev instanceof SourceMapConsumer$2) {
          return SourceMapGenerator$2.fromSourceMap(prev).toString();
        } else if (prev instanceof SourceMapGenerator$2) {
          return prev.toString();
        } else if (this.isMap(prev)) {
          return JSON.stringify(prev);
        } else {
          throw new Error(
            "Unsupported previous source map format: " + prev.toString()
          );
        }
      } else if (this.inline) {
        return this.decodeInline(this.annotation);
      } else if (this.annotation) {
        let map = this.annotation;
        if (file) map = join(dirname$1(file), map);
        return this.loadFile(map);
      }
    }
    startWith(string, start) {
      if (!string) return false;
      return string.substr(0, start.length) === start;
    }
    withContent() {
      return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0);
    }
  };
  var previousMap = PreviousMap$2;
  PreviousMap$2.default = PreviousMap$2;
  let { SourceMapConsumer: SourceMapConsumer$1, SourceMapGenerator: SourceMapGenerator$1 } = require$$2;
  let { fileURLToPath, pathToFileURL: pathToFileURL$1 } = require$$2;
  let { isAbsolute, resolve: resolve$1 } = require$$2;
  let { nanoid } = nonSecure;
  let terminalHighlight = require$$2;
  let CssSyntaxError$1 = cssSyntaxError;
  let PreviousMap$1 = previousMap;
  let fromOffsetCache = Symbol("fromOffsetCache");
  let sourceMapAvailable$1 = Boolean(SourceMapConsumer$1 && SourceMapGenerator$1);
  let pathAvailable$1 = Boolean(resolve$1 && isAbsolute);
  let Input$4 = class Input2 {
    constructor(css, opts = {}) {
      if (css === null || typeof css === "undefined" || typeof css === "object" && !css.toString) {
        throw new Error(`PostCSS received ${css} instead of CSS string`);
      }
      this.css = css.toString();
      if (this.css[0] === "\uFEFF" || this.css[0] === "￾") {
        this.hasBOM = true;
        this.css = this.css.slice(1);
      } else {
        this.hasBOM = false;
      }
      if (opts.from) {
        if (!pathAvailable$1 || /^\w+:\/\//.test(opts.from) || isAbsolute(opts.from)) {
          this.file = opts.from;
        } else {
          this.file = resolve$1(opts.from);
        }
      }
      if (pathAvailable$1 && sourceMapAvailable$1) {
        let map = new PreviousMap$1(this.css, opts);
        if (map.text) {
          this.map = map;
          let file = map.consumer().file;
          if (!this.file && file) this.file = this.mapResolve(file);
        }
      }
      if (!this.file) {
        this.id = "<input css " + nanoid(6) + ">";
      }
      if (this.map) this.map.file = this.from;
    }
    error(message, line, column, opts = {}) {
      let result2, endLine, endColumn;
      if (line && typeof line === "object") {
        let start = line;
        let end = column;
        if (typeof start.offset === "number") {
          let pos = this.fromOffset(start.offset);
          line = pos.line;
          column = pos.col;
        } else {
          line = start.line;
          column = start.column;
        }
        if (typeof end.offset === "number") {
          let pos = this.fromOffset(end.offset);
          endLine = pos.line;
          endColumn = pos.col;
        } else {
          endLine = end.line;
          endColumn = end.column;
        }
      } else if (!column) {
        let pos = this.fromOffset(line);
        line = pos.line;
        column = pos.col;
      }
      let origin = this.origin(line, column, endLine, endColumn);
      if (origin) {
        result2 = new CssSyntaxError$1(
          message,
          origin.endLine === void 0 ? origin.line : { column: origin.column, line: origin.line },
          origin.endLine === void 0 ? origin.column : { column: origin.endColumn, line: origin.endLine },
          origin.source,
          origin.file,
          opts.plugin
        );
      } else {
        result2 = new CssSyntaxError$1(
          message,
          endLine === void 0 ? line : { column, line },
          endLine === void 0 ? column : { column: endColumn, line: endLine },
          this.css,
          this.file,
          opts.plugin
        );
      }
      result2.input = { column, endColumn, endLine, line, source: this.css };
      if (this.file) {
        if (pathToFileURL$1) {
          result2.input.url = pathToFileURL$1(this.file).toString();
        }
        result2.input.file = this.file;
      }
      return result2;
    }
    fromOffset(offset) {
      let lastLine, lineToIndex;
      if (!this[fromOffsetCache]) {
        let lines = this.css.split("\n");
        lineToIndex = new Array(lines.length);
        let prevIndex = 0;
        for (let i2 = 0, l2 = lines.length; i2 < l2; i2++) {
          lineToIndex[i2] = prevIndex;
          prevIndex += lines[i2].length + 1;
        }
        this[fromOffsetCache] = lineToIndex;
      } else {
        lineToIndex = this[fromOffsetCache];
      }
      lastLine = lineToIndex[lineToIndex.length - 1];
      let min = 0;
      if (offset >= lastLine) {
        min = lineToIndex.length - 1;
      } else {
        let max = lineToIndex.length - 2;
        let mid;
        while (min < max) {
          mid = min + (max - min >> 1);
          if (offset < lineToIndex[mid]) {
            max = mid - 1;
          } else if (offset >= lineToIndex[mid + 1]) {
            min = mid + 1;
          } else {
            min = mid;
            break;
          }
        }
      }
      return {
        col: offset - lineToIndex[min] + 1,
        line: min + 1
      };
    }
    mapResolve(file) {
      if (/^\w+:\/\//.test(file)) {
        return file;
      }
      return resolve$1(this.map.consumer().sourceRoot || this.map.root || ".", file);
    }
    origin(line, column, endLine, endColumn) {
      if (!this.map) return false;
      let consumer = this.map.consumer();
      let from = consumer.originalPositionFor({ column, line });
      if (!from.source) return false;
      let to;
      if (typeof endLine === "number") {
        to = consumer.originalPositionFor({ column: endColumn, line: endLine });
      }
      let fromUrl;
      if (isAbsolute(from.source)) {
        fromUrl = pathToFileURL$1(from.source);
      } else {
        fromUrl = new URL(
          from.source,
          this.map.consumer().sourceRoot || pathToFileURL$1(this.map.mapFile)
        );
      }
      let result2 = {
        column: from.column,
        endColumn: to && to.column,
        endLine: to && to.line,
        line: from.line,
        url: fromUrl.toString()
      };
      if (fromUrl.protocol === "file:") {
        if (fileURLToPath) {
          result2.file = fileURLToPath(fromUrl);
        } else {
          throw new Error(`file: protocol is not available in this PostCSS build`);
        }
      }
      let source = consumer.sourceContentFor(from.source);
      if (source) result2.source = source;
      return result2;
    }
    toJSON() {
      let json = {};
      for (let name of ["hasBOM", "css", "file", "id"]) {
        if (this[name] != null) {
          json[name] = this[name];
        }
      }
      if (this.map) {
        json.map = { ...this.map };
        if (json.map.consumerCache) {
          json.map.consumerCache = void 0;
        }
      }
      return json;
    }
    get from() {
      return this.file || this.id;
    }
  };
  var input = Input$4;
  Input$4.default = Input$4;
  if (terminalHighlight && terminalHighlight.registerInput) {
    terminalHighlight.registerInput(Input$4);
  }
  let { SourceMapConsumer, SourceMapGenerator } = require$$2;
  let { dirname, relative, resolve, sep } = require$$2;
  let { pathToFileURL } = require$$2;
  let Input$3 = input;
  let sourceMapAvailable = Boolean(SourceMapConsumer && SourceMapGenerator);
  let pathAvailable = Boolean(dirname && resolve && relative && sep);
  let MapGenerator$2 = class MapGenerator2 {
    constructor(stringify2, root2, opts, cssString) {
      this.stringify = stringify2;
      this.mapOpts = opts.map || {};
      this.root = root2;
      this.opts = opts;
      this.css = cssString;
      this.originalCSS = cssString;
      this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute;
      this.memoizedFileURLs = /* @__PURE__ */ new Map();
      this.memoizedPaths = /* @__PURE__ */ new Map();
      this.memoizedURLs = /* @__PURE__ */ new Map();
    }
    addAnnotation() {
      let content;
      if (this.isInline()) {
        content = "data:application/json;base64," + this.toBase64(this.map.toString());
      } else if (typeof this.mapOpts.annotation === "string") {
        content = this.mapOpts.annotation;
      } else if (typeof this.mapOpts.annotation === "function") {
        content = this.mapOpts.annotation(this.opts.to, this.root);
      } else {
        content = this.outputFile() + ".map";
      }
      let eol = "\n";
      if (this.css.includes("\r\n")) eol = "\r\n";
      this.css += eol + "/*# sourceMappingURL=" + content + " */";
    }
    applyPrevMaps() {
      for (let prev of this.previous()) {
        let from = this.toUrl(this.path(prev.file));
        let root2 = prev.root || dirname(prev.file);
        let map;
        if (this.mapOpts.sourcesContent === false) {
          map = new SourceMapConsumer(prev.text);
          if (map.sourcesContent) {
            map.sourcesContent = null;
          }
        } else {
          map = prev.consumer();
        }
        this.map.applySourceMap(map, from, this.toUrl(this.path(root2)));
      }
    }
    clearAnnotation() {
      if (this.mapOpts.annotation === false) return;
      if (this.root) {
        let node2;
        for (let i2 = this.root.nodes.length - 1; i2 >= 0; i2--) {
          node2 = this.root.nodes[i2];
          if (node2.type !== "comment") continue;
          if (node2.text.indexOf("# sourceMappingURL=") === 0) {
            this.root.removeChild(i2);
          }
        }
      } else if (this.css) {
        this.css = this.css.replace(/\n*?\/\*#[\S\s]*?\*\/$/gm, "");
      }
    }
    generate() {
      this.clearAnnotation();
      if (pathAvailable && sourceMapAvailable && this.isMap()) {
        return this.generateMap();
      } else {
        let result2 = "";
        this.stringify(this.root, (i2) => {
          result2 += i2;
        });
        return [result2];
      }
    }
    generateMap() {
      if (this.root) {
        this.generateString();
      } else if (this.previous().length === 1) {
        let prev = this.previous()[0].consumer();
        prev.file = this.outputFile();
        this.map = SourceMapGenerator.fromSourceMap(prev, {
          ignoreInvalidMapping: true
        });
      } else {
        this.map = new SourceMapGenerator({
          file: this.outputFile(),
          ignoreInvalidMapping: true
        });
        this.map.addMapping({
          generated: { column: 0, line: 1 },
          original: { column: 0, line: 1 },
          source: this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>"
        });
      }
      if (this.isSourcesContent()) this.setSourcesContent();
      if (this.root && this.previous().length > 0) this.applyPrevMaps();
      if (this.isAnnotation()) this.addAnnotation();
      if (this.isInline()) {
        return [this.css];
      } else {
        return [this.css, this.map];
      }
    }
    generateString() {
      this.css = "";
      this.map = new SourceMapGenerator({
        file: this.outputFile(),
        ignoreInvalidMapping: true
      });
      let line = 1;
      let column = 1;
      let noSource = "<no source>";
      let mapping = {
        generated: { column: 0, line: 0 },
        original: { column: 0, line: 0 },
        source: ""
      };
      let lines, last;
      this.stringify(this.root, (str, node2, type) => {
        this.css += str;
        if (node2 && type !== "end") {
          mapping.generated.line = line;
          mapping.generated.column = column - 1;
          if (node2.source && node2.source.start) {
            mapping.source = this.sourcePath(node2);
            mapping.original.line = node2.source.start.line;
            mapping.original.column = node2.source.start.column - 1;
            this.map.addMapping(mapping);
          } else {
            mapping.source = noSource;
            mapping.original.line = 1;
            mapping.original.column = 0;
            this.map.addMapping(mapping);
          }
        }
        lines = str.match(/\n/g);
        if (lines) {
          line += lines.length;
          last = str.lastIndexOf("\n");
          column = str.length - last;
        } else {
          column += str.length;
        }
        if (node2 && type !== "start") {
          let p2 = node2.parent || { raws: {} };
          let childless = node2.type === "decl" || node2.type === "atrule" && !node2.nodes;
          if (!childless || node2 !== p2.last || p2.raws.semicolon) {
            if (node2.source && node2.source.end) {
              mapping.source = this.sourcePath(node2);
              mapping.original.line = node2.source.end.line;
              mapping.original.column = node2.source.end.column - 1;
              mapping.generated.line = line;
              mapping.generated.column = column - 2;
              this.map.addMapping(mapping);
            } else {
              mapping.source = noSource;
              mapping.original.line = 1;
              mapping.original.column = 0;
              mapping.generated.line = line;
              mapping.generated.column = column - 1;
              this.map.addMapping(mapping);
            }
          }
        }
      });
    }
    isAnnotation() {
      if (this.isInline()) {
        return true;
      }
      if (typeof this.mapOpts.annotation !== "undefined") {
        return this.mapOpts.annotation;
      }
      if (this.previous().length) {
        return this.previous().some((i2) => i2.annotation);
      }
      return true;
    }
    isInline() {
      if (typeof this.mapOpts.inline !== "undefined") {
        return this.mapOpts.inline;
      }
      let annotation = this.mapOpts.annotation;
      if (typeof annotation !== "undefined" && annotation !== true) {
        return false;
      }
      if (this.previous().length) {
        return this.previous().some((i2) => i2.inline);
      }
      return true;
    }
    isMap() {
      if (typeof this.opts.map !== "undefined") {
        return !!this.opts.map;
      }
      return this.previous().length > 0;
    }
    isSourcesContent() {
      if (typeof this.mapOpts.sourcesContent !== "undefined") {
        return this.mapOpts.sourcesContent;
      }
      if (this.previous().length) {
        return this.previous().some((i2) => i2.withContent());
      }
      return true;
    }
    outputFile() {
      if (this.opts.to) {
        return this.path(this.opts.to);
      } else if (this.opts.from) {
        return this.path(this.opts.from);
      } else {
        return "to.css";
      }
    }
    path(file) {
      if (this.mapOpts.absolute) return file;
      if (file.charCodeAt(0) === 60) return file;
      if (/^\w+:\/\//.test(file)) return file;
      let cached = this.memoizedPaths.get(file);
      if (cached) return cached;
      let from = this.opts.to ? dirname(this.opts.to) : ".";
      if (typeof this.mapOpts.annotation === "string") {
        from = dirname(resolve(from, this.mapOpts.annotation));
      }
      let path = relative(from, file);
      this.memoizedPaths.set(file, path);
      return path;
    }
    previous() {
      if (!this.previousMaps) {
        this.previousMaps = [];
        if (this.root) {
          this.root.walk((node2) => {
            if (node2.source && node2.source.input.map) {
              let map = node2.source.input.map;
              if (!this.previousMaps.includes(map)) {
                this.previousMaps.push(map);
              }
            }
          });
        } else {
          let input2 = new Input$3(this.originalCSS, this.opts);
          if (input2.map) this.previousMaps.push(input2.map);
        }
      }
      return this.previousMaps;
    }
    setSourcesContent() {
      let already = {};
      if (this.root) {
        this.root.walk((node2) => {
          if (node2.source) {
            let from = node2.source.input.from;
            if (from && !already[from]) {
              already[from] = true;
              let fromUrl = this.usesFileUrls ? this.toFileUrl(from) : this.toUrl(this.path(from));
              this.map.setSourceContent(fromUrl, node2.source.input.css);
            }
          }
        });
      } else if (this.css) {
        let from = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
        this.map.setSourceContent(from, this.css);
      }
    }
    sourcePath(node2) {
      if (this.mapOpts.from) {
        return this.toUrl(this.mapOpts.from);
      } else if (this.usesFileUrls) {
        return this.toFileUrl(node2.source.input.from);
      } else {
        return this.toUrl(this.path(node2.source.input.from));
      }
    }
    toBase64(str) {
      if (Buffer) {
        return Buffer.from(str).toString("base64");
      } else {
        return window.btoa(unescape(encodeURIComponent(str)));
      }
    }
    toFileUrl(path) {
      let cached = this.memoizedFileURLs.get(path);
      if (cached) return cached;
      if (pathToFileURL) {
        let fileURL = pathToFileURL(path).toString();
        this.memoizedFileURLs.set(path, fileURL);
        return fileURL;
      } else {
        throw new Error(
          "`map.absolute` option is not available in this PostCSS build"
        );
      }
    }
    toUrl(path) {
      let cached = this.memoizedURLs.get(path);
      if (cached) return cached;
      if (sep === "\\") {
        path = path.replace(/\\/g, "/");
      }
      let url = encodeURI(path).replace(/[#?]/g, encodeURIComponent);
      this.memoizedURLs.set(path, url);
      return url;
    }
  };
  var mapGenerator = MapGenerator$2;
  let Node$2 = node;
  let Comment$4 = class Comment2 extends Node$2 {
    constructor(defaults) {
      super(defaults);
      this.type = "comment";
    }
  };
  var comment = Comment$4;
  Comment$4.default = Comment$4;
  let { isClean: isClean$1, my: my$1 } = symbols;
  let Declaration$3 = declaration;
  let Comment$3 = comment;
  let Node$1 = node;
  let parse$4, Rule$4, AtRule$4, Root$6;
  function cleanSource(nodes) {
    return nodes.map((i2) => {
      if (i2.nodes) i2.nodes = cleanSource(i2.nodes);
      delete i2.source;
      return i2;
    });
  }
  function markDirtyUp(node2) {
    node2[isClean$1] = false;
    if (node2.proxyOf.nodes) {
      for (let i2 of node2.proxyOf.nodes) {
        markDirtyUp(i2);
      }
    }
  }
  let Container$7 = class Container2 extends Node$1 {
    append(...children) {
      for (let child of children) {
        let nodes = this.normalize(child, this.last);
        for (let node2 of nodes) this.proxyOf.nodes.push(node2);
      }
      this.markDirty();
      return this;
    }
    cleanRaws(keepBetween) {
      super.cleanRaws(keepBetween);
      if (this.nodes) {
        for (let node2 of this.nodes) node2.cleanRaws(keepBetween);
      }
    }
    each(callback) {
      if (!this.proxyOf.nodes) return void 0;
      let iterator = this.getIterator();
      let index2, result2;
      while (this.indexes[iterator] < this.proxyOf.nodes.length) {
        index2 = this.indexes[iterator];
        result2 = callback(this.proxyOf.nodes[index2], index2);
        if (result2 === false) break;
        this.indexes[iterator] += 1;
      }
      delete this.indexes[iterator];
      return result2;
    }
    every(condition) {
      return this.nodes.every(condition);
    }
    getIterator() {
      if (!this.lastEach) this.lastEach = 0;
      if (!this.indexes) this.indexes = {};
      this.lastEach += 1;
      let iterator = this.lastEach;
      this.indexes[iterator] = 0;
      return iterator;
    }
    getProxyProcessor() {
      return {
        get(node2, prop) {
          if (prop === "proxyOf") {
            return node2;
          } else if (!node2[prop]) {
            return node2[prop];
          } else if (prop === "each" || typeof prop === "string" && prop.startsWith("walk")) {
            return (...args) => {
              return node2[prop](
                ...args.map((i2) => {
                  if (typeof i2 === "function") {
                    return (child, index2) => i2(child.toProxy(), index2);
                  } else {
                    return i2;
                  }
                })
              );
            };
          } else if (prop === "every" || prop === "some") {
            return (cb) => {
              return node2[prop](
                (child, ...other) => cb(child.toProxy(), ...other)
              );
            };
          } else if (prop === "root") {
            return () => node2.root().toProxy();
          } else if (prop === "nodes") {
            return node2.nodes.map((i2) => i2.toProxy());
          } else if (prop === "first" || prop === "last") {
            return node2[prop].toProxy();
          } else {
            return node2[prop];
          }
        },
        set(node2, prop, value) {
          if (node2[prop] === value) return true;
          node2[prop] = value;
          if (prop === "name" || prop === "params" || prop === "selector") {
            node2.markDirty();
          }
          return true;
        }
      };
    }
    index(child) {
      if (typeof child === "number") return child;
      if (child.proxyOf) child = child.proxyOf;
      return this.proxyOf.nodes.indexOf(child);
    }
    insertAfter(exist, add) {
      let existIndex = this.index(exist);
      let nodes = this.normalize(add, this.proxyOf.nodes[existIndex]).reverse();
      existIndex = this.index(exist);
      for (let node2 of nodes) this.proxyOf.nodes.splice(existIndex + 1, 0, node2);
      let index2;
      for (let id in this.indexes) {
        index2 = this.indexes[id];
        if (existIndex < index2) {
          this.indexes[id] = index2 + nodes.length;
        }
      }
      this.markDirty();
      return this;
    }
    insertBefore(exist, add) {
      let existIndex = this.index(exist);
      let type = existIndex === 0 ? "prepend" : false;
      let nodes = this.normalize(add, this.proxyOf.nodes[existIndex], type).reverse();
      existIndex = this.index(exist);
      for (let node2 of nodes) this.proxyOf.nodes.splice(existIndex, 0, node2);
      let index2;
      for (let id in this.indexes) {
        index2 = this.indexes[id];
        if (existIndex <= index2) {
          this.indexes[id] = index2 + nodes.length;
        }
      }
      this.markDirty();
      return this;
    }
    normalize(nodes, sample) {
      if (typeof nodes === "string") {
        nodes = cleanSource(parse$4(nodes).nodes);
      } else if (typeof nodes === "undefined") {
        nodes = [];
      } else if (Array.isArray(nodes)) {
        nodes = nodes.slice(0);
        for (let i2 of nodes) {
          if (i2.parent) i2.parent.removeChild(i2, "ignore");
        }
      } else if (nodes.type === "root" && this.type !== "document") {
        nodes = nodes.nodes.slice(0);
        for (let i2 of nodes) {
          if (i2.parent) i2.parent.removeChild(i2, "ignore");
        }
      } else if (nodes.type) {
        nodes = [nodes];
      } else if (nodes.prop) {
        if (typeof nodes.value === "undefined") {
          throw new Error("Value field is missed in node creation");
        } else if (typeof nodes.value !== "string") {
          nodes.value = String(nodes.value);
        }
        nodes = [new Declaration$3(nodes)];
      } else if (nodes.selector) {
        nodes = [new Rule$4(nodes)];
      } else if (nodes.name) {
        nodes = [new AtRule$4(nodes)];
      } else if (nodes.text) {
        nodes = [new Comment$3(nodes)];
      } else {
        throw new Error("Unknown node type in node creation");
      }
      let processed = nodes.map((i2) => {
        if (!i2[my$1]) Container2.rebuild(i2);
        i2 = i2.proxyOf;
        if (i2.parent) i2.parent.removeChild(i2);
        if (i2[isClean$1]) markDirtyUp(i2);
        if (typeof i2.raws.before === "undefined") {
          if (sample && typeof sample.raws.before !== "undefined") {
            i2.raws.before = sample.raws.before.replace(/\S/g, "");
          }
        }
        i2.parent = this.proxyOf;
        return i2;
      });
      return processed;
    }
    prepend(...children) {
      children = children.reverse();
      for (let child of children) {
        let nodes = this.normalize(child, this.first, "prepend").reverse();
        for (let node2 of nodes) this.proxyOf.nodes.unshift(node2);
        for (let id in this.indexes) {
          this.indexes[id] = this.indexes[id] + nodes.length;
        }
      }
      this.markDirty();
      return this;
    }
    push(child) {
      child.parent = this;
      this.proxyOf.nodes.push(child);
      return this;
    }
    removeAll() {
      for (let node2 of this.proxyOf.nodes) node2.parent = void 0;
      this.proxyOf.nodes = [];
      this.markDirty();
      return this;
    }
    removeChild(child) {
      child = this.index(child);
      this.proxyOf.nodes[child].parent = void 0;
      this.proxyOf.nodes.splice(child, 1);
      let index2;
      for (let id in this.indexes) {
        index2 = this.indexes[id];
        if (index2 >= child) {
          this.indexes[id] = index2 - 1;
        }
      }
      this.markDirty();
      return this;
    }
    replaceValues(pattern, opts, callback) {
      if (!callback) {
        callback = opts;
        opts = {};
      }
      this.walkDecls((decl) => {
        if (opts.props && !opts.props.includes(decl.prop)) return;
        if (opts.fast && !decl.value.includes(opts.fast)) return;
        decl.value = decl.value.replace(pattern, callback);
      });
      this.markDirty();
      return this;
    }
    some(condition) {
      return this.nodes.some(condition);
    }
    walk(callback) {
      return this.each((child, i2) => {
        let result2;
        try {
          result2 = callback(child, i2);
        } catch (e2) {
          throw child.addToError(e2);
        }
        if (result2 !== false && child.walk) {
          result2 = child.walk(callback);
        }
        return result2;
      });
    }
    walkAtRules(name, callback) {
      if (!callback) {
        callback = name;
        return this.walk((child, i2) => {
          if (child.type === "atrule") {
            return callback(child, i2);
          }
        });
      }
      if (name instanceof RegExp) {
        return this.walk((child, i2) => {
          if (child.type === "atrule" && name.test(child.name)) {
            return callback(child, i2);
          }
        });
      }
      return this.walk((child, i2) => {
        if (child.type === "atrule" && child.name === name) {
          return callback(child, i2);
        }
      });
    }
    walkComments(callback) {
      return this.walk((child, i2) => {
        if (child.type === "comment") {
          return callback(child, i2);
        }
      });
    }
    walkDecls(prop, callback) {
      if (!callback) {
        callback = prop;
        return this.walk((child, i2) => {
          if (child.type === "decl") {
            return callback(child, i2);
          }
        });
      }
      if (prop instanceof RegExp) {
        return this.walk((child, i2) => {
          if (child.type === "decl" && prop.test(child.prop)) {
            return callback(child, i2);
          }
        });
      }
      return this.walk((child, i2) => {
        if (child.type === "decl" && child.prop === prop) {
          return callback(child, i2);
        }
      });
    }
    walkRules(selector, callback) {
      if (!callback) {
        callback = selector;
        return this.walk((child, i2) => {
          if (child.type === "rule") {
            return callback(child, i2);
          }
        });
      }
      if (selector instanceof RegExp) {
        return this.walk((child, i2) => {
          if (child.type === "rule" && selector.test(child.selector)) {
            return callback(child, i2);
          }
        });
      }
      return this.walk((child, i2) => {
        if (child.type === "rule" && child.selector === selector) {
          return callback(child, i2);
        }
      });
    }
    get first() {
      if (!this.proxyOf.nodes) return void 0;
      return this.proxyOf.nodes[0];
    }
    get last() {
      if (!this.proxyOf.nodes) return void 0;
      return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
    }
  };
  Container$7.registerParse = (dependant) => {
    parse$4 = dependant;
  };
  Container$7.registerRule = (dependant) => {
    Rule$4 = dependant;
  };
  Container$7.registerAtRule = (dependant) => {
    AtRule$4 = dependant;
  };
  Container$7.registerRoot = (dependant) => {
    Root$6 = dependant;
  };
  var container = Container$7;
  Container$7.default = Container$7;
  Container$7.rebuild = (node2) => {
    if (node2.type === "atrule") {
      Object.setPrototypeOf(node2, AtRule$4.prototype);
    } else if (node2.type === "rule") {
      Object.setPrototypeOf(node2, Rule$4.prototype);
    } else if (node2.type === "decl") {
      Object.setPrototypeOf(node2, Declaration$3.prototype);
    } else if (node2.type === "comment") {
      Object.setPrototypeOf(node2, Comment$3.prototype);
    } else if (node2.type === "root") {
      Object.setPrototypeOf(node2, Root$6.prototype);
    }
    node2[my$1] = true;
    if (node2.nodes) {
      node2.nodes.forEach((child) => {
        Container$7.rebuild(child);
      });
    }
  };
  let Container$6 = container;
  let LazyResult$4, Processor$3;
  let Document$3 = class Document23 extends Container$6 {
    constructor(defaults) {
      super({ type: "document", ...defaults });
      if (!this.nodes) {
        this.nodes = [];
      }
    }
    toResult(opts = {}) {
      let lazy = new LazyResult$4(new Processor$3(), this, opts);
      return lazy.stringify();
    }
  };
  Document$3.registerLazyResult = (dependant) => {
    LazyResult$4 = dependant;
  };
  Document$3.registerProcessor = (dependant) => {
    Processor$3 = dependant;
  };
  var document$1 = Document$3;
  Document$3.default = Document$3;
  let printed = {};
  var warnOnce$2 = function warnOnce2(message) {
    if (printed[message]) return;
    printed[message] = true;
    if (typeof console !== "undefined" && console.warn) {
      console.warn(message);
    }
  };
  let Warning$2 = class Warning2 {
    constructor(text, opts = {}) {
      this.type = "warning";
      this.text = text;
      if (opts.node && opts.node.source) {
        let range = opts.node.rangeBy(opts);
        this.line = range.start.line;
        this.column = range.start.column;
        this.endLine = range.end.line;
        this.endColumn = range.end.column;
      }
      for (let opt in opts) this[opt] = opts[opt];
    }
    toString() {
      if (this.node) {
        return this.node.error(this.text, {
          index: this.index,
          plugin: this.plugin,
          word: this.word
        }).message;
      }
      if (this.plugin) {
        return this.plugin + ": " + this.text;
      }
      return this.text;
    }
  };
  var warning = Warning$2;
  Warning$2.default = Warning$2;
  let Warning$1 = warning;
  let Result$3 = class Result2 {
    constructor(processor2, root2, opts) {
      this.processor = processor2;
      this.messages = [];
      this.root = root2;
      this.opts = opts;
      this.css = void 0;
      this.map = void 0;
    }
    toString() {
      return this.css;
    }
    warn(text, opts = {}) {
      if (!opts.plugin) {
        if (this.lastPlugin && this.lastPlugin.postcssPlugin) {
          opts.plugin = this.lastPlugin.postcssPlugin;
        }
      }
      let warning2 = new Warning$1(text, opts);
      this.messages.push(warning2);
      return warning2;
    }
    warnings() {
      return this.messages.filter((i2) => i2.type === "warning");
    }
    get content() {
      return this.css;
    }
  };
  var result = Result$3;
  Result$3.default = Result$3;
  const SINGLE_QUOTE = "'".charCodeAt(0);
  const DOUBLE_QUOTE = '"'.charCodeAt(0);
  const BACKSLASH = "\\".charCodeAt(0);
  const SLASH = "/".charCodeAt(0);
  const NEWLINE = "\n".charCodeAt(0);
  const SPACE = " ".charCodeAt(0);
  const FEED = "\f".charCodeAt(0);
  const TAB = "	".charCodeAt(0);
  const CR = "\r".charCodeAt(0);
  const OPEN_SQUARE = "[".charCodeAt(0);
  const CLOSE_SQUARE = "]".charCodeAt(0);
  const OPEN_PARENTHESES = "(".charCodeAt(0);
  const CLOSE_PARENTHESES = ")".charCodeAt(0);
  const OPEN_CURLY = "{".charCodeAt(0);
  const CLOSE_CURLY = "}".charCodeAt(0);
  const SEMICOLON = ";".charCodeAt(0);
  const ASTERISK = "*".charCodeAt(0);
  const COLON = ":".charCodeAt(0);
  const AT = "@".charCodeAt(0);
  const RE_AT_END = /[\t\n\f\r "#'()/;[\\\]{}]/g;
  const RE_WORD_END = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g;
  const RE_BAD_BRACKET = /.[\r\n"'(/\\]/;
  const RE_HEX_ESCAPE = /[\da-f]/i;
  var tokenize = function tokenizer2(input2, options2 = {}) {
    let css = input2.css.valueOf();
    let ignore = options2.ignoreErrors;
    let code, next, quote, content, escape;
    let escaped, escapePos, prev, n2, currentToken;
    let length = css.length;
    let pos = 0;
    let buffer = [];
    let returned = [];
    function position() {
      return pos;
    }
    function unclosed(what) {
      throw input2.error("Unclosed " + what, pos);
    }
    function endOfFile() {
      return returned.length === 0 && pos >= length;
    }
    function nextToken(opts) {
      if (returned.length) return returned.pop();
      if (pos >= length) return;
      let ignoreUnclosed = opts ? opts.ignoreUnclosed : false;
      code = css.charCodeAt(pos);
      switch (code) {
        case NEWLINE:
        case SPACE:
        case TAB:
        case CR:
        case FEED: {
          next = pos;
          do {
            next += 1;
            code = css.charCodeAt(next);
          } while (code === SPACE || code === NEWLINE || code === TAB || code === CR || code === FEED);
          currentToken = ["space", css.slice(pos, next)];
          pos = next - 1;
          break;
        }
        case OPEN_SQUARE:
        case CLOSE_SQUARE:
        case OPEN_CURLY:
        case CLOSE_CURLY:
        case COLON:
        case SEMICOLON:
        case CLOSE_PARENTHESES: {
          let controlChar = String.fromCharCode(code);
          currentToken = [controlChar, controlChar, pos];
          break;
        }
        case OPEN_PARENTHESES: {
          prev = buffer.length ? buffer.pop()[1] : "";
          n2 = css.charCodeAt(pos + 1);
          if (prev === "url" && n2 !== SINGLE_QUOTE && n2 !== DOUBLE_QUOTE && n2 !== SPACE && n2 !== NEWLINE && n2 !== TAB && n2 !== FEED && n2 !== CR) {
            next = pos;
            do {
              escaped = false;
              next = css.indexOf(")", next + 1);
              if (next === -1) {
                if (ignore || ignoreUnclosed) {
                  next = pos;
                  break;
                } else {
                  unclosed("bracket");
                }
              }
              escapePos = next;
              while (css.charCodeAt(escapePos - 1) === BACKSLASH) {
                escapePos -= 1;
                escaped = !escaped;
              }
            } while (escaped);
            currentToken = ["brackets", css.slice(pos, next + 1), pos, next];
            pos = next;
          } else {
            next = css.indexOf(")", pos + 1);
            content = css.slice(pos, next + 1);
            if (next === -1 || RE_BAD_BRACKET.test(content)) {
              currentToken = ["(", "(", pos];
            } else {
              currentToken = ["brackets", content, pos, next];
              pos = next;
            }
          }
          break;
        }
        case SINGLE_QUOTE:
        case DOUBLE_QUOTE: {
          quote = code === SINGLE_QUOTE ? "'" : '"';
          next = pos;
          do {
            escaped = false;
            next = css.indexOf(quote, next + 1);
            if (next === -1) {
              if (ignore || ignoreUnclosed) {
                next = pos + 1;
                break;
              } else {
                unclosed("string");
              }
            }
            escapePos = next;
            while (css.charCodeAt(escapePos - 1) === BACKSLASH) {
              escapePos -= 1;
              escaped = !escaped;
            }
          } while (escaped);
          currentToken = ["string", css.slice(pos, next + 1), pos, next];
          pos = next;
          break;
        }
        case AT: {
          RE_AT_END.lastIndex = pos + 1;
          RE_AT_END.test(css);
          if (RE_AT_END.lastIndex === 0) {
            next = css.length - 1;
          } else {
            next = RE_AT_END.lastIndex - 2;
          }
          currentToken = ["at-word", css.slice(pos, next + 1), pos, next];
          pos = next;
          break;
        }
        case BACKSLASH: {
          next = pos;
          escape = true;
          while (css.charCodeAt(next + 1) === BACKSLASH) {
            next += 1;
            escape = !escape;
          }
          code = css.charCodeAt(next + 1);
          if (escape && code !== SLASH && code !== SPACE && code !== NEWLINE && code !== TAB && code !== CR && code !== FEED) {
            next += 1;
            if (RE_HEX_ESCAPE.test(css.charAt(next))) {
              while (RE_HEX_ESCAPE.test(css.charAt(next + 1))) {
                next += 1;
              }
              if (css.charCodeAt(next + 1) === SPACE) {
                next += 1;
              }
            }
          }
          currentToken = ["word", css.slice(pos, next + 1), pos, next];
          pos = next;
          break;
        }
        default: {
          if (code === SLASH && css.charCodeAt(pos + 1) === ASTERISK) {
            next = css.indexOf("*/", pos + 2) + 1;
            if (next === 0) {
              if (ignore || ignoreUnclosed) {
                next = css.length;
              } else {
                unclosed("comment");
              }
            }
            currentToken = ["comment", css.slice(pos, next + 1), pos, next];
            pos = next;
          } else {
            RE_WORD_END.lastIndex = pos + 1;
            RE_WORD_END.test(css);
            if (RE_WORD_END.lastIndex === 0) {
              next = css.length - 1;
            } else {
              next = RE_WORD_END.lastIndex - 2;
            }
            currentToken = ["word", css.slice(pos, next + 1), pos, next];
            buffer.push(currentToken);
            pos = next;
          }
          break;
        }
      }
      pos++;
      return currentToken;
    }
    function back(token) {
      returned.push(token);
    }
    return {
      back,
      endOfFile,
      nextToken,
      position
    };
  };
  let Container$5 = container;
  let AtRule$3 = class AtRule2 extends Container$5 {
    constructor(defaults) {
      super(defaults);
      this.type = "atrule";
    }
    append(...children) {
      if (!this.proxyOf.nodes) this.nodes = [];
      return super.append(...children);
    }
    prepend(...children) {
      if (!this.proxyOf.nodes) this.nodes = [];
      return super.prepend(...children);
    }
  };
  var atRule = AtRule$3;
  AtRule$3.default = AtRule$3;
  Container$5.registerAtRule(AtRule$3);
  let Container$4 = container;
  let LazyResult$3, Processor$2;
  let Root$5 = class Root2 extends Container$4 {
    constructor(defaults) {
      super(defaults);
      this.type = "root";
      if (!this.nodes) this.nodes = [];
    }
    normalize(child, sample, type) {
      let nodes = super.normalize(child);
      if (sample) {
        if (type === "prepend") {
          if (this.nodes.length > 1) {
            sample.raws.before = this.nodes[1].raws.before;
          } else {
            delete sample.raws.before;
          }
        } else if (this.first !== sample) {
          for (let node2 of nodes) {
            node2.raws.before = sample.raws.before;
          }
        }
      }
      return nodes;
    }
    removeChild(child, ignore) {
      let index2 = this.index(child);
      if (!ignore && index2 === 0 && this.nodes.length > 1) {
        this.nodes[1].raws.before = this.nodes[index2].raws.before;
      }
      return super.removeChild(child);
    }
    toResult(opts = {}) {
      let lazy = new LazyResult$3(new Processor$2(), this, opts);
      return lazy.stringify();
    }
  };
  Root$5.registerLazyResult = (dependant) => {
    LazyResult$3 = dependant;
  };
  Root$5.registerProcessor = (dependant) => {
    Processor$2 = dependant;
  };
  var root = Root$5;
  Root$5.default = Root$5;
  Container$4.registerRoot(Root$5);
  let list$2 = {
    comma(string) {
      return list$2.split(string, [","], true);
    },
    space(string) {
      let spaces = [" ", "\n", "	"];
      return list$2.split(string, spaces);
    },
    split(string, separators, last) {
      let array = [];
      let current = "";
      let split = false;
      let func = 0;
      let inQuote = false;
      let prevQuote = "";
      let escape = false;
      for (let letter of string) {
        if (escape) {
          escape = false;
        } else if (letter === "\\") {
          escape = true;
        } else if (inQuote) {
          if (letter === prevQuote) {
            inQuote = false;
          }
        } else if (letter === '"' || letter === "'") {
          inQuote = true;
          prevQuote = letter;
        } else if (letter === "(") {
          func += 1;
        } else if (letter === ")") {
          if (func > 0) func -= 1;
        } else if (func === 0) {
          if (separators.includes(letter)) split = true;
        }
        if (split) {
          if (current !== "") array.push(current.trim());
          current = "";
          split = false;
        } else {
          current += letter;
        }
      }
      if (last || current !== "") array.push(current.trim());
      return array;
    }
  };
  var list_1 = list$2;
  list$2.default = list$2;
  let Container$3 = container;
  let list$1 = list_1;
  let Rule$3 = class Rule2 extends Container$3 {
    constructor(defaults) {
      super(defaults);
      this.type = "rule";
      if (!this.nodes) this.nodes = [];
    }
    get selectors() {
      return list$1.comma(this.selector);
    }
    set selectors(values) {
      let match = this.selector ? this.selector.match(/,\s*/) : null;
      let sep2 = match ? match[0] : "," + this.raw("between", "beforeOpen");
      this.selector = values.join(sep2);
    }
  };
  var rule = Rule$3;
  Rule$3.default = Rule$3;
  Container$3.registerRule(Rule$3);
  let Declaration$2 = declaration;
  let tokenizer22 = tokenize;
  let Comment$2 = comment;
  let AtRule$2 = atRule;
  let Root$4 = root;
  let Rule$2 = rule;
  const SAFE_COMMENT_NEIGHBOR = {
    empty: true,
    space: true
  };
  function findLastWithPosition(tokens) {
    for (let i2 = tokens.length - 1; i2 >= 0; i2--) {
      let token = tokens[i2];
      let pos = token[3] || token[2];
      if (pos) return pos;
    }
  }
  let Parser$1 = class Parser2 {
    constructor(input2) {
      this.input = input2;
      this.root = new Root$4();
      this.current = this.root;
      this.spaces = "";
      this.semicolon = false;
      this.createTokenizer();
      this.root.source = { input: input2, start: { column: 1, line: 1, offset: 0 } };
    }
    atrule(token) {
      let node2 = new AtRule$2();
      node2.name = token[1].slice(1);
      if (node2.name === "") {
        this.unnamedAtrule(node2, token);
      }
      this.init(node2, token[2]);
      let type;
      let prev;
      let shift;
      let last = false;
      let open = false;
      let params = [];
      let brackets = [];
      while (!this.tokenizer.endOfFile()) {
        token = this.tokenizer.nextToken();
        type = token[0];
        if (type === "(" || type === "[") {
          brackets.push(type === "(" ? ")" : "]");
        } else if (type === "{" && brackets.length > 0) {
          brackets.push("}");
        } else if (type === brackets[brackets.length - 1]) {
          brackets.pop();
        }
        if (brackets.length === 0) {
          if (type === ";") {
            node2.source.end = this.getPosition(token[2]);
            node2.source.end.offset++;
            this.semicolon = true;
            break;
          } else if (type === "{") {
            open = true;
            break;
          } else if (type === "}") {
            if (params.length > 0) {
              shift = params.length - 1;
              prev = params[shift];
              while (prev && prev[0] === "space") {
                prev = params[--shift];
              }
              if (prev) {
                node2.source.end = this.getPosition(prev[3] || prev[2]);
                node2.source.end.offset++;
              }
            }
            this.end(token);
            break;
          } else {
            params.push(token);
          }
        } else {
          params.push(token);
        }
        if (this.tokenizer.endOfFile()) {
          last = true;
          break;
        }
      }
      node2.raws.between = this.spacesAndCommentsFromEnd(params);
      if (params.length) {
        node2.raws.afterName = this.spacesAndCommentsFromStart(params);
        this.raw(node2, "params", params);
        if (last) {
          token = params[params.length - 1];
          node2.source.end = this.getPosition(token[3] || token[2]);
          node2.source.end.offset++;
          this.spaces = node2.raws.between;
          node2.raws.between = "";
        }
      } else {
        node2.raws.afterName = "";
        node2.params = "";
      }
      if (open) {
        node2.nodes = [];
        this.current = node2;
      }
    }
    checkMissedSemicolon(tokens) {
      let colon = this.colon(tokens);
      if (colon === false) return;
      let founded = 0;
      let token;
      for (let j2 = colon - 1; j2 >= 0; j2--) {
        token = tokens[j2];
        if (token[0] !== "space") {
          founded += 1;
          if (founded === 2) break;
        }
      }
      throw this.input.error(
        "Missed semicolon",
        token[0] === "word" ? token[3] + 1 : token[2]
      );
    }
    colon(tokens) {
      let brackets = 0;
      let token, type, prev;
      for (let [i2, element] of tokens.entries()) {
        token = element;
        type = token[0];
        if (type === "(") {
          brackets += 1;
        }
        if (type === ")") {
          brackets -= 1;
        }
        if (brackets === 0 && type === ":") {
          if (!prev) {
            this.doubleColon(token);
          } else if (prev[0] === "word" && prev[1] === "progid") {
            continue;
          } else {
            return i2;
          }
        }
        prev = token;
      }
      return false;
    }
    comment(token) {
      let node2 = new Comment$2();
      this.init(node2, token[2]);
      node2.source.end = this.getPosition(token[3] || token[2]);
      node2.source.end.offset++;
      let text = token[1].slice(2, -2);
      if (/^\s*$/.test(text)) {
        node2.text = "";
        node2.raws.left = text;
        node2.raws.right = "";
      } else {
        let match = text.match(/^(\s*)([^]*\S)(\s*)$/);
        node2.text = match[2];
        node2.raws.left = match[1];
        node2.raws.right = match[3];
      }
    }
    createTokenizer() {
      this.tokenizer = tokenizer22(this.input);
    }
    decl(tokens, customProperty) {
      let node2 = new Declaration$2();
      this.init(node2, tokens[0][2]);
      let last = tokens[tokens.length - 1];
      if (last[0] === ";") {
        this.semicolon = true;
        tokens.pop();
      }
      node2.source.end = this.getPosition(
        last[3] || last[2] || findLastWithPosition(tokens)
      );
      node2.source.end.offset++;
      while (tokens[0][0] !== "word") {
        if (tokens.length === 1) this.unknownWord(tokens);
        node2.raws.before += tokens.shift()[1];
      }
      node2.source.start = this.getPosition(tokens[0][2]);
      node2.prop = "";
      while (tokens.length) {
        let type = tokens[0][0];
        if (type === ":" || type === "space" || type === "comment") {
          break;
        }
        node2.prop += tokens.shift()[1];
      }
      node2.raws.between = "";
      let token;
      while (tokens.length) {
        token = tokens.shift();
        if (token[0] === ":") {
          node2.raws.between += token[1];
          break;
        } else {
          if (token[0] === "word" && /\w/.test(token[1])) {
            this.unknownWord([token]);
          }
          node2.raws.between += token[1];
        }
      }
      if (node2.prop[0] === "_" || node2.prop[0] === "*") {
        node2.raws.before += node2.prop[0];
        node2.prop = node2.prop.slice(1);
      }
      let firstSpaces = [];
      let next;
      while (tokens.length) {
        next = tokens[0][0];
        if (next !== "space" && next !== "comment") break;
        firstSpaces.push(tokens.shift());
      }
      this.precheckMissedSemicolon(tokens);
      for (let i2 = tokens.length - 1; i2 >= 0; i2--) {
        token = tokens[i2];
        if (token[1].toLowerCase() === "!important") {
          node2.important = true;
          let string = this.stringFrom(tokens, i2);
          string = this.spacesFromEnd(tokens) + string;
          if (string !== " !important") node2.raws.important = string;
          break;
        } else if (token[1].toLowerCase() === "important") {
          let cache = tokens.slice(0);
          let str = "";
          for (let j2 = i2; j2 > 0; j2--) {
            let type = cache[j2][0];
            if (str.trim().indexOf("!") === 0 && type !== "space") {
              break;
            }
            str = cache.pop()[1] + str;
          }
          if (str.trim().indexOf("!") === 0) {
            node2.important = true;
            node2.raws.important = str;
            tokens = cache;
          }
        }
        if (token[0] !== "space" && token[0] !== "comment") {
          break;
        }
      }
      let hasWord = tokens.some((i2) => i2[0] !== "space" && i2[0] !== "comment");
      if (hasWord) {
        node2.raws.between += firstSpaces.map((i2) => i2[1]).join("");
        firstSpaces = [];
      }
      this.raw(node2, "value", firstSpaces.concat(tokens), customProperty);
      if (node2.value.includes(":") && !customProperty) {
        this.checkMissedSemicolon(tokens);
      }
    }
    doubleColon(token) {
      throw this.input.error(
        "Double colon",
        { offset: token[2] },
        { offset: token[2] + token[1].length }
      );
    }
    emptyRule(token) {
      let node2 = new Rule$2();
      this.init(node2, token[2]);
      node2.selector = "";
      node2.raws.between = "";
      this.current = node2;
    }
    end(token) {
      if (this.current.nodes && this.current.nodes.length) {
        this.current.raws.semicolon = this.semicolon;
      }
      this.semicolon = false;
      this.current.raws.after = (this.current.raws.after || "") + this.spaces;
      this.spaces = "";
      if (this.current.parent) {
        this.current.source.end = this.getPosition(token[2]);
        this.current.source.end.offset++;
        this.current = this.current.parent;
      } else {
        this.unexpectedClose(token);
      }
    }
    endFile() {
      if (this.current.parent) this.unclosedBlock();
      if (this.current.nodes && this.current.nodes.length) {
        this.current.raws.semicolon = this.semicolon;
      }
      this.current.raws.after = (this.current.raws.after || "") + this.spaces;
      this.root.source.end = this.getPosition(this.tokenizer.position());
    }
    freeSemicolon(token) {
      this.spaces += token[1];
      if (this.current.nodes) {
        let prev = this.current.nodes[this.current.nodes.length - 1];
        if (prev && prev.type === "rule" && !prev.raws.ownSemicolon) {
          prev.raws.ownSemicolon = this.spaces;
          this.spaces = "";
        }
      }
    }
    // Helpers
    getPosition(offset) {
      let pos = this.input.fromOffset(offset);
      return {
        column: pos.col,
        line: pos.line,
        offset
      };
    }
    init(node2, offset) {
      this.current.push(node2);
      node2.source = {
        input: this.input,
        start: this.getPosition(offset)
      };
      node2.raws.before = this.spaces;
      this.spaces = "";
      if (node2.type !== "comment") this.semicolon = false;
    }
    other(start) {
      let end = false;
      let type = null;
      let colon = false;
      let bracket = null;
      let brackets = [];
      let customProperty = start[1].startsWith("--");
      let tokens = [];
      let token = start;
      while (token) {
        type = token[0];
        tokens.push(token);
        if (type === "(" || type === "[") {
          if (!bracket) bracket = token;
          brackets.push(type === "(" ? ")" : "]");
        } else if (customProperty && colon && type === "{") {
          if (!bracket) bracket = token;
          brackets.push("}");
        } else if (brackets.length === 0) {
          if (type === ";") {
            if (colon) {
              this.decl(tokens, customProperty);
              return;
            } else {
              break;
            }
          } else if (type === "{") {
            this.rule(tokens);
            return;
          } else if (type === "}") {
            this.tokenizer.back(tokens.pop());
            end = true;
            break;
          } else if (type === ":") {
            colon = true;
          }
        } else if (type === brackets[brackets.length - 1]) {
          brackets.pop();
          if (brackets.length === 0) bracket = null;
        }
        token = this.tokenizer.nextToken();
      }
      if (this.tokenizer.endOfFile()) end = true;
      if (brackets.length > 0) this.unclosedBracket(bracket);
      if (end && colon) {
        if (!customProperty) {
          while (tokens.length) {
            token = tokens[tokens.length - 1][0];
            if (token !== "space" && token !== "comment") break;
            this.tokenizer.back(tokens.pop());
          }
        }
        this.decl(tokens, customProperty);
      } else {
        this.unknownWord(tokens);
      }
    }
    parse() {
      let token;
      while (!this.tokenizer.endOfFile()) {
        token = this.tokenizer.nextToken();
        switch (token[0]) {
          case "space":
            this.spaces += token[1];
            break;
          case ";":
            this.freeSemicolon(token);
            break;
          case "}":
            this.end(token);
            break;
          case "comment":
            this.comment(token);
            break;
          case "at-word":
            this.atrule(token);
            break;
          case "{":
            this.emptyRule(token);
            break;
          default:
            this.other(token);
            break;
        }
      }
      this.endFile();
    }
    precheckMissedSemicolon() {
    }
    raw(node2, prop, tokens, customProperty) {
      let token, type;
      let length = tokens.length;
      let value = "";
      let clean = true;
      let next, prev;
      for (let i2 = 0; i2 < length; i2 += 1) {
        token = tokens[i2];
        type = token[0];
        if (type === "space" && i2 === length - 1 && !customProperty) {
          clean = false;
        } else if (type === "comment") {
          prev = tokens[i2 - 1] ? tokens[i2 - 1][0] : "empty";
          next = tokens[i2 + 1] ? tokens[i2 + 1][0] : "empty";
          if (!SAFE_COMMENT_NEIGHBOR[prev] && !SAFE_COMMENT_NEIGHBOR[next]) {
            if (value.slice(-1) === ",") {
              clean = false;
            } else {
              value += token[1];
            }
          } else {
            clean = false;
          }
        } else {
          value += token[1];
        }
      }
      if (!clean) {
        let raw = tokens.reduce((all, i2) => all + i2[1], "");
        node2.raws[prop] = { raw, value };
      }
      node2[prop] = value;
    }
    rule(tokens) {
      tokens.pop();
      let node2 = new Rule$2();
      this.init(node2, tokens[0][2]);
      node2.raws.between = this.spacesAndCommentsFromEnd(tokens);
      this.raw(node2, "selector", tokens);
      this.current = node2;
    }
    spacesAndCommentsFromEnd(tokens) {
      let lastTokenType;
      let spaces = "";
      while (tokens.length) {
        lastTokenType = tokens[tokens.length - 1][0];
        if (lastTokenType !== "space" && lastTokenType !== "comment") break;
        spaces = tokens.pop()[1] + spaces;
      }
      return spaces;
    }
    // Errors
    spacesAndCommentsFromStart(tokens) {
      let next;
      let spaces = "";
      while (tokens.length) {
        next = tokens[0][0];
        if (next !== "space" && next !== "comment") break;
        spaces += tokens.shift()[1];
      }
      return spaces;
    }
    spacesFromEnd(tokens) {
      let lastTokenType;
      let spaces = "";
      while (tokens.length) {
        lastTokenType = tokens[tokens.length - 1][0];
        if (lastTokenType !== "space") break;
        spaces = tokens.pop()[1] + spaces;
      }
      return spaces;
    }
    stringFrom(tokens, from) {
      let result2 = "";
      for (let i2 = from; i2 < tokens.length; i2++) {
        result2 += tokens[i2][1];
      }
      tokens.splice(from, tokens.length - from);
      return result2;
    }
    unclosedBlock() {
      let pos = this.current.source.start;
      throw this.input.error("Unclosed block", pos.line, pos.column);
    }
    unclosedBracket(bracket) {
      throw this.input.error(
        "Unclosed bracket",
        { offset: bracket[2] },
        { offset: bracket[2] + 1 }
      );
    }
    unexpectedClose(token) {
      throw this.input.error(
        "Unexpected }",
        { offset: token[2] },
        { offset: token[2] + 1 }
      );
    }
    unknownWord(tokens) {
      throw this.input.error(
        "Unknown word",
        { offset: tokens[0][2] },
        { offset: tokens[0][2] + tokens[0][1].length }
      );
    }
    unnamedAtrule(node2, token) {
      throw this.input.error(
        "At-rule without name",
        { offset: token[2] },
        { offset: token[2] + token[1].length }
      );
    }
  };
  var parser = Parser$1;
  let Container$2 = container;
  let Parser22 = parser;
  let Input$2 = input;
  function parse$3(css, opts) {
    let input2 = new Input$2(css, opts);
    let parser2 = new Parser22(input2);
    try {
      parser2.parse();
    } catch (e2) {
      if (process.env.NODE_ENV !== "production") {
        if (e2.name === "CssSyntaxError" && opts && opts.from) {
          if (/\.scss$/i.test(opts.from)) {
            e2.message += "\nYou tried to parse SCSS with the standard CSS parser; try again with the postcss-scss parser";
          } else if (/\.sass/i.test(opts.from)) {
            e2.message += "\nYou tried to parse Sass with the standard CSS parser; try again with the postcss-sass parser";
          } else if (/\.less$/i.test(opts.from)) {
            e2.message += "\nYou tried to parse Less with the standard CSS parser; try again with the postcss-less parser";
          }
        }
      }
      throw e2;
    }
    return parser2.root;
  }
  var parse_1 = parse$3;
  parse$3.default = parse$3;
  Container$2.registerParse(parse$3);
  let { isClean, my } = symbols;
  let MapGenerator$1 = mapGenerator;
  let stringify$2 = stringify_1;
  let Container$1 = container;
  let Document$2 = document$1;
  let warnOnce$1 = warnOnce$2;
  let Result$2 = result;
  let parse$2 = parse_1;
  let Root$3 = root;
  const TYPE_TO_CLASS_NAME = {
    atrule: "AtRule",
    comment: "Comment",
    decl: "Declaration",
    document: "Document",
    root: "Root",
    rule: "Rule"
  };
  const PLUGIN_PROPS = {
    AtRule: true,
    AtRuleExit: true,
    Comment: true,
    CommentExit: true,
    Declaration: true,
    DeclarationExit: true,
    Document: true,
    DocumentExit: true,
    Once: true,
    OnceExit: true,
    postcssPlugin: true,
    prepare: true,
    Root: true,
    RootExit: true,
    Rule: true,
    RuleExit: true
  };
  const NOT_VISITORS = {
    Once: true,
    postcssPlugin: true,
    prepare: true
  };
  const CHILDREN = 0;
  function isPromise(obj) {
    return typeof obj === "object" && typeof obj.then === "function";
  }
  function getEvents(node2) {
    let key = false;
    let type = TYPE_TO_CLASS_NAME[node2.type];
    if (node2.type === "decl") {
      key = node2.prop.toLowerCase();
    } else if (node2.type === "atrule") {
      key = node2.name.toLowerCase();
    }
    if (key && node2.append) {
      return [
        type,
        type + "-" + key,
        CHILDREN,
        type + "Exit",
        type + "Exit-" + key
      ];
    } else if (key) {
      return [type, type + "-" + key, type + "Exit", type + "Exit-" + key];
    } else if (node2.append) {
      return [type, CHILDREN, type + "Exit"];
    } else {
      return [type, type + "Exit"];
    }
  }
  function toStack(node2) {
    let events;
    if (node2.type === "document") {
      events = ["Document", CHILDREN, "DocumentExit"];
    } else if (node2.type === "root") {
      events = ["Root", CHILDREN, "RootExit"];
    } else {
      events = getEvents(node2);
    }
    return {
      eventIndex: 0,
      events,
      iterator: 0,
      node: node2,
      visitorIndex: 0,
      visitors: []
    };
  }
  function cleanMarks(node2) {
    node2[isClean] = false;
    if (node2.nodes) node2.nodes.forEach((i2) => cleanMarks(i2));
    return node2;
  }
  let postcss$2 = {};
  let LazyResult$2 = class LazyResult2 {
    constructor(processor2, css, opts) {
      this.stringified = false;
      this.processed = false;
      let root2;
      if (typeof css === "object" && css !== null && (css.type === "root" || css.type === "document")) {
        root2 = cleanMarks(css);
      } else if (css instanceof LazyResult2 || css instanceof Result$2) {
        root2 = cleanMarks(css.root);
        if (css.map) {
          if (typeof opts.map === "undefined") opts.map = {};
          if (!opts.map.inline) opts.map.inline = false;
          opts.map.prev = css.map;
        }
      } else {
        let parser2 = parse$2;
        if (opts.syntax) parser2 = opts.syntax.parse;
        if (opts.parser) parser2 = opts.parser;
        if (parser2.parse) parser2 = parser2.parse;
        try {
          root2 = parser2(css, opts);
        } catch (error) {
          this.processed = true;
          this.error = error;
        }
        if (root2 && !root2[my]) {
          Container$1.rebuild(root2);
        }
      }
      this.result = new Result$2(processor2, root2, opts);
      this.helpers = { ...postcss$2, postcss: postcss$2, result: this.result };
      this.plugins = this.processor.plugins.map((plugin22) => {
        if (typeof plugin22 === "object" && plugin22.prepare) {
          return { ...plugin22, ...plugin22.prepare(this.result) };
        } else {
          return plugin22;
        }
      });
    }
    async() {
      if (this.error) return Promise.reject(this.error);
      if (this.processed) return Promise.resolve(this.result);
      if (!this.processing) {
        this.processing = this.runAsync();
      }
      return this.processing;
    }
    catch(onRejected) {
      return this.async().catch(onRejected);
    }
    finally(onFinally) {
      return this.async().then(onFinally, onFinally);
    }
    getAsyncError() {
      throw new Error("Use process(css).then(cb) to work with async plugins");
    }
    handleError(error, node2) {
      let plugin22 = this.result.lastPlugin;
      try {
        if (node2) node2.addToError(error);
        this.error = error;
        if (error.name === "CssSyntaxError" && !error.plugin) {
          error.plugin = plugin22.postcssPlugin;
          error.setMessage();
        } else if (plugin22.postcssVersion) {
          if (process.env.NODE_ENV !== "production") {
            let pluginName = plugin22.postcssPlugin;
            let pluginVer = plugin22.postcssVersion;
            let runtimeVer = this.result.processor.version;
            let a2 = pluginVer.split(".");
            let b2 = runtimeVer.split(".");
            if (a2[0] !== b2[0] || parseInt(a2[1]) > parseInt(b2[1])) {
              console.error(
                "Unknown error from PostCSS plugin. Your current PostCSS version is " + runtimeVer + ", but " + pluginName + " uses " + pluginVer + ". Perhaps this is the source of the error below."
              );
            }
          }
        }
      } catch (err2) {
        if (console && console.error) console.error(err2);
      }
      return error;
    }
    prepareVisitors() {
      this.listeners = {};
      let add = (plugin22, type, cb) => {
        if (!this.listeners[type]) this.listeners[type] = [];
        this.listeners[type].push([plugin22, cb]);
      };
      for (let plugin22 of this.plugins) {
        if (typeof plugin22 === "object") {
          for (let event in plugin22) {
            if (!PLUGIN_PROPS[event] && /^[A-Z]/.test(event)) {
              throw new Error(
                `Unknown event ${event} in ${plugin22.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`
              );
            }
            if (!NOT_VISITORS[event]) {
              if (typeof plugin22[event] === "object") {
                for (let filter in plugin22[event]) {
                  if (filter === "*") {
                    add(plugin22, event, plugin22[event][filter]);
                  } else {
                    add(
                      plugin22,
                      event + "-" + filter.toLowerCase(),
                      plugin22[event][filter]
                    );
                  }
                }
              } else if (typeof plugin22[event] === "function") {
                add(plugin22, event, plugin22[event]);
              }
            }
          }
        }
      }
      this.hasListener = Object.keys(this.listeners).length > 0;
    }
    async runAsync() {
      this.plugin = 0;
      for (let i2 = 0; i2 < this.plugins.length; i2++) {
        let plugin22 = this.plugins[i2];
        let promise = this.runOnRoot(plugin22);
        if (isPromise(promise)) {
          try {
            await promise;
          } catch (error) {
            throw this.handleError(error);
          }
        }
      }
      this.prepareVisitors();
      if (this.hasListener) {
        let root2 = this.result.root;
        while (!root2[isClean]) {
          root2[isClean] = true;
          let stack = [toStack(root2)];
          while (stack.length > 0) {
            let promise = this.visitTick(stack);
            if (isPromise(promise)) {
              try {
                await promise;
              } catch (e2) {
                let node2 = stack[stack.length - 1].node;
                throw this.handleError(e2, node2);
              }
            }
          }
        }
        if (this.listeners.OnceExit) {
          for (let [plugin22, visitor] of this.listeners.OnceExit) {
            this.result.lastPlugin = plugin22;
            try {
              if (root2.type === "document") {
                let roots = root2.nodes.map(
                  (subRoot) => visitor(subRoot, this.helpers)
                );
                await Promise.all(roots);
              } else {
                await visitor(root2, this.helpers);
              }
            } catch (e2) {
              throw this.handleError(e2);
            }
          }
        }
      }
      this.processed = true;
      return this.stringify();
    }
    runOnRoot(plugin22) {
      this.result.lastPlugin = plugin22;
      try {
        if (typeof plugin22 === "object" && plugin22.Once) {
          if (this.result.root.type === "document") {
            let roots = this.result.root.nodes.map(
              (root2) => plugin22.Once(root2, this.helpers)
            );
            if (isPromise(roots[0])) {
              return Promise.all(roots);
            }
            return roots;
          }
          return plugin22.Once(this.result.root, this.helpers);
        } else if (typeof plugin22 === "function") {
          return plugin22(this.result.root, this.result);
        }
      } catch (error) {
        throw this.handleError(error);
      }
    }
    stringify() {
      if (this.error) throw this.error;
      if (this.stringified) return this.result;
      this.stringified = true;
      this.sync();
      let opts = this.result.opts;
      let str = stringify$2;
      if (opts.syntax) str = opts.syntax.stringify;
      if (opts.stringifier) str = opts.stringifier;
      if (str.stringify) str = str.stringify;
      let map = new MapGenerator$1(str, this.result.root, this.result.opts);
      let data = map.generate();
      this.result.css = data[0];
      this.result.map = data[1];
      return this.result;
    }
    sync() {
      if (this.error) throw this.error;
      if (this.processed) return this.result;
      this.processed = true;
      if (this.processing) {
        throw this.getAsyncError();
      }
      for (let plugin22 of this.plugins) {
        let promise = this.runOnRoot(plugin22);
        if (isPromise(promise)) {
          throw this.getAsyncError();
        }
      }
      this.prepareVisitors();
      if (this.hasListener) {
        let root2 = this.result.root;
        while (!root2[isClean]) {
          root2[isClean] = true;
          this.walkSync(root2);
        }
        if (this.listeners.OnceExit) {
          if (root2.type === "document") {
            for (let subRoot of root2.nodes) {
              this.visitSync(this.listeners.OnceExit, subRoot);
            }
          } else {
            this.visitSync(this.listeners.OnceExit, root2);
          }
        }
      }
      return this.result;
    }
    then(onFulfilled, onRejected) {
      if (process.env.NODE_ENV !== "production") {
        if (!("from" in this.opts)) {
          warnOnce$1(
            "Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning."
          );
        }
      }
      return this.async().then(onFulfilled, onRejected);
    }
    toString() {
      return this.css;
    }
    visitSync(visitors, node2) {
      for (let [plugin22, visitor] of visitors) {
        this.result.lastPlugin = plugin22;
        let promise;
        try {
          promise = visitor(node2, this.helpers);
        } catch (e2) {
          throw this.handleError(e2, node2.proxyOf);
        }
        if (node2.type !== "root" && node2.type !== "document" && !node2.parent) {
          return true;
        }
        if (isPromise(promise)) {
          throw this.getAsyncError();
        }
      }
    }
    visitTick(stack) {
      let visit2 = stack[stack.length - 1];
      let { node: node2, visitors } = visit2;
      if (node2.type !== "root" && node2.type !== "document" && !node2.parent) {
        stack.pop();
        return;
      }
      if (visitors.length > 0 && visit2.visitorIndex < visitors.length) {
        let [plugin22, visitor] = visitors[visit2.visitorIndex];
        visit2.visitorIndex += 1;
        if (visit2.visitorIndex === visitors.length) {
          visit2.visitors = [];
          visit2.visitorIndex = 0;
        }
        this.result.lastPlugin = plugin22;
        try {
          return visitor(node2.toProxy(), this.helpers);
        } catch (e2) {
          throw this.handleError(e2, node2);
        }
      }
      if (visit2.iterator !== 0) {
        let iterator = visit2.iterator;
        let child;
        while (child = node2.nodes[node2.indexes[iterator]]) {
          node2.indexes[iterator] += 1;
          if (!child[isClean]) {
            child[isClean] = true;
            stack.push(toStack(child));
            return;
          }
        }
        visit2.iterator = 0;
        delete node2.indexes[iterator];
      }
      let events = visit2.events;
      while (visit2.eventIndex < events.length) {
        let event = events[visit2.eventIndex];
        visit2.eventIndex += 1;
        if (event === CHILDREN) {
          if (node2.nodes && node2.nodes.length) {
            node2[isClean] = true;
            visit2.iterator = node2.getIterator();
          }
          return;
        } else if (this.listeners[event]) {
          visit2.visitors = this.listeners[event];
          return;
        }
      }
      stack.pop();
    }
    walkSync(node2) {
      node2[isClean] = true;
      let events = getEvents(node2);
      for (let event of events) {
        if (event === CHILDREN) {
          if (node2.nodes) {
            node2.each((child) => {
              if (!child[isClean]) this.walkSync(child);
            });
          }
        } else {
          let visitors = this.listeners[event];
          if (visitors) {
            if (this.visitSync(visitors, node2.toProxy())) return;
          }
        }
      }
    }
    warnings() {
      return this.sync().warnings();
    }
    get content() {
      return this.stringify().content;
    }
    get css() {
      return this.stringify().css;
    }
    get map() {
      return this.stringify().map;
    }
    get messages() {
      return this.sync().messages;
    }
    get opts() {
      return this.result.opts;
    }
    get processor() {
      return this.result.processor;
    }
    get root() {
      return this.sync().root;
    }
    get [Symbol.toStringTag]() {
      return "LazyResult";
    }
  };
  LazyResult$2.registerPostcss = (dependant) => {
    postcss$2 = dependant;
  };
  var lazyResult = LazyResult$2;
  LazyResult$2.default = LazyResult$2;
  Root$3.registerLazyResult(LazyResult$2);
  Document$2.registerLazyResult(LazyResult$2);
  let MapGenerator22 = mapGenerator;
  let stringify$1 = stringify_1;
  let warnOnce22 = warnOnce$2;
  let parse$1 = parse_1;
  const Result$1 = result;
  let NoWorkResult$1 = class NoWorkResult2 {
    constructor(processor2, css, opts) {
      css = css.toString();
      this.stringified = false;
      this._processor = processor2;
      this._css = css;
      this._opts = opts;
      this._map = void 0;
      let root2;
      let str = stringify$1;
      this.result = new Result$1(this._processor, root2, this._opts);
      this.result.css = css;
      let self2 = this;
      Object.defineProperty(this.result, "root", {
        get() {
          return self2.root;
        }
      });
      let map = new MapGenerator22(str, root2, this._opts, css);
      if (map.isMap()) {
        let [generatedCSS, generatedMap] = map.generate();
        if (generatedCSS) {
          this.result.css = generatedCSS;
        }
        if (generatedMap) {
          this.result.map = generatedMap;
        }
      } else {
        map.clearAnnotation();
        this.result.css = map.css;
      }
    }
    async() {
      if (this.error) return Promise.reject(this.error);
      return Promise.resolve(this.result);
    }
    catch(onRejected) {
      return this.async().catch(onRejected);
    }
    finally(onFinally) {
      return this.async().then(onFinally, onFinally);
    }
    sync() {
      if (this.error) throw this.error;
      return this.result;
    }
    then(onFulfilled, onRejected) {
      if (process.env.NODE_ENV !== "production") {
        if (!("from" in this._opts)) {
          warnOnce22(
            "Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning."
          );
        }
      }
      return this.async().then(onFulfilled, onRejected);
    }
    toString() {
      return this._css;
    }
    warnings() {
      return [];
    }
    get content() {
      return this.result.css;
    }
    get css() {
      return this.result.css;
    }
    get map() {
      return this.result.map;
    }
    get messages() {
      return [];
    }
    get opts() {
      return this.result.opts;
    }
    get processor() {
      return this.result.processor;
    }
    get root() {
      if (this._root) {
        return this._root;
      }
      let root2;
      let parser2 = parse$1;
      try {
        root2 = parser2(this._css, this._opts);
      } catch (error) {
        this.error = error;
      }
      if (this.error) {
        throw this.error;
      } else {
        this._root = root2;
        return root2;
      }
    }
    get [Symbol.toStringTag]() {
      return "NoWorkResult";
    }
  };
  var noWorkResult = NoWorkResult$1;
  NoWorkResult$1.default = NoWorkResult$1;
  let NoWorkResult22 = noWorkResult;
  let LazyResult$1 = lazyResult;
  let Document$1 = document$1;
  let Root$2 = root;
  let Processor$1 = class Processor2 {
    constructor(plugins = []) {
      this.version = "8.4.38";
      this.plugins = this.normalize(plugins);
    }
    normalize(plugins) {
      let normalized = [];
      for (let i2 of plugins) {
        if (i2.postcss === true) {
          i2 = i2();
        } else if (i2.postcss) {
          i2 = i2.postcss;
        }
        if (typeof i2 === "object" && Array.isArray(i2.plugins)) {
          normalized = normalized.concat(i2.plugins);
        } else if (typeof i2 === "object" && i2.postcssPlugin) {
          normalized.push(i2);
        } else if (typeof i2 === "function") {
          normalized.push(i2);
        } else if (typeof i2 === "object" && (i2.parse || i2.stringify)) {
          if (process.env.NODE_ENV !== "production") {
            throw new Error(
              "PostCSS syntaxes cannot be used as plugins. Instead, please use one of the syntax/parser/stringifier options as outlined in your PostCSS runner documentation."
            );
          }
        } else {
          throw new Error(i2 + " is not a PostCSS plugin");
        }
      }
      return normalized;
    }
    process(css, opts = {}) {
      if (!this.plugins.length && !opts.parser && !opts.stringifier && !opts.syntax) {
        return new NoWorkResult22(this, css, opts);
      } else {
        return new LazyResult$1(this, css, opts);
      }
    }
    use(plugin22) {
      this.plugins = this.plugins.concat(this.normalize([plugin22]));
      return this;
    }
  };
  var processor = Processor$1;
  Processor$1.default = Processor$1;
  Root$2.registerProcessor(Processor$1);
  Document$1.registerProcessor(Processor$1);
  let Declaration$1 = declaration;
  let PreviousMap22 = previousMap;
  let Comment$1 = comment;
  let AtRule$1 = atRule;
  let Input$1 = input;
  let Root$1 = root;
  let Rule$1 = rule;
  function fromJSON$1(json, inputs) {
    if (Array.isArray(json)) return json.map((n2) => fromJSON$1(n2));
    let { inputs: ownInputs, ...defaults } = json;
    if (ownInputs) {
      inputs = [];
      for (let input2 of ownInputs) {
        let inputHydrated = { ...input2, __proto__: Input$1.prototype };
        if (inputHydrated.map) {
          inputHydrated.map = {
            ...inputHydrated.map,
            __proto__: PreviousMap22.prototype
          };
        }
        inputs.push(inputHydrated);
      }
    }
    if (defaults.nodes) {
      defaults.nodes = json.nodes.map((n2) => fromJSON$1(n2, inputs));
    }
    if (defaults.source) {
      let { inputId, ...source } = defaults.source;
      defaults.source = source;
      if (inputId != null) {
        defaults.source.input = inputs[inputId];
      }
    }
    if (defaults.type === "root") {
      return new Root$1(defaults);
    } else if (defaults.type === "decl") {
      return new Declaration$1(defaults);
    } else if (defaults.type === "rule") {
      return new Rule$1(defaults);
    } else if (defaults.type === "comment") {
      return new Comment$1(defaults);
    } else if (defaults.type === "atrule") {
      return new AtRule$1(defaults);
    } else {
      throw new Error("Unknown node type: " + json.type);
    }
  }
  var fromJSON_1 = fromJSON$1;
  fromJSON$1.default = fromJSON$1;
  let CssSyntaxError22 = cssSyntaxError;
  let Declaration22 = declaration;
  let LazyResult22 = lazyResult;
  let Container22 = container;
  let Processor22 = processor;
  let stringify = stringify_1;
  let fromJSON = fromJSON_1;
  let Document222 = document$1;
  let Warning22 = warning;
  let Comment22 = comment;
  let AtRule22 = atRule;
  let Result22 = result;
  let Input22 = input;
  let parse = parse_1;
  let list = list_1;
  let Rule22 = rule;
  let Root22 = root;
  let Node22 = node;
  function postcss(...plugins) {
    if (plugins.length === 1 && Array.isArray(plugins[0])) {
      plugins = plugins[0];
    }
    return new Processor22(plugins);
  }
  postcss.plugin = function plugin2(name, initializer) {
    let warningPrinted = false;
    function creator(...args) {
      if (console && console.warn && !warningPrinted) {
        warningPrinted = true;
        console.warn(
          name + ": postcss.plugin was deprecated. Migration guide:\nhttps://evilmartians.com/chronicles/postcss-8-plugin-migration"
        );
        if (process.env.LANG && process.env.LANG.startsWith("cn")) {
          console.warn(
            name + ": 里面 postcss.plugin 被弃用. 迁移指南:\nhttps://www.w3ctech.com/topic/2226"
          );
        }
      }
      let transformer = initializer(...args);
      transformer.postcssPlugin = name;
      transformer.postcssVersion = new Processor22().version;
      return transformer;
    }
    let cache;
    Object.defineProperty(creator, "postcss", {
      get() {
        if (!cache) cache = creator();
        return cache;
      }
    });
    creator.process = function(css, processOpts, pluginOpts) {
      return postcss([creator(pluginOpts)]).process(css, processOpts);
    };
    return creator;
  };
  postcss.stringify = stringify;
  postcss.parse = parse;
  postcss.fromJSON = fromJSON;
  postcss.list = list;
  postcss.comment = (defaults) => new Comment22(defaults);
  postcss.atRule = (defaults) => new AtRule22(defaults);
  postcss.decl = (defaults) => new Declaration22(defaults);
  postcss.rule = (defaults) => new Rule22(defaults);
  postcss.root = (defaults) => new Root22(defaults);
  postcss.document = (defaults) => new Document222(defaults);
  postcss.CssSyntaxError = CssSyntaxError22;
  postcss.Declaration = Declaration22;
  postcss.Container = Container22;
  postcss.Processor = Processor22;
  postcss.Document = Document222;
  postcss.Comment = Comment22;
  postcss.Warning = Warning22;
  postcss.AtRule = AtRule22;
  postcss.Result = Result22;
  postcss.Input = Input22;
  postcss.Rule = Rule22;
  postcss.Root = Root22;
  postcss.Node = Node22;
  LazyResult22.registerPostcss(postcss);
  var postcss_1 = postcss;
  postcss.default = postcss;
  const postcss$1 = /* @__PURE__ */ getDefaultExportFromCjs(postcss_1);
  postcss$1.stringify;
  postcss$1.fromJSON;
  postcss$1.plugin;
  postcss$1.parse;
  postcss$1.list;
  postcss$1.document;
  postcss$1.comment;
  postcss$1.atRule;
  postcss$1.rule;
  postcss$1.decl;
  postcss$1.root;
  postcss$1.CssSyntaxError;
  postcss$1.Declaration;
  postcss$1.Container;
  postcss$1.Processor;
  postcss$1.Document;
  postcss$1.Comment;
  postcss$1.Warning;
  postcss$1.AtRule;
  postcss$1.Result;
  postcss$1.Input;
  postcss$1.Rule;
  postcss$1.Root;
  postcss$1.Node;
  class BaseRRNode {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
    constructor(..._args) {
      __publicField22(this, "parentElement", null);
      __publicField22(this, "parentNode", null);
      __publicField22(this, "ownerDocument");
      __publicField22(this, "firstChild", null);
      __publicField22(this, "lastChild", null);
      __publicField22(this, "previousSibling", null);
      __publicField22(this, "nextSibling", null);
      __publicField22(this, "ELEMENT_NODE", 1);
      __publicField22(this, "TEXT_NODE", 3);
      __publicField22(this, "nodeType");
      __publicField22(this, "nodeName");
      __publicField22(this, "RRNodeType");
    }
    get childNodes() {
      const childNodes2 = [];
      let childIterator = this.firstChild;
      while (childIterator) {
        childNodes2.push(childIterator);
        childIterator = childIterator.nextSibling;
      }
      return childNodes2;
    }
    contains(node2) {
      if (!(node2 instanceof BaseRRNode)) return false;
      else if (node2.ownerDocument !== this.ownerDocument) return false;
      else if (node2 === this) return true;
      while (node2.parentNode) {
        if (node2.parentNode === this) return true;
        node2 = node2.parentNode;
      }
      return false;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    appendChild(_newChild) {
      throw new Error(
        `RRDomException: Failed to execute 'appendChild' on 'RRNode': This RRNode type does not support this method.`
      );
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    insertBefore(_newChild, _refChild) {
      throw new Error(
        `RRDomException: Failed to execute 'insertBefore' on 'RRNode': This RRNode type does not support this method.`
      );
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    removeChild(_node) {
      throw new Error(
        `RRDomException: Failed to execute 'removeChild' on 'RRNode': This RRNode type does not support this method.`
      );
    }
    toString() {
      return "RRNode";
    }
  }
  const testableAccessors = {
    Node: ["childNodes", "parentNode", "parentElement", "textContent"],
    ShadowRoot: ["host", "styleSheets"],
    Element: ["shadowRoot", "querySelector", "querySelectorAll"],
    MutationObserver: []
  };
  const testableMethods = {
    Node: ["contains", "getRootNode"],
    ShadowRoot: ["getSelection"],
    Element: [],
    MutationObserver: ["constructor"]
  };
  const untaintedBasePrototype = {};
  function getUntaintedPrototype(key) {
    if (untaintedBasePrototype[key])
      return untaintedBasePrototype[key];
    const defaultObj = globalThis[key];
    const defaultPrototype = defaultObj.prototype;
    const accessorNames = key in testableAccessors ? testableAccessors[key] : void 0;
    const isUntaintedAccessors = Boolean(
      accessorNames && // @ts-expect-error 2345
      accessorNames.every(
        (accessor) => {
          var _a22, _b2;
          return Boolean(
            (_b2 = (_a22 = Object.getOwnPropertyDescriptor(defaultPrototype, accessor)) == null ? void 0 : _a22.get) == null ? void 0 : _b2.toString().includes("[native code]")
          );
        }
      )
    );
    const methodNames = key in testableMethods ? testableMethods[key] : void 0;
    const isUntaintedMethods = Boolean(
      methodNames && methodNames.every(
        // @ts-expect-error 2345
        (method) => {
          var _a22;
          return typeof defaultPrototype[method] === "function" && ((_a22 = defaultPrototype[method]) == null ? void 0 : _a22.toString().includes("[native code]"));
        }
      )
    );
    if (isUntaintedAccessors && isUntaintedMethods) {
      untaintedBasePrototype[key] = defaultObj.prototype;
      return defaultObj.prototype;
    }
    try {
      const iframeEl = document.createElement("iframe");
      document.body.appendChild(iframeEl);
      const win = iframeEl.contentWindow;
      if (!win) return defaultObj.prototype;
      const untaintedObject = win[key].prototype;
      document.body.removeChild(iframeEl);
      if (!untaintedObject) return defaultPrototype;
      return untaintedBasePrototype[key] = untaintedObject;
    } catch {
      return defaultPrototype;
    }
  }
  const untaintedAccessorCache = {};
  function getUntaintedAccessor(key, instance, accessor) {
    var _a22;
    const cacheKey = `${key}.${String(accessor)}`;
    if (untaintedAccessorCache[cacheKey])
      return untaintedAccessorCache[cacheKey].call(
        instance
      );
    const untaintedPrototype = getUntaintedPrototype(key);
    const untaintedAccessor = (_a22 = Object.getOwnPropertyDescriptor(
      untaintedPrototype,
      accessor
    )) == null ? void 0 : _a22.get;
    if (!untaintedAccessor) return instance[accessor];
    untaintedAccessorCache[cacheKey] = untaintedAccessor;
    return untaintedAccessor.call(instance);
  }
  const untaintedMethodCache = {};
  function getUntaintedMethod(key, instance, method) {
    const cacheKey = `${key}.${String(method)}`;
    if (untaintedMethodCache[cacheKey])
      return untaintedMethodCache[cacheKey].bind(
        instance
      );
    const untaintedPrototype = getUntaintedPrototype(key);
    const untaintedMethod = untaintedPrototype[method];
    if (typeof untaintedMethod !== "function") return instance[method];
    untaintedMethodCache[cacheKey] = untaintedMethod;
    return untaintedMethod.bind(instance);
  }
  function childNodes(n2) {
    return getUntaintedAccessor("Node", n2, "childNodes");
  }
  function parentNode(n2) {
    return getUntaintedAccessor("Node", n2, "parentNode");
  }
  function parentElement(n2) {
    return getUntaintedAccessor("Node", n2, "parentElement");
  }
  function textContent(n2) {
    return getUntaintedAccessor("Node", n2, "textContent");
  }
  function contains(n2, other) {
    return getUntaintedMethod("Node", n2, "contains")(other);
  }
  function getRootNode(n2) {
    return getUntaintedMethod("Node", n2, "getRootNode")();
  }
  function host(n2) {
    if (!n2 || !("host" in n2)) return null;
    return getUntaintedAccessor("ShadowRoot", n2, "host");
  }
  function styleSheets(n2) {
    return n2.styleSheets;
  }
  function shadowRoot(n2) {
    if (!n2 || !("shadowRoot" in n2)) return null;
    return getUntaintedAccessor("Element", n2, "shadowRoot");
  }
  function querySelector(n2, selectors) {
    return getUntaintedAccessor("Element", n2, "querySelector")(selectors);
  }
  function querySelectorAll(n2, selectors) {
    return getUntaintedAccessor("Element", n2, "querySelectorAll")(selectors);
  }
  function mutationObserverCtor() {
    return getUntaintedPrototype("MutationObserver").constructor;
  }
  const index = {
    childNodes,
    parentNode,
    parentElement,
    textContent,
    contains,
    getRootNode,
    host,
    styleSheets,
    shadowRoot,
    querySelector,
    querySelectorAll,
    mutationObserver: mutationObserverCtor
  };
  function on(type, fn, target = document) {
    const options2 = { capture: true, passive: true };
    target.addEventListener(type, fn, options2);
    return () => target.removeEventListener(type, fn, options2);
  }
  const DEPARTED_MIRROR_ACCESS_WARNING = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.";
  let _mirror = {
    map: {},
    getId() {
      console.error(DEPARTED_MIRROR_ACCESS_WARNING);
      return -1;
    },
    getNode() {
      console.error(DEPARTED_MIRROR_ACCESS_WARNING);
      return null;
    },
    removeNodeFromMap() {
      console.error(DEPARTED_MIRROR_ACCESS_WARNING);
    },
    has() {
      console.error(DEPARTED_MIRROR_ACCESS_WARNING);
      return false;
    },
    reset() {
      console.error(DEPARTED_MIRROR_ACCESS_WARNING);
    }
  };
  if (typeof window !== "undefined" && window.Proxy && window.Reflect) {
    _mirror = new Proxy(_mirror, {
      get(target, prop, receiver) {
        if (prop === "map") {
          console.error(DEPARTED_MIRROR_ACCESS_WARNING);
        }
        return Reflect.get(target, prop, receiver);
      }
    });
  }
  function throttle(func, wait2, options2 = {}) {
    let timeout = null;
    let previous = 0;
    return function(...args) {
      const now2 = Date.now();
      if (!previous && options2.leading === false) {
        previous = now2;
      }
      const remaining = wait2 - (now2 - previous);
      const context = this;
      if (remaining <= 0 || remaining > wait2) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now2;
        func.apply(context, args);
      } else if (!timeout && options2.trailing !== false) {
        timeout = setTimeout(() => {
          previous = options2.leading === false ? 0 : Date.now();
          timeout = null;
          func.apply(context, args);
        }, remaining);
      }
    };
  }
  function hookSetter(target, key, d2, isRevoked, win = window) {
    const original = win.Object.getOwnPropertyDescriptor(target, key);
    win.Object.defineProperty(
      target,
      key,
      isRevoked ? d2 : {
        set(value) {
          setTimeout(() => {
            d2.set.call(this, value);
          }, 0);
          if (original && original.set) {
            original.set.call(this, value);
          }
        }
      }
    );
    return () => hookSetter(target, key, original || {}, true);
  }
  function patch(source, name, replacement) {
    try {
      if (!(name in source)) {
        return () => {
        };
      }
      const original = source[name];
      const wrapped = replacement(original);
      if (typeof wrapped === "function") {
        wrapped.prototype = wrapped.prototype || {};
        Object.defineProperties(wrapped, {
          __rrweb_original__: {
            enumerable: false,
            value: original
          }
        });
      }
      source[name] = wrapped;
      return () => {
        source[name] = original;
      };
    } catch {
      return () => {
      };
    }
  }
  let nowTimestamp = Date.now;
  if (!/* @__PURE__ */ /[1-9][0-9]{12}/.test(Date.now().toString())) {
    nowTimestamp = () => (/* @__PURE__ */ new Date()).getTime();
  }
  function getWindowScroll(win) {
    var _a22, _b2, _c, _d;
    const doc = win.document;
    return {
      left: doc.scrollingElement ? doc.scrollingElement.scrollLeft : win.pageXOffset !== void 0 ? win.pageXOffset : doc.documentElement.scrollLeft || (doc == null ? void 0 : doc.body) && ((_a22 = index.parentElement(doc.body)) == null ? void 0 : _a22.scrollLeft) || ((_b2 = doc == null ? void 0 : doc.body) == null ? void 0 : _b2.scrollLeft) || 0,
      top: doc.scrollingElement ? doc.scrollingElement.scrollTop : win.pageYOffset !== void 0 ? win.pageYOffset : (doc == null ? void 0 : doc.documentElement.scrollTop) || (doc == null ? void 0 : doc.body) && ((_c = index.parentElement(doc.body)) == null ? void 0 : _c.scrollTop) || ((_d = doc == null ? void 0 : doc.body) == null ? void 0 : _d.scrollTop) || 0
    };
  }
  function getWindowHeight() {
    return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight;
  }
  function getWindowWidth() {
    return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth;
  }
  function closestElementOfNode(node2) {
    if (!node2) {
      return null;
    }
    const el = node2.nodeType === node2.ELEMENT_NODE ? node2 : index.parentElement(node2);
    return el;
  }
  function isBlocked(node2, blockClass, blockSelector, checkAncestors) {
    if (!node2) {
      return false;
    }
    const el = closestElementOfNode(node2);
    if (!el) {
      return false;
    }
    try {
      if (typeof blockClass === "string") {
        if (el.classList.contains(blockClass)) return true;
        if (checkAncestors && el.closest("." + blockClass) !== null) return true;
      } else {
        if (classMatchesRegex(el, blockClass, checkAncestors)) return true;
      }
    } catch (e2) {
    }
    if (blockSelector) {
      if (el.matches(blockSelector)) return true;
      if (checkAncestors && el.closest(blockSelector) !== null) return true;
    }
    return false;
  }
  function isSerialized(n2, mirror2) {
    return mirror2.getId(n2) !== -1;
  }
  function isIgnored(n2, mirror2, slimDOMOptions) {
    if (n2.tagName === "TITLE" && slimDOMOptions.headTitleMutations) {
      return true;
    }
    return mirror2.getId(n2) === IGNORED_NODE;
  }
  function isAncestorRemoved(target, mirror2) {
    if (isShadowRoot(target)) {
      return false;
    }
    const id = mirror2.getId(target);
    if (!mirror2.has(id)) {
      return true;
    }
    const parent = index.parentNode(target);
    if (parent && parent.nodeType === target.DOCUMENT_NODE) {
      return false;
    }
    if (!parent) {
      return true;
    }
    return isAncestorRemoved(parent, mirror2);
  }
  function legacy_isTouchEvent(event) {
    return Boolean(event.changedTouches);
  }
  function polyfill$1(win = window) {
    if ("NodeList" in win && !win.NodeList.prototype.forEach) {
      win.NodeList.prototype.forEach = Array.prototype.forEach;
    }
    if ("DOMTokenList" in win && !win.DOMTokenList.prototype.forEach) {
      win.DOMTokenList.prototype.forEach = Array.prototype.forEach;
    }
  }
  function isSerializedIframe(n2, mirror2) {
    return Boolean(n2.nodeName === "IFRAME" && mirror2.getMeta(n2));
  }
  function isSerializedStylesheet(n2, mirror2) {
    return Boolean(
      n2.nodeName === "LINK" && n2.nodeType === n2.ELEMENT_NODE && n2.getAttribute && n2.getAttribute("rel") === "stylesheet" && mirror2.getMeta(n2)
    );
  }
  function hasShadowRoot(n2) {
    if (!n2) return false;
    if (n2 instanceof BaseRRNode && "shadowRoot" in n2) {
      return Boolean(n2.shadowRoot);
    }
    return Boolean(index.shadowRoot(n2));
  }
  class StyleSheetMirror {
    constructor() {
      __publicField2(this, "id", 1);
      __publicField2(this, "styleIDMap", /* @__PURE__ */ new WeakMap());
      __publicField2(this, "idStyleMap", /* @__PURE__ */ new Map());
    }
    getId(stylesheet) {
      return this.styleIDMap.get(stylesheet) ?? -1;
    }
    has(stylesheet) {
      return this.styleIDMap.has(stylesheet);
    }
    /**
     * @returns If the stylesheet is in the mirror, returns the id of the stylesheet. If not, return the new assigned id.
     */
    add(stylesheet, id) {
      if (this.has(stylesheet)) return this.getId(stylesheet);
      let newId;
      if (id === void 0) {
        newId = this.id++;
      } else newId = id;
      this.styleIDMap.set(stylesheet, newId);
      this.idStyleMap.set(newId, stylesheet);
      return newId;
    }
    getStyle(id) {
      return this.idStyleMap.get(id) || null;
    }
    reset() {
      this.styleIDMap = /* @__PURE__ */ new WeakMap();
      this.idStyleMap = /* @__PURE__ */ new Map();
      this.id = 1;
    }
    generateId() {
      return this.id++;
    }
  }
  function getShadowHost(n2) {
    var _a22;
    let shadowHost = null;
    if ("getRootNode" in n2 && ((_a22 = index.getRootNode(n2)) == null ? void 0 : _a22.nodeType) === Node.DOCUMENT_FRAGMENT_NODE && index.host(index.getRootNode(n2)))
      shadowHost = index.host(index.getRootNode(n2));
    return shadowHost;
  }
  function getRootShadowHost(n2) {
    let rootShadowHost = n2;
    let shadowHost;
    while (shadowHost = getShadowHost(rootShadowHost))
      rootShadowHost = shadowHost;
    return rootShadowHost;
  }
  function shadowHostInDom(n2) {
    const doc = n2.ownerDocument;
    if (!doc) return false;
    const shadowHost = getRootShadowHost(n2);
    return index.contains(doc, shadowHost);
  }
  function inDom(n2) {
    const doc = n2.ownerDocument;
    if (!doc) return false;
    return index.contains(doc, n2) || shadowHostInDom(n2);
  }
  var EventType = /* @__PURE__ */ ((EventType2) => {
    EventType2[EventType2["DomContentLoaded"] = 0] = "DomContentLoaded";
    EventType2[EventType2["Load"] = 1] = "Load";
    EventType2[EventType2["FullSnapshot"] = 2] = "FullSnapshot";
    EventType2[EventType2["IncrementalSnapshot"] = 3] = "IncrementalSnapshot";
    EventType2[EventType2["Meta"] = 4] = "Meta";
    EventType2[EventType2["Custom"] = 5] = "Custom";
    EventType2[EventType2["Plugin"] = 6] = "Plugin";
    return EventType2;
  })(EventType || {});
  var IncrementalSource = /* @__PURE__ */ ((IncrementalSource2) => {
    IncrementalSource2[IncrementalSource2["Mutation"] = 0] = "Mutation";
    IncrementalSource2[IncrementalSource2["MouseMove"] = 1] = "MouseMove";
    IncrementalSource2[IncrementalSource2["MouseInteraction"] = 2] = "MouseInteraction";
    IncrementalSource2[IncrementalSource2["Scroll"] = 3] = "Scroll";
    IncrementalSource2[IncrementalSource2["ViewportResize"] = 4] = "ViewportResize";
    IncrementalSource2[IncrementalSource2["Input"] = 5] = "Input";
    IncrementalSource2[IncrementalSource2["TouchMove"] = 6] = "TouchMove";
    IncrementalSource2[IncrementalSource2["MediaInteraction"] = 7] = "MediaInteraction";
    IncrementalSource2[IncrementalSource2["StyleSheetRule"] = 8] = "StyleSheetRule";
    IncrementalSource2[IncrementalSource2["CanvasMutation"] = 9] = "CanvasMutation";
    IncrementalSource2[IncrementalSource2["Font"] = 10] = "Font";
    IncrementalSource2[IncrementalSource2["Log"] = 11] = "Log";
    IncrementalSource2[IncrementalSource2["Drag"] = 12] = "Drag";
    IncrementalSource2[IncrementalSource2["StyleDeclaration"] = 13] = "StyleDeclaration";
    IncrementalSource2[IncrementalSource2["Selection"] = 14] = "Selection";
    IncrementalSource2[IncrementalSource2["AdoptedStyleSheet"] = 15] = "AdoptedStyleSheet";
    IncrementalSource2[IncrementalSource2["CustomElement"] = 16] = "CustomElement";
    return IncrementalSource2;
  })(IncrementalSource || {});
  var MouseInteractions = /* @__PURE__ */ ((MouseInteractions2) => {
    MouseInteractions2[MouseInteractions2["MouseUp"] = 0] = "MouseUp";
    MouseInteractions2[MouseInteractions2["MouseDown"] = 1] = "MouseDown";
    MouseInteractions2[MouseInteractions2["Click"] = 2] = "Click";
    MouseInteractions2[MouseInteractions2["ContextMenu"] = 3] = "ContextMenu";
    MouseInteractions2[MouseInteractions2["DblClick"] = 4] = "DblClick";
    MouseInteractions2[MouseInteractions2["Focus"] = 5] = "Focus";
    MouseInteractions2[MouseInteractions2["Blur"] = 6] = "Blur";
    MouseInteractions2[MouseInteractions2["TouchStart"] = 7] = "TouchStart";
    MouseInteractions2[MouseInteractions2["TouchMove_Departed"] = 8] = "TouchMove_Departed";
    MouseInteractions2[MouseInteractions2["TouchEnd"] = 9] = "TouchEnd";
    MouseInteractions2[MouseInteractions2["TouchCancel"] = 10] = "TouchCancel";
    return MouseInteractions2;
  })(MouseInteractions || {});
  var PointerTypes = /* @__PURE__ */ ((PointerTypes2) => {
    PointerTypes2[PointerTypes2["Mouse"] = 0] = "Mouse";
    PointerTypes2[PointerTypes2["Pen"] = 1] = "Pen";
    PointerTypes2[PointerTypes2["Touch"] = 2] = "Touch";
    return PointerTypes2;
  })(PointerTypes || {});
  var CanvasContext = /* @__PURE__ */ ((CanvasContext2) => {
    CanvasContext2[CanvasContext2["2D"] = 0] = "2D";
    CanvasContext2[CanvasContext2["WebGL"] = 1] = "WebGL";
    CanvasContext2[CanvasContext2["WebGL2"] = 2] = "WebGL2";
    return CanvasContext2;
  })(CanvasContext || {});
  var MediaInteractions = /* @__PURE__ */ ((MediaInteractions2) => {
    MediaInteractions2[MediaInteractions2["Play"] = 0] = "Play";
    MediaInteractions2[MediaInteractions2["Pause"] = 1] = "Pause";
    MediaInteractions2[MediaInteractions2["Seeked"] = 2] = "Seeked";
    MediaInteractions2[MediaInteractions2["VolumeChange"] = 3] = "VolumeChange";
    MediaInteractions2[MediaInteractions2["RateChange"] = 4] = "RateChange";
    return MediaInteractions2;
  })(MediaInteractions || {});
  function isNodeInLinkedList(n2) {
    return "__ln" in n2;
  }
  class DoubleLinkedList {
    constructor() {
      __publicField2(this, "length", 0);
      __publicField2(this, "head", null);
      __publicField2(this, "tail", null);
    }
    get(position) {
      if (position >= this.length) {
        throw new Error("Position outside of list range");
      }
      let current = this.head;
      for (let index2 = 0; index2 < position; index2++) {
        current = (current == null ? void 0 : current.next) || null;
      }
      return current;
    }
    addNode(n2) {
      const node2 = {
        value: n2,
        previous: null,
        next: null
      };
      n2.__ln = node2;
      if (n2.previousSibling && isNodeInLinkedList(n2.previousSibling)) {
        const current = n2.previousSibling.__ln.next;
        node2.next = current;
        node2.previous = n2.previousSibling.__ln;
        n2.previousSibling.__ln.next = node2;
        if (current) {
          current.previous = node2;
        }
      } else if (n2.nextSibling && isNodeInLinkedList(n2.nextSibling) && n2.nextSibling.__ln.previous) {
        const current = n2.nextSibling.__ln.previous;
        node2.previous = current;
        node2.next = n2.nextSibling.__ln;
        n2.nextSibling.__ln.previous = node2;
        if (current) {
          current.next = node2;
        }
      } else {
        if (this.head) {
          this.head.previous = node2;
        }
        node2.next = this.head;
        this.head = node2;
      }
      if (node2.next === null) {
        this.tail = node2;
      }
      this.length++;
    }
    removeNode(n2) {
      const current = n2.__ln;
      if (!this.head) {
        return;
      }
      if (!current.previous) {
        this.head = current.next;
        if (this.head) {
          this.head.previous = null;
        } else {
          this.tail = null;
        }
      } else {
        current.previous.next = current.next;
        if (current.next) {
          current.next.previous = current.previous;
        } else {
          this.tail = current.previous;
        }
      }
      if (n2.__ln) {
        delete n2.__ln;
      }
      this.length--;
    }
  }
  const moveKey = (id, parentId) => `${id}@${parentId}`;
  class MutationBuffer {
    constructor() {
      __publicField2(this, "frozen", false);
      __publicField2(this, "locked", false);
      __publicField2(this, "texts", []);
      __publicField2(this, "attributes", []);
      __publicField2(this, "attributeMap", /* @__PURE__ */ new WeakMap());
      __publicField2(this, "removes", []);
      __publicField2(this, "mapRemoves", []);
      __publicField2(this, "movedMap", {});
      __publicField2(this, "addedSet", /* @__PURE__ */ new Set());
      __publicField2(this, "movedSet", /* @__PURE__ */ new Set());
      __publicField2(this, "droppedSet", /* @__PURE__ */ new Set());
      __publicField2(this, "mutationCb");
      __publicField2(this, "blockClass");
      __publicField2(this, "blockSelector");
      __publicField2(this, "maskTextClass");
      __publicField2(this, "maskTextSelector");
      __publicField2(this, "inlineStylesheet");
      __publicField2(this, "maskInputOptions");
      __publicField2(this, "maskTextFn");
      __publicField2(this, "maskInputFn");
      __publicField2(this, "keepIframeSrcFn");
      __publicField2(this, "recordCanvas");
      __publicField2(this, "inlineImages");
      __publicField2(this, "slimDOMOptions");
      __publicField2(this, "dataURLOptions");
      __publicField2(this, "doc");
      __publicField2(this, "mirror");
      __publicField2(this, "iframeManager");
      __publicField2(this, "stylesheetManager");
      __publicField2(this, "shadowDomManager");
      __publicField2(this, "canvasManager");
      __publicField2(this, "processedNodeManager");
      __publicField2(this, "unattachedDoc");
      __publicField2(this, "processMutations", (mutations) => {
        mutations.forEach(this.processMutation);
        this.emit();
      });
      __publicField2(this, "emit", () => {
        if (this.frozen || this.locked) {
          return;
        }
        const adds = [];
        const addedIds = /* @__PURE__ */ new Set();
        const addList = new DoubleLinkedList();
        const getNextId = (n2) => {
          let ns = n2;
          let nextId = IGNORED_NODE;
          while (nextId === IGNORED_NODE) {
            ns = ns && ns.nextSibling;
            nextId = ns && this.mirror.getId(ns);
          }
          return nextId;
        };
        const pushAdd = (n2) => {
          const parent = index.parentNode(n2);
          if (!parent || !inDom(n2) || parent.tagName === "TEXTAREA") {
            return;
          }
          const parentId = isShadowRoot(parent) ? this.mirror.getId(getShadowHost(n2)) : this.mirror.getId(parent);
          const nextId = getNextId(n2);
          if (parentId === -1 || nextId === -1) {
            return addList.addNode(n2);
          }
          const sn = serializeNodeWithId(n2, {
            doc: this.doc,
            mirror: this.mirror,
            blockClass: this.blockClass,
            blockSelector: this.blockSelector,
            maskTextClass: this.maskTextClass,
            maskTextSelector: this.maskTextSelector,
            skipChild: true,
            newlyAddedElement: true,
            inlineStylesheet: this.inlineStylesheet,
            maskInputOptions: this.maskInputOptions,
            maskTextFn: this.maskTextFn,
            maskInputFn: this.maskInputFn,
            slimDOMOptions: this.slimDOMOptions,
            dataURLOptions: this.dataURLOptions,
            recordCanvas: this.recordCanvas,
            inlineImages: this.inlineImages,
            onSerialize: (currentN) => {
              if (isSerializedIframe(currentN, this.mirror)) {
                this.iframeManager.addIframe(currentN);
              }
              if (isSerializedStylesheet(currentN, this.mirror)) {
                this.stylesheetManager.trackLinkElement(
                  currentN
                );
              }
              if (hasShadowRoot(n2)) {
                this.shadowDomManager.addShadowRoot(index.shadowRoot(n2), this.doc);
              }
            },
            onIframeLoad: (iframe, childSn) => {
              this.iframeManager.attachIframe(iframe, childSn);
              this.shadowDomManager.observeAttachShadow(iframe);
            },
            onStylesheetLoad: (link, childSn) => {
              this.stylesheetManager.attachLinkElement(link, childSn);
            }
          });
          if (sn) {
            adds.push({
              parentId,
              nextId,
              node: sn
            });
            addedIds.add(sn.id);
          }
        };
        while (this.mapRemoves.length) {
          this.mirror.removeNodeFromMap(this.mapRemoves.shift());
        }
        for (const n2 of this.movedSet) {
          if (isParentRemoved(this.removes, n2, this.mirror) && !this.movedSet.has(index.parentNode(n2))) {
            continue;
          }
          pushAdd(n2);
        }
        for (const n2 of this.addedSet) {
          if (!isAncestorInSet(this.droppedSet, n2) && !isParentRemoved(this.removes, n2, this.mirror)) {
            pushAdd(n2);
          } else if (isAncestorInSet(this.movedSet, n2)) {
            pushAdd(n2);
          } else {
            this.droppedSet.add(n2);
          }
        }
        let candidate = null;
        while (addList.length) {
          let node2 = null;
          if (candidate) {
            const parentId = this.mirror.getId(index.parentNode(candidate.value));
            const nextId = getNextId(candidate.value);
            if (parentId !== -1 && nextId !== -1) {
              node2 = candidate;
            }
          }
          if (!node2) {
            let tailNode = addList.tail;
            while (tailNode) {
              const _node = tailNode;
              tailNode = tailNode.previous;
              if (_node) {
                const parentId = this.mirror.getId(index.parentNode(_node.value));
                const nextId = getNextId(_node.value);
                if (nextId === -1) continue;
                else if (parentId !== -1) {
                  node2 = _node;
                  break;
                } else {
                  const unhandledNode = _node.value;
                  const parent = index.parentNode(unhandledNode);
                  if (parent && parent.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                    const shadowHost = index.host(parent);
                    const parentId2 = this.mirror.getId(shadowHost);
                    if (parentId2 !== -1) {
                      node2 = _node;
                      break;
                    }
                  }
                }
              }
            }
          }
          if (!node2) {
            while (addList.head) {
              addList.removeNode(addList.head.value);
            }
            break;
          }
          candidate = node2.previous;
          addList.removeNode(node2.value);
          pushAdd(node2.value);
        }
        const payload = {
          texts: this.texts.map((text) => {
            const n2 = text.node;
            const parent = index.parentNode(n2);
            if (parent && parent.tagName === "TEXTAREA") {
              this.genTextAreaValueMutation(parent);
            }
            return {
              id: this.mirror.getId(n2),
              value: text.value
            };
          }).filter((text) => !addedIds.has(text.id)).filter((text) => this.mirror.has(text.id)),
          attributes: this.attributes.map((attribute) => {
            const { attributes } = attribute;
            if (typeof attributes.style === "string") {
              const diffAsStr = JSON.stringify(attribute.styleDiff);
              const unchangedAsStr = JSON.stringify(attribute._unchangedStyles);
              if (diffAsStr.length < attributes.style.length) {
                if ((diffAsStr + unchangedAsStr).split("var(").length === attributes.style.split("var(").length) {
                  attributes.style = attribute.styleDiff;
                }
              }
            }
            return {
              id: this.mirror.getId(attribute.node),
              attributes
            };
          }).filter((attribute) => !addedIds.has(attribute.id)).filter((attribute) => this.mirror.has(attribute.id)),
          removes: this.removes,
          adds
        };
        if (!payload.texts.length && !payload.attributes.length && !payload.removes.length && !payload.adds.length) {
          return;
        }
        this.texts = [];
        this.attributes = [];
        this.attributeMap = /* @__PURE__ */ new WeakMap();
        this.removes = [];
        this.addedSet = /* @__PURE__ */ new Set();
        this.movedSet = /* @__PURE__ */ new Set();
        this.droppedSet = /* @__PURE__ */ new Set();
        this.movedMap = {};
        this.mutationCb(payload);
      });
      __publicField2(this, "genTextAreaValueMutation", (textarea) => {
        let item = this.attributeMap.get(textarea);
        if (!item) {
          item = {
            node: textarea,
            attributes: {},
            styleDiff: {},
            _unchangedStyles: {}
          };
          this.attributes.push(item);
          this.attributeMap.set(textarea, item);
        }
        item.attributes.value = Array.from(
          index.childNodes(textarea),
          (cn) => index.textContent(cn) || ""
        ).join("");
      });
      __publicField2(this, "processMutation", (m2) => {
        if (isIgnored(m2.target, this.mirror, this.slimDOMOptions)) {
          return;
        }
        switch (m2.type) {
          case "characterData": {
            const value = index.textContent(m2.target);
            if (!isBlocked(m2.target, this.blockClass, this.blockSelector, false) && value !== m2.oldValue) {
              this.texts.push({
                value: needMaskingText(
                  m2.target,
                  this.maskTextClass,
                  this.maskTextSelector,
                  true
                  // checkAncestors
                ) && value ? this.maskTextFn ? this.maskTextFn(value, closestElementOfNode(m2.target)) : value.replace(/[\S]/g, "*") : value,
                node: m2.target
              });
            }
            break;
          }
          case "attributes": {
            const target = m2.target;
            let attributeName = m2.attributeName;
            let value = m2.target.getAttribute(attributeName);
            if (attributeName === "value") {
              const type = getInputType(target);
              value = maskInputValue({
                element: target,
                maskInputOptions: this.maskInputOptions,
                tagName: target.tagName,
                type,
                value,
                maskInputFn: this.maskInputFn
              });
            }
            if (isBlocked(m2.target, this.blockClass, this.blockSelector, false) || value === m2.oldValue) {
              return;
            }
            let item = this.attributeMap.get(m2.target);
            if (target.tagName === "IFRAME" && attributeName === "src" && !this.keepIframeSrcFn(value)) {
              if (!target.contentDocument) {
                attributeName = "rr_src";
              } else {
                return;
              }
            }
            if (!item) {
              item = {
                node: m2.target,
                attributes: {},
                styleDiff: {},
                _unchangedStyles: {}
              };
              this.attributes.push(item);
              this.attributeMap.set(m2.target, item);
            }
            if (attributeName === "type" && target.tagName === "INPUT" && (m2.oldValue || "").toLowerCase() === "password") {
              target.setAttribute("data-rr-is-password", "true");
            }
            if (!ignoreAttribute(target.tagName, attributeName)) {
              item.attributes[attributeName] = transformAttribute(
                this.doc,
                toLowerCase(target.tagName),
                toLowerCase(attributeName),
                value
              );
              if (attributeName === "style") {
                if (!this.unattachedDoc) {
                  try {
                    this.unattachedDoc = document.implementation.createHTMLDocument();
                  } catch (e2) {
                    this.unattachedDoc = this.doc;
                  }
                }
                const old = this.unattachedDoc.createElement("span");
                if (m2.oldValue) {
                  old.setAttribute("style", m2.oldValue);
                }
                for (const pname of Array.from(target.style)) {
                  const newValue = target.style.getPropertyValue(pname);
                  const newPriority = target.style.getPropertyPriority(pname);
                  if (newValue !== old.style.getPropertyValue(pname) || newPriority !== old.style.getPropertyPriority(pname)) {
                    if (newPriority === "") {
                      item.styleDiff[pname] = newValue;
                    } else {
                      item.styleDiff[pname] = [newValue, newPriority];
                    }
                  } else {
                    item._unchangedStyles[pname] = [newValue, newPriority];
                  }
                }
                for (const pname of Array.from(old.style)) {
                  if (target.style.getPropertyValue(pname) === "") {
                    item.styleDiff[pname] = false;
                  }
                }
              } else if (attributeName === "open" && target.tagName === "DIALOG") {
                if (target.matches("dialog:modal")) {
                  item.attributes["rr_open_mode"] = "modal";
                } else {
                  item.attributes["rr_open_mode"] = "non-modal";
                }
              }
            }
            break;
          }
          case "childList": {
            if (isBlocked(m2.target, this.blockClass, this.blockSelector, true))
              return;
            if (m2.target.tagName === "TEXTAREA") {
              this.genTextAreaValueMutation(m2.target);
              return;
            }
            m2.addedNodes.forEach((n2) => this.genAdds(n2, m2.target));
            m2.removedNodes.forEach((n2) => {
              const nodeId = this.mirror.getId(n2);
              const parentId = isShadowRoot(m2.target) ? this.mirror.getId(index.host(m2.target)) : this.mirror.getId(m2.target);
              if (isBlocked(m2.target, this.blockClass, this.blockSelector, false) || isIgnored(n2, this.mirror, this.slimDOMOptions) || !isSerialized(n2, this.mirror)) {
                return;
              }
              if (this.addedSet.has(n2)) {
                deepDelete(this.addedSet, n2);
                this.droppedSet.add(n2);
              } else if (this.addedSet.has(m2.target) && nodeId === -1) ;
              else if (isAncestorRemoved(m2.target, this.mirror)) ;
              else if (this.movedSet.has(n2) && this.movedMap[moveKey(nodeId, parentId)]) {
                deepDelete(this.movedSet, n2);
              } else {
                this.removes.push({
                  parentId,
                  id: nodeId,
                  isShadow: isShadowRoot(m2.target) && isNativeShadowDom(m2.target) ? true : void 0
                });
              }
              this.mapRemoves.push(n2);
            });
            break;
          }
        }
      });
      __publicField2(this, "genAdds", (n2, target) => {
        if (this.processedNodeManager.inOtherBuffer(n2, this)) return;
        if (this.addedSet.has(n2) || this.movedSet.has(n2)) return;
        if (this.mirror.hasNode(n2)) {
          if (isIgnored(n2, this.mirror, this.slimDOMOptions)) {
            return;
          }
          this.movedSet.add(n2);
          let targetId = null;
          if (target && this.mirror.hasNode(target)) {
            targetId = this.mirror.getId(target);
          }
          if (targetId && targetId !== -1) {
            this.movedMap[moveKey(this.mirror.getId(n2), targetId)] = true;
          }
        } else {
          this.addedSet.add(n2);
          this.droppedSet.delete(n2);
        }
        if (!isBlocked(n2, this.blockClass, this.blockSelector, false)) {
          index.childNodes(n2).forEach((childN) => this.genAdds(childN));
          if (hasShadowRoot(n2)) {
            index.childNodes(index.shadowRoot(n2)).forEach((childN) => {
              this.processedNodeManager.add(childN, this);
              this.genAdds(childN, n2);
            });
          }
        }
      });
    }
    init(options2) {
      [
        "mutationCb",
        "blockClass",
        "blockSelector",
        "maskTextClass",
        "maskTextSelector",
        "inlineStylesheet",
        "maskInputOptions",
        "maskTextFn",
        "maskInputFn",
        "keepIframeSrcFn",
        "recordCanvas",
        "inlineImages",
        "slimDOMOptions",
        "dataURLOptions",
        "doc",
        "mirror",
        "iframeManager",
        "stylesheetManager",
        "shadowDomManager",
        "canvasManager",
        "processedNodeManager"
      ].forEach((key) => {
        this[key] = options2[key];
      });
    }
    freeze() {
      this.frozen = true;
      this.canvasManager.freeze();
    }
    unfreeze() {
      this.frozen = false;
      this.canvasManager.unfreeze();
      this.emit();
    }
    isFrozen() {
      return this.frozen;
    }
    lock() {
      this.locked = true;
      this.canvasManager.lock();
    }
    unlock() {
      this.locked = false;
      this.canvasManager.unlock();
      this.emit();
    }
    reset() {
      this.shadowDomManager.reset();
      this.canvasManager.reset();
    }
  }
  function deepDelete(addsSet, n2) {
    addsSet.delete(n2);
    index.childNodes(n2).forEach((childN) => deepDelete(addsSet, childN));
  }
  function isParentRemoved(removes, n2, mirror2) {
    if (removes.length === 0) return false;
    return _isParentRemoved(removes, n2, mirror2);
  }
  function _isParentRemoved(removes, n2, mirror2) {
    let node2 = index.parentNode(n2);
    while (node2) {
      const parentId = mirror2.getId(node2);
      if (removes.some((r2) => r2.id === parentId)) {
        return true;
      }
      node2 = index.parentNode(node2);
    }
    return false;
  }
  function isAncestorInSet(set, n2) {
    if (set.size === 0) return false;
    return _isAncestorInSet(set, n2);
  }
  function _isAncestorInSet(set, n2) {
    const parent = index.parentNode(n2);
    if (!parent) {
      return false;
    }
    if (set.has(parent)) {
      return true;
    }
    return _isAncestorInSet(set, parent);
  }
  let errorHandler;
  function registerErrorHandler(handler) {
    errorHandler = handler;
  }
  function unregisterErrorHandler() {
    errorHandler = void 0;
  }
  const callbackWrapper = (cb) => {
    if (!errorHandler) {
      return cb;
    }
    const rrwebWrapped = (...rest) => {
      try {
        return cb(...rest);
      } catch (error) {
        if (errorHandler && errorHandler(error) === true) {
          return;
        }
        throw error;
      }
    };
    return rrwebWrapped;
  };
  const mutationBuffers = [];
  function getEventTarget(event) {
    try {
      if ("composedPath" in event) {
        const path = event.composedPath();
        if (path.length) {
          return path[0];
        }
      } else if ("path" in event && event.path.length) {
        return event.path[0];
      }
    } catch {
    }
    return event && event.target;
  }
  function initMutationObserver(options2, rootEl) {
    const mutationBuffer = new MutationBuffer();
    mutationBuffers.push(mutationBuffer);
    mutationBuffer.init(options2);
    const observer2 = new (mutationObserverCtor())(
      callbackWrapper(mutationBuffer.processMutations.bind(mutationBuffer))
    );
    observer2.observe(rootEl, {
      attributes: true,
      attributeOldValue: true,
      characterData: true,
      characterDataOldValue: true,
      childList: true,
      subtree: true
    });
    return observer2;
  }
  function initMoveObserver({
    mousemoveCb,
    sampling,
    doc,
    mirror: mirror2
  }) {
    if (sampling.mousemove === false) {
      return () => {
      };
    }
    const threshold = typeof sampling.mousemove === "number" ? sampling.mousemove : 50;
    const callbackThreshold = typeof sampling.mousemoveCallback === "number" ? sampling.mousemoveCallback : 500;
    let positions = [];
    let timeBaseline;
    const wrappedCb = throttle(
      callbackWrapper(
        (source) => {
          const totalOffset = Date.now() - timeBaseline;
          mousemoveCb(
            positions.map((p2) => {
              p2.timeOffset -= totalOffset;
              return p2;
            }),
            source
          );
          positions = [];
          timeBaseline = null;
        }
      ),
      callbackThreshold
    );
    const updatePosition = callbackWrapper(
      throttle(
        callbackWrapper((evt) => {
          const target = getEventTarget(evt);
          const { clientX, clientY } = legacy_isTouchEvent(evt) ? evt.changedTouches[0] : evt;
          if (!timeBaseline) {
            timeBaseline = nowTimestamp();
          }
          positions.push({
            x: clientX,
            y: clientY,
            id: mirror2.getId(target),
            timeOffset: nowTimestamp() - timeBaseline
          });
          wrappedCb(
            typeof DragEvent !== "undefined" && evt instanceof DragEvent ? IncrementalSource.Drag : evt instanceof MouseEvent ? IncrementalSource.MouseMove : IncrementalSource.TouchMove
          );
        }),
        threshold,
        {
          trailing: false
        }
      )
    );
    const handlers = [
      on("mousemove", updatePosition, doc),
      on("touchmove", updatePosition, doc),
      on("drag", updatePosition, doc)
    ];
    return callbackWrapper(() => {
      handlers.forEach((h2) => h2());
    });
  }
  function initMouseInteractionObserver({
    mouseInteractionCb,
    doc,
    mirror: mirror2,
    blockClass,
    blockSelector,
    sampling
  }) {
    if (sampling.mouseInteraction === false) {
      return () => {
      };
    }
    const disableMap = sampling.mouseInteraction === true || sampling.mouseInteraction === void 0 ? {} : sampling.mouseInteraction;
    const handlers = [];
    let currentPointerType = null;
    const getHandler = (eventKey) => {
      return (event) => {
        const target = getEventTarget(event);
        if (isBlocked(target, blockClass, blockSelector, true)) {
          return;
        }
        let pointerType = null;
        let thisEventKey = eventKey;
        if ("pointerType" in event) {
          switch (event.pointerType) {
            case "mouse":
              pointerType = PointerTypes.Mouse;
              break;
            case "touch":
              pointerType = PointerTypes.Touch;
              break;
            case "pen":
              pointerType = PointerTypes.Pen;
              break;
          }
          if (pointerType === PointerTypes.Touch) {
            if (MouseInteractions[eventKey] === MouseInteractions.MouseDown) {
              thisEventKey = "TouchStart";
            } else if (MouseInteractions[eventKey] === MouseInteractions.MouseUp) {
              thisEventKey = "TouchEnd";
            }
          } else if (pointerType === PointerTypes.Pen) ;
        } else if (legacy_isTouchEvent(event)) {
          pointerType = PointerTypes.Touch;
        }
        if (pointerType !== null) {
          currentPointerType = pointerType;
          if (thisEventKey.startsWith("Touch") && pointerType === PointerTypes.Touch || thisEventKey.startsWith("Mouse") && pointerType === PointerTypes.Mouse) {
            pointerType = null;
          }
        } else if (MouseInteractions[eventKey] === MouseInteractions.Click) {
          pointerType = currentPointerType;
          currentPointerType = null;
        }
        const e2 = legacy_isTouchEvent(event) ? event.changedTouches[0] : event;
        if (!e2) {
          return;
        }
        const id = mirror2.getId(target);
        const { clientX, clientY } = e2;
        callbackWrapper(mouseInteractionCb)({
          type: MouseInteractions[thisEventKey],
          id,
          x: clientX,
          y: clientY,
          ...pointerType !== null && { pointerType }
        });
      };
    };
    Object.keys(MouseInteractions).filter(
      (key) => Number.isNaN(Number(key)) && !key.endsWith("_Departed") && disableMap[key] !== false
    ).forEach((eventKey) => {
      let eventName = toLowerCase(eventKey);
      const handler = getHandler(eventKey);
      if (window.PointerEvent) {
        switch (MouseInteractions[eventKey]) {
          case MouseInteractions.MouseDown:
          case MouseInteractions.MouseUp:
            eventName = eventName.replace(
              "mouse",
              "pointer"
            );
            break;
          case MouseInteractions.TouchStart:
          case MouseInteractions.TouchEnd:
            return;
        }
      }
      handlers.push(on(eventName, handler, doc));
    });
    return callbackWrapper(() => {
      handlers.forEach((h2) => h2());
    });
  }
  function initScrollObserver({
    scrollCb,
    doc,
    mirror: mirror2,
    blockClass,
    blockSelector,
    sampling
  }) {
    const updatePosition = callbackWrapper(
      throttle(
        callbackWrapper((evt) => {
          const target = getEventTarget(evt);
          if (!target || isBlocked(target, blockClass, blockSelector, true)) {
            return;
          }
          const id = mirror2.getId(target);
          if (target === doc && doc.defaultView) {
            const scrollLeftTop = getWindowScroll(doc.defaultView);
            scrollCb({
              id,
              x: scrollLeftTop.left,
              y: scrollLeftTop.top
            });
          } else {
            scrollCb({
              id,
              x: target.scrollLeft,
              y: target.scrollTop
            });
          }
        }),
        sampling.scroll || 100
      )
    );
    return on("scroll", updatePosition, doc);
  }
  function initViewportResizeObserver({ viewportResizeCb }, { win }) {
    let lastH = -1;
    let lastW = -1;
    const updateDimension = callbackWrapper(
      throttle(
        callbackWrapper(() => {
          const height = getWindowHeight();
          const width = getWindowWidth();
          if (lastH !== height || lastW !== width) {
            viewportResizeCb({
              width: Number(width),
              height: Number(height)
            });
            lastH = height;
            lastW = width;
          }
        }),
        200
      )
    );
    return on("resize", updateDimension, win);
  }
  const INPUT_TAGS = ["INPUT", "TEXTAREA", "SELECT"];
  const lastInputValueMap = /* @__PURE__ */ new WeakMap();
  function initInputObserver({
    inputCb,
    doc,
    mirror: mirror2,
    blockClass,
    blockSelector,
    ignoreClass,
    ignoreSelector,
    maskInputOptions,
    maskInputFn,
    sampling,
    userTriggeredOnInput
  }) {
    function eventHandler(event) {
      let target = getEventTarget(event);
      const userTriggered = event.isTrusted;
      const tagName = target && target.tagName;
      if (target && tagName === "OPTION") {
        target = index.parentElement(target);
      }
      if (!target || !tagName || INPUT_TAGS.indexOf(tagName) < 0 || isBlocked(target, blockClass, blockSelector, true)) {
        return;
      }
      if (target.classList.contains(ignoreClass) || ignoreSelector && target.matches(ignoreSelector)) {
        return;
      }
      let text = target.value;
      let isChecked = false;
      const type = getInputType(target) || "";
      if (type === "radio" || type === "checkbox") {
        isChecked = target.checked;
      } else if (maskInputOptions[tagName.toLowerCase()] || maskInputOptions[type]) {
        text = maskInputValue({
          element: target,
          maskInputOptions,
          tagName,
          type,
          value: text,
          maskInputFn
        });
      }
      cbWithDedup(
        target,
        userTriggeredOnInput ? { text, isChecked, userTriggered } : { text, isChecked }
      );
      const name = target.name;
      if (type === "radio" && name && isChecked) {
        doc.querySelectorAll(`input[type="radio"][name="${name}"]`).forEach((el) => {
          if (el !== target) {
            const text2 = el.value;
            cbWithDedup(
              el,
              userTriggeredOnInput ? { text: text2, isChecked: !isChecked, userTriggered: false } : { text: text2, isChecked: !isChecked }
            );
          }
        });
      }
    }
    function cbWithDedup(target, v2) {
      const lastInputValue = lastInputValueMap.get(target);
      if (!lastInputValue || lastInputValue.text !== v2.text || lastInputValue.isChecked !== v2.isChecked) {
        lastInputValueMap.set(target, v2);
        const id = mirror2.getId(target);
        callbackWrapper(inputCb)({
          ...v2,
          id
        });
      }
    }
    const events = sampling.input === "last" ? ["change"] : ["input", "change"];
    const handlers = events.map(
      (eventName) => on(eventName, callbackWrapper(eventHandler), doc)
    );
    const currentWindow = doc.defaultView;
    if (!currentWindow) {
      return () => {
        handlers.forEach((h2) => h2());
      };
    }
    const propertyDescriptor = currentWindow.Object.getOwnPropertyDescriptor(
      currentWindow.HTMLInputElement.prototype,
      "value"
    );
    const hookProperties = [
      [currentWindow.HTMLInputElement.prototype, "value"],
      [currentWindow.HTMLInputElement.prototype, "checked"],
      [currentWindow.HTMLSelectElement.prototype, "value"],
      [currentWindow.HTMLTextAreaElement.prototype, "value"],
      // Some UI library use selectedIndex to set select value
      [currentWindow.HTMLSelectElement.prototype, "selectedIndex"],
      [currentWindow.HTMLOptionElement.prototype, "selected"]
    ];
    if (propertyDescriptor && propertyDescriptor.set) {
      handlers.push(
        ...hookProperties.map(
          (p2) => hookSetter(
            p2[0],
            p2[1],
            {
              set() {
                callbackWrapper(eventHandler)({
                  target: this,
                  isTrusted: false
                  // userTriggered to false as this could well be programmatic
                });
              }
            },
            false,
            currentWindow
          )
        )
      );
    }
    return callbackWrapper(() => {
      handlers.forEach((h2) => h2());
    });
  }
  function getNestedCSSRulePositions(rule2) {
    const positions = [];
    function recurse(childRule, pos) {
      if (hasNestedCSSRule("CSSGroupingRule") && childRule.parentRule instanceof CSSGroupingRule || hasNestedCSSRule("CSSMediaRule") && childRule.parentRule instanceof CSSMediaRule || hasNestedCSSRule("CSSSupportsRule") && childRule.parentRule instanceof CSSSupportsRule || hasNestedCSSRule("CSSConditionRule") && childRule.parentRule instanceof CSSConditionRule) {
        const rules2 = Array.from(
          childRule.parentRule.cssRules
        );
        const index2 = rules2.indexOf(childRule);
        pos.unshift(index2);
      } else if (childRule.parentStyleSheet) {
        const rules2 = Array.from(childRule.parentStyleSheet.cssRules);
        const index2 = rules2.indexOf(childRule);
        pos.unshift(index2);
      }
      return pos;
    }
    return recurse(rule2, positions);
  }
  function getIdAndStyleId(sheet, mirror2, styleMirror) {
    let id, styleId;
    if (!sheet) return {};
    if (sheet.ownerNode) id = mirror2.getId(sheet.ownerNode);
    else styleId = styleMirror.getId(sheet);
    return {
      styleId,
      id
    };
  }
  function initStyleSheetObserver({ styleSheetRuleCb, mirror: mirror2, stylesheetManager }, { win }) {
    if (!win.CSSStyleSheet || !win.CSSStyleSheet.prototype) {
      return () => {
      };
    }
    const insertRule = win.CSSStyleSheet.prototype.insertRule;
    win.CSSStyleSheet.prototype.insertRule = new Proxy(insertRule, {
      apply: callbackWrapper(
        (target, thisArg, argumentsList) => {
          const [rule2, index2] = argumentsList;
          const { id, styleId } = getIdAndStyleId(
            thisArg,
            mirror2,
            stylesheetManager.styleMirror
          );
          if (id && id !== -1 || styleId && styleId !== -1) {
            styleSheetRuleCb({
              id,
              styleId,
              adds: [{ rule: rule2, index: index2 }]
            });
          }
          return target.apply(thisArg, argumentsList);
        }
      )
    });
    win.CSSStyleSheet.prototype.addRule = function(selector, styleBlock, index2 = this.cssRules.length) {
      const rule2 = `${selector} { ${styleBlock} }`;
      return win.CSSStyleSheet.prototype.insertRule.apply(this, [rule2, index2]);
    };
    const deleteRule = win.CSSStyleSheet.prototype.deleteRule;
    win.CSSStyleSheet.prototype.deleteRule = new Proxy(deleteRule, {
      apply: callbackWrapper(
        (target, thisArg, argumentsList) => {
          const [index2] = argumentsList;
          const { id, styleId } = getIdAndStyleId(
            thisArg,
            mirror2,
            stylesheetManager.styleMirror
          );
          if (id && id !== -1 || styleId && styleId !== -1) {
            styleSheetRuleCb({
              id,
              styleId,
              removes: [{ index: index2 }]
            });
          }
          return target.apply(thisArg, argumentsList);
        }
      )
    });
    win.CSSStyleSheet.prototype.removeRule = function(index2) {
      return win.CSSStyleSheet.prototype.deleteRule.apply(this, [index2]);
    };
    let replace;
    if (win.CSSStyleSheet.prototype.replace) {
      replace = win.CSSStyleSheet.prototype.replace;
      win.CSSStyleSheet.prototype.replace = new Proxy(replace, {
        apply: callbackWrapper(
          (target, thisArg, argumentsList) => {
            const [text] = argumentsList;
            const { id, styleId } = getIdAndStyleId(
              thisArg,
              mirror2,
              stylesheetManager.styleMirror
            );
            if (id && id !== -1 || styleId && styleId !== -1) {
              styleSheetRuleCb({
                id,
                styleId,
                replace: text
              });
            }
            return target.apply(thisArg, argumentsList);
          }
        )
      });
    }
    let replaceSync;
    if (win.CSSStyleSheet.prototype.replaceSync) {
      replaceSync = win.CSSStyleSheet.prototype.replaceSync;
      win.CSSStyleSheet.prototype.replaceSync = new Proxy(replaceSync, {
        apply: callbackWrapper(
          (target, thisArg, argumentsList) => {
            const [text] = argumentsList;
            const { id, styleId } = getIdAndStyleId(
              thisArg,
              mirror2,
              stylesheetManager.styleMirror
            );
            if (id && id !== -1 || styleId && styleId !== -1) {
              styleSheetRuleCb({
                id,
                styleId,
                replaceSync: text
              });
            }
            return target.apply(thisArg, argumentsList);
          }
        )
      });
    }
    const supportedNestedCSSRuleTypes = {};
    if (canMonkeyPatchNestedCSSRule("CSSGroupingRule")) {
      supportedNestedCSSRuleTypes.CSSGroupingRule = win.CSSGroupingRule;
    } else {
      if (canMonkeyPatchNestedCSSRule("CSSMediaRule")) {
        supportedNestedCSSRuleTypes.CSSMediaRule = win.CSSMediaRule;
      }
      if (canMonkeyPatchNestedCSSRule("CSSConditionRule")) {
        supportedNestedCSSRuleTypes.CSSConditionRule = win.CSSConditionRule;
      }
      if (canMonkeyPatchNestedCSSRule("CSSSupportsRule")) {
        supportedNestedCSSRuleTypes.CSSSupportsRule = win.CSSSupportsRule;
      }
    }
    const unmodifiedFunctions = {};
    Object.entries(supportedNestedCSSRuleTypes).forEach(([typeKey, type]) => {
      unmodifiedFunctions[typeKey] = {
        // eslint-disable-next-line @typescript-eslint/unbound-method
        insertRule: type.prototype.insertRule,
        // eslint-disable-next-line @typescript-eslint/unbound-method
        deleteRule: type.prototype.deleteRule
      };
      type.prototype.insertRule = new Proxy(
        unmodifiedFunctions[typeKey].insertRule,
        {
          apply: callbackWrapper(
            (target, thisArg, argumentsList) => {
              const [rule2, index2] = argumentsList;
              const { id, styleId } = getIdAndStyleId(
                thisArg.parentStyleSheet,
                mirror2,
                stylesheetManager.styleMirror
              );
              if (id && id !== -1 || styleId && styleId !== -1) {
                styleSheetRuleCb({
                  id,
                  styleId,
                  adds: [
                    {
                      rule: rule2,
                      index: [
                        ...getNestedCSSRulePositions(thisArg),
                        index2 || 0
                        // defaults to 0
                      ]
                    }
                  ]
                });
              }
              return target.apply(thisArg, argumentsList);
            }
          )
        }
      );
      type.prototype.deleteRule = new Proxy(
        unmodifiedFunctions[typeKey].deleteRule,
        {
          apply: callbackWrapper(
            (target, thisArg, argumentsList) => {
              const [index2] = argumentsList;
              const { id, styleId } = getIdAndStyleId(
                thisArg.parentStyleSheet,
                mirror2,
                stylesheetManager.styleMirror
              );
              if (id && id !== -1 || styleId && styleId !== -1) {
                styleSheetRuleCb({
                  id,
                  styleId,
                  removes: [
                    { index: [...getNestedCSSRulePositions(thisArg), index2] }
                  ]
                });
              }
              return target.apply(thisArg, argumentsList);
            }
          )
        }
      );
    });
    return callbackWrapper(() => {
      win.CSSStyleSheet.prototype.insertRule = insertRule;
      win.CSSStyleSheet.prototype.deleteRule = deleteRule;
      replace && (win.CSSStyleSheet.prototype.replace = replace);
      replaceSync && (win.CSSStyleSheet.prototype.replaceSync = replaceSync);
      Object.entries(supportedNestedCSSRuleTypes).forEach(([typeKey, type]) => {
        type.prototype.insertRule = unmodifiedFunctions[typeKey].insertRule;
        type.prototype.deleteRule = unmodifiedFunctions[typeKey].deleteRule;
      });
    });
  }
  function initAdoptedStyleSheetObserver({
    mirror: mirror2,
    stylesheetManager
  }, host2) {
    var _a22, _b2, _c;
    let hostId = null;
    if (host2.nodeName === "#document") hostId = mirror2.getId(host2);
    else hostId = mirror2.getId(index.host(host2));
    const patchTarget = host2.nodeName === "#document" ? (_a22 = host2.defaultView) == null ? void 0 : _a22.Document : (_c = (_b2 = host2.ownerDocument) == null ? void 0 : _b2.defaultView) == null ? void 0 : _c.ShadowRoot;
    const originalPropertyDescriptor = (patchTarget == null ? void 0 : patchTarget.prototype) ? Object.getOwnPropertyDescriptor(
      patchTarget == null ? void 0 : patchTarget.prototype,
      "adoptedStyleSheets"
    ) : void 0;
    if (hostId === null || hostId === -1 || !patchTarget || !originalPropertyDescriptor)
      return () => {
      };
    Object.defineProperty(host2, "adoptedStyleSheets", {
      configurable: originalPropertyDescriptor.configurable,
      enumerable: originalPropertyDescriptor.enumerable,
      get() {
        var _a3;
        return (_a3 = originalPropertyDescriptor.get) == null ? void 0 : _a3.call(this);
      },
      set(sheets) {
        var _a3;
        const result2 = (_a3 = originalPropertyDescriptor.set) == null ? void 0 : _a3.call(this, sheets);
        if (hostId !== null && hostId !== -1) {
          try {
            stylesheetManager.adoptStyleSheets(sheets, hostId);
          } catch (e2) {
          }
        }
        return result2;
      }
    });
    return callbackWrapper(() => {
      Object.defineProperty(host2, "adoptedStyleSheets", {
        configurable: originalPropertyDescriptor.configurable,
        enumerable: originalPropertyDescriptor.enumerable,
        // eslint-disable-next-line @typescript-eslint/unbound-method
        get: originalPropertyDescriptor.get,
        // eslint-disable-next-line @typescript-eslint/unbound-method
        set: originalPropertyDescriptor.set
      });
    });
  }
  function initStyleDeclarationObserver({
    styleDeclarationCb,
    mirror: mirror2,
    ignoreCSSAttributes,
    stylesheetManager
  }, { win }) {
    const setProperty = win.CSSStyleDeclaration.prototype.setProperty;
    win.CSSStyleDeclaration.prototype.setProperty = new Proxy(setProperty, {
      apply: callbackWrapper(
        (target, thisArg, argumentsList) => {
          var _a22;
          const [property2, value, priority] = argumentsList;
          if (ignoreCSSAttributes.has(property2)) {
            return setProperty.apply(thisArg, [property2, value, priority]);
          }
          const { id, styleId } = getIdAndStyleId(
            (_a22 = thisArg.parentRule) == null ? void 0 : _a22.parentStyleSheet,
            mirror2,
            stylesheetManager.styleMirror
          );
          if (id && id !== -1 || styleId && styleId !== -1) {
            styleDeclarationCb({
              id,
              styleId,
              set: {
                property: property2,
                value,
                priority
              },
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              index: getNestedCSSRulePositions(thisArg.parentRule)
            });
          }
          return target.apply(thisArg, argumentsList);
        }
      )
    });
    const removeProperty = win.CSSStyleDeclaration.prototype.removeProperty;
    win.CSSStyleDeclaration.prototype.removeProperty = new Proxy(removeProperty, {
      apply: callbackWrapper(
        (target, thisArg, argumentsList) => {
          var _a22;
          const [property2] = argumentsList;
          if (ignoreCSSAttributes.has(property2)) {
            return removeProperty.apply(thisArg, [property2]);
          }
          const { id, styleId } = getIdAndStyleId(
            (_a22 = thisArg.parentRule) == null ? void 0 : _a22.parentStyleSheet,
            mirror2,
            stylesheetManager.styleMirror
          );
          if (id && id !== -1 || styleId && styleId !== -1) {
            styleDeclarationCb({
              id,
              styleId,
              remove: {
                property: property2
              },
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              index: getNestedCSSRulePositions(thisArg.parentRule)
            });
          }
          return target.apply(thisArg, argumentsList);
        }
      )
    });
    return callbackWrapper(() => {
      win.CSSStyleDeclaration.prototype.setProperty = setProperty;
      win.CSSStyleDeclaration.prototype.removeProperty = removeProperty;
    });
  }
  function initMediaInteractionObserver({
    mediaInteractionCb,
    blockClass,
    blockSelector,
    mirror: mirror2,
    sampling,
    doc
  }) {
    const handler = callbackWrapper(
      (type) => throttle(
        callbackWrapper((event) => {
          const target = getEventTarget(event);
          if (!target || isBlocked(target, blockClass, blockSelector, true)) {
            return;
          }
          const { currentTime, volume, muted, playbackRate, loop } = target;
          mediaInteractionCb({
            type,
            id: mirror2.getId(target),
            currentTime,
            volume,
            muted,
            playbackRate,
            loop
          });
        }),
        sampling.media || 500
      )
    );
    const handlers = [
      on("play", handler(MediaInteractions.Play), doc),
      on("pause", handler(MediaInteractions.Pause), doc),
      on("seeked", handler(MediaInteractions.Seeked), doc),
      on("volumechange", handler(MediaInteractions.VolumeChange), doc),
      on("ratechange", handler(MediaInteractions.RateChange), doc)
    ];
    return callbackWrapper(() => {
      handlers.forEach((h2) => h2());
    });
  }
  function initFontObserver({ fontCb, doc }) {
    const win = doc.defaultView;
    if (!win) {
      return () => {
      };
    }
    const handlers = [];
    const fontMap = /* @__PURE__ */ new WeakMap();
    const originalFontFace = win.FontFace;
    win.FontFace = function FontFace2(family, source, descriptors) {
      const fontFace = new originalFontFace(family, source, descriptors);
      fontMap.set(fontFace, {
        family,
        buffer: typeof source !== "string",
        descriptors,
        fontSource: typeof source === "string" ? source : JSON.stringify(Array.from(new Uint8Array(source)))
      });
      return fontFace;
    };
    const restoreHandler = patch(
      doc.fonts,
      "add",
      function(original) {
        return function(fontFace) {
          setTimeout(
            callbackWrapper(() => {
              const p2 = fontMap.get(fontFace);
              if (p2) {
                fontCb(p2);
                fontMap.delete(fontFace);
              }
            }),
            0
          );
          return original.apply(this, [fontFace]);
        };
      }
    );
    handlers.push(() => {
      win.FontFace = originalFontFace;
    });
    handlers.push(restoreHandler);
    return callbackWrapper(() => {
      handlers.forEach((h2) => h2());
    });
  }
  function initSelectionObserver(param) {
    const { doc, mirror: mirror2, blockClass, blockSelector, selectionCb } = param;
    let collapsed = true;
    const updateSelection = callbackWrapper(() => {
      const selection = doc.getSelection();
      if (!selection || collapsed && (selection == null ? void 0 : selection.isCollapsed)) return;
      collapsed = selection.isCollapsed || false;
      const ranges = [];
      const count = selection.rangeCount || 0;
      for (let i2 = 0; i2 < count; i2++) {
        const range = selection.getRangeAt(i2);
        const { startContainer, startOffset, endContainer, endOffset } = range;
        const blocked = isBlocked(startContainer, blockClass, blockSelector, true) || isBlocked(endContainer, blockClass, blockSelector, true);
        if (blocked) continue;
        ranges.push({
          start: mirror2.getId(startContainer),
          startOffset,
          end: mirror2.getId(endContainer),
          endOffset
        });
      }
      selectionCb({ ranges });
    });
    updateSelection();
    return on("selectionchange", updateSelection);
  }
  function initCustomElementObserver({
    doc,
    customElementCb
  }) {
    const win = doc.defaultView;
    if (!win || !win.customElements) return () => {
    };
    const restoreHandler = patch(
      win.customElements,
      "define",
      function(original) {
        return function(name, constructor, options2) {
          try {
            customElementCb({
              define: {
                name
              }
            });
          } catch (e2) {
            console.warn(`Custom element callback failed for ${name}`);
          }
          return original.apply(this, [name, constructor, options2]);
        };
      }
    );
    return restoreHandler;
  }
  function mergeHooks(o2, hooks) {
    const {
      mutationCb,
      mousemoveCb,
      mouseInteractionCb,
      scrollCb,
      viewportResizeCb,
      inputCb,
      mediaInteractionCb,
      styleSheetRuleCb,
      styleDeclarationCb,
      canvasMutationCb,
      fontCb,
      selectionCb,
      customElementCb
    } = o2;
    o2.mutationCb = (...p2) => {
      if (hooks.mutation) {
        hooks.mutation(...p2);
      }
      mutationCb(...p2);
    };
    o2.mousemoveCb = (...p2) => {
      if (hooks.mousemove) {
        hooks.mousemove(...p2);
      }
      mousemoveCb(...p2);
    };
    o2.mouseInteractionCb = (...p2) => {
      if (hooks.mouseInteraction) {
        hooks.mouseInteraction(...p2);
      }
      mouseInteractionCb(...p2);
    };
    o2.scrollCb = (...p2) => {
      if (hooks.scroll) {
        hooks.scroll(...p2);
      }
      scrollCb(...p2);
    };
    o2.viewportResizeCb = (...p2) => {
      if (hooks.viewportResize) {
        hooks.viewportResize(...p2);
      }
      viewportResizeCb(...p2);
    };
    o2.inputCb = (...p2) => {
      if (hooks.input) {
        hooks.input(...p2);
      }
      inputCb(...p2);
    };
    o2.mediaInteractionCb = (...p2) => {
      if (hooks.mediaInteaction) {
        hooks.mediaInteaction(...p2);
      }
      mediaInteractionCb(...p2);
    };
    o2.styleSheetRuleCb = (...p2) => {
      if (hooks.styleSheetRule) {
        hooks.styleSheetRule(...p2);
      }
      styleSheetRuleCb(...p2);
    };
    o2.styleDeclarationCb = (...p2) => {
      if (hooks.styleDeclaration) {
        hooks.styleDeclaration(...p2);
      }
      styleDeclarationCb(...p2);
    };
    o2.canvasMutationCb = (...p2) => {
      if (hooks.canvasMutation) {
        hooks.canvasMutation(...p2);
      }
      canvasMutationCb(...p2);
    };
    o2.fontCb = (...p2) => {
      if (hooks.font) {
        hooks.font(...p2);
      }
      fontCb(...p2);
    };
    o2.selectionCb = (...p2) => {
      if (hooks.selection) {
        hooks.selection(...p2);
      }
      selectionCb(...p2);
    };
    o2.customElementCb = (...c2) => {
      if (hooks.customElement) {
        hooks.customElement(...c2);
      }
      customElementCb(...c2);
    };
  }
  function initObservers(o2, hooks = {}) {
    const currentWindow = o2.doc.defaultView;
    if (!currentWindow) {
      return () => {
      };
    }
    mergeHooks(o2, hooks);
    let mutationObserver;
    if (o2.recordDOM) {
      mutationObserver = initMutationObserver(o2, o2.doc);
    }
    const mousemoveHandler = initMoveObserver(o2);
    const mouseInteractionHandler = initMouseInteractionObserver(o2);
    const scrollHandler = initScrollObserver(o2);
    const viewportResizeHandler = initViewportResizeObserver(o2, {
      win: currentWindow
    });
    const inputHandler = initInputObserver(o2);
    const mediaInteractionHandler = initMediaInteractionObserver(o2);
    let styleSheetObserver = () => {
    };
    let adoptedStyleSheetObserver = () => {
    };
    let styleDeclarationObserver = () => {
    };
    let fontObserver = () => {
    };
    if (o2.recordDOM) {
      styleSheetObserver = initStyleSheetObserver(o2, { win: currentWindow });
      adoptedStyleSheetObserver = initAdoptedStyleSheetObserver(o2, o2.doc);
      styleDeclarationObserver = initStyleDeclarationObserver(o2, {
        win: currentWindow
      });
      if (o2.collectFonts) {
        fontObserver = initFontObserver(o2);
      }
    }
    const selectionObserver = initSelectionObserver(o2);
    const customElementObserver = initCustomElementObserver(o2);
    const pluginHandlers = [];
    for (const plugin3 of o2.plugins) {
      pluginHandlers.push(
        plugin3.observer(plugin3.callback, currentWindow, plugin3.options)
      );
    }
    return callbackWrapper(() => {
      mutationBuffers.forEach((b2) => b2.reset());
      mutationObserver == null ? void 0 : mutationObserver.disconnect();
      mousemoveHandler();
      mouseInteractionHandler();
      scrollHandler();
      viewportResizeHandler();
      inputHandler();
      mediaInteractionHandler();
      styleSheetObserver();
      adoptedStyleSheetObserver();
      styleDeclarationObserver();
      fontObserver();
      selectionObserver();
      customElementObserver();
      pluginHandlers.forEach((h2) => h2());
    });
  }
  function hasNestedCSSRule(prop) {
    return typeof window[prop] !== "undefined";
  }
  function canMonkeyPatchNestedCSSRule(prop) {
    return Boolean(
      typeof window[prop] !== "undefined" && // Note: Generally, this check _shouldn't_ be necessary
      // However, in some scenarios (e.g. jsdom) this can sometimes fail, so we check for it here
      window[prop].prototype && "insertRule" in window[prop].prototype && "deleteRule" in window[prop].prototype
    );
  }
  class CrossOriginIframeMirror {
    constructor(generateIdFn) {
      __publicField2(this, "iframeIdToRemoteIdMap", /* @__PURE__ */ new WeakMap());
      __publicField2(this, "iframeRemoteIdToIdMap", /* @__PURE__ */ new WeakMap());
      this.generateIdFn = generateIdFn;
    }
    getId(iframe, remoteId, idToRemoteMap, remoteToIdMap) {
      const idToRemoteIdMap = idToRemoteMap || this.getIdToRemoteIdMap(iframe);
      const remoteIdToIdMap = remoteToIdMap || this.getRemoteIdToIdMap(iframe);
      let id = idToRemoteIdMap.get(remoteId);
      if (!id) {
        id = this.generateIdFn();
        idToRemoteIdMap.set(remoteId, id);
        remoteIdToIdMap.set(id, remoteId);
      }
      return id;
    }
    getIds(iframe, remoteId) {
      const idToRemoteIdMap = this.getIdToRemoteIdMap(iframe);
      const remoteIdToIdMap = this.getRemoteIdToIdMap(iframe);
      return remoteId.map(
        (id) => this.getId(iframe, id, idToRemoteIdMap, remoteIdToIdMap)
      );
    }
    getRemoteId(iframe, id, map) {
      const remoteIdToIdMap = map || this.getRemoteIdToIdMap(iframe);
      if (typeof id !== "number") return id;
      const remoteId = remoteIdToIdMap.get(id);
      if (!remoteId) return -1;
      return remoteId;
    }
    getRemoteIds(iframe, ids) {
      const remoteIdToIdMap = this.getRemoteIdToIdMap(iframe);
      return ids.map((id) => this.getRemoteId(iframe, id, remoteIdToIdMap));
    }
    reset(iframe) {
      if (!iframe) {
        this.iframeIdToRemoteIdMap = /* @__PURE__ */ new WeakMap();
        this.iframeRemoteIdToIdMap = /* @__PURE__ */ new WeakMap();
        return;
      }
      this.iframeIdToRemoteIdMap.delete(iframe);
      this.iframeRemoteIdToIdMap.delete(iframe);
    }
    getIdToRemoteIdMap(iframe) {
      let idToRemoteIdMap = this.iframeIdToRemoteIdMap.get(iframe);
      if (!idToRemoteIdMap) {
        idToRemoteIdMap = /* @__PURE__ */ new Map();
        this.iframeIdToRemoteIdMap.set(iframe, idToRemoteIdMap);
      }
      return idToRemoteIdMap;
    }
    getRemoteIdToIdMap(iframe) {
      let remoteIdToIdMap = this.iframeRemoteIdToIdMap.get(iframe);
      if (!remoteIdToIdMap) {
        remoteIdToIdMap = /* @__PURE__ */ new Map();
        this.iframeRemoteIdToIdMap.set(iframe, remoteIdToIdMap);
      }
      return remoteIdToIdMap;
    }
  }
  class IframeManager {
    constructor(options2) {
      __publicField2(this, "iframes", /* @__PURE__ */ new WeakMap());
      __publicField2(this, "crossOriginIframeMap", /* @__PURE__ */ new WeakMap());
      __publicField2(this, "crossOriginIframeMirror", new CrossOriginIframeMirror(genId));
      __publicField2(this, "crossOriginIframeStyleMirror");
      __publicField2(this, "crossOriginIframeRootIdMap", /* @__PURE__ */ new WeakMap());
      __publicField2(this, "mirror");
      __publicField2(this, "mutationCb");
      __publicField2(this, "wrappedEmit");
      __publicField2(this, "loadListener");
      __publicField2(this, "stylesheetManager");
      __publicField2(this, "recordCrossOriginIframes");
      this.mutationCb = options2.mutationCb;
      this.wrappedEmit = options2.wrappedEmit;
      this.stylesheetManager = options2.stylesheetManager;
      this.recordCrossOriginIframes = options2.recordCrossOriginIframes;
      this.crossOriginIframeStyleMirror = new CrossOriginIframeMirror(
        this.stylesheetManager.styleMirror.generateId.bind(
          this.stylesheetManager.styleMirror
        )
      );
      this.mirror = options2.mirror;
      if (this.recordCrossOriginIframes) {
        window.addEventListener("message", this.handleMessage.bind(this));
      }
    }
    addIframe(iframeEl) {
      this.iframes.set(iframeEl, true);
      if (iframeEl.contentWindow)
        this.crossOriginIframeMap.set(iframeEl.contentWindow, iframeEl);
    }
    addLoadListener(cb) {
      this.loadListener = cb;
    }
    attachIframe(iframeEl, childSn) {
      var _a22, _b2;
      this.mutationCb({
        adds: [
          {
            parentId: this.mirror.getId(iframeEl),
            nextId: null,
            node: childSn
          }
        ],
        removes: [],
        texts: [],
        attributes: [],
        isAttachIframe: true
      });
      if (this.recordCrossOriginIframes)
        (_a22 = iframeEl.contentWindow) == null ? void 0 : _a22.addEventListener(
          "message",
          this.handleMessage.bind(this)
        );
      (_b2 = this.loadListener) == null ? void 0 : _b2.call(this, iframeEl);
      if (iframeEl.contentDocument && iframeEl.contentDocument.adoptedStyleSheets && iframeEl.contentDocument.adoptedStyleSheets.length > 0)
        this.stylesheetManager.adoptStyleSheets(
          iframeEl.contentDocument.adoptedStyleSheets,
          this.mirror.getId(iframeEl.contentDocument)
        );
    }
    handleMessage(message) {
      const crossOriginMessageEvent = message;
      if (crossOriginMessageEvent.data.type !== "rrweb" || // To filter out the rrweb messages which are forwarded by some sites.
      crossOriginMessageEvent.origin !== crossOriginMessageEvent.data.origin)
        return;
      const iframeSourceWindow = message.source;
      if (!iframeSourceWindow) return;
      const iframeEl = this.crossOriginIframeMap.get(message.source);
      if (!iframeEl) return;
      const transformedEvent = this.transformCrossOriginEvent(
        iframeEl,
        crossOriginMessageEvent.data.event
      );
      if (transformedEvent)
        this.wrappedEmit(
          transformedEvent,
          crossOriginMessageEvent.data.isCheckout
        );
    }
    transformCrossOriginEvent(iframeEl, e2) {
      var _a22;
      switch (e2.type) {
        case EventType.FullSnapshot: {
          this.crossOriginIframeMirror.reset(iframeEl);
          this.crossOriginIframeStyleMirror.reset(iframeEl);
          this.replaceIdOnNode(e2.data.node, iframeEl);
          const rootId = e2.data.node.id;
          this.crossOriginIframeRootIdMap.set(iframeEl, rootId);
          this.patchRootIdOnNode(e2.data.node, rootId);
          return {
            timestamp: e2.timestamp,
            type: EventType.IncrementalSnapshot,
            data: {
              source: IncrementalSource.Mutation,
              adds: [
                {
                  parentId: this.mirror.getId(iframeEl),
                  nextId: null,
                  node: e2.data.node
                }
              ],
              removes: [],
              texts: [],
              attributes: [],
              isAttachIframe: true
            }
          };
        }
        case EventType.Meta:
        case EventType.Load:
        case EventType.DomContentLoaded: {
          return false;
        }
        case EventType.Plugin: {
          return e2;
        }
        case EventType.Custom: {
          this.replaceIds(
            e2.data.payload,
            iframeEl,
            ["id", "parentId", "previousId", "nextId"]
          );
          return e2;
        }
        case EventType.IncrementalSnapshot: {
          switch (e2.data.source) {
            case IncrementalSource.Mutation: {
              e2.data.adds.forEach((n2) => {
                this.replaceIds(n2, iframeEl, [
                  "parentId",
                  "nextId",
                  "previousId"
                ]);
                this.replaceIdOnNode(n2.node, iframeEl);
                const rootId = this.crossOriginIframeRootIdMap.get(iframeEl);
                rootId && this.patchRootIdOnNode(n2.node, rootId);
              });
              e2.data.removes.forEach((n2) => {
                this.replaceIds(n2, iframeEl, ["parentId", "id"]);
              });
              e2.data.attributes.forEach((n2) => {
                this.replaceIds(n2, iframeEl, ["id"]);
              });
              e2.data.texts.forEach((n2) => {
                this.replaceIds(n2, iframeEl, ["id"]);
              });
              return e2;
            }
            case IncrementalSource.Drag:
            case IncrementalSource.TouchMove:
            case IncrementalSource.MouseMove: {
              e2.data.positions.forEach((p2) => {
                this.replaceIds(p2, iframeEl, ["id"]);
              });
              return e2;
            }
            case IncrementalSource.ViewportResize: {
              return false;
            }
            case IncrementalSource.MediaInteraction:
            case IncrementalSource.MouseInteraction:
            case IncrementalSource.Scroll:
            case IncrementalSource.CanvasMutation:
            case IncrementalSource.Input: {
              this.replaceIds(e2.data, iframeEl, ["id"]);
              return e2;
            }
            case IncrementalSource.StyleSheetRule:
            case IncrementalSource.StyleDeclaration: {
              this.replaceIds(e2.data, iframeEl, ["id"]);
              this.replaceStyleIds(e2.data, iframeEl, ["styleId"]);
              return e2;
            }
            case IncrementalSource.Font: {
              return e2;
            }
            case IncrementalSource.Selection: {
              e2.data.ranges.forEach((range) => {
                this.replaceIds(range, iframeEl, ["start", "end"]);
              });
              return e2;
            }
            case IncrementalSource.AdoptedStyleSheet: {
              this.replaceIds(e2.data, iframeEl, ["id"]);
              this.replaceStyleIds(e2.data, iframeEl, ["styleIds"]);
              (_a22 = e2.data.styles) == null ? void 0 : _a22.forEach((style) => {
                this.replaceStyleIds(style, iframeEl, ["styleId"]);
              });
              return e2;
            }
          }
        }
      }
      return false;
    }
    replace(iframeMirror, obj, iframeEl, keys2) {
      for (const key of keys2) {
        if (!Array.isArray(obj[key]) && typeof obj[key] !== "number") continue;
        if (Array.isArray(obj[key])) {
          obj[key] = iframeMirror.getIds(
            iframeEl,
            obj[key]
          );
        } else {
          obj[key] = iframeMirror.getId(iframeEl, obj[key]);
        }
      }
      return obj;
    }
    replaceIds(obj, iframeEl, keys2) {
      return this.replace(this.crossOriginIframeMirror, obj, iframeEl, keys2);
    }
    replaceStyleIds(obj, iframeEl, keys2) {
      return this.replace(this.crossOriginIframeStyleMirror, obj, iframeEl, keys2);
    }
    replaceIdOnNode(node2, iframeEl) {
      this.replaceIds(node2, iframeEl, ["id", "rootId"]);
      if ("childNodes" in node2) {
        node2.childNodes.forEach((child) => {
          this.replaceIdOnNode(child, iframeEl);
        });
      }
    }
    patchRootIdOnNode(node2, rootId) {
      if (node2.type !== NodeType$2.Document && !node2.rootId) node2.rootId = rootId;
      if ("childNodes" in node2) {
        node2.childNodes.forEach((child) => {
          this.patchRootIdOnNode(child, rootId);
        });
      }
    }
  }
  class ShadowDomManager {
    constructor(options2) {
      __publicField2(this, "shadowDoms", /* @__PURE__ */ new WeakSet());
      __publicField2(this, "mutationCb");
      __publicField2(this, "scrollCb");
      __publicField2(this, "bypassOptions");
      __publicField2(this, "mirror");
      __publicField2(this, "restoreHandlers", []);
      this.mutationCb = options2.mutationCb;
      this.scrollCb = options2.scrollCb;
      this.bypassOptions = options2.bypassOptions;
      this.mirror = options2.mirror;
      this.init();
    }
    init() {
      this.reset();
      this.patchAttachShadow(Element, document);
    }
    addShadowRoot(shadowRoot2, doc) {
      if (!isNativeShadowDom(shadowRoot2)) return;
      if (this.shadowDoms.has(shadowRoot2)) return;
      this.shadowDoms.add(shadowRoot2);
      const observer2 = initMutationObserver(
        {
          ...this.bypassOptions,
          doc,
          mutationCb: this.mutationCb,
          mirror: this.mirror,
          shadowDomManager: this
        },
        shadowRoot2
      );
      this.restoreHandlers.push(() => observer2.disconnect());
      this.restoreHandlers.push(
        initScrollObserver({
          ...this.bypassOptions,
          scrollCb: this.scrollCb,
          // https://gist.github.com/praveenpuglia/0832da687ed5a5d7a0907046c9ef1813
          // scroll is not allowed to pass the boundary, so we need to listen the shadow document
          doc: shadowRoot2,
          mirror: this.mirror
        })
      );
      setTimeout(() => {
        if (shadowRoot2.adoptedStyleSheets && shadowRoot2.adoptedStyleSheets.length > 0)
          this.bypassOptions.stylesheetManager.adoptStyleSheets(
            shadowRoot2.adoptedStyleSheets,
            this.mirror.getId(index.host(shadowRoot2))
          );
        this.restoreHandlers.push(
          initAdoptedStyleSheetObserver(
            {
              mirror: this.mirror,
              stylesheetManager: this.bypassOptions.stylesheetManager
            },
            shadowRoot2
          )
        );
      }, 0);
    }
    /**
     * Monkey patch 'attachShadow' of an IFrameElement to observe newly added shadow doms.
     */
    observeAttachShadow(iframeElement) {
      if (!iframeElement.contentWindow || !iframeElement.contentDocument) return;
      this.patchAttachShadow(
        iframeElement.contentWindow.Element,
        iframeElement.contentDocument
      );
    }
    /**
     * Patch 'attachShadow' to observe newly added shadow doms.
     */
    patchAttachShadow(element, doc) {
      const manager = this;
      this.restoreHandlers.push(
        patch(
          element.prototype,
          "attachShadow",
          function(original) {
            return function(option) {
              const sRoot = original.call(this, option);
              const shadowRootEl = index.shadowRoot(this);
              if (shadowRootEl && inDom(this))
                manager.addShadowRoot(shadowRootEl, doc);
              return sRoot;
            };
          }
        )
      );
    }
    reset() {
      this.restoreHandlers.forEach((handler) => {
        try {
          handler();
        } catch (e2) {
        }
      });
      this.restoreHandlers = [];
      this.shadowDoms = /* @__PURE__ */ new WeakSet();
    }
  }
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var lookup = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
  for (var i$1 = 0; i$1 < chars.length; i$1++) {
    lookup[chars.charCodeAt(i$1)] = i$1;
  }
  var encode = function(arraybuffer) {
    var bytes = new Uint8Array(arraybuffer), i2, len = bytes.length, base64 = "";
    for (i2 = 0; i2 < len; i2 += 3) {
      base64 += chars[bytes[i2] >> 2];
      base64 += chars[(bytes[i2] & 3) << 4 | bytes[i2 + 1] >> 4];
      base64 += chars[(bytes[i2 + 1] & 15) << 2 | bytes[i2 + 2] >> 6];
      base64 += chars[bytes[i2 + 2] & 63];
    }
    if (len % 3 === 2) {
      base64 = base64.substring(0, base64.length - 1) + "=";
    } else if (len % 3 === 1) {
      base64 = base64.substring(0, base64.length - 2) + "==";
    }
    return base64;
  };
  const canvasVarMap = /* @__PURE__ */ new Map();
  function variableListFor$1(ctx, ctor) {
    let contextMap = canvasVarMap.get(ctx);
    if (!contextMap) {
      contextMap = /* @__PURE__ */ new Map();
      canvasVarMap.set(ctx, contextMap);
    }
    if (!contextMap.has(ctor)) {
      contextMap.set(ctor, []);
    }
    return contextMap.get(ctor);
  }
  const saveWebGLVar = (value, win, ctx) => {
    if (!value || !(isInstanceOfWebGLObject(value, win) || typeof value === "object"))
      return;
    const name = value.constructor.name;
    const list2 = variableListFor$1(ctx, name);
    let index2 = list2.indexOf(value);
    if (index2 === -1) {
      index2 = list2.length;
      list2.push(value);
    }
    return index2;
  };
  function serializeArg(value, win, ctx) {
    if (value instanceof Array) {
      return value.map((arg) => serializeArg(arg, win, ctx));
    } else if (value === null) {
      return value;
    } else if (value instanceof Float32Array || value instanceof Float64Array || value instanceof Int32Array || value instanceof Uint32Array || value instanceof Uint8Array || value instanceof Uint16Array || value instanceof Int16Array || value instanceof Int8Array || value instanceof Uint8ClampedArray) {
      const name = value.constructor.name;
      return {
        rr_type: name,
        args: [Object.values(value)]
      };
    } else if (
      // SharedArrayBuffer disabled on most browsers due to spectre.
      // More info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/SharedArrayBuffer
      // value instanceof SharedArrayBuffer ||
      value instanceof ArrayBuffer
    ) {
      const name = value.constructor.name;
      const base64 = encode(value);
      return {
        rr_type: name,
        base64
      };
    } else if (value instanceof DataView) {
      const name = value.constructor.name;
      return {
        rr_type: name,
        args: [
          serializeArg(value.buffer, win, ctx),
          value.byteOffset,
          value.byteLength
        ]
      };
    } else if (value instanceof HTMLImageElement) {
      const name = value.constructor.name;
      const { src } = value;
      return {
        rr_type: name,
        src
      };
    } else if (value instanceof HTMLCanvasElement) {
      const name = "HTMLImageElement";
      const src = value.toDataURL();
      return {
        rr_type: name,
        src
      };
    } else if (value instanceof ImageData) {
      const name = value.constructor.name;
      return {
        rr_type: name,
        args: [serializeArg(value.data, win, ctx), value.width, value.height]
      };
    } else if (isInstanceOfWebGLObject(value, win) || typeof value === "object") {
      const name = value.constructor.name;
      const index2 = saveWebGLVar(value, win, ctx);
      return {
        rr_type: name,
        index: index2
      };
    }
    return value;
  }
  const serializeArgs = (args, win, ctx) => {
    return args.map((arg) => serializeArg(arg, win, ctx));
  };
  const isInstanceOfWebGLObject = (value, win) => {
    const webGLConstructorNames = [
      "WebGLActiveInfo",
      "WebGLBuffer",
      "WebGLFramebuffer",
      "WebGLProgram",
      "WebGLRenderbuffer",
      "WebGLShader",
      "WebGLShaderPrecisionFormat",
      "WebGLTexture",
      "WebGLUniformLocation",
      "WebGLVertexArrayObject",
      // In old Chrome versions, value won't be an instanceof WebGLVertexArrayObject.
      "WebGLVertexArrayObjectOES"
    ];
    const supportedWebGLConstructorNames = webGLConstructorNames.filter(
      (name) => typeof win[name] === "function"
    );
    return Boolean(
      supportedWebGLConstructorNames.find(
        (name) => value instanceof win[name]
      )
    );
  };
  function initCanvas2DMutationObserver(cb, win, blockClass, blockSelector) {
    const handlers = [];
    const props2D = Object.getOwnPropertyNames(
      win.CanvasRenderingContext2D.prototype
    );
    for (const prop of props2D) {
      try {
        if (typeof win.CanvasRenderingContext2D.prototype[prop] !== "function") {
          continue;
        }
        const restoreHandler = patch(
          win.CanvasRenderingContext2D.prototype,
          prop,
          function(original) {
            return function(...args) {
              if (!isBlocked(this.canvas, blockClass, blockSelector, true)) {
                setTimeout(() => {
                  const recordArgs = serializeArgs(args, win, this);
                  cb(this.canvas, {
                    type: CanvasContext["2D"],
                    property: prop,
                    args: recordArgs
                  });
                }, 0);
              }
              return original.apply(this, args);
            };
          }
        );
        handlers.push(restoreHandler);
      } catch {
        const hookHandler = hookSetter(
          win.CanvasRenderingContext2D.prototype,
          prop,
          {
            set(v2) {
              cb(this.canvas, {
                type: CanvasContext["2D"],
                property: prop,
                args: [v2],
                setter: true
              });
            }
          }
        );
        handlers.push(hookHandler);
      }
    }
    return () => {
      handlers.forEach((h2) => h2());
    };
  }
  function getNormalizedContextName(contextType) {
    return contextType === "experimental-webgl" ? "webgl" : contextType;
  }
  function initCanvasContextObserver(win, blockClass, blockSelector, setPreserveDrawingBufferToTrue) {
    const handlers = [];
    try {
      const restoreHandler = patch(
        win.HTMLCanvasElement.prototype,
        "getContext",
        function(original) {
          return function(contextType, ...args) {
            if (!isBlocked(this, blockClass, blockSelector, true)) {
              const ctxName = getNormalizedContextName(contextType);
              if (!("__context" in this)) this.__context = ctxName;
              if (setPreserveDrawingBufferToTrue && ["webgl", "webgl2"].includes(ctxName)) {
                if (args[0] && typeof args[0] === "object") {
                  const contextAttributes = args[0];
                  if (!contextAttributes.preserveDrawingBuffer) {
                    contextAttributes.preserveDrawingBuffer = true;
                  }
                } else {
                  args.splice(0, 1, {
                    preserveDrawingBuffer: true
                  });
                }
              }
            }
            return original.apply(this, [contextType, ...args]);
          };
        }
      );
      handlers.push(restoreHandler);
    } catch {
      console.error("failed to patch HTMLCanvasElement.prototype.getContext");
    }
    return () => {
      handlers.forEach((h2) => h2());
    };
  }
  function patchGLPrototype(prototype, type, cb, blockClass, blockSelector, win) {
    const handlers = [];
    const props = Object.getOwnPropertyNames(prototype);
    for (const prop of props) {
      if (
        //prop.startsWith('get') ||  // e.g. getProgramParameter, but too risky
        [
          "isContextLost",
          "canvas",
          "drawingBufferWidth",
          "drawingBufferHeight"
        ].includes(prop)
      ) {
        continue;
      }
      try {
        if (typeof prototype[prop] !== "function") {
          continue;
        }
        const restoreHandler = patch(
          prototype,
          prop,
          function(original) {
            return function(...args) {
              const result2 = original.apply(this, args);
              saveWebGLVar(result2, win, this);
              if ("tagName" in this.canvas && !isBlocked(this.canvas, blockClass, blockSelector, true)) {
                const recordArgs = serializeArgs(args, win, this);
                const mutation = {
                  type,
                  property: prop,
                  args: recordArgs
                };
                cb(this.canvas, mutation);
              }
              return result2;
            };
          }
        );
        handlers.push(restoreHandler);
      } catch {
        const hookHandler = hookSetter(prototype, prop, {
          set(v2) {
            cb(this.canvas, {
              type,
              property: prop,
              args: [v2],
              setter: true
            });
          }
        });
        handlers.push(hookHandler);
      }
    }
    return handlers;
  }
  function initCanvasWebGLMutationObserver(cb, win, blockClass, blockSelector) {
    const handlers = [];
    handlers.push(
      ...patchGLPrototype(
        win.WebGLRenderingContext.prototype,
        CanvasContext.WebGL,
        cb,
        blockClass,
        blockSelector,
        win
      )
    );
    if (typeof win.WebGL2RenderingContext !== "undefined") {
      handlers.push(
        ...patchGLPrototype(
          win.WebGL2RenderingContext.prototype,
          CanvasContext.WebGL2,
          cb,
          blockClass,
          blockSelector,
          win
        )
      );
    }
    return () => {
      handlers.forEach((h2) => h2());
    };
  }
  const encodedJs = "KGZ1bmN0aW9uKCkgewogICJ1c2Ugc3RyaWN0IjsKICB2YXIgY2hhcnMgPSAiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLyI7CiAgdmFyIGxvb2t1cCA9IHR5cGVvZiBVaW50OEFycmF5ID09PSAidW5kZWZpbmVkIiA/IFtdIDogbmV3IFVpbnQ4QXJyYXkoMjU2KTsKICBmb3IgKHZhciBpID0gMDsgaSA8IGNoYXJzLmxlbmd0aDsgaSsrKSB7CiAgICBsb29rdXBbY2hhcnMuY2hhckNvZGVBdChpKV0gPSBpOwogIH0KICB2YXIgZW5jb2RlID0gZnVuY3Rpb24oYXJyYXlidWZmZXIpIHsKICAgIHZhciBieXRlcyA9IG5ldyBVaW50OEFycmF5KGFycmF5YnVmZmVyKSwgaTIsIGxlbiA9IGJ5dGVzLmxlbmd0aCwgYmFzZTY0ID0gIiI7CiAgICBmb3IgKGkyID0gMDsgaTIgPCBsZW47IGkyICs9IDMpIHsKICAgICAgYmFzZTY0ICs9IGNoYXJzW2J5dGVzW2kyXSA+PiAyXTsKICAgICAgYmFzZTY0ICs9IGNoYXJzWyhieXRlc1tpMl0gJiAzKSA8PCA0IHwgYnl0ZXNbaTIgKyAxXSA+PiA0XTsKICAgICAgYmFzZTY0ICs9IGNoYXJzWyhieXRlc1tpMiArIDFdICYgMTUpIDw8IDIgfCBieXRlc1tpMiArIDJdID4+IDZdOwogICAgICBiYXNlNjQgKz0gY2hhcnNbYnl0ZXNbaTIgKyAyXSAmIDYzXTsKICAgIH0KICAgIGlmIChsZW4gJSAzID09PSAyKSB7CiAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDEpICsgIj0iOwogICAgfSBlbHNlIGlmIChsZW4gJSAzID09PSAxKSB7CiAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDIpICsgIj09IjsKICAgIH0KICAgIHJldHVybiBiYXNlNjQ7CiAgfTsKICBjb25zdCBsYXN0QmxvYk1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7CiAgY29uc3QgdHJhbnNwYXJlbnRCbG9iTWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTsKICBhc3luYyBmdW5jdGlvbiBnZXRUcmFuc3BhcmVudEJsb2JGb3Iod2lkdGgsIGhlaWdodCwgZGF0YVVSTE9wdGlvbnMpIHsKICAgIGNvbnN0IGlkID0gYCR7d2lkdGh9LSR7aGVpZ2h0fWA7CiAgICBpZiAoIk9mZnNjcmVlbkNhbnZhcyIgaW4gZ2xvYmFsVGhpcykgewogICAgICBpZiAodHJhbnNwYXJlbnRCbG9iTWFwLmhhcyhpZCkpIHJldHVybiB0cmFuc3BhcmVudEJsb2JNYXAuZ2V0KGlkKTsKICAgICAgY29uc3Qgb2Zmc2NyZWVuID0gbmV3IE9mZnNjcmVlbkNhbnZhcyh3aWR0aCwgaGVpZ2h0KTsKICAgICAgb2Zmc2NyZWVuLmdldENvbnRleHQoIjJkIik7CiAgICAgIGNvbnN0IGJsb2IgPSBhd2FpdCBvZmZzY3JlZW4uY29udmVydFRvQmxvYihkYXRhVVJMT3B0aW9ucyk7CiAgICAgIGNvbnN0IGFycmF5QnVmZmVyID0gYXdhaXQgYmxvYi5hcnJheUJ1ZmZlcigpOwogICAgICBjb25zdCBiYXNlNjQgPSBlbmNvZGUoYXJyYXlCdWZmZXIpOwogICAgICB0cmFuc3BhcmVudEJsb2JNYXAuc2V0KGlkLCBiYXNlNjQpOwogICAgICByZXR1cm4gYmFzZTY0OwogICAgfSBlbHNlIHsKICAgICAgcmV0dXJuICIiOwogICAgfQogIH0KICBjb25zdCB3b3JrZXIgPSBzZWxmOwogIHdvcmtlci5vbm1lc3NhZ2UgPSBhc3luYyBmdW5jdGlvbihlKSB7CiAgICBpZiAoIk9mZnNjcmVlbkNhbnZhcyIgaW4gZ2xvYmFsVGhpcykgewogICAgICBjb25zdCB7IGlkLCBiaXRtYXAsIHdpZHRoLCBoZWlnaHQsIGRhdGFVUkxPcHRpb25zIH0gPSBlLmRhdGE7CiAgICAgIGNvbnN0IHRyYW5zcGFyZW50QmFzZTY0ID0gZ2V0VHJhbnNwYXJlbnRCbG9iRm9yKAogICAgICAgIHdpZHRoLAogICAgICAgIGhlaWdodCwKICAgICAgICBkYXRhVVJMT3B0aW9ucwogICAgICApOwogICAgICBjb25zdCBvZmZzY3JlZW4gPSBuZXcgT2Zmc2NyZWVuQ2FudmFzKHdpZHRoLCBoZWlnaHQpOwogICAgICBjb25zdCBjdHggPSBvZmZzY3JlZW4uZ2V0Q29udGV4dCgiMmQiKTsKICAgICAgY3R4LmRyYXdJbWFnZShiaXRtYXAsIDAsIDApOwogICAgICBiaXRtYXAuY2xvc2UoKTsKICAgICAgY29uc3QgYmxvYiA9IGF3YWl0IG9mZnNjcmVlbi5jb252ZXJ0VG9CbG9iKGRhdGFVUkxPcHRpb25zKTsKICAgICAgY29uc3QgdHlwZSA9IGJsb2IudHlwZTsKICAgICAgY29uc3QgYXJyYXlCdWZmZXIgPSBhd2FpdCBibG9iLmFycmF5QnVmZmVyKCk7CiAgICAgIGNvbnN0IGJhc2U2NCA9IGVuY29kZShhcnJheUJ1ZmZlcik7CiAgICAgIGlmICghbGFzdEJsb2JNYXAuaGFzKGlkKSAmJiBhd2FpdCB0cmFuc3BhcmVudEJhc2U2NCA9PT0gYmFzZTY0KSB7CiAgICAgICAgbGFzdEJsb2JNYXAuc2V0KGlkLCBiYXNlNjQpOwogICAgICAgIHJldHVybiB3b3JrZXIucG9zdE1lc3NhZ2UoeyBpZCB9KTsKICAgICAgfQogICAgICBpZiAobGFzdEJsb2JNYXAuZ2V0KGlkKSA9PT0gYmFzZTY0KSByZXR1cm4gd29ya2VyLnBvc3RNZXNzYWdlKHsgaWQgfSk7CiAgICAgIHdvcmtlci5wb3N0TWVzc2FnZSh7CiAgICAgICAgaWQsCiAgICAgICAgdHlwZSwKICAgICAgICBiYXNlNjQsCiAgICAgICAgd2lkdGgsCiAgICAgICAgaGVpZ2h0CiAgICAgIH0pOwogICAgICBsYXN0QmxvYk1hcC5zZXQoaWQsIGJhc2U2NCk7CiAgICB9IGVsc2UgewogICAgICByZXR1cm4gd29ya2VyLnBvc3RNZXNzYWdlKHsgaWQ6IGUuZGF0YS5pZCB9KTsKICAgIH0KICB9Owp9KSgpOwovLyMgc291cmNlTWFwcGluZ1VSTD1pbWFnZS1iaXRtYXAtZGF0YS11cmwtd29ya2VyLUlKcEM3Z19iLmpzLm1hcAo=";
  const decodeBase64 = (base64) => Uint8Array.from(atob(base64), (c2) => c2.charCodeAt(0));
  const blob = typeof window !== "undefined" && window.Blob && new Blob([decodeBase64(encodedJs)], { type: "text/javascript;charset=utf-8" });
  function WorkerWrapper(options2) {
    let objURL;
    try {
      objURL = blob && (window.URL || window.webkitURL).createObjectURL(blob);
      if (!objURL) throw "";
      const worker = new Worker(objURL, {
        name: options2 == null ? void 0 : options2.name
      });
      worker.addEventListener("error", () => {
        (window.URL || window.webkitURL).revokeObjectURL(objURL);
      });
      return worker;
    } catch (e2) {
      return new Worker(
        "data:text/javascript;base64," + encodedJs,
        {
          name: options2 == null ? void 0 : options2.name
        }
      );
    } finally {
      objURL && (window.URL || window.webkitURL).revokeObjectURL(objURL);
    }
  }
  class CanvasManager {
    constructor(options2) {
      __publicField2(this, "pendingCanvasMutations", /* @__PURE__ */ new Map());
      __publicField2(this, "rafStamps", { latestId: 0, invokeId: null });
      __publicField2(this, "mirror");
      __publicField2(this, "mutationCb");
      __publicField2(this, "resetObservers");
      __publicField2(this, "frozen", false);
      __publicField2(this, "locked", false);
      __publicField2(this, "processMutation", (target, mutation) => {
        const newFrame = this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId;
        if (newFrame || !this.rafStamps.invokeId)
          this.rafStamps.invokeId = this.rafStamps.latestId;
        if (!this.pendingCanvasMutations.has(target)) {
          this.pendingCanvasMutations.set(target, []);
        }
        this.pendingCanvasMutations.get(target).push(mutation);
      });
      const {
        sampling = "all",
        win,
        blockClass,
        blockSelector,
        recordCanvas,
        dataURLOptions
      } = options2;
      this.mutationCb = options2.mutationCb;
      this.mirror = options2.mirror;
      if (recordCanvas && sampling === "all")
        this.initCanvasMutationObserver(win, blockClass, blockSelector);
      if (recordCanvas && typeof sampling === "number")
        this.initCanvasFPSObserver(sampling, win, blockClass, blockSelector, {
          dataURLOptions
        });
    }
    reset() {
      this.pendingCanvasMutations.clear();
      this.resetObservers && this.resetObservers();
    }
    freeze() {
      this.frozen = true;
    }
    unfreeze() {
      this.frozen = false;
    }
    lock() {
      this.locked = true;
    }
    unlock() {
      this.locked = false;
    }
    initCanvasFPSObserver(fps, win, blockClass, blockSelector, options2) {
      const canvasContextReset = initCanvasContextObserver(
        win,
        blockClass,
        blockSelector,
        true
      );
      const snapshotInProgressMap = /* @__PURE__ */ new Map();
      const worker = new WorkerWrapper();
      worker.onmessage = (e2) => {
        const { id } = e2.data;
        snapshotInProgressMap.set(id, false);
        if (!("base64" in e2.data)) return;
        const { base64, type, width, height } = e2.data;
        this.mutationCb({
          id,
          type: CanvasContext["2D"],
          commands: [
            {
              property: "clearRect",
              // wipe canvas
              args: [0, 0, width, height]
            },
            {
              property: "drawImage",
              // draws (semi-transparent) image
              args: [
                {
                  rr_type: "ImageBitmap",
                  args: [
                    {
                      rr_type: "Blob",
                      data: [{ rr_type: "ArrayBuffer", base64 }],
                      type
                    }
                  ]
                },
                0,
                0
              ]
            }
          ]
        });
      };
      const timeBetweenSnapshots = 1e3 / fps;
      let lastSnapshotTime = 0;
      let rafId;
      const getCanvas = () => {
        const matchedCanvas = [];
        win.document.querySelectorAll("canvas").forEach((canvas) => {
          if (!isBlocked(canvas, blockClass, blockSelector, true)) {
            matchedCanvas.push(canvas);
          }
        });
        return matchedCanvas;
      };
      const takeCanvasSnapshots = (timestamp) => {
        if (lastSnapshotTime && timestamp - lastSnapshotTime < timeBetweenSnapshots) {
          rafId = requestAnimationFrame(takeCanvasSnapshots);
          return;
        }
        lastSnapshotTime = timestamp;
        getCanvas().forEach(async (canvas) => {
          var _a22;
          const id = this.mirror.getId(canvas);
          if (snapshotInProgressMap.get(id)) return;
          if (canvas.width === 0 || canvas.height === 0) return;
          snapshotInProgressMap.set(id, true);
          if (["webgl", "webgl2"].includes(canvas.__context)) {
            const context = canvas.getContext(canvas.__context);
            if (((_a22 = context == null ? void 0 : context.getContextAttributes()) == null ? void 0 : _a22.preserveDrawingBuffer) === false) {
              context.clear(context.COLOR_BUFFER_BIT);
            }
          }
          const bitmap = await createImageBitmap(canvas);
          worker.postMessage(
            {
              id,
              bitmap,
              width: canvas.width,
              height: canvas.height,
              dataURLOptions: options2.dataURLOptions
            },
            [bitmap]
          );
        });
        rafId = requestAnimationFrame(takeCanvasSnapshots);
      };
      rafId = requestAnimationFrame(takeCanvasSnapshots);
      this.resetObservers = () => {
        canvasContextReset();
        cancelAnimationFrame(rafId);
      };
    }
    initCanvasMutationObserver(win, blockClass, blockSelector) {
      this.startRAFTimestamping();
      this.startPendingCanvasMutationFlusher();
      const canvasContextReset = initCanvasContextObserver(
        win,
        blockClass,
        blockSelector,
        false
      );
      const canvas2DReset = initCanvas2DMutationObserver(
        this.processMutation.bind(this),
        win,
        blockClass,
        blockSelector
      );
      const canvasWebGL1and2Reset = initCanvasWebGLMutationObserver(
        this.processMutation.bind(this),
        win,
        blockClass,
        blockSelector
      );
      this.resetObservers = () => {
        canvasContextReset();
        canvas2DReset();
        canvasWebGL1and2Reset();
      };
    }
    startPendingCanvasMutationFlusher() {
      requestAnimationFrame(() => this.flushPendingCanvasMutations());
    }
    startRAFTimestamping() {
      const setLatestRAFTimestamp = (timestamp) => {
        this.rafStamps.latestId = timestamp;
        requestAnimationFrame(setLatestRAFTimestamp);
      };
      requestAnimationFrame(setLatestRAFTimestamp);
    }
    flushPendingCanvasMutations() {
      this.pendingCanvasMutations.forEach(
        (_values, canvas) => {
          const id = this.mirror.getId(canvas);
          this.flushPendingCanvasMutationFor(canvas, id);
        }
      );
      requestAnimationFrame(() => this.flushPendingCanvasMutations());
    }
    flushPendingCanvasMutationFor(canvas, id) {
      if (this.frozen || this.locked) {
        return;
      }
      const valuesWithType = this.pendingCanvasMutations.get(canvas);
      if (!valuesWithType || id === -1) return;
      const values = valuesWithType.map((value) => {
        const { type: type2, ...rest } = value;
        return rest;
      });
      const { type } = valuesWithType[0];
      this.mutationCb({ id, type, commands: values });
      this.pendingCanvasMutations.delete(canvas);
    }
  }
  class StylesheetManager {
    constructor(options2) {
      __publicField2(this, "trackedLinkElements", /* @__PURE__ */ new WeakSet());
      __publicField2(this, "mutationCb");
      __publicField2(this, "adoptedStyleSheetCb");
      __publicField2(this, "styleMirror", new StyleSheetMirror());
      this.mutationCb = options2.mutationCb;
      this.adoptedStyleSheetCb = options2.adoptedStyleSheetCb;
    }
    attachLinkElement(linkEl, childSn) {
      if ("_cssText" in childSn.attributes)
        this.mutationCb({
          adds: [],
          removes: [],
          texts: [],
          attributes: [
            {
              id: childSn.id,
              attributes: childSn.attributes
            }
          ]
        });
      this.trackLinkElement(linkEl);
    }
    trackLinkElement(linkEl) {
      if (this.trackedLinkElements.has(linkEl)) return;
      this.trackedLinkElements.add(linkEl);
      this.trackStylesheetInLinkElement(linkEl);
    }
    adoptStyleSheets(sheets, hostId) {
      if (sheets.length === 0) return;
      const adoptedStyleSheetData = {
        id: hostId,
        styleIds: []
      };
      const styles = [];
      for (const sheet of sheets) {
        let styleId;
        if (!this.styleMirror.has(sheet)) {
          styleId = this.styleMirror.add(sheet);
          styles.push({
            styleId,
            rules: Array.from(sheet.rules || CSSRule, (r2, index2) => ({
              rule: stringifyRule(r2, sheet.href),
              index: index2
            }))
          });
        } else styleId = this.styleMirror.getId(sheet);
        adoptedStyleSheetData.styleIds.push(styleId);
      }
      if (styles.length > 0) adoptedStyleSheetData.styles = styles;
      this.adoptedStyleSheetCb(adoptedStyleSheetData);
    }
    reset() {
      this.styleMirror.reset();
      this.trackedLinkElements = /* @__PURE__ */ new WeakSet();
    }
    // TODO: take snapshot on stylesheet reload by applying event listener
    trackStylesheetInLinkElement(_linkEl) {
    }
  }
  class ProcessedNodeManager {
    constructor() {
      __publicField2(this, "nodeMap", /* @__PURE__ */ new WeakMap());
      __publicField2(this, "active", false);
    }
    inOtherBuffer(node2, thisBuffer) {
      const buffers = this.nodeMap.get(node2);
      return buffers && Array.from(buffers).some((buffer) => buffer !== thisBuffer);
    }
    add(node2, buffer) {
      if (!this.active) {
        this.active = true;
        requestAnimationFrame(() => {
          this.nodeMap = /* @__PURE__ */ new WeakMap();
          this.active = false;
        });
      }
      this.nodeMap.set(node2, (this.nodeMap.get(node2) || /* @__PURE__ */ new Set()).add(buffer));
    }
    destroy() {
    }
  }
  let wrappedEmit;
  let takeFullSnapshot$1;
  let canvasManager;
  let recording = false;
  try {
    if (Array.from([1], (x2) => x2 * 2)[0] !== 2) {
      const cleanFrame = document.createElement("iframe");
      document.body.appendChild(cleanFrame);
      Array.from = ((_a = cleanFrame.contentWindow) == null ? void 0 : _a.Array.from) || Array.from;
      document.body.removeChild(cleanFrame);
    }
  } catch (err2) {
    console.debug("Unable to override Array.from", err2);
  }
  const mirror = createMirror$2();
  function record(options2 = {}) {
    const {
      emit,
      checkoutEveryNms,
      checkoutEveryNth,
      blockClass = "rr-block",
      blockSelector = null,
      ignoreClass = "rr-ignore",
      ignoreSelector = null,
      maskTextClass = "rr-mask",
      maskTextSelector = null,
      inlineStylesheet = true,
      maskAllInputs,
      maskInputOptions: _maskInputOptions,
      slimDOMOptions: _slimDOMOptions,
      maskInputFn,
      maskTextFn,
      hooks,
      packFn,
      sampling = {},
      dataURLOptions = {},
      mousemoveWait,
      recordDOM = true,
      recordCanvas = false,
      recordCrossOriginIframes = false,
      recordAfter = options2.recordAfter === "DOMContentLoaded" ? options2.recordAfter : "load",
      userTriggeredOnInput = false,
      collectFonts = false,
      inlineImages = false,
      plugins,
      keepIframeSrcFn = () => false,
      ignoreCSSAttributes = /* @__PURE__ */ new Set([]),
      errorHandler: errorHandler2
    } = options2;
    registerErrorHandler(errorHandler2);
    const inEmittingFrame = recordCrossOriginIframes ? window.parent === window : true;
    let passEmitsToParent = false;
    if (!inEmittingFrame) {
      try {
        if (window.parent.document) {
          passEmitsToParent = false;
        }
      } catch (e2) {
        passEmitsToParent = true;
      }
    }
    if (inEmittingFrame && !emit) {
      throw new Error("emit function is required");
    }
    if (!inEmittingFrame && !passEmitsToParent) {
      return () => {
      };
    }
    if (mousemoveWait !== void 0 && sampling.mousemove === void 0) {
      sampling.mousemove = mousemoveWait;
    }
    mirror.reset();
    const maskInputOptions = maskAllInputs === true ? {
      color: true,
      date: true,
      "datetime-local": true,
      email: true,
      month: true,
      number: true,
      range: true,
      search: true,
      tel: true,
      text: true,
      time: true,
      url: true,
      week: true,
      textarea: true,
      select: true,
      password: true
    } : _maskInputOptions !== void 0 ? _maskInputOptions : { password: true };
    const slimDOMOptions = _slimDOMOptions === true || _slimDOMOptions === "all" ? {
      script: true,
      comment: true,
      headFavicon: true,
      headWhitespace: true,
      headMetaSocial: true,
      headMetaRobots: true,
      headMetaHttpEquiv: true,
      headMetaVerification: true,
      // the following are off for slimDOMOptions === true,
      // as they destroy some (hidden) info:
      headMetaAuthorship: _slimDOMOptions === "all",
      headMetaDescKeywords: _slimDOMOptions === "all",
      headTitleMutations: _slimDOMOptions === "all"
    } : _slimDOMOptions ? _slimDOMOptions : {};
    polyfill$1();
    let lastFullSnapshotEvent;
    let incrementalSnapshotCount = 0;
    const eventProcessor = (e2) => {
      for (const plugin3 of plugins || []) {
        if (plugin3.eventProcessor) {
          e2 = plugin3.eventProcessor(e2);
        }
      }
      if (packFn && // Disable packing events which will be emitted to parent frames.
      !passEmitsToParent) {
        e2 = packFn(e2);
      }
      return e2;
    };
    wrappedEmit = (r2, isCheckout) => {
      var _a22;
      const e2 = r2;
      e2.timestamp = nowTimestamp();
      if (((_a22 = mutationBuffers[0]) == null ? void 0 : _a22.isFrozen()) && e2.type !== EventType.FullSnapshot && !(e2.type === EventType.IncrementalSnapshot && e2.data.source === IncrementalSource.Mutation)) {
        mutationBuffers.forEach((buf) => buf.unfreeze());
      }
      if (inEmittingFrame) {
        emit == null ? void 0 : emit(eventProcessor(e2), isCheckout);
      } else if (passEmitsToParent) {
        const message = {
          type: "rrweb",
          event: eventProcessor(e2),
          origin: window.location.origin,
          isCheckout
        };
        window.parent.postMessage(message, "*");
      }
      if (e2.type === EventType.FullSnapshot) {
        lastFullSnapshotEvent = e2;
        incrementalSnapshotCount = 0;
      } else if (e2.type === EventType.IncrementalSnapshot) {
        if (e2.data.source === IncrementalSource.Mutation && e2.data.isAttachIframe) {
          return;
        }
        incrementalSnapshotCount++;
        const exceedCount = checkoutEveryNth && incrementalSnapshotCount >= checkoutEveryNth;
        const exceedTime = checkoutEveryNms && e2.timestamp - lastFullSnapshotEvent.timestamp > checkoutEveryNms;
        if (exceedCount || exceedTime) {
          takeFullSnapshot$1(true);
        }
      }
    };
    const wrappedMutationEmit = (m2) => {
      wrappedEmit({
        type: EventType.IncrementalSnapshot,
        data: {
          source: IncrementalSource.Mutation,
          ...m2
        }
      });
    };
    const wrappedScrollEmit = (p2) => wrappedEmit({
      type: EventType.IncrementalSnapshot,
      data: {
        source: IncrementalSource.Scroll,
        ...p2
      }
    });
    const wrappedCanvasMutationEmit = (p2) => wrappedEmit({
      type: EventType.IncrementalSnapshot,
      data: {
        source: IncrementalSource.CanvasMutation,
        ...p2
      }
    });
    const wrappedAdoptedStyleSheetEmit = (a2) => wrappedEmit({
      type: EventType.IncrementalSnapshot,
      data: {
        source: IncrementalSource.AdoptedStyleSheet,
        ...a2
      }
    });
    const stylesheetManager = new StylesheetManager({
      mutationCb: wrappedMutationEmit,
      adoptedStyleSheetCb: wrappedAdoptedStyleSheetEmit
    });
    const iframeManager = new IframeManager({
      mirror,
      mutationCb: wrappedMutationEmit,
      stylesheetManager,
      recordCrossOriginIframes,
      wrappedEmit
    });
    for (const plugin3 of plugins || []) {
      if (plugin3.getMirror)
        plugin3.getMirror({
          nodeMirror: mirror,
          crossOriginIframeMirror: iframeManager.crossOriginIframeMirror,
          crossOriginIframeStyleMirror: iframeManager.crossOriginIframeStyleMirror
        });
    }
    const processedNodeManager = new ProcessedNodeManager();
    canvasManager = new CanvasManager({
      recordCanvas,
      mutationCb: wrappedCanvasMutationEmit,
      win: window,
      blockClass,
      blockSelector,
      mirror,
      sampling: sampling.canvas,
      dataURLOptions
    });
    const shadowDomManager = new ShadowDomManager({
      mutationCb: wrappedMutationEmit,
      scrollCb: wrappedScrollEmit,
      bypassOptions: {
        blockClass,
        blockSelector,
        maskTextClass,
        maskTextSelector,
        inlineStylesheet,
        maskInputOptions,
        dataURLOptions,
        maskTextFn,
        maskInputFn,
        recordCanvas,
        inlineImages,
        sampling,
        slimDOMOptions,
        iframeManager,
        stylesheetManager,
        canvasManager,
        keepIframeSrcFn,
        processedNodeManager
      },
      mirror
    });
    takeFullSnapshot$1 = (isCheckout = false) => {
      if (!recordDOM) {
        return;
      }
      wrappedEmit(
        {
          type: EventType.Meta,
          data: {
            href: window.location.href,
            width: getWindowWidth(),
            height: getWindowHeight()
          }
        },
        isCheckout
      );
      stylesheetManager.reset();
      shadowDomManager.init();
      mutationBuffers.forEach((buf) => buf.lock());
      const node2 = snapshot(document, {
        mirror,
        blockClass,
        blockSelector,
        maskTextClass,
        maskTextSelector,
        inlineStylesheet,
        maskAllInputs: maskInputOptions,
        maskTextFn,
        maskInputFn,
        slimDOM: slimDOMOptions,
        dataURLOptions,
        recordCanvas,
        inlineImages,
        onSerialize: (n2) => {
          if (isSerializedIframe(n2, mirror)) {
            iframeManager.addIframe(n2);
          }
          if (isSerializedStylesheet(n2, mirror)) {
            stylesheetManager.trackLinkElement(n2);
          }
          if (hasShadowRoot(n2)) {
            shadowDomManager.addShadowRoot(index.shadowRoot(n2), document);
          }
        },
        onIframeLoad: (iframe, childSn) => {
          iframeManager.attachIframe(iframe, childSn);
          shadowDomManager.observeAttachShadow(iframe);
        },
        onStylesheetLoad: (linkEl, childSn) => {
          stylesheetManager.attachLinkElement(linkEl, childSn);
        },
        keepIframeSrcFn
      });
      if (!node2) {
        return console.warn("Failed to snapshot the document");
      }
      wrappedEmit(
        {
          type: EventType.FullSnapshot,
          data: {
            node: node2,
            initialOffset: getWindowScroll(window)
          }
        },
        isCheckout
      );
      mutationBuffers.forEach((buf) => buf.unlock());
      if (document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0)
        stylesheetManager.adoptStyleSheets(
          document.adoptedStyleSheets,
          mirror.getId(document)
        );
    };
    try {
      const handlers = [];
      const observe = (doc) => {
        var _a22;
        return callbackWrapper(initObservers)(
          {
            mutationCb: wrappedMutationEmit,
            mousemoveCb: (positions, source) => wrappedEmit({
              type: EventType.IncrementalSnapshot,
              data: {
                source,
                positions
              }
            }),
            mouseInteractionCb: (d2) => wrappedEmit({
              type: EventType.IncrementalSnapshot,
              data: {
                source: IncrementalSource.MouseInteraction,
                ...d2
              }
            }),
            scrollCb: wrappedScrollEmit,
            viewportResizeCb: (d2) => wrappedEmit({
              type: EventType.IncrementalSnapshot,
              data: {
                source: IncrementalSource.ViewportResize,
                ...d2
              }
            }),
            inputCb: (v2) => wrappedEmit({
              type: EventType.IncrementalSnapshot,
              data: {
                source: IncrementalSource.Input,
                ...v2
              }
            }),
            mediaInteractionCb: (p2) => wrappedEmit({
              type: EventType.IncrementalSnapshot,
              data: {
                source: IncrementalSource.MediaInteraction,
                ...p2
              }
            }),
            styleSheetRuleCb: (r2) => wrappedEmit({
              type: EventType.IncrementalSnapshot,
              data: {
                source: IncrementalSource.StyleSheetRule,
                ...r2
              }
            }),
            styleDeclarationCb: (r2) => wrappedEmit({
              type: EventType.IncrementalSnapshot,
              data: {
                source: IncrementalSource.StyleDeclaration,
                ...r2
              }
            }),
            canvasMutationCb: wrappedCanvasMutationEmit,
            fontCb: (p2) => wrappedEmit({
              type: EventType.IncrementalSnapshot,
              data: {
                source: IncrementalSource.Font,
                ...p2
              }
            }),
            selectionCb: (p2) => {
              wrappedEmit({
                type: EventType.IncrementalSnapshot,
                data: {
                  source: IncrementalSource.Selection,
                  ...p2
                }
              });
            },
            customElementCb: (c2) => {
              wrappedEmit({
                type: EventType.IncrementalSnapshot,
                data: {
                  source: IncrementalSource.CustomElement,
                  ...c2
                }
              });
            },
            blockClass,
            ignoreClass,
            ignoreSelector,
            maskTextClass,
            maskTextSelector,
            maskInputOptions,
            inlineStylesheet,
            sampling,
            recordDOM,
            recordCanvas,
            inlineImages,
            userTriggeredOnInput,
            collectFonts,
            doc,
            maskInputFn,
            maskTextFn,
            keepIframeSrcFn,
            blockSelector,
            slimDOMOptions,
            dataURLOptions,
            mirror,
            iframeManager,
            stylesheetManager,
            shadowDomManager,
            processedNodeManager,
            canvasManager,
            ignoreCSSAttributes,
            plugins: ((_a22 = plugins == null ? void 0 : plugins.filter((p2) => p2.observer)) == null ? void 0 : _a22.map((p2) => ({
              observer: p2.observer,
              options: p2.options,
              callback: (payload) => wrappedEmit({
                type: EventType.Plugin,
                data: {
                  plugin: p2.name,
                  payload
                }
              })
            }))) || []
          },
          hooks
        );
      };
      iframeManager.addLoadListener((iframeEl) => {
        try {
          handlers.push(observe(iframeEl.contentDocument));
        } catch (error) {
          console.warn(error);
        }
      });
      const init2 = () => {
        takeFullSnapshot$1();
        handlers.push(observe(document));
        recording = true;
      };
      if (document.readyState === "interactive" || document.readyState === "complete") {
        init2();
      } else {
        handlers.push(
          on("DOMContentLoaded", () => {
            wrappedEmit({
              type: EventType.DomContentLoaded,
              data: {}
            });
            if (recordAfter === "DOMContentLoaded") init2();
          })
        );
        handlers.push(
          on(
            "load",
            () => {
              wrappedEmit({
                type: EventType.Load,
                data: {}
              });
              if (recordAfter === "load") init2();
            },
            window
          )
        );
      }
      return () => {
        handlers.forEach((h2) => h2());
        processedNodeManager.destroy();
        recording = false;
        unregisterErrorHandler();
      };
    } catch (error) {
      console.warn(error);
    }
  }
  record.addCustomEvent = (tag, payload) => {
    if (!recording) {
      throw new Error("please add custom event after start recording");
    }
    wrappedEmit({
      type: EventType.Custom,
      data: {
        tag,
        payload
      }
    });
  };
  record.freezePage = () => {
    mutationBuffers.forEach((buf) => buf.freeze());
  };
  record.takeFullSnapshot = (isCheckout) => {
    if (!recording) {
      throw new Error("please take full snapshot after start recording");
    }
    takeFullSnapshot$1(isCheckout);
  };
  record.mirror = mirror;
  var n;
  !function(t2) {
    t2[t2.NotStarted = 0] = "NotStarted", t2[t2.Running = 1] = "Running", t2[t2.Stopped = 2] = "Stopped";
  }(n || (n = {}));
  const listenRecordScreen = () => {
    handleRecordScreen({
      callback: (result2) => {
        eventTrack.send({
          type: EventType$1.RECORD_SCREEN,
          category: "record-screen",
          time: getTimestamp(),
          status: StatusType.Error,
          data: {
            recordData: result2
          }
        });
      }
    });
  };
  const handleRecordScreen = (options2) => {
    const rerecordTime = (options2 == null ? void 0 : options2.rerecordTime) ?? 10;
    const rerecordEventsMax = (options2 == null ? void 0 : options2.rerecordEventsMax) ?? 50;
    let events = [];
    let eventsBase64 = "";
    record({
      emit(event, isCheckout) {
        if (isCheckout) {
          if (__EASY_TRACK__.hasError) {
            eventsBase64 = zipData(events);
            isFunction(options2 == null ? void 0 : options2.callback) && (options2 == null ? void 0 : options2.callback(eventsBase64));
            events = [];
            __EASY_TRACK__.hasError = false;
          } else {
            events = [];
          }
        }
        events.push(event);
      },
      recordCanvas: true,
      checkoutEveryNms: 1e3 * rerecordTime,
      // 重新制作快照间隔
      checkoutEveryNth: rerecordEventsMax
      // 重新制作快照的最大事件数量
    });
  };
  const zipData = (data) => {
    if (!data) {
      return data;
    }
    const dataJson = typeof data !== "string" && typeof data !== "number" ? JSON.stringify(data) : data;
    const str = gBase64.encode(dataJson);
    const binaryData = pako.gzip(str);
    const arr = Array.from(binaryData);
    let resStr = "";
    arr.forEach((it) => {
      resStr += String.fromCharCode(it);
    });
    return gBase64.btoa(resStr);
  };
  const replaceFetch = () => {
    if (!("fetch" in _global)) {
      return;
    }
    const replaceFunc = (originalFetch) => {
      return function(url, config = {}) {
        const startTime = getTimestamp();
        const method = (config == null ? void 0 : config.method) ?? "GET";
        const headers = new Headers(config.headers || {});
        config = { ...config, ...headers };
        const fetchData = {
          status: StatusType.Ok,
          url,
          method: method.toUpperCase(),
          elapsedTime: getTimestamp() - startTime,
          time: startTime,
          request: {
            ...config,
            headers: config == null ? void 0 : config.headers,
            body: config == null ? void 0 : config.body
          },
          response: {
            status: 200,
            data: null
          }
        };
        return originalFetch.apply(_global, [url, config]).then(
          (res) => {
            const tempRes = res.clone();
            tempRes.text().then((data) => {
              if (checkIsIgnoreUrl(url, method)) {
                return;
              }
              const { checkHttpStatus } = options.get();
              const { status = 200 } = tempRes;
              fetchData.elapsedTime = getTimestamp() - startTime;
              fetchData.response.status = status;
              if (isFunction(checkHttpStatus) && checkHttpStatus(tempRes) || !checkHttpStatus && status >= 200 && status < 400) {
                fetchData.response.data = data && unknownToObject(data);
              }
              eventEmitter.emit(EventType$1.FETCH, fetchData);
            });
            return res;
          },
          (err2) => {
            if (checkIsIgnoreUrl(url, method)) {
              return;
            }
            fetchData.status = StatusType.Error;
            fetchData.response.status = 0;
            fetchData.elapsedTime = getTimestamp() - startTime;
            eventEmitter.emit(EventType$1.FETCH, fetchData);
            throw err2;
          }
        );
      };
    };
    replaceAop(window, "fetch", replaceFunc);
  };
  const checkIsIgnoreUrl = (url, method) => {
    const { filterHttpUrl, dsn } = options.get();
    const isReportUrl = dsn === url && method === RequestMethod.POST;
    const isFilterHttpUrl = isFunction(filterHttpUrl) && filterHttpUrl(url, method);
    return isReportUrl || isFilterHttpUrl;
  };
  const httpCallback = (category) => (data) => {
    const result2 = httpTransform(data);
    const { dsn } = options.get();
    if (result2.status === StatusType.Error) {
      eventTrack.send({
        type: EventType$1.REQUEST,
        category,
        status: StatusType.Error,
        time: data.time,
        data: result2
      });
      return;
    }
    if (!data.url.includes(dsn)) {
      eventTrack.add({
        type: EventType$1.REQUEST,
        category,
        status: StatusType.Ok,
        time: data.time,
        data: result2
      });
    }
  };
  const replaceXHR = () => {
    const xhrProto = XMLHttpRequest.prototype;
    const replaceOpenFunc = (originalOpen) => {
      return function(...args) {
        const [method, url] = args;
        const { withCredentials, responseType } = this;
        const startTime = getTimestamp();
        const xhrData = {
          status: StatusType.Ok,
          url,
          method: method.toUpperCase(),
          elapsedTime: getTimestamp() - startTime,
          time: startTime,
          request: {
            withCredentials,
            responseType,
            headers: {},
            body: null
          },
          response: {
            status: 200,
            headers: {},
            data: null
          }
        };
        this.xhrData = xhrData;
        originalOpen.apply(this, args);
      };
    };
    let headers = {};
    const replaceSetRequestHeaderFunc = (originalSetRequestHeader) => {
      return function(...args) {
        const [key = "", value = ""] = args;
        headers[key] = value;
        this.xhrData.request.headers = {
          ...headers
        };
        originalSetRequestHeader.apply(this, args);
      };
    };
    const replaceSendFunc = (originalSend) => {
      return function(...args) {
        const { xhrData, responseType, withCredentials } = this;
        const { method, url, time } = xhrData ?? {};
        const [body] = args ?? [];
        xhrData.request.withCredentials = withCredentials;
        xhrData.request.responseType = responseType;
        xhrData.request.body = body;
        on$1({
          el: this,
          eventName: "loadend",
          event() {
            if (checkIsIgnoreUrl(url, method)) {
              return;
            }
            const { responseType: responseType2, response, status, statusText } = this;
            const allHeaders = this.getAllResponseHeaders();
            const isResponseFailed = status === 0 || status >= 400;
            const isResponseSuccessed = status >= 200 && status < 400;
            xhrData.status = isResponseFailed ? StatusType.Error : StatusType.Ok;
            xhrData.elapsedTime = getTimestamp() - time;
            xhrData.response.status = status;
            xhrData.response.headers = parseResponseHeaders(allHeaders);
            if (["", "json", "text"].includes(responseType2)) {
              const { checkHttpStatus } = options.get();
              const resData = { status, statusText };
              if (isFunction(checkHttpStatus) && (checkHttpStatus == null ? void 0 : checkHttpStatus(resData)) || !checkHttpStatus && isResponseSuccessed) {
                xhrData.response.data = response && unknownToObject(response);
              }
            }
            eventEmitter.emit(EventType$1.XHR, xhrData);
          }
        });
        headers = {};
        originalSend.apply(this, args);
      };
    };
    replaceAop(xhrProto, "open", replaceOpenFunc);
    replaceAop(xhrProto, "setRequestHeader", replaceSetRequestHeaderFunc);
    replaceAop(xhrProto, "send", replaceSendFunc);
  };
  const listenNetwork = () => {
    on$1({
      el: _global,
      eventName: "online",
      event: () => {
        eventEmitter.emit(EventType$1.NETWORK, NetworkStatus.ONLINE);
      }
    });
    on$1({
      el: _global,
      eventName: "offline",
      event: () => {
        eventEmitter.emit(EventType$1.NETWORK, NetworkStatus.OFFLINE);
      }
    });
    if ("connection" in navigator) {
      const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      connection == null ? void 0 : connection.addEventListener("change", () => {
        if (!navigator.onLine || __EASY_TRACK__.networkStatus === NetworkStatus.OFFLINE) {
          return;
        }
        eventEmitter.emit(EventType$1.NETWORK, NetworkStatus.CHANGE);
      });
    }
  };
  const networkCallback = () => {
    return (networkState) => {
      if (__EASY_TRACK__.networkStatus === networkState) {
        return;
      }
      if (networkState !== NetworkStatus.CHANGE) {
        __EASY_TRACK__.networkStatus = networkState;
      }
      const curNetworkInfo = getCurrentNetworkInfo();
      const eventType = networkState === NetworkStatus.CHANGE ? "add" : "send";
      eventTrack[eventType]({
        type: EventType$1.NETWORK,
        category: networkState,
        time: getTimestamp(),
        status: networkState === NetworkStatus.OFFLINE ? StatusType.Error : StatusType.Ok,
        data: {
          networkState,
          networkType: curNetworkInfo == null ? void 0 : curNetworkInfo.effectiveType,
          networkSpeed: curNetworkInfo == null ? void 0 : curNetworkInfo.downlink
        }
      });
    };
  };
  const wrapConsoleMethod = (level, callback) => {
    if (!("console" in _global) || !(level in _global.console)) {
      return;
    }
    const originalMethod = console[level];
    console[level] = function(...args) {
      isFunction(callback) && callback(level, args);
      originalMethod(...args);
    };
  };
  const replaceConsole = () => {
    const consoleLevels = ["warn", "error"];
    consoleLevels.forEach((level) => {
      wrapConsoleMethod(level, (level2, message) => {
        eventEmitter.emit(EventType$1.LOGGER, { level: level2, message });
      });
    });
  };
  const loggerCallback = () => {
    return (data) => {
      const { level, message } = data;
      eventTrack.add({
        type: EventType$1.LOGGER,
        category: level,
        time: getTimestamp(),
        status: StatusType.Error,
        data: {
          level,
          message
        }
      });
    };
  };
  const listenOrReplace = (type) => {
    var _a3;
    const listenOrReplaceFuncMap = {
      [EventType$1.BLANK_SCREEN]: listenBlankScreen,
      [EventType$1.PERFORMANCE]: listenWebPerformance,
      [EventType$1.RESOURCE]: listenWebResource,
      [EventType$1.NETWORK]: listenNetwork,
      [EventType$1.LOGGER]: replaceConsole,
      [EventType$1.XHR]: replaceXHR,
      [EventType$1.FETCH]: replaceFetch,
      // 不用具体实现, 具体在 xhr、fetch
      [EventType$1.REQUEST]: () => {
      },
      [EventType$1.ERROR]: listenError,
      [EventType$1.UNHANDLEDREJECTION]: listenUnhandledrejection,
      [EventType$1.EVENT_TRACK]: listenEventTrack,
      [EventType$1.EXPOSURE_TRACK]: listenExposureTrack,
      [EventType$1.RECORD_SCREEN]: listenRecordScreen,
      [EventType$1.PV]: listenPageVisibility,
      [EventType$1.HASH_CHANGE]: listenHashChange,
      [EventType$1.HISTORY]: replaceHistory,
      [EventType$1.HISTORY_PUSHSTATE]: replaceHistoryPushState,
      [EventType$1.HISTORY_REPLACESTATE]: replaceHistoryReplaceState
    };
    (_a3 = listenOrReplaceFuncMap[type]) == null ? void 0 : _a3.call(listenOrReplaceFuncMap);
  };
  const addListenOrReplace = (replaceParams) => {
    const { type, callback } = replaceParams;
    callback && eventEmitter.subscribe(type, callback);
    listenOrReplace(type);
  };
  const initReplace = () => {
    const siwtchMap = options.getSwitchMap();
    console.log("siwtchMap", siwtchMap);
    if (siwtchMap[EventType$1.EVENT_TRACK]) {
      addListenOrReplace({
        type: EventType$1.EVENT_TRACK,
        callback: eventTrackCallback()
      });
    }
    if (siwtchMap[EventType$1.EXPOSURE_TRACK]) {
      addListenOrReplace({ type: EventType$1.EXPOSURE_TRACK });
    }
    if (siwtchMap[EventType$1.RECORD_SCREEN]) {
      addListenOrReplace({ type: EventType$1.RECORD_SCREEN });
    }
    if (siwtchMap[EventType$1.NETWORK]) {
      addListenOrReplace({ type: EventType$1.NETWORK, callback: networkCallback() });
    }
    if (siwtchMap[EventType$1.LOGGER]) {
      addListenOrReplace({ type: EventType$1.LOGGER, callback: loggerCallback() });
    }
    if (siwtchMap[EventType$1.ERROR]) {
      addListenOrReplace({
        type: EventType$1.ERROR,
        callback: errorCallback()
      });
    }
    if (siwtchMap[EventType$1.UNHANDLEDREJECTION]) {
      addListenOrReplace({
        type: EventType$1.UNHANDLEDREJECTION,
        callback: unhandledrejectionCallback()
      });
    }
    if (siwtchMap[EventType$1.PERFORMANCE]) {
      addListenOrReplace({ type: EventType$1.PERFORMANCE });
    }
    if (siwtchMap[EventType$1.RESOURCE]) {
      addListenOrReplace({
        type: EventType$1.RESOURCE,
        callback: webResourceCallback()
      });
    }
    if (siwtchMap[EventType$1.HASH_CHANGE]) {
      addListenOrReplace({
        type: EventType$1.HASH_CHANGE,
        callback: hashCallback()
      });
    }
    if (siwtchMap[EventType$1.HISTORY]) {
      addListenOrReplace({
        type: EventType$1.HISTORY,
        callback: historyCallback("history")
      });
    }
    if (siwtchMap[EventType$1.HASH_CHANGE] || siwtchMap[EventType$1.HISTORY]) {
      addListenOrReplace({
        type: EventType$1.HISTORY_PUSHSTATE,
        callback: historyCallback("history-pushstate")
      });
      addListenOrReplace({
        type: EventType$1.HISTORY_REPLACESTATE,
        callback: historyCallback("history-replaceState")
      });
      addListenOrReplace({
        type: EventType$1.PV,
        callback: pvCallback()
      });
    }
    if (siwtchMap[EventType$1.FETCH]) {
      addListenOrReplace({
        type: EventType$1.FETCH,
        callback: httpCallback(EventType$1.FETCH)
      });
    }
    if (siwtchMap[EventType$1.XHR]) {
      addListenOrReplace({
        type: EventType$1.XHR,
        callback: httpCallback(EventType$1.XHR)
      });
    }
    if (siwtchMap[EventType$1.BLANK_SCREEN]) {
      addListenOrReplace({ type: EventType$1.BLANK_SCREEN });
    }
  };
  const setupStorage = (appCode) => {
    const val = storage.getItem(appCode);
    if (!Array.isArray(val)) {
      storage.setItem(`${appCode}`, []);
    }
  };
  const setupDB = async (appCode) => {
    try {
      if (!checkIsIndexedDBSupported()) {
        throw new Error("当前浏览器不支持 IndexedDB");
      }
      await db.init({ dbName: appCode });
    } catch (_err) {
      logger.warn("初始化IndexedDB失败, 已关闭并且缓存降级为 normal");
      options.setCacheType("normal");
    }
  };
  const setupCache = async () => {
    const { cacheType, appCode } = options.get();
    switch (cacheType) {
      case "storage":
        setupStorage(appCode);
        break;
      case "db":
        await setupDB(appCode);
        break;
    }
  };
  const init = async (options2) => {
    if (!initOptions(options2)) {
      return;
    }
    await setupCache();
    initReplace();
  };
  exports2.EventType = EventType$1;
  exports2.StatusType = StatusType;
  exports2.eventEmitter = eventEmitter;
  exports2.eventTrack = eventTrack;
  exports2.init = init;
  Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
});
//# sourceMappingURL=index.umd.js.map
