// script.js

// Array of video file names
const videos = ["video01.mp4", "video02.mp4", "video03.mp4", "video04.mp4"];

// Get references to HTML elements
const videoElement = document.getElementById("mainVideo");
const textBox = document.getElementById("textBox");

// Object to store playback positions
const videoPositions = {};

// Current video index
let currentVideo = 0;

// Flag to check if first interaction has occurred
let firstClick = true;

// Function to load and play a video at a saved time (if any)
function loadVideo(index) {
  const videoSrc = `videos/${videos[index]}`;
  videoElement.src = videoSrc;
  videoElement.loop = false;
  videoElement.load();
  videoElement.onloadedmetadata = () => {
    videoElement.currentTime = videoPositions[videos[index]] || 0;
    videoElement.play();
  };
}

// When the text box is clicked
textBox.addEventListener("click", () => {
  // Enable sound after the first click
  if (firstClick) {
    videoElement.muted = false;
    firstClick = false;
  }

  // Save current time of the current video
  videoPositions[videos[currentVideo]] = videoElement.currentTime;

  // Pick a random new video index different from the current
  let nextVideoIndex;
  do {
    nextVideoIndex = Math.floor(Math.random() * videos.length);
  } while (nextVideoIndex === currentVideo);

  // Update current video index
  currentVideo = nextVideoIndex;

  // Load and play the new video, resuming from last saved position if any
  loadVideo(currentVideo);
});

// Loop the video manually when it ends
videoElement.addEventListener("ended", () => {
  videoElement.currentTime = 0;
  videoElement.play();
});

// Save position when navigating away or closing the tab
window.addEventListener("beforeunload", () => {
  videoPositions[videos[currentVideo]] = videoElement.currentTime;
});