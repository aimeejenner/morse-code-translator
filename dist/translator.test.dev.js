"use strict";

var _translator = require("./translator");

describe("Translate to Morse", function () {
  test("Should translate a single word from English to Morse", function () {
    var output = new _translator.EnglishToMorse("hello");
    expect(output.joinWords()).toBe(".... . .-.. .-.. ---");
  });
  test("Should translate a phrase from English to Morse", function () {
    var output = new _translator.EnglishToMorse("I wandered lonely as a cloud");
    expect(output.joinWords()).toBe("../.-- .- -. -.. . .-. . -../.-.. --- -. . .-.. -.--/.- .../.-/-.-. .-.. --- ..- -..");
  });
  test("Should not translate characters other than letters", function () {
    var output = new _translator.EnglishToMorse("!£#3)9%*?");
    expect(output.joinWords()).toBe("        ");
  });
});
describe("Translate to English", function () {
  test("Should translate a single word from Morse to English", function () {
    var output = new _translator.MorseToEnglish(".- .--. .--. .-.. .");
    expect(output.joinWords()).toBe("APPLE");
  });
  test("Should translate a phrase from Morse to English", function () {
    var output = new _translator.MorseToEnglish(".-/--. .. .- -. -/.-.. . .- .--./..-. --- .-./-- .- -. -.- .. -. -..");
    expect(output.joinWords()).toBe("A GIANT LEAP FOR MANKIND");
  });
  test("Should not translate characters other than dots or dashes", function () {
    var output = new _translator.MorseToEnglish("aT,3c^2+!");
    expect(output.joinWords()).toBe("");
  });
});