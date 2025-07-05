let stage = 0;

const text = document.getElementById("text");
const button = document.getElementById("dangerButton");
const scream = document.getElementById("scream");

function goToStage(n) {
  stage = n;
  document.body.className = "";
  button.style.display = "none";

  switch (n) {
    case 0:
      text.textContent = "don’t click this";
      break;
    case 1:
      document.body.classList.add("black");
      text.textContent = "why did you click me? don’t click me again.";
      break;
    case 2:
      document.body.classList.add("white-again");
      text.textContent = "why did you click me again?! don’t you dare click the button.";
      button.style.display = "inline-block";
      break;
    case 3:
      document.body.classList.add("red");
      text.textContent = "do not click me.";
      break;
    case 4:
      document.body.classList.add("jumpscare");
      text.textContent = "";
      scream.play();
      break;
    case 5:
      document.body.classList.add("restart");
      text.textContent = "restart";
      break;
  }
}

// Start the app
goToStage(0);

// Clickable text events only
text.addEventListener("click", () => {
  if (stage === 0) goToStage(1);
  else if (stage === 1) goToStage(2);
  else if (stage === 3) goToStage(4);
  else if (stage === 5) goToStage(0);
});

// Button click (only works at stage 2)
button.addEventListener("click", (e) => {
  e.stopPropagation();
  if (stage === 2) goToStage(3);
});
