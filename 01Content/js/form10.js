/** 01.개별 입력 필드의 글자 수 업데이트 */
// const titleInput = document.getElementById("txt2_1");
// const titleLog = document.querySelector(".title-count");
// const contentInput = document.getElementById("txt2_2");
// const contentLog = document.querySelector(".content-count");

// const updateCount = (input, log) => {
//   input.addEventListener("input", (e) => {
//     // console.log(e.target.value.length);
//     let count = e.target.value.length;
//     log.textContent = `${count}/30`;
//   });
// };

// updateCount(titleInput, titleLog);

/** 02.클래스명으로 선택한 모든 입력 필드의 글자 수 업데이트 */
const checkLength = () => {
  const textInputItems = document.querySelectorAll(".input-text");

  textInputItems.forEach((item) => {
    const id = item.getAttribute("id");
    const log = document.querySelector(`[data-count-id="${id}"]`);
    const maxLength = item.getAttribute("maxlength");

    item.addEventListener("input", (e) => {
      const value = e.target.value;
      let count = value.length;

      // 한글은 2byte 영어는 1byte 로 표현되므로 maxlength초과하여 입력됨. 제한하는 코드
      if (count > maxLength) {
        item.value = value.slice(0, maxLength);
        count = item.value.length;
        // console.log("초과됨!");
      }

      log.textContent = `${count}/${maxLength}`;
      // console.log(count);
    });
  });
};

checkLength();
