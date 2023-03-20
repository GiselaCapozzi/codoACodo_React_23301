import Video from "./components/Video.js";
import Titulo from "./components/Titulo.js";
import { source } from './datos.js';

let titulo = new Titulo('app', 'titulo');
titulo.render();

for (let i = 0; i <= source.length; i++) {
  if (source[i] !== undefined) {
    let video = new Video('app', '550px', '350px', source[i], 'autoplay', 'muted');
    video.render();
  }
}