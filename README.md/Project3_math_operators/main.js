// This function uses the + operator to add two numbers
function addition_Function() {
    var addition = 10 + 5;
    document.getElementById("Addition").innerHTML = "10 + 5 = " + addition;
}

// This function uses the - operator to subtract two numbers
function subtraction_Function() {
    var subtraction = 10 - 5;
    document.getElementById("Subtraction").innerHTML = "10 - 5 = " + subtraction;
}

// This function uses the * operator to multiply two numbers
function multiplication_Function() {
    var multiplication = 10 * 5;
    document.getElementById("Multiplication").innerHTML = "10 * 5 = " + multiplication;
}

// This function uses the % operator to find the remainder
function modulus_Function() {
    var modulus = 25 % 6;
    document.getElementById("Modulus").innerHTML = "25 % 6 = " + modulus;
}

// This function uses the ++ operator to increase a number by 1
function increment_Function() {
    var number = 5;
    number++;
    document.getElementById("Increment").innerHTML = "5 incremented is " + number;
}

// This function uses the -- operator to decrease a number by 1
function decrement_Function() {
    var number = 5;
    number--;
    document.getElementById("Decrement").innerHTML = "5 decremented is " + number;
}

// This function uses Math.random() to create a random number
function random_Function() {
    var randomNumber = Math.random();
    document.getElementById("Random").innerHTML = "Random number: " + randomNumber;
}