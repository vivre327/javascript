import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

// *기능정의: web에서는 slide지만 모바일에서는 slide사라지고 갤러리로 변경

// 1. 빈 변수 만든다.
let swiper;
// update때 swiper를 호출하기 위해 재할당 전역변수로 선언
// destroy때 비워주기 위해 재할당 선언

// 2. 조건에 따라 실행하기 위해 slide함수로 감싸줌
const slide = () => {
  // swiper인스턴스 생성하여 Swiper작성
  swiper = new Swiper(".swiper", {
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
      360: {
        // 360이상
        slidesPerView: 1,
      },
      1024: {
        //1024 이상
        slidesPerView: 1,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};

// 3. 초기실행은 웹버전일때만 실행
if (innerWidth > 1024) {
  slide();
}

// 상단의 const swiper가 인스턴스이다.
window.addEventListener("resize", () => {
  //4. 윈도우창이 리사이즈 될때마다
  // 윈도우의 크기를 구하여 슬라이드를 실행

  // 5. 모바일버전
  if (innerWidth < 1024) {
    if (swiper) {
      //swiper안이 비어있찌않으면
      // *모바일 destroy()란? : swiper를 파괴 (swiper공식문서 참조)
      console.log(swiper);
      swiper.destroy(); //5-1. swiper를 파괴
      swiper = null; //5-2. null로 재할당하여 모바일분기에서 swiper잔재가 남지않도록 처리
    }
    // 6. 웹버전
  } else {
    // *웹 update() : swiper를 다시 호출 (swiper공식문서 참조)
    if (!swiper) {
      //디스트로이되어 swiper가 없으면
      slide(); //6-1. 재실행
      console.log("웹");
    } else {
      //swiper에 내용이 차있어도
      swiper.update(); //6-2. 한번더 업데이트
    }
  }
});

/* tip.분기를 반대로 하거나 바꿔줄때는 조건문을 반대로 쓰면됨.*/

/******** 반응형 스와이퍼 사용방법 !! (사용전에 읽어보기) ********/
// 1 ~6 단계를 통해 반응형 swiper를 구현하는 흐름은 동일하나,
//  원하는 분기와 기획에 따라 5~6단계에서 조건문 순서를 바꾸거나, 재구성하여 사용하면 됨.
// 2단계에서 swiper실행문을 작성할때 기획요구사항과 디자인에 맞게 구성 (swiper공식문서 참조, 예: autoplay, pagination, navigation 등)
// 1단계에서 let으로 swiper변수를 선언하는 것이 중요함!!

// 참고
// => 분기에 따라 button,pagination등을 숨기거나 보여주는 방법은 CSS의 display:none, display:block으로 제어함.
