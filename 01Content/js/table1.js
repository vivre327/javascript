/** 게시물 수를 집계하여 화면에 표시 */
const updatePostCount = () => {
  const countView = document.querySelector(".count");
  const table = document.querySelector(".board");
  const tableBody = table.querySelector("tbody");
  const tableHeader = table.querySelectorAll("th").length;
  const tableRows = tableBody.querySelectorAll("tr").length;
  const noneData = `<tr><td colspan="${tableHeader}">현재 게시물이 존재하지 않습니다.</td></tr>`;

  countView.textContent = `총 ${tableRows}개`;

  if (tableRows === 0) {
    // console.log("없음");
    tableBody.insertAdjacentHTML("afterbegin", noneData);
  }
};

updatePostCount();
