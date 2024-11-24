/* -------------------------------------------------------------------------- */
/*                                    이벤트제거                               */
/* -------------------------------------------------------------------------- */
const remove = document.querySelector(".btn-remove");

// 1.외부에서 이벤트 정의
const removeFn = () => {
  console.log("이벤트가 실행되었습니다.");
};

remove.addEventListener("click", removeFn);

// 2.remove 함수는 외부에서 작성된 함수를 실행시켜야 작동된다.
remove.removeEventListener("click", removeFn);

const download = document.querySelector(".download");

const handleDownload = () => {
  console.log("다운로드 중입니다...");
};
download.addEventListener("click", handleDownload);

// .body는 html의 body태그를 의미
// contextmenu 이벤트는 마우스 오른쪽 클릭을 감지
document.body.addEventListener("contextmenu", () => {
  download.removeEventListener("click", handleDownload);
  console.log("다운로드 이벤트가 제거되었습니다.");

  download.disabled = true;
});
// 결과: 사용자가 마우스 오른쪽 클릭을 하면 다운로드 이벤트가 제거된다.
// ***중요*** 이벤트지우는 방식은 함수를 따로 빼서 작성하고 사용해야 한다.
// removeEventListener의 사용방식에 대해 기억해두자.

/* -------------------------------------------------------------------------- */
/*                                  캡처링과 버블링                            */
/* -------------------------------------------------------------------------- */
// 캡처링
const captureParent = document.querySelector(".capture");
const captureChildren = captureParent.querySelector(".children");
// selector.addEventListener(이벤트,함수,캡처링)

const children = () => {
  console.log("자식");
};

captureParent.addEventListener(
  "click",
  () => {
    console.log("parent");
    captureChildren.removeEventListener("click", children);
  },
  true
);

captureChildren.addEventListener("mouseenter", children);

// 버블링
const bubbleParent = document.querySelector(".bubble");
const bubbleChildren = bubbleParent.querySelector(".children");

bubbleParent.addEventListener("click", () => {
  console.log("parent");
});
bubbleChildren.addEventListener("click", (e) => {
  e.stopPropagation();

  console.log("children");
});

/* -------------------------------------------------------------------------- */
/*                                  이벤트 종류                                */
/* -------------------------------------------------------------------------- */
const mouse = document.querySelector(".event-list .mouse");
const keyboard = document.querySelector(".event-list .keyboard");
const form = document.querySelector(".event-list .form");

const logMessage = (message) => {
  // console.log(message);
};

// 마우스
mouse.addEventListener("click", () => logMessage("클릭"));
mouse.addEventListener("mouseenter", () => logMessage("마우스 진입"));
mouse.addEventListener("mouseleave", () => logMessage("마우스 떠남"));
mouse.addEventListener("mousedown", () => logMessage("마우스 버튼누름"));
mouse.addEventListener("mouseup", () => logMessage("마우스 버튼땜"));
mouse.addEventListener("mousemove", () => logMessage("마우스 움직임"));
mouse.addEventListener("contextmenu", () => logMessage("마우스 우측버튼"));
mouse.addEventListener("wheel", () => logMessage("마우스 휠"));

// 키보드
keyboard.addEventListener("keydown", () => logMessage("키 누름"));
keyboard.addEventListener("keyup", () => logMessage("키 땜"));
keyboard.addEventListener("focus", () => logMessage("초점 발생"));
keyboard.addEventListener("blur", () => logMessage("초점 잃음"));

// 폼
form.addEventListener("input", () => logMessage("값변경"));
form.addEventListener("change", () => logMessage("상태변경"));
form.addEventListener("submit", (e) => {
  e.preventDefault();
  logMessage("데이터 전송");
});

// 문서/윈도우
window.addEventListener("popstate", () => logMessage("페이지 바뀜"));
// URL기준 상태변화
window.addEventListener("load", () => logMessage("페이지 로드"));
window.addEventListener("scroll", () => logMessage("스크롤"));
window.addEventListener("resize", () => logMessage("창크기 변화"));

/* -------------------------------------------------------------------------- */
/*                                 키보드 keyCode                             */
/* -------------------------------------------------------------------------- */
const key = document.querySelector(".key");

key.addEventListener("keydown", (event) => {
  // console.log(event.code); // 이벤트 키확인;
  if (event.ctrlKey && event.key === "a") {
    console.log("단축키 실행");
  }
  // 1. 일반키 비교 : event.key === "a"
  // 2. 특수키 비교 : event.ctrlKey
});

/* -------------------------------------------------------------------------- */
/*                                animationend                                */
/* -------------------------------------------------------------------------- */
const ani = document.querySelector(".ani");

ani.addEventListener("animationend", (event) => {
  // console.log("애니메이션이 종료되었습니다.");
  // event.target.style.setProperty("--bg", "orange"); // 배경색 변경
  event.target.style.setProperty("--ani", "size");
});

// 애니메이션 종료 후 이어서 또 다른 애니메이션 실행할때 사용
