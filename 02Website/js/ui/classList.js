import { el } from "../helper.js";

export const classList = (arry) => {
  const element = document.querySelector(".list-type1");

  // 유효성 검사
  if (!element) {
    return;
  }

  arry.forEach((item) => {
    // 객체 구조분해할당
    const { thumbnail, category, coinPrice, title, tags, format, period, applyPeriod } = item;

    // li생성후 ul에 추가
    const li = document.createElement("li");
    el(".list-type1").append(li);

    // li에 데이터바인딩
    li.innerHTML = /* html */ `
      <a href="">
        <div class="thumbnail">
          <img src=${thumbnail} alt="" />
        </div>
        <div class="badges">
          <span class="badge ${category === "경영" ? "orange" : "purple"}">${category}</span>
          <span class="badge coin">${coinPrice}</span>
        </div>
        <strong class="list-type1__title">${title}</strong>
        <div class="hash">
          <span>#${tags[0]}</span>
          <span>#${tags[1]}</span>
          <span>#${tags[2]}</span>
        </div>
        <ul class="list-type2">
          <li>
            <span>형 태</span>
            <div>${format}</div>
          </li>
          <li>
            <span>일 정</span>
            <div>${period}</div>
          </li>
        </ul>
        <div class="list-type1__date">신청기간 : ${applyPeriod}</div>
      </a>
    `;
  });
};
