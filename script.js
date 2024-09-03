document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('spurpunk-video');
    const modal = document.getElementById('trailer-modal');
    const trailerButton = document.getElementById('trailer-button');
    const closeButton = document.querySelector('.close-button');

    // Play video on hover
    video.addEventListener('mouseenter', function () {
        video.play();
    });

    video.addEventListener('mouseleave', function () {
        video.pause();
        video.currentTime = 0;
    });

    // Modal functionality
    trailerButton.addEventListener('click', function (e) {
        e.preventDefault();
        modal.style.display = 'block';
        const trailerVideo = document.getElementById('trailer-video');
        trailerVideo.play();
    });

    closeButton.addEventListener('click', function () {
        modal.style.display = 'none';
        const trailerVideo = document.getElementById('trailer-video');
        trailerVideo.pause();
        trailerVideo.currentTime = 0;
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            const trailerVideo = document.getElementById('trailer-video');
            trailerVideo.pause();
            trailerVideo.currentTime = 0;
        }
    });
});
