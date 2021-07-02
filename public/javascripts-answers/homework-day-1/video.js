const video = document.querySelector('#vision-video');
const btn = document.querySelector('#play-video-btn');

let isPlaying = false;

btn.addEventListener('click', () => {
    // either use isPlaying variable or using video.paused property are both ok.
    if (isPlaying) {
        video.pause();
        btn.innerHTML = 'Watch video';
        isPlaying = false;
    } else {
        video.play();
        btn.innerHTML = 'Pause video';
        isPlaying = true;
    }
});