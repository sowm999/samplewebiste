document.addEventListener('DOMContentLoaded', function () {
    const trailerButton = document.getElementById('trailer-button');
    const trailerVideoContainer = document.getElementById('trailer-video-container');
    const trailerVideo = document.getElementById('trailer-video');

    // Show and play the trailer video when the button is clicked
    trailerButton.addEventListener('click', function (e) {
        e.preventDefault();
        trailerVideoContainer.style.display = 'block';
        trailerVideo.play();
    });
});
