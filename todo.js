const todoList = JSON.parse(localStorage.getItem("todoList")) || [
  { Text: "make dinner", date: "2022-12-22" },
  { Text: "wash dishes", date: "2021-12-21" },
];

renderTodoList();

function renderTodoList() {
  let todoListHTML = "";
  /* for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i]; */
todoList.forEach((todo,i)=>{
  const html = `<p><li>${todo.Text} ${todo.date} <button onclick='upDate(${i});
    '>Delete</button></li></p>`;
    todoListHTML += html;
});
  document.querySelector("div").innerHTML = todoListHTML;
}

function keyDown(event) {
  if (event.key === "Enter") {
    pushTodo();
  }
}
function upDate(i) {
  todoList.splice(i, 1);
  renderTodoList();
  localStorage.setItem("todoList", JSON.stringify(todoList));
}

function pushTodo() {
  const inputText = document.querySelector(".js-text-input");
  const inputDate = document.querySelector(".js-date-input");
  const date = inputDate.value;
  const Text = inputText.value;
  todoList.push({ Text, date });
  inputDate.value = "";
  inputText.value = "";
  renderTodoList();
  localStorage.setItem("todoList", JSON.stringify(todoList));
}
