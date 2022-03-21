"use strict";

var _this3 = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Translator = function Translator(input, output, dictionary) {
  _classCallCheck(this, Translator);

  this.input = input;
  this.output = output;
  this.dictionary = dictionary;
};

var EnglishToMorse =
/*#__PURE__*/
function (_Translator) {
  _inherits(EnglishToMorse, _Translator);

  function EnglishToMorse(input, output, dictionary) {
    _classCallCheck(this, EnglishToMorse);

    return _possibleConstructorReturn(this, _getPrototypeOf(EnglishToMorse).call(this, input, output, dictionary));
  }

  _createClass(EnglishToMorse, [{
    key: "getInputWords",
    value: function getInputWords() {
      return this.input.toUpperCase().split(" ");
    }
  }, {
    key: "translateWords",
    value: function translateWords() {
      var _this = this;

      return this.input.map(function (word) {
        return word.split("").map(function (letter) {
          return _this.dictionary[letter];
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

  function MorseToEnglish(input, output, dictionary) {
    _classCallCheck(this, MorseToEnglish);

    return _possibleConstructorReturn(this, _getPrototypeOf(MorseToEnglish).call(this, input, output, dictionary));
  }

  _createClass(MorseToEnglish, [{
    key: "getInputWords",
    value: function getInputWords() {
      return input.split("/");
    }
  }, {
    key: "translateWords",
    value: function translateWords() {
      var _this2 = this;

      return this.getInputWords().map(function (word) {
        return word.split(" ").map(function (letter) {
          return _this2.dictionary[letter];
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

var englishInput = document.querySelector(".english-input").value;
var morseInput = document.querySelector(".morse-input").value;
var englishToMorseDictionary = {
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
var morseToEnglishDictionary = {
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
var translateToMorse = new EnglishToMorse(englishInput, morseInput, englishToMorseDictionary);
translateToMorse.displayOutput();
var translateToEnglish = new MorseToEnglish(morseInput, englishInput, morseToEnglishDictionary);
translateToEnglish.displayOutput();
var displayOutput = document.querySelector(input).addEventListener("input", function (event) {
  document.querySelector(output).value = _this3.joinWords();
});