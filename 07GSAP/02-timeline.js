/* -------------------------------------------------------------------------- */
/*                                  Timeline (기존방식)                        */
/* -------------------------------------------------------------------------- */

// const timeline = gsap.timeline();

// timeline.from(".header", {
//   y: 50,
//   opacity: 0,
//   duration: 1,
// });
// timeline.from(
//   ".visual",
//   {
//     y: 50,
//     opacity: 0,
//   },
//   "-=0.5"
// );
// timeline.from(
//   ".box:nth-child(odd)",
//   {
//     x: -50,
//     opacity: 0,
//     stagger: {
//       each: 0.2,
//     },
//   },
//   "<"
// );
// timeline.from(
//   ".box:nth-child(even)",
//   {
//     x: 50,
//     opacity: 0,
//     stagger: {
//       each: 0.2,
//       from: "random",
//     },
//   },
//   "<"
// );
// timeline.from(
//   ".footer",
//   {
//     y: 50,
//     opacity: 0,
//     from: "random",
//   },
//   "+=1"
// );

/* -------------------------------------------------------------------------- */
/*                                  Timeline(메서드체이닝방식)                  */
/* -------------------------------------------------------------------------- */

const timeline = gsap
  .timeline()
  .from(".header", {
    y: 50,
    opacity: 0,
    duration: 1,
  })
  .from(
    ".visual",
    {
      y: 50,
      opacity: 0,
    },
    "-=0.5"
  )
  .from(
    ".box:nth-child(odd)",
    {
      x: -50,
      opacity: 0,
      stagger: {
        each: 0.2,
      },
    },
    "<"
  )
  .from(
    ".box:nth-child(even)",
    {
      x: 50,
      opacity: 0,
      stagger: {
        each: 0.2,
        from: "random",
      },
    },
    "<"
  )
  .from(
    ".footer",
    {
      y: 50,
      opacity: 0,
      from: "random",
    },
    "+=1"
  );

// Tip. 노션의 Position Parameter에서 코드펜 예시 확인
// .to("#sequence #green", { x: width,xPercent: -100, duration: 2 }, 0)
// .to("#sequence #purple", { x: width, xPercent: -100,duration: 1 }, "<")
// .to("#sequence #orange", { x: width, xPercent: -100,duration: 1 }, "+=1");

// A. 딜레이의 절대적 위치
// 0은 타임라인의 시작점

// B. 딜레이의 상대적 위치
// < less then은 이전 요소의 시작 시점을 따라감
// +=1은 이전 요소의 1초 뒤에 실행
// -=1은 이전 요소의 끝나기 1초 전에 실행
