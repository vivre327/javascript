/** 선택된 상품을 타이틀로 보여주는 로직 */
const changeTitle = () => {
  const productItems = document.querySelectorAll(".list-type14 li button");
  const titleText = document.querySelector(".message h2");
  const titleImgSrc = document.querySelector(".message img");

  // 선택된 아이템을 타이틀에 출력하는 함수
  const thisItem = (name, imgSrc) => {
    titleText.textContent = name;
    titleImgSrc.setAttribute("src", imgSrc);
  };

  // 리스트 아이템 제어
  productItems.forEach((item) => {
    let name = item.textContent;
    let imgSrc = item.querySelector("img").getAttribute("src");
    // console.log(name);
    // console.log(imgSrc);

    item.addEventListener("click", () => {
      thisItem(name, imgSrc); //타이틀 영역 업데이트
    });
  });
};

changeTitle();
