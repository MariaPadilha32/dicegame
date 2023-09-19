document.addEventListener("DOMContentLoaded", function () {
    const happyQuotes = ["Item1", "Item2", "Item3", "Item4", "Item5"];
    const randomIndex = Math.floor(Math.random() * happyQuotes.length);
    const randomQuote = happyQuotes[randomIndex];

    const outputParagraph = document.getElementById("output-paragraph");
    outputParagraph.textContent = randomQuote;
});