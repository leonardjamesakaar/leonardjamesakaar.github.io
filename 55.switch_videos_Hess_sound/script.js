let videoPlayer = document.getElementById('videoPlayer');
let videoSources = ['videos/video01.mp4', 'videos/video02.mp4'];
let videoTimes = [0, 0]; // Store playback times for both videos
let currentVideoIndex = 0;
let firstClick = true;

function switchVideo() {
    if (firstClick) {
        videoPlayer.muted = false; // Unmute on first interaction
        firstClick = false;
    }
    
    // Save the current playback time
    videoTimes[currentVideoIndex] = videoPlayer.currentTime;
    
    // Toggle video index
    currentVideoIndex = 1 - currentVideoIndex;
    
    // Switch the video source and set the saved time
    videoPlayer.src = videoSources[currentVideoIndex];
    videoPlayer.currentTime = videoTimes[currentVideoIndex];
    videoPlayer.play();
}