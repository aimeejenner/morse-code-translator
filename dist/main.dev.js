"use strict";

var _translator = require("./translator.js");

var englishInput = document.querySelector(".translator__english-input");
var morseInput = document.querySelector(".translator__morse-input");
var translateToMorse = new _translator.EnglishToMorse(englishInput);
englishInput.addEventListener("input", function (event) {
  morseInput.value = translateToMorse.joinWords();
});
var translateToEnglish = new _translator.MorseToEnglish(morseInput);
morseInput.addEventListener("input", function (event) {
  englishInput.value = translateToEnglish.joinWords();
});