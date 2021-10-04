// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
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

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
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
  return newRequire;
})({"main.js":[function(require,module,exports) {
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
const $ = s => document.querySelector(s)
const $$ = s => document.querySelectorAll(s)

$('.input').onclick = function (e) {
    if (!this.classList.contains('focus')) {
        this.classList.add('focus')
        $('.keyboard').classList.add('show')
        e.stopPropagation()
    }
}

document.onclick = function () {
    $('.keyboard').classList.remove('show')
    $('.input').classList.remove('focus')
}

$('.keyboard').onclick = function (e) {
    e.stopPropagation()
}
let text = ''

$$('.keyboard .row>span').forEach($key => {
    $key.onmousedown = function () {
        this.classList.add('active')
    }
    $key.onmouseup = function () {
        this.classList.remove('active')
    }
})
$$('.keyboard .row>span').forEach($key => {
    $key.onclick = function (e) {
        let type = $key.dataset.type
        switch (type) {
            case 'char':
                text += $key.innerText
                $('.input').innerText = text
                break;
            case 'uppercase':
                setPage('uppercase')
                break;
            case 'lowercase':
                setPage('lowercase')
                break;
            case 'symbol':
                setPage('symbol')
                break;
            case 'number':
                setPage('number')
                break;
            case 'backspace':
                text = text.substring(0, text.length - 1)
                $('.input').innerText = text
                break;
            case 'space':
                text += ''
                $('.input').innerText = text
                break;
            case 'return':
                text += '\n'
                $('.input').innerText = text
                break;
        }
    }
})

function setPage(name) {
    $$('.keyboard .page').forEach($page => $page.style.display = 'none')
    $('.keyboard .page-' + name).style.display = 'block'
}
*/
var $ = function $(s) {
    return document.querySelector(s);
};
var $$ = function $$(s) {
    return document.querySelectorAll(s);
};

var keyboard = function () {
    function keyboard($input) {
        _classCallCheck(this, keyboard);

        this.$input = $input;
        this.text = '';
        this.init();
        this.bind();
    }

    _createClass(keyboard, [{
        key: 'setPage',
        value: function setPage(name) {
            this.$keyboard.querySelectorAll('.page').forEach(function ($page) {
                return $page.style.display = 'none';
            });
            this.$keyboard.querySelector('.page-' + name).style.display = 'block';
        }
    }, {
        key: 'bind',
        value: function bind() {
            var self = this;
            this.$input.onclick = function (e) {
                this.classList.add('focus');
                self.$keyboard.classList.add('show');
                e.stopPropagation();
            };
            // onclick 会覆盖上一次绑定
            document.addEventListener('click', function () {
                self.$input.classList.remove('focus');
                self.$keyboard.classList.remove('show');
            });

            this.$keyboard.onclick = function (e) {
                e.stopPropagation();
            };

            // this.keyboard.querySelectorAll('.row>span').forEach($key => {
            //     $key.onmousedown = function () {
            //         this.classList.add('active')
            //     }
            //     $key.onmouseup = function () {
            //         this.classList.remove('active')
            //     }
            // })

            this.$keyboard.querySelectorAll('.row>span').forEach(function ($key) {
                $key.onclick = function (e) {
                    $key.onmousedown = function () {
                        this.classList.add('active');
                    };
                    $key.onmouseup = function () {
                        this.classList.remove('active');
                    };
                    var type = $key.dataset.type;
                    switch (type) {
                        case 'char':
                            self.text += $key.innerText;
                            self.$input.innerText = self.text;
                            break;
                        case 'uppercase':
                            self.setPage('uppercase');
                            break;
                        case 'lowercase':
                            self.setPage('lowercase');
                            break;
                        case 'symbol':
                            self.setPage('symbol');
                            break;
                        case 'number':
                            self.setPage('number');
                            break;
                        case 'backspace':
                            self.text = self.text.substring(0, self.text.length - 1);
                            self.$input.innerText = self.text;
                            break;
                        case 'space':
                            self.text += ' ';
                            self.$input.innerText = self.text;
                            break;
                        case 'return':
                            self.text += '\n';
                            self.$input.innerText = self.text;
                            break;
                    }
                };
            });
        }
    }, {
        key: 'init',
        value: function init() {
            var $keyboard = document.createElement('div');
            $keyboard.classList.add('keyboard');
            $keyboard.innerHTML = '\n            <div class="page page-lowercase">\n                <div class="row">\n                    <span data-type="char" class="col-2">q</span>\n                    <span data-type="char" class="col-2">w</span>\n                    <span data-type="char" class="col-2">e</span>\n                    <span data-type="char" class="col-2">r</span>\n                    <span data-type="char" class="col-2">t</span>\n                    <span data-type="char" class="col-2">y</span>\n                    <span data-type="char" class="col-2">u</span>\n                    <span data-type="char" class="col-2">i</span>\n                    <span data-type="char" class="col-2">o</span>\n                    <span data-type="char" class="col-2">p</span>\n                </div>\n                <div class="row">\n                    <span data-type="char" class="col-2 offset-1">a</span>\n                    <span data-type="char" class="col-2">s</span>\n                    <span data-type="char" class="col-2">d</span>\n                    <span data-type="char" class="col-2">f</span>\n                    <span data-type="char" class="col-2">g</span>\n                    <span data-type="char" class="col-2">h</span>\n                    <span data-type="char" class="col-2">j</span>\n                    <span data-type="char" class="col-2">k</span>\n                    <span data-type="char" class="col-2">l</span>\n                </div>\n                <div class="row">\n                    <span data-type="uppercase" class="col-3">\n                        <svg class="icon" aria-hidden="true">\n                            <use xlink:href="#icon-caps-lock-16"></use>\n                        </svg>\n                    </span>\n                    <span data-type="char" class="col-2">z</span>\n                    <span data-type="char" class="col-2">x</span>\n                    <span data-type="char" class="col-2">c</span>\n                    <span data-type="char" class="col-2">v</span>\n                    <span data-type="char" class="col-2">b</span>\n                    <span data-type="char" class="col-2">n</span>\n                    <span data-type="char" class="col-2">m</span>\n                    <span data-type="backspace" class="col-3 ">\n                        <svg class="icon" aria-hidden="true">\n                            <use xlink:href="#icon-backspace"></use>\n                        </svg>\n                    </span>\n                </div>\n                <div class="row">\n                    <span data-type="number" class="col-4">123</span>\n                    <span data-type="space" class="col-12">space</span>\n                    <span data-type="return" class="col-4">return</span>\n                </div>\n            </div>\n            <div class="page page-number">\n                <div class="row">\n                    <span data-type="char" class="col-2">1</span>\n                    <span data-type="char" class="col-2">2</span>\n                    <span data-type="char" class="col-2">3</span>\n                    <span data-type="char" class="col-2">4</span>\n                    <span data-type="char" class="col-2">5</span>\n                    <span data-type="char" class="col-2">6</span>\n                    <span data-type="char" class="col-2">7</span>\n                    <span data-type="char" class="col-2">8</span>\n                    <span data-type="char" class="col-2">9</span>\n                    <span data-type="char" class="col-2">0</span>\n                </div>\n                <div class="row">\n                    <span data-type="char" class="col-2 offset-1">-</span>\n                    <span data-type="char" class="col-2">/</span>\n                    <span data-type="char" class="col-2">:</span>\n                    <span data-type="char" class="col-2">;</span>\n                    <span data-type="char" class="col-2">(</span>\n                    <span data-type="char" class="col-2">)</span>\n                    <span data-type="char" class="col-2">$</span>\n                    <span data-type="char" class="col-2">&</span>\n                    <span data-type="char" class="col-2">@</span>\n                </div>\n                <div class="row">\n                    <span data-type="symbol" class="col-3">#+=</span>\n                    <span data-type="char" class="col-2">.</span>\n                    <span data-type="char" class="col-2">,</span>\n                    <span data-type="char" class="col-2">?</span>\n                    <span data-type="char" class="col-2">!</span>\n                    <span data-type="char" class="col-2">\'</span>\n                    <span data-type="char" class="col-2">"</span>\n                    <span data-type="char" class="col-2">`</span>\n                    <span data-type="backspace" class="col-3">\n                        <svg class="icon" aria-hidden="true">\n                            <use xlink:href="#icon-backspace"></use>\n                        </svg>\n                    </span>\n                </div>\n                <div class="row">\n                    <span data-type="lowercase" class="col-4">ABC</span>\n                    <span data-type="space" class="col-12">space</span>\n                    <span data-type="return" class="col-4">return</span>\n                </div>\n            </div>\n            <div class="page page-symbol">\n                <div class="row">\n                    <span data-type="char" class="col-2">[</span>\n                    <span data-type="char" class="col-2">]</span>\n                    <span data-type="char" class="col-2">{</span>\n                    <span data-type="char" class="col-2">}</span>\n                    <span data-type="char" class="col-2">#</span>\n                    <span data-type="char" class="col-2">%</span>\n                    <span data-type="char" class="col-2">^</span>\n                    <span data-type="char" class="col-2">*</span>\n                    <span data-type="char" class="col-2">+</span>\n                    <span data-type="char" class="col-2">=</span>\n                </div>\n                <div class="row">\n                    <span data-type="char" class="col-2 offset-1">_</span>\n                    <span data-type="char" class="col-2"></span>\n                    <span data-type="char" class="col-2">|</span>\n                    <span data-type="char" class="col-2">~</span>\n                    <span data-type="char" class="col-2">\n                        <</span> <span data-type="char" class="col-2">>\n                    </span>\n                    <span data-type="char" class="col-2">\xA5</span>\n                    <span data-type="char" class="col-2">\u20AC</span>\n                    <span data-type="char" class="col-2">\uFFE1</span>\n                </div>\n                <div class="row">\n                    <span data-type="number" class="col-3">123</span>\n                    <span data-type="char" class="col-2">.</span>\n                    <span data-type="char" class="col-2">,</span>\n                    <span data-type="char" class="col-2">?</span>\n                    <span data-type="char" class="col-2">!</span>\n                    <span data-type="char" class="col-2">\'</span>\n                    <span data-type="char" class="col-2">"</span>\n                    <span data-type="char" class="col-2">`</span>\n                    <span data-type="backspace" class="col-3">\n                        <svg class="icon" aria-hidden="true">\n                            <use xlink:href="#icon-backspace"></use>\n                        </svg>\n                    </span>\n                </div>\n                <div class="row">\n                    <span data-type="lowercase" class="col-4">ABC</span>\n                    <span data-type="space" class="col-12">space</span>\n                    <span data-type="return" class="col-4">return</span>\n                </div>\n            </div>\n            <div class="page page-uppercase">\n                <div class="row">\n                    <span data-type="char" class="col-2">Q</span>\n                    <span data-type="char" class="col-2">W</span>\n                    <span data-type="char" class="col-2">E</span>\n                    <span data-type="char" class="col-2">R</span>\n                    <span data-type="char" class="col-2">T</span>\n                    <span data-type="char" class="col-2">Y</span>\n                    <span data-type="char" class="col-2">U</span>\n                    <span data-type="char" class="col-2">I</span>\n                    <span data-type="char" class="col-2">O</span>\n                    <span data-type="char" class="col-2">P</span>\n                </div>\n                <div class="row">\n                    <span data-type="char" class="col-2 offset-1">A</span>\n                    <span data-type="char" class="col-2">S</span>\n                    <span data-type="char" class="col-2">D</span>\n                    <span data-type="char" class="col-2">F</span>\n                    <span data-type="char" class="col-2">G</span>\n                    <span data-type="char" class="col-2">H</span>\n                    <span data-type="char" class="col-2">J</span>\n                    <span data-type="char" class="col-2">K</span>\n                    <span data-type="char" class="col-2">L</span>\n                </div>\n                <div class="row">\n                    <span data-type="lowercase" class="col-3">\n                        <svg class="icon" aria-hidden="true">\n                            <use xlink:href="#icon-caps-lock-16"></use>\n                        </svg>\n                    </span>\n                    <span data-type="char" class="col-2">Z</span>\n                    <span data-type="char" class="col-2">X</span>\n                    <span data-type="char" class="col-2">C</span>\n                    <span data-type="char" class="col-2">V</span>\n                    <span data-type="char" class="col-2">B</span>\n                    <span data-type="char" class="col-2">N</span>\n                    <span data-type="char" class="col-2">M</span>\n                    <span data-type="backspace" class="col-3">\n                        <svg class="icon" aria-hidden="true">\n                            <use xlink:href="#icon-backspace"></use>\n                        </svg></span>\n                </div>\n                <div class="row">\n                    <span data-type="number" class="col-4">123</span>\n                    <span data-type="space" class="col-12">space</span>\n                    <span data-type="return" class="col-4">return</span>\n                </div>\n            </div>\n        ';
            document.body.appendChild($keyboard);
            this.$keyboard = $keyboard;
        }
    }]);

    return keyboard;
}();

$$('.input').forEach(function ($input) {
    new keyboard($input);
});
},{}],"..\\..\\..\\..\\..\\..\\..\\AppData\\Roaming\\npm\\node_modules\\parcel\\src\\builtins\\hmr-runtime.js":[function(require,module,exports) {
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

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '13185' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
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
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
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

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

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

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["..\\..\\..\\..\\..\\..\\..\\AppData\\Roaming\\npm\\node_modules\\parcel\\src\\builtins\\hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.63e9d780.map