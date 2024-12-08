/* -------------------------------------------------------------------------- */
/*                                  gsap.to()                                 */
/* -------------------------------------------------------------------------- */
// gsap.to(요소, 옵션);
// gsap 이라는 함수로 시작
// to() 메서드로 요소를 애니메이션 처리 -> tween이라고 명칭(=메서드)
// 실행시킬 대상 요소를 첫번째 인자로 전달
// {}객체로 옵션을 전달
gsap.to(".green", {
  x: 200,
  // x: "10rem", 단위 문자열도 가능
  // duration: 2,
  // duration지정 안하면 기본값 0.5초
});
/* -------------------------------------------------------------------------- */
/*                                 gsap.from()                                */
/* -------------------------------------------------------------------------- */
gsap.from(".violet", {
  rotation: 360, //360에서(from) 제자리로 오겠다
  scale: 0, //0에서(from) 원래 크기로 오겠다
  duration: 3,
});
/* -------------------------------------------------------------------------- */
/*                                gsap.fromTo()                               */
/* -------------------------------------------------------------------------- */
// gsap.fromTo(".tomato",{from},{to});
gsap.fromTo(
  ".tomato",
  {
    x: -50,
  },
  {
    x: 200,
    duration: 2,
  }
);
// -50에서(from) 200으로(to) 이동
/* -------------------------------------------------------------------------- */
/*                                  Stagger                                   */
/* -------------------------------------------------------------------------- */
gsap.from(".stagger .item", {
  x: 100, //오른쪽으로 100px 이동
  opacity: 0, //투명도 1에서 0으로
  stagger: 0.2, //stagger는 각각을 0.2초의 간격을 두고 실행하는것 .forEach와 비슷
  duration: 2,
  ease: "elastic", //애니메이션 효과
});
/* -------------------------------------------------------------------------- */
/*                                  Timeline                                  */
/* -------------------------------------------------------------------------- */
// 효과와 시간을 다 다르게 줄 수 있음
// 변수로 타임라인을 만들어서 사용
const timeline = gsap.timeline();

// 변수 타임라인에 추가된 순서대로 실행됨
timeline.from(".timeline .item1", {
  y: 50,
  opacity: 0,
});
timeline.from(".timeline .item2", {
  y: -50,
  opacity: 0,
});
timeline.from(".timeline .item3", {
  y: 50,
  opacity: 0,
});
timeline.from(".timeline .item4", {
  y: -50,
  opacity: 0,
});

/* -------------------------------------------------------------------------- */
/*                                  Controls                                  */
/* -------------------------------------------------------------------------- */

// 1.gsap을 변수에 담음
const tween = gsap.to(".control-wrap .ghost", {
  duration: 4,
  x: 300,
  ease: "none",
  paused: true, //2.초기 정지
});

const buttons = document.querySelectorAll(".control-wrap button");

// 3. 변수에 메서드로 제어가능
buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    switch (index) {
      case 0:
        tween.play(); // 정방향 재생
        break;
      case 1:
        tween.pause(); // 일시정지
        break;
      case 2:
        tween.resume(); // 일시정지에서 시작
        break;
      case 3:
        tween.reverse(); // 역재생
        break;
      case 4:
        tween.restart(); // 처음부터 다시재생
        break;
    }
  });
});
