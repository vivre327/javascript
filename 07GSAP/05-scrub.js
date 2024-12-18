// 예제 : https://www.hilowave.co.kr/
// scrub : 스크롤 되는 위치에 따라 애니메이션을 제어하는 기능
/* -------------------------------------------------------------------------- */
/*                                  트윈 Scrub                                 */
/* -------------------------------------------------------------------------- */
gsap.to(".box", {
  x: 200,
  y: 400,
  rotation: 360,
  scrollTrigger: {
    trigger: ".section2", //트리거 대상(부모요소 기준)
    start: "top center", //시작지점  첫번째 트리거 두번째 뷰포트
    end: "bottom center", //끝지점
    // markers: true,
    // scrub: true, // true는 linear
    scrub: 1, // number는 속도조절
  },
});
/* -------------------------------------------------------------------------- */
/*                                  생성자 Scrub                               */
/* -------------------------------------------------------------------------- */
const block = gsap.to(".block", {
  x: 300,
  y: 500,
  scale: 2,
  backgroundColor: "orange",
});

ScrollTrigger.create({
  trigger: ".section3",
  start: "10% center",
  end: "40% center",
  scrub: 2,
  // markers: true,
  animation: block,
});

/* -------------------------------------------------------------------------- */
/*                                 타임라인 Scrub                              */
/* -------------------------------------------------------------------------- */
// 모든 타임라인의 기본 duration은 0.5초 -> -=0.2는 0.3초
const fix = gsap
  .timeline()
  .to(".section4", {
    backgroundColor: "black",
    duration: 0.3, //duration을 0.3초로 지정하면 scrub을 기준으로 백분율로 애니메이션 실행
  })
  .to(
    ".fix",
    {
      color: "white",
    },
    "-=0.3"
  ) // -=0.3은 직전타임라인 끝나기 0.3초 전에 시작하겠다는 의미
  .to(
    ".fix",
    {
      x: 400,
      scale: 5,
    },
    "<"
  ); // '<'는 이전 타임라인을 따라감. less than

ScrollTrigger.create({
  trigger: ".section4",
  start: "10% center",
  end: "80% center",
  scrub: 2,
  markers: true,
  animation: fix,
  // 스크럽이 끝났을때 실행되는 콜백함수
  onScrubComplete() {
    console.log("스크럽 끝났어요");
  },
});
