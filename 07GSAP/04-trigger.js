/* -------------------------------------------------------------------------- */
/*                              트윈 Scroll Trigger                            */
/* -------------------------------------------------------------------------- */
const halfWidth = innerWidth / 2;

// to tween안에서 트리거 지정하는 방식
gsap.to(".box", {
  x: halfWidth,
  duration: 2,
  scrollTrigger: {
    trigger: ".section3", //기준요소(부모요소 기준)
    // markers: true, //타이밍을 눈으로 볼 수 있는 마커
    // start: "트리거위치 뷰포트위치" //시작지점
    start: "20% center", //시작지점
    end: "80% center",
  },
  stagger: {
    each: 0.3,
  },
});

// scroll end와 scroll start는 뷰포트의 끝과 끝
// 뷰포는 고정. 뷰포트에 들어왔을때 시작..intersectionObserver처럼..
// start와 end는 내가 지정한 트리거 section2의 범위
// => start가 scroller start에 교차하면 애니메이션 실행

/* -------------------------------------------------------------------------- */
/*                             생성자 Scroll Trigger                           */
/* -------------------------------------------------------------------------- */
// const blockAnimation = gsap.to(".block", {
//   x: 100,
//   rotation: 360,
//   duration: 2,
// });

// ScrollTrigger.create({
//   trigger: ".section3",
//   start: "20% center",
//   end: "40% center",
//   // animation: "실행하고자 하는 애니메이션"
//   animation: blockAnimation,
//   markers: true,
// });

/* -------------------------------------------------------------------------- */
/*                               Toggle Actions                               */
/* -------------------------------------------------------------------------- */
const blockAnimation = gsap.to(".block", {
  x: 100,
  rotation: 360,
  duration: 4,
});

ScrollTrigger.create({
  trigger: ".section3",
  start: "20% center",
  end: "40% 40%",
  // animation: "실행하고자 하는 애니메이션"
  animation: blockAnimation,
  markers: true,
  // toggleActions: "onEnter onLeave onEnterBack onLeaveBack",
  toggleActions: "play complete reverse pause",
});
