// This function uses the concat() method
// to combine multiple strings into one sentence
function fullSentence() {
    var part1 = "I am learning ";
    var part2 = "JavaScript ";
    var part3 = "and enjoying ";
    var part4 = "web development.";

    var wholeSentence = part1.concat(part2, part3, part4);

    document.getElementById("Concat").innerHTML = wholeSentence;
}

// This function uses the slice() method
// to extract part of a string
function sliceMethod() {
    var sentence = "Learning JavaScript is fun and rewarding.";
    var section = sentence.slice(9, 19);

    document.getElementById("Slice").innerHTML = section;
}

// This function uses the toString() method
// to convert a number into a string
function stringMethod() {
    var number = 2026;

    document.getElementById("Numbers").innerHTML = number.toString();
}

// This function uses the toPrecision() method
// to format a number to a specified length
function precisionMethod() {
    var number = 12345.678901234;

    document.getElementById("Precision").innerHTML = number.toPrecision(8);
}