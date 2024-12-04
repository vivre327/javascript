import { el } from "../helper.js";

export const includeHTML = (location, selector) => {
  // 유효성검사
  const element = document.querySelector(selector);
  if (!element) {
    return;
  }

  // 1. fetch('파일경로') : 네트워크 통신. 절대경로쓰기
  const includes = fetch(location)
    // 2. .then((통신결과값)=>{});
    // 3. response는 통신결과값을 받는 변수
    .then((response) => {
      // console.log(response); // 콘솔에 찍힌 status(false는통신실패)와 ok속성만 알면 된다.
      return response.text(); // 텍스트로 변환
    })
    .then((data) => {
      // then은 받은값을 또 받는다.
      // console.log(data);
      el(selector).innerHTML = data;
    });

  return includes;
};

// 비동기 : settimeout , event, fetch
// then : 자동넘김
