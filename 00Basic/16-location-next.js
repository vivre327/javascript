// console.log(window.location);

// 1. window.location.search 콘솔로 조회한다
// 2. 결과: "?color=blue&size=20" (형:String)
// 3. URLSearchParams라는 메소드로 객체화 시켜줌
// 4. 결과 : {color: 'blue', size: '20'} (형: object)
const params = new URLSearchParams(window.location.search);

// 5. 재할당을 위한 obj빈객체 만들기
let obj = {};

// console.log(params);
// console.log(typeof params);

// 6. 객체화된 데이터 접근은 반드시!! forEach로!!
params.forEach((value, key) => {
  // console.log(value, key);
  obj[key] = value; //객체에 key를 추가하고 그에 대한 value을 설정한다.
  // 7. 결과: blue color , 20 size
});

// 객체 등록 방식 2type
// A. 점 표기법 : obj.key = value; -> 점 표기법은 동적생성이 아닌, 이미 존재하는 객체 접근할때
// B. 대괄호 표기법 : obj[key] = value; => 동적으로 생성된 obj에 객체 추가,접근 할때.

// for (const [key, value] of params) {
//   obj[key] = value;
// }

console.log(obj);

document.querySelector("h2").style.cssText = `
  color:${obj.color};
  font-size:${obj.size}px;
`;
