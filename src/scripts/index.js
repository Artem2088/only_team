import titles from "../vendor/constants.js";
const container = document.getElementById("lists");

const createEl = (id, tag) => {
  const el = document.createElement(tag);
  el.id = id;
  return el;
};

const createButton = () => {
  titles.forEach((title, index) => {
    const li = createEl(index, "li");
    const eachButton = createEl(index, "button");
    const img = document.createElement("img");
    img.src = "src/public/icons/plus.svg";
    container.appendChild(li);
    li.appendChild(eachButton);
    eachButton.appendChild(img);
    eachButton.setAttribute = ("title", title);
    eachButton.type = "button";
    eachButton.classList.add("button-initial");
  });
};

const createPositionBtn = () => {
  const arrButton = document.querySelectorAll("button");
  for (let key of arrButton) {
    if (key.setAttribute == "Вокзал") {
      getPosition(key, 34, 51, "var(--green)");
    }
    if (key.setAttribute == "Музей") {
      getPosition(key, 61, 58, "var(--green)");
    }
    if (key.setAttribute == "Торговый центр") {
      getPosition(key, 71, 33, "var(--green)");
    }
    if (key.setAttribute == "Гостиница №2") {
      getPosition(key, 59, 21, "var(--green)");
    }
    if (key.setAttribute == "Мост") {
      getPosition(key, 22, 30);
    }
    if (key.setAttribute == "Жилой дом") {
      getPosition(key, 28, 70);
    }
    if (key.setAttribute == "Круговая лестница") {
      getPosition(key, 57, 37);
    }
    if (key.setAttribute == "Дерекция") {
      getPosition(key, 78, 51);
    }
    if (key.setAttribute == "Парковка") {
      getPosition(key, 89, 30);
    }
    if (key.setAttribute == "Гостиница") {
      getPosition(key, 72, 74);
    }
  }
};

const getPosition = (key, left, bottom, color) => {
  key.style.left = left + "%";
  key.style.bottom = bottom + "%";
  key.style.backgroundColor = color;
};

const handleChange = (click) => {
  const title = click.srcElement.setAttribute;
  const targetButton = click.target;
  if (targetButton.localName == "button" || "img" || "span") {
    const span = document.createElement("span");
    click.target.nodeName == "BUTTON"
      ? targetButton.classList.toggle("activ")
      : "";
    if (targetButton.classList == "button-initial activ") {
      targetButton.append(span);
      span.className = "span-button";
      span.innerHTML = title;
      targetButton.children.item(0).src = "src/public/icons/minus.svg";
    } else {
      for (let key of targetButton.children) {
        if (key == targetButton.children.item(1)) {
          targetButton.children.item(1).remove();
          targetButton.children.item(0).src = "src/public/icons/plus.svg";
        }
      }
    }
  }
  return;
};

const clickButton = () => {
  container.addEventListener("click", handleChange);
};

clickButton();
createButton();
createPositionBtn();
