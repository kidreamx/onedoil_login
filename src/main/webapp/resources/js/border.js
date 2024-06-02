let boardsStr = localStorage.getItem("boards");
// localStorage가 비어있으면 빈 배열 저장
if (boardsStr === null) {
  const listStr = JSON.stringify([]);
  localStorage.setItem("boards", listStr);
  boardsStr = listStr;
}

const boardsObj = JSON.parse(boardsStr);
// html 형식에 맞게 저장하는 코드
const template = (index, objValue) => {
  return `
  <tr>
  <td>${index + 1}</td>
  <td><a href="./view.html?index=${objValue.index}">${objValue.subject}</a></td>
  <td>${objValue.writer}</td>
  <td>${objValue.date}</td>
  <td>${objValue.views}</td>
  </tr>
  `;
}; // ? 쿼리스트링 url 부분 뒤에 매개변수 장착

const tbody = document.querySelector("tbody");

// tbody 부분에 html 삽입
for (let i = 0; i < boardsObj.length; i++) {
  tbody.innerHTML += template(i, boardsObj[i]);
}