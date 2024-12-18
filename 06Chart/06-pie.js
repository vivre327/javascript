import { data } from "./06-data.js";

const pie = document.querySelector(".pie");

new Chart(pie, {
  type: "doughnut",
  // type: "pie",
  data: data,
  options: {
    // circumference: Math.PI,
    circumference: 180,
    rotation: -90,
    // spacing: 100, 여백
    // offset: 100, // 중심에서의 거리
    // radius: "100%", //캔버스의 크기에 따른 채우기
    hoverBackgroundColor: ["lightgreen", "green", "lightyellow"],
    // hoverBorderWidth: [],
    // hoverBorderColor: [],
  },
});
