import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

const data = [
  {
    slideTitle: "제목입니다.1",
    slideText: "정보입니다.",
  },
  {
    slideTitle: "제목입니다.2",
    slideText: "정보입니다.",
  },
  {
    slideTitle: "제목입니다.3",
    slideText: "정보입니다.",
  },
];

const sliderWrap = document.querySelector(".swiper-wrapper");
sliderWrap.innerHTML = data
  .map((item) => {
    return /* html */ `
    <div class="swiper-slide">
      <h2>${item.slideTitle}</h2>
      <p>${item.slideText}</p>
    </div>
  `;
  })
  .join("");

const swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
