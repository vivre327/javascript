/* -------------------------------------------------------------------------- */
/*                                  기본 예제                                    */
/* -------------------------------------------------------------------------- */
// 1. 캔버스 요소 선택
// const barChart = document.querySelector("#chart");

// 2. 차트 데이터 구조 정의
// const barChartData = {
//   // X축 레이블 정의
//   labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],

//   // 데이터셋 배열 정의
//   datasets: [
//     {
//       label: "그래프 제목1", // 첫 번째 데이터셋
//       data: [12, 19, 3, 5, 2, 3],
//     },
//     {
//       label: "그래프 제목2", // 두 번째 데이터셋
//       data: [50, 10, 20, 8, 10, 16],
//     },
//   ],
// };

// 3. Chart.js 인스턴스 생성
// new Chart(barChart, {
//   type: "bar",
//   data: barChartData,
//   options: {
//     animation: false,
//   },
// });

/* -------------------------------------------------------------------------- */
/*                              외부 데이터 활용                                  */
/* -------------------------------------------------------------------------- */
// import { barChartData } from "./02-importdata.js";

// // 1. 캔버스 요소 선택
// const barChart = document.querySelector("#chart");

// // 2. Chart.js 인스턴스 생성 및 외부 데이터 적용
// new Chart(barChart, {
//   type: "bar",
//   data: barChartData,
//   options: {
//     animation: false,
//   },
// });

/* -------------------------------------------------------------------------- */
/*                              함수형 차트 생성                                  */
/* -------------------------------------------------------------------------- */
// 참고: 여러 차트를 생성할 때는 02-createchart.js의 함수형 구조 활용
import { barChartData } from "./02-importdata.js";
import { createchart } from "./02-createchart.js";
// 1. 데이터와 함수파일 import하기
// 2. 데이터를 인수로 받아 함수 실행하기
createchart("#chart", barChartData);
