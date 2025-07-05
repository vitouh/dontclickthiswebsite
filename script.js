let stage = 0;

const text = document.getElementById("text");
const button = document.getElementById("clickButton");
const scream = document.getElementById("scream");

// Typing effect
function typeMessage(message, callback) {
  let i = 0;
  text.textContent = "";
  const interval = setInterval(() => {
    text.textContent += message[i];
    i++;
    if (i >= message.length) {
      clearInterval(interval);
      if (callback) callback();
    }
  }, 40);
}

// Stage control
function goToStage(n) {
  stage = n;
  document.body.className = "";
  button.style.display = "none";

  if (n === 0) {
    document.body.className = "";
    typeMessage("don’t click this");
  }

  else if (n === 1) {
    document.body.className = "black";
    typeMessage("why did you click me? don’t click me again.");
  }

  else if (n === 2) {
    document.body.className = "white-again";
    typeMessage("why did you click me again?! don’t you dare click the button.", () => {
      button.style.display = "inline-block";
    });
  }

  else if (n === 3) {
    document.body.className = "red";
    typeMessage("do not click me.");
  }

  else if (n === 4) {
    document.body.className = "jumpscare";
    text.textContent = "";
    scream.play();
  }

  else if (n === 5) {
    document.body.className = "restart-screen";
    typeMessage("restart");
  }
}

// Start
goToStage(0);

// Clicks on body (stages 0, 1, 4, 5)
document.body.addEventListener("click", () => {
  if (stage === 0) {
    goToStage(1);
  } else if (stage === 1) {
    goToStage(2);
  } else if (stage === 4) {
    goToStage(5);
  } else if (stage === 5) {
    goToStage(0);
  }
});

// Click red button (stage 2 → 3)
button.addEventListener("click", (e) => {
  e.stopPropagation(); // prevent body click
  if (stage === 2) {
    button.style.display = "none";
    goToStage(3);
  }
});

// Click text (stage 3 → jumpscare)
text.addEventListener("click", (e) => {
  e.stopPropagation();
  if (stage === 3) {
    goToStage(4);
  }
});
