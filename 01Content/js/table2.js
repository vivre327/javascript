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

postList.innerHTML = postData
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

// 게시물 유형 확인하고 집계하는 함수
const countPostsByType = (dataName) => {
  let data = {};
  let generalCount = 0;
  let noticeCount = 0;
  dataName.forEach((post, idx) => {
    // console.log(`${idx}번째 게시물 타입 체크중`);
    if (post.type === "general") {
      // console.log(`${idx}번 게시물은 일반 게시물 입니다!`);
      generalCount++;
      // console.log(`일반 게시물은 총 ${generalCount}개 입니다`);
    } else {
      // console.log(`${idx}번 게시물은 공지사항입니다!`);
      noticeCount++;
      // console.log(`공지사항 게시물은 총 ${noticeCount}개 입니다`);
    }
  });
  // 리턴값: 빈객체data를 만들고 속성count1,count2 추가하여 계산된 값을 담는다
  data.count1 = generalCount;
  data.count2 = noticeCount;
  return data;
};

// 화면에 표시하는 함수
const renderPostCount = (viewEl, countTypeA, countTypeB) => {
  viewEl.textContent = `일반 게시물: 총 ${countTypeA}개 / 중요공지: 총 ${countTypeB}개`;
};

// 실행 함수
const updatePostCount = () => {
  const countView = document.querySelector(".total-count");

  // result에 리턴값 객체를 받는다
  const result = countPostsByType(postData);
  // 객체안의 각 속성을 변수로 꺼낸다
  const generalResult = result.count1;
  const noticeResult = result.count2;

  // 화면에 표시하는 함수에 인자로 전달한다
  renderPostCount(countView, generalResult, noticeResult);
};

updatePostCount();
