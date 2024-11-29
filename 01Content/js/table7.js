// - 게시판 접힘펼침 기능만들기
//     - 한개 펼처지면 나머지는 접혀야 한다.

// 1. 사용자가 버튼을 클릭한다 (클릭이벤트 + forEach)
// 2-a. 모든 tr요소에 .active를 삭제 & display:none 처리한다. (classList & removeAttribute)
// 2-b. 추가 전에 모든 요소들을 찾아서 제거한다.
// 3. 클릭한 버튼 인덱스의 부모인 tr에 .active를 추가한다 (classList)
// 조상부모 selector.closest('div');
// 4. 클릭한 버튼 부모의 바로다음형제 tr에 display:table-row를 추가한다
// 특정 요소 포함 확인?

const toggleFaq = () => {
  const table = document.querySelector(".table");
  const tableBody = table.querySelector("tbody");
  const tableRows = tableBody.querySelectorAll("tr");
  const buttons = tableBody.querySelectorAll("button");

  buttons.forEach((button) => {
    // console.log(parentList);

    button.addEventListener("click", (e) => {
      // 1. 전체 row순회하여 active를 삭제 & style제거
      tableRows.forEach((row) => {
        row.classList.remove("active");
        row.removeAttribute("style");
      });

      // 2. 클릭한 버튼의 부모 tr에 active추가 & 부모tr 다음형제에 table-row속성 추가
      const thisButton = e.target;
      const thisRow = thisButton.closest("tr");
      const thisContent = thisRow.nextElementSibling;
      // console.log(thisRow);
      thisRow.classList.add("active");
      thisContent.style.display = "table-row";
    });
  });
  // 열린 아이템이 닫히는 기능 구현해야함
};

toggleFaq();
