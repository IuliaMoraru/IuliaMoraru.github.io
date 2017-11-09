var requiredCredits = 40;
var myCredits;
var missingCredits;
var calculateButton = document.getElementById("calculate");
var resultBox = document.getElementById("result");
var generateButton = document.getElementById("generateBoxes");

init();

function init() {
    generateButton.addEventListener("click", generate);
    calculateButton.addEventListener("click", calculateMissingCredits);
}

function createInputBox(elementID) {
    var inputElem = document.createElement("input");
    var inputContainerElement = document.getElementById("inputContainer");
    inputElem.id = elementID;
    inputContainerElement.appendChild(inputElem);

}

function createBoxes(numberOfBoxes) {
    for (var i = 1; i <= numberOfBoxes; i++) {
        console.log("input" + i);
        createInputBox("input" + i);
    }
}

function generate() {
    var numberOfBoxes = document.getElementById("numberOfBoxes").value;
    createBoxes(numberOfBoxes);
}

function calculateMissingCredits() {
    console.log(inputField.value);
    myCredits = inputField.value;
    missingCredits = requiredCredits - myCredits;
    if (missingCredits > 0) {
        console.log("you need : " + missingCredits + " credits");
        resultBox.innerText = "you need : " + missingCredits + " more credits";
    }
    else {
        resultBox.innerText = "you passed!"
    }
}




