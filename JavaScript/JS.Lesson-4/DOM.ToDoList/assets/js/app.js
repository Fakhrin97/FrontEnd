var btn = document.querySelector("#btn");
var add = document.querySelector("#add");

function removeEl(ev) {
  ev.target.parentElement.remove();
}

function doneEl(ev) {
  if (ev.target.previousElementSibling.style.textDecoration == "line-through") {
    ev.target.previousElementSibling.style.textDecoration = "none";
    ev.target.style.backgroundColor = "red";
  } else {
    ev.target.previousElementSibling.style.textDecoration = "line-through";
    ev.target.style.backgroundColor = "green";
  }
}



btn.onclick = () => {
  var text = document.querySelector("#text").value;

  var upperCase = text.substring(0, 1).toUpperCase() + text.substring(1);

  var list = "";
  list = ` <li class="li-1">

                <span>${upperCase}</span>
                <button id="btn_done" onclick="doneEl(event)">Done</button>
                <button id="btn_delete" onclick="removeEl(event)">Delete</button>
  
           </li>`;

  add.innerHTML += list;

  //---inputu sifrlamaq ucun------
  document.querySelector("#text").value = "";
};
