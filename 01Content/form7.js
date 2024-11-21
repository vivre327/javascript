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
