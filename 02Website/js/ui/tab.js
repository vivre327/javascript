// 여기서 받을 인자는 실행할 탭의 id와 활성화 클래스명이다.
// 활성화 클래스는 디자인마다 퍼블마다 다를 수 있고, 기본값은 "--active"이다.
export const tab = (id, options = {}) => {
  const config = {
    activeClass: "--active",
    ...options,
  };

  const { activeClass } = config;

  // 전개 연산자란? 배열이나 객체를 펼쳐서 개별 요소로 분리할 수 있게 하는 연산자..스프레드 연산자????
  // const a = [1, 2, 3];
  // const b = [4, 5, 6];
  // console.log(...a, ...b);

  if (typeof id !== "string") {
    console.warn("id값을 문자열로 전달해주세요.");
    return;
  }
  const tabNav = document.querySelectorAll(`[data-tabs=${id}] [data-tab]`);
  const tabContents = document.querySelectorAll(`[data-tab-contents=${id}] [data-tab-content]`);

  console.log(tabNav);
  // console.log("??");

  if (tabNav.length === 0 || tabContents.length === 0) {
    return;
  }

  // 이벤트바인드
  const bindEvent = () => {
    tabNav.forEach((tab, idx) => {
      tab.addEventListener("click", (event) => {
        console.log(idx);

        closeTab();
        openTab(event);
        closeTabPanel();
        openTabPanel(idx);
      });
    });
  };

  // 탭열기
  const openTab = (event) => {
    // console.log(event + "클릭");
    event.target.classList.add(activeClass);
  };

  // 탭닫기
  const closeTab = () => {
    tabNav.forEach((tab) => {
      tab.classList.remove(activeClass);
    });
  };

  // 탭패널 열기
  const openTabPanel = (idx) => {
    tabContents.forEach((tabPanel, panelIdx) => {
      if (idx === panelIdx) {
        tabPanel.classList.add(activeClass);
      }
    });
  };
  // 탭패널 닫기
  const closeTabPanel = () => {
    tabContents.forEach((tabPanel) => {
      tabPanel.classList.remove(activeClass);
    });
  };

  // 초기실행
  const init = () => {
    tabNav[0].classList.add(activeClass);
    tabContents[0].classList.add(activeClass);
  };
  init();

  bindEvent();
  // 호이스팅으로 인해 실행문을 마지막에..위치??흐름을 이해하기....이해안감...
  // 초기실행함수 작성 (각 동작들의 실행문이 담김) -> 각 동작들의 실행함수 작성 -> 초기실행함수 호출???
};

// CRUD
// Create, Read, Update, Delete
// Create: 생성
// Read: 조회
// Update: 수정
// Delete: 삭제

// CRUD를 할 줄 알아야 한다
