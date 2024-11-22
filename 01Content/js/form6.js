/** 선택된 체크박스 집계 기능 */
const resetForm = () => {
  const chkBoxItems = document.querySelectorAll(".option-form input");
  const countView = document.querySelector(".selected");
  const resetBtn = document.querySelector(".btn-reset");
  let chkCount = 0;

  // 카운트 업데이트 및 화면 표시 함수
  const updateCount = () => {
    // 현재 체크된 박스 수를 계산
    chkCount = document.querySelectorAll(".option-form input:checked").length;

    // 화면에 표시
    countView.textContent = `${chkCount}개 선택됨`;
    // console.log(`현재 ${chkCount}개 체크됨`);

    // 초기화 버튼 비활성화
    if (chkCount === 0) {
      resetBtn.setAttribute("disabled", true);
    } else {
      resetBtn.removeAttribute("disabled");
    }
  };
  // 초기 카운트 표시
  updateCount();

  chkBoxItems.forEach((item) => {
    // 각 체크박스의 변경 감지
    item.addEventListener("change", () => {
      updateCount();
    });
  });
  // 초기화 실행
  resetBtn.addEventListener("click", () => {
    chkBoxItems.forEach((item) => {
      item.checked = false;
    });
    updateCount();
  });
};

resetForm();