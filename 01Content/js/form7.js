/** 이메일 도메인 선택에 따라 입력 필드 값 설정 */
const onChangeOption = () => {
  const inputEl = document.querySelector(".domain");
  const optionEl = document.querySelector(".email select");
  const defaultOption = document.querySelector(
    ".email select option[selected]"
  ).value;
  inputEl.value = defaultOption;

  // change 이벤트
  optionEl.addEventListener("change", (e) => {
    const selectedEl = e.target.value;

    if (selectedEl == "") {
      // 직접 입력 선택 시 입력 필드 활성화 및 포커스 이동
      inputEl.readOnly = false;
      inputEl.value = "";
      inputEl.focus();
    } else {
      // 도메인 선택 시 입력 필드 값 설정 및 읽기 전용으로 변경
      inputEl.value = selectedEl;
      inputEl.readOnly = true;
    }
  });
};

onChangeOption();

/** 추천인 아이디 확인 */
const checkRecUser = () => {
  const msgEl = document.querySelector("#message");
  const inputEl = document.querySelector("#txt7_2_1");
  const submitBtn = inputEl.nextElementSibling;

  submitBtn.addEventListener("click", () => {
    if (!inputEl.value) {
      msgEl.textContent = "추천인 아이디를 입력해 주세요.";
      msgEl.style.color = "red";
      inputEl.focus();
      inputEl.addEventListener("input", () => {
        msgEl.textContent = "";
      });
    } else {
      if (!confirm(`추천인 아이디: ${inputEl.value}`)) {
        alert("취소 되었습니다.");
        inputEl.value = "";
        inputEl.focus();
      }
    }
  });
};

checkRecUser();

// const checkPwd = () => {
//   const p1 = document.getElementById("txt7_2");
//   const p2 = document.getElementById("txt7_3");
//   //null 은 falsy값
//   let warningSpan = null;

//   p2.addEventListener("input", () => {
//     if (!warningSpan) {
//       warningSpan = document.createElement("p");
//       p2.insertAdjacentElement("afterend", warningSpan);
//     }
//     if (p1.value !== p2.value) {
//       warningSpan.textContent = "패스워드가 일치하지 않습니다.";
//       warningSpan.style.color = "red";
//     } else {
//       warningSpan.textContent = "패스워드가 일치합니다.";
//       warningSpan.style.color = "green";
//     }
//   });
// };

// checkPwd();

// falsy : 0, -0, null, "", undefined, NaN
// Truthy : falsy를 제외한 모든 값들

// 표준 상태 관련 속성들
// element.disabled = true/false
// element.readonly = true/false
// element.checked = true/false
// element.required = true/false

// // 값 관련
// element.value = "값"
// element.placeholder = "입력해주세요"

// // focus 관련
// element.focus()
// element.blur()
