const rootElement = document.querySelector("#root");

function createNewElement(elementObj, dom) {
  const newElement = document.createElement(elementObj.name);
  for (const prop in elementObj.props) {
    newElement.setAttribute(prop, elementObj.props[prop]);
  }
  newElement.innerHTML = elementObj.children;
  dom.appendChild(newElement);
}

const elementObj = {
  name: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Visit Google",
};

createNewElement(elementObj, rootElement);
  

const elementObj1 = {
    name: "p",
    props: {
    },
    children: "Hello everyone I am Akshay and this is my custom ReactJS.",
  };
  createNewElement(elementObj1, rootElement);