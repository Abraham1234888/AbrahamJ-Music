const playbtn = document.getElementsById('playbtn');
const audio = document.getElementsById('audio');


playbtn.addEventListener('click', () => {
    if (audio.paused){
        audio.play();
        playbtn.textContent = 'Pause';
    } else {
        audio.pause();
        playbtn.textContent = 'Play';
    }

});