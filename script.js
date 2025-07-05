let clickCount = 0;

const content = document.getElementById("content");
const scream = document.getElementById("scream");

document.body.addEventListener("click", () => {
  clickCount++;

  if (clickCount === 1) {
    document.body.classList.add("dark");
    content.textContent = "why did you click this? don’t click me again.";
  } else if (clickCount === 2) {
    document.body.classList.add("jumpscare");
    scream.play();
    content.textContent = ""; // remove text for scare
  }
});
