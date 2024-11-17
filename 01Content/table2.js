/** 게시판 가상의 데이터 */
const postData = [
  {
    id: "중요공지",
    subject: "[공지] 위치정보이용약관 변경에 따른 사전공지",
    date: "2019.01.02",
    type: "notice",
  },
  {
    id: 1,
    subject: "SK플래닛 홈페이지가 새롭게 단장하였습니다.",
    date: "2019.01.02",
    type: "general",
  },
  {
    id: 2,
    subject: "경품 이벤트 당첨자 안내",
    date: "2019.01.03",
    type: "general",
  },
];

/** 게시판 데이터 표출 */
const postList = document.querySelector(".board tbody");

postList.innerHTML = postData // testData가 아닌 postData를 사용
  .map(
    (item) => `
    <tr>
      <td>${item.id}</td>
      <td>${item.subject}</td>
      <td>${item.date}</td>
    </tr>
  `
  )
  .join("");

/** 게시물 수 집계 */
const updateGeneralPostCount = () => {
  const countView = document.querySelector(".total-count");
  let generalCount = 0;
  let noticeCount = 0;

  // 게시물 유형 확인
  postData.forEach((post, idx) => {
    console.log(`${idx}번째 게시물 타입 체크중`);
    if (post.type === "general") {
      console.log(`${idx}번 게시물은 일반 게시물 입니다!`);
      generalCount++;
      console.log(`일반 게시물은 총 ${generalCount}개 입니다`);
    } else {
      console.log(`${idx}번 게시물은 공지사항입니다!`);
      noticeCount++;
      console.log(`공지사항 게시물은 총 ${noticeCount}개 입니다`);
    }
  });

  // 집계한 갯수 표시
  countView.textContent = `일반 게시물: 총 ${generalCount}개 / 중요공지: 총 ${noticeCount}개`;
  // countView.textContent = `게시물 총 ${generalCount}개`;
};

updateGeneralPostCount();
