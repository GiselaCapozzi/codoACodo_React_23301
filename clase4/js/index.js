class Button {
  constructor(parentID, width, height, color, fondo, texto) {
    this.parentID = parentID;
    this.width = width;
    this.height = height;
    this.color = color;
    this.fondo = fondo;
    this.texto = texto;
  }

  render() {
    let myApp = document.getElementById(this.parentID);
    myApp.innerHTML = `<button style="width: ${this.width}; height: ${this.height}; color: ${this.color}; background-color: ${this.fondo}">${this.texto}</button>`
  }
};

const botonSaludar = new Button("app", '150px', '50px', 'white', 'blue', 'Saludar');
botonSaludar.render();

class Input {
  constructor(parentID, placeholder, type) {
    this.parentID = parentID;
    this.placeholder = placeholder;
    this.type = type;
  }

  render() {
    let myApp = document.getElementById(this.parentID);
    myApp.innerHTML = `<input type=${this.type} placeholder=${this.placeholder}>`
  }
}

const myName = new Input('app', 'Name', 'text');
myName.render();