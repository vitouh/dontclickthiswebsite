let stage = 0;

const text = document.getElementById("text");
const button = document.getElementById("dangerButton");
const scream = document.getElementById("scream");

function typeText(message, callback) {
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

function goToStage(n) {
  stage = n;
  document.body.className = "";
  button.style.display = "none";

  switch (n) {
    case 0:
      typeText("don’t click this");
      break;
    case 1:
      document.body.classList.add("black");
      typeText("why did you click me? don’t click me again.");
      break;
    case 2:
      document.body.classList.add("white-again");
      typeText("why did you click me again?! don’t you dare click the button.", () => {
        button.style.display = "inline-block";
      });
      break;
    case 3:
      document.body.classList.add("red");
      typeText("do not click me.");
      break;
    case 4:
      document.body.classList.add("jumpscare");
      text.textContent = "";
      scream.play();
      break;
    case 5:
      document.body.classList.add("restart");
      typeText("restart");
      break;
  }
}

// Start
goToStage(0);

// Make #text the only clickable target
text.addEventListener("click", () => {
  if (stage === 0) {
    goToStage(1);
  } else if (stage === 1) {
    goToStage(2);
  } else if (stage === 3) {
    goToStage(4);
  } else if (stage === 5) {
    goToStage(0);
  }
});

// Red button click (only in stage 2)
button.addEventListener("click", (e) => {
  e.stopPropagation();
  if (stage === 2) {
    button.style.display = "none";
    goToStage(3);
  }
});
