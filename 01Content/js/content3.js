// 객체데이터를 이용해서 데이터 바인딩
const renderItems = () => {
  const notice = document.querySelector(".notice");

  const arry = [
    {
      badge: "green",
      title: "우동마트",
      description: "배달 중인 상품 바로 보기",
    },
    {
      badge: "blue",
      title: "GS25",
      description: "픽업 대기 중인 상품 바로 보기",
    },
    {
      badge: "yellow",
      title: "와인25+",
      description: "수락 대기 중인 선물 바로 보기",
    },
  ];

  // console.log(arry[0].badge);
  // console.log(arry.length);
  // console.log(notice);

  arry.forEach((El) => {
    // console.log(El, idx);

    // 메모리에만 존재하는 a태그 생성
    const a = document.createElement("a");
    notice.append(a);

    // 배열 객체의 데이터를 집어넣는 함수
    a.innerHTML = `
      <span class="badge ${El.badge}">${El.title}</span>
      <div class="text wine">${El.description}</div>
    `;
  });
};

renderItems();

// 개별 데이터 접근 추가하기
// a태그 href 객체데이터로 바인딩 추가하기
