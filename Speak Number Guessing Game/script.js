const msgEl = document.getElementById('msg');

const randomNum = getRandomNumber();



// Speech Object
window.SpeechRecognition = window.webkitSpeechRecognition;


let recognition = new window.SpeechRecognition();

// Start recognition and game
recognition.start();

// Capture user speak
function onSpeak(e) {
    const msg = e.results[0][0].transcript;

    // writeMessage(msg);
    // checkNumber(msg);
}


console.log('Number', randomNum);
function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}


// Speak result
recognition.addEventListener('result', onSpeak);