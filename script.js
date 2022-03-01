class Translator {
    constructor(inputContainer, outputContainer) {
        this.inputContainer = inputContainer;
        this.outputContainer = outputContainer;
    }
}

class EnglishToMorse extends Translator {
    constructor(inputContainer, outputContainer) {
        super(inputContainer, outputContainer);
    }
}

class MorseToEnglish extends Translator {
    constructor(inputContainer, outputContainer) {
        super(inputContainer, outputContainer);
    }
}