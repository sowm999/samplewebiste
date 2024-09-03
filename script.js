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
