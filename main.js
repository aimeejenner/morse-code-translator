import { Translator, EnglishToMorse, MorseToEnglish } from "./translator.js";

const englishInput = document.querySelector(".english-input");
const morseInput = document.querySelector(".morse-input");

const translateToMorse = new EnglishToMorse(englishInput);
englishInput.addEventListener("input", (event) => {
    morseInput.value = translateToMorse.joinWords();
})

const translateToEnglish = new MorseToEnglish(morseInput);
morseInput.addEventListener("input", (event) => {
    englishInput.value = translateToEnglish.joinWords();
})