"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Translator =
/*#__PURE__*/
function () {
  function Translator(inputContainer, outputContainer) {
    _classCallCheck(this, Translator);

    this.inputContainer = inputContainer;
    this.outputContainer = outputContainer;
  }

  _createClass(Translator, [{
    key: "getInput",
    value: function getInput() {
      return document.querySelector(this.inputContainer).value;
    }
  }, {
    key: "displayOutput",
    value: function displayOutput() {
      var _this = this;

      document.querySelector(this.inputContainer).addEventListener("input", function (event) {
        document.querySelector(_this.outputContainer).value = _this.joinWords();
      });
    }
  }]);

  return Translator;
}();

var EnglishToMorse =
/*#__PURE__*/
function (_Translator) {
  _inherits(EnglishToMorse, _Translator);

  function EnglishToMorse() {
    var _this2;

    var inputContainer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ".english-input";
    var outputContainer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ".morse-input";

    _classCallCheck(this, EnglishToMorse);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(EnglishToMorse).call(this, inputContainer, outputContainer));
    _this2.englishToMorseDictionary = {
      "A": ".-",
      "B": "-...",
      "C": "-.-.",
      "D": "-..",
      "E": ".",
      "F": "..-.",
      "G": "--.",
      "H": "....",
      "I": "..",
      "J": ".---",
      "K": "-.-",
      "L": ".-..",
      "M": "--",
      "N": "-.",
      "O": "---",
      "P": ".--.",
      "Q": "--.-",
      "R": ".-.",
      "S": "...",
      "T": "-",
      "U": "..-",
      "V": "...-",
      "W": ".--",
      "X": "-..-",
      "Y": "-.--",
      "Z": "--.."
    };
    return _this2;
  }

  _createClass(EnglishToMorse, [{
    key: "getInputWords",
    value: function getInputWords() {
      return _get(_getPrototypeOf(EnglishToMorse.prototype), "getInput", this).call(this).toUpperCase().split(" ");
    }
  }, {
    key: "translateWords",
    value: function translateWords() {
      var _this3 = this;

      return this.getInputWords().map(function (word) {
        return word.split("").map(function (letter) {
          return _this3.englishToMorseDictionary[letter];
        }).join(" ");
      });
    }
  }, {
    key: "joinWords",
    value: function joinWords() {
      return this.translateWords().join("/");
    }
  }]);

  return EnglishToMorse;
}(Translator);

var MorseToEnglish =
/*#__PURE__*/
function (_Translator2) {
  _inherits(MorseToEnglish, _Translator2);

  function MorseToEnglish() {
    var _this4;

    var inputContainer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ".morse-input";
    var outputContainer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ".english-input";

    _classCallCheck(this, MorseToEnglish);

    _this4 = _possibleConstructorReturn(this, _getPrototypeOf(MorseToEnglish).call(this, inputContainer, outputContainer));
    _this4.morseToEnglishDictionary = {
      ".-": "A",
      "-...": "B",
      "-.-.": "C",
      "-..": "D",
      ".": "E",
      "..-.": "F",
      "--.": "G",
      "....": "H",
      "..": "I",
      ".---": "J",
      "-.-": "K",
      ".-..": "L",
      "--": "M",
      "-.": "N",
      "---": "O",
      ".--.": "P",
      "--.-": "Q",
      ".-.": "R",
      "...": "S",
      "-": "T",
      "..-": "U",
      "...-": "V",
      ".--": "W",
      "-..-": "X",
      "-.--": "Y",
      "--..": "Z"
    };
    return _this4;
  }

  _createClass(MorseToEnglish, [{
    key: "getInputWords",
    value: function getInputWords() {
      return _get(_getPrototypeOf(MorseToEnglish.prototype), "getInput", this).call(this).split("/");
    }
  }, {
    key: "translateWords",
    value: function translateWords() {
      var _this5 = this;

      return this.getInputWords().map(function (word) {
        return word.split(" ").map(function (letter) {
          return _this5.morseToEnglishDictionary[letter];
        }).join("");
      });
    }
  }, {
    key: "joinWords",
    value: function joinWords() {
      return this.translateWords().join(" ");
    }
  }]);

  return MorseToEnglish;
}(Translator);

var translateToMorse = new EnglishToMorse();
translateToMorse.displayOutput();
var translateToEnglish = new MorseToEnglish();
translateToEnglish.displayOutput();