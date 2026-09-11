const start = document.getElementById("start");
const loading = document.getElementById("loading");
const result = document.getElementById("result");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const againBtn = document.getElementById("againBtn");
const hint = document.getElementById("hint");
const buttonArea = document.querySelector(".buttons");

let noCount = 0;

function moveNoButton() {
  if (!buttonArea || !noBtn) return;

  noCount++;

  const area = buttonArea.getBoundingClientRect();
  const button = noBtn.getBoundingClientRect();

  // Keep the No button completely inside the button area.
  const padding = 6;
  const maxX = Math.max(20, (area.width - button.width) / 2 - padding);
  const maxY = Math.max(20, (area.height - button.height) / 2 - padding);

  let x = (Math.random() * 2 - 1) * maxX;
  let y = (Math.random() * 2 - 1) * maxY;

  // Keep it away from the Yes button in the middle.
  if (Math.abs(x) < 55) x += x < 0 ? -65 : 65;

  noBtn.style.transform =
    `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${Math.random() * 10 - 5}deg)`;

  hint.textContent =
    noCount === 1
      ? "Nice try! The No button is already running away. 😭"
      : noCount === 2
        ? "It really doesn't want to be clicked. 😂"
        : "Okay... the No button is officially too shy. 💗";
}

// The button is non-clickable; hovering/touching the play area makes it escape.
buttonArea.addEventListener("pointermove", (event) => {
  if (event.pointerType === "mouse") {
    const r = noBtn.getBoundingClientRect();
    const distance = Math.hypot(
      event.clientX - (r.left + r.width / 2),
      event.clientY - (r.top + r.height / 2)
    );

    if (distance < 95) moveNoButton();
  }
});

buttonArea.addEventListener("pointerdown", (event) => {
  if (event.pointerType === "touch" || event.pointerType === "pen") {
    moveNoButton();
  }
});

yesBtn.addEventListener("click", () => {
  start.classList.add("hidden");
  loading.classList.remove("hidden");

  setTimeout(() => {
    loading.classList.add("hidden");
    result.classList.remove("hidden");
  }, 2200);
});

againBtn.addEventListener("click", () => {
  result.classList.add("hidden");
  start.classList.remove("hidden");
  noCount = 0;
  noBtn.style.transform = "translate(92px,-50%)";
  hint.textContent = "Try clicking “No”... if you dare.";
});
