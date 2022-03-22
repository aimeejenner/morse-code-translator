import { Translator, EnglishToMorse, MorseToEnglish } from "./translator";

describe("Translate to Morse", () => {
    test("Should translate a single word from English to Morse", () => {
        const output = new EnglishToMorse("hello");
        expect(output.joinWords()).toBe(".... . .-.. .-.. ---");
    });
    test("Should translate a phrase from English to Morse", () => {
        const output = new EnglishToMorse("I wandered lonely as a cloud");
        expect(output.joinWords()).toBe("../.-- .- -. -.. . .-. . -../.-.. --- -. . .-.. -.--/.- .../.-/-.-. .-.. --- ..- -..")
    });
    test("Should not translate characters other than letters", () => {
        const output = new EnglishToMorse("!£#3)9%*?");
        expect(output.joinWords()).toBe("        ");
    });
})

describe("Translate to English", () => {
    test("Should translate a single word from Morse to English", () => {
        const output = new MorseToEnglish(".- .--. .--. .-.. .");
        expect(output.joinWords()).toBe("APPLE");
    });
    test("Should translate a phrase from Morse to English", () => {
        const output = new MorseToEnglish(".-/--. .. .- -. -/.-.. . .- .--./..-. --- .-./-- .- -. -.- .. -. -..");
        expect(output.joinWords()).toBe("A GIANT LEAP FOR MANKIND")
    });
    test("Should not translate characters other than dots or dashes", () => {
        const output = new MorseToEnglish("aT,3c^2+!");
        expect(output.joinWords()).toBe("");
    });
})