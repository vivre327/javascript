// 무료 open api를 이용한 영화 검색 (전용키는 선생님key)
// 형식 : ?키=밸류&키=밸류&키=밸류
// ombd서버가 검색후 응답해준 데이터는 json형식으로 응답해준다.
const searchResult = (keyword) => {
  // searchResult함수의 결과값을 내보내기위한 return
  return fetch(`https://omdbapi.com/?apikey=ef297970&s=${keyword}`)
    .then((response) => response.json())
    .then((response) => {
      // 1. search데이터를 조회한결과값 return
      return response.Search;
    });
};

export const movieSearch = () => {
  document.querySelector(".container button").addEventListener("click", () => {
    const keyword = document.querySelector(".container input").value;
    // console.log(keyword);

    searchResult(keyword).then((data) => {
      // console.log(data);
      const movieItem = data.map((item) => {
        return /*html*/ `
        <li>
          <img src=${item.Poster}/>
          <strong style="display:block">${item.Title}</strong>
          <div>개봉일 : ${item.Year}</div>
        </li>
        `;
      });

      document.querySelector(".movie-list").innerHTML = movieItem.join("");
    });
  });
};
