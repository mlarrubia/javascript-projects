const musicContainer = document.getElementById('music-container');

const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');

// Song titles
const songs = ["hey", "summer", "ukulele"];

// Keep track of songs

let songIndex = 1;

// Initially load song details into DOM
loadSong(songs[songIndex]);

// Update song details
function loadSong(song) {
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.jpg`;

    // if (musicContainer.classList.contains('play')) {
    //     audio.play();
    // }
}

// Play Song
function playSong() {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fa').classList.remove('fa-play')
    playBtn.querySelector('i.fa').classList.add('fa-pause')

    audio.play();
}


// Pause Song 
function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fa').classList.remove('fa-pause')
    playBtn.querySelector('i.fa').classList.add('fa-play')

    audio.pause();
}

// Previous Song
function prevSong() {
    songIndex--;

    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }

    loadSong(songs[songIndex])

    playSong();
}


// Next Song
function nextSong() {
    songIndex++;
    songIndex %= 3;
    loadSong(songs[songIndex]);
    playSong();
}

// Update progress bar
function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    let progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
}

// Set Progress bar
function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration
}



// Event Listener
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');

    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
})


// Change Song
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

// Time/song update 
audio.addEventListener('timeupdate', updateProgress);


// Click on progress bar
progressContainer.addEventListener('click', setProgress);

audio.addEventListener('ended', nextSong);