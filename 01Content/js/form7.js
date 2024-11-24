// 셀렉트의 초기값을 인풋에 적용시키는 함수
const defaultOption = (options, input) => {
  const defaultOptionEl = options.querySelector("option[selected]").value;
  input.value = defaultOptionEl;
};

/** 이메일 도메인 선택에 따라 입력 필드 값 설정 */
const onChangeOption = () => {
  const email = document.querySelector(".email");
  const inputEl = email.querySelector(".domain");
  const optionEl = email.querySelector("select");

  defaultOption(optionEl, inputEl); //초기값 지정

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

// 경우의 수
// 1. 인풋이 비어있음 fail -> 경고메시지 출력 후 input 포커스();
// 2. 인풋이 올바르게 작성됨success -> 컨펌창 출력
// 3. 컨펌창에서 사용자가 [확인] -> 최종success로 input창 입력값 유지
// 4. 컨펌창에서 사용자가 [취소] -> input의 값을 비우고 포커스();

/** 추천인 아이디 확인하는 로직 */
const checkRecUser = () => {
  const msgEl = document.querySelector("#message");
  const inputEl = document.querySelector("#txt7_2_1");
  const submitBtn = document.querySelector("#inviteBtn");

  // 에러메시지 삭제 함수
  const clearErrorMsg = () => {
    inputEl.addEventListener("input", () => {
      msgEl.textContent = "";
    });
  };

  // 에러메시지 출력 함수
  const showErrMsg = () => {
    msgEl.textContent = "추천인 아이디를 입력해 주세요.";
    msgEl.style.color = "red";
    inputEl.focus();
  };

  // 추천인 아이디 컨펌 함수
  const onIdConfirm = () => {
    // 추천인 입력 input값 비우는 함수
    const cancelId = () => {
      alert("취소 되었습니다.");
      inputEl.value = "";
      inputEl.focus();
    };

    if (!confirm(`추천인 아이디: ${inputEl.value}`)) {
      cancelId(); // 추천인 아이디 입력 취소
    }
  };

  // 추천인 아이디 확인 버튼 클릭 시 로직
  submitBtn.addEventListener("click", () => {
    if (!inputEl.value) {
      showErrMsg(); // 에러메시지 출력
      clearErrorMsg(); // input입력시작하면 에러메시지 삭제
    } else {
      onIdConfirm(); //추천인 아이디 확인 컨펌창 출력
    }
  });
};

onChangeOption(); // 이메일 도메인 선택에 따라 입력 필드 값 설정
checkRecUser(); // 추천인 아이디 확인

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
