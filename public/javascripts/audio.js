const happyAudio = document.querySelector('#happy-audio');
const happyBtn = document.querySelector('#audio-btn');
const audioLabel = document.querySelector('#audio-label');

let isPlaying = false;

happyBtn.addEventListener('click', () => {
  if (isPlaying) {
    happyAudio.pause();
    happyBtn.innerHTML = 'Play';
    audioLabel.classList.remove('animate-pulse');
    isPlaying = false;
  } else {
    happyAudio.play();
    happyBtn.innerHTML = 'Pause';
    audioLabel.classList.add('animate-pulse');
    isPlaying = true;
  }
});
