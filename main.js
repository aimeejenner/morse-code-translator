import { EnglishToMorse, MorseToEnglish } from "./translator.js";

const englishInput = document.querySelector(".translator__english-input");
const morseInput = document.querySelector(".translator__morse-input");

englishInput.addEventListener("input", (event) => {
    const translateToMorse = new EnglishToMorse(englishInput.value);
    morseInput.value = translateToMorse.joinWords();
})

morseInput.addEventListener("input", (event) => {
    const translateToEnglish = new MorseToEnglish(morseInput.value);
    englishInput.value = translateToEnglish.joinWords();
})