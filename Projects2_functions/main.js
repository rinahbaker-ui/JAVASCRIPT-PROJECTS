// Function that creates and displays a message
function displayMessage() {

    // Create a string variable
    var message = "Welcome to JavaScript";

    // Use the += operator to concatenate additional text
    message += "! This text was added using the += operator.";

    // Display the completed string in the paragraph element
    document.getElementById("messageOutput").innerHTML = message;
}