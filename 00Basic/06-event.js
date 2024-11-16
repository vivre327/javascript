const message = document.querySelector(".message");
const click = document.querySelector(".click");
const enter = document.querySelector(".enter");
const leave = document.querySelector(".leave");
const inputText = document.querySelector(".input input");
const change = document.querySelector(".change select");
const submit = document.querySelector(".submit");
const submitID = document.querySelector(".submit .id");
const submitNickname = document.querySelector(".submit .nickname");
const target = document.querySelector(".target .parent");

const log = function (text) {
  const div = document.createElement("div");
  div.innerHTML = text;

  message.appendChild(div);
  message.scrollTop = message.scrollHeight;
};

click.addEventListener("click", function () {
  log("click");
});

enter.addEventListener("mouseenter", function () {
  log("mouseenter");
});

leave.addEventListener("mouseleave", function () {
  log("mouseleave");
});

inputText.addEventListener("input", function (e) {
  log(e.target.value);
});

change.addEventListener("change", function (e) {
  log(e.target.value);
});

// 링크는 새로고침이 되기 때문에 preventDefault()를 사용하여 막아준다.
document.querySelector(".link").addEventListener("click", function (e) {
  e.preventDefault();
  console.log("링크 클릭!!!");
});

// submit은 form 태그에서 사용
submit.addEventListener("submit", function (e) {
  e.preventDefault();
  const id = submitID.value;
  const nickname = submitNickname.value;

  if (id === "" || nickname === "") {
    log("아이디 또는 닉네임을 입력하세요.");
    return;
  }

  log("아이디:" + id + " / 닉네임:" + nickname);
});

// target은 부모와 자식이 있을 때, 부모(parent)에게 이벤트를 걸어주면 자식(child1,child2)에게도 이벤트가 적용된다.
// currentTarget은 이벤트가 발생한 요소(parent)에만 이벤트가 적용된다.
target.addEventListener("click", function (e) {
  e.preventDefault();

  const isTarget = e.target.id;
  const isCurrentTarget = e.currentTarget.id;

  // log(isTarget);
  log(isCurrentTarget);
});

// 이동하는 경우에만 a와 button submit을 사용한다.
// 이동하지 않는 경우에는 button type="button"을 사용한다.

// 멀티페이지는 이동되어도 상관없으므로 a태그를 사용해도 된다
// 싱글페이지는 이동되면 안되므로 button을 사용한다.
