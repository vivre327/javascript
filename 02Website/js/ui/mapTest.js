export const mapTest = () => {
  // 테스트용 배열
  const testArray = ["사과", "바나나", "딸기"];

  // map메소드: 원본 배열은 변경되지 않고 새로운 배열을 만듦
  const alarmItems = testArray.map((item, idx) => {
    console.log(`--- ${idx + 1}번째 map 시작~!!! ---`);
    console.log("현재 처리중인 item:", item);

    // A. item을 템플릿 리터럴로 가공하여 새로운 변수에 담아서 리턴
    // const returnValue = `${item}는 진짜 유명한 맛있는 과일임`;
    // console.log("반환하는 값:", returnValue);
    // return returnValue;

    // B. item을 그대로 리턴(원본 배열의 요소를 그대로 새 배열로)
    return item;
  });

  // alarmTest밖에서 확인하면, 배열임을 알 수 있다.
  console.log("map 실행 결과:", alarmItems);
};
