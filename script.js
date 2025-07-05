let stage = 0;

const text = document.getElementById("text");
const button = document.getElementById("clickButton");
const restart = document.getElementById("restartButton");
const scream = document.getElementById("scream");

const stages = [
  {
    message: "don’t click this",
    className: "",
    showButton: false
  },
  {
    message: "why did you click me? don’t click me again.",
    className: "black",
    showButton: false
  },
  {
    message: "why did you click me again?! don’t you dare click the button.",
    className: "white-again",
    showButton: true
  },
  {
    message: "do not click me.",
    className: "red",
    showButton: true
  }
];

// Typing effect
function typeMessage(message) {
  let i = 0;
  text.textContent = "";
  const interval = setInterval(() => {
    text.textContent += message[i];
    i++;
    if (i >= message.length) clearInterval(interval);
  }, 40);
}

// Change stage
function goToStage(n) {
  document.body.className = stages[n].className;
  typeMessage(stages[n].message);
  button.style.display = stages[n].showButton ? "inline-block" : "none";
  restart.style.display = "none";
  stage = n;
}

// Initial load
goToStage(0);

// Click on body for stage 0 → 2
document.body.addEventListener("click", () => {
  if (stage === 0) {
    goToStage(1);
  } else if (stage === 1) {
    goToStage(2);
  }
});

// Button click (stages 2 and 3)
button.addEventListener("click", () => {
  if (stage === 2) {
    goToStage(3);
  } else if (stage === 3) {
    // Jumpscare!
    document.body.className = "jumpscare";
    text.textContent = "";
    button.style.display = "none";
    scream.play();

    // Show "Try Again" after delay
    setTimeout(() => {
      text.style.color = "white";
      text.style.border = "none";
      text.textContent = "😱 BOO! 😱";
      restart.style.display = "inline-block";
    }, 2000);

    stage = 4;
  }
});

// Restart everything
restart.addEventListener("click", () => {
  text.style.color = "";
  text.style.border = "";
  goToStage(0);
});
