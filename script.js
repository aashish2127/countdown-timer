let timer;
let totalTime;
let remainingTime;
let isRunning = false;

function startTimer() {
    if (isRunning) return;
    let input = document.getElementById("timeInput").value;
    if (input === "" || isNaN(input) || input <= 0) {
        alert("Please enter a valid time in seconds");
        return;
    }
    totalTime = parseInt(input);
    remainingTime = totalTime;
    updateDisplay(remainingTime);
    isRunning = true;
    timer = setInterval(countdown, 1000);
}

function countdown() {
    if (remainingTime <= 0) {
        clearInterval(timer);
        isRunning = false;
        alert("Time's up!");
        return;
    }
    remainingTime--;
    updateDisplay(remainingTime);
}

function stopTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    remainingTime = totalTime;
    updateDisplay(totalTime);
}

function updateDisplay(seconds) {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;
    document.getElementById("display").innerText = 
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}