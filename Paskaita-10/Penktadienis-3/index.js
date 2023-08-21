const todos = [
  { text: "Buy groceries", completed: false },
  { text: "Finish homework", completed: true },
  { text: "Go for a run", completed: false },
  { text: "Call a friend", completed: false },
  { text: "Read a book", completed: true },
];
const ul = document.querySelector("ul");
const ulFinished = document.querySelector("#finished");
const newToDoInput = document.querySelector("#toDoInput");
const searchInput = document.querySelector("#search");
const addButton = document.querySelector("button");

searchInput.addEventListener("input", (e) => {
  const value = e.target.value;

  const filteredTodos = [];

  for (let i = 0; i < todos.length; i++) {
    if (todos[i].text.toLowerCase().includes(value.toLowerCase())) {
      filteredTodos.push(todos[i]);
    }
  }
  generateToDos(filteredTodos);
});

addButton.addEventListener("click", () => {
  const inputValue = newToDoInput.value.trim();
  if (inputValue) {
    todos.push({
      text: inputValue,
      completed: false,
    });
    generateToDos(todos);
    newToDoInput.value = "";
  }
});

function generateToDos(todosToAdd) {
  ul.innerHTML = "";
  ulFinished.innerHTML = "";
  for (let i = 0; i < todosToAdd.length; i++) {
    const li = document.createElement("li");
    li.textContent = todosToAdd[i].text;
    if (todosToAdd[i].completed) {
      li.classList.add("finished");
    }

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todosToAdd[i].completed;

    checkbox.addEventListener("change", () => {
      todos[i].completed = !todos[i].completed;
      generateToDos(todos);
    });
    li.append(checkbox);
    if (todosToAdd[i].completed) {
      ulFinished.append(li);
    } else {
      ul.append(li);
    }
  }
}

generateToDos(todos);
