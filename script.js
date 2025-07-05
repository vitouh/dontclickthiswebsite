let stage = 0;
const text = document.getElementById("text");
const button = document.getElementById("finalButton");
const scream = document.getElementById("scream");

document.body.addEventListener("click", () => {
  if (stage === 0) {
    // Stage 1 -> Stage 2: Black screen, white text
    document.body.className = "black";
    text.textContent = "why did you click me? don’t click me again.";
    stage++;
  } else if (stage === 1) {
    // Stage 2 -> Stage 3: White screen, black text + button
    document.body.className = "white-again";
    text.textContent = "why did you click me again?! don’t you dare click the button.";
    button.style.display = "inline-block";
    stage++;
  }
});

// Stage 3 -> Stage 4: Red screen, final warning
button.addEventListener("click", () => {
  if (stage === 2) {
    document.body.className = "red";
    text.textContent = "do not click me.";
    stage++;
  } else if (stage === 3) {
    // Stage 4 -> Stage 5: Jumpscare
    document.body.className = "jumpscare";
    text.textContent = "";
    button.style.display = "none";
    scream.play();
    stage++;
  }
});
