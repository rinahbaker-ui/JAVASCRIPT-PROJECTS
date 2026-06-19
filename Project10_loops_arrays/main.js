// This function uses a while loop
function while_Loop() {
    let text = "";
    let number = 1;

    // Continue looping while number is less than or equal to 5
    while (number <= 5) {
        text += "Number " + number + "<br>";
        number++;
    }

    document.getElementById("Loop").innerHTML = text;
}

// This function uses a for loop
function for_Loop() {
    let text = "";

    // Loop through numbers 1 through 5
    for (let i = 1; i <= 5; i++) {
        text += "Count: " + i + "<br>";
    }

    document.getElementById("For_Loop").innerHTML = text;
}

// This function uses an array
function array_Function() {

    // Create an array of favorite animals
    let animals = ["Dog", "Cat", "Horse", "Rabbit"];

    document.getElementById("Array").innerHTML =
        "My favorite animal is " + animals[0] +
        ". Another favorite is " + animals[2] + ".";
}

// Create an object using the let keyword
let car = {
    make: "Ford",
    model: "Mustang",
    year: 2024,
    color: "Red"
};

// This function displays information from the object
function object_Function() {
    document.getElementById("Object").innerHTML =
        "I drive a " + car.color + " " + car.year + " " +
        car.make + " " + car.model + ".";
}