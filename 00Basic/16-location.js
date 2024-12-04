const url = window.location;
const prev = document.querySelector(".assign");
const prev2 = document.querySelector(".replace");
const reload = document.querySelector(".reload");

const links = document.querySelectorAll("a");

/* -------------------------------------------------------------------------- */
/*                                   현재페이지정보                            */
/* -------------------------------------------------------------------------- */
links[0].addEventListener("click", () => {
  console.log(window.location);
});

/* -------------------------------------------------------------------------- */
/*                                 히스토리추가후 이동                          */
/* -------------------------------------------------------------------------- */
prev.addEventListener("click", (event) => {
  event.preventDefault();
  // console.log(location.pathname);
  // 1. assign 방식 : window.location.assign("이동할 페이지명")
  window.location.assign("16-location-next.html");
  // 2. location.href 방식 : ="이동할 페이지명"
  // ****두 방식 같은 개념. 둘다 history가 추가되어 뒤로가기가 가능하다!!
  // location.href = "#ddd";
});

/* -------------------------------------------------------------------------- */
/*                                히스토리 제거 후 이동                         */
/* -------------------------------------------------------------------------- */
prev2.addEventListener("click", (event) => {
  event.preventDefault();
  url.replace("16-location-next.html");
});

/* -------------------------------------------------------------------------- */
/*                                   강력새로고침                              */
/* -------------------------------------------------------------------------- */
reload.addEventListener("click", () => {
  // 1. 일반 새로고침
  // location.reload(); F5
  // 2. 강력 새로고침 : 쿠키,캐시데이터 모두 삭제된다. (ctrl+shift+F5)
  location.reload(true);
});

/* -------------------------------------------------------------------------- */
/*                                   파라미터                              */
/* -------------------------------------------------------------------------- */
// [예시] 네이버 블로그 URL
// https://section.blog.naver.com/BlogHome.naver?directoryNo=0&currentPage=1&groupId=0

// 파라미터: ?물음표(시작) key=value 한 쌍과 &구분자의 반복
// ?directoryNo=0&currentPage=1&groupId=0

// 객체로 표현해보면 아래와 같다
// const obj = {
//   directoryNo: 0,
//   currentPage: 1,
//   groupId: 0,
// };

// **Why, 파라미터를 넘기는 이유?
// 위와 같은 key value 값을 이전페이지에서 전달해주면
// 다음페이지가 받아서 처리할 수 있기 때문.
