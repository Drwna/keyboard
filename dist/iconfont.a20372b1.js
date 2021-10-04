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
})({"BzPW":[function(require,module,exports) {
!function (e) {
  var t,
      _n,
      c,
      o,
      i,
      l = '<svg><symbol id="icon-backspace" viewBox="0 0 1024 1024"><path d="M928 192H352c-9.6 0-19.2 3.2-22.4 9.6l-256 288c-9.6 12.8-9.6 32 0 41.6l256 288c6.4 6.4 16 9.6 22.4 9.6h576c19.2 0 32-12.8 32-32V224c0-19.2-12.8-32-32-32z m-32 576H364.8l-227.2-256 227.2-256H896v512z" fill="" ></path><path d="M489.6 662.4c6.4 6.4 16 9.6 22.4 9.6s16-3.2 22.4-9.6l105.6-105.6 105.6 105.6c6.4 6.4 16 9.6 22.4 9.6s16-3.2 22.4-9.6c12.8-12.8 12.8-32 0-44.8L684.8 512l105.6-105.6c12.8-12.8 12.8-32 0-44.8s-32-12.8-44.8 0L640 467.2l-105.6-105.6c-12.8-12.8-32-12.8-44.8 0s-12.8 32 0 44.8l105.6 105.6-105.6 105.6c-12.8 12.8-12.8 32 0 44.8z" fill="" ></path></symbol><symbol id="icon-caps-lock-16" viewBox="0 0 1024 1024"><path d="M736.533333 832h-448c-17.706667 0-32-14.293333-32-32V512h-96c-13.226667 0-25.066667-8.106667-29.866666-20.48-4.8-12.266667-1.493333-26.346667 8.32-35.2l352-320c12.16-11.093333 30.826667-11.093333 43.093333 0l352 320c9.813333 8.853333 13.12 22.933333 8.426667 35.2-4.8 12.373333-16.64 20.48-29.866667 20.48h-96v288c-0.106667 17.706667-14.4 32-32.106667 32z m-416-64h384V480c0-17.706667 14.293333-32 32-32h45.226667L512.533333 203.2 243.306667 448h45.226666c17.706667 0 32 14.293333 32 32v288z"  ></path></symbol></svg>',
      d = (d = document.getElementsByTagName("script"))[d.length - 1].getAttribute("data-injectcss"),
      s = function s(e, t) {
    t.parentNode.insertBefore(e, t);
  };if (d && !e.__iconfont__svg__cssinject__) {
    e.__iconfont__svg__cssinject__ = !0;try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e);
    }
  }function a() {
    i || (i = !0, c());
  }function r() {
    try {
      o.documentElement.doScroll("left");
    } catch (e) {
      return void setTimeout(r, 50);
    }a();
  }t = function t() {
    var e, t;(t = document.createElement("div")).innerHTML = l, l = null, (e = t.getElementsByTagName("svg")[0]) && (e.setAttribute("aria-hidden", "true"), e.style.position = "absolute", e.style.width = 0, e.style.height = 0, e.style.overflow = "hidden", t = e, (e = document.body).firstChild ? s(t, e.firstChild) : e.appendChild(t));
  }, document.addEventListener ? ~["complete", "loaded", "interactive"].indexOf(document.readyState) ? setTimeout(t, 0) : (_n = function n() {
    document.removeEventListener("DOMContentLoaded", _n, !1), t();
  }, document.addEventListener("DOMContentLoaded", _n, !1)) : document.attachEvent && (c = t, o = e.document, i = !1, r(), o.onreadystatechange = function () {
    "complete" == o.readyState && (o.onreadystatechange = null, a());
  });
}(window);
},{}]},{},["BzPW"], null)
//# sourceMappingURL=iconfont.a20372b1.map