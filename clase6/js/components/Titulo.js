export default class Titulo {
  constructor(parentId, clase) {
    this.parentId = parentId;
    this.clase = clase;
  }

  render() {
     let myApp = document.getElementById(this.parentId);
     myApp.innerHTML = `<h1 class=${this.clase}>Renderizando Componente Video</h1>`
  } 
}