class Translator {
    constructor(inputContainer, outputContainer) {
        this.inputContainer = inputContainer;
        this.outputContainer = outputContainer;
    }
}

class EnglishToMorse extends Translator {
    constructor(inputContainer, outputContainer) {
        super(inputContainer, outputContainer);
        this.englishToMorseDictionary = {
            "A" : ".-", "B" : "-...", "C" : "-.-.", "D" : "-..",
            "E" : ".", "F" : "..-.", "G" : "--.", "H" : "....",
            "I" : "..", "J" : ".---", "K" : "-.-", "L" : ".-..",
            "M" : "--", "N" : "-.", "O" : "---", "P" : ".--.",
            "Q" : "--.-", "R" : ".-.", "S" : "...", "T" : "-",
            "U" : "..-", "V" : "...-", "W" : ".--", "X" : "-..-",
            "Y" : "-.--", "Z" : "--.."
        }
    }
}

class MorseToEnglish extends Translator {
    constructor(inputContainer, outputContainer) {
        super(inputContainer, outputContainer);
        this.morseToEnglishDictionary = {
            ".-" : "A", "-..." : "B", "-.-." : "C", "-.." : "D",
            "." : "E", "..-." : "F", "--." : "G", "...." : "H",
            ".." : "I", ".---" : "J", "-.-" : "K", ".-.." : "L",
            "--" : "M", "-." : "N", "---" : "O", ".--." : "P",
            "--.-" : "Q", ".-." : "R", "..." : "S", "-" : "T",
            "..-" : "U", "...-" : "V", ".--" : "W", "-..-" : "X",
            "-.--" : "Y", "--.." : "Z"
        }
    }
}