export const barChartData = {
  // X축에 표시될 레이블들의 배열
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],

  // 실제 그래프에 표시될 데이터셋들의 배열
  datasets: [
    {
      label: "서울",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: "orange",
      borderWidth: 5,
      borderColor: "tomato",
    },
    {
      label: "부산",
      data: [100, 20, 20, 8, 10, 16],
      backgroundColor: "violet",
      borderWidth: 2,
      borderColor: "purple",
    },
  ],
};
