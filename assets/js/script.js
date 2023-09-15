// Array of happiness quotes
const happinessQuotes = [
    "Happiness is a choice.",
    "Find joy in the ordinary.",
    "Smile, and the world smiles with you."
];

// Function to generate a random quote
function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * happinessQuotes.length);
    const randomQuote = happinessQuotes[randomIndex];
    const quoteDisplay = document.getElementById("quote-display");
    quoteDisplay.textContent = randomQuote;
}

// Attach the generateRandomQuote function to the button's click event
const generateButton = document.getElementById("generate-quote");
generateButton.addEventListener("click", generateRandomQuote);

// Initial quote generation when the page loads
generateRandomQuote();
