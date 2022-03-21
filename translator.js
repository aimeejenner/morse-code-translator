export class Translator {
    constructor(input, splitter, joiner) {
        this.input = input;
        this.splitter = splitter;
        this.joiner = joiner;
    }

    splitWords() {
        return this.input.value.split(this.splitter);
    }

    joinWords() {
        return this.translateWords().join(this.joiner);
    }
}

export class EnglishToMorse extends Translator {
    constructor(input, splitter = " ", joiner="/") {
        super(input, splitter, joiner);
        this.dictionary = {
            "A" : ".-", "B" : "-...", "C" : "-.-.", "D" : "-..",
            "E" : ".", "F" : "..-.", "G" : "--.", "H" : "....",
            "I" : "..", "J" : ".---", "K" : "-.-", "L" : ".-..",
            "M" : "--", "N" : "-.", "O" : "---", "P" : ".--.",
            "Q" : "--.-", "R" : ".-.", "S" : "...", "T" : "-",
            "U" : "..-", "V" : "...-", "W" : ".--", "X" : "-..-",
            "Y" : "-.--", "Z" : "--.."
        }
    }

    translateWords() {
        return this.splitWords().map(word => word
            .toUpperCase()
            .split("")
            .map(letter => this.dictionary[letter])
            .join(" ")
        );
    }
}

export class MorseToEnglish extends Translator {
    constructor(input, splitter="/", joiner=" ") {
        super(input, splitter, joiner);
        this.dictionary = {
            ".-" : "A", "-..." : "B", "-.-." : "C", "-.." : "D",
            "." : "E", "..-." : "F", "--." : "G", "...." : "H",
            ".." : "I", ".---" : "J", "-.-" : "K", ".-.." : "L",
            "--" : "M", "-." : "N", "---" : "O", ".--." : "P",
            "--.-" : "Q", ".-." : "R", "..." : "S", "-" : "T",
            "..-" : "U", "...-" : "V", ".--" : "W", "-..-" : "X",
            "-.--" : "Y", "--.." : "Z"
        }
    }

    translateWords() {
        return this.splitWords().map(word => word
            .split(" ")
            .map(letter => this.dictionary[letter])
            .join("")
        );      
    }
}