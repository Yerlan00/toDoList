// document.querySelector("#input").addEventListener("keydown", (event) => {
//   if (event.key === "Enter") {
//     const input = document.querySelector("#input");
//     addItem(input.value);
//   }
// });

// document.querySelector("#button").addEventListener("click", () => {
//   const input = document.querySelector("#input");
//   addItem(input.value);
// });

// addItem = (input) => {
//   const item = document.createElement("div");
//   const div = document.createElement("div");
//   const checkIcon = document.createElement("i");
//   const trashIcon = document.createElement("i");
//   const text = document.createElement("p");

//   item.className = "item";
//   text.textContent = input;

//   checkIcon.className = "fa-solid fa-square-check";
//   checkIcon.style.color = "lightgray";
//   checkIcon.addEventListener("click", () => {
//     checkIcon.style.color = "limegreen";
//   });
//   div.appendChild(checkIcon);

//   trashIcon.className = "fa-solid fa-trash";
//   trashIcon.style.color = "darkgray";
//   trashIcon.addEventListener("click", () => {
//     item.remove();
//   });
//   div.appendChild(trashIcon);

//   item.appendChild(text);
//   item.appendChild(div);

//   document.querySelector(".to-do-items").appendChild(item);
//   document.querySelector("#input").value = "";
// };

// =====================================================================

const toDoItems = document.getElementsByClassName("to-do-items")[0];
const input = document.getElementById("input");

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addItem();
  }
});

function addItem() {
  // if (!input.value) {
  //   return;
  // }
  const divParent = document.createElement("div");
  const divChild = document.createElement("div");
  const checkIcon = document.createElement("i");
  const trashIcon = document.createElement("i");
  // const text = document.createElement("p");

  divParent.className = "item";
  divParent.innerHTML = "<div>" + input.value + "</div>";
  // text.textContent = input.value;

  checkIcon.className = "fa-solid fa-square-check";
  checkIcon.style.fontSize = "24px";
  checkIcon.style.color = "lightgray";

  checkIcon.addEventListener("click", function () {
    checkIcon.style.color = "limegreen";
  });

  divChild.appendChild(checkIcon);

  trashIcon.className = "fa-solid fa-trash";
  trashIcon.style.fontSize = "24px";
  trashIcon.style.color = "darkgray";

  trashIcon.addEventListener("click", function () {
    divParent.remove();
  });

  divChild.appendChild(trashIcon);
  // divParent.appendChild(text);
  divParent.appendChild(divChild);
  toDoItems.appendChild(divParent);

  input.value = "";
}
