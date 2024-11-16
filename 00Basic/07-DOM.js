/* -------------------------------------------------------------------------- */
/*                                   DOM 선택자                                */
/* -------------------------------------------------------------------------- */
const item1 = document.querySelector(".yourname-list .item1");
// console.log(item1);
// item1.style.border = "1px solid red";

// 변수명은 복수형으로 작명한다.
const items = document.querySelectorAll(".yourname-list li");
// console.log(items);
// console.log(items[0]); // 개별아이템접근

// foreach는 순환하여 개별아이템을 가져온다.
// 6개가 담겨있을때 콘솔을 찍으면 6개가 나온다.
// 2개의 매개변수를 받는다. 개별아이템, 개별아이템index값
// items.forEach((작명, 개별아이템index값) => {
//   console.log(작명, 개별아이템index값);
// });

// 매개변수에 인덱스없이 작명만 할 수 있다.
items.forEach((item) => {
  item.style.border = "2px solid red";
  // 총 6번 순회하면서 각각의 아이템에 스타일을 적용한다.
});

// *****querySelectorAll과 forEach는 짝꿍이다.*****

/* -------------------------------------------------------------------------- */
/*                                 DOM 클래스 제어                              */
/* -------------------------------------------------------------------------- */
const tabButtons = document.querySelectorAll(".tabs button");

// **클래스 추가 기능 :개별버튼에 접근 가능
// tabButtons.forEach((tabButton) => {
//   tabButton.addEventListener("click", () => {
//     tabButton.classList.add("active");
//   });
// });

// **클래스 제거 기능 :순환 접근 하기!!!
// tabButtons.forEach((tabButton) => {
//   tabButton.addEventListener("click", () => {
//     tabButton.classList.remove("active");
//     // 사용자가 원할때, 클릭할때만 접근하여 클래스를 제거한다.
//   });
// });

// **클래스 토글 기능
tabButtons.forEach((tabButton) => {
  tabButton.addEventListener("click", () => {
    tabButton.classList.toggle("active");
  });
});

/* -------------------------------------------------------------------------- */
/*                                 DOM 텍스트 제어                              */
/* -------------------------------------------------------------------------- */
// const isName = document.querySelector(".text-list .name");

// 모든 DOM요소는 객체이기 때문에 textContent를 사용하여 텍스트를 제어할 수 있다.
// console.log(isName);
// console.log(isName.textContent);

// isName.textContent = "이름을 넣어보자";

// *기능을 만들때는 함수로 묶기!!!
const changeName = () => {
  const isButton = document.querySelector(".text-list button");
  const isName = document.querySelector(".text-list .name");

  isButton.addEventListener("click", () => {
    const name = isName.textContent;
    // console.log(name);
    isButton.textContent = `${name}님이 수강신청 하셨습니다.`;
  });
};

// changeName();

const CourseRegist = () => {
  const buttons = document.querySelectorAll(".text-list button");
  const names = document.querySelectorAll(".text-list .name");

  buttons.forEach((button, buttonIndex) => {
    button.addEventListener("click", () => {
      // console.log(button, buttonIndex);

      names.forEach((name, nameIndex) => {
        // console.log(name, nameIndex);
        if (buttonIndex === nameIndex) {
          const isName = name.textContent;
          // console.log(isName);
          button.textContent = `${isName}님 수강신청 함`;
        }
      });
    });
  });
};

// CourseRegist();

/* -------------------------------------------------------------------------- */
/*                                  DOM 속성 제어                              */
/* -------------------------------------------------------------------------- */
const disabledRadio = (selector) => {
  // const radio = document.querySelector(".ratings input");
  // radio.setAttribute('속성명', '속성값');
  // radio.setAttribute("disabled", "true");

  const radios = document.querySelectorAll(".ratings input");
  const disabledButton = document.querySelector(selector);

  // 상태관리
  let isDiabled = true;

  // 모두 비활성 (기능모듈화)
  const disabled = () => {
    radios.forEach((radio) => {
      if (isDiabled) {
        disabledButton.textContent = "모두 활성!!!";
        radio.setAttribute("disabled", true);
      } else {
        disabledButton.textContent = "모두 비활성!!!";
        radio.removeAttribute("disabled");
      }
    });
    isDiabled = !isDiabled;
  };

  disabledButton.addEventListener("click", disabled);
};

