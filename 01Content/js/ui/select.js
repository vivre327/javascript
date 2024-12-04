import { el, els } from "../helper.js";
export const select = (element = ".select", activeClass = "active") => {
  // 객체로 관리하면 코드 관리가 쉽고 가독성이 좋아진다.
  // 셀렉트마다 디자인이 다른경우, config의 객체를 매개변수로 받아서 사용한다. (global.js에서 사용)
  // 초기값이 아닌 다른 디자인은 함수실행을 매개변수넣어서 하나 더한다!! (별도의 클래스 디자인해서 테스트해보기!!!!!!)
  const config = {
    selectName: element,
    className: activeClass,
  };

  // 깔끔한 코드를 위해 구조분해할당. config.selectName을 selectName으로 변경
  const { selectName, className } = config;

  // 할일목록
  // 1. 선택하세요를 클릭하면 화살표 방향이 바뀐다.
  const handleSelect = (selector) => {
    const button = selector.children[0];
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const parent = e.target.parentElement;
      // console.log(parent);
      // 1-1. 화살표 방향이 바뀐다.
      parent.classList.toggle(className);

      // 1-2. 리스트가 펼쳐진다.toggle
      // el(".select").classList.toggle("open");
    });
  };

  // 2. 선택하세요를 클릭하면 리스트가 펼쳐진다. toggle
  const handleSelectList = (selector) => {
    const buttons = selector.querySelectorAll("ul button");
    buttons.forEach((button) => {
      // 3. 리스트에 있는 버튼을 클릭하면,
      button.addEventListener("click", (e) => {
        // *새로고침방지하기 위해 preventDefault를 사용한다.
        e.preventDefault();
        // 3-1. 리스트가 닫힌다.
        const parent = e.target.closest(selectName);
        parent.classList.remove(className);
        // 3-2. 클릭한 버튼의 텍스트가 선택하세요 텍스트 대신 써져야한다.
        const isText = e.target.textContent;
        console.log(isText);
        parent.children[0].textContent = isText;
      });
    });
  };

  // 호이스팅 방지를 위해 함수를 먼저 선언하고 실행한다.
  els(".select").forEach((select) => {
    handleSelect(select);
    handleSelectList(select);
  });
};
