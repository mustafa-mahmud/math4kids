// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"scss/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"js/classes/config.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.maxMin = void 0;
var maxMin = [50, 4];
exports.maxMin = maxMin;
},{}],"js/classes/Data.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _config = require("./config");

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Data = /*#__PURE__*/_createClass(function Data() {
  _classCallCheck(this, Data);
});

_defineProperty(Data, "allData", {
  maxMin: _config.maxMin,
  status: '+',
  totalNums: 2,
  question: [],
  answer: null,
  possibleAns: [],
  randomIndex: [],
  result: {
    totalClicked: 0,
    wrong: 0,
    correct: 0
  }
});

var _default = Data;
exports.default = _default;
},{"./config":"js/classes/config.js"}],"js/classes/Helper.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Data = _interopRequireDefault(require("./Data"));

var _config = require("./config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Helper = /*#__PURE__*/function () {
  function Helper() {
    _classCallCheck(this, Helper);
  }

  _createClass(Helper, [{
    key: "between",
    value: function between() {
      return Math.floor(Math.random() * (_Data.default.allData.maxMin[0] - _Data.default.allData.maxMin[1] + 1)) + _Data.default.allData.maxMin[1];
    }
  }, {
    key: "randomNums",
    value: function randomNums() {
      var propertyName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'question';
      var looping = propertyName === 'question' ? 2 : _Data.default.allData.totalNums;

      if (_Data.default.allData[propertyName].length < looping) {
        var num = Math.abs(this.between());

        if (!_Data.default.allData[propertyName].includes(num) && _Data.default.allData.answer !== num) {
          _Data.default.allData[propertyName].push(num);
        }

        this.randomNums(propertyName);
      } else {
        _Data.default.allData[propertyName] = _Data.default.allData[propertyName].sort(function (a, b) {
          return b - a;
        });
      }
    }
  }, {
    key: "answerWillBeNotFloat",
    value: function answerWillBeNotFloat() {
      this.randomNums();
      var answer = _Data.default.allData.question[0] / _Data.default.allData.question[1];

      if (!Number.isInteger(answer)) {
        _Data.default.allData.question = [];
        this.answerWillBeNotFloat();
      } else {
        _Data.default.allData.answer = answer;
      }
    }
  }, {
    key: "initData",
    value: function initData() {
      var level = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
      var status = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '+';
      var newMaxMin = null;

      if (_Data.default.allData.answer) {
        newMaxMin = [_Data.default.allData.answer + 5, _Data.default.allData.answer - 5];
      }

      _Data.default.allData = _objectSpread(_objectSpread({}, _Data.default.allData), {}, {
        maxMin: newMaxMin ? newMaxMin : _config.maxMin,
        status: status,
        totalNums: level
      });
    }
  }, {
    key: "getRandomIndex",
    value: function getRandomIndex() {
      var looping = _Data.default.allData.possibleAns.length;

      if (_Data.default.allData.randomIndex.length < looping) {
        var index = Math.floor(Math.random() * looping);

        if (!_Data.default.allData.randomIndex.includes(index)) {
          _Data.default.allData.randomIndex.push(index);
        }

        this.getRandomIndex();
      }
    }
  }]);

  return Helper;
}();

var _default = new Helper();

exports.default = _default;
},{"./Data":"js/classes/Data.js","./config":"js/classes/config.js"}],"js/classes/Sum.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Data = _interopRequireDefault(require("./Data"));

var _Helper = _interopRequireDefault(require("./Helper"));

var _config = require("./config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Sum = /*#__PURE__*/function () {
  function Sum() {
    _classCallCheck(this, Sum);
  }

  _createClass(Sum, [{
    key: "getMath",
    value: function getMath(level, status) {
      _Data.default.allData.question = [];
      _Data.default.allData.answer = null;

      _Helper.default.initData(level, status); //question need = [50,45] (add)


      _Helper.default.randomNums('question'); //answer need = 95


      this.getAnswer(status);
      if (!_Data.default.allData.answer) ;

      _Helper.default.initData(level, status);

      _Data.default.allData.possibleAns = []; //possible answer need = [90,95,94] (basic)

      _Helper.default.randomNums('possibleAns');

      _Data.default.allData.possibleAns.push(_Data.default.allData.answer);

      _Data.default.allData.randomIndex = [];

      _Helper.default.getRandomIndex();
    }
  }, {
    key: "getAnswer",
    value: function getAnswer(status) {
      if (status === '+') _Data.default.allData.answer = _Data.default.allData.question[0] + _Data.default.allData.question[1];
      if (status === '-') _Data.default.allData.answer = _Data.default.allData.question[0] - _Data.default.allData.question[1];
      if (status === '*') _Data.default.allData.answer = _Data.default.allData.question[0] * _Data.default.allData.question[1];

      if (status === '/') {
        var answer = _Data.default.allData.question[0] / _Data.default.allData.question[1];

        if (!Number.isInteger(answer)) {
          _Helper.default.answerWillBeNotFloat();
        } else {
          _Data.default.allData.answer = answer;
        }
      }
    }
  }]);

  return Sum;
}();

