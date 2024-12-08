import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

// on: 은 실시간 감지 역할
/* -------------------------------------------------------------------------- */
/*                                  Progressbar                               */
/* -------------------------------------------------------------------------- */

const svg = document.querySelector(".autoplay-progress svg");
const isTime = document.querySelector(".autoplay-progress span");
const isBar = document.querySelector(".bar-progress");

const swiper4 = new Swiper(".slide4", {
  autoplay: {
    delay: 1000,
  },
  pagination: {
    el: ".slide4 .swiper-pagination",
  },
  on: {
    slideChange() {
      // console.log("슬라이드 변경"); //슬라이드 바뀔때마다 콘솔에 출력
      const spans = this.pagination.el.querySelectorAll("span");
      spans.forEach((span) => {
        span.removeAttribute("style"); //스타일 속성을 제거
      });
    },
    autoplayTimeLeft(slide, time, progress) {
      // nodelist는 유사배열 (map사용불가)
      // const spans = document.querySelectorAll(".slide4 .swiper-pagination span");
      // activeIndex,realIndex 둘다 활성화된 인덱스
      // realIndex는 loop:true일때 사용, 복제된 슬라이드를 제외한 실제 슬라이드의 인덱스
      // activeIndex는 복제된 슬라이드를 포함한 인덱스
      const spans = this.pagination.el.querySelectorAll("span");
      // console.log(slide.realIndex); //콘솔에서 인덱스번호확인
      //1. 조회한 인덱스번호를 가지고 배열인span에 nth-child로 접근
      spans[slide.realIndex].style.setProperty("--progress", (1 - progress) * 100);
    },
  },
});

const swiper3 = new Swiper(".slide3", {
  // loop: true,
  // direction: "vertical",
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".slide3 .swiper-pagination",
    type: "progressbar",
    // progressbarOpposite: true,
  },
  // A.원형 애니메이션에 대한 on
  // on: {
  //   // a b c 에서 a는 delay c는 딜레이를 1을 100으로 나눠 소숫점으로 표현
  //   // autoplayTimeLeft(a, b, c) {
  //   //   console.log(a, b, c);
  //   // },
  //   autoplayTimeLeft(slide, time, progress) {
  //     // console.log(a, b, c);
  //     // console.log(time); 카운트다운

  //     svg.style.setProperty("--progress", progress);
  //     isTime.textContent = `${Math.ceil(time / 1000)}초`;
  //   },

  // B. 막대 애니메이션에 대한 on
  on: {
    autoplayTimeLeft(slide, time, progress) {
      // 1.총3개값을 가져온다. slide, time, progress
      // 2. isBar에 progress를 적용한다.
      // 3. progress에 100을 곱해서 %로 표현한다.
      // 4. 1- 계산을 해서 0부터 1까지 증가하면서 줄어듬
      isBar.style.setProperty("--progress", `${(1 - progress) * 100}%`);
    },
  },
});
// *** 스타일에서 stroke-dashoffset: calc(125.6px * (1 - var(--progress)));
// 1- 가 있으면 0부터 시작해서 1까지 증가하면서 줄어듬
// setProperty는 css에서 변수를 사용할 수 있게 해줌
// setproperty로 progress를 변수로 사용할 수 있게 해줌
// A. 1 - progress 는 0부터 1까지 증가하면서 줄어듬
// B. 1 - 없이 progress만 쓰면 1부터 0까지 증가하면서 줄어듬
// Math.ceil() 소수점을 올림 -> 밀리세컨드를 초로 바꿔줌

/* -------------------------------------------------------------------------- */
/*                                    Fraction                                */
/* -------------------------------------------------------------------------- */
const swiper2 = new Swiper(".slide2", {
  pagination: {
    el: ".slide2 .swiper-pagination",
    type: "fraction",
    renderFraction(current, total) {
      // console.log(this);
      // console.log(a, b);

      return /* html */ `
      <div class="${current}"></div>
        <div class="bar">+</div>
        <div class="${total}"></div>
      `;
    },
  },
});

// swiper는 인스턴스
const swiper1 = new Swiper(".slide1", {
  pagination: {
    el: ".slide1 .swiper-pagination",
    type: "fraction",
  },
});
