class Translator {
    constructor(inputContainer, outputContainer) {
        this.inputContainer = inputContainer;
        this.outputContainer = outputContainer;
    }

    getInput() {
        return document.querySelector(this.inputContainer).value;
    }

    displayOutput() {
        document.querySelector(this.inputContainer).addEventListener("input", (event) => {
            document.querySelector(this.outputContainer).value = this.joinWords();
        })
    }
}

class EnglishToMorse extends Translator {
    constructor(inputContainer=".english-input", outputContainer=".morse-input") {
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

    getInputWords() {
        return super.getInput().toUpperCase().split(" ");
    }

    translateWords() {
        return this.getInputWords().map(word => word
            .split("")
            .map(letter => this.englishToMorseDictionary[letter])
            .join(" ")
        );
    }

    joinWords() {
        return this.translateWords().join("/");
    }
}

class MorseToEnglish extends Translator {
    constructor(inputContainer=".morse-input", outputContainer=".english-input") {
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

    getInputWords() {
        return super.getInput().split("/");
    }

    translateWords() {
        return this.getInputWords().map(word => word
            .split(" ")
            .map(letter => this.morseToEnglishDictionary[letter])
            .join("")
        );      
    }

    joinWords() {
        return this.translateWords().join(" ");
    }
}

const translateToMorse = new EnglishToMorse();
translateToMorse.displayOutput();

const translateToEnglish = new MorseToEnglish();
translateToEnglish.displayOutput();