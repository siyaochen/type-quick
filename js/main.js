window.addEventListener('load', init);

let time = 0;
let wpm = 0;
let wordsTyped = 0;
let isPlaying;

const givenSentences = document.getElementById('given-sentences');
const userInput = document.getElementById('user-input');
const timeDisplay = document.getElementById('time');
const wpmDisplay = document.getElementById('wpm');

// Hard code possible sentences for now
const sentences = [
"Jealousy, turning saints into the sea. Swimming through sick lullabies, choking on your alibis. But it's just the price I pay, destiny is calling me. Open up my eager eyes, 'cause I'm Mr. Brightside."
];

function init() {
    // Select and display sentence
    let sentence = selectSentence(sentences);
    givenSentences.innerHTML = sentence;

    // Check words typed somewhere here

    // Update time and wpm every second
    setInterval(showTime, 1000);
    setInterval(showWPM, 1000);
}

function selectSentence(sentencesArr) {
    const randIndex = Math.floor(Math.random() * sentencesArr.length);
    return sentencesArr[randIndex];
}

function showTime() {
    time++;
    timeDisplay.innerHTML = time;
}

function showWPM() {
    if (time != 0) wpm = wordsTyped / time;
    else wpm = 0;
    wpmDisplay.innerHTML = wpm;
}
