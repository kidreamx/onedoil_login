const boardsStr = localStorage.getItem("boards");
const boardsObj = JSON.parse(boardsStr);

const idx = location.search;
const index = idx.split("=")[1];
const board = boardsObj[index];

const beforeUrl = document.referrer;

const viewCount = (beforeUrl) => { //조회수 증가인데 왜 안되지..
  if (beforeUrl.split("/").pop() === "border.html") {
    board.views++;
    const viewCountStr = JSON.stringify(boardsObj);
    localStorage.setItem("boards", viewCountStr);
  }
};

viewCount(beforeUrl);

const viewFrm = document.querySelectorAll("#viewFrm > div");
// 데이터 위치에 맞게 주기
document.getElementById("subject").innerText += " " + board.subject;
document.getElementById("writer").innerText += " " + board.writer;
document.getElementById("date").innerText += " " + board.date;
document.getElementById("content").innerText += " " + board.content;


const modifyBtn = document.querySelector("#modify");

const modifyBtnHandler = (e) => {
  location ="./modify.html"+idx;
};

modifyBtn.addEventListener("click", modifyBtnHandler);

// 삭제 버튼
const deleteBtn = document.querySelector("#delete");

const deleteBtnHandler = (e) => {
  boardsObj.splice(index, 1);
  for (let i = 0; i < boardsObj.length; i++) {
    boardsObj[i].index = i;
  }

  const setBoardsStr = JSON.stringify(boardsObj);
  localStorage.setItem("boards", setBoardsStr);
  location.href = "border.html";
};

deleteBtn.addEventListener("click", deleteBtnHandler);