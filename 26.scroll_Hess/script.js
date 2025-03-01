/*
  This script uses IntersectionObserver to detect when a text box becomes at least 50% visible 
  within the scrollable container. When a text box is active, its corresponding background image 
  (matched by data-index) is displayed.
*/

// Select all text boxes and background images
const textBoxes = document.querySelectorAll('.text-box');
const bgImages = document.querySelectorAll('.bg-img');

// Use the container (which has overflow-y: scroll) as the root for observation.
const container = document.querySelector('.container');

// Set IntersectionObserver options with the container as root.
const options = {
  root: container,
  threshold: 0.5
};

// Callback for IntersectionObserver that activates the matching background image.
const observerCallback = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Get the index from the text box's data attribute
      const index = entry.target.getAttribute('data-index');
      // Remove "active" from all background images
      bgImages.forEach(img => img.classList.remove('active'));
      // Add "active" to the background image that matches this index
      const activeBg = document.querySelector(`.bg-img[data-index="${index}"]`);
      if (activeBg) {
        activeBg.classList.add('active');
      }
    }
  });
};

// Create the IntersectionObserver with the specified options and callback.
const observer = new IntersectionObserver(observerCallback, options);

// Observe each text box
textBoxes.forEach(box => observer.observe(box));