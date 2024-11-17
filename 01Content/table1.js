/** 게시물 수를 집계하여 화면에 표시 */
const updatePostCount = () => {
  const countView = document.querySelector(".count");
  const tableBody = document.querySelector(".count");
  const tableRows = tableBody.children.length;

  countView.textContent = `총 ${tableRows}개`;

  if (tableRows === 0) {
    tableBody.insertAdjacentHTML("afterbegin", `<tr><td colspan="8">현재 게시물이 존재하지 않습니다.</td></tr>`);
  }
};

updateGeneralPostCount();
