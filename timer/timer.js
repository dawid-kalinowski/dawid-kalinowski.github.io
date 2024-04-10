let timer;
let hours = 0;
let minutes = 10;
let seconds = 0;
let milliseconds = 0;
let timerRunning = false;

function initializeTimerValues() {
    hours = parseInt(document.getElementById("hours").value) || 0;
    minutes = parseInt(document.getElementById("minutes").value) || 10;
    seconds = parseInt(document.getElementById("seconds").value) || 0;

    hours = Math.max(0, hours);
    minutes = Math.max(0, Math.min(minutes, 59));
    seconds = Math.max(0, Math.min(seconds, 59));
}

function toggleTimer() {
    if (timerRunning) {
        stopTimer();
    } else {
        startTimer();
    }
}

function startTimer() {
    if (milliseconds === 0 && seconds === 0 && minutes === 0 && hours === 0) {
        initializeTimerValues();
    }
    timerRunning = true;
    document.getElementById("startStopButton").innerText = "Stop";
    clearInterval(timer);
    timer = setInterval(updateTimer, 10);
}

function stopTimer() {
    clearInterval(timer);
    timerRunning = false;
    document.getElementById("startStopButton").innerText = "Start";
}

function resetTimer() {
    if (!timerRunning) {
        clearInterval(timer);
        hours = 0;
        minutes = 10;
        seconds = 0;
        milliseconds = 0;
        document.getElementById("timer").innerText = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds) + "." + formatMilliseconds(milliseconds);

        document.getElementById("hours").value = hours;
        document.getElementById("minutes").value = minutes;
        document.getElementById("seconds").value = seconds;
    }
}

function updateTimer() {
    milliseconds -= 10;
    if (milliseconds < 0) {
        milliseconds = 990;
        seconds--;
    }
    if (seconds < 0) {
        seconds = 59;
        minutes--;
    }
    if (minutes < 0) {
        minutes = 59;
        hours--;
    }
    if (hours < 0) {
        resetTimer();
    } else {
        document.getElementById("timer").innerText = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds) + ":" + formatMilliseconds(milliseconds);
    }
}

function formatTime(time) {
    return (time < 10 ? "0" + time : time);
}

function formatMilliseconds(ms) {
    const msWithLeadingZeros = ms < 100 ? '0' + Math.floor(ms / 10) : Math.floor(ms / 10).toString();
    return msWithLeadingZeros;
}

