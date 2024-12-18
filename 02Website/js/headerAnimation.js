export const headerAnimation = () => {
  // console.log(window.location.pathname);
  const main = window.location.pathname.includes("main");

  if (main) {
    document.body.style.overflow = "hidden"; //로딩바가 사라지면 스크롤바 생성
  }

  const timeline = gsap
    .timeline({
      onComplete() {
        //헤더애니메이션이 끝난뒤에 document visible을 실행하겠다!
        document.body.style.overflow = "visible"; //로딩바가 사라지면 스크롤바 생성
      },
    })
    .fromTo(
      ".header",
      {
        y: -100,
      },
      {
        y: 0,
      }
    )
    .from(".header__wrap h1", {
      x: -100,
      opacity: 0,
      duration: 1,
    })
    .from(
      ".gnb > ul > li",
      {
        y: -50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
      },
      "<"
    )
    .from(
      ".profile",
      {
        x: 100,
        opacity: 0,
        duration: 1,
      },
      "<"
    );
};
