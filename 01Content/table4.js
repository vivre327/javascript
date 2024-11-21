/** querySelector 사용 */
const dialog = () => {
  const btnOpen = document.querySelector(".btn-open");
  const btnClose = document.querySelector(".btn-close");
  const modal = document.querySelector(".popup");

  btnOpen.addEventListener("click", () => {
    modal.show();
  });

  btnClose.addEventListener("click", () => {
    modal.close();
  });
};

dialog();

/** data 속성 사용 */
const dataDialog = () => {
  const openButton = document.querySelectorAll("[data-dialog-open]");
  const closeButton = document.querySelectorAll("[data-dialog-close]");
  const dialog = document.querySelectorAll("[data-dialog]");
  openButton.forEach((item) => {
    item.addEventListener("click", (e) => {
      const modalName = e.target.getAttribute("data-dialog-open");
      console.log(modalName);
      // 선택된 모달 이름의 dialog찾아서 show() 실행시키기
    });
  });
};

dataDialog();
