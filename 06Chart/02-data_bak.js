// 1. HTML에서 차트를 그릴 캔버스 요소를 선택 (보통 <canvas>)를 찾아서 변수에 저장
const barChart = document.querySelector("#chart");

// 2. 차트에 표시할 데이터 구조 정의
const barChartData = {
  // X축에 표시될 레이블들의 배열
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],

  // 실제 그래프에 표시될 데이터셋들의 배열
  datasets: [
    {
      label: "그래프 제목1",
      data: [12, 19, 3, 5, 2, 3],
    },
    {
      label: "그래프 제목2",
      data: [50, 10, 20, 8, 10, 16],
    },
  ],
};

// 3. Chart.js를 사용하여 새로운 차트 생성
new Chart(barChart, {
  type: "bar",
  data: barChartData, // 4. 위에서 정의한 데이터 객체 사용
  options: {
    animation: false,
  },
});
