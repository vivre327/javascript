// 동기
// console.log('첫번째 출력');
// console.log('두번째 출력');
// console.log('세번째 출력');

// 비동기
// setTimeout(()=>{
// 	console.log('첫번째 출력');
// },1000);
// console.log('두번째 출력');
// console.log('세번째 출력');

// 비동기
// const button = document.querySelector("button");
// button.addEventListener("click", () => {
//   console.log("첫번째 출력");
// });
// console.log("두번째 출력");

// koreanjson이라는 무료 API를 사용하여 데이터를 가져옴
// posts라는 게시물의 1번 데이터를 가져옴
// fetch를 쓰면 then으로 연결해서 사용
// .json은 제이슨파일을 분석해서 객체 또는 배열로 바꿔줌

// 1. 네트웍상의 실제 주소를 가져옴
// 2. response는 매개변수 작명
// 3. response.json()은 객체로 변환
// 4. .then으로 받아서 연결
fetch("https://koreanjson.com/posts/1")
  .then((response) => response.json())
  .then((response) => console.log(response));

console.log("첫번째 출력");
console.log("두번째 출력");
console.log("세번째 출력");

// 비동기 통신 하는 이유 -> 네트워크상태에 따라 시간이 걸릴 수 있기 때문
// 내의지가 아닌 주변 환경에 의해 정해진 타이밍에 실행되는 것을 비동기라고 함
