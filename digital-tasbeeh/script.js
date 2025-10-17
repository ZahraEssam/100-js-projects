// DOMs
const countElement = document.getElementById("count");
const tasbeehBtn = document.getElementById("tasbeeh-btn");
const resetBtn = document.getElementById("reset-btn");

// Storage
const savedCount = localStorage.getItem("tasbeehCount");

// Variable to store state (with check for NaN)
let count = savedCount !== null && !isNaN(Number(savedCount)) 
    ? Number(savedCount) 
    : 0;

function updateUI() {
    countElement.textContent = count;
    if (count === 0) {
        countElement.style.opacity = "0.9";
    } else {
        countElement.style.opacity = "1";
    }
}

function saveCount() {
    localStorage.setItem("tasbeehCount", String(count));
}

updateUI();

tasbeehBtn.addEventListener("click", () => {
    count++;
    updateUI();
    saveCount();
});

resetBtn.addEventListener("click", () => {
    const confirmReset = confirm("Reset counter?");
    if (!confirmReset) return;
    count = 0;
    updateUI();
    saveCount();
});
