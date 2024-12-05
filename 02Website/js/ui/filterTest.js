export const filterTest = () => {
  let 조건 = "빨강사탕";
  let array = ["빨강사탕", "파란사탕", "노란사탕"];

  // 빨강사탕이 아닌것만 걸러내서 array에 새로운 배열을 담음
  array = array.filter((e) => e !== 조건);

  console.log(array);
};
