import { delegate } from "../utils/EventFunctions.js";
import "./SignupForm.js";
import "./Leaderboard.js";

const signupButton = document.querySelector("button#signup");
const input = document.querySelector("input[name=name]");
const mapselectorContainer = document.querySelector(
  "div#mapselector-container"
);

signupButton.addEventListener("click", function (event) {});

function handleClick(event) {
  const targetElement = event.target;
  const idSelector = targetElement.id;
  const containerToReveal = mapselectorContainer.querySelector(
    `div#${idSelector}`
  );
  let containersToHide = mapselectorContainer.querySelectorAll("div");
  containersToHide = Array.from(containersToHide);
  containersToHide.forEach((item) => (item.hidden = true));
  containerToReveal.hidden = false;
}

delegate(mapselectorContainer, "click", "div>button", handleClick);