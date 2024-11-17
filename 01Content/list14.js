/** 선택된 상품을 타이틀로 보여주는 로직 */
const changeTitle = () => {
  const productItems = document.querySelectorAll(".list-type14 li button");
  const titleText = document.querySelector(".message h2");
  const titleImgSrc = document.querySelector(".message img");

  productItems.forEach((item) => {
    let name = item.textContent;
    let imgSrc = item.querySelector("img").getAttribute("src");
    // console.log(name);
    // console.log(imgSrc);

    item.addEventListener("click", () => {
      titleText.textContent = name;
      titleImgSrc.setAttribute("src", imgSrc);
    });
  });
};

changeTitle();
