const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");
const sidebar = document.querySelector(".sidebar");
const mainSlide = document.querySelector(".main-slide");
const slidesCount = mainSlide.querySelectorAll("div").length;
const container = document.querySelector(".container");

/* for mobile: 
up - right
down - left */

let slideActiveIndex = 0;
let screenWidth = window.screen.width;

screenWidth < 536
  ? (sidebar.style.left = `-${(slidesCount - 1) * 100}vw`)
  : (sidebar.style.top = `-${(slidesCount - 1) * 100}vh`);

upBtn.addEventListener("click", () => {
  changeSlide("up");
});

downBtn.addEventListener("click", () => {
  changeSlide("down");
});

function changeSlide(direction) {
  if (direction === "up") {
    slideActiveIndex++;
    if (slideActiveIndex === slidesCount) {
      slideActiveIndex = 0;
    }
  } else if (direction === "down") {
    slideActiveIndex--;
    if (slideActiveIndex < 0) {
      slideActiveIndex = slidesCount - 1;
    }
  }

  let width = container.clientWidth;
  let height = container.clientHeight;

  if (screenWidth < 536) {
    mainSlide.style.transform = `translateX(-${slideActiveIndex * width}px)`;
    sidebar.style.transform = `translateX(${slideActiveIndex * width}px)`;
  } else {
    mainSlide.style.transform = `translateY(-${slideActiveIndex * height}px)`;
    sidebar.style.transform = `translateY(${slideActiveIndex * height}px)`;
  }
}
