// /** querySelector 사용 */
// const dialog = () => {
//   const btnOpen = document.querySelector(".btn-open");
//   const btnClose = document.querySelector(".btn-close");
//   const modal = document.querySelector(".popup");

//   btnOpen.addEventListener("click", () => {
//     modal.show();
//   });

//   btnClose.addEventListener("click", () => {
//     modal.close();
//   });
// };

// dialog();

// /** data 속성 사용 */
// const dataDialog = () => {
//   const openButton = document.querySelectorAll("[data-dialog-open]");
//   const closeButton = document.querySelectorAll("[data-dialog-close]");

//   // 팝업 열기
//   openButton.forEach((button) => {
//     button.addEventListener("click", () => {
//       const dialogId = button.getAttribute("data-dialog-open");
//       // console.log(dialogId);
//       const dialog = document.querySelector(`[data-dialog="${dialogId}"]`);
//       dialog.showModal();
//     });
//   });

//   // 팝업 닫기
//   closeButton.forEach((button) => {
//     button.addEventListener("click", () => {
//       const dialogId = button.getAttribute("data-dialog-close");
//       const dialog = document.querySelector(`[data-dialog="${dialogId}"]`);
//       dialog.close();
//     });
//   });
// };

// dataDialog();
