window.addEventListener('load', init);

let time = 0;
let wpm = 0;
let isPlaying;

const givenSentences = document.getElementById('given-sentences');
const highlightedSentences = document.getElementById('highlighted');
const userInput = document.getElementById('user-input');
const timeDisplay = document.getElementById('time');
const wpmDisplay = document.getElementById('wpm');

// Hard code possible sentences for now
const sentences = [
"Jealousy, turning saints into the sea. Swimming through sick lullabies, choking on your alibis. But it's just the price I pay, destiny is calling me. Open up my eager eyes, 'cause I'm Mr. Brightside."
];

function init() {
    // Select and display sentence
    var selectedSentences = selectSentence(sentences);
    givenSentences.innerHTML = selectedSentences;

    // Check user input
    userInput.addEventListener('input', function() {
        match(selectedSentences)
    });

    // Update time and wpm every second
    setInterval(showTime, 1000);
    setInterval(showWPM, 1000);
}

function selectSentence(sentencesArr) {
    const randIndex = Math.floor(Math.random() * sentencesArr.length);
    return sentencesArr[randIndex];
}

function match(sentencesToMatch) {
    var isMatch = true;
    var typed = userInput.value;

    for (var i = 0; i < typed.length && isMatch; i++) {
        if (typed.charAt(i) == sentencesToMatch.charAt(i)) {
            highlightedSentences.innerHTML = sentencesToMatch.substring(0, i + 1);
            givenSentences.innerHTML = sentencesToMatch.substring(i + 1);
        }
        else isMatch = false;
    }
    if (i == 0) {
        highlightedSentences.innerHTML = "";
        givenSentences.innerHTML = sentencesToMatch;
    }
}

function showTime() {
    time++;
    timeDisplay.innerHTML = time;
}

function showWPM() {
    if (time != 0) wpm = parseInt(12 * userInput.value.length / time);
    else wpm = 0;
    wpmDisplay.innerHTML = wpm;
}
