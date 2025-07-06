let stage = 0;
const text = document.getElementById("text");
const button = document.getElementById("dangerButton");
const scream = document.getElementById("scream");
const chinaMusic = document.getElementById("chinaMusic");
const rickroll = document.getElementById("rickroll");

function stopAllAudio() {
  scream.pause(); scream.currentTime = 0;
  chinaMusic.pause(); chinaMusic.currentTime = 0;
}

function goToStage(n) {
  stage = n;
  document.body.className = "";
  text.style.display = "block";
  button.style.display = "none";
  rickroll.style.display = "none";
  stopAllAudio();

  switch (n) {
    case 0:
      document.body.classList.add("white-again");
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
      text.textContent = "不要再点我了";
      chinaMusic.play();
      break;
    case 7:
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
      document.body.classList.add("black");
      text.textContent = "wait... why are you still clicking?";
      break;
    case 10:
      document.body.classList.add("black");
      text.textContent = "okay, click me again... I dare you.";
      break;
    case 11:
      document.body.classList.add("static");
      text.textContent = "!!@#%$ ERROR_404_MESSAGE_OVERFLOW";
      break;
    case 12:
      document.body.classList.add("black");
      text.innerHTML = "System Rebooting...<br>It can't fix itself.<br>It needs your help.<br>There's a video below.";
      button.textContent = "Play the help video";
      button.style.display = "inline-block";
      break;
    case 13:
      document.body.classList.add("final-white");
      text.textContent = "You should've listened. The end.";
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
  else if (stage === 9) goToStage(10);
  else if (stage === 10) goToStage(11);
  else if (stage === 11) goToStage(12);
  else if (stage === 13) goToStage(0);
});

button.addEventListener("click", (e) => {
  e.stopPropagation();
  if (stage === 2) goToStage(3);
  else if (stage === 7) goToStage(8);
  else if (stage === 12) {
    text.style.display = "none";
    button.style.display = "none";
    rickroll.style.display = "block";
    rickroll.play();
    setTimeout(() => goToStage(13), 10000);
  }
});
