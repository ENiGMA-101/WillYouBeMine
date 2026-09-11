const start = document.getElementById("start");
const loading = document.getElementById("loading");
const result = document.getElementById("result");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const againBtn = document.getElementById("againBtn");
const hint = document.getElementById("hint");

let noCount = 0;

function moveNoButton() {
  noCount++;
  const x = Math.random() * 180 - 90;
  const y = Math.random() * 120 - 60;
  noBtn.style.transform = `translate(${x}px, ${y}px) rotate(${Math.random()*12-6}deg)`;
  hint.textContent = noCount > 2
    ? "Okay... the No button is getting shy now. 😭"
    : "Nice try! The answer is obviously Yes. 👀";
}

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("touchstart", (e) => { e.preventDefault(); moveNoButton(); });

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
  noBtn.style.transform = "";
  hint.textContent = "Try clicking “No”... if you dare.";
});
