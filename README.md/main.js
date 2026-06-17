// Function that uses a ternary operator and browser input
function Age_Function() {

    // Get the value entered by the user
    var Age = document.getElementById("Age").value;

    // Use a ternary operation to determine voting eligibility
    var Vote = (Age < 18) ? "You are too young to vote." : "You are old enough to vote.";

    // Display the result
    document.getElementById("Vote").innerHTML = Vote;
}

// Constructor function using the "this" keyword
function Vehicle(Make, Model, Year) {

    // Assign values to object properties
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
}

// Create a new object using the "new" keyword
var Barbara = new Vehicle("Ford", "Mustang", "2024");

// Function to display the constructor object
function myFunction() {

    // Display object information in an HTML element
    document.getElementById("Keywords_and_Constructors").innerHTML =
        "Barbara drives a " + Barbara.Vehicle_Year + " " +
        Barbara.Vehicle_Make + " " + Barbara.Vehicle_Model + ".";
}

// Function containing a nested function
function count_Function() {

    // Variable for counting
    var Starting_point = 9;

    // Nested function
    function Plus_one() {
        Starting_point += 1;
    }

    // Call the nested function
    Plus_one();

    // Display the result
    document.getElementById("Counting").innerHTML = Starting_point;
}
