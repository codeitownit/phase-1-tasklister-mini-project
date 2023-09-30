document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("form");
  form.addEventListener("submit",(e) => {
  e.preventDefault();
  buildToDo(e.target.new_task.value);
  form.reset()
    });
});

function buildToDo(todo){
  const li = document.createElement("li");
  const btn = document.createElement("button");
  btn.addEventListener("click", handleDelete)
  li.textContent = `${todo} `;
  btn.textContent = "x";
  document.querySelector("#tasks").appendChild(li);
  li.appendChild(btn);
  
}
function handleDelete(e){
  e.target.parentNode.remove();
}