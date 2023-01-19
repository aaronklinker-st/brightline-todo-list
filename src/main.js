import { App } from "./components/App";
import { onRender, render } from './utils/ui';

const root = document.getElementById("app");

const todos = [];
let nextId = 0;
const getNextId = () => nextId++;

onRender(() => {
  root.innerHTML = App(todos)

  const form = document.getElementById("form");
  const input = document.getElementById("input");
  form.onsubmit = (event) => {
    event.preventDefault();
    todos.unshift({
      id: getNextId(),
      text: input.value,
    });
    render();
  }

  const deleteBtns = document.querySelectorAll("#delete");
  deleteBtns.forEach((deleteBtn, index) => {
    deleteBtn.onclick = () => {
      todos.splice(index, 1);
      render();
    }
  })
});
render();
