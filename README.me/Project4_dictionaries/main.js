
// Function that creates and displays a dictionary value
function my_Dictionary() {

    // Create a JavaScript dictionary (object)
    var Animal = {
        Species: "Wolf",
        Color: "Gray",
        Age: 5,
        Habitat: "Forest"
    };

    // Delete the Species key before displaying it
    delete Animal.Species;

    // Display one value from the dictionary
    document.getElementById("Dictionary").innerHTML =
        Animal.Species;
}

