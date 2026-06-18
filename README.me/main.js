// Global variable
var X = 10;

// Function using a local variable
function Add_Numbers_1() {
    var Y = 5; // Local variable
    document.write(X + Y + "<br>");
}

// Function using an if statement
function Greeting() {
    var hour = new Date().getHours();

    if (hour < 12) {
        document.getElementById("Greeting").innerHTML = "Good Morning!";
    }
    else {
        document.getElementById("Greeting").innerHTML = "Good Day!";
    }
}

// Function with an intentional error
function Error_Function() {
    var Z = 20;

    // Intentional error: misspelled variable name
    console.log(z);

    // Open Chrome Dev Tools (F12) to see the error
}

// Time function from previous slides
function Time_function() {
    var Time = new Date().getHours();
    var Reply;

    if (Time < 12 && Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 && Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }

    document.getElementById("Time_of_day").innerHTML = Reply;
}