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
})({"../js/script.js":[function(require,module,exports) {
var towerOne = document.querySelector('#towerOne');
var towerTwo = document.querySelector('#towerTwo');
var towerThree = document.querySelector('#towerThree');
var discOne = document.createElement('div');
var discTwo = document.createElement('div');
var discThree = document.createElement('div');
var discFour = document.createElement('div');
var discFive = document.createElement('div');
var discSix = document.createElement('div');
var discSeven = document.createElement('div');
var discEight = document.createElement('div');
var discNine = document.createElement('div');
discOne.className = 'discs';
discTwo.className = 'discs';
discThree.className = 'discs';
discFour.className = 'discs';
discFive.className = 'discs';
discSix.className = 'discs';
discSeven.className = 'discs';
discEight.className = 'discs';
discNine.className = 'discs';
discOne.id = 'discOne';
discTwo.id = 'discTwo';
discThree.id = 'discThree';
discFour.id = 'discFour';
discFive.id = 'discFive';
discSix.id = 'discSix';
discSeven.id = 'discSeven';
discEight.id = 'discEight';
discNine.id = 'discNine';
var readyToMove = false; // given to me by Jimmy, to operate as a switch

var currentDisc = "";
var moveCount = 0;

function onGameStart() {
  towerOne.appendChild(discOne);
  towerOne.appendChild(discTwo);
  towerOne.appendChild(discThree);
  towerOne.appendChild(discFour);
  towerOne.appendChild(discFive);
  towerOne.appendChild(discSix);
  towerOne.appendChild(discSeven);
  towerOne.appendChild(discEight);
  towerOne.appendChild(discNine);
}

onGameStart();
var reset = document.querySelector('.reset');
reset.addEventListener('click', onGameStart()); // Selects the top disc on whichever tower

function pickDisc(disc) {
  currentDisc = disc.querySelectorAll('.discs')[0]; // [0] selects the index of the child element within the parent

  currentDisc.style.background = 'linear-gradient(to right, rgb(104, 68, 68), rgb(133, 133, 133), rgb(225, 225, 225), rgb(74, 26, 26), rgb(111, 43, 43), rgb(137, 84, 84), rgb(255, 255, 255), rgb(98, 68, 68))';
  readyToMove = true;
} // deselects a disc if you choose not to move it


function unpickDisc() {
  currentDisc.style.background = 'linear-gradient(to right, rgb(83, 91, 92), rgb(133, 133, 133), rgb(225, 225, 225), rgb(72, 77, 91), rgb(100, 101, 110), rgb(138, 132, 132), rgb(255, 255, 255), rgb(169, 169, 169))';
  currentDisc = "";
  readyToMove = false;
} //moves disc to target tower


function moveDisc(disc) {
  disc.insertBefore(currentDisc, disc.children[0]);
  currentDisc.style.background = 'linear-gradient(to right, rgb(83, 91, 92), rgb(133, 133, 133), rgb(225, 225, 225), rgb(72, 77, 91), rgb(100, 101, 110), rgb(138, 132, 132), rgb(255, 255, 255), rgb(169, 169, 169))';
  currentDisc = "";
  readyToMove = false;
  moveCount++;
} // see if all discs are on Tower Three


function checkForWin() {
  if (towerThree.childElementCount === document.querySelectorAll('.discs').length) {
    alert('Solved in ' + moveCount + ' moves');
  }
} // function for evaluating movement and legal moves for towerOne


towerOne.addEventListener('click', function () {
  if (towerOne.querySelectorAll('.discs').length > 0 && readyToMove === false) {
    pickDisc(towerOne);
  } else if (readyToMove === true && currentDisc.parentElement.id === 'towerOne') {
    unpickDisc();
  } else if (readyToMove === true && towerOne.childElementCount === 0) {
    // allows a disc to be placed on an empty tower
    moveDisc(towerOne);
  } else if (readyToMove === true && currentDisc.clientWidth < towerOne.children[0].clientWidth) {
    // clientWidth accesses the width set in css for each child
    moveDisc(towerOne);
  } else if (readyToMove === true && currentDisc.clientWidth > towerOne.children[0].clientWidth) {
    unpickDisc();
  }
}); // function for evaluating movement and legal moves for towerTwo

towerTwo.addEventListener('click', function () {
  if (towerTwo.querySelectorAll('.discs').length > 0 && readyToMove === false) {
    pickDisc(towerTwo);
  } else if (readyToMove === true && currentDisc.parentElement.id === 'towerTwo') {
    unpickDisc();
  } else if (readyToMove === true && towerTwo.childElementCount === 0) {
    moveDisc(towerTwo);
  } else if (readyToMove === true && currentDisc.clientWidth < towerTwo.children[0].clientWidth) {
    moveDisc(towerTwo);
  } else if (readyToMove === true && currentDisc.clientWidth > towerTwo.children[0].clientWidth) {
    unpickDisc();
  }
}); // function for evaluating movement and legal moves for towerThree

towerThree.addEventListener('click', function () {
  if (towerThree.querySelectorAll('.discs').length > 0 && readyToMove === false) {
    pickDisc(towerThree);
  } else if (readyToMove === true && currentDisc.parentElement.id === 'towerThree') {
    unpickDisc();
  } else if (readyToMove === true && towerThree.childElementCount === 0) {
    moveDisc(towerThree);
  } else if (readyToMove === true && currentDisc.clientWidth < towerThree.children[0].clientWidth) {
    moveDisc(towerThree);
  } else if (readyToMove === true && currentDisc.clientWidth > towerThree.children[0].clientWidth) {
    unpickDisc();
  }

  checkForWin();
});
},{}],"../../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51212" + '/');

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
},{}]},{},["../../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../js/script.js"], null)
//# sourceMappingURL=/script.f5aa2ae4.map