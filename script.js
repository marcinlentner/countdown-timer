const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

const countdownDate = new Date("October 2, 2024 00:00:00").getTime(); // Set your target date/time here

const countdownElements = document.getElementById("countdown-elements");
const startButton = document.getElementById("start-button");

function updateCountdown() {
  const currentTime = new Date().getTime();
  const timeLeft = countdownDate - currentTime;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  daysElement.textContent = days;
  hoursElement.textContent = hours;
  minutesElement.textContent = minutes;
  secondsElement.textContent = seconds;

  if (timeLeft < 0) {
    clearInterval(countdownInterval);
    // Optionally, display a message when the countdown reaches 0
    daysElement.textContent = "0";
    hoursElement.textContent = "0";
    minutesElement.textContent = "0";
    secondsElement.textContent = "0";
  }
}

const countdownInterval = setInterval(updateCountdown, 1000); // Update every second

startButton.addEventListener("click", () => {
  countdownElements.classList.remove("hidden");
  startButton.classList.add("hidden"); // Hide the button after starting

  // Optionally, start the countdown timer here if you want it to begin immediately
  // after clicking the button. If you want to keep the existing logic where the
  // countdown starts on page load, you don't need to add anything here.
});
