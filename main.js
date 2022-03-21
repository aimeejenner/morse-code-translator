import { Translator, EnglishToMorse, MorseToEnglish } from "./translator.js";

const englishInput = document.querySelector(".translator__english-input");
const morseInput = document.querySelector(".translator__morse-input");

const translateToMorse = new EnglishToMorse(englishInput);
englishInput.addEventListener("input", (event) => {
    morseInput.value = translateToMorse.joinWords();
})

const translateToEnglish = new MorseToEnglish(morseInput);
morseInput.addEventListener("input", (event) => {
    englishInput.value = translateToEnglish.joinWords();
})