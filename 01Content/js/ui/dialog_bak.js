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
  // 2개 이상 사용시, Data속성을 이용하므로, 변수로 선언하여 사용
  const dialog = `[data-dialog=${selector}]`;
  const open = `[data-dialog-open=${selector}]`;
  const close = `[data-dialog-close=${selector}]`;

  const handleOpen = () => {};
  const handleClose = () => {};

  el(open).addEventListener("click", () => {
    modal ? el(dialog).showModal() : el(dialog).show();
  });

  el(close).addEventListener("click", () => {
    el(dialog).close();
  });
};
