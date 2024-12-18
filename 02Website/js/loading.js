export const loading = () => {
  const images = document.querySelectorAll("img"); //NodeList 유사배열 반환 (forEach 사용가능, map 사용불가)
  // console.log(images);

  // 1. 먼저 유사배열을 배열로 변환
  const array = Array.from(images);
  // console.log(array);

  // 실행
  // console.log(imagesLoaded(array)); //console로 찍어서 키값 확인

  imagesLoaded(array)
    // 1.progress: 이미지가 로드될때마다 실행
    .on("progress", (state) => {
      // console.log(state); //콘솔에서 인수확인
      // console.log(state.progressedCount); //progressedCount: 로드된 이미지 수

      // state.progressedCount * 100 / 전체갯수

      // tip.이미지 홀수일때 소숫점나올수 있어 Math.round처리!
      const percent = Math.round((state.progressedCount * 100) / array.length);
      console.log(percent);
      document.querySelector(".progress-bar").style.width = `${percent / 2}%`;
      // 개발자도구 Network에서 Throttling을 통해 네트워크 속도를 조절하여 로딩바 확인 NoThrottling을 3G로 설정
      document.querySelector(".state").textContent = `${percent}%`;
    })
    // 2.always: 모든 이미지가 로드되면 실행
    .on("always", () => {
      // console.log("로딩끝"); //엑박이미지 여부 상관없이 모든이미지 로딩끝
      // document.body.style.overflow = "visible"; //로딩바가 사라지면 스크롤바 생성
      init();
    });
};

const init = () => {
  gsap.to(".loading", {
    autoAlpha: 0, //autoAlpha: opacity와 visibility를 함께 조절 (visibility는 접근성을 위해 사용)
  });
};

// Tip. gsap의 동작원리: autoAlpha를 지정하면 autoAlpha를 먼저 실행하고 나머지 속성을 실행
