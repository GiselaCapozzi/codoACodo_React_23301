class Button {
  constructor(parentID, width, height, color, fondo, texto, clase) {
    this.parentID = parentID;
    this.width = width;
    this.height = height;
    this.color = color;
    this.fondo = fondo;
    this.texto = texto;
    this.clase = clase
  }

  render() {
    let myApp = document.getElementById(this.parentID);
    myApp.innerHTML = myApp.innerHTML + `<button class=${this.clase} style="width: ${this.width}; height: ${this.height}; color: ${this.color}; background-color: ${this.fondo}">${this.texto}</button>`;
  }
};

const botonSaludar = new Button("app", '150px', '50px', 'white', 'blue', 'Saludar', 'saludar', 'saludar');
botonSaludar.render();
const botonDanger = new Button('app', '120px', '70px', 'white', 'red', 'Cuidado!', 'cuidado', 'cuidado');
botonDanger.render();
class Input {
  constructor(parentID, placeholder, type) {
    this.parentID = parentID;
    this.placeholder = placeholder;
    this.type = type;
  }

  render() {
    let myApp = document.getElementById(this.parentID);
    myApp.innerHTML = myApp.innerHTML + `<input type=${this.type} placeholder=${this.placeholder}>`
  }
}

const myName = new Input('app', 'Name', 'text');
myName.render();

const fecha = new Input('app', null, 'date');
fecha.render();