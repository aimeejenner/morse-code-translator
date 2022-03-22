"use strict";

var _translator = require("./translator.js");

var englishInput = document.querySelector(".translator__english-input");
var morseInput = document.querySelector(".translator__morse-input");
englishInput.addEventListener("input", function (event) {
  var translateToMorse = new _translator.EnglishToMorse(englishInput.value);
  morseInput.value = translateToMorse.joinWords();
});
morseInput.addEventListener("input", function (event) {
  var translateToEnglish = new _translator.MorseToEnglish(morseInput.value);
  englishInput.value = translateToEnglish.joinWords();
});