"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Translator = function Translator(inputContainer, outputContainer) {
  _classCallCheck(this, Translator);

  this.inputContainer = inputContainer;
  this.outputContainer = outputContainer;
};

var EnglishToMorse =
/*#__PURE__*/
function (_Translator) {
  _inherits(EnglishToMorse, _Translator);

  function EnglishToMorse(inputContainer, outputContainer) {
    var _this;

    _classCallCheck(this, EnglishToMorse);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EnglishToMorse).call(this, inputContainer, outputContainer));
    _this.englishToMorseDictionary = {
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
    return _this;
  }

  return EnglishToMorse;
}(Translator);

var MorseToEnglish =
/*#__PURE__*/
function (_Translator2) {
  _inherits(MorseToEnglish, _Translator2);

  function MorseToEnglish(inputContainer, outputContainer) {
    var _this2;

    _classCallCheck(this, MorseToEnglish);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(MorseToEnglish).call(this, inputContainer, outputContainer));
    _this2.morseToEnglishDictionary = {
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
    return _this2;
  }

  return MorseToEnglish;
}(Translator);