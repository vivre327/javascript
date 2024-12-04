const company = () => {
  console.log("회사정보입니다.");
};

export const address = () => {
  console.log("주소정보입니다.");
};

// default로 선언된 함수는 한 파일에서 한 개만 존재할 수 있음
// 파일 가장 마지막에 아래와 같이 선언하면 됨
export default company;
