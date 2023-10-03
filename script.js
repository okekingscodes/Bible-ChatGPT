function appendValue() {
    // Get the value from the input field
    var inputValue = document.getElementById("inputField").value;
    
    // Trim the value to at most 5 characters
    var appendValue = inputValue.slice(0, 5);
            
    // If the value is more than 5 characters, add "..."
    if (inputValue.length > 5) {
        appendValue += "...";
    }
        
    // Get the paragraph element
    var outputParagraph = document.getElementById("history");

    // Append the value to the innerHTML of the paragraph
    outputParagraph.innerHTML = appendValue; // Corrected this line
}


function appendValue() {
    // Get the value from the input field
    var inputValue = document.getElementById("inputField").value;
    
    // Split the input value into an array of words
    var words = inputValue.split(' ');

    // If the number of words is more than 5, trim it
    if (words.length > 5) {
        // Join the first 5 words and add "..." at the end
        var appendValue = words.slice(0, 5).join(' ') + "...";
    } else {
        // If it's already 5 or fewer words, keep it as is
        var appendValue = inputValue;
    }
        
    // Get the paragraph element
    var outputParagraph = document.getElementById("history");

    // Set the innerHTML of the paragraph
    outputParagraph.innerHTML = appendValue;
}
