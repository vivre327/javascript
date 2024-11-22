/* -------------------------------------------------------------------------- */
/*                                   함수 재사용                               */
/* -------------------------------------------------------------------------- */
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

/* -------------------------------------------------------------------------- */
/*                                  forEach 사용                               */
/* -------------------------------------------------------------------------- */
const checkLength = () => {
  const textInputItems = document.querySelectorAll(".input-text");

  textInputItems.forEach((item) => {
    const log = item.nextElementSibling;
    const maxLength = item.getAttribute("maxlength");

    item.addEventListener("input", (e) => {
      const count = e.target.value.length;
      log.textContent = `${count}/${maxLength}`;
    });
  });
};

checkLength();
