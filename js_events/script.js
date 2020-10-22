document.addEventListener("DOMContentLoaded", function () {
  const clickDiv = document.querySelector(".click-example");

  document.addEventListener("keyup", function () {
    console.log(event);
    if (event.keyCode > 64 && event.keyCode < 91) {
      document.querySelector(
        ".key-event"
      ).textContent = `You pressed: ${event.key}`;
    }
  });

  clickDiv.addEventListener("click", () => {
    const target = event.target;
    if (target.tagName === "P") {
      changeColor(target);
      renderTagName(target.tagName);
      renderText(target.innerText);
      renderCords(event.clientX);
    }
  });

  function renderTagName(tag) {
    const tagLi = document.querySelector(".event-tag");
    tagLi.innerText = `Tag: ${tag}`;
  }

  function renderText(text) {
    const textLi = document.querySelector(".event-text");
    textLi.innerText = `Text: ${text}`;
  }

  function renderCords(cords) {
    const cordsLi = document.querySelector(".event-coordinates");
    cordsLi.innerText = `Cords: ${cords}`;
  }

  function changeColor(target) {
    target.style.backgroundColor = generateRandomColor();
  }

  document
    .querySelector(".list-delegation")
    .addEventListener("click", renderListText);

  function renderListText() {
    console.log(event);
    if (event.target !== event.currentTarget) {
      const pTag = document.querySelector(".animal-text");
      pTag.innerText = `You clicked: ${event.target.innerText}`;
    }
  }

  const adder = document.querySelector(".add-cube");
  adder.addEventListener("click", renderCube);
  function renderCube() {
    const cube = document.createElement("div");
    cube.classList.add("cube");
    cube.addEventListener("mouseenter", function () {
      event.target.classList.add("spinner");
      changeColor(event.target);
    });
    cube.addEventListener("mouseout", function () {
      event.target.classList.remove("spinner");
    });
    document.querySelector(".cube-container").append(cube);
  }

  const buttons = document.querySelectorAll(".color-btn");
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      this.style.backgroundColor = this.innerText;
    });
  });

  document.querySelector(".level-1").addEventListener("click", function () {
    console.log("level 1");
  });
  document.querySelector(".level-2").addEventListener("click", function () {
    console.log("level 2");
  });
  document.querySelector(".level-3").addEventListener("click", function () {
    event.stopPropagation();
    console.log("level 3");
  });

  document
    .querySelector(".cube-container")
    .addEventListener("click", function () {
      if (event.target !== event.currentTarget) {
        console.log("you clicked a child cube!");
      }
    });

  const form = document.querySelector("form");
  form.addEventListener("submit", function () {
    event.preventDefault();
    const input = document.getElementById("animal-input");
    if (input.value !== "") {
      const li = document.createElement("li");
      li.innerText = input.value;
      document.querySelector(".animal-list").append(li);
      input.value = "";
    }
  });

  const animalList = document.querySelector(".animal-list");
  animalList.addEventListener("click", function () {
    if (event.target !== event.currentTarget) {
      event.target.remove();
    }
  });
});

function generateRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}
