let stage = 0;

const text = document.getElementById("text");
const button = document.getElementById("clickButton");
const scream = document.getElementById("scream");

const stages = [
  { className: "", message: "don’t click this", showButton: false },
  { className: "black", message: "why did you click me? don’t click me again.", showButton: false },
  { className: "white-again", message: "why did you click me again?! don’t you dare click the button.", showButton: true },
  { className: "red", message: "do not click me.", showButton: true },
];

// Typing animation
function typeMessage(message) {
  let i = 0;
  text.textContent = "";
  const interval = setInterval(() => {
    text.textContent += message[i];
    i++;
    if (i >= message.length) clearInterval(interval);
  }, 40);
}

// Go to a stage (0–3)
function goToStage(stageNum) {
  document.body.className = stages[stageNum].className;
  typeMessage(stages[stageNum].message);
  button.style.display = stages[stageNum].showButton ? "inline-block" : "none";
  stage = stageNum;
}

// Start
goToStage(0);

// Body click for stage 0–2
document.body.addEventListener("click", () => {
  if (stage === 0) {
    goToStage(1);
  } else if (stage === 1) {
    goToStage(2);
  }
});

// Button click for stage 2–3, then jumpscare
button.addEventListener("click", () => {
  if (stage === 2) {
    goToStage(3);
  } else if (stage === 3) {
    document.body.className = "jumpscare";
    text.textContent = "";
    button.style.display = "none";
    scream.play();

    // Restart after 4 seconds
    setTimeout(() => {
      goToStage(0);
    }, 4000);
  }
});