disabledRadio(".btn-disabled");

// ***패스워드 타입을 text로 바꾸고 버튼active하여 모양을 바꾸는 기능
const psswordView = () => {
  const button = document.querySelector(".password button");
  const input = document.querySelector(".password input");

  // 1.함수바인드
  const bind = () => {
    addClass();
    changeType();
  };

  // 2-1.클래스 추가
  const addClass = () => {
    button.classList.toggle("active");
  };

  // 2-2.타입변경
  const changeType = () => {
    // 클릭될떄마다 isType에 type값을 가져온다.
    const isType = input.getAttribute("type");
    console.log(isType);

    if (isType === "password") {
      input.setAttribute("type", "text");
    } else {
      input.setAttribute("type", "password");
    }
  };

  // 3.이벤트실행
  button.addEventListener("click", bind);
};

psswordView();

// ***이름을 변경할 수 있는 기능: readonly를 제거하는 기능
const readonlyName = () => {
  const button = document.querySelector(".name button");
  const input = document.querySelector(".name input");
  const h1 = document.querySelector(".header h1 strong");

  button.addEventListener("click", () => {
    const isReadonly = input.hasAttribute("readonly");
    // console.log(isReadonly);
    if (isReadonly) {
      input.removeAttribute("readonly");
    } else {
      const isValue = input.value;
      // console.log(isValue);
      h1.textContent = isValue;
      input.setAttribute("readonly", true);
    }
    console.log(isReadonly);
    // input.removeAttribute("readonly");
  });

  // 1. 이름변경을 누르면 비활성에서 활성
  // 2. 한 번 더 누르면 활성에서 비활성
  // 2-1. h1의 텍스트가 input의 value로 변경
};

readonlyName();

const changeImage = () => {
  const button = document.querySelector(".btn-avatar");
  const image = document.querySelector(".avatar");

  button.addEventListener("click", () => {
    // const isSrc = image.getAttribute("src");
    image.setAttribute("src", "./images/avatar1.svg");
  });
};
changeImage();

const imageAlt = () => {
  const image = document.querySelector(".avatar");
  const button = document.querySelector(".btn-alt");

  button.addEventListener("click", () => {
    // hasAttribute는 속성이 있는지 없는지 true, false로 반환한다.
    const isAlt = image.hasAttribute("alt");
    console.log(isAlt);

    // if조건문은 true일때 실행되므로 !isAlt로 뒤집어 false를 만들어준다.
    if (!isAlt) {
      image.setAttribute("alt", "프로필 이미지");
    }
  });
};

imageAlt();

// 첫번쨰 인풋
// const isValue = document.querySelector(".ratings input").value;
// console.log(isValue);

// ***checked라는 메소드로 체크박스,라디오를 체크하는 기능
const checkScore = () => {
  const button = document.querySelector(".btn-score");
  const radios = document.querySelectorAll(".ratings input");

  // 1. let으로 상태를 거짓으로 정의
  let isChecked = false;

  button.addEventListener("click", () => {
    // console.log(radios[0].checked);
    radios.forEach((radio) => {
      // 2. 체크된 라디오버튼 있는지 체크
      if (radio.checked) {
        // 참값은 체크된 라디오버튼
        const isValue = radio.value;
        console.log(`선택된 점수는 ${isValue}점 입니다.`);
        // 3. 체크된 라디오버튼이 있으면 상태를 참으로 변경
        isChecked = true;
      }
    });

    // 4-a. 체크된 라디오버튼이 없으면 경고문구 출력
    // if (!isChecked) {
    //   console.log("점수를 선택해주세요.");
    // }

    // 4-b. 체크된 라디오버튼이 없으면 경고문구 출력
    !isChecked && console.log("점수를 선택해주세요.");
    // &&연산자는 앞의 조건이 거짓이면 뒤의 조건을 실행한다.
  });
};
// 1~4 흐름을 이해하고 기능을 만들어보자.

