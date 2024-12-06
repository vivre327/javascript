import { el, els } from "../helper.js";

export const handleAlarm = (arry) => {
  const badge = el(".profile__alram");

  els(".alram__del").forEach((button) => {
    button.addEventListener("click", (e) => {
      const parentList = e.target.closest("li");
      const alarmDate = parentList.querySelector(".alram__date").textContent;
      // const alarmWriter = parentList.querySelector(".alram__writer").textContent;
      // const alarmContent = parentList.querySelector(".alram__content").textContent;

      // html에서 알람 삭제
      parentList.remove();

      // 1. 배열 filter
      let newArry = arry.filter((item) => {
        // !== 날짜(?)가 일치하지 않은 나머지 걸러냄
        return item.date !== alarmDate;
      });
      // console.log(newArry);

      // 2. badge에 랜더링
      let updateLength = newArry.length;
      // console.log(`업데이트된 알람갯수는? ${updateLength}개입니다`);
      badge.textContent = updateLength;

      // 3. 필터링된 배열newArry을 원래배열에 다시 담기 -> 1부터 반복
      arry = newArry;
    });
  });
  // console.log(arry);
};
