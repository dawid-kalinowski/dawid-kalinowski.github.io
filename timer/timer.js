let timer;
let hours = 0;
let minutes = 10;
let seconds = 0;
let milliseconds = 0;
let timerRunning = false;


let initialHours = 0;
let initialMinutes = 10;
let initialSeconds = 0;

window.onload = function () {
    setInitialTime();
    initializeTimerValues();
}




function setInitialTime() {
    initialHours = Math.max(0, initialHours);
    initialMinutes = Math.max(0, Math.min(initialMinutes, 59));
    initialSeconds = Math.max(0, Math.min(initialSeconds, 59));

}

function initializeTimerValues() {
    hours = initialHours;
    minutes = initialMinutes;
    seconds = initialSeconds;

}

function resetTimer() {
    if (!timerRunning) {
        clearInterval(timer);
        hours = initialHours;
        minutes = initialMinutes;
        seconds = initialSeconds;
        milliseconds = 0;
        document.getElementById("timer").innerText = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds) + "." + formatMilliseconds(milliseconds);
    }
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
    document.getElementById("resetButton").disabled = true;
    document.getElementById("resetButton").classList.add("disabled");
    clearInterval(timer);
    timer = setInterval(updateTimer, 10);
}

function stopTimer() {
    clearInterval(timer);
    timerRunning = false;
    document.getElementById("startStopButton").innerText = "Start";
    document.getElementById("resetButton").disabled = false;
    document.getElementById("resetButton").classList.remove("disabled");
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



function openModal() {
    if (!timerRunning) {
        document.getElementById("myModal").style.display = "block";
    }
}


function closeModal() {
    document.getElementById("myModal").style.display = "none";
}


function setTime() {
    const newHours = parseInt(document.getElementById("modalHours").value) || 0;
    const newMinutes = parseInt(document.getElementById("modalMinutes").value) || 0;
    const newSeconds = parseInt(document.getElementById("modalSeconds").value) || 0;

    initialHours = Math.max(0, newHours);
    initialMinutes = Math.max(0, Math.min(newMinutes, 59));
    initialSeconds = Math.max(0, Math.min(newSeconds, 59));

    hours = initialHours;
    minutes = initialMinutes;
    seconds = initialSeconds;
    milliseconds = 0;

    document.getElementById("timer").innerText = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds) + "." + formatMilliseconds(milliseconds);
    closeModal();
}

