import { el } from "../helper.js";

export const postList = (arry) => {
  // 유효성 검사
  const element = document.querySelector(".table-type2");
  if (!element) {
    return;
  }

  const table = el(".table-type2");
  const tableBody = table.querySelector("tbody");
  const columnCount = table.querySelectorAll("th").length;
  const noneData = `<tr><td colspan="${columnCount}">데이터가 없습니다.</td></tr>`;

  // 데이터가 없을 경우
  if (arry.length === 0) {
    console.log("hello");
    tableBody.innerHTML = noneData;
    return; // 종료
  }

  // 데이터가 있으면 map 데이터 바인딩
  const postItem = arry.map((item) => {
    // 구조분해할당
    const { id, title, writer, date, views } = item;

    return /* html */ `
      <tr>
        <td>${id}</td>
        <td><a href="">${title}</a></td>
        <td>${writer}</td>
        <td>${date}</td>
        <td>${views}</td>
      </tr>
    `;
  });

  tableBody.innerHTML = postItem.join("");
};
