class Button {
  constructor(parentId, ancho, alto, color, fondo, clase, texto, tamLetra) {
    this.parentId = parentId;
    this.ancho = ancho;
    this.alto = alto;
    this.color = color;
    this.fondo = fondo;
    this.clase = clase;
    this.texto = texto;
    this.tamLetra = tamLetra;
  }

  render() {
    let myApp = document.getElementById(this.parentId);
    let button = document.createElement('button');
    button.style.width = this.ancho;
    button.style.height = this.alto;
    button.style.color = this.color;
    button.style.backgroundColor = this.fondo;
    button.style.fontSize = this.tamLetra;
    button.className = this.clase;
    button.innerText = this.texto
    myApp.append(button);
  }
}

class Input {
  constructor(parentId, placeholder, type, text) {
    this.parentId = parentId;
    this.placeholder = placeholder;
    this.type = type;
    this.text = text;
  }

  render() {
    let myApp = document.getElementById(this.parentId);
    let input = document.createElement('input');
    input.setAttribute('class', 'busqueda');
    input.setAttribute('placeholder', this.placeholder);
    input.setAttribute('type', this.type);
    myApp.append(input);
  }
}
const textoBoton = ['Create', 'Read', 'Update', 'Delete'];

function filtrarBoton(text) {
  const inputBusqueda = new Input('app', 'Buscar...', 'text');
  inputBusqueda.render();
}

filtrarBoton();

function renderButton(text) {
  const boton = new Button('app', '120px', '70px', 'white', 'violet', 'boton', text, '18px');
  boton.render();
};

textoBoton.map(boton => renderButton(boton));