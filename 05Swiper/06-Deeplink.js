import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

/* -------------------------------------------------------------------------- */
/*                                  해시                                       */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/*                                     메모                                     */
/* -------------------------------------------------------------------------- */
// 대분류 : shift + alt + x
// 중분류 : alt + x
/* -------------------------------------------------------------------------- */
/*                                 depth1 memo                                */
/* -------------------------------------------------------------------------- */
/* ------------------------------- depth2 memo ------------------------------ */
// depth3 memo

let swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

document.querySelector("button").addEventListener("click", () => {
  swiper.slideTo(3);
});

// hash를 조회 하고 , replace로 #을 제거
const location = window.location.hash;
// console.log(location.replace("#", ""));
const togoSlideNumber = location.replace("#", "");
// zero-based index이니깐 -1해주자
swiper.slideTo(togoSlideNumber - 1);

// https://www.unearth22c.com/ 에서 확인 가능

// on: 은 실시간 감지 역할
/* -------------------------------------------------------------------------- */
/*                                  파라미터                                   */
/* -------------------------------------------------------------------------- */
const params = new URLSearchParams(window.location.search);
// console.log(params);

// 1. 빈객체 만들기
let obj = {};
// forEach로 배열을 조회 (값,속성 반대로 조회)
params.forEach((value, key) => {
  console.log(key, value);
  // 2. key와 value를 등록 (반대로)
  obj[key] = value;
});

console.log(obj);
swiper.slideTo(obj.slide - 1);

// Tip.배열데이터를 객체로 변경할때 위처럼 사용
obj["name"] = "홍길동";
console.log(obj);
