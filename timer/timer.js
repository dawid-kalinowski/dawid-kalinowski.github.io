let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

function startTimer() {
    clearInterval(timer);
    timer = setInterval(updateTimer, 10);
}

function stopTimer() {
    clearInterval(timer);
}

function resetTimer() {
    clearInterval(timer);
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    document.getElementById("timer").innerText = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds) + ":" + formatMilliseconds(milliseconds);
}

function updateTimer() {
    milliseconds += 10;
    if (milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds == 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes == 60) {
        minutes = 0;
        hours++;
    }
    document.getElementById("timer").innerText = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds) + ":" + formatMilliseconds(milliseconds);
}

function formatTime(time) {
    return (time < 10 ? "0" + time : time);
}

function formatMilliseconds(ms) {
    const msAsTwoDigits = Math.floor(ms / 10).toString();
    return msAsTwoDigits.padStart(2, '0');
}
