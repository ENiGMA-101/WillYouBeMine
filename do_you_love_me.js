const start = document.getElementById("start");
const loading = document.getElementById("loading");
const result = document.getElementById("result");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const againBtn = document.getElementById("againBtn");
const hint = document.getElementById("hint");
const buttonArea = document.querySelector(".buttons");

let noCount = 0;
let lastMove = 0;

/*
  The No button itself has pointer-events:none in CSS.
  That makes accidental clicks/taps impossible.
  We detect the pointer near it using the parent interaction area.
*/
function moveNoButton(force = false) {
  if (!buttonArea || !noBtn) return;

  const now = performance.now();

  // Prevent dozens of moves firing in one pointer event stream.
  if (!force && now - lastMove < 220) return;
  lastMove = now;

  noCount++;

  const positions = [
    { x: 82, y: 50 },
    { x: 91, y: 25 },
    { x: 72, y: 78 },
    { x: 93, y: 75 },
    { x: 62, y: 22 },
    { x: 88, y: 50 }
  ];

  // Pick a position different from the current one.
  const currentX = parseFloat(noBtn.style.left) || 82;
  let candidates = positions.filter(p => Math.abs(p.x - currentX) > 8);
  if (!candidates.length) candidates = positions;

  const next = candidates[Math.floor(Math.random() * candidates.length)];

  noBtn.style.left = `${next.x}%`;
  noBtn.style.top = `${next.y}%`;
  noBtn.style.transform =
    `translate(-50%,-50%) rotate(${(Math.random() * 10 - 5).toFixed(1)}deg)`;

  if (noCount === 1) {
    hint.textContent = "Nice try! The No button is running away. 😭";
  } else if (noCount === 2) {
    hint.textContent = "It really doesn't want to be clicked. 😂";
  } else {
    hint.textContent = "Okay... the No button is officially too shy. 💗";
  }
}

/*
  Desktop:
  When the pointer approaches the No button, it escapes.
  The No button itself cannot receive the pointer because pointer-events:none.
*/
buttonArea.addEventListener("pointermove", (event) => {
  if (event.pointerType !== "mouse") return;

  const rect = noBtn.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const distance = Math.hypot(
    event.clientX - centerX,
    event.clientY - centerY
  );

  if (distance < 115) {
    moveNoButton();
  }
});

/*
  Touch/pen:
  Since No cannot receive pointer events, tapping its visual area
  reaches the parent instead. Move it immediately.
*/
buttonArea.addEventListener("pointerdown", (event) => {
  if (event.pointerType === "touch" || event.pointerType === "pen") {
    moveNoButton(true);
  }
});

/*
  Extra safety: if a keyboard somehow focuses anything unexpectedly,
  immediately return focus to the page and move the No button.
*/
noBtn.setAttribute("aria-hidden", "true");
noBtn.setAttribute("tabindex", "-1");

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
  lastMove = 0;

  noBtn.style.left = "82%";
  noBtn.style.top = "50%";
  noBtn.style.transform = "translate(-50%,-50%)";

  hint.textContent = "Try clicking “No”... if you dare.";
});
