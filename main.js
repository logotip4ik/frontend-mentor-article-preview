import "normalize.css/normalize.css";
import "./styles/main.scss";

let isShareMenuOpen = false;

const shareButton = document.querySelector(
  ".article__content__author__share-button"
);
const shareMenu = document.querySelector(".article__content__author__share");

shareButton.addEventListener("click", () => {
  const outerFillColor = shareButton.style.backgroundColor || "#ecf2f8";
  const innerFillColor =
    shareButton.children[0].children[0].getAttribute("fill");

  shareButton.style.backgroundColor = innerFillColor;
  shareButton.children[0].children[0].setAttribute("fill", outerFillColor);

  shareMenu.classList.toggle("article__content__author__share--active");
});
