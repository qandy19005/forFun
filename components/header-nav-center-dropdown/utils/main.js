class MyElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    const div = document.createElement("div");
    div.textContent = "Hello, World!";
    this.shadowRoot.appendChild(div);
    const button = document.createElement("button");
    button.textContent = "click me";
    button.addEventListener("click", () => {
      console.log("Button clicked!");
      button.setAttribute("isGood", "ff");
    });
    this.shadowRoot.appendChild(button);
  }

  static get observedAttributes() {
    return ["hide", "isGood"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "hide") {
      if (newValue === "true") {
        this.style.display = "none";
      } else {
        this.style.display = null;
      }
    }
    if (name === "isGood") {
      if (newValue === "true") {
        console.log(123);
      } else {
        console.log(77);
      }
    }
  }
}

// const myElement = new MyElement();

// myElement.setAttribute("isGood", "ff");

customElements.define('my-header', MyElement);