checkScore();

// ***파일을 추가하는 기능: 파일인풋과 텍스트인풋분리된UI에 유용하다.
const addFile = () => {
  const file = document.querySelector(".file");
  const fileInfo = document.querySelector(".file-info");

  file.addEventListener("change", () => {
    // console.log(file.files[0].name);
    const fileName = file.files[0].name;
    const fileSize = file.files[0].size / 1024;

    console.log(fileSize);

    fileInfo.textContent = `파일이름: ${fileName} / 파일크기 : ${fileSize.toFixed(2)}KB`;
  });
};

addFile();

// ***팝업창을 띄우는 기능
// show는 보여주기만, showModal은 dimed백과 함께 보여주기 (자세한 내용은 MDN참조)
const dialog = () => {
  const openButton = document.querySelector(".header button");
  const closeButton = document.querySelector(".dialog .close");
  const dialog = document.querySelector(".dialog");

  openButton.addEventListener("click", () => {
    dialog.showModal();
  });

  closeButton.addEventListener("click", () => {
    dialog.close();
  });
};

dialog();

/* -------------------------------------------------------------------------- */
/*                                 DOM CSS 제어                                */
/* -------------------------------------------------------------------------- */
// 대소문자 카멜케이스로 사용
const strong = document.querySelector(".css .item1 strong");
const item3 = document.querySelector(".css .item3");
// strong.style.CSS속성 = "값";
// strong.style.fontSize = "25px";
// strong.style.color = "crimson";

// 여러줄은 백틱기호로 묶어준다.
strong.style.cssText = `
font-size: 25px;
color: crimson;
background-color: #f8f8f8;
`;

// setProperty는 CSS변수를 변경할때 사용한다.
item3.style.setProperty("--color", "lavender");
item3.style.setProperty("--primaryLight", "gray");

const item4 = document.querySelector(".css .item4");

// getComputedStyle는 CSS스타일을 가져온다.(객체로 반환)
const isStyle = getComputedStyle(item4).border;
console.log(isStyle);
/* -------------------------------------------------------------------------- */
/*                                   DOM 탐색                                  */
/* -------------------------------------------------------------------------- */

// 형제를 탐색하는 기능
const siblings = () => {
  const item1 = document.querySelector(".routine-list .item1");
  const item2 = document.querySelector(".routine-list .item2");

  item1.addEventListener("click", () => {
    const next = item1.nextElementSibling;
    // console.log(next);
    next.classList.toggle("active");
  });

  item2.addEventListener("click", () => {
    const previous = item2.previousElementSibling;
    // console.log(next);
    previous.classList.toggle("active");
  });
};

// siblings();

const toggleDays = () => {
  const buttons = document.querySelectorAll(".routine-list > li > button");

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      // e.target과 e.currentTarget의 차이점을 이해하자.
      const parent = e.currentTarget.parentElement;
      console.log(parent);
      parent.classList.toggle("active");
    });
  });
};

toggleDays();

/* -------------------------------------------------------------------------- */
/*                                   DOM 삽입                                  */
/* -------------------------------------------------------------------------- */

// DOM은 HTML 문서의 객체 모델을 의미한다.
// DOM은 Html 태그 뿐만 아니라 텍스트도 제어할 수 있다.
// Node는 공백 주석을 포함한 모든 HTML 요소를 의미한다.
// DOM은 Node 객체로 구성되어 있다.
