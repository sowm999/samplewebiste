window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.jump-effect');

    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top;
        const viewportHeight = window.innerHeight;

        if (elementTop < viewportHeight) {
            element.classList.add('jump');
        } else {
            element.classList.remove('jump');
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const trailerButton = document.getElementById('trailer-button');
    const trailerModal = document.getElementById('trailer-modal');
    const closeButton = document.querySelector('.close-button');
    const trailerVideo = document.getElementById('trailer-video');
    const spurpunkVideo = document.getElementById('spurpunk-video');

    // Show the modal and play the trailer video when the button is clicked
    trailerButton.addEventListener('click', function (e) {
        e.preventDefault();
        trailerModal.style.display = 'block';
        trailerVideo.play();
    });

    // Close the modal when the close button is clicked
    closeButton.addEventListener('click', function () {
        trailerModal.style.display = 'none';
        trailerVideo.pause();
        trailerVideo.currentTime = 0;
    });

    // Close the modal when clicking outside the video
    window.addEventListener('click', function (event) {
        if (event.target === trailerModal) {
            trailerModal.style.display = 'none';
            trailerVideo.pause();
            trailerVideo.currentTime = 0;
        }
    });

    // Play video with sound on hover
    spurpunkVideo.addEventListener('mouseenter', function () {
        spurpunkVideo.muted = false; // Ensure sound is on
        spurpunkVideo.play();
    });

    // Pause video when mouse leaves the video area
    spurpunkVideo.addEventListener('mouseleave', function () {
        spurpunkVideo.pause();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Select all social media icons
    const icons = document.querySelectorAll('.social-links img');
    
    // Add the class to each icon to enable the spinning effect on hover
    icons.forEach(icon => {
        icon.classList.add('spin-on-hover');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Select all social media icons
    const icons = document.querySelectorAll('.social-links img');
    
    // Create an audio element
    const hoverSound = new Audio('soundEffects/click.mp3');

    // Add the class to each icon to enable the spinning effect on hover
    icons.forEach(icon => {
        icon.classList.add('spin-on-hover');
        
        // Add event listener for mouse hover
        icon.addEventListener('mouseover', function() {
            hoverSound.play(); // Play the sound
        });
    });
});