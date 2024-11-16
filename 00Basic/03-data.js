// String : 문자열
// const isName = "문자열";
// console.log(typeof isName);
// const isString = `${isName}123`;
//백틱기호는 문자열을 합칠때 사용

//  Number : 숫자
// const isNumber = Number("12.3") + 1;
// 따옴표를 사용하지 않으면 숫자로 인식, Number()를 사용하여 숫자로 변환

// Boolean : 불린, true, false
// const isTrue = true;

// Undefined : 정의되지 않음
// let undef;
// 값이 할당되지 않은 상태가 undefined, 변수를 선언만 하고 값을 할당하지 않으면 undefined
// const는 값을 할당해야하지만 let은 값을 할당하지 않아도 된다.
// let obj = {
//   a: 1,
//   b: 2,
// };
// 없는 값을 호출하면 undefined

// Null : 값이 없음
let empty = null;
// null은 의도적으로 값이 없음을 나타낼때 사용
// undefined와 null은 다르다. undefined는 값이 할당되지 않았을때, null은 값이 없을때 사용

// if (true) {
//   empty = "문자";
//   console.log(empty);
// }
// 명시적으로 값이 없기 때문에 재할당이 가능하다.

// Object : 객체
// const obj = {
//   name: "yuhayoung",
//   age: 27,
// };

// Array : 배열
// const numbers = [1, 2, 3, 4, 5];
// 배열이지만 객체로 인식

// Function : 함수
// 반복되는 기능들, 재활용되는 기능들을 함수로 만들어 사용
// function funcName() {
//   console.log("함수");
// }

// funcName();
// funcName();
// funcName();
// funcName();
// 여러번 재사용 가능

console.log(typeof numbers);

const levelup = document.querySelector(".levelup");

// 변수정의
const nameValue = "CodingPing";
const levelValue = "타입 확인";
const staminaValue = 12555;
const attackValue = 88766;
const shieldValue = 28745;

const staminaIcon = "🦾";
const attackIcon = "🔪";
const shieldIcon = "📫";

const image = "./images/character.webp";

// 타입확인
levelup.addEventListener("click", () => {
  isshow();
});

// UI 정의
function isshow(isType) {
  const type = document.querySelector(".type");
  const nickname = document.querySelector(".name");
  const stamina = document.querySelector(".stamina");
  const attack = document.querySelector(".attack");
  const shield = document.querySelector(".shield");
  const character = document.querySelector(".character img");

  nickname.innerText = nameValue;
  stamina.innerText = staminaValue;
  attack.innerText = attackValue;
  shield.innerText = shieldValue;
  levelup.innerText = levelValue;

  stamina.dataset.icon = staminaIcon;
  attack.dataset.icon = attackIcon;
  shield.dataset.icon = shieldIcon;

  character.setAttribute("src", image);

  if (!isType) {
    return;
  }

  document.body.insertAdjacentHTML("afterbegin", `<span class="show">${typeof isType}</span>`);
  console.log(typeof isType);
  const lvup = document.querySelector(".show");
  lvup.addEventListener("animationend", (e) => {
    e.target.remove();
  });
}
isshow();
