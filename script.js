let stage = 0;

const text = document.getElementById("text");
const button = document.getElementById("dangerButton");
const scream = document.getElementById("scream");

function goToStage(n) {
  stage = n;
  document.body.className = "";
  button.style.display = "none";
  button.style.position = "static";
  button.style.width = "";
  button.style.height = "";
  button.style.borderRadius = "";
  text.style.pointerEvents = "auto";

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
      button.textContent = "don’t click me!";
      button.style.display = "inline-block";
      break;
    case 3:
      document.body.classList.add("red");
      text.textContent = "do not click me.";
      break;
    case 4:
      document.body.classList.add("jumpscare");
      text.textContent = "see, now don’t click me again.";
      scream.play();
      break;
    case 5:
      document.body.classList.add("white-again");
      text.textContent = "the text will bug if you click me again!";
      break;
    case 6:
      document.body.classList.add("china");
      text.textContent = "不要再点我了"; // Don't click me again (in Chinese)
      break;
    case 7:
      document.body.classList.remove("china");
      document.body.classList.add("white-again");
      text.textContent = "fine, I give up, CLICK ME!";
      button.textContent = "you can’t click it?";
      button.style.display = "inline-block";
      button.style.position = "absolute";
      button.style.top = "10px";
      button.style.left = "10px";
      break;
    case 8:
      document.body.classList.add("white-again");
      text.textContent = "haha, you can’t click the text!";
      break;
    case 9:
      document.body.classList.add("final-black");
      text.textContent = "";
      button.style.display = "inline-block";
      button.textContent = "";
      button.style.backgroundColor = "red";
      button.style.width = "100px";
      button.style.height = "100px";
      button.style.borderRadius = "50%";
      break;
  }
}

goToStage(0);

text.addEventListener("click", () => {
  if (stage === 0) goToStage(1);
  else if (stage === 1) goToStage(2);
  else if (stage === 3) goToStage(4);
  else if (stage === 4) goToStage(5);
  else if (stage === 5) goToStage(6);
  else if (stage === 6) goToStage(7);
  else if (stage === 8) goToStage(9);
});

button.addEventListener("click", (e) => {
  e.stopPropagation();
  if (stage === 2) goToStage(3);
  else if (stage === 7) goToStage(8);
  else if (stage === 9) window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
});
