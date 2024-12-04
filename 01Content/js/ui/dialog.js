// // es7 익스텐션 설치 시 enf 코드스니펫 사용가능
// import { el, els } from "../helper.js";

// export const dialog = () => {
//   // 2개 이상 사용시, 속성을 이용하므로, 변수로 선언하여 사용
//   const dialog = "dialog";

//   el("button").addEventListener("click", () => {
//     el(dialog).show();
//   });

//   el(".btn-close").addEventListener("click", () => {
//     el(dialog).close();
//   });
// };

// es7 익스텐션 설치 시 enf 코드스니펫 사용가능
import { el, els } from "../helper.js";

// 매개변수의 초기값 설정은, 매개변수 = 초기값
export const dialog = (selector, modal = false) => {
  // 1. dialog내에서의 유효성검사를 위한 변수선언
  const isDialog = document.querySelector(`[data-dialog=${selector}]`);
  const isOpen = document.querySelector(`[data-dialog-open=${selector}]`);
  const isClose = document.querySelector(`[data-dialog-close=${selector}]`);

  // 2.유효성 검사 (el함수에서 유효성 검사를 했지만, 다시 한번 확인)
  // 2-1. el함수의 유효성 검사는 selector에 대한 유효성 검사
  // 2-2. dialog내에서 함수실행을 위한 유효성 검사
  // 2번 유효성검사를 통해 dialog가 없는 페이지(ex.form.html)에서는 실행을 안함
  if (!isDialog || !isOpen || !isClose) {
    // console.warn("실행하려는 dialog 요소가 존재하지 않습니다.");
    return;
  }
  // 2개 이상 사용시, Data속성을 이용하므로, 변수로 선언하여 사용
  const dialog = `[data-dialog=${selector}]`;
  const open = `[data-dialog-open=${selector}]`;
  const close = `[data-dialog-close=${selector}]`;

  // 팝업 열기 함수 (handle:제어하다.핸들링하다.)
  const handleOpen = () => {
    modal ? el(dialog).showModal() : el(dialog).show();
  };
  // 팝업 닫기 함수
  const handleClose = () => {
    el(dialog).close();
  };

  // 이벤트
  el(open).addEventListener("click", handleOpen);
  el(close).addEventListener("click", handleClose);
};
