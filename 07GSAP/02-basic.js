/* -------------------------------------------------------------------------- */
/*                                    Tween                                   */
/* -------------------------------------------------------------------------- */
gsap.to(".tween", {
  x: 300,
  duration: 2,
  backgroundColor: "green",
  width: "20%",
  height: 100,
  color: "white",
  rotation: 180,
});
/* -------------------------------------------------------------------------- */
/*                               Delay & Repeat                               */
/* -------------------------------------------------------------------------- */
gsap.to(".delay", {
  x: 100,
  duration: 2,
  delay: 1, //초기실행에 대한 딜레이
  // repeat: 3,
  repeat: -1, //무한반복
  yoyo: true, //yoyo는 앞뒤로 왔다갔다
  // repeatDelay: 1, //반복(예3회)시 반복 사이의 딜레이
});

/* -------------------------------------------------------------------------- */
/*                                    Ease                                    */
/* -------------------------------------------------------------------------- */
gsap.from(".ease", {
  opacity: 0,
  x: 400,
  duration: 2,
  ease: "power3.inOut", //https://gsap.com/docs/v3/Eases 공식문서에서 view:box로 참조
});
/* -------------------------------------------------------------------------- */
/*                                   Stagger                                  */
/* -------------------------------------------------------------------------- */
const timeline = gsap.timeline();

timeline.from(".stagger li", {
  y: 80,
  opacity: 0,
  duration: 1,
  stagger: {
    // each: 0.2, //개별적으로 지정
    amount: 2, //총시간 2초 안에 1/n로 각각이 시간을 나눠가진다.
    from: "center", //가운데개체를 시작으로 바깥으로 퍼져나간다.
    // from: "end", // 끝에서 시작
    // from: "first", //시작에서 시작
    // from: "edges", //양쪽에서 시작
    // from: "random", //랜덤하게 시작 (ex.풀이 피어나는듯한 효과)
    // from: 1, //시작할 기준점 지정, (제로넘버베이스)
  },
  ease: "back(3)",
});

timeline.to(".stagger li", {
  x: 100,
  rotation: 360,
  stagger: {
    each: 0.4,
    from: "end",
  },
});
/* -------------------------------------------------------------------------- */
/*                                  From의 문제점                              */
/* -------------------------------------------------------------------------- */
const box = document.querySelector(".box");
box.addEventListener("mouseenter", () => {
  gsap.fromTo(
    ".box",
    {
      rotation: 0,
    },
    {
      duration: 0.5,
      rotation: 360,
    }
  );
});
