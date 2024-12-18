import { el } from "../helper.js";
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

export const visualSlider = (data) => {
  const element = document.querySelector(".swiper");
  if (!element) {
    return;
  }

  const sliderWrap = el(".swiper-wrapper");
  sliderWrap.innerHTML = data
    .map((item) => {
      return /* html */ `
      <div class="swiper-slide visual-index">
        <div class="visual-index__text">
          <strong>${item.title}</strong>
          <p>${item.description}
          </p>
        </div>
        <img src=${item.imgSrc} alt="" class="visual-index__bg" />
      </div>
    `;
    })
    .join("");

  const visualSwiper = new Swiper(".swiper", {
    loop: true,
    autoplay: {
      delay: 1000,
    },
    speed: 600,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // 재생,정지 버튼
  const toggleSlide = el(".btn-play");
  let isToggle = true;
  toggleSlide.addEventListener("click", () => {
    // visualSwiper라는 변수를 제어한다.
    // 클릭했을때 autoplay라는 객체에 접근
    // stop(); start(); 메서드처럼 toggle메서드는 없기 때문에 let변수 선언 -> 초기값은 활성화true

    // isToggle조건에 따라 변수 재할당하여 반전을 준다
    if (isToggle) {
      //isToggle의 true == 재생중일때 클릭하면? -> 정지
      visualSwiper.autoplay.stop();
      toggleSlide.textContent = "PLAY";
      toggleSlide.classList.add("play");
    } else {
      //isToggle의 false == 정지상태일때
      visualSwiper.autoplay.start();
      toggleSlide.textContent = "PAUSE";
      toggleSlide.classList.remove("play");
    }
    isToggle = !isToggle;
  });
};
