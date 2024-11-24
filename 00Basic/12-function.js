/* -------------------------------------------------------------------------- */
/*                                   Return                                   */
/* -------------------------------------------------------------------------- */

/* ----------------------------- return을 사용하는 경우 ---------------------------- */
// 결과값을 반환해야 할 때
const sum = () => {
  const button = document.querySelector(".sum button");
  const resultValue = document.querySelector(".sum p");
  const number1 = document.querySelector(".sum .number1");
  const number2 = document.querySelector(".sum .number2");

  const result = () => {
    const num1 = Number(number1.value);
    const num2 = Number(number2.value);
    // console.log(typeof num1);
    return num1 + num2;
  };

  // return 값은 반드시 변수로 받아야 한다.
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const sum = result();
    resultValue.textContent = sum;
  });
};
sum();

// 조건에 따라 함수 실행을 종료해야 할 때
const message = () => {
  const button = document.querySelector(".message button");
  const input = document.querySelector(".message input");
  const output = document.querySelector(".message p");

  button.addEventListener("click", (e) => {
    e.preventDefault();
    if (input.value === "") {
      output.textContent = "메세지를 입력해주세요.";
      return; //return은 중단의 의미
    }
    // return이 없으면 if문에 걸리지 않아도 아래 코드가 실행된다.
    // else문을 사용하는 대신, if문에 return을 사용하면 코드를 간결하게 작성할 수 있다.
    output.textContent = input.value;
  });
};
message();

// return이 필요한 경우
// 1. 함수를 중간에 멈춰야할때, 또는
// 2. 함수내의 결괏값을 함수 밖으로 반환해야할 때

/* ------------------------- return을 사용하지 않아도 되는 경우 ------------------------- */
// 이벤트 헨들러 함수를 사용할 때
const myName = () => {
  const button = document.querySelector(".event button");
  const input = document.querySelector(".event input");
};
myName();

// 상태변경할 때
const title = () => {
  const heading = document.querySelector(".change-title");
};
title();

// 콘솔에 로그 출력할 때
const consoleCheck = () => {
  //   console.log(`콘솔메세지 :`);
};
consoleCheck();

// DOM을 조작할 때
const listDOM = () => {
  const lis = document.querySelectorAll(".list li");
};
listDOM();

/* -------------------------------------------------------------------------- */
/*                                    호이스팅                                 */
/* -------------------------------------------------------------------------- */
// 1. 함수 선언문 보다 위에서 실행시켜도 작동한다. 기명함수에서 발생할 수 있는 호이스팅이 발생
// 2. 호이스팅이 발생하지 않으려면 익명함수로 변경

// 1. 기명함수
// hellow();

// function hellow(){
// 	console.log('text')
// }

// 2 익명함수
// 2-1. 익명함수는 선언문 다음 실행해야 에러가 발생하지 않는다.
// hellow();

// const hellow = () => {
//   console.log("text");
// };

// 3. 초기화 함수 사용 ****중요*****
// 초기화 함수로 실행문을 작성하면 오류발생X

// 3-1. 초기화 함수
const init = () => {
  hellow();
};

// 3-2. 실행함수
const hellow = () => {
  console.log("text");
};

// 3-3. 초기화 함수 실행
init();

/* -------------------------------------------------------------------------- */
/*                                   호출 스케줄링                              */
/* -------------------------------------------------------------------------- */
/* ------------------------------ setTimeout ----------------------------- */
function showNotification(msg) {
  const dialog = document.querySelector("dialog");
  dialog.innerHTML = msg;
  // setTimeout(함수, 딜레이시간);
  const time = setTimeout(() => {
    dialog.close();
    console.log("2초뒤에 실행됨");
  }, 2000);
  return time;
}

// 알림 호출
const isTime = showNotification("토스트알람의 내용");
let seconds = 0;
/* ------------------------------- setInterval ------------------------------ */
const updateTimer = () => {
  const timmer = document.querySelector("#timer");
  timmer.innerText = `Timer : ${seconds++}초`;
};

// 1초마다 타이머 업데이트
// setInterval(함수, 반복시간);
const stopTime = setInterval(updateTimer, 1000);

// 인터벌은 주기적인 실행

/* ------------------------------ clearTimeout ------------------------------ */
const btnStopToast = document.querySelector(".stop-toast");
btnStopToast.addEventListener("click", () => {
  clearTimeout(isTime);
});

/* ------------------------------ clearInterval ----------------------------- */
const btnStopTimer = document.querySelector(".stop-timer");
btnStopTimer.addEventListener("click", () => {
  clearInterval(stopTime);
});
