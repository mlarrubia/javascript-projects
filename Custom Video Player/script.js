const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');
const sound = document.getElementById('sound');
const volume = document.getElementById('volume');

video.currentTime = 0;
// Play and Pause video
function toggleVideoStatus() {
    if (video.paused) {
        video.play()
        video.volume = .5;
    } else {
        video.pause();
    }
}

function updatePlayIcon() {
    if (video.paused) {
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
    }
    else {
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
    }
}

function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100;

    // Get minutes
    let mins = Math.floor(video.currentTime / 60)
    if (mins < 10) {
        mins = '0' + String(mins);
    }

    // Get seconds
    let seconds = Math.floor(video.currentTime % 60)
    if (seconds < 10) {
        seconds = '0' + String(seconds);
    }

    timestamp.innerHTML = `${mins}:${seconds}`
}

function stopVideo() {
    video.currentTime = 0;
    video.pause();
}

function setVideoProgress() {
    video.currentTime = (+progress.value * video.duration) / 100;
}

function updateSound() {
    volume.classList.toggle('hide');
    video.volume = volume.value;
    console.log(video.volume)
    console.log(volume.value)
    if (video.volume == 0) {
        sound.innerHTML =
            `
        <i class="fa fa-volume-off fa-2x"></i>
        <input type="range" id="volume" class="volume" min="0" max="1" step="0.1" value="${video.volume}">
        `
    }
    else {
        `
        "fa fa-volume-up fa-2x"></i>
        <input type="range" id="volume" class="volume" min="0" max="1" step="0.1" value="${video.volume}">
        `
    }
}






// Event Listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);
stop.addEventListener('click', stopVideo);
progress.addEventListener('click', setVideoProgress);

sound.addEventListener('click', updateSound);