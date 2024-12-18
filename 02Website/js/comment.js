export const comment = () => {
  const comment = document.querySelector(".comment");

  // 유효성 검사
  if (!comment) {
    return;
  }

  // 이벤트 바인드
  const bindEvent = () => {
    comment.addEventListener("submit", (e) => {
      e.preventDefault();
      // console.log("전송");
      write();
      handleCount();
    });
  };

  // // 댓글내용유무확인
  // const checkValue = () => {

  // };

  // 댓글작성
  const write = () => {
    // 댓글 유효성 검사
    const textarea = comment.querySelector("textarea");
    const value = textarea.value;
    const list = comment.querySelector(".comment__list");
    if (value.trim() === "") {
      console.warn("댓글을 입력해주세요");
      return; //없으면 여기서 끝
    }

    // 댓글작성
    const li = document.createElement("li");
    // li.innerHTML = value;

    li.innerHTML = /*html*/ `
              <div class="avatar">
                <img src="../images/@avatar.png" alt="" />
              </div>
              <div class="comment__info">
                <div class="comment__name">Chwwwl8007</div>
                <div class="comment__date">${new Date()}</div>
                <div class="comment__btn">
                  <button type="button" class="delete">글삭제</button>
                </div>
                <div class="comment__content">
                  ${value}
                </div>
              </div>
    `;

    list.append(li);
    textarea.value = "";
    textarea.focus();

    li.querySelector(".delete").addEventListener("click", deleteComment);
  };

  // 통신을 보내서 삭제하고 리얼 데이터를 다시받아 갱신한다.. 실제개발에선 remove아님.
  // 댓글삭제
  const deleteComment = (e) => {
    e.target.closest("li").remove();
    handleCount(); //삭제할때 한번더 조회
  };
  // 댓글카운트
  const handleCount = () => {
    // li태그의 갯수를 계속 조회 (개발에선 : 리얼데이터,json을 조회)
    const lis = comment.querySelectorAll(".comment__list li").length;
    // console.log(count);
    updateComment(lis);
  };

  // 댓글 갯수업데이트
  const updateComment = (count) => {
    // 카운트된 갯수를 받아와서 랜더링만 해주는 함수
    const isCount = document.querySelector(".comment__count");
    isCount.textContent = `${count}개의 댓글이 있습니다.`;
  };
  bindEvent();
};
