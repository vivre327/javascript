/* -------------------------------------------------------------------------- */
/*                                    객체생성                                 */
/* -------------------------------------------------------------------------- */
const user = {
  name: "Rebehayan",
  short: "저를 소개합니다.",
  information: {
    age: 44,
    // city: "incheon",
    country: "korea",
  },
  result: function () {
    console.log("test");
  }, //객체안의 함수는 메서드 체이닝
};

user.birth = "1977.12.12";
// const fn = user.result();
//객체안의 함수 조회

// 객체접근은 "변수명.키값"으로 접근한다.
// 기호 .은 체이닝을 의미한다.

// console.log(user.information?.image || "이미지가 없습니다.");
// 없는 데이터가 예상된다면 데이터 앞에?를 표현하여 예외처리
// 참이면 || 앞의 값을 반환하고, 거짓이면 뒤의 값을 반환한다.

const information = () => {
  const ul = document.querySelector(".infomation");
  // children은 배열로 반환한다.
  const age = ul.children[0].querySelector("span");
  const city = ul.children[1].querySelector("span");
  const country = ul.children[2].querySelector("span");

  // 01. 직접 넣는 방식 (현업 사용 안함)
  // age.innerHTML = user.information.age;
  // city.innerHTML = user.information.city;
  // country.innerHTML = user.information.country;

  // 02. 템플릿 리터럴을 사용한 방식 (현업 사용)
  // *** ?물음표와 조건문으로 데이터가 없을때 예외처리를 한다.
  ul.innerHTML = `
      <li><span>${user.information?.age || "-"}</span><strong>Age</strong></li>
      <li><span>${user.information?.city || "-"}</span><strong>City</strong></li>
      <li><span>${user.information?.country || "-"}</span><strong>Country</strong></li>
  `;
};

information();

// 배열 구조분해할당
const arry = ["a", "b", "c"];

// 01. 기존방식
// console.log(arry[0]);

// 02-1.새로운 배열을 만들고 우측에 기존 배열의 변수명을 넣어주면 된다.
const [a, item, sol] = arry;

// 02-2. 새로 할당한 익명으로 접근 (더 간단한 방법)
// console.log(sol);

// 객체 구조분해할당
const obj = {
  item1: "text",
  item2: 1234,
  item3: "hello",
};

// 01. 기존방식
// console.log(obj.item1);

// 02-1. 새로운 객체를 만들고 우측에 기존 객체의 키값을 넣어주면 된다.
// const {} = obj;
const { item1, item2, item3 } = obj;
// 02-2. 새로 할당한 익명으로 접근 (더 간단한 방법)
console.log(item3);

// 구조분해할당으로 접근하기 innerHTML으로 접근
const updatePostCount = () => {
  const obj = {
    image: "./images/001.jpg",
    title: "UX Design",
    view: 800,
    like: 4.5,
    lectures: 80,
    price: "50,000",
  };

  const { image, title, view, like, lectures, price } = obj;

  const content = document.querySelector(".tab-content");

  content.innerHTML = `
      <div>
        ${image ? `<img src="${image}" alt="" />` : ""}  
        <strong class="title">${title ?? "-"}</strong>
        <div class="info">
          <span class="view">${view ?? "-"}</span>
          <span class="like">${like ?? "-"}</span>
        </div>
        <div class="lectures">${lectures ?? "-"} Lectures</div>
        <div class="price">${price ?? "-"}원</div>
      </div>
  `;
  // 1. 템플릿 리터럴 내에서의 조건식은 ${조건문}
  // 2. ${조건문} 내에서 참값은 또다시 템플릿리터럴(백틱기호)방식으로 태그전체작성
  // 3. 삼항연산자 => 조건식 ? 참일 때의 값 : 거짓일 때의 값
};

updatePostCount();

/* -------------------------------------------------------------------------- */
/*                                    객체접근                                 */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                   선택적 체이닝                             */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                  배열 구조분해할당                           */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                  객체 구조분해할당                            */
/* -------------------------------------------------------------------------- */
