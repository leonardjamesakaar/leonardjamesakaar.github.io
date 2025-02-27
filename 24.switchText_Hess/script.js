// Array of sentences to display
const sentences = [
    "The sun spills in from the west facing window.",
    "The last light of a golden day reaches in to say goodbye",
    "leaving its lasting mark on my skin to distinguish now from and remind me of younger, paler times,",
    "times passed like the days passed, lost to the horizon like the finite light of dusk.",
    "Keep your face to the sunshine and you will never see the shadows. But where should I look when the evening sunlight fades?"
];

// Reference to the text box element
const textBox = document.getElementById('textBox');

// Initialize index to keep track of the current sentence
let currentIndex = 0;

// Function to cycle through sentences in order
document.body.addEventListener('click', () => {
    textBox.textContent = sentences[currentIndex];
    currentIndex = (currentIndex + 1) % sentences.length; // Loop back to the start
});