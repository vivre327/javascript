/* A el 사용 */
export const el = (selector) => {
  // **selector에 대한 유효성 검사 (선언된 변수가 없거나, 문자열이 아닌 경우)

  // 1. 작성한 매개변수가 잘못된 문자형태인지를 검사!!! selector를 전달했을 때, 오류를 표시하고 함수를 종료
  if (!selector || typeof selector !== "string") {
    // Error로 표시: console.error("msg");
    console.warn("선택자가 비어있거나, 문자데이터가 아닙니다.");
    return; // 함수를 종료하고 아무것도 반환하지 않음
  }

  // **1을 통과하면 DOM 요소를 선택
  const element = document.querySelector(selector);

  // 2. DOM이 html에 실제 있는지 검사!! 선택된 요소가 없을 때, 오류를 표시하고 함수를 종료
  if (!element) {
    console.warn(`현재 ${selector}는 페이지에 존재하지 않습니다.`);
    return;
  }

  // 3. 선택된 요소가 있을 때, 해당 요소를 반환 (유효성 검사를 통과한 경우)
  return element;
};

/* B: querySelectorAll 사용시 els로 사용 */
export const els = (selector) => {
  // **selector에 대한 유효성 검사 (선언된 변수가 없거나, 문자열이 아닌 경우)

  // 1. 잘못된 selector를 전달했을 때, 오류를 표시하고 함수를 종료
  if (!selector || typeof selector !== "string") {
    // Error로 표시: console.error("msg");
    console.warn("선택자가 비어있거나, 문자데이터가 아닙니다.");
    return; // 함수를 종료하고 아무것도 반환하지 않음
  }
  const element = document.querySelectorAll(selector);

  // 2. 선택된 요소가 없을 때, 오류를 표시하고 함수를 종료
  if (!element) {
    console.warn(`현재 ${selector}는 페이지에 존재하지 않습니다.`);
    return;
  }

  // 3. 선택된 요소가 있을 때, 해당 요소를 반환 (유효성 검사를 통과한 경우)
  return element;
};
