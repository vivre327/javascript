const renderButtons = () => {
  const ul = document.querySelector(".service-list");

  // 객체 배열 생성
  const arry = [
    {
      title: "선물하기",
      description: `편의점·마트·와인<br />
              상품 선물`,
    },
    {
      title: "매장 찾기",
      description: "근처 매장 찾기",
    },
    {
      title: "택배 택배",
      description: "택배 접수 및 조회",
    },
    {
      title: "이벤트",
      description: "혜택이 와르르",
    },
  ];

  // 데이터 바인딩
  arry.forEach((item, idx) => {
    console.log(item, idx);

    const li = document.createElement("li");
    ul.append(li);
    li.setAttribute("class", `ico${idx + 1}`);
    li.innerHTML = `
      <a href="">
        <strong class="title">${item.title ?? "준비중"}</strong>
        <p class="description">${item.description ?? ""}</p>
      </a>
    `;
  });
};

renderButtons();