exports.default = Sum;
},{"./Data":"js/classes/Data.js","./Helper":"js/classes/Helper.js","./config":"js/classes/config.js"}],"js/classes/UI.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Data = _interopRequireDefault(require("./Data"));

var _Sum2 = _interopRequireDefault(require("./Sum"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var UI = /*#__PURE__*/function (_Sum) {
  _inherits(UI, _Sum);

  var _super = _createSuper(UI);

  function UI(ulEl, num1El, num2El, typeEl, addEl, answerOptionEl, wrongEl, clickedEl, correctEl, selectEl) {
    var _this;

    _classCallCheck(this, UI);

    _this = _super.call(this);
    _this.ulEl = ulEl;
    _this.num1El = num1El;
    _this.num2El = num2El;
    _this.typeEl = typeEl;
    _this.addEl = addEl;
    _this.answerOptionEl = answerOptionEl;
    _this.wrongEl = wrongEl;
    _this.clickedEl = clickedEl;
    _this.correctEl = correctEl;
    _this.selectEl = selectEl;
    return _this;
  }

  _createClass(UI, [{
    key: "changeLiClass",
    value: function changeLiClass(target) {
      //remove current class
      this.ulEl.querySelectorAll('li').forEach(function (li) {
        return li.classList.remove('current');
      }); //add current class

      target.classList.add('current');
    }
  }, {
    key: "displayUI",
    value: function displayUI() {
      var _this2 = this;

      this.num1El.textContent = _Data.default.allData.question[0];
      this.num2El.textContent = _Data.default.allData.question[1];
      this.typeEl.textContent = _Data.default.allData.status;
      this.correctEl.textContent = _Data.default.allData.result.correct;
      this.wrongEl.textContent = _Data.default.allData.result.wrong;
      this.clickedEl.textContent = _Data.default.allData.result.correct + _Data.default.allData.result.wrong;
      this.answerOptionEl.innerHTML = "";

      _Data.default.allData.randomIndex.forEach(function (index) {
        _this2.createAnswerOptions(_Data.default.allData.possibleAns[index]);
      });
    }
  }, {
    key: "createAnswerOptions",
    value: function createAnswerOptions(ans) {
      var div = document.createElement('div');
      div.classList.add('options');
      div.style.backgroundColor = '#666';
      div.innerHTML = "<h1 data-answer=\"".concat(ans, "\">").concat(ans, "</h1>");
      this.answerOptionEl.appendChild(div);
    }
  }, {
    key: "checkResult",
    value: function checkResult(target, ans) {
      var _this3 = this;

      var resultBool = _Data.default.allData.answer === ans;

      if (resultBool) {
        target.style.backgroundColor = 'green';
        _Data.default.allData.result.correct++;
        setTimeout(function () {
          _this3.initMath();
        }, 1000);
      }

      if (!resultBool) {
        target.style.backgroundColor = 'red';
        _Data.default.allData.result.wrong++;
        setTimeout(function () {
          _this3.initMath();
        }, 1000);
      }

      this.answerOptionEl.querySelectorAll('.options').forEach(function (option) {
        return option.style.pointerEvents = 'none';
      });
    }
  }, {
    key: "getStatus",
    value: function getStatus() {
      var status = null;
      this.ulEl.querySelectorAll('li').forEach(function (li) {
        if (li.classList.contains('current')) status = li.getAttribute('data-status');
      });
      return status;
    }
  }, {
    key: "initMath",
    value: function initMath() {
      var level = this.selectEl.value;
      var status = this.getStatus();
      this.getMath(level, status);
      this.displayUI();
    }
  }]);

  return UI;
}(_Sum2.default);

exports.default = UI;
},{"./Data":"js/classes/Data.js","./Sum":"js/classes/Sum.js"}],"js/main.js":[function(require,module,exports) {
"use strict";

require("./../scss/main.scss");

var _UI = _interopRequireDefault(require("./classes/UI"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ulEl = document.querySelector('ul');
var num1El = document.getElementById('num1');
var num2El = document.getElementById('num2');
var typeEl = document.getElementById('type');
var addEl = document.getElementById('add');
var selectEl = document.getElementById('level');
var answerOptionEl = document.getElementById('answer-options');
var wrongEl = document.getElementById('wrong');
var clickedEl = document.getElementById('clicked');
var correctEl = document.getElementById('correct');
var uiCL = new _UI.default(ulEl, num1El, num2El, typeEl, addEl, answerOptionEl, wrongEl, clickedEl, correctEl, selectEl); ////////////////

ulEl.addEventListener('click', function (e) {
  var target = e.target;
  uiCL.changeLiClass(target);
  uiCL.initMath();
});
answerOptionEl.addEventListener('click', function (e) {
  var target = e.target.closest('.options');
  if (!target) return;
  var ans = +target.querySelector('h1').getAttribute('data-answer');
  uiCL.checkResult(target, ans);
});
uiCL.initMath();
},{"./../scss/main.scss":"scss/main.scss","./classes/UI":"js/classes/UI.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "12068" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map