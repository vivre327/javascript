/**
 * Chart.js를 사용하여 막대 그래프를 생성하는 함수
 * @param {string} selector - 차트를 렌더링할 DOM 요소의 선택자
 * @param {Object} isData - 차트에 표시할 데이터 객체
 * @returns {void} - 선택자에 해당하는 요소가 없으면 함수 종료
 */
export const createchart = (selector, isData) => {
  // DOM에서 차트를 렌더링할 요소 선택
  const barChart = document.querySelector(selector);

  // 선택자에 해당하는 요소가 없으면 함수 종료
  if (!barChart) {
    return;
  }

  // Chart.js 인스턴스 생성
  new Chart(barChart, {
    type: "bar",
    data: isData,
    options: {
      animation: false,
    },
  });
};
