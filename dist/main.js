(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // node_modules/axios/dist/browser/axios.cjs
  var require_axios = __commonJS({
    "node_modules/axios/dist/browser/axios.cjs"(exports, module) {
      "use strict";
      function bind(fn, thisArg) {
        return function wrap() {
          return fn.apply(thisArg, arguments);
        };
      }
      var { toString } = Object.prototype;
      var { getPrototypeOf } = Object;
      var kindOf = ((cache) => (thing) => {
        const str = toString.call(thing);
        return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
      })(/* @__PURE__ */ Object.create(null));
      var kindOfTest = (type) => {
        type = type.toLowerCase();
        return (thing) => kindOf(thing) === type;
      };
      var typeOfTest = (type) => (thing) => typeof thing === type;
      var { isArray } = Array;
      var isUndefined = typeOfTest("undefined");
      function isBuffer(val) {
        return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
      }
      var isArrayBuffer = kindOfTest("ArrayBuffer");
      function isArrayBufferView(val) {
        let result;
        if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
          result = ArrayBuffer.isView(val);
        } else {
          result = val && val.buffer && isArrayBuffer(val.buffer);
        }
        return result;
      }
      var isString = typeOfTest("string");
      var isFunction = typeOfTest("function");
      var isNumber = typeOfTest("number");
      var isObject = (thing) => thing !== null && typeof thing === "object";
      var isBoolean = (thing) => thing === true || thing === false;
      var isPlainObject = (val) => {
        if (kindOf(val) !== "object") {
          return false;
        }
        const prototype2 = getPrototypeOf(val);
        return (prototype2 === null || prototype2 === Object.prototype || Object.getPrototypeOf(prototype2) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
      };
      var isDate = kindOfTest("Date");
      var isFile = kindOfTest("File");
      var isBlob = kindOfTest("Blob");
      var isFileList = kindOfTest("FileList");
      var isStream = (val) => isObject(val) && isFunction(val.pipe);
      var isFormData = (thing) => {
        let kind;
        return thing && (typeof FormData === "function" && thing instanceof FormData || isFunction(thing.append) && ((kind = kindOf(thing)) === "formdata" || // detect form-data instance
        kind === "object" && isFunction(thing.toString) && thing.toString() === "[object FormData]"));
      };
      var isURLSearchParams = kindOfTest("URLSearchParams");
      var trim = (str) => str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
      function forEach(obj, fn, { allOwnKeys = false } = {}) {
        if (obj === null || typeof obj === "undefined") {
          return;
        }
        let i;
        let l;
        if (typeof obj !== "object") {
          obj = [obj];
        }
        if (isArray(obj)) {
          for (i = 0, l = obj.length; i < l; i++) {
            fn.call(null, obj[i], i, obj);
          }
        } else {
          const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
          const len = keys.length;
          let key;
          for (i = 0; i < len; i++) {
            key = keys[i];
            fn.call(null, obj[key], key, obj);
          }
        }
      }
      function findKey(obj, key) {
        key = key.toLowerCase();
        const keys = Object.keys(obj);
        let i = keys.length;
        let _key;
        while (i-- > 0) {
          _key = keys[i];
          if (key === _key.toLowerCase()) {
            return _key;
          }
        }
        return null;
      }
      var _global = (() => {
        if (typeof globalThis !== "undefined")
          return globalThis;
        return typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
      })();
      var isContextDefined = (context) => !isUndefined(context) && context !== _global;
      function merge() {
        const { caseless } = isContextDefined(this) && this || {};
        const result = {};
        const assignValue = (val, key) => {
          const targetKey = caseless && findKey(result, key) || key;
          if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
            result[targetKey] = merge(result[targetKey], val);
          } else if (isPlainObject(val)) {
            result[targetKey] = merge({}, val);
          } else if (isArray(val)) {
            result[targetKey] = val.slice();
          } else {
            result[targetKey] = val;
          }
        };
        for (let i = 0, l = arguments.length; i < l; i++) {
          arguments[i] && forEach(arguments[i], assignValue);
        }
        return result;
      }
      var extend = (a, b, thisArg, { allOwnKeys } = {}) => {
        forEach(b, (val, key) => {
          if (thisArg && isFunction(val)) {
            a[key] = bind(val, thisArg);
          } else {
            a[key] = val;
          }
        }, { allOwnKeys });
        return a;
      };
      var stripBOM = (content) => {
        if (content.charCodeAt(0) === 65279) {
          content = content.slice(1);
        }
        return content;
      };
      var inherits = (constructor, superConstructor, props, descriptors2) => {
        constructor.prototype = Object.create(superConstructor.prototype, descriptors2);
        constructor.prototype.constructor = constructor;
        Object.defineProperty(constructor, "super", {
          value: superConstructor.prototype
        });
        props && Object.assign(constructor.prototype, props);
      };
      var toFlatObject = (sourceObj, destObj, filter, propFilter) => {
        let props;
        let i;
        let prop;
        const merged = {};
        destObj = destObj || {};
        if (sourceObj == null)
          return destObj;
        do {
          props = Object.getOwnPropertyNames(sourceObj);
          i = props.length;
          while (i-- > 0) {
            prop = props[i];
            if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
              destObj[prop] = sourceObj[prop];
              merged[prop] = true;
            }
          }
          sourceObj = filter !== false && getPrototypeOf(sourceObj);
        } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
        return destObj;
      };
      var endsWith = (str, searchString, position) => {
        str = String(str);
        if (position === void 0 || position > str.length) {
          position = str.length;
        }
        position -= searchString.length;
        const lastIndex = str.indexOf(searchString, position);
        return lastIndex !== -1 && lastIndex === position;
      };
      var toArray = (thing) => {
        if (!thing)
          return null;
        if (isArray(thing))
          return thing;
        let i = thing.length;
        if (!isNumber(i))
          return null;
        const arr = new Array(i);
        while (i-- > 0) {
          arr[i] = thing[i];
        }
        return arr;
      };
      var isTypedArray = ((TypedArray) => {
        return (thing) => {
          return TypedArray && thing instanceof TypedArray;
        };
      })(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
      var forEachEntry = (obj, fn) => {
        const generator = obj && obj[Symbol.iterator];
        const iterator = generator.call(obj);
        let result;
        while ((result = iterator.next()) && !result.done) {
          const pair = result.value;
          fn.call(obj, pair[0], pair[1]);
        }
      };
      var matchAll = (regExp, str) => {
        let matches;
        const arr = [];
        while ((matches = regExp.exec(str)) !== null) {
          arr.push(matches);
        }
        return arr;
      };
      var isHTMLForm = kindOfTest("HTMLFormElement");
      var toCamelCase = (str) => {
        return str.toLowerCase().replace(
          /[-_\s]([a-z\d])(\w*)/g,
          function replacer(m, p1, p2) {
            return p1.toUpperCase() + p2;
          }
        );
      };
      var hasOwnProperty = (({ hasOwnProperty: hasOwnProperty2 }) => (obj, prop) => hasOwnProperty2.call(obj, prop))(Object.prototype);
      var isRegExp = kindOfTest("RegExp");
      var reduceDescriptors = (obj, reducer) => {
        const descriptors2 = Object.getOwnPropertyDescriptors(obj);
        const reducedDescriptors = {};
        forEach(descriptors2, (descriptor, name) => {
          if (reducer(descriptor, name, obj) !== false) {
            reducedDescriptors[name] = descriptor;
          }
        });
        Object.defineProperties(obj, reducedDescriptors);
      };
      var freezeMethods = (obj) => {
        reduceDescriptors(obj, (descriptor, name) => {
          if (isFunction(obj) && ["arguments", "caller", "callee"].indexOf(name) !== -1) {
            return false;
          }
          const value = obj[name];
          if (!isFunction(value))
            return;
          descriptor.enumerable = false;
          if ("writable" in descriptor) {
            descriptor.writable = false;
            return;
          }
          if (!descriptor.set) {
            descriptor.set = () => {
              throw Error("Can not rewrite read-only method '" + name + "'");
            };
          }
        });
      };
      var toObjectSet = (arrayOrString, delimiter) => {
        const obj = {};
        const define = (arr) => {
          arr.forEach((value) => {
            obj[value] = true;
          });
        };
        isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
        return obj;
      };
      var noop = () => {
      };
      var toFiniteNumber = (value, defaultValue) => {
        value = +value;
        return Number.isFinite(value) ? value : defaultValue;
      };
      var ALPHA = "abcdefghijklmnopqrstuvwxyz";
      var DIGIT = "0123456789";
      var ALPHABET = {
        DIGIT,
        ALPHA,
        ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
      };
      var generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
        let str = "";
        const { length } = alphabet;
        while (size--) {
          str += alphabet[Math.random() * length | 0];
        }
        return str;
      };
      function isSpecCompliantForm(thing) {
        return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === "FormData" && thing[Symbol.iterator]);
      }
      var toJSONObject = (obj) => {
        const stack = new Array(10);
        const visit = (source, i) => {
          if (isObject(source)) {
            if (stack.indexOf(source) >= 0) {
              return;
            }
            if (!("toJSON" in source)) {
              stack[i] = source;
              const target = isArray(source) ? [] : {};
              forEach(source, (value, key) => {
                const reducedValue = visit(value, i + 1);
                !isUndefined(reducedValue) && (target[key] = reducedValue);
              });
              stack[i] = void 0;
              return target;
            }
          }
          return source;
        };
        return visit(obj, 0);
      };
      var isAsyncFn = kindOfTest("AsyncFunction");
      var isThenable = (thing) => thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);
      var utils = {
        isArray,
        isArrayBuffer,
        isBuffer,
        isFormData,
        isArrayBufferView,
        isString,
        isNumber,
        isBoolean,
        isObject,
        isPlainObject,
        isUndefined,
        isDate,
        isFile,
        isBlob,
        isRegExp,
        isFunction,
        isStream,
        isURLSearchParams,
        isTypedArray,
        isFileList,
        forEach,
        merge,
        extend,
        trim,
        stripBOM,
        inherits,
        toFlatObject,
        kindOf,
        kindOfTest,
        endsWith,
        toArray,
        forEachEntry,
        matchAll,
        isHTMLForm,
        hasOwnProperty,
        hasOwnProp: hasOwnProperty,
        // an alias to avoid ESLint no-prototype-builtins detection
        reduceDescriptors,
        freezeMethods,
        toObjectSet,
        toCamelCase,
        noop,
        toFiniteNumber,
        findKey,
        global: _global,
        isContextDefined,
        ALPHABET,
        generateString,
        isSpecCompliantForm,
        toJSONObject,
        isAsyncFn,
        isThenable
      };
      function AxiosError(message, code, config, request, response) {
        Error.call(this);
        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, this.constructor);
        } else {
          this.stack = new Error().stack;
        }
        this.message = message;
        this.name = "AxiosError";
        code && (this.code = code);
        config && (this.config = config);
        request && (this.request = request);
        response && (this.response = response);
      }
      utils.inherits(AxiosError, Error, {
        toJSON: function toJSON() {
          return {
            // Standard
            message: this.message,
            name: this.name,
            // Microsoft
            description: this.description,
            number: this.number,
            // Mozilla
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            // Axios
            config: utils.toJSONObject(this.config),
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
          };
        }
      });
      var prototype$1 = AxiosError.prototype;
      var descriptors = {};
      [
        "ERR_BAD_OPTION_VALUE",
        "ERR_BAD_OPTION",
        "ECONNABORTED",
        "ETIMEDOUT",
        "ERR_NETWORK",
        "ERR_FR_TOO_MANY_REDIRECTS",
        "ERR_DEPRECATED",
        "ERR_BAD_RESPONSE",
        "ERR_BAD_REQUEST",
        "ERR_CANCELED",
        "ERR_NOT_SUPPORT",
        "ERR_INVALID_URL"
        // eslint-disable-next-line func-names
      ].forEach((code) => {
        descriptors[code] = { value: code };
      });
      Object.defineProperties(AxiosError, descriptors);
      Object.defineProperty(prototype$1, "isAxiosError", { value: true });
      AxiosError.from = (error, code, config, request, response, customProps) => {
        const axiosError = Object.create(prototype$1);
        utils.toFlatObject(error, axiosError, function filter(obj) {
          return obj !== Error.prototype;
        }, (prop) => {
          return prop !== "isAxiosError";
        });
        AxiosError.call(axiosError, error.message, code, config, request, response);
        axiosError.cause = error;
        axiosError.name = error.name;
        customProps && Object.assign(axiosError, customProps);
        return axiosError;
      };
      var httpAdapter = null;
      function isVisitable(thing) {
        return utils.isPlainObject(thing) || utils.isArray(thing);
      }
      function removeBrackets(key) {
        return utils.endsWith(key, "[]") ? key.slice(0, -2) : key;
      }
      function renderKey(path, key, dots) {
        if (!path)
          return key;
        return path.concat(key).map(function each(token, i) {
          token = removeBrackets(token);
          return !dots && i ? "[" + token + "]" : token;
        }).join(dots ? "." : "");
      }
      function isFlatArray(arr) {
        return utils.isArray(arr) && !arr.some(isVisitable);
      }
      var predicates = utils.toFlatObject(utils, {}, null, function filter(prop) {
        return /^is[A-Z]/.test(prop);
      });
      function toFormData(obj, formData, options) {
        if (!utils.isObject(obj)) {
          throw new TypeError("target must be an object");
        }
        formData = formData || new FormData();
        options = utils.toFlatObject(options, {
          metaTokens: true,
          dots: false,
          indexes: false
        }, false, function defined(option, source) {
          return !utils.isUndefined(source[option]);
        });
        const metaTokens = options.metaTokens;
        const visitor = options.visitor || defaultVisitor;
        const dots = options.dots;
        const indexes = options.indexes;
        const _Blob = options.Blob || typeof Blob !== "undefined" && Blob;
        const useBlob = _Blob && utils.isSpecCompliantForm(formData);
        if (!utils.isFunction(visitor)) {
          throw new TypeError("visitor must be a function");
        }
        function convertValue(value) {
          if (value === null)
            return "";
          if (utils.isDate(value)) {
            return value.toISOString();
          }
          if (!useBlob && utils.isBlob(value)) {
            throw new AxiosError("Blob is not supported. Use a Buffer instead.");
          }
          if (utils.isArrayBuffer(value) || utils.isTypedArray(value)) {
            return useBlob && typeof Blob === "function" ? new Blob([value]) : Buffer.from(value);
          }
          return value;
        }
        function defaultVisitor(value, key, path) {
          let arr = value;
          if (value && !path && typeof value === "object") {
            if (utils.endsWith(key, "{}")) {
              key = metaTokens ? key : key.slice(0, -2);
              value = JSON.stringify(value);
            } else if (utils.isArray(value) && isFlatArray(value) || (utils.isFileList(value) || utils.endsWith(key, "[]")) && (arr = utils.toArray(value))) {
              key = removeBrackets(key);
              arr.forEach(function each(el, index) {
                !(utils.isUndefined(el) || el === null) && formData.append(
                  // eslint-disable-next-line no-nested-ternary
                  indexes === true ? renderKey([key], index, dots) : indexes === null ? key : key + "[]",
                  convertValue(el)
                );
              });
              return false;
            }
          }
          if (isVisitable(value)) {
            return true;
          }
          formData.append(renderKey(path, key, dots), convertValue(value));
          return false;
        }
        const stack = [];
        const exposedHelpers = Object.assign(predicates, {
          defaultVisitor,
          convertValue,
          isVisitable
        });
        function build(value, path) {
          if (utils.isUndefined(value))
            return;
          if (stack.indexOf(value) !== -1) {
            throw Error("Circular reference detected in " + path.join("."));
          }
          stack.push(value);
          utils.forEach(value, function each(el, key) {
            const result = !(utils.isUndefined(el) || el === null) && visitor.call(
              formData,
              el,
              utils.isString(key) ? key.trim() : key,
              path,
              exposedHelpers
            );
            if (result === true) {
              build(el, path ? path.concat(key) : [key]);
            }
          });
          stack.pop();
        }
        if (!utils.isObject(obj)) {
          throw new TypeError("data must be an object");
        }
        build(obj);
        return formData;
      }
      function encode$1(str) {
        const charMap = {
          "!": "%21",
          "'": "%27",
          "(": "%28",
          ")": "%29",
          "~": "%7E",
          "%20": "+",
          "%00": "\0"
        };
        return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
          return charMap[match];
        });
      }
      function AxiosURLSearchParams(params, options) {
        this._pairs = [];
        params && toFormData(params, this, options);
      }
      var prototype = AxiosURLSearchParams.prototype;
      prototype.append = function append(name, value) {
        this._pairs.push([name, value]);
      };
      prototype.toString = function toString2(encoder) {
        const _encode = encoder ? function(value) {
          return encoder.call(this, value, encode$1);
        } : encode$1;
        return this._pairs.map(function each(pair) {
          return _encode(pair[0]) + "=" + _encode(pair[1]);
        }, "").join("&");
      };
      function encode(val) {
        return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
      }
      function buildURL(url, params, options) {
        if (!params) {
          return url;
        }
        const _encode = options && options.encode || encode;
        const serializeFn = options && options.serialize;
        let serializedParams;
        if (serializeFn) {
          serializedParams = serializeFn(params, options);
        } else {
          serializedParams = utils.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams(params, options).toString(_encode);
        }
        if (serializedParams) {
          const hashmarkIndex = url.indexOf("#");
          if (hashmarkIndex !== -1) {
            url = url.slice(0, hashmarkIndex);
          }
          url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
        }
        return url;
      }
      var InterceptorManager = class {
        constructor() {
          this.handlers = [];
        }
        /**
         * Add a new interceptor to the stack
         *
         * @param {Function} fulfilled The function to handle `then` for a `Promise`
         * @param {Function} rejected The function to handle `reject` for a `Promise`
         *
         * @return {Number} An ID used to remove interceptor later
         */
        use(fulfilled, rejected, options) {
          this.handlers.push({
            fulfilled,
            rejected,
            synchronous: options ? options.synchronous : false,
            runWhen: options ? options.runWhen : null
          });
          return this.handlers.length - 1;
        }
        /**
         * Remove an interceptor from the stack
         *
         * @param {Number} id The ID that was returned by `use`
         *
         * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
         */
        eject(id) {
          if (this.handlers[id]) {
            this.handlers[id] = null;
          }
        }
        /**
         * Clear all interceptors from the stack
         *
         * @returns {void}
         */
        clear() {
          if (this.handlers) {
            this.handlers = [];
          }
        }
        /**
         * Iterate over all the registered interceptors
         *
         * This method is particularly useful for skipping over any
         * interceptors that may have become `null` calling `eject`.
         *
         * @param {Function} fn The function to call for each interceptor
         *
         * @returns {void}
         */
        forEach(fn) {
          utils.forEach(this.handlers, function forEachHandler(h) {
            if (h !== null) {
              fn(h);
            }
          });
        }
      };
      var InterceptorManager$1 = InterceptorManager;
      var transitionalDefaults = {
        silentJSONParsing: true,
        forcedJSONParsing: true,
        clarifyTimeoutError: false
      };
      var URLSearchParams$1 = typeof URLSearchParams !== "undefined" ? URLSearchParams : AxiosURLSearchParams;
      var FormData$1 = typeof FormData !== "undefined" ? FormData : null;
      var Blob$1 = typeof Blob !== "undefined" ? Blob : null;
      var isStandardBrowserEnv = (() => {
        let product;
        if (typeof navigator !== "undefined" && ((product = navigator.product) === "ReactNative" || product === "NativeScript" || product === "NS")) {
          return false;
        }
        return typeof window !== "undefined" && typeof document !== "undefined";
      })();
      var isStandardBrowserWebWorkerEnv = (() => {
        return typeof WorkerGlobalScope !== "undefined" && // eslint-disable-next-line no-undef
        self instanceof WorkerGlobalScope && typeof self.importScripts === "function";
      })();
      var platform = {
        isBrowser: true,
        classes: {
          URLSearchParams: URLSearchParams$1,
          FormData: FormData$1,
          Blob: Blob$1
        },
        isStandardBrowserEnv,
        isStandardBrowserWebWorkerEnv,
        protocols: ["http", "https", "file", "blob", "url", "data"]
      };
      function toURLEncodedForm(data, options) {
        return toFormData(data, new platform.classes.URLSearchParams(), Object.assign({
          visitor: function(value, key, path, helpers) {
            if (platform.isNode && utils.isBuffer(value)) {
              this.append(key, value.toString("base64"));
              return false;
            }
            return helpers.defaultVisitor.apply(this, arguments);
          }
        }, options));
      }
      function parsePropPath(name) {
        return utils.matchAll(/\w+|\[(\w*)]/g, name).map((match) => {
          return match[0] === "[]" ? "" : match[1] || match[0];
        });
      }
      function arrayToObject(arr) {
        const obj = {};
        const keys = Object.keys(arr);
        let i;
        const len = keys.length;
        let key;
        for (i = 0; i < len; i++) {
          key = keys[i];
          obj[key] = arr[key];
        }
        return obj;
      }
      function formDataToJSON(formData) {
        function buildPath(path, value, target, index) {
          let name = path[index++];
          const isNumericKey = Number.isFinite(+name);
          const isLast = index >= path.length;
          name = !name && utils.isArray(target) ? target.length : name;
          if (isLast) {
            if (utils.hasOwnProp(target, name)) {
              target[name] = [target[name], value];
            } else {
              target[name] = value;
            }
            return !isNumericKey;
          }
          if (!target[name] || !utils.isObject(target[name])) {
            target[name] = [];
          }
          const result = buildPath(path, value, target[name], index);
          if (result && utils.isArray(target[name])) {
            target[name] = arrayToObject(target[name]);
          }
          return !isNumericKey;
        }
        if (utils.isFormData(formData) && utils.isFunction(formData.entries)) {
          const obj = {};
          utils.forEachEntry(formData, (name, value) => {
            buildPath(parsePropPath(name), value, obj, 0);
          });
          return obj;
        }
        return null;
      }
      var DEFAULT_CONTENT_TYPE = {
        "Content-Type": void 0
      };
      function stringifySafely(rawValue, parser, encoder) {
        if (utils.isString(rawValue)) {
          try {
            (parser || JSON.parse)(rawValue);
            return utils.trim(rawValue);
          } catch (e) {
            if (e.name !== "SyntaxError") {
              throw e;
            }
          }
        }
        return (encoder || JSON.stringify)(rawValue);
      }
      var defaults = {
        transitional: transitionalDefaults,
        adapter: ["xhr", "http"],
        transformRequest: [function transformRequest(data, headers) {
          const contentType = headers.getContentType() || "";
          const hasJSONContentType = contentType.indexOf("application/json") > -1;
          const isObjectPayload = utils.isObject(data);
          if (isObjectPayload && utils.isHTMLForm(data)) {
            data = new FormData(data);
          }
          const isFormData2 = utils.isFormData(data);
          if (isFormData2) {
            if (!hasJSONContentType) {
              return data;
            }
            return hasJSONContentType ? JSON.stringify(formDataToJSON(data)) : data;
          }
          if (utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
            return data;
          }
          if (utils.isArrayBufferView(data)) {
            return data.buffer;
          }
          if (utils.isURLSearchParams(data)) {
            headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
            return data.toString();
          }
          let isFileList2;
          if (isObjectPayload) {
            if (contentType.indexOf("application/x-www-form-urlencoded") > -1) {
              return toURLEncodedForm(data, this.formSerializer).toString();
            }
            if ((isFileList2 = utils.isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
              const _FormData = this.env && this.env.FormData;
              return toFormData(
                isFileList2 ? { "files[]": data } : data,
                _FormData && new _FormData(),
                this.formSerializer
              );
            }
          }
          if (isObjectPayload || hasJSONContentType) {
            headers.setContentType("application/json", false);
            return stringifySafely(data);
          }
          return data;
        }],
        transformResponse: [function transformResponse(data) {
          const transitional = this.transitional || defaults.transitional;
          const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
          const JSONRequested = this.responseType === "json";
          if (data && utils.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
            const silentJSONParsing = transitional && transitional.silentJSONParsing;
            const strictJSONParsing = !silentJSONParsing && JSONRequested;
            try {
              return JSON.parse(data);
            } catch (e) {
              if (strictJSONParsing) {
                if (e.name === "SyntaxError") {
                  throw AxiosError.from(e, AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
                }
                throw e;
              }
            }
          }
          return data;
        }],
        /**
         * A timeout in milliseconds to abort a request. If set to 0 (default) a
         * timeout is not created.
         */
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        env: {
          FormData: platform.classes.FormData,
          Blob: platform.classes.Blob
        },
        validateStatus: function validateStatus(status) {
          return status >= 200 && status < 300;
        },
        headers: {
          common: {
            "Accept": "application/json, text/plain, */*"
          }
        }
      };
      utils.forEach(["delete", "get", "head"], function forEachMethodNoData(method) {
        defaults.headers[method] = {};
      });
      utils.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
        defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
      });
      var defaults$1 = defaults;
      var ignoreDuplicateOf = utils.toObjectSet([
        "age",
        "authorization",
        "content-length",
        "content-type",
        "etag",
        "expires",
        "from",
        "host",
        "if-modified-since",
        "if-unmodified-since",
        "last-modified",
        "location",
        "max-forwards",
        "proxy-authorization",
        "referer",
        "retry-after",
        "user-agent"
      ]);
      var parseHeaders = (rawHeaders) => {
        const parsed = {};
        let key;
        let val;
        let i;
        rawHeaders && rawHeaders.split("\n").forEach(function parser(line) {
          i = line.indexOf(":");
          key = line.substring(0, i).trim().toLowerCase();
          val = line.substring(i + 1).trim();
          if (!key || parsed[key] && ignoreDuplicateOf[key]) {
            return;
          }
          if (key === "set-cookie") {
            if (parsed[key]) {
              parsed[key].push(val);
            } else {
              parsed[key] = [val];
            }
          } else {
            parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
          }
        });
        return parsed;
      };
      var $internals = Symbol("internals");
      function normalizeHeader(header) {
        return header && String(header).trim().toLowerCase();
      }
      function normalizeValue(value) {
        if (value === false || value == null) {
          return value;
        }
        return utils.isArray(value) ? value.map(normalizeValue) : String(value);
      }
      function parseTokens(str) {
        const tokens = /* @__PURE__ */ Object.create(null);
        const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
        let match;
        while (match = tokensRE.exec(str)) {
          tokens[match[1]] = match[2];
        }
        return tokens;
      }
      var isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
      function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
        if (utils.isFunction(filter)) {
          return filter.call(this, value, header);
        }
        if (isHeaderNameFilter) {
          value = header;
        }
        if (!utils.isString(value))
          return;
        if (utils.isString(filter)) {
          return value.indexOf(filter) !== -1;
        }
        if (utils.isRegExp(filter)) {
          return filter.test(value);
        }
      }
      function formatHeader(header) {
        return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
          return char.toUpperCase() + str;
        });
      }
      function buildAccessors(obj, header) {
        const accessorName = utils.toCamelCase(" " + header);
        ["get", "set", "has"].forEach((methodName) => {
          Object.defineProperty(obj, methodName + accessorName, {
            value: function(arg1, arg2, arg3) {
              return this[methodName].call(this, header, arg1, arg2, arg3);
            },
            configurable: true
          });
        });
      }
      var AxiosHeaders = class {
        constructor(headers) {
          headers && this.set(headers);
        }
        set(header, valueOrRewrite, rewrite) {
          const self2 = this;
          function setHeader(_value, _header, _rewrite) {
            const lHeader = normalizeHeader(_header);
            if (!lHeader) {
              throw new Error("header name must be a non-empty string");
            }
            const key = utils.findKey(self2, lHeader);
            if (!key || self2[key] === void 0 || _rewrite === true || _rewrite === void 0 && self2[key] !== false) {
              self2[key || _header] = normalizeValue(_value);
            }
          }
          const setHeaders = (headers, _rewrite) => utils.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));
          if (utils.isPlainObject(header) || header instanceof this.constructor) {
            setHeaders(header, valueOrRewrite);
          } else if (utils.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
            setHeaders(parseHeaders(header), valueOrRewrite);
          } else {
            header != null && setHeader(valueOrRewrite, header, rewrite);
          }
          return this;
        }
        get(header, parser) {
          header = normalizeHeader(header);
          if (header) {
            const key = utils.findKey(this, header);
            if (key) {
              const value = this[key];
              if (!parser) {
                return value;
              }
              if (parser === true) {
                return parseTokens(value);
              }
              if (utils.isFunction(parser)) {
                return parser.call(this, value, key);
              }
              if (utils.isRegExp(parser)) {
                return parser.exec(value);
              }
              throw new TypeError("parser must be boolean|regexp|function");
            }
          }
        }
        has(header, matcher) {
          header = normalizeHeader(header);
          if (header) {
            const key = utils.findKey(this, header);
            return !!(key && this[key] !== void 0 && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
          }
          return false;
        }
        delete(header, matcher) {
          const self2 = this;
          let deleted = false;
          function deleteHeader(_header) {
            _header = normalizeHeader(_header);
            if (_header) {
              const key = utils.findKey(self2, _header);
              if (key && (!matcher || matchHeaderValue(self2, self2[key], key, matcher))) {
                delete self2[key];
                deleted = true;
              }
            }
          }
          if (utils.isArray(header)) {
            header.forEach(deleteHeader);
          } else {
            deleteHeader(header);
          }
          return deleted;
        }
        clear(matcher) {
          const keys = Object.keys(this);
          let i = keys.length;
          let deleted = false;
          while (i--) {
            const key = keys[i];
            if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
              delete this[key];
              deleted = true;
            }
          }
          return deleted;
        }
        normalize(format) {
          const self2 = this;
          const headers = {};
          utils.forEach(this, (value, header) => {
            const key = utils.findKey(headers, header);
            if (key) {
              self2[key] = normalizeValue(value);
              delete self2[header];
              return;
            }
            const normalized = format ? formatHeader(header) : String(header).trim();
            if (normalized !== header) {
              delete self2[header];
            }
            self2[normalized] = normalizeValue(value);
            headers[normalized] = true;
          });
          return this;
        }
        concat(...targets) {
          return this.constructor.concat(this, ...targets);
        }
        toJSON(asStrings) {
          const obj = /* @__PURE__ */ Object.create(null);
          utils.forEach(this, (value, header) => {
            value != null && value !== false && (obj[header] = asStrings && utils.isArray(value) ? value.join(", ") : value);
          });
          return obj;
        }
        [Symbol.iterator]() {
          return Object.entries(this.toJSON())[Symbol.iterator]();
        }
        toString() {
          return Object.entries(this.toJSON()).map(([header, value]) => header + ": " + value).join("\n");
        }
        get [Symbol.toStringTag]() {
          return "AxiosHeaders";
        }
        static from(thing) {
          return thing instanceof this ? thing : new this(thing);
        }
        static concat(first, ...targets) {
          const computed = new this(first);
          targets.forEach((target) => computed.set(target));
          return computed;
        }
        static accessor(header) {
          const internals = this[$internals] = this[$internals] = {
            accessors: {}
          };
          const accessors = internals.accessors;
          const prototype2 = this.prototype;
          function defineAccessor(_header) {
            const lHeader = normalizeHeader(_header);
            if (!accessors[lHeader]) {
              buildAccessors(prototype2, _header);
              accessors[lHeader] = true;
            }
          }
          utils.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
          return this;
        }
      };
      AxiosHeaders.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
      utils.freezeMethods(AxiosHeaders.prototype);
      utils.freezeMethods(AxiosHeaders);
      var AxiosHeaders$1 = AxiosHeaders;
      function transformData(fns, response) {
        const config = this || defaults$1;
        const context = response || config;
        const headers = AxiosHeaders$1.from(context.headers);
        let data = context.data;
        utils.forEach(fns, function transform(fn) {
          data = fn.call(config, data, headers.normalize(), response ? response.status : void 0);
        });
        headers.normalize();
        return data;
      }
      function isCancel(value) {
        return !!(value && value.__CANCEL__);
      }
      function CanceledError(message, config, request) {
        AxiosError.call(this, message == null ? "canceled" : message, AxiosError.ERR_CANCELED, config, request);
        this.name = "CanceledError";
      }
      utils.inherits(CanceledError, AxiosError, {
        __CANCEL__: true
      });
      function settle(resolve, reject, response) {
        const validateStatus = response.config.validateStatus;
        if (!response.status || !validateStatus || validateStatus(response.status)) {
          resolve(response);
        } else {
          reject(new AxiosError(
            "Request failed with status code " + response.status,
            [AxiosError.ERR_BAD_REQUEST, AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
            response.config,
            response.request,
            response
          ));
        }
      }
      var cookies = platform.isStandardBrowserEnv ? (
        // Standard browser envs support document.cookie
        function standardBrowserEnv() {
          return {
            write: function write(name, value, expires, path, domain, secure) {
              const cookie = [];
              cookie.push(name + "=" + encodeURIComponent(value));
              if (utils.isNumber(expires)) {
                cookie.push("expires=" + new Date(expires).toGMTString());
              }
              if (utils.isString(path)) {
                cookie.push("path=" + path);
              }
              if (utils.isString(domain)) {
                cookie.push("domain=" + domain);
              }
              if (secure === true) {
                cookie.push("secure");
              }
              document.cookie = cookie.join("; ");
            },
            read: function read(name) {
              const match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
              return match ? decodeURIComponent(match[3]) : null;
            },
            remove: function remove(name) {
              this.write(name, "", Date.now() - 864e5);
            }
          };
        }()
      ) : (
        // Non standard browser env (web workers, react-native) lack needed support.
        function nonStandardBrowserEnv() {
          return {
            write: function write() {
            },
            read: function read() {
              return null;
            },
            remove: function remove() {
            }
          };
        }()
      );
      function isAbsoluteURL(url) {
        return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
      }
      function combineURLs(baseURL, relativeURL) {
        return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
      }
      function buildFullPath(baseURL, requestedURL) {
        if (baseURL && !isAbsoluteURL(requestedURL)) {
          return combineURLs(baseURL, requestedURL);
        }
        return requestedURL;
      }
      var isURLSameOrigin = platform.isStandardBrowserEnv ? (
        // Standard browser envs have full support of the APIs needed to test
        // whether the request URL is of the same origin as current location.
        function standardBrowserEnv() {
          const msie = /(msie|trident)/i.test(navigator.userAgent);
          const urlParsingNode = document.createElement("a");
          let originURL;
          function resolveURL(url) {
            let href = url;
            if (msie) {
              urlParsingNode.setAttribute("href", href);
              href = urlParsingNode.href;
            }
            urlParsingNode.setAttribute("href", href);
            return {
              href: urlParsingNode.href,
              protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
              host: urlParsingNode.host,
              search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
              hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
              hostname: urlParsingNode.hostname,
              port: urlParsingNode.port,
              pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
            };
          }
          originURL = resolveURL(window.location.href);
          return function isURLSameOrigin2(requestURL) {
            const parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
            return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
          };
        }()
      ) : (
        // Non standard browser envs (web workers, react-native) lack needed support.
        function nonStandardBrowserEnv() {
          return function isURLSameOrigin2() {
            return true;
          };
        }()
      );
      function parseProtocol(url) {
        const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
        return match && match[1] || "";
      }
      function speedometer(samplesCount, min) {
        samplesCount = samplesCount || 10;
        const bytes = new Array(samplesCount);
        const timestamps = new Array(samplesCount);
        let head = 0;
        let tail = 0;
        let firstSampleTS;
        min = min !== void 0 ? min : 1e3;
        return function push(chunkLength) {
          const now = Date.now();
          const startedAt = timestamps[tail];
          if (!firstSampleTS) {
            firstSampleTS = now;
          }
          bytes[head] = chunkLength;
          timestamps[head] = now;
          let i = tail;
          let bytesCount = 0;
          while (i !== head) {
            bytesCount += bytes[i++];
            i = i % samplesCount;
          }
          head = (head + 1) % samplesCount;
          if (head === tail) {
            tail = (tail + 1) % samplesCount;
          }
          if (now - firstSampleTS < min) {
            return;
          }
          const passed = startedAt && now - startedAt;
          return passed ? Math.round(bytesCount * 1e3 / passed) : void 0;
        };
      }
      function progressEventReducer(listener, isDownloadStream) {
        let bytesNotified = 0;
        const _speedometer = speedometer(50, 250);
        return (e) => {
          const loaded = e.loaded;
          const total = e.lengthComputable ? e.total : void 0;
          const progressBytes = loaded - bytesNotified;
          const rate = _speedometer(progressBytes);
          const inRange = loaded <= total;
          bytesNotified = loaded;
          const data = {
            loaded,
            total,
            progress: total ? loaded / total : void 0,
            bytes: progressBytes,
            rate: rate ? rate : void 0,
            estimated: rate && total && inRange ? (total - loaded) / rate : void 0,
            event: e
          };
          data[isDownloadStream ? "download" : "upload"] = true;
          listener(data);
        };
      }
      var isXHRAdapterSupported = typeof XMLHttpRequest !== "undefined";
      var xhrAdapter = isXHRAdapterSupported && function(config) {
        return new Promise(function dispatchXhrRequest(resolve, reject) {
          let requestData = config.data;
          const requestHeaders = AxiosHeaders$1.from(config.headers).normalize();
          const responseType = config.responseType;
          let onCanceled;
          function done() {
            if (config.cancelToken) {
              config.cancelToken.unsubscribe(onCanceled);
            }
            if (config.signal) {
              config.signal.removeEventListener("abort", onCanceled);
            }
          }
          if (utils.isFormData(requestData)) {
            if (platform.isStandardBrowserEnv || platform.isStandardBrowserWebWorkerEnv) {
              requestHeaders.setContentType(false);
            } else {
              requestHeaders.setContentType("multipart/form-data;", false);
            }
          }
          let request = new XMLHttpRequest();
          if (config.auth) {
            const username = config.auth.username || "";
            const password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
            requestHeaders.set("Authorization", "Basic " + btoa(username + ":" + password));
          }
          const fullPath = buildFullPath(config.baseURL, config.url);
          request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
          request.timeout = config.timeout;
          function onloadend() {
            if (!request) {
              return;
            }
            const responseHeaders = AxiosHeaders$1.from(
              "getAllResponseHeaders" in request && request.getAllResponseHeaders()
            );
            const responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
            const response = {
              data: responseData,
              status: request.status,
              statusText: request.statusText,
              headers: responseHeaders,
              config,
              request
            };
            settle(function _resolve(value) {
              resolve(value);
              done();
            }, function _reject(err) {
              reject(err);
              done();
            }, response);
            request = null;
          }
          if ("onloadend" in request) {
            request.onloadend = onloadend;
          } else {
            request.onreadystatechange = function handleLoad() {
              if (!request || request.readyState !== 4) {
                return;
              }
              if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
                return;
              }
              setTimeout(onloadend);
            };
          }
          request.onabort = function handleAbort() {
            if (!request) {
              return;
            }
            reject(new AxiosError("Request aborted", AxiosError.ECONNABORTED, config, request));
            request = null;
          };
          request.onerror = function handleError() {
            reject(new AxiosError("Network Error", AxiosError.ERR_NETWORK, config, request));
            request = null;
          };
          request.ontimeout = function handleTimeout() {
            let timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
            const transitional = config.transitional || transitionalDefaults;
            if (config.timeoutErrorMessage) {
              timeoutErrorMessage = config.timeoutErrorMessage;
            }
            reject(new AxiosError(
              timeoutErrorMessage,
              transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED,
              config,
              request
            ));
            request = null;
          };
          if (platform.isStandardBrowserEnv) {
            const xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName && cookies.read(config.xsrfCookieName);
            if (xsrfValue) {
              requestHeaders.set(config.xsrfHeaderName, xsrfValue);
            }
          }
          requestData === void 0 && requestHeaders.setContentType(null);
          if ("setRequestHeader" in request) {
            utils.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
              request.setRequestHeader(key, val);
            });
          }
          if (!utils.isUndefined(config.withCredentials)) {
            request.withCredentials = !!config.withCredentials;
          }
          if (responseType && responseType !== "json") {
            request.responseType = config.responseType;
          }
          if (typeof config.onDownloadProgress === "function") {
            request.addEventListener("progress", progressEventReducer(config.onDownloadProgress, true));
          }
          if (typeof config.onUploadProgress === "function" && request.upload) {
            request.upload.addEventListener("progress", progressEventReducer(config.onUploadProgress));
          }
          if (config.cancelToken || config.signal) {
            onCanceled = (cancel) => {
              if (!request) {
                return;
              }
              reject(!cancel || cancel.type ? new CanceledError(null, config, request) : cancel);
              request.abort();
              request = null;
            };
            config.cancelToken && config.cancelToken.subscribe(onCanceled);
            if (config.signal) {
              config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
            }
          }
          const protocol = parseProtocol(fullPath);
          if (protocol && platform.protocols.indexOf(protocol) === -1) {
            reject(new AxiosError("Unsupported protocol " + protocol + ":", AxiosError.ERR_BAD_REQUEST, config));
            return;
          }
          request.send(requestData || null);
        });
      };
      var knownAdapters = {
        http: httpAdapter,
        xhr: xhrAdapter
      };
      utils.forEach(knownAdapters, (fn, value) => {
        if (fn) {
          try {
            Object.defineProperty(fn, "name", { value });
          } catch (e) {
          }
          Object.defineProperty(fn, "adapterName", { value });
        }
      });
      var adapters = {
        getAdapter: (adapters2) => {
          adapters2 = utils.isArray(adapters2) ? adapters2 : [adapters2];
          const { length } = adapters2;
          let nameOrAdapter;
          let adapter;
          for (let i = 0; i < length; i++) {
            nameOrAdapter = adapters2[i];
            if (adapter = utils.isString(nameOrAdapter) ? knownAdapters[nameOrAdapter.toLowerCase()] : nameOrAdapter) {
              break;
            }
          }
          if (!adapter) {
            if (adapter === false) {
              throw new AxiosError(
                `Adapter ${nameOrAdapter} is not supported by the environment`,
                "ERR_NOT_SUPPORT"
              );
            }
            throw new Error(
              utils.hasOwnProp(knownAdapters, nameOrAdapter) ? `Adapter '${nameOrAdapter}' is not available in the build` : `Unknown adapter '${nameOrAdapter}'`
            );
          }
          if (!utils.isFunction(adapter)) {
            throw new TypeError("adapter is not a function");
          }
          return adapter;
        },
        adapters: knownAdapters
      };
      function throwIfCancellationRequested(config) {
        if (config.cancelToken) {
          config.cancelToken.throwIfRequested();
        }
        if (config.signal && config.signal.aborted) {
          throw new CanceledError(null, config);
        }
      }
      function dispatchRequest(config) {
        throwIfCancellationRequested(config);
        config.headers = AxiosHeaders$1.from(config.headers);
        config.data = transformData.call(
          config,
          config.transformRequest
        );
        if (["post", "put", "patch"].indexOf(config.method) !== -1) {
          config.headers.setContentType("application/x-www-form-urlencoded", false);
        }
        const adapter = adapters.getAdapter(config.adapter || defaults$1.adapter);
        return adapter(config).then(function onAdapterResolution(response) {
          throwIfCancellationRequested(config);
          response.data = transformData.call(
            config,
            config.transformResponse,
            response
          );
          response.headers = AxiosHeaders$1.from(response.headers);
          return response;
        }, function onAdapterRejection(reason) {
          if (!isCancel(reason)) {
            throwIfCancellationRequested(config);
            if (reason && reason.response) {
              reason.response.data = transformData.call(
                config,
                config.transformResponse,
                reason.response
              );
              reason.response.headers = AxiosHeaders$1.from(reason.response.headers);
            }
          }
          return Promise.reject(reason);
        });
      }
      var headersToObject = (thing) => thing instanceof AxiosHeaders$1 ? thing.toJSON() : thing;
      function mergeConfig(config1, config2) {
        config2 = config2 || {};
        const config = {};
        function getMergedValue(target, source, caseless) {
          if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
            return utils.merge.call({ caseless }, target, source);
          } else if (utils.isPlainObject(source)) {
            return utils.merge({}, source);
          } else if (utils.isArray(source)) {
            return source.slice();
          }
          return source;
        }
        function mergeDeepProperties(a, b, caseless) {
          if (!utils.isUndefined(b)) {
            return getMergedValue(a, b, caseless);
          } else if (!utils.isUndefined(a)) {
            return getMergedValue(void 0, a, caseless);
          }
        }
        function valueFromConfig2(a, b) {
          if (!utils.isUndefined(b)) {
            return getMergedValue(void 0, b);
          }
        }
        function defaultToConfig2(a, b) {
          if (!utils.isUndefined(b)) {
            return getMergedValue(void 0, b);
          } else if (!utils.isUndefined(a)) {
            return getMergedValue(void 0, a);
          }
        }
        function mergeDirectKeys(a, b, prop) {
          if (prop in config2) {
            return getMergedValue(a, b);
          } else if (prop in config1) {
            return getMergedValue(void 0, a);
          }
        }
        const mergeMap = {
          url: valueFromConfig2,
          method: valueFromConfig2,
          data: valueFromConfig2,
          baseURL: defaultToConfig2,
          transformRequest: defaultToConfig2,
          transformResponse: defaultToConfig2,
          paramsSerializer: defaultToConfig2,
          timeout: defaultToConfig2,
          timeoutMessage: defaultToConfig2,
          withCredentials: defaultToConfig2,
          adapter: defaultToConfig2,
          responseType: defaultToConfig2,
          xsrfCookieName: defaultToConfig2,
          xsrfHeaderName: defaultToConfig2,
          onUploadProgress: defaultToConfig2,
          onDownloadProgress: defaultToConfig2,
          decompress: defaultToConfig2,
          maxContentLength: defaultToConfig2,
          maxBodyLength: defaultToConfig2,
          beforeRedirect: defaultToConfig2,
          transport: defaultToConfig2,
          httpAgent: defaultToConfig2,
          httpsAgent: defaultToConfig2,
          cancelToken: defaultToConfig2,
          socketPath: defaultToConfig2,
          responseEncoding: defaultToConfig2,
          validateStatus: mergeDirectKeys,
          headers: (a, b) => mergeDeepProperties(headersToObject(a), headersToObject(b), true)
        };
        utils.forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
          const merge2 = mergeMap[prop] || mergeDeepProperties;
          const configValue = merge2(config1[prop], config2[prop], prop);
          utils.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config[prop] = configValue);
        });
        return config;
      }
      var VERSION = "1.4.0";
      var validators$1 = {};
      ["object", "boolean", "number", "function", "string", "symbol"].forEach((type, i) => {
        validators$1[type] = function validator2(thing) {
          return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
        };
      });
      var deprecatedWarnings = {};
      validators$1.transitional = function transitional(validator2, version, message) {
        function formatMessage(opt, desc) {
          return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
        }
        return (value, opt, opts) => {
          if (validator2 === false) {
            throw new AxiosError(
              formatMessage(opt, " has been removed" + (version ? " in " + version : "")),
              AxiosError.ERR_DEPRECATED
            );
          }
          if (version && !deprecatedWarnings[opt]) {
            deprecatedWarnings[opt] = true;
            console.warn(
              formatMessage(
                opt,
                " has been deprecated since v" + version + " and will be removed in the near future"
              )
            );
          }
          return validator2 ? validator2(value, opt, opts) : true;
        };
      };
      function assertOptions(options, schema, allowUnknown) {
        if (typeof options !== "object") {
          throw new AxiosError("options must be an object", AxiosError.ERR_BAD_OPTION_VALUE);
        }
        const keys = Object.keys(options);
        let i = keys.length;
        while (i-- > 0) {
          const opt = keys[i];
          const validator2 = schema[opt];
          if (validator2) {
            const value = options[opt];
            const result = value === void 0 || validator2(value, opt, options);
            if (result !== true) {
              throw new AxiosError("option " + opt + " must be " + result, AxiosError.ERR_BAD_OPTION_VALUE);
            }
            continue;
          }
          if (allowUnknown !== true) {
            throw new AxiosError("Unknown option " + opt, AxiosError.ERR_BAD_OPTION);
          }
        }
      }
      var validator = {
        assertOptions,
        validators: validators$1
      };
      var validators = validator.validators;
      var Axios = class {
        constructor(instanceConfig) {
          this.defaults = instanceConfig;
          this.interceptors = {
            request: new InterceptorManager$1(),
            response: new InterceptorManager$1()
          };
        }
        /**
         * Dispatch a request
         *
         * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
         * @param {?Object} config
         *
         * @returns {Promise} The Promise to be fulfilled
         */
        request(configOrUrl, config) {
          if (typeof configOrUrl === "string") {
            config = config || {};
            config.url = configOrUrl;
          } else {
            config = configOrUrl || {};
          }
          config = mergeConfig(this.defaults, config);
          const { transitional, paramsSerializer, headers } = config;
          if (transitional !== void 0) {
            validator.assertOptions(transitional, {
              silentJSONParsing: validators.transitional(validators.boolean),
              forcedJSONParsing: validators.transitional(validators.boolean),
              clarifyTimeoutError: validators.transitional(validators.boolean)
            }, false);
          }
          if (paramsSerializer != null) {
            if (utils.isFunction(paramsSerializer)) {
              config.paramsSerializer = {
                serialize: paramsSerializer
              };
            } else {
              validator.assertOptions(paramsSerializer, {
                encode: validators.function,
                serialize: validators.function
              }, true);
            }
          }
          config.method = (config.method || this.defaults.method || "get").toLowerCase();
          let contextHeaders;
          contextHeaders = headers && utils.merge(
            headers.common,
            headers[config.method]
          );
          contextHeaders && utils.forEach(
            ["delete", "get", "head", "post", "put", "patch", "common"],
            (method) => {
              delete headers[method];
            }
          );
          config.headers = AxiosHeaders$1.concat(contextHeaders, headers);
          const requestInterceptorChain = [];
          let synchronousRequestInterceptors = true;
          this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
            if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
              return;
            }
            synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
            requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
          });
          const responseInterceptorChain = [];
          this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
            responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
          });
          let promise;
          let i = 0;
          let len;
          if (!synchronousRequestInterceptors) {
            const chain = [dispatchRequest.bind(this), void 0];
            chain.unshift.apply(chain, requestInterceptorChain);
            chain.push.apply(chain, responseInterceptorChain);
            len = chain.length;
            promise = Promise.resolve(config);
            while (i < len) {
              promise = promise.then(chain[i++], chain[i++]);
            }
            return promise;
          }
          len = requestInterceptorChain.length;
          let newConfig = config;
          i = 0;
          while (i < len) {
            const onFulfilled = requestInterceptorChain[i++];
            const onRejected = requestInterceptorChain[i++];
            try {
              newConfig = onFulfilled(newConfig);
            } catch (error) {
              onRejected.call(this, error);
              break;
            }
          }
          try {
            promise = dispatchRequest.call(this, newConfig);
          } catch (error) {
            return Promise.reject(error);
          }
          i = 0;
          len = responseInterceptorChain.length;
          while (i < len) {
            promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
          }
          return promise;
        }
        getUri(config) {
          config = mergeConfig(this.defaults, config);
          const fullPath = buildFullPath(config.baseURL, config.url);
          return buildURL(fullPath, config.params, config.paramsSerializer);
        }
      };
      utils.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
        Axios.prototype[method] = function(url, config) {
          return this.request(mergeConfig(config || {}, {
            method,
            url,
            data: (config || {}).data
          }));
        };
      });
      utils.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
        function generateHTTPMethod(isForm) {
          return function httpMethod(url, data, config) {
            return this.request(mergeConfig(config || {}, {
              method,
              headers: isForm ? {
                "Content-Type": "multipart/form-data"
              } : {},
              url,
              data
            }));
          };
        }
        Axios.prototype[method] = generateHTTPMethod();
        Axios.prototype[method + "Form"] = generateHTTPMethod(true);
      });
      var Axios$1 = Axios;
      var CancelToken = class _CancelToken {
        constructor(executor) {
          if (typeof executor !== "function") {
            throw new TypeError("executor must be a function.");
          }
          let resolvePromise;
          this.promise = new Promise(function promiseExecutor(resolve) {
            resolvePromise = resolve;
          });
          const token = this;
          this.promise.then((cancel) => {
            if (!token._listeners)
              return;
            let i = token._listeners.length;
            while (i-- > 0) {
              token._listeners[i](cancel);
            }
            token._listeners = null;
          });
          this.promise.then = (onfulfilled) => {
            let _resolve;
            const promise = new Promise((resolve) => {
              token.subscribe(resolve);
              _resolve = resolve;
            }).then(onfulfilled);
            promise.cancel = function reject() {
              token.unsubscribe(_resolve);
            };
            return promise;
          };
          executor(function cancel(message, config, request) {
            if (token.reason) {
              return;
            }
            token.reason = new CanceledError(message, config, request);
            resolvePromise(token.reason);
          });
        }
        /**
         * Throws a `CanceledError` if cancellation has been requested.
         */
        throwIfRequested() {
          if (this.reason) {
            throw this.reason;
          }
        }
        /**
         * Subscribe to the cancel signal
         */
        subscribe(listener) {
          if (this.reason) {
            listener(this.reason);
            return;
          }
          if (this._listeners) {
            this._listeners.push(listener);
          } else {
            this._listeners = [listener];
          }
        }
        /**
         * Unsubscribe from the cancel signal
         */
        unsubscribe(listener) {
          if (!this._listeners) {
            return;
          }
          const index = this._listeners.indexOf(listener);
          if (index !== -1) {
            this._listeners.splice(index, 1);
          }
        }
        /**
         * Returns an object that contains a new `CancelToken` and a function that, when called,
         * cancels the `CancelToken`.
         */
        static source() {
          let cancel;
          const token = new _CancelToken(function executor(c) {
            cancel = c;
          });
          return {
            token,
            cancel
          };
        }
      };
      var CancelToken$1 = CancelToken;
      function spread(callback) {
        return function wrap(arr) {
          return callback.apply(null, arr);
        };
      }
      function isAxiosError(payload) {
        return utils.isObject(payload) && payload.isAxiosError === true;
      }
      var HttpStatusCode = {
        Continue: 100,
        SwitchingProtocols: 101,
        Processing: 102,
        EarlyHints: 103,
        Ok: 200,
        Created: 201,
        Accepted: 202,
        NonAuthoritativeInformation: 203,
        NoContent: 204,
        ResetContent: 205,
        PartialContent: 206,
        MultiStatus: 207,
        AlreadyReported: 208,
        ImUsed: 226,
        MultipleChoices: 300,
        MovedPermanently: 301,
        Found: 302,
        SeeOther: 303,
        NotModified: 304,
        UseProxy: 305,
        Unused: 306,
        TemporaryRedirect: 307,
        PermanentRedirect: 308,
        BadRequest: 400,
        Unauthorized: 401,
        PaymentRequired: 402,
        Forbidden: 403,
        NotFound: 404,
        MethodNotAllowed: 405,
        NotAcceptable: 406,
        ProxyAuthenticationRequired: 407,
        RequestTimeout: 408,
        Conflict: 409,
        Gone: 410,
        LengthRequired: 411,
        PreconditionFailed: 412,
        PayloadTooLarge: 413,
        UriTooLong: 414,
        UnsupportedMediaType: 415,
        RangeNotSatisfiable: 416,
        ExpectationFailed: 417,
        ImATeapot: 418,
        MisdirectedRequest: 421,
        UnprocessableEntity: 422,
        Locked: 423,
        FailedDependency: 424,
        TooEarly: 425,
        UpgradeRequired: 426,
        PreconditionRequired: 428,
        TooManyRequests: 429,
        RequestHeaderFieldsTooLarge: 431,
        UnavailableForLegalReasons: 451,
        InternalServerError: 500,
        NotImplemented: 501,
        BadGateway: 502,
        ServiceUnavailable: 503,
        GatewayTimeout: 504,
        HttpVersionNotSupported: 505,
        VariantAlsoNegotiates: 506,
        InsufficientStorage: 507,
        LoopDetected: 508,
        NotExtended: 510,
        NetworkAuthenticationRequired: 511
      };
      Object.entries(HttpStatusCode).forEach(([key, value]) => {
        HttpStatusCode[value] = key;
      });
      var HttpStatusCode$1 = HttpStatusCode;
      function createInstance(defaultConfig) {
        const context = new Axios$1(defaultConfig);
        const instance = bind(Axios$1.prototype.request, context);
        utils.extend(instance, Axios$1.prototype, context, { allOwnKeys: true });
        utils.extend(instance, context, null, { allOwnKeys: true });
        instance.create = function create(instanceConfig) {
          return createInstance(mergeConfig(defaultConfig, instanceConfig));
        };
        return instance;
      }
      var axios = createInstance(defaults$1);
      axios.Axios = Axios$1;
      axios.CanceledError = CanceledError;
      axios.CancelToken = CancelToken$1;
      axios.isCancel = isCancel;
      axios.VERSION = VERSION;
      axios.toFormData = toFormData;
      axios.AxiosError = AxiosError;
      axios.Cancel = axios.CanceledError;
      axios.all = function all(promises) {
        return Promise.all(promises);
      };
      axios.spread = spread;
      axios.isAxiosError = isAxiosError;
      axios.mergeConfig = mergeConfig;
      axios.AxiosHeaders = AxiosHeaders$1;
      axios.formToJSON = (thing) => formDataToJSON(utils.isHTMLForm(thing) ? new FormData(thing) : thing);
      axios.HttpStatusCode = HttpStatusCode$1;
      axios.default = axios;
      module.exports = axios;
    }
  });

  // task/dewu.js
  var require_dewu = __commonJS({
    "task/dewu.js"() {
      var axios = require_axios();
      axios(
        {
          url: "https://app.dewu.com/hacking-game-center/v1/sign/sign?sign=fe26befc49444d362c8f17463630bdba",
          headers: {
            "Host": "app.dewu.com",
            "isRoot": 0,
            "appid": "h5",
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148/duapp/5.19.1",
            "deviceTrait": "iPhone",
            "cookieToken": "d41d8cd9|169462840|1689724101|292ae55792ddc816",
            "emu": 0,
            "isProxy": 0,
            "Cookie": "duToken=d41d8cd9|169462840|1689724101|292ae55792ddc816;  sajssdk_2015_cross_new_user=1;  sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22189d5930d2d45c-06140436c82a23c-1b3d1a3b-370944-189d5930d2e19e8%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMTg5ZDU5MzBkMmQ0NWMtMDYxNDA0MzZjODJhMjNjLTFiM2QxYTNiLTM3MDk0NC0xODlkNTkzMGQyZTE5ZTgifQ%3D%3D%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%22%2C%22value%22%3A%22%22%7D%2C%22%24device_id%22%3A%22189d5930d2d45c-06140436c82a23c-1b3d1a3b-370944-189d5930d2e19e8%22%7D;  x-auth-token=Bearer eyJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2OTE1MDUzNzIsImV4cCI6MTcyMzA0MTM3MiwiaXNzIjoiOUExNTA0RUEtRjQ0RS00MUUxLTkxQTAtMkJFN0I3Mjk1RTIxIiwic3ViIjoiOUExNTA0RUEtRjQ0RS00MUUxLTkxQTAtMkJFN0I3Mjk1RTIxIiwidXVpZCI6IjlBMTUwNEVBLUY0NEUtNDFFMS05MUEwLTJCRTdCNzI5NUUyMSIsInVzZXJJZCI6MTY5NDYyODQwLCJ1c2VyTmFtZSI6Iuecieavm-eyl-a2gum4pmZueSIsImlzR3Vlc3QiOmZhbHNlfQ.eax7mdMg3YFpoiWmWlqUf8u9kCvMGTt50NaEGdtFsjCrBC2UhIPqbFyuWaCvDHDTdgHPb-CuexcXs_6QXGyYG4sqX3LxQL1pz02aKwpZ4KekbQZjJ3ZvTwWqeak2wo7GKhL5OqtvKmpo5MpYXxZCiEAw08mKSup0OvL8Dlev7BltFiveelOTlDYK_1Mla1K6eXQuN04MuYhX1KNwPGiXDgZryI_68W5Ae2sueqPCguhO1FTBmyO0nBzczB37CCwkMYzX5Sc-LLo1OeaZmu2BdGynTYQgff8dNOfuQg8IJqWEM1fBpMUDl7b-KjPAjYht_EmIKXi57_11tgOp2eRb7w; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22189d5930d2d45c-06140436c82a23c-1b3d1a3b-370944-189d5930d2e19e8%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMTg5ZDU5MzBkMmQ0NWMtMDYxNDA0MzZjODJhMjNjLTFiM2QxYTNiLTM3MDk0NC0xODlkNTkzMGQyZTE5ZTgifQ%3D%3D%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%22%2C%22value%22%3A%22%22%7D%2C%22%24device_id%22%3A%22189d5930d2d45c-06140436c82a23c-1b3d1a3b-370944-189d5930d2e19e8%22%7D; sajssdk_2015_cross_new_user=1",
            "Referer": "https://m.dewu.com/",
            "imei": "",
            "channel": "App Store",
            "appVersion": "5.19.1",
            "uuid": "9A1504EA-F44E-41E1-91A0-2BE7B7295E21",
            "Origin": "https://m.dewu.com",
            "ua": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148/duapp/5.19.1",
            "Sec-Fetch-Dest": "empty",
            "shumeiId": "202005300727267cf5890f1531efe23d1f0ac0a43ebc4b01c9e3753b8d2029",
            "Sec-Fetch-Site": "same-site",
            "x-auth-token": "Bearer eyJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2OTE1MDUzNzIsImV4cCI6MTcyMzA0MTM3MiwiaXNzIjoiOUExNTA0RUEtRjQ0RS00MUUxLTkxQTAtMkJFN0I3Mjk1RTIxIiwic3ViIjoiOUExNTA0RUEtRjQ0RS00MUUxLTkxQTAtMkJFN0I3Mjk1RTIxIiwidXVpZCI6IjlBMTUwNEVBLUY0NEUtNDFFMS05MUEwLTJCRTdCNzI5NUUyMSIsInVzZXJJZCI6MTY5NDYyODQwLCJ1c2VyTmFtZSI6Iuecieavm-eyl-a2gum4pmZueSIsImlzR3Vlc3QiOmZhbHNlfQ.eax7mdMg3YFpoiWmWlqUf8u9kCvMGTt50NaEGdtFsjCrBC2UhIPqbFyuWaCvDHDTdgHPb-CuexcXs_6QXGyYG4sqX3LxQL1pz02aKwpZ4KekbQZjJ3ZvTwWqeak2wo7GKhL5OqtvKmpo5MpYXxZCiEAw08mKSup0OvL8Dlev7BltFiveelOTlDYK_1Mla1K6eXQuN04MuYhX1KNwPGiXDgZryI_68W5Ae2sueqPCguhO1FTBmyO0nBzczB37CCwkMYzX5Sc-LLo1OeaZmu2BdGynTYQgff8dNOfuQg8IJqWEM1fBpMUDl7b-KjPAjYht_EmIKXi57_11tgOp2eRb7w",
            "Content-Length": 2,
            "deviceId": "9A1504EA-F44E-41E1-91A0-2BE7B7295E21",
            "platform": "h5",
            "Connection": "keep-alive",
            "Accept-Language": "zh-CN,zh-Hans;q=0.9",
            "SK": "9JiEGJ2UABBYN3tV9V5R8iFdbPVO507lhnDsBoDGRwVxgwuxl5SDSMGKDKr2Rh2I64kAzUEK8wSJTPpp3m7oT3gbq81q",
            "Accept": "*/*",
            "Content-Type": "application/json",
            "duToken": "d41d8cd9|169462840|1689724101|292ae55792ddc816",
            "Accept-Encoding": "gzip, deflate, br",
            "Sec-Fetch-Mode": "cors"
          },
          data: {},
          method: "POST"
        }
      ).then((res) => {
        console.log("dewu", res.data);
      }).catch((res) => {
        console.log(res);
      });
    }
  });

  // task/didi.js
  var require_didi = __commonJS({
    "task/didi.js"() {
      var axios = require_axios();
      axios(
        {
          url: "https://ut.xiaojukeji.com/ut/welfare/api/action/dailySign?wsgsig=dd03-TVMWLw5kbU3BKkMGhW6D9OMrAEuGLakAiiAcEIEWAEu0IeAHqfPG9YMnak30IUICkbEJcOxl9FgE8hF7Uc1cEH2i9Eo8IE6BhfddFOYs9koEHreEUtI7a1Fn9rJa2AB7%2FXlGgH1",
          headers: {
            "Host": "ut.xiaojukeji.com",
            "Connection": "keep-alive",
            "Content-Length": "826",
            "didi-header-rid": "2dc0c09664d24f7ebd3b3846be89c8e0",
            "source-type": "15",
            "didi-header-hint-content": '{"lang":"zh-CN","Cityid":11}',
            "content-type": "application/json",
            "secdd-authentication": "0aa8761ffc9bee1477ed396728b1002b0de0829885899659fe341930b2b90a4a02b4c556edf276fc76a02a5e2418e344638485d58901000001000000",
            "secdd-challenge": "3|v1.1.0||||||",
            "Accept-Encoding": "gzip,compress,br,deflate",
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.38(0x1800262c) NetType/WIFI Language/zh_CN",
            "Referer": "https://servicewechat.com/wxaf35009675aa0b2a/714/page-frame.html"
          },
          method: "POST",
          data: { "lang": "zh-CN", "token": "IrUdMMPIRdgMCaSPkMyYcZ6inFHQRs-18drG7KYWpxgkzDmuwlAMQNG93NqK7PhN9m7-hzA0DwlEFWXvFKlOd3amkviiiyJMI02YK-lVNYTppPUaXk2HhnkRZiFVmJUE4e_kn1wjtI0yenXzFsKVDGEjdz6v7_uykVVV4xBupLWwqqWUItxJbLiv5t57Q3ic7ZPU4xcAAP__", "access_key_id": 9, "appversion": "6.6.64", "channel": 1100000002, "_ds": "", "lat": "32.06522542317708", "lng": "118.66510932074652", "platform": "mp", "env": '{"cityId":"11","token":"IrUdMMPIRdgMCaSPkMyYcZ6inFHQRs-18drG7KYWpxgkzDmuwlAMQNG93NqK7PhN9m7-hzA0DwlEFWXvFKlOd3amkviiiyJMI02YK-lVNYTppPUaXk2HhnkRZiFVmJUE4e_kn1wjtI0yenXzFsKVDGEjdz6v7_uykVVV4xBupLWwqqWUItxJbLiv5t57Q3ic7ZPU4xcAAP__","longitude":"118.66510932074652","latitude":"32.06522542317708","appid":"30012","fromChannel":"2","wxScene":1089,"sceneId":1089,"openId":"oJJUI0cMYMPvfVAKkn9NH0FJgYIQ"}', "dchn": "W0dzOxO" }
        }
      ).then((res) => {
        console.log("didi", res.data);
      }).catch((res) => {
        console.log(res);
      });
    }
  });

  // task/meituan.js
  var require_meituan = __commonJS({
    "task/meituan.js"() {
      var axios = require_axios();
      var a = {
        url: "https://i.meituan.com/evolve/signin/signpost/100219",
        headers: {
          "Host": "i.meituan.com",
          "X-Titans-User": "",
          "Accept": "*/*",
          "Sec-Fetch-Site": "same-site",
          "Accept-Language": "zh-CN,zh-Hans;q=0.9",
          "Accept-Encoding": "gzip, deflate, br",
          "Sec-Fetch-Mode": "cors",
          "token": "AgGzI4Dzq7qAAyKDV0TCqYST6ESohh5H1AokcJ1FL9lXLstt1qrnH4RWnjBetCrPQ0otshbxPO2bFAAAAAD1GQAAoHwOdfHyT1UgiYihiuxq6u5c0GU2i7oeGYRVLz6AjLIL9PhtTMaIN_P88sx0yQOH",
          "Origin": "https://cube.meituan.com",
          "Content-Length": "7285",
          "User-Agent": "EHC/3.15.0/ehc_group_ios_classic/94 Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 TitansX/20.0.1.old KNB/1.0 iOS/16.6 meituangroup/com.meituan.imeituan/12.10.402 meituangroup/12.10.402 App/10110/12.10.402 iPhone/iPhone11 WKWebView",
          "Referer": "https://cube.meituan.com/",
          "Connection": "keep-alive",
          "Content-Type": "application/json",
          "Sec-Fetch-Dest": "empty"
        },
        method: "POST",
        data: { "riskRequest": '{"fingerprint":"i2HKpOmsirDPavelVfQBZGhGhrXZs3bfUIQEEtmPQWbTow1jPLgxq65Bsr01mSyKOdWoRksBfIB3XjtebBO478gKK2yPZXnzmfOx4qGkMTUD+5tQg1+MZ2TGfS5/OoIIgf4pmgSqirYFmkMrXwLfhofUiBHQg23mEFfLbTUX6d1XttzunQ+qDIExpq5Sb7Axg+3iZiH4g7AxtkrpkTedsmK/AoIQFKhA5FpTqRTg5Wb98sQIEav4DseKt5jWVdaOEkE/9/CD+RbriXcDcNb8IVI7Em6QWs52UlimFlT8HMiRJzn/a2cGxXeFtA4KlWtCAMqm+wytLa1PfX3Zp8SVySQ5MNmSMFo04Zv5yUmANSlNWplnjRogg0ZCDOdTq+DXRTmDUFCFwzn8Cm1JxP7lz0SKScw13+Iw7TZKHgIr+McYLTp/k1FiU5KXRVQJPL0yChXyVSMS1cuKAt7bWSGU+THNKVgHqxR3VJiRcOoBRTKaIVYFb3dtZRbp57xR5+kx8ZegmOzrpZzzv+f+Y0zib5BkPaXc2uTra1VRCu3SyTrzRHdPhw18XAFasAwvwMMU3sIHykKg16/qACQMSxQ98nLjTWEJfAVB7+0u9EfDbhNmxkWjgPIR271m/UEvcHsJaOHsmqLgHHQoYTp4dC0zd8qx8yG1rThDGHaQ5KfWA/Ui/Xt/v26RIz19q8At2mvojJfbztUEtEad8cstvcusPZC7AfRJbtyIUikBWjussVVEgjm413H0jKcQ3V5yZc5LYQPWjZ3h2FI3c8MKRC4o2P/Xj4VIxw6QKUfkFEJheN7+x4641WSd13WRVkFDK1SSRDaIF1yKtUnuLVolUdFtf4ZlcFcYPz42C80cb9jP9Q+LrkEU8Rs8WYEaBZgVPM2dgRvFkIUAVBHVdxq7w55aLPJxvbrjpWlRtou9YjTIp2lzjP7FKqloQ3iwNwN/8MgJo9F09KzYIMM4j4S820LGNcOyp3jr4cWAAx5xs+SrzzlYvc8rUOZIYuhUrevnWSKNRDPad/1NdWwGjwbOuglawEUANGFq0JaXpRLXucYR9VoTVarmfXzFN86eabN8dJJ/1kkzbr4jmdbo49ucjSd7xYJq6SXXsfmSWdv4KZjLarf/7y3gsPGbSCE2YoSdLOpWnbEyXoDaKyCf6Xkc7vvtkcsFZKetaG3HwnYhZa0MwPlRKAaPoVylEIaJ2r2o4hr2pU9S6wH7Os+s1A/OsxMd9TYxPB2W7pxZKTEJxOGKKb5Aha2NSdZvjZy6yLg+dKn8tbGgl+8344jbqyhnF0Rtxv26Ot6pfofnt+JTJujOvell1X257XlVbntdBvtjw49ZOuJgbVqa57p2aCZ+NoL0H4PKLBeoKUvcX5ldO49iwzQP/gR8lyao+1gllxCi6GeAV8+5nhaF2UobaAJz+Gh289UDUu/ZmcvFSak7oLAn6ccop+83TJNsSXt+jKlGH2WA","uuid":"00000000000009A22F2E49FD149EE867866EF09B1434EA162871873552094900","version":"12.10.402","platform":5,"app":"0","campaignPlatform":"14","campaignType":"1","h5Fingerprint":"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"}', "code": "" }
      };
      axios(
        a
      ).then((res) => {
        console.log("meituan", res.data);
      }).catch((res) => {
        console.log(res);
      });
    }
  });

  // task/lakala.js
  var require_lakala = __commonJS({
    "task/lakala.js"() {
      var axios = require_axios();
      axios(
        {
          url: "https://wallet.lakala.com/m/a/checkin/submitNew",
          headers: {
            "Host": "wallet.lakala.com",
            "Accept": "application/json, text/plain, */*",
            "Authorization": "d3f9892d4ad04cc587b70382903a8fa8",
            "Sec-Fetch-Site": "same-site",
            "Accept-Language": "zh-CN,zh-Hans;q=0.9",
            "Accept-Encoding": "gzip, deflate, br",
            "Sec-Fetch-Mode": "cors",
            "Content-Type": "application/json",
            "Origin": "https://i.lakala.com",
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;lakala-app",
            "Referer": "https://i.lakala.com/",
            "Connection": "keep-alive",
            "Sec-Fetch-Dest": "empty"
          },
          method: "POST",
          data: {
            signDate: "20230808214539",
            activityId: "1002201001"
          }
        }
      ).then((res) => {
        console.log("kalaka", res.data);
      }).catch((res) => {
        console.log(res);
      });
    }
  });

  // index.js
  require_dewu();
  require_didi();
  require_meituan();
  require_lakala();
})();
