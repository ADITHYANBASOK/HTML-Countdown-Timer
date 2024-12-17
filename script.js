// script.js

let countdownInterval;

document.getElementById("start-btn").addEventListener("click", () => {
  // Get user input for date and time
  const dateInput = document.getElementById("date-input").value;
  const timeInput = document.getElementById("time-input").value;

  if (!dateInput || !timeInput) {
    alert("Please select both a date and time.");
    return;
  }

  // Clear any existing countdown
  clearInterval(countdownInterval);

  // Combine date and time into a single Date object
  const targetDate = new Date(`${dateInput}T${timeInput}`).getTime();

  if (targetDate < new Date().getTime()) {
    alert("Please select a future date and time.");
    return;
  }

  // Start the countdown
  countdownInterval = setInterval(() => updateCountdown(targetDate), 1000);
});

function updateCountdown(targetDate) {
  const now = new Date().getTime();
  const difference = targetDate - now;

  if (difference <= 0) {
    clearInterval(countdownInterval);
    document.getElementById("timer").classList.add("d-none");
    document.getElementById("time-up").classList.remove("d-none");
    return;
  }

  // Time calculations
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  // Update HTML elements
  document.getElementById("timer").classList.remove("d-none");
  document.getElementById("time-up").classList.add("d-none");
  document.getElementById("days").textContent = days.toString().padStart(2, "0");
  document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
  document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
  document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
}
