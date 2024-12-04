import { el } from "../helper.js";
// 데이터는 별도의 파일로 분리하여 관리

// tip. export는 항상 enf스니펫으로 시작!!
export const list7Bind = (arry) => {
  // 유효성 검사
  const element = document.querySelector(".shop-list");
  if (!element) {
    return; //shop-list가 없으면 함수를 종료s
  }
  // map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환
  // 배열 길이 만큼 함수 실행. 6개면 6번 실행 => 6개의 객체가 생성
  // map또한 forEach처럼 배열을 순회하면서 각 요소에 대해 함수를 실행
  // map으로 재가공을 해서 밖으로 배열로던져줌
  const liItems = arry.map((item) => {
    // Tip.콘솔을 통해 item이 객체형태임을 확인 할 수 있음
    // console.log(item);

    const { id, logo, title, Date, saveDate, target, benefit } = item;

    // return을 시켜야만 새로운 배열로 내보낸다
    // **백틱앞에  /* html */ 를 적어주면 html로 인식(컬러링이 된다)
    return /* html */ `
        <li>
          <span class="brand color${id}"><img src=${logo} alt="" /></span>
          <p class="title">${title}</p>
          <ul>
            <!-- 예외1. {배열명?.속성명 || 예외값} : ||연산자는 구조분해할당사용불가 -->
            <li>기간<span>${item?.Date || "-"}</span></li>
            <li>적립일<span>${saveDate}</span></li>
            <li>대상<span>${target}</span></li>
            <!-- <li>혜택<span class="blue">${benefit}</span></li> -->
             <!-- 예외2. {배열명.속성명 ? 불러올데이터 : 예외값} -->
            ${benefit ? `<li>혜택<span class="blue">${benefit}</span></li>` : ""}
          </ul>
        </li>
    `;
  });
  // 콘솔로 반환된 배열을 확인할 수 있음
  // console.log(liItems);
  // el(".shop-list").innerHTML = "텍스트";
  // 1. 아래처럼 그냥 쓰면 구분자 쉼표가 나옴
  // el(".shop-list").innerHTML = liItems;
  // 2. join을 사용하면 쉼표가 사라짐
  el(".shop-list").innerHTML = liItems.join("");
};
