"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
var _checkContainer = /*#__PURE__*/new WeakSet();
var _mouseEvent = /*#__PURE__*/new WeakSet();
var Parallax = /*#__PURE__*/function () {
  function Parallax(parallaxContainer, layers) {
    _classCallCheck(this, Parallax);
    _classPrivateMethodInitSpec(this, _mouseEvent);
    _classPrivateMethodInitSpec(this, _checkContainer);
    this.parallaxContainer = parallaxContainer;
    this.layers = layers;
    this.positionXProcent = 0;
    this.positionYProcent = 0;
    _classPrivateMethodGet(this, _checkContainer, _checkContainer2).call(this);
  }
  _createClass(Parallax, [{
    key: "parallax",
    value: function parallax() {
      for (var layer in this.layers) {
        this.layers[layer].el.style.cssText = "transform: translate(\n                ".concat(this.positionXProcent * (this.layers[layer].factor || 1) / 100, "%,\n                ").concat(this.positionYProcent * (this.layers[layer].factor || 1) / 100, "%\n            )");
      }
      requestAnimationFrame(this.parallax.bind(this));
    }
  }]);
  return Parallax;
}();
function _checkContainer2() {
  if (this.parallaxContainer) {
    _classPrivateMethodGet(this, _mouseEvent, _mouseEvent2).call(this);
  } else {
    throw new Error('Не найден parallax контейнер');
  }
}
function _mouseEvent2() {
  var _this = this;
  document.addEventListener('mousemove', function (e) {
    var parallaxContainerWidth = _this.parallaxContainer.offsetWidth;
    var parallaxContainerHeight = _this.parallaxContainer.offsetHeight;
    var positionX = e.pageX - parallaxContainerWidth / 2;
    var positionY = e.pageY - parallaxContainerHeight / 2;
    _this.positionXProcent = positionX / parallaxContainerWidth * 100;
    _this.positionYProcent = positionY / parallaxContainerHeight * 100;
  });
}