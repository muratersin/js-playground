import { findDeepElement } from "../../helpers/dom";
import EventQueue from "./EventQueue";

function generateNestedElements(options = {}) {
  const {defaultEl = "div", count = 8, capturing = false, title } = options;
  const eventQueue = new EventQueue();
  let arr = Array(count).fill(null);

  arr = arr.map(() => {
    const el = document.createElement(defaultEl);

    el.className = "box";
    el.addEventListener("click", eventQueue.add.bind(eventQueue), capturing);

    return el;
  });

  const elements = arr.reduce((acc, curr) => {
    const parent = acc || curr;

    if (acc) {
      const deepEl = findDeepElement(parent);
      deepEl.appendChild(curr);
    } else if (title) {
      const header = document.createElement("h3");
      header.innerText = title;
      parent.appendChild(header);
    }

    return parent;
  }, null);

  return elements;
}

export default function mount() {
  const app = document.getElementById("app");
  app.appendChild(generateNestedElements({ title: "Event Bubling" }));
  app.appendChild(
    generateNestedElements({ title: "Event Capturing", capturing: true })
  );
}
