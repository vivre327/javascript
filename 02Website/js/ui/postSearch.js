import { el } from "../helper.js";

export const postSearch = (arry) => {
  // 유효성 검사
  const element = document.querySelector("#search");
  if (!element) {
    return;
  }

  // 1.버튼 클릭하면 입력된value와 postData의 title을 비교
  // 2.일치하는 문자?걸러냄  array = array.filter((e) => e === 조건);
  // 2-a. 걸러내는 조건문..? includes()
  // 3.새로 담긴 배열을 화면에 다시 그려줌(?)
  // 3-a. 다시 그려주는 바인딩도 map인지

  const searchElement = el("#search");
  const input = searchElement.querySelector("input");
  const button = searchElement.querySelector("button");
  const table = el(".table-type2");
  const tableBody = table.querySelector("tbody");

  button.addEventListener("click", () => {
    // 입력된 검색어 저장
    const keyword = input.value;
    console.log(typeof keyword);

    // 새배열에 검색어가 포함된 배열만 걸러내서 새로 담는다 (원래배열 유지)
    let newArry = arry.filter((item) => {
      // return item.title === keyword;
      return item.title.includes(keyword);
    });
    // console.log(newArry);

    // 새로담은 배열로 테이블에 뿌려준다.
    const filterItem = newArry.map((item) => {
      const { id, title, writer, date, views } = item;

      return /* html */ `
      <tr>
        <td>${id}</td>
        <td style="color:blue;"><a href="">${title}</a></td>
        <td>${writer}</td>
        <td>${date}</td>
        <td>${views}</td>
      </tr>
    `;
    });

    tableBody.innerHTML = filterItem.join("");
  });
};

// let 조건 = "빨강사탕";
// let array = ["빨강사탕", "파란사탕", "노란사탕"];

// // 빨강사탕이 일치하는것만 걸러내서 array에 새로운 배열을 담음
// array = array.filter((e) => e === 조건);

// console.log(array);
