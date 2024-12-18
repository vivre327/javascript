/* -------------------------------------------------------------------------- */
/*                                     Pin                                    */
/* -------------------------------------------------------------------------- */
const section2Height = document.querySelector(".section2").offsetHeight; // section2의 높이
const boxHeight = document.querySelector(".box").offsetHeight; // box의 높이

console.log(section2Height);

// pin본인의 영역만큼 2배를 .pin-spacer가 차지 -> 그안에서 .box가 fixed로 고정되고 translate로 이동함(개발자도구에서 확인가능)
ScrollTrigger.create({
  trigger: ".box",
  start: "top top",
  end: `${section2Height}px`, // 영역을 벗어나면 pin이 풀림
  // markers: true,
  scrub: true,
  pin: true,
  // pinType: "transform",
  pinSpacing: false, // pinSpacing을 false로 하면 pin이 trigger의 영역만큼만 고정됨
});
// pinType은 기본값이 fixed이지만 transform으로 바꾸면 transform으로 고정됨 ?? => 개발자도구에서 확인하여 차이점 확인하기
/* -------------------------------------------------------------------------- */
/*                                  Pin Type                                  */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                 Pin Spacing                                */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                  examples1                                 */
/* -------------------------------------------------------------------------- */
const fixText = gsap
  .timeline()
  .fromTo(
    ".fix",
    {
      rotation: 0,
      // x: -innerWidth, //window의 가로길이만큼 왼쪽으로 이동 (window.innerWidth)
      x: "-250%",
    },
    {
      rotation: 720,
      x: 0,
    }
  )
  .to(
    ".fix",
    {
      color: "white",
    },
    "-=0.2"
  )
  .to(
    ".fix",
    {
      scale: 10,
    },
    "-=0.3"
  )
  .to(".section3", {
    backgroundColor: "white",
  });

// 1. 내가 원하는 타임라인 애니메이션 변화(크기,색상,이동)를 이어서 모두 작성
// 2. 눈으로 확인하면서 -=0.2, -=0.3으로 시간을 조절하여 애니메이션을 연결
// 주의사항: overflow:hidden을 넣어야 가로스크롤이 생기지 않음

ScrollTrigger.create({
  trigger: ".section3",
  start: "top top",
  end: "5000px center", //1000px을 스크롤움직이는 만큼 애니메이션 실행
  scrub: 1.5, // scrub이 지정되어야지 스크롤이 진행되는 동안 애니메이션이 실행된다
  pin: true,
  // markers: true,
  animation: fixText,
});

/* -------------------------------------------------------------------------- */
/*                                  examples2                                 */
/* -------------------------------------------------------------------------- */
const isArrayText = (selector, tag) => {
  // strong의 각 글자를 span으로 감싸기 (map으로 배열화 하여 span으로 감싸기)
  const strong = document.querySelector(selector);
  const strongs = strong.textContent.split("");

  const isArray = strongs.map((item) => {
    return `
    <${tag}>${item}</${tag}>
    `;
  });
  // console.log(isArray.join(""));
  strong.innerHTML = isArray.join("");
};

isArrayText(".strong", "span");

// animation을 위한 span다시 변수로 지정
const textArray = document.querySelectorAll(".strong span");

const textSplit = gsap
  .timeline()
  .fromTo(
    textArray,
    {
      y: 200,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      ease: "elastic.out(1, 0.3)",
      stagger: {
        each: 0.2,
        from: "center",
      },
    }
  )
  .to(textArray, {
    color: "white",
    stagger: {
      each: 0.1,
      from: "center",
    },
  });

ScrollTrigger.create({
  trigger: ".section4",
  start: "top center",
  end: "200% center", //1000px을 스크롤움직이는 만큼 애니메이션 실행
  scrub: 2, // scrub이 지정되어야지 스크롤이 진행되는 동안 애니메이션이 실행된다
  pin: true,
  markers: true,
  animation: textSplit,
});
