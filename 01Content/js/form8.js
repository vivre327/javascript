const checkAll = () => {
  const all = document.querySelector("#chk3_1");
  const checkEls = document.querySelectorAll(".check-wrap input");

  // all.addEventListener("click", () => {
  //   checkEls.forEach((checkEl) => {
  //     if (checkEl.checked) {
  //       checkEl.checked = false;
  //     } else {
  //       checkEl.checked = true;
  //     }
  //   });
  // });

  // 전체선택을 클릭했을때, 전체선택한 input의 checked 상태를 확인해서 나머지input에 적용
  // 전체선택input의 boolean값을 확인해서 넣어준다.
  all.addEventListener("click", (e) => {
    const checkAll = e.target;
    console.log(checkAll.checked);

    checkEls.forEach((checkEl) => {
      checkEl.checked = checkAll.checked;
    });
  });
};

checkAll();

/** 전송하는 함수 */
const handleSubmit = () => {
  const form = document.querySelector("form");
  const checkEls = document.querySelectorAll(".check-wrap input");

  // submit은 form요소를 발송한ㄷㅏ.
  form.addEventListener("submit", (e) => {
    e.preventDefault(); //발송은 되지만 새로고침은 일어나지 않는다.(preventDefault)

    let isChecked = true; //공통 적용할 boolean값을 만들어준다.

    // 1. forEach 순환하여 checked 상태를 확인
    checkEls.forEach((checkEl) => {
      // 2. 하나라도 체크가 안되어있으면 isChecked를 false로 재할당 (걸러내는 필터의 역할!!)
      if (!checkEl.checked) {
        isChecked = false;
      }
    });

    // 3. 둘다 체크되어 있으면 isChecked는 true 그대로 이므로 조건문 실행
    // (필터로 걸러진 결과를 통해 isChecked의 boolean값으로 메세지를 최종 출력한다)
    if (isChecked) {
      console.log("모두 체크되어 있습니다.");
    } else {
      console.log("모두 체크해 주세요");
    }
  });
};

handleSubmit();
