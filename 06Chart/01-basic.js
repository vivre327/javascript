// 1. 제어할 html요소 barChart 선택
const barChart = document.querySelector("#chart");

// 2. barChart 요소 불러옴 (변수로 불러오지 않고 #chart로 직접 불러오면 오류남)
new Chart(barChart, {
  // 객체 (key:value)
  // 3. type이라는 key는 그래프형태를 지정한다.
  type: "bar",
  // 4. data라는 key에는 객체로 이루어진 data가 들어있다.
  data: {
    // labels 배열 순서와 datasets의 data 배열 순서는 일치해야함 ("Red":12)
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        // datasets의 label은 범례이다.
        label: "그래프 제목1",
        data: [12, 19, 3, 5, 2, 3],
      },
      {
        label: "그래프 제목2",
        data: [50, 10, 20, 8, 10, 16],
      },
    ],
  },
  options: {
    animation: false,
  },
});
