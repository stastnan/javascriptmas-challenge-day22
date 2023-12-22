let people = JSON.parse(localStorage.getItem("list")) ?? [];
const image = document.getElementById("image");

const inputFieldEl = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-button");
const peopleListEl = document.getElementById("people-list");
renderList(people);
addButtonEl.addEventListener("click", function () {
  let inputValue = inputFieldEl.value;

  if (inputValue) {
    people.push(inputValue);
    localStorage.setItem("list", JSON.stringify(people));
    clearInputFieldEl();

    renderList(people);
  }
});

function renderList(array) {
  clearPeopleListEl();

  for (let i = 0; i < array.length; i++) {
    let currentPerson = array[i];

    appendPersonToPeopleListEl(currentPerson);
  }
}

function clearPeopleListEl() {
  peopleListEl.innerHTML = "";
}

function clearInputFieldEl() {
  inputFieldEl.value = "";
}

function appendPersonToPeopleListEl(person) {
  let newEl = document.createElement("li");

  newEl.textContent = person;

  newEl.addEventListener("dblclick", function () {
    let index = people.indexOf(person);

    people.splice(index, 1);
    localStorage.setItem("list", JSON.stringify(people));

    showGif();
    renderList(people);

    setTimeout(function () {
      showGitfImg();
    }, 3000);
  });

  peopleListEl.append(newEl);
}

function showGif() {
  GIF_URL = "https://i.gifer.com/11cn.gif";
  image.setAttribute("src", GIF_URL);
}

function showGitfImg() {
  image.setAttribute("src", "icon.png");
}
