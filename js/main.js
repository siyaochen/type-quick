window.addEventListener('load', init);

let time = 0;
let wpm = 0;

const givenSentences = document.getElementById('given-sentences');
const highlightedSentences = document.getElementById('highlighted');
const userInput = document.getElementById('user-input');
const timeDisplay = document.getElementById('time');
const wpmDisplay = document.getElementById('wpm');
const congratsMsg = document.getElementById('congrats-msg');
const playAgainButton = document.getElementById('play-again');
const highScoreDisplay = document.getElementById('high-score');
const highScoreBox = document.getElementById('high-score-box');

function init() {
    // Hide congrats message
    congratsMsg.style.display = 'none';

    // Select and display sentence
    selectedSentences = selectSentence();
    givenSentences.innerHTML = selectedSentences;

    // Store default high score
    if (localStorage.getItem('highscore') === null) {
        localStorage.setItem('highscore', '0');
        highScoreBox.style.display = 'none';
    } else {
        highScoreDisplay.innerHTML = 'High Score: ' + localStorage.getItem('highscore');
        highScoreBox.style.display = 'block';
        console.log(localStorage.getItem('highscore'));
    }

    // Check user input for start of game
    userInput.addEventListener('input', function(e) {
        e.target.removeEventListener('input', arguments.callee);
        play(selectedSentences);
    });

    playAgainButton.addEventListener('click', function(e) {
        play(null);
    });
}

function play(selectedSentences) {
    // Reset values and formatting
    time = 0;
    wpm = 0;
    userInput.focus();
    congratsMsg.style.display = 'none';

    // Select sentences if not given
    if (!selectedSentences) {
        selectedSentences = selectSentence();
        highlightedSentences.innerHTML = null;
        givenSentences.innerHTML = selectedSentences;
        userInput.value = "";
    } else {
        match(selectedSentences);
    }

    // Check user input
    userInput.addEventListener('input', function(e) {
        if (match(selectedSentences)) {
            // Start over
            e.target.removeEventListener('input', arguments.callee);
            clearInterval(timer);
            clearInterval(wpmTracker);
            congratsMsg.style.display = 'block';

            // Check high score
            if (wpmDisplay.innerHTML > parseInt(localStorage.getItem('highscore'))) {
                console.log(wpmDisplay.innerHTML);
                console.log(localStorage.getItem('highscore'));
                localStorage.setItem('highscore', wpmDisplay.innerHTML.toString());
                console.log(localStorage.getItem('highscore'));
                highScoreDisplay.innerText = 'High Score: ' + localStorage.getItem('highscore');
                highScoreBox.style.display = 'block';
            }

            return;
        }
    });

    playAgainButton.addEventListener('click', function(e) {
        e.target.removeEventListener('click', arguments.callee);
        // Remove user input event listener here
        clearInterval(timer);
        clearInterval(wpmTracker);
        return;
    });

    // Update time and wpm every second
    var timer = setInterval(showTime, 1000);
    var wpmTracker = setInterval(showWPM, 1000);
}

function match(sentencesToMatch) {
     isMatch = true;
     typed = userInput.value;

    for ( i = 0; i < typed.length && isMatch; i++) {
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

    if (typed.length == sentencesToMatch.length && isMatch) {
        return true;
    }
    return false;
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